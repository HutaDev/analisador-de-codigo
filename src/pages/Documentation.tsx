
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/utils/languageContext';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code2, FileText, FileCode } from 'lucide-react';

const PaginaDocumentacao = () => {
  const { t } = useLanguage();
  const [tabAtiva, setTabAtiva] = useState('intro');

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Documentação | Analisador de Código Huta</title>
        <meta name="description" content="Documentação completa do Analisador de Código Huta. Aprenda a utilizar todas as funcionalidades de nossa ferramenta de análise de código." />
        <link rel="canonical" href="https://analisador.hutadev.com/documentacao" />
      </Helmet>
      
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Documentação</h1>
          <p className="text-lg text-muted-foreground mb-8">Guia completo do Analisador de Código Huta</p>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Navegação lateral */}
            <div className="w-full md:w-64 shrink-0">
              <div className="sticky top-24 space-y-1">
                <button 
                  onClick={() => setTabAtiva('intro')}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                    tabAtiva === 'intro' 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  Introdução
                </button>
                
                <button 
                  onClick={() => setTabAtiva('usage')}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                    tabAtiva === 'usage' 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  <Code2 className="mr-2 h-4 w-4" />
                  Como Usar
                </button>
                
                <button 
                  onClick={() => setTabAtiva('languages')}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                    tabAtiva === 'languages' 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  <FileCode className="mr-2 h-4 w-4" />
                  Linguagens Suportadas
                </button>
                
                <button 
                  onClick={() => setTabAtiva('metrics')}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                    tabAtiva === 'metrics' 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                  </svg>
                  Métricas e Pontuação
                </button>
                
                <button 
                  onClick={() => setTabAtiva('examples')}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm font-medium flex items-center ${
                    tabAtiva === 'examples' 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-4 w-4">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
                    <polyline points="14 2 14 8 20 8"/>
                    <path d="M12 18v-6"/>
                    <path d="M8 18v-1"/>
                    <path d="M16 18v-3"/>
                  </svg>
                  Exemplos
                </button>
              </div>
            </div>
            
            {/* Conteúdo principal */}
            <div className="flex-1">
              {tabAtiva === 'intro' && (
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <h2>Introdução ao Analisador de Código Huta</h2>
                  <p>
                    O Analisador de Código Huta é uma ferramenta avançada desenvolvida pela HutaDev para auxiliar desenvolvedores 
                    a melhorar a qualidade de seu código. Nossa ferramenta analisa seu código em tempo real, identificando 
                    problemas e fornecendo recomendações baseadas em práticas modernas de desenvolvimento de software.
                  </p>
                  
                  <h3>O que nossa ferramenta analisa:</h3>
                  <ul>
                    <li><strong>Performance</strong> - Detecta gargalos e sugere otimizações</li>
                    <li><strong>Acessibilidade</strong> - Verifica conformidade com padrões de acessibilidade</li>
                    <li><strong>Boas Práticas</strong> - Identifica padrões de código recomendados</li>
                    <li><strong>SEO</strong> - Analisa elementos importantes para motores de busca</li>
                    <li><strong>Código Limpo</strong> - Baseado nos princípios do livro "Código Limpo" de Robert C. Martin</li>
                  </ul>
                  
                  <p>
                    Nossa análise fornece não apenas uma lista de problemas, mas também explicações educativas 
                    e sugestões de melhoria, tornando-a uma valiosa ferramenta de aprendizado para desenvolvedores 
                    de todos os níveis.
                  </p>
                </div>
              )}
              
              {tabAtiva === 'usage' && (
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <h2>Como Usar o Analisador</h2>
                  
                  <h3>Guia Rápido</h3>
                  <ol>
                    <li>Selecione a linguagem de programação no menu suspenso</li>
                    <li>Cole ou digite seu código no editor</li>
                    <li>Clique no botão "Analisar Código"</li>
                    <li>Revise os resultados da análise na seção de resultados</li>
                  </ol>
                  
                  <h3>Detalhes da Interface</h3>
                  <p>
                    O editor de código oferece destaque de sintaxe para facilitar a leitura. Você pode escrever 
                    diretamente no editor ou colar código de suas aplicações.
                  </p>
                  
                  <p>
                    Os resultados da análise são divididos em três abas:
                  </p>
                  <ul>
                    <li><strong>Problemas</strong> - Lista de problemas encontrados, categorizados por tipo e severidade</li>
                    <li><strong>Sugestões</strong> - Recomendações específicas para melhorar seu código</li>
                    <li><strong>Relatório</strong> - Resumo completo da análise, que pode ser copiado para seu clipboard</li>
                  </ul>
                  
                  <h3>Dicas de Uso</h3>
                  <ul>
                    <li>Analise pequenos trechos de código por vez para resultados mais focados</li>
                    <li>Use o relatório para documentar o progresso em revisões de código</li>
                    <li>Compare pontuações antes e depois das alterações para medir melhorias</li>
                  </ul>
                </div>
              )}
              
              {tabAtiva === 'languages' && (
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <h2>Linguagens Suportadas</h2>
                  <p>
                    Atualmente, o Analisador de Código Huta suporta as seguintes linguagens de programação:
                  </p>
                  
                  <Tabs defaultValue="frontend">
                    <TabsList>
                      <TabsTrigger value="frontend">Frontend</TabsTrigger>
                      <TabsTrigger value="backend">Backend</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="frontend" className="mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                          <h3 className="text-lg font-medium mb-2">HTML</h3>
                          <p className="text-sm text-muted-foreground">
                            Analisa estrutura semântica, acessibilidade e boas práticas de marcação.
                          </p>
                          <div className="mt-2 bg-secondary/30 p-2 rounded text-xs font-mono">
                            &lt;!DOCTYPE html&gt;<br />
                            &lt;html lang="pt"&gt;<br />
                            &nbsp;&nbsp;&lt;head&gt;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;title&gt;Exemplo&lt;/title&gt;<br />
                            &nbsp;&nbsp;&lt;/head&gt;<br />
                            &nbsp;&nbsp;&lt;body&gt;<br />
                            &nbsp;&nbsp;&nbsp;&nbsp;&lt;h1&gt;Olá Mundo&lt;/h1&gt;<br />
                            &nbsp;&nbsp;&lt;/body&gt;<br />
                            &lt;/html&gt;
                          </div>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <h3 className="text-lg font-medium mb-2">CSS</h3>
                          <p className="text-sm text-muted-foreground">
                            Verifica eficiência, organização e padrões modernos de estilização.
                          </p>
                          <div className="mt-2 bg-secondary/30 p-2 rounded text-xs font-mono">
                            body {'{'}
                            <br />&nbsp;&nbsp;font-family: sans-serif;
                            <br />&nbsp;&nbsp;margin: 0;
                            <br />&nbsp;&nbsp;padding: 20px;
                            <br />{'}'}
                            <br />
                            <br />h1 {'{'}
                            <br />&nbsp;&nbsp;color: #333;
                            <br />{'}'}
                          </div>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <h3 className="text-lg font-medium mb-2">JavaScript</h3>
                          <p className="text-sm text-muted-foreground">
                            Analisa performance, práticas modernas e padrões de código limpo.
                          </p>
                          <div className="mt-2 bg-secondary/30 p-2 rounded text-xs font-mono">
                            function calcularFatorial(n) {'{'}
                            <br />&nbsp;&nbsp;if (n <= 1) return 1;
                            <br />&nbsp;&nbsp;return n * calcularFatorial(n - 1);
                            <br />{'}'}
                            <br />
                            <br />console.log(calcularFatorial(5));
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                    
                    <TabsContent value="backend" className="mt-4">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="border rounded-lg p-4">
                          <h3 className="text-lg font-medium mb-2">Python</h3>
                          <p className="text-sm text-muted-foreground">
                            Verifica estilo PEP8, boas práticas e eficiência de código.
                          </p>
                          <div className="mt-2 bg-secondary/30 p-2 rounded text-xs font-mono">
                            def fatorial(n):
                            <br />&nbsp;&nbsp;if n <= 1:
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;return 1
                            <br />&nbsp;&nbsp;return n * fatorial(n - 1)
                            <br />
                            <br />print(fatorial(5))
                          </div>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <h3 className="text-lg font-medium mb-2">Java</h3>
                          <p className="text-sm text-muted-foreground">
                            Analisa padrões OOP, convenções de nomenclatura e boas práticas.
                          </p>
                          <div className="mt-2 bg-secondary/30 p-2 rounded text-xs font-mono">
                            public class Exemplo {'{'}
                            <br />&nbsp;&nbsp;public static int fatorial(int n) {'{'}
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;if (n <= 1) return 1;
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;return n * fatorial(n - 1);
                            <br />&nbsp;&nbsp;{'}'}
                            <br />
                            <br />&nbsp;&nbsp;public static void main(String[] args) {'{'}
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;System.out.println(fatorial(5));
                            <br />&nbsp;&nbsp;{'}'}
                            <br />{'}'}
                          </div>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <h3 className="text-lg font-medium mb-2">C#</h3>
                          <p className="text-sm text-muted-foreground">
                            Verifica convenções .NET, padrões de design e práticas de codificação.
                          </p>
                          <div className="mt-2 bg-secondary/30 p-2 rounded text-xs font-mono">
                            using System;
                            <br />
                            <br />class Programa {'{'}
                            <br />&nbsp;&nbsp;static int Fatorial(int n) {'{'}
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;if (n <= 1) return 1;
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;return n * Fatorial(n - 1);
                            <br />&nbsp;&nbsp;{'}'}
                            <br />
                            <br />&nbsp;&nbsp;static void Main() {'{'}
                            <br />&nbsp;&nbsp;&nbsp;&nbsp;Console.WriteLine(Fatorial(5));
                            <br />&nbsp;&nbsp;{'}'}
                            <br />{'}'}
                          </div>
                        </div>
                        
                        <div className="border rounded-lg p-4">
                          <h3 className="text-lg font-medium mb-2">C++</h3>
                          <p className="text-sm text-muted-foreground">
                            Analisa eficiência, gerenciamento de memória e padrões modernos de C++.
                          </p>
                          <div className="mt-2 bg-secondary/30 p-2 rounded text-xs font-mono">
                            #include &lt;iostream&gt;
                            <br />
                            <br />int fatorial(int n) {'{'}
                            <br />&nbsp;&nbsp;if (n <= 1) return 1;
                            <br />&nbsp;&nbsp;return n * fatorial(n - 1);
                            <br />{'}'}
                            <br />
                            <br />int main() {'{'}
                            <br />&nbsp;&nbsp;std::cout &lt;&lt; fatorial(5);
                            <br />&nbsp;&nbsp;return 0;
                            <br />{'}'}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              )}
              
              {tabAtiva === 'metrics' && (
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <h2>Métricas e Pontuação</h2>
                  
                  <p>
                    O Analisador de Código Huta utiliza um sistema abrangente de métricas para avaliar 
                    a qualidade do código. Cada análise resulta em uma pontuação global e pontuações 
                    específicas para diferentes categorias.
                  </p>
                  
                  <h3>Categorias de Análise</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 not-prose">
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-yellow-500">
                          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                        </svg>
                        <h4 className="text-lg font-medium">Performance (20%)</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Avalia a eficiência do código, identificando operações que podem causar lentidão ou uso excessivo de recursos.
                      </p>
                      <ul className="mt-2 text-sm space-y-1">
                        <li className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          Uso eficiente de loops e iterações
                        </li>
                        <li className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          Minimização de operações DOM
                        </li>
                        <li className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          Otimização de algoritmos
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-blue-500">
                          <circle cx="12" cy="12" r="10"/>
                          <circle cx="12" cy="12" r="4"/>
                          <line x1="4.93" y1="4.93" x2="9.17" y2="9.17"/>
                          <line x1="14.83" y1="14.83" x2="19.07" y2="19.07"/>
                          <line x1="14.83" y1="9.17" x2="19.07" y2="4.93"/>
                          <line x1="14.83" y1="9.17" x2="18.36" y2="5.64"/>
                          <line x1="4.93" y1="19.07" x2="9.17" y2="14.83"/>
                        </svg>
                        <h4 className="text-lg font-medium">Acessibilidade (20%)</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Verifica se o código segue padrões de acessibilidade, garantindo que o conteúdo seja acessível a todos os usuários.
                      </p>
                      <ul className="mt-2 text-sm space-y-1">
                        <li className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          Uso adequado de atributos ARIA
                        </li>
                        <li className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          Contraste de cores suficiente
                        </li>
                        <li className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          Textos alternativos para imagens
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-purple-500">
                          <path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"/>
                          <path d="M10 2c1 .5 2 2 2 5"/>
                        </svg>
                        <h4 className="text-lg font-medium">Boas Práticas (20%)</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Avalia se o código segue convenções estabelecidas e padrões recomendados pela indústria.
                      </p>
                      <ul className="mt-2 text-sm space-y-1">
                        <li className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          Uso de nomenclatura consistente
                        </li>
                        <li className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          Estrutura de código organizada
                        </li>
                        <li className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          Tratamento adequado de erros
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-green-500">
                          <circle cx="11" cy="11" r="8"/>
                          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                        </svg>
                        <h4 className="text-lg font-medium">SEO (15%)</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Verifica elementos que afetam a otimização para motores de busca (relevante para HTML).
                      </p>
                      <ul className="mt-2 text-sm space-y-1">
                        <li className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          Estrutura de cabeçalhos adequada
                        </li>
                        <li className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          Meta tags corretamente implementadas
                        </li>
                        <li className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          Uso semântico de elementos HTML
                        </li>
                      </ul>
                    </div>
                    
                    <div className="border rounded-lg p-4 md:col-span-2">
                      <div className="flex items-center gap-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5 text-indigo-500">
                          <polyline points="16 18 22 12 16 6"/>
                          <polyline points="8 6 2 12 8 18"/>
                        </svg>
                        <h4 className="text-lg font-medium">Código Limpo (25%)</h4>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Baseado nos princípios do livro "Código Limpo" de Robert C. Martin, avalia a legibilidade, 
                        manutenibilidade e organização do código.
                      </p>
                      <ul className="mt-2 text-sm grid grid-cols-1 md:grid-cols-2 gap-1">
                        <li className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          Funções pequenas e focadas
                        </li>
                        <li className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          Nomes descritivos e significativos
                        </li>
                        <li className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          Ausência de duplicação de código
                        </li>
                        <li className="flex items-center gap-1">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-primary">
                            <polyline points="20 6 9 17 4 12"/>
                          </svg>
                          Comentários claros e úteis
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <h3 className="mt-6">Cálculo da Pontuação</h3>
                  <p>
                    A pontuação final é calculada como uma média ponderada das pontuações de cada categoria, 
                    com os pesos indicados acima. Cada categoria é avaliada em uma escala de 0 a 100.
                  </p>
                  
                  <div className="not-prose bg-secondary/30 p-4 rounded-md">
                    <p className="font-semibold">Interpretação da Pontuação Final:</p>
                    <ul className="mt-2 space-y-2">
                      <li className="flex items-center">
                        <span className="h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                        <span><strong className="text-green-500">80-100:</strong> Excelente - Código de alta qualidade com poucas ou nenhuma melhoria necessária</span>
                      </li>
                      <li className="flex items-center">
                        <span className="h-3 w-3 rounded-full bg-amber-500 mr-2"></span>
                        <span><strong className="text-amber-500">60-79:</strong> Bom - Código de qualidade razoável com algumas melhorias recomendadas</span>
                      </li>
                      <li className="flex items-center">
                        <span className="h-3 w-3 rounded-full bg-red-500 mr-2"></span>
                        <span><strong className="text-red-500">0-59:</strong> Precisa de Atenção - Código com problemas significativos que requerem atenção</span>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
              
              {tabAtiva === 'examples' && (
                <div className="prose prose-lg dark:prose-invert max-w-none">
                  <h2>Exemplos Práticos</h2>
                  <p>
                    Aqui estão alguns exemplos de como o Analisador de Código Huta pode ajudar a identificar e resolver problemas comuns:
                  </p>
                  
                  <h3>Exemplo 1: Melhorando Performance em JavaScript</h3>
                  
                  <div className="not-prose bg-secondary/30 p-4 rounded-md mb-6">
                    <p className="font-medium mb-2">Código Original:</p>
                    <pre className="bg-background/50 p-3 rounded text-xs overflow-x-auto">
{`// Função para encontrar elementos em uma lista
function encontrarElementos(lista, criterio) {
  var resultados = [];
  
  for (var i = 0; i < lista.length; i++) {
    // Verificar cada elemento na lista
    if (lista[i].includes(criterio)) {
      resultados.push(lista[i]);
    }
  }
  
  return resultados;
}

// Uso repetido em vários lugares do código
var elementos = ['maçã', 'banana', 'abacaxi', 'morango'];
var resultado1 = encontrarElementos(elementos, 'a');
var resultado2 = encontrarElementos(elementos, 'n');
var resultado3 = encontrarElementos(elementos, 'm');`}
                    </pre>
                    
                    <p className="font-medium mt-4 mb-2">Problemas Identificados:</p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-red-500 mr-1 mt-0.5">
                          <circle cx="12" cy="12" r="10"/>
                          <line x1="12" y1="8" x2="12" y2="12"/>
                          <line x1="12" y1="16" x2="12.01" y2="16"/>
                        </svg>
                        Uso de <code>var</code> em vez de <code>let</code>/<code>const</code> (Boas Práticas)
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-amber-500 mr-1 mt-0.5">
                          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
                        </svg>
                        Verificação ineficiente com loop tradicional (Performance)
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-blue-500 mr-1 mt-0.5">
                          <circle cx="12" cy="12" r="10"/>
                          <line x1="12" y1="16" x2="12" y2="12"/>
                          <line x1="12" y1="8" x2="12.01" y2="8"/>
                        </svg>
                        Comentários não explicam o "porquê" (Código Limpo)
                      </li>
                    </ul>
                    
                    <p className="font-medium mt-4 mb-2">Código Melhorado:</p>
                    <pre className="bg-background/50 p-3 rounded text-xs overflow-x-auto">
{`// Função para encontrar elementos em uma lista que contêm um critério específico
function encontrarElementos(lista, criterio) {
  // Usa filter para uma implementação mais declarativa e performática
  return lista.filter(item => item.includes(criterio));
}

// Armazena elementos em uma constante já que não será modificada
const elementos = ['maçã', 'banana', 'abacaxi', 'morango'];

// Usa a função com diferentes critérios
const resultado1 = encontrarElementos(elementos, 'a');
const resultado2 = encontrarElementos(elementos, 'n');
const resultado3 = encontrarElementos(elementos, 'm');`}
                    </pre>
                  </div>
                  
                  <h3>Exemplo 2: Melhorando Acessibilidade em HTML</h3>
                  
                  <div className="not-prose bg-secondary/30 p-4 rounded-md">
                    <p className="font-medium mb-2">Código Original:</p>
                    <pre className="bg-background/50 p-3 rounded text-xs overflow-x-auto">
{`<div class="cabecalho">
  <div class="logo">
    <img src="logo.png" />
  </div>
  <div class="menu">
    <div class="menu-item">Home</div>
    <div class="menu-item">Produtos</div>
    <div class="menu-item">Contato</div>
  </div>
</div>

<div class="conteudo">
  <div class="titulo">Nossos Produtos</div>
  <div class="produtos">
    <div class="produto">
      <img src="produto1.jpg" />
      <div class="nome">Produto 1</div>
      <div class="preco">R$ 99,90</div>
      <div class="botao">Comprar</div>
    </div>
  </div>
</div>`}
                    </pre>
                    
                    <p className="font-medium mt-4 mb-2">Problemas Identificados:</p>
                    <ul className="space-y-1 text-sm">
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-red-500 mr-1 mt-0.5">
                          <circle cx="12" cy="12" r="10"/>
                          <line x1="12" y1="8" x2="12" y2="12"/>
                          <line x1="12" y1="16" x2="12.01" y2="16"/>
                        </svg>
                        Imagens sem atributo alt (Acessibilidade)
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-amber-500 mr-1 mt-0.5">
                          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/>
                        </svg>
                        Uso de div em vez de elementos semânticos (SEO, Acessibilidade)
                      </li>
                      <li className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 text-blue-500 mr-1 mt-0.5">
                          <circle cx="12" cy="12" r="10"/>
                          <line x1="12" y1="16" x2="12" y2="12"/>
                          <line x1="12" y1="8" x2="12.01" y2="8"/>
                        </svg>
                        Elementos interativos não acessíveis (Acessibilidade)
                      </li>
                    </ul>
                    
                    <p className="font-medium mt-4 mb-2">Código Melhorado:</p>
                    <pre className="bg-background/50 p-3 rounded text-xs overflow-x-auto">
{`<header class="cabecalho">
  <div class="logo">
    <img src="logo.png" alt="Logo da empresa" />
  </div>
  <nav class="menu" aria-label="Menu principal">
    <ul>
      <li><a href="#" class="menu-item">Home</a></li>
      <li><a href="#" class="menu-item">Produtos</a></li>
      <li><a href="#" class="menu-item">Contato</a></li>
    </ul>
  </nav>
</header>

<main class="conteudo">
  <h1 class="titulo">Nossos Produtos</h1>
  <section class="produtos">
    <article class="produto">
      <img src="produto1.jpg" alt="Descrição do Produto 1" />
      <h2 class="nome">Produto 1</h2>
      <p class="preco">R$ 99,90</p>
      <button class="botao" aria-label="Comprar Produto 1">Comprar</button>
    </article>
  </section>
</main>`}
                    </pre>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <footer className="border-t border-border/30 py-6 bg-secondary/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} HutaDev Analisador. {t("footer.rights")}</p>
        </div>
      </footer>
    </div>
  );
};

export default PaginaDocumentacao;
