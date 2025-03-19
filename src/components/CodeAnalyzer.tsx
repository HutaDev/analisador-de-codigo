
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AnalysisResult, analyzeCode } from '@/utils/codeAnalysis';
import { SupportedLanguage } from '@/utils/languageUtils';
import { Sparkles } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface CodeAnalyzerProps {
  code: string;
  language: SupportedLanguage;
  onAnalysisComplete: (result: AnalysisResult) => void;
}

const CodeAnalyzer: React.FC<CodeAnalyzerProps> = ({ 
  code, 
  language, 
  onAnalysisComplete 
}) => {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();

  const handleAnalyze = async () => {
    if (!code.trim()) {
      toast({
        title: "Empty code",
        description: "Please enter some code to analyze",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulating analysis delay for UX purposes
    setTimeout(() => {
      try {
        const result = analyzeCode(code, language);
        onAnalysisComplete(result);
        
        toast({
          title: "Analysis complete",
          description: `Found ${result.issues.length} issues with a score of ${result.score}/100`,
        });
      } catch (error) {
        toast({
          title: "Analysis failed",
          description: "There was an error analyzing your code",
          variant: "destructive",
        });
        console.error("Analysis error:", error);
      } finally {
        setIsAnalyzing(false);
      }
    }, 1500);
  };

  return (
    <Button 
      onClick={handleAnalyze} 
      className="w-full flex items-center justify-center bg-primary/90 hover:bg-primary transition-all text-white"
      disabled={isAnalyzing}
    >
      {isAnalyzing ? (
        <>
          <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Analyzing...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Analyze Code
        </>
      )}
    </Button>
  );
};

export default CodeAnalyzer;
