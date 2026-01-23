
import React, { useState, useEffect, useRef } from 'react';
import { GoogleGenAI, LiveServerMessage, Modality } from '@google/genai';

interface LiveSupportProps {
  onClose: () => void;
}

const LiveSupport: React.FC<LiveSupportProps> = ({ onClose }) => {
  const [isActive, setIsActive] = useState(false);
  const [status, setStatus] = useState('Connecting to counselor...');
  const [error, setError] = useState<string | null>(null);
  
  const audioContextInputRef = useRef<AudioContext | null>(null);
  const audioContextOutputRef = useRef<AudioContext | null>(null);
  const nextStartTimeRef = useRef(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());

  const decodeBase64 = (base64: string) => {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  };

  const decodeAudioData = async (data: Uint8Array, ctx: AudioContext) => {
    const dataInt16 = new Int16Array(data.buffer);
    const buffer = ctx.createBuffer(1, dataInt16.length, 24000);
    const channelData = buffer.getChannelData(0);
    for (let i = 0; i < dataInt16.length; i++) {
      channelData[i] = dataInt16[i] / 32768.0;
    }
    return buffer;
  };

  const encodePCM = (data: Float32Array) => {
    const int16 = new Int16Array(data.length);
    for (let i = 0; i < data.length; i++) {
      int16[i] = data[i] * 32768;
    }
    let binary = '';
    const bytes = new Uint8Array(int16.buffer);
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  };

  useEffect(() => {
    let session: any = null;
    let stream: MediaStream | null = null;

    const startSession = async () => {
      try {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
        audioContextInputRef.current = new AudioContext({ sampleRate: 16000 });
        audioContextOutputRef.current = new AudioContext({ sampleRate: 24000 });
        
        stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        
        const sessionPromise = ai.live.connect({
          model: 'gemini-2.5-flash-native-audio-preview-12-2025',
          callbacks: {
            onopen: () => {
              setIsActive(true);
              setStatus('Listening...');
              const source = audioContextInputRef.current!.createMediaStreamSource(stream!);
              const scriptProcessor = audioContextInputRef.current!.createScriptProcessor(4096, 1, 1);
              scriptProcessor.onaudioprocess = (e) => {
                const inputData = e.inputBuffer.getChannelData(0);
                const base64 = encodePCM(inputData);
                sessionPromise.then(s => s.sendRealtimeInput({
                  media: { data: base64, mimeType: 'audio/pcm;rate=16000' }
                }));
              };
              source.connect(scriptProcessor);
              scriptProcessor.connect(audioContextInputRef.current!.destination);
            },
            onmessage: async (msg: LiveServerMessage) => {
              const audioBase64 = msg.serverContent?.modelTurn?.parts[0]?.inlineData?.data;
              if (audioBase64 && audioContextOutputRef.current) {
                const ctx = audioContextOutputRef.current;
                nextStartTimeRef.current = Math.max(nextStartTimeRef.current, ctx.currentTime);
                const buffer = await decodeAudioData(decodeBase64(audioBase64), ctx);
                const source = ctx.createBufferSource();
                source.buffer = buffer;
                source.connect(ctx.destination);
                source.onended = () => sourcesRef.current.delete(source);
                source.start(nextStartTimeRef.current);
                nextStartTimeRef.current += buffer.duration;
                sourcesRef.current.add(source);
                setStatus('Speaking...');
              }
              if (msg.serverContent?.interrupted) {
                sourcesRef.current.forEach(s => s.stop());
                sourcesRef.current.clear();
                nextStartTimeRef.current = 0;
              }
              if (msg.serverContent?.turnComplete) {
                setStatus('Listening...');
              }
            },
            onerror: (err) => {
              console.error(err);
              setError('Connection interrupted. Please try again.');
            },
            onclose: () => setIsActive(false)
          },
          config: {
            responseModalities: [Modality.AUDIO],
            speechConfig: { voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Kore' } } },
            systemInstruction: "You are a highly compassionate and professional grief counselor at CloverLeaf. Your tone is soft, respectful, and supportive. You listen more than you speak. Help users with immediate emotional support or funeral arrangement questions."
          }
        });

        session = await sessionPromise;
      } catch (err) {
        setError('Could not access microphone or connect to service.');
      }
    };

    startSession();

    return () => {
      if (session) session.close();
      if (stream) stream.getTracks().forEach(t => t.stop());
      if (audioContextInputRef.current) audioContextInputRef.current.close();
      if (audioContextOutputRef.current) audioContextOutputRef.current.close();
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-white dark:bg-surface-dark w-full max-w-md rounded-3xl shadow-2xl overflow-hidden animate-fade-in">
        <div className="bg-primary p-8 text-center text-white relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors">
            <span className="material-symbols-outlined">close</span>
          </button>
          <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 relative">
            <span className="material-symbols-outlined text-4xl">support_agent</span>
            {isActive && (
              <span className="absolute inset-0 rounded-full border-4 border-white animate-ping opacity-25"></span>
            )}
          </div>
          <h2 className="text-2xl font-bold">Live Assistance</h2>
          <p className="text-white/80 text-sm mt-1">Grief Support & Arrangements</p>
        </div>

        <div className="p-10 text-center">
          {error ? (
            <div className="text-red-500 mb-6">
              <span className="material-symbols-outlined text-4xl mb-2">error</span>
              <p className="font-medium">{error}</p>
              <button onClick={onClose} className="mt-4 px-6 py-2 bg-gray-100 dark:bg-white/10 rounded-lg text-sm font-bold">Close</button>
            </div>
          ) : (
            <>
              <div className="flex justify-center gap-1 mb-8 h-12 items-center">
                {[...Array(isActive ? 12 : 3)].map((_, i) => (
                  <div 
                    key={i} 
                    className={`w-1 bg-primary rounded-full transition-all duration-300 ${isActive ? 'animate-pulse' : 'opacity-20'}`}
                    style={{ height: isActive ? `${Math.random() * 100}%` : '20%', animationDelay: `${i * 0.1}s` }}
                  ></div>
                ))}
              </div>
              <p className="text-lg font-medium text-gray-700 dark:text-gray-200 mb-2">{status}</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 max-w-[250px] mx-auto">
                {isActive ? "You are speaking with our compassionate advisor. They are here to listen." : "Preparing your session..."}
              </p>
              
              <button 
                onClick={onClose}
                className="mt-12 w-full h-12 border-2 border-red-500/20 text-red-500 hover:bg-red-500 hover:text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2"
              >
                <span className="material-symbols-outlined text-xl">call_end</span>
                End Session
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveSupport;
