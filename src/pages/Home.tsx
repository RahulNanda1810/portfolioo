import { motion } from 'framer-motion';
import Section from '../components/Section';
import Button from '../components/Button';
import ProjectCard from '../components/ProjectCard';
import { featuredProjects } from '../data/projects';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-20 pb-16 md:pt-0 md:pb-0">
        <div className="max-w-[1140px] mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-text-secondary text-lg md:text-xl mb-4"
            >
              Hello, I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight mb-6"
            >
              Rahul Nanda
            </motion.h1>

            {/* Role */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-accent text-xl md:text-2xl font-medium mb-6"
            >
              AI & Full-Stack Product Engineer
            </motion.p>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-text-secondary text-lg md:text-xl leading-relaxed max-w-2xl mb-10"
            >
              I design and build intelligent systems, automation platforms, and data-driven products that solve real problems at scale.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button to="/work" variant="primary" size="lg">
                View My Work
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
              <Button to="/contact" variant="outline" size="lg">
                Get in Touch
              </Button>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="w-6 h-10 rounded-full border-2 border-text-tertiary flex items-start justify-center p-2"
            >
              <div className="w-1 h-2 bg-text-tertiary rounded-full" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What I Do Section */}
      <Section background="surface">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-6">
              What I Do
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                I architect and build products at the intersection of <strong className="text-text-primary">artificial intelligence</strong> and <strong className="text-text-primary">full-stack engineering</strong>. My work focuses on creating systems that are not just technically sound, but genuinely useful.
              </p>
              <p>
                From designing ML pipelines and AI-powered automation to building scalable web applications and data platforms—I approach every project with a product mindset and engineering rigor.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { title: 'AI Systems', desc: 'LLMs, ML pipelines, intelligent automation' },
              { title: 'Full-Stack Dev', desc: 'React, Node.js, Python, cloud infrastructure' },
              { title: 'Data Engineering', desc: 'Pipelines, analytics, real-time processing' },
              { title: 'Product Design', desc: 'User-centric thinking, rapid prototyping' },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-background rounded-xl border border-border-light"
              >
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Selected Projects Section */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-semibold mb-3">
              Selected Projects
            </h2>
            <p className="text-text-secondary max-w-lg">
              A curated selection of products and systems I've designed and built.
            </p>
          </div>
          <Button to="/work" variant="outline" size="md">
            View All Work
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="accent">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Let's Build Something Great
          </h2>
          <p className="text-text-secondary mb-8">
            I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          <Button to="/contact" variant="primary" size="lg">
            Start a Conversation
          </Button>
        </div>
      </Section>
    </>
  );
};

export default Home;
