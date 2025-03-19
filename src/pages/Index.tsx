
import React, { useState, useEffect } from 'react';
import CodeEditor from '@/components/CodeEditor';
import LanguageSelector from '@/components/LanguageSelector';
import CodeAnalyzer from '@/components/CodeAnalyzer';
import ResultsDisplay from '@/components/ResultsDisplay';
import Navbar from '@/components/Navbar';
import { SupportedLanguage, getLanguageSample } from '@/utils/languageUtils';
import { AnalysisResult } from '@/utils/codeAnalysis';

const Index = () => {
  const [language, setLanguage] = useState<SupportedLanguage>('javascript');
  const [code, setCode] = useState<string>('');
  const [analysis, setAnalysis] = useState<AnalysisResult | undefined>(undefined);
  
  useEffect(() => {
    setCode(getLanguageSample(language));
    setAnalysis(undefined);
  }, [language]);

  const handleLanguageChange = (newLanguage: SupportedLanguage) => {
    setLanguage(newLanguage);
  };
  
  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
    // Reset analysis when code changes
    if (analysis) {
      setAnalysis(undefined);
    }
  };
  
  const handleAnalysisComplete = (result: AnalysisResult) => {
    setAnalysis(result);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8 max-w-3xl mx-auto text-center animate-slide-down">
          <span className="inline-block px-3 py-1.5 rounded-full text-xs uppercase tracking-wide font-semibold bg-primary/10 text-primary mb-4">
            Code Quality Tool
          </span>
          <h1 className="text-4xl font-bold tracking-tight mb-3">Quality Maven</h1>
          <p className="text-xl text-muted-foreground">
            Analyze, optimize, and improve your code quality
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white/50 dark:bg-gray-950/50 backdrop-blur-md rounded-lg border border-border/50 p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Code Editor</h2>
                <LanguageSelector 
                  selectedLanguage={language} 
                  onLanguageChange={handleLanguageChange} 
                />
              </div>
              
              <CodeEditor 
                code={code}
                onChange={handleCodeChange}
                language={language}
              />
              
              <div className="mt-4">
                <CodeAnalyzer 
                  code={code}
                  language={language}
                  onAnalysisComplete={handleAnalysisComplete}
                />
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <ResultsDisplay 
              result={analysis}
              language={language}
            />
          </div>
        </div>
      </main>
      
      <footer className="border-t border-border/30 py-6 bg-secondary/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Quality Maven. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
