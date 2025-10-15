import { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectModal } from './ProjectModal';
import { Code2, Database, Gamepad2, Globe, Brain } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription: string;
  technologies: string[];
  icon: any;
  github?: string;
  demo?: string;
  image?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Library Management System',
    description: 'Enterprise-grade library management with advanced search, borrowing system, and analytics.',
    longDescription: 'Built with JavaFX and Oracle Database, this system handles book inventory, member management, borrowing/returning workflows, and generates detailed reports. Features include real-time availability tracking, automated fine calculations, and admin dashboard with analytics.',
    technologies: ['JavaFX', 'Oracle DB', 'Java', 'JDBC', 'CSS'],
    icon: Database,
    image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&q=80',
    github: '#',
  },
  {
    id: 2,
    title: 'Gym Management System',
    description: 'Complete gym operations platform with membership tracking, trainer scheduling, and billing.',
    longDescription: 'JavaFX desktop application integrated with SQL database for managing gym operations. Includes member registration, attendance tracking, trainer scheduling, equipment inventory, payment processing, and automated membership renewal reminders.',
    technologies: ['JavaFX', 'SQL', 'Java', 'Scene Builder'],
    icon: Database,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80',
    github: '#',
  },
  {
    id: 3,
    title: '2D Game Engine',
    description: 'Custom 2D game built from scratch using C and SDL with physics simulation.',
    longDescription: 'Developed a 2D platformer game engine with collision detection, sprite animation, sound effects, and level editor. Implemented custom physics for gravity, jumping mechanics, and enemy AI patterns. Optimized rendering pipeline for smooth 60 FPS gameplay.',
    technologies: ['C', 'SDL2', 'OpenGL', 'Game Physics'],
    icon: Gamepad2,
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80',
    github: '#',
  },
  {
    id: 4,
    title: 'E-Commerce Web Platform',
    description: 'Full-stack online store with cart, payments, admin panel, and real-time inventory.',
    longDescription: 'React-based e-commerce platform with Node.js backend. Features include product catalog with filtering, shopping cart with session persistence, Stripe payment integration, order tracking, admin dashboard for inventory management, and customer analytics.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe API', 'Tailwind CSS'],
    icon: Globe,
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
    demo: '#',
    github: '#',
  },
  {
    id: 5,
    title: 'Task Management Dashboard',
    description: 'Collaborative project management tool with real-time updates and team features.',
    longDescription: 'Modern web application for team task management. Includes kanban boards, task assignment, priority levels, deadline tracking, team chat, file attachments, and progress visualization with charts. Built with real-time synchronization using WebSockets.',
    technologies: ['React', 'TypeScript', 'Firebase', 'WebSockets', 'Chart.js'],
    icon: Code2,
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80',
    demo: '#',
    github: '#',
  },
  {
    id: 6,
    title: 'AI Smart Planner',
    description: 'Intelligent scheduling assistant using AI to optimize daily tasks and routines.',
    longDescription: 'Python-based AI system that analyzes user patterns, prioritizes tasks, suggests optimal scheduling, and automates routine planning. Uses machine learning for personalized recommendations and natural language processing for voice commands.',
    technologies: ['Python', 'TensorFlow', 'NLP', 'FastAPI', 'React'],
    icon: Brain,
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
    demo: '#',
    github: '#',
  },
];

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 bg-background-secondary">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">
          <span className="text-gradient">Featured Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          A collection of academic and personal projects showcasing full-stack development, 
          system design, and AI integration.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
