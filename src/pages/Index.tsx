
import React, { useState, useEffect } from 'react';
import EditorCodigo from '@/components/CodeEditor';
import SeletorLinguagem from '@/components/LanguageSelector';
import AnalisadorCodigo from '@/components/CodeAnalyzer';
import ExibicaoResultados from '@/components/ResultsDisplay';
import Navbar from '@/components/Navbar';
import { SupportedLanguage, getLanguageSample } from '@/utils/languageUtils';
import { AnalysisResult } from '@/utils/codeAnalysis';
import { Helmet } from 'react-helmet-async';

const Inicio = () => {
  const [linguagem, setLinguagem] = useState<SupportedLanguage>('javascript');
  const [codigo, setCodigo] = useState<string>('');
  const [analise, setAnalise] = useState<AnalysisResult | undefined>(undefined);
  
  useEffect(() => {
    setCodigo(getLanguageSample(linguagem));
    setAnalise(undefined);
  }, [linguagem]);

  const aoMudarLinguagem = (novaLinguagem: SupportedLanguage) => {
    setLinguagem(novaLinguagem);
  };
  
  const aoMudarCodigo = (novoCodigo: string) => {
    setCodigo(novoCodigo);
    // Resetar análise quando o código mudar
    if (analise) {
      setAnalise(undefined);
    }
  };
  
  const aoAnaliseCompleta = (resultado: AnalysisResult) => {
    setAnalise(resultado);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>HutaDev Analisador de Código | Melhore a qualidade do seu código</title>
        <meta name="description" content="Ferramenta de análise de qualidade de código da HutaDev. Analise, otimize e melhore seu código HTML, CSS, JavaScript, Java, C++, C# e Python." />
        <meta name="keywords" content="análise de código, qualidade de código, HutaDev, ferramentas para desenvolvedores, JavaScript, HTML, CSS, Java, Python" />
        <meta property="og:title" content="HutaDev Analisador de Código" />
        <meta property="og:description" content="Analise e melhore a qualidade do seu código com a ferramenta de análise da HutaDev." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://analisador.hutadev.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="HutaDev Analisador de Código" />
        <meta name="twitter:description" content="Analise e melhore a qualidade do seu código com a ferramenta de análise da HutaDev." />
        <link rel="canonical" href="https://analisador.hutadev.com" />
      </Helmet>
      
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="mb-8 max-w-3xl mx-auto text-center animate-slide-down">
          <span className="inline-block px-3 py-1.5 rounded-full text-xs uppercase tracking-wide font-semibold bg-primary/10 text-primary mb-4">
            Ferramenta de Qualidade de Código
          </span>
          <h1 className="text-4xl font-bold tracking-tight mb-3">HutaDev Analisador</h1>
          <p className="text-xl text-muted-foreground">
            Analise, otimize e melhore a qualidade do seu código
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white/50 dark:bg-gray-950/50 backdrop-blur-md rounded-lg border border-border/50 p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-semibold">Editor de Código</h2>
                <SeletorLinguagem 
                  linguagemSelecionada={linguagem} 
                  aoMudarLinguagem={aoMudarLinguagem} 
                />
              </div>
              
              <EditorCodigo 
                codigo={codigo}
                aoMudar={aoMudarCodigo}
                linguagem={linguagem}
              />
              
              <div className="mt-4">
                <AnalisadorCodigo 
                  codigo={codigo}
                  linguagem={linguagem}
                  aoAnaliseCompleta={aoAnaliseCompleta}
                />
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <ExibicaoResultados 
              resultado={analise}
              linguagem={linguagem}
            />
          </div>
        </div>
      </main>
      
      <footer className="border-t border-border/30 py-6 bg-secondary/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} HutaDev Analisador. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Inicio;
