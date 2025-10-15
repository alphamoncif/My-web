import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'Java', level: 90, color: 'text-primary' },
  { name: 'JavaFX', level: 85, color: 'text-secondary' },
  { name: 'Python', level: 88, color: 'text-accent' },
  { name: 'C / SDL', level: 82, color: 'text-primary' },
  { name: 'React.js', level: 87, color: 'text-secondary' },
  { name: 'JavaScript', level: 85, color: 'text-accent' },
  { name: 'CSS / Tailwind', level: 83, color: 'text-primary' },
  { name: 'SQLite', level: 78, color: 'text-secondary' },
  { name: 'MongoDB', level: 80, color: 'text-accent' },
  { name: 'AI Prompting', level: 92, color: 'text-primary' },
];

export const Skills = () => {
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
    <section id="skills" ref={sectionRef} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="text-gradient">Skills & Expertise</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="flex flex-col items-center space-y-4"
              style={{
                animation: isVisible ? `fade-in 0.6s ease-out ${index * 0.1}s forwards` : 'none',
                opacity: isVisible ? 1 : 0
              }}
            >
              <div className="relative w-32 h-32">
                <svg className="transform -rotate-90 w-32 h-32">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-muted"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={2 * Math.PI * 56}
                    strokeDashoffset={isVisible ? 2 * Math.PI * 56 * (1 - skill.level / 100) : 2 * Math.PI * 56}
                    className={`${skill.color} transition-all duration-1500 ease-out glow-primary`}
                    strokeLinecap="round"
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className={`text-2xl font-bold ${skill.color}`}>{skill.level}%</span>
                </div>
              </div>
              <span className="text-foreground font-medium text-center">{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuously expanding expertise in modern frameworks, cloud technologies, and AI-driven development workflows.
          </p>
        </div>
      </div>
    </section>
  );
};
