
import React, { useState, useRef } from 'react';
import { generateMemorialConcept, editMemorialImage, analyzeMemorialImage, getCompassionateAdvice } from '../services/geminiService';

const MemorialAI: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'generate' | 'edit' | 'analyze' | 'chat'>('generate');
  const [prompt, setPrompt] = useState('');
  const [loading, setLoading] = useState(false);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [analysisText, setAnalysisText] = useState('');
  const [aspectRatio, setAspectRatio] = useState('1:1');
  const [imageSize, setImageSize] = useState('1K');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [usePro, setUsePro] = useState(false);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const ensureKeySelected = async () => {
    // Guideline: For Pro models (Nano Banana Pro / gemini-3-pro-image-preview), 
    // user MUST select a key.
    if (usePro) {
      const hasKey = await (window as any).aistudio.hasSelectedApiKey();
      if (!hasKey) {
        await (window as any).aistudio.openSelectKey();
        // Race condition mitigation: proceed after triggering dialog
        return true;
      }
    }
    return true;
  };

  const onGenerate = async () => {
    if (!prompt) return;
    setLoading(true);
    setResultImage(null);
    try {
      await ensureKeySelected();
      const img = await generateMemorialConcept(prompt, aspectRatio, imageSize, usePro);
      setResultImage(img);
    } catch (err: any) {
      if (err.message.includes("Requested entity was not found")) {
         await (window as any).aistudio.openSelectKey();
      } else {
         alert("Error generating image. Try selecting a different project/key.");
      }
    } finally {
      setLoading(false);
    }
  };

  const onEdit = async () => {
    if (!uploadedImage || !prompt) return;
    setLoading(true);
    try {
      const base64Data = uploadedImage.split(',')[1];
      const img = await editMemorialImage(base64Data, prompt);
      setResultImage(img);
    } catch (err) {
      alert("Error editing image.");
    } finally {
      setLoading(false);
    }
  };

  const onAnalyze = async () => {
    if (!uploadedImage) return;
    setLoading(true);
    setAnalysisText('');
    try {
      const base64Data = uploadedImage.split(',')[1];
      const res = await analyzeMemorialImage(base64Data, prompt || "Analyze this memorial image in detail.");
      setAnalysisText(res);
    } catch (err) {
      alert("Error analyzing image.");
    } finally {
      setLoading(false);
    }
  };

  const onChat = async () => {
    if (!prompt) return;
    setLoading(true);
    setAnalysisText('');
    try {
      const res = await getCompassionateAdvice(prompt);
      setAnalysisText(res);
    } catch (err) {
      alert("Error getting advice.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <span className="material-symbols-outlined text-primary text-5xl mb-4">auto_awesome</span>
        <h1 className="text-4xl font-black dark:text-white">CloverLeaf Memorial AI</h1>
        <p className="text-gray-500 mt-2">Personalized memorial concepts and expert guidance powered by Gemini.</p>
      </div>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {[
          { id: 'generate', label: 'Generate Concept', icon: 'image' },
          { id: 'edit', label: 'Edit Memorial', icon: 'edit' },
          { id: 'analyze', label: 'Analyze Photo', icon: 'document_scanner' },
          { id: 'chat', label: 'Compassionate Guide', icon: 'psychology_alt' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`px-6 py-3 rounded-xl flex items-center gap-2 font-bold transition-all ${
              activeTab === tab.id 
                ? 'bg-primary text-white shadow-xl shadow-primary/20 scale-105' 
                : 'bg-white dark:bg-surface-dark text-gray-600 dark:text-gray-400 border border-gray-100 dark:border-white/5'
            }`}
          >
            <span className="material-symbols-outlined">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white dark:bg-surface-dark p-8 rounded-3xl shadow-2xl border border-gray-100 dark:border-white/5">
        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-xl dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">prompt_suggestion</span>
                {activeTab === 'chat' ? 'Ask our Compassionate AI' : 'Provide your details'}
              </h3>
              {activeTab === 'generate' && (
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-white/5 px-3 py-1.5 rounded-full border border-gray-200 dark:border-white/10">
                   <span className="text-[10px] font-black uppercase tracking-widest opacity-60 dark:text-white">Pro Mode</span>
                   <button 
                     onClick={() => setUsePro(!usePro)}
                     className={`w-10 h-5 rounded-full relative transition-colors ${usePro ? 'bg-primary' : 'bg-gray-300'}`}
                   >
                     <div className={`absolute top-1 w-3 h-3 bg-white rounded-full transition-all ${usePro ? 'left-6' : 'left-1'}`}></div>
                   </button>
                </div>
              )}
            </div>
            
            {(activeTab === 'edit' || activeTab === 'analyze') && (
              <div 
                onClick={() => fileInputRef.current?.click()}
                className="w-full aspect-video rounded-2xl border-2 border-dashed border-gray-200 dark:border-white/10 flex flex-col items-center justify-center cursor-pointer hover:bg-gray-50 dark:hover:bg-white/5 transition-all relative overflow-hidden"
              >
                {uploadedImage ? (
                  <img src={uploadedImage} className="w-full h-full object-contain" alt="Upload" />
                ) : (
                  <>
                    <span className="material-symbols-outlined text-4xl text-gray-300">cloud_upload</span>
                    <p className="text-sm text-gray-400 mt-2">Click to upload image</p>
                  </>
                )}
                <input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleFileChange} />
              </div>
            )}

            <textarea
              className="w-full p-4 rounded-xl bg-background-light dark:bg-background-dark border-transparent focus:ring-primary focus:border-primary dark:text-white"
              rows={activeTab === 'chat' ? 6 : 4}
              placeholder={
                activeTab === 'generate' ? "Describe the memorial (e.g., A minimalist black granite headstone with a carved lily...)" :
                activeTab === 'edit' ? "What changes should be made? (e.g., Add a retro filter, remove background...)" :
                activeTab === 'analyze' ? "What do you want to know about this photo?" :
                "Ask anything about funeral arrangements or memorials..."
              }
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            ></textarea>

            {activeTab === 'generate' && (
              <div className="flex flex-wrap gap-4">
                <div className="flex-1 min-w-[150px]">
                  <label className="text-xs font-bold text-gray-400 block mb-1">Aspect Ratio</label>
                  <select 
                    value={aspectRatio} 
                    onChange={(e) => setAspectRatio(e.target.value)}
                    className="w-full h-10 rounded-lg bg-background-light dark:bg-background-dark border-transparent text-sm dark:text-white"
                  >
                    {['1:1', '3:2', '4:3', '16:9', '9:16', '3:4', '2:3'].map(r => <option key={r} value={r}>{r}</option>)}
                  </select>
                </div>
                {usePro && (
                  <div className="flex-1 min-w-[150px]">
                    <label className="text-xs font-bold text-gray-400 block mb-1">Quality Size (Pro Only)</label>
                    <select 
                      value={imageSize} 
                      onChange={(e) => setImageSize(e.target.value)}
                      className="w-full h-10 rounded-lg bg-background-light dark:bg-background-dark border-transparent text-sm dark:text-white"
                    >
                      {['1K', '2K', '4K'].map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                  </div>
                )}
              </div>
            )}

            {usePro && (
              <div className="bg-primary/5 p-4 rounded-xl border border-primary/20 flex gap-3">
                 <span className="material-symbols-outlined text-primary">info</span>
                 <p className="text-[11px] text-primary-dark font-medium leading-tight">
                   Pro Mode uses ultra high-definition models. You will be prompted to select a billing-enabled project via the Gemini API portal if you haven't already. 
                   <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" className="underline ml-1">Learn more</a>.
                 </p>
              </div>
            )}

            <button
              onClick={
                activeTab === 'generate' ? onGenerate : 
                activeTab === 'edit' ? onEdit : 
                activeTab === 'analyze' ? onAnalyze : 
                onChat
              }
              disabled={loading}
              className="w-full h-14 bg-primary hover:bg-primary-dark text-white font-bold rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {loading ? (
                <span className="animate-spin material-symbols-outlined">progress_activity</span>
              ) : (
                <>
                  <span className="material-symbols-outlined">
                    {activeTab === 'generate' ? 'brush' : activeTab === 'chat' ? 'send' : 'auto_awesome'}
                  </span>
                  {activeTab === 'generate' ? (usePro ? 'Generate Pro Concept' : 'Generate Concept') : 
                   activeTab === 'edit' ? 'Apply AI Edits' : 
                   activeTab === 'analyze' ? 'Analyze with Gemini' : 
                   'Get Expert Advice'}
                </>
              )}
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-6 h-full min-h-[400px]">
          <h3 className="font-bold text-xl dark:text-white flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">visibility</span>
            Result Preview
          </h3>
          <div className="flex-grow bg-background-light dark:bg-background-dark rounded-2xl border border-gray-100 dark:border-white/5 flex items-center justify-center overflow-auto p-4 min-h-[300px]">
            {resultImage ? (
              <img src={resultImage} className="max-w-full max-h-full rounded-lg shadow-xl" alt="AI Output" />
            ) : analysisText ? (
              <div className="text-sm dark:text-gray-300 leading-relaxed max-w-full prose dark:prose-invert">
                {analysisText.split('\n').map((line, i) => <p key={i} className="mb-2">{line}</p>)}
              </div>
            ) : (
              <div className="text-center text-gray-400">
                <span className="material-symbols-outlined text-6xl mb-2 opacity-20">sparkles</span>
                <p>Output will appear here</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemorialAI;
