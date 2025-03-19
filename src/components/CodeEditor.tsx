
import React, { useState, useEffect, useRef } from 'react';
import { SupportedLanguage, getLanguageSample } from '@/utils/languageUtils';

interface CodeEditorProps {
  code: string;
  onChange: (code: string) => void;
  language: SupportedLanguage;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ code, onChange, language }) => {
  const editorRef = useRef<HTMLTextAreaElement>(null);
  const [lineNumbers, setLineNumbers] = useState<number[]>([]);

  useEffect(() => {
    const lines = code.split('\n').length;
    setLineNumbers(Array.from({ length: lines }, (_, i) => i + 1));
  }, [code]);

  // Handle tab key for indentation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      
      const newValue = code.substring(0, start) + '  ' + code.substring(end);
      onChange(newValue);
      
      // Set the cursor position after the inserted tab
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 2;
      }, 0);
    }
  };

  const handleScroll = (e: React.UIEvent<HTMLTextAreaElement>) => {
    if (editorRef.current && e.currentTarget) {
      const lineNumbers = document.querySelector('.line-numbers');
      if (lineNumbers) {
        lineNumbers.scrollTop = e.currentTarget.scrollTop;
      }
    }
  };

  return (
    <div className="relative overflow-hidden rounded-lg border border-border/50 bg-secondary/30 backdrop-blur-sm group transition-all duration-300 hover:border-border/80 focus-within:border-primary/50">
      <div className="flex overflow-hidden">
        <div className="line-numbers select-none bg-secondary/50 text-muted-foreground/70 px-2 py-3 text-xs text-right overflow-y-hidden">
          {lineNumbers.map((num) => (
            <div key={num} className="h-6 leading-6">
              {num}
            </div>
          ))}
        </div>
        <textarea
          ref={editorRef}
          value={code}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          onScroll={handleScroll}
          spellCheck={false}
          className="flex-1 font-mono text-sm p-3 bg-transparent outline-none min-h-[300px] w-full resize-none overflow-auto"
          placeholder={`Enter your ${language} code here...`}
        />
      </div>
      <div className="absolute bottom-2 right-2 flex items-center space-x-2 text-xs text-muted-foreground opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        <span>{lineNumbers.length} lines</span>
        <span>|</span>
        <span>{language.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default CodeEditor;
