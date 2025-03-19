
import React from 'react';
import Navbar from '@/components/Navbar';
import { Code2, Cpu, Sparkles, Check, Code, GitBranch, SquareCode } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-24 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center animate-slide-down">
            <span className="inline-block px-3 py-1.5 rounded-full text-xs uppercase tracking-wide font-semibold bg-primary/10 text-primary mb-4">
              About The Project
            </span>
            <h1 className="text-4xl font-bold tracking-tight mb-3">Quality Maven</h1>
            <p className="text-xl text-muted-foreground">
              The modern code quality enhancement tool for developers
            </p>
          </div>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div className="bg-white/50 dark:bg-gray-950/50 backdrop-blur-md rounded-lg border border-border/50 p-6 shadow-sm animate-scale-in">
              <h2 className="flex items-center text-2xl font-bold mb-4">
                <Code2 className="mr-2 h-5 w-5 text-primary" />
                Our Mission
              </h2>
              <p className="text-muted-foreground">
                Quality Maven was created with a clear mission: to help developers write cleaner, more maintainable, and higher quality code. We believe that code quality is not just about following syntax rules, but about crafting elegant solutions that are easy to read, maintain, and scale.
              </p>
              <p className="text-muted-foreground">
                Our tool is designed to provide actionable insights that go beyond simple linting, offering suggestions that help you improve your coding style and apply best practices.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/50 dark:bg-gray-950/50 backdrop-blur-md rounded-lg border border-border/50 p-6 shadow-sm animate-scale-in delay-100">
                <h3 className="flex items-center text-xl font-semibold mb-3">
                  <Cpu className="mr-2 h-5 w-5 text-primary" />
                  Supported Languages
                </h3>
                <ul className="space-y-2 list-none pl-0">
                  {['HTML', 'CSS', 'JavaScript', 'Java', 'C++', 'C#', 'Python'].map((lang) => (
                    <li key={lang} className="flex items-center text-muted-foreground">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      {lang}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white/50 dark:bg-gray-950/50 backdrop-blur-md rounded-lg border border-border/50 p-6 shadow-sm animate-scale-in delay-200">
                <h3 className="flex items-center text-xl font-semibold mb-3">
                  <Sparkles className="mr-2 h-5 w-5 text-primary" />
                  Key Features
                </h3>
                <ul className="space-y-2 list-none pl-0">
                  {[
                    'Code quality analysis',
                    'Language-specific best practices',
                    'Style and maintainability metrics',
                    'Actionable improvement suggestions',
                    'Detailed quality reports',
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center text-muted-foreground">
                      <Check className="h-4 w-4 mr-2 text-green-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-8 bg-white/50 dark:bg-gray-950/50 backdrop-blur-md rounded-lg border border-border/50 p-6 shadow-sm animate-scale-in delay-300">
              <h2 className="flex items-center text-2xl font-bold mb-4">
                <Code className="mr-2 h-5 w-5 text-primary" />
                How It Works
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                    <Code2 className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Input Your Code</h3>
                  <p className="text-sm text-muted-foreground">
                    Paste your code or start typing in the editor, then select the language you're working with.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                    <Cpu className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Analyze</h3>
                  <p className="text-sm text-muted-foreground">
                    Our tool analyzes your code against language-specific best practices and quality metrics.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-3">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-medium mb-2">Improve</h3>
                  <p className="text-sm text-muted-foreground">
                    Review the suggestions and implement changes to improve your code quality.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-white/50 dark:bg-gray-950/50 backdrop-blur-md rounded-lg border border-border/50 p-6 shadow-sm animate-scale-in delay-400">
              <h2 className="flex items-center text-2xl font-bold mb-4">
                <GitBranch className="mr-2 h-5 w-5 text-primary" />
                Future Development
              </h2>
              <p className="text-muted-foreground">
                Quality Maven is under active development. We're constantly working to improve our analysis algorithms, add support for more languages, and expand our feature set.
              </p>
              <p className="text-muted-foreground">
                Upcoming features include:
              </p>
              <ul className="space-y-2 list-none pl-0 mt-4">
                {[
                  'Advanced code refactoring suggestions',
                  'Team collaboration features',
                  'Integration with popular IDEs',
                  'Custom rule creation',
                  'Historical quality tracking',
                ].map((feature, index) => (
                  <li key={index} className="flex items-center text-muted-foreground">
                    <SquareCode className="h-4 w-4 mr-2 text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
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

export default AboutPage;
