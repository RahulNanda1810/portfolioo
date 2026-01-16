import { motion } from 'framer-motion';
import Section from '../components/Section';
import Button from '../components/Button';

const About = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="max-w-[1140px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight mb-6"
              >
                About Me
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-text-secondary text-lg md:text-xl leading-relaxed"
              >
                I'm Rahul Nanda—an AI & Full-Stack Product Engineer with a passion for building systems that matter.
              </motion.p>
            </div>

            {/* Visual Element */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-square max-w-md mx-auto lg:mx-0"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-accent/5 rounded-3xl" />
              <div className="absolute inset-4 border-2 border-border rounded-2xl" />
              <div className="absolute inset-8 bg-surface rounded-xl shadow-lg flex items-center justify-center">
                <div className="text-center p-6">
                  <span className="text-6xl md:text-7xl font-display font-bold text-accent">RN</span>
                  <p className="text-text-secondary mt-2 text-sm">Engineer & Builder</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <Section background="surface">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8">
            My Story
          </h2>
          <div className="prose prose-lg text-text-secondary space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="leading-relaxed"
            >
              I've spent years at the intersection of AI, software engineering, and product development. My journey started with a fascination for how intelligent systems could augment human capabilities and has evolved into building products that serve real users at scale.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="leading-relaxed"
            >
              Today, I focus on creating AI-powered platforms, automation systems, and data-driven applications. I believe the best technology is invisible—it just works, making people's lives easier without demanding their attention.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="leading-relaxed"
            >
              Whether I'm designing machine learning pipelines, architecting distributed systems, or crafting intuitive user interfaces—I approach every challenge with curiosity, rigor, and a commitment to excellence.
            </motion.p>
          </div>
        </div>
      </Section>

      {/* Philosophy Section */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8">
            Engineering Philosophy
          </h2>
          <div className="grid gap-8">
            {[
              {
                title: 'Product-First Thinking',
                description: 'Technology is a means to an end. I start with the problem, understand the user, and build solutions that create genuine value—not just technically impressive demos.',
              },
              {
                title: 'Elegant Simplicity',
                description: 'The best systems are simple. I strive for architectures that are easy to understand, maintain, and extend. Complexity is a last resort, not a default.',
              },
              {
                title: 'Pragmatic Perfectionism',
                description: 'I care deeply about quality—clean code, robust testing, thoughtful design. But I also ship. Perfection is the enemy of progress, and iterative improvement beats delayed launches.',
              },
              {
                title: 'Continuous Learning',
                description: "The field moves fast. I stay curious, experiment with new tools and techniques, and constantly push to expand what's possible.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="border-l-2 border-accent pl-6"
              >
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-text-secondary leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Focus Areas */}
      <Section background="surface">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-display text-2xl md:text-3xl font-semibold mb-8">
            Focus Areas
          </h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              {
                icon: '🤖',
                title: 'AI & Machine Learning',
                items: ['LLM Applications', 'ML Pipelines', 'Computer Vision', 'NLP Systems'],
              },
              {
                icon: '⚡',
                title: 'Automation & Integration',
                items: ['Workflow Automation', 'API Design', 'System Integration', 'Process Optimization'],
              },
              {
                icon: '📊',
                title: 'Data Engineering',
                items: ['Data Pipelines', 'Real-time Processing', 'Analytics Platforms', 'Data Visualization'],
              },
              {
                icon: '🛠️',
                title: 'Full-Stack Development',
                items: ['React & Next.js', 'Python & Node.js', 'Cloud Infrastructure', 'DevOps'],
              },
            ].map((area, i) => (
              <motion.div
                key={area.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-background rounded-xl border border-border-light"
              >
                <span className="text-3xl mb-4 block">{area.icon}</span>
                <h3 className="font-semibold text-lg mb-3">{area.title}</h3>
                <ul className="space-y-1">
                  {area.items.map((item) => (
                    <li key={item} className="text-text-secondary text-sm flex items-center gap-2">
                      <span className="w-1 h-1 bg-accent rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-semibold mb-4">
            Want to Work Together?
          </h2>
          <p className="text-text-secondary mb-8">
            I'm always open to discussing new projects, ideas, or collaborations.
          </p>
          <Button to="/contact" variant="primary" size="lg">
            Let's Talk
          </Button>
        </div>
      </Section>
    </>
  );
};

export default About;
