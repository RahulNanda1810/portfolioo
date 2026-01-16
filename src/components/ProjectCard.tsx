import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Shipped Product' | 'Case Study' | 'AI Product';
  techStack: string[];
  image: string;
  link?: string;
}

interface ProjectCardProps {
  project: Project;
  index?: number;
}

const categoryColors: Record<string, string> = {
  'Shipped Product': 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400',
  'Case Study': 'bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-400',
  'AI Product': 'bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-400',
};

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link to={project.link || `/work#${project.id}`} className="block">
        <div className="bg-surface rounded-2xl border border-border overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1">
          {/* Image Container */}
          <div className="relative aspect-[16/10] overflow-hidden bg-border-light">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
            />
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[project.category]}`}>
                {project.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8">
            <h3 className="font-display text-xl md:text-2xl font-semibold mb-3 group-hover:text-accent transition-colors">
              {project.title}
            </h3>
            <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-4">
              {project.description}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-border-light rounded-full text-xs font-medium text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default ProjectCard;
