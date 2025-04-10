// src/app/works/components/types.ts

export interface WorkDetail {
  overview: string;
  features: string[];
  technologies: string[];
  challenges: string;
  github: string;
  website: string;
}

export interface WorkType {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  tags: string[];
  details: WorkDetail;
}
