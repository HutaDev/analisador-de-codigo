
import React, { useState } from 'react';
import { AlertCircle, CheckCircle, Info, Copy, ClipboardCheck } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { AnalysisResult, CodeIssue } from '@/utils/codeAnalysis';
import { SupportedLanguage } from '@/utils/languageUtils';

interface ExibicaoResultadosProps {
  resultado?: AnalysisResult;
  linguagem: SupportedLanguage;
}

const ExibicaoResultados: React.FC<ExibicaoResultadosProps> = ({ resultado, linguagem }) => {
  const [copiado, setCopiado] = useState(false);
  
  if (!resultado) {
    return (
      <div className="flex flex-col items-center justify-center py-12 px-4 text-center bg-secondary/30 rounded-lg border border-border/50 backdrop-blur-sm">
        <Info className="h-12 w-12 text-muted-foreground mb-4" />
        <h3 className="text-lg font-medium">Resultados da Análise</h3>
        <p className="text-muted-foreground mt-2">
          Clique em "Analisar Código" para verificar a qualidade do seu código e obter sugestões de melhorias.
        </p>
      </div>
    );
  }
  
  const { issues, metrics, suggestions, score } = resultado;
  
  const obterCorPontuacao = (pontuacao: number) => {
    if (pontuacao >= 80) return 'text-green-500';
    if (pontuacao >= 60) return 'text-amber-500';
    return 'text-red-500';
  };
  
  const obterAnelPontuacao = (pontuacao: number) => {
    if (pontuacao >= 80) return 'ring-green-500';
    if (pontuacao >= 60) return 'ring-amber-500';
    return 'ring-red-500';
  };
  
  const copiarRelatorio = async () => {
    if (!resultado) return;
    
    const textoRelatorio = `
RELATÓRIO DE QUALIDADE DE CÓDIGO

Linguagem: ${linguagem.toUpperCase()}
Pontuação de Qualidade: ${score}/100
Linhas de Código: ${metrics.linesOfCode}
Complexidade: ${metrics.complexity}/10
Manutenibilidade: ${metrics.maintainability}/100

PROBLEMAS ENCONTRADOS:
${issues.length > 0 
  ? issues.map(issue => `- ${issue.severity.toUpperCase()} Linha ${issue.line}: ${issue.message}`).join('\n')
  : '- Nenhum problema encontrado. Ótimo trabalho!'}

SUGESTÕES DE MELHORIA:
${suggestions.map(suggestion => `- ${suggestion}`).join('\n')}

Gerado por HutaDev Analisador
`;
    
    try {
      await navigator.clipboard.writeText(textoRelatorio);
      setCopiado(true);
      setTimeout(() => setCopiado(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar relatório para a área de transferência:', err);
    }
  };
  
  return (
    <div className="rounded-lg glass-card overflow-hidden animate-scale-in">
      <div className="p-4 md:p-6">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <div className={cn(
              "flex items-center justify-center w-16 h-16 rounded-full bg-background ring-4",
              obterAnelPontuacao(score)
            )}>
              <span className={cn("text-xl font-bold", obterCorPontuacao(score))}>
                {score}
              </span>
            </div>
            <div>
              <h3 className="text-lg font-semibold">Pontuação de Qualidade</h3>
              <p className="text-sm text-muted-foreground">
                Baseada em problemas, métricas e boas práticas
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="text-center px-3 py-2">
              <p className="text-xl font-semibold">{metrics.linesOfCode}</p>
              <p className="text-xs text-muted-foreground">Linhas</p>
            </div>
            <div className="text-center px-3 py-2">
              <p className="text-xl font-semibold">{metrics.complexity}/10</p>
              <p className="text-xs text-muted-foreground">Complexidade</p>
            </div>
            <div className="text-center px-3 py-2">
              <p className="text-xl font-semibold">{metrics.maintainability}/100</p>
              <p className="text-xs text-muted-foreground">Manutenibilidade</p>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="issues" className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-secondary/30">
            <TabsTrigger value="issues">Problemas</TabsTrigger>
            <TabsTrigger value="suggestions">Sugestões</TabsTrigger>
            <TabsTrigger value="report">Relatório</TabsTrigger>
          </TabsList>
          
          <TabsContent value="issues" className="mt-4 max-h-64 overflow-y-auto p-2">
            {issues.length > 0 ? (
              <ul className="space-y-3">
                {issues.map((issue, index) => (
                  <ItemProblema key={index} problema={issue} />
                ))}
              </ul>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 px-4 text-center">
                <CheckCircle className="h-10 w-10 text-green-500 mb-3" />
                <p className="font-medium">Nenhum problema encontrado. Ótimo trabalho!</p>
              </div>
            )}
          </TabsContent>
          
          <TabsContent value="suggestions" className="mt-4 max-h-64 overflow-y-auto p-2">
            <ul className="space-y-3">
              {suggestions.map((suggestion, index) => (
                <li 
                  key={index}
                  className="flex items-start p-3 rounded-md bg-secondary/40"
                >
                  <Info className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                  <span>{suggestion}</span>
                </li>
              ))}
            </ul>
          </TabsContent>
          
          <TabsContent value="report" className="mt-4 relative">
            <div className="absolute top-0 right-0 p-2">
              <button
                onClick={copiarRelatorio}
                className="flex items-center space-x-1 px-2 py-1 rounded-md text-xs bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
              >
                {copiado ? (
                  <ClipboardCheck className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                <span>{copiado ? 'Copiado!' : 'Copiar'}</span>
              </button>
            </div>
            
            <div className="font-mono text-xs leading-relaxed bg-secondary/40 p-4 rounded-md overflow-x-auto max-h-64 overflow-y-auto">
              <p className="font-bold mb-2">RELATÓRIO DE QUALIDADE DE CÓDIGO</p>
              <p className="mb-4">
                Linguagem: {linguagem.toUpperCase()}<br />
                Pontuação de Qualidade: {score}/100<br />
                Linhas de Código: {metrics.linesOfCode}<br />
                Complexidade: {metrics.complexity}/10<br />
                Manutenibilidade: {metrics.maintainability}/100
              </p>
              
              <p className="font-bold mb-1">PROBLEMAS ENCONTRADOS:</p>
              {issues.length > 0 ? (
                <ul className="mb-4 pl-4">
                  {issues.map((issue, index) => (
                    <li key={index}>
                      - {issue.severity.toUpperCase()} Linha {issue.line}: {issue.message}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="mb-4 pl-4">- Nenhum problema encontrado. Ótimo trabalho!</p>
              )}
              
              <p className="font-bold mb-1">SUGESTÕES DE MELHORIA:</p>
              <ul className="pl-4">
                {suggestions.map((suggestion, index) => (
                  <li key={index}>- {suggestion}</li>
                ))}
              </ul>
              
              <p className="mt-4 text-muted-foreground">Gerado por HutaDev Analisador</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

const ItemProblema: React.FC<{ problema: CodeIssue }> = ({ problema }) => {
  const obterIconeGravidade = (gravidade: string) => {
    switch (gravidade) {
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500 mr-3 flex-shrink-0" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-amber-500 mr-3 flex-shrink-0" />;
      default:
        return <Info className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />;
    }
  };
  
  return (
    <li className="flex items-start p-3 rounded-md bg-secondary/40">
      {obterIconeGravidade(problema.severity)}
      <div>
        <div className="flex items-center space-x-2">
          <span className="text-xs bg-secondary/80 px-1.5 py-0.5 rounded text-muted-foreground">
            Linha {problema.line}
          </span>
          <span className="text-xs bg-secondary/80 px-1.5 py-0.5 rounded text-muted-foreground">
            {problema.code}
          </span>
        </div>
        <p className="mt-1">{problema.message}</p>
      </div>
    </li>
  );
};

export default ExibicaoResultados;
