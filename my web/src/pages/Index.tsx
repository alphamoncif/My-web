import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { AIResearch } from '@/components/AIResearch';
import { Contact } from '@/components/Contact';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <AIResearch />
      <Contact />
      <footer className="py-6 text-center text-muted-foreground border-t border-border">
        <p>© {new Date().getFullYear()} Aissani Mohamed Moncif. Built with React and passion for clean design.</p>
      </footer>
    </div>
  );
};

export default Index;
