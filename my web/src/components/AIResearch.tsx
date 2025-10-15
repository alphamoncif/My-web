export const AIResearch = () => {
  return (
    <section id="ai-research" className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="text-gradient">AI & Research</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Exploring intelligent automation, natural language models, and prompt engineering 
            as part of next-gen development workflows.
          </p>

          <div className="bg-gradient-card border border-border rounded-xl p-8 glow-accent">
            <p className="text-foreground text-lg leading-relaxed mb-6">
              My focus lies in merging traditional coding with AI-driven augmentation — 
              what I call <span className="text-accent font-bold">Vibe Coding</span>.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              This approach combines structured engineering principles with AI-assisted 
              development, leveraging prompt engineering and code generation systems to 
              accelerate prototyping while maintaining code quality and architectural integrity.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
