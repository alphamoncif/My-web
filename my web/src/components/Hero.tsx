import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Computer Science Student | Software Developer | AI Enthusiast";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Animated Coding Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 flex flex-wrap gap-4 p-4">
          {['const', 'function', 'return', 'import', 'export', 'class', 'async', 'await', 'if', 'else', 'for', 'while', 'map', 'filter', 'reduce', '()', '=>', '{}', '[]', '<>', '/>', '&&', '||', '===', '!=='].map((code, i) => (
            <span
              key={i}
              className="text-primary/30 font-mono text-xs md:text-sm"
              style={{
                animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`
              }}
            >
              {code}
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <p className="text-primary text-lg font-medium">Hi, I'm</p>
            <h1 className="text-5xl md:text-7xl font-bold text-foreground">
              <span className="text-gradient">Aissani Mohamed Moncif</span>
            </h1>
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-xl md:text-2xl text-muted-foreground font-light">
                {displayText}
                <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-blink"></span>
              </h2>
            </div>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.3s' }}>
            Building intelligent systems and modern applications with a focus on efficiency, 
            structure, and aesthetic refinement.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary font-semibold"
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-primary" size={32} />
          </div>
        </div>
      </div>
    </section>
  );
};
