export interface Project {
  id: string;
  number: string;
  category: string;
  title: string;
  fullName: string;
  status?: string;
  description: string;
  details: string[];
  technologies: string[];
  visual: {
    type: 'component' | 'image';
    component?: string;
    image?: string;
  };
  repository?: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Credential {
  type: 'certification' | 'education' | 'highlight';
  title: string;
  organization?: string;
  date?: string;
  description?: string;
  year?: string;
}

export interface SiteConfig {
  name: string;
  email: string;
  phone: string;
  location: string;
  github: string;
  linkedin?: string;
  bio: {
    tagline: string;
    description: string;
  };
}
