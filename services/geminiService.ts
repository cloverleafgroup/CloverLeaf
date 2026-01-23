
import { GoogleGenAI, Type, GenerateContentResponse, Modality } from "@google/genai";

// Guideline: Create instance right before call for most up-to-date key
const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const analyzeMemorialImage = async (base64Image: string, prompt: string): Promise<string> => {
  const ai = getAI();
  const imagePart = {
    inlineData: {
      mimeType: 'image/jpeg',
      data: base64Image,
    },
  };
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: { parts: [imagePart, { text: prompt }] },
    config: {
        thinkingConfig: { thinkingBudget: 32768 }
    }
  });
  return response.text || "Could not analyze the image.";
};

export const generateMemorialConcept = async (prompt: string, aspectRatio: string = "1:1", imageSize: string = "1K", usePro: boolean = false): Promise<string> => {
  const ai = getAI();
  const model = usePro ? 'gemini-3-pro-image-preview' : 'gemini-2.5-flash-image';
  
  const response = await ai.models.generateContent({
    model: model,
    contents: { parts: [{ text: `High quality funeral memorial concept, elegant, professional granite/marble craft: ${prompt}` }] },
    config: {
      imageConfig: {
        aspectRatio: aspectRatio as any,
        ...(usePro ? { imageSize: imageSize as any } : {})
      }
    }
  });

  for (const part of response.candidates[0].content.parts) {
    if (part.inlineData) {
      return `data:image/png;base64,${part.inlineData.data}`;
    }
  }
  throw new Error("Failed to generate image.");
};

export const editMemorialImage = async (base64Image: string, editPrompt: string): Promise<string> => {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            inlineData: {
              data: base64Image,
              mimeType: 'image/jpeg',
            },
          },
          { text: editPrompt },
        ],
      },
    });

    for (const part of response.candidates[0].content.parts) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    throw new Error("Failed to edit image.");
};

export const getCompassionateAdvice = async (userQuery: string): Promise<string> => {
  const ai = getAI();
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-preview',
    contents: userQuery,
    config: {
      systemInstruction: "You are a highly compassionate and professional funeral director at CloverLeaf. Your tone is empathetic, respectful, and clear. Help the user with their questions about loss, arrangements, or memorials.",
      thinkingConfig: { thinkingBudget: 20000 }
    }
  });
  return response.text || "I am here to help you through this difficult time. Please ask your question.";
};
