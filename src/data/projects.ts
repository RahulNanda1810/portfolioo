import type { Project } from '../components/ProjectCard';

export const projects: Project[] = [
  // FULL-STACK WEB
  {
    id: 'saas-task-management',
    title: 'SaaS Task & Team Management Platform',
    description: 'Multi-tenant project management system enabling teams to collaborate in real-time. Features role-based access, kanban boards, and analytics dashboards for tracking team productivity.',
    category: 'Shipped Product',
    techStack: ['React', 'Node.js', 'PostgreSQL', 'Socket.io', 'Redis'],
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&h=600&fit=crop',
  },
  {
    id: 'online-booking-system',
    title: 'Online Booking & Appointment System',
    description: 'End-to-end scheduling platform for service businesses. Handles availability management, automated reminders, payment processing, and client self-service—reducing no-shows by 40%.',
    category: 'Shipped Product',
    techStack: ['React', 'Express', 'MongoDB', 'Stripe', 'Twilio'],
    image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?w=800&h=600&fit=crop',
  },
  // MOBILE
  {
    id: 'productivity-habit-tracker',
    title: 'Productivity & Habit Tracker App',
    description: 'Cross-platform mobile app helping users build consistent habits through streaks, reminders, and progress visualization. Includes cloud sync and offline support for seamless daily use.',
    category: 'Shipped Product',
    techStack: ['React Native', 'Firebase', 'Redux', 'Expo'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop',
  },
  {
    id: 'service-marketplace-app',
    title: 'Service Marketplace Mobile App',
    description: 'Two-sided marketplace connecting customers with local service providers. Designed end-to-end flows for discovery, booking, real-time chat, and vendor management.',
    category: 'Case Study',
    techStack: ['Flutter', 'Node.js', 'Socket.io', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop',
  },
  // AI-INTEGRATED
  {
    id: 'ai-resume-portfolio-generator',
    title: 'AI Resume & Portfolio Generator',
    description: 'AI-powered tool that transforms user input into polished resumes and portfolio content. Uses GPT-4 for intelligent content generation with customizable templates and export options.',
    category: 'AI Product',
    techStack: ['Next.js', 'OpenAI API', 'TypeScript', 'Vercel'],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop',
  },
];

export const featuredProjects = projects.slice(0, 4);
