// src/app/works/components/types.ts

export interface WorkDetail {
  overviews: string[];
  features: string[];
  technologies: string[];
  github: string;
  website: string;
}

export interface WorkType {
  id: number;
  title: string;
  description: string;
  thumbnail: string;
  previewImage: string[];
  tags: string[];
  details: WorkDetail;
}
