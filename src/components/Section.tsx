import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  background?: 'default' | 'surface' | 'accent';
}

const Section = ({ children, className = '', id, background = 'default' }: SectionProps) => {
  const bgClasses = {
    default: 'bg-background',
    surface: 'bg-surface',
    accent: 'bg-accent/5',
  };

  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`py-16 md:py-24 ${bgClasses[background]} ${className}`}
    >
      <div className="max-w-[1140px] mx-auto px-6 lg:px-8">
        {children}
      </div>
    </motion.section>
  );
};

export default Section;
