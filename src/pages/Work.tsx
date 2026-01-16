import { motion } from 'framer-motion';
import Section from '../components/Section';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data/projects';

const Work = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-[1140px] mx-auto px-6 lg:px-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6"
          >
            My Work
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed"
          >
            Full-stack products and AI-integrated systems I've designed and built—from concept to deployment. Each project reflects my focus on clean architecture, user experience, and real-world impact.
          </motion.p>
        </div>
      </section>

      {/* Projects Grid */}
      <Section className="pt-0">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </Section>

      {/* Process Section */}
      <Section background="surface">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            My Approach
          </h2>
          <p className="text-text-secondary leading-relaxed">
            Every project follows a thoughtful process that balances speed with quality, ensuring both technical excellence and real-world impact.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            {
              step: '01',
              title: 'Understand',
              desc: 'Deep dive into the problem space, user needs, and business context.',
            },
            {
              step: '02',
              title: 'Design',
              desc: 'Architect solutions that are scalable, maintainable, and user-centric.',
            },
            {
              step: '03',
              title: 'Build',
              desc: 'Execute with precision using modern tools and best practices.',
            },
            {
              step: '04',
              title: 'Iterate',
              desc: 'Continuously improve based on data, feedback, and real-world usage.',
            },
          ].map((item, i) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              <span className="text-6xl font-bold text-border-light absolute -top-2 left-0">
                {item.step}
              </span>
              <div className="pt-12">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Work;
