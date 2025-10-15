import { useEffect, useRef, useState } from 'react';

const stats = [
  { label: 'Years of Experience', value: 3 },
  { label: 'Projects Completed', value: 11 },
  { label: 'AI Experiments Built', value: 8 },
];

export const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-background-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">About Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className={`space-y-6 ${isVisible ? 'animate-slide-in' : 'opacity-0'}`}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a <span className="text-primary font-semibold">Computer Science student</span> passionate 
              about creating intelligent systems and modern applications. My work spans from enterprise 
              software to AI-driven solutions.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I build <span className="text-secondary font-semibold">efficient, structured, and aesthetically 
              refined products</span>. I explore AI prompting, code generation systems, and next-gen automation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise includes <span className="text-accent font-semibold">full-stack development</span>, 
              from JavaFX desktop applications to modern React web apps, always with a focus on clean 
              architecture and user experience.
            </p>
          </div>

          <div className={`space-y-6 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
            {/* Avatar placeholder */}
            <div className="relative w-64 h-64 mx-auto mb-8">
              <div className="absolute inset-0 bg-gradient-card rounded-xl border-2 border-primary/30 glow-primary transform rotate-3"></div>
              <div className="relative bg-card rounded-xl border border-border overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-6xl text-primary">&lt;/&gt;</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="space-y-4">
              {stats.map((stat, index) => (
                <div key={stat.label} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{stat.label}</span>
                    <span className="text-primary font-semibold">{stat.value}+</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className={`h-full bg-gradient-to-r from-primary to-secondary ${
                        isVisible ? 'animate-progress-fill' : 'w-0'
                      }`}
                      style={{
                        '--progress-width': `${(stat.value / 20) * 100}%`,
                        animationDelay: `${index * 0.2}s`
                      } as React.CSSProperties}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
