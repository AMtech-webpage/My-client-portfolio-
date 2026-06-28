export interface Skill {
  name: string;
  level: number; // percentage (0 - 100)
  category: 'Programming' | 'Engineering' | 'Creative' | 'Soft Skills';
  description: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: 'Software' | 'Electronics' | 'Robotics' | 'Design' | 'Future';
  techStack: string[];
  status: 'Completed' | 'In Progress' | 'Concept' | 'Beta';
  githubUrl?: string;
  demoUrl?: string;
  imageUrl: string;
}

export interface TimelineStage {
  id: string;
  period: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  icon: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
  imageUrl: string;
}

export interface Achievement {
  id: string;
  value: string;
  label: string;
  icon: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'screenshot' | 'graphic' | 'award' | 'moment';
  imageUrl: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  avatarUrl?: string;
  rating: number;
}

export interface FutureGoal {
  id: string;
  title: string;
  description: string;
  timeline: string;
  icon: string;
  color: string;
}
