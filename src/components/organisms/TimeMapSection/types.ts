export interface Place {
  id: string;
  city: string;
  country: string;
  coordinates: [number, number]; // [longitude, latitude]
  zoom: number;
  period: string;
}

export interface TimelineStage {
  id: string;
  year: number;
  placeId: string;
  title: string;
  description: string;
}

export interface Experience {
  id: string;
  type: string;
  placeId: string;
  title: string;
  org: string;
  start: string;
  end: string | null;
  highlights: string[];
  skills: string[];
}

export interface Education {
  id: string;
  placeId: string;
  secondaryPlaceId?: string;
  degree: string;
  institution: string;
  start: string;
  end: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  type: string;
  label: string;
  unlockedAt: number;
}

export interface CareerItem {
  id: string;
  company: string;
  role: string;
  placeId: string;
  startYear: number;
  endYear: number;
}

export interface Skill {
  name: string;
  level: string;
}

export interface Profile {
  name: string;
  headline: string;
  location: string;
  email: string;
  phone: string;
  links: { label: string; url: string }[];
}

export interface Language {
  name: string;
  level: string;
}

export interface CVData {
  profile: Profile;
  places: Place[];
  timelineStages: TimelineStage[];
  experiences: Experience[];
  education: Education[];
  skills: {
    programming: Skill[];
    geospatialSoftware: Skill[];
    dataViz: Skill[];
    graphics: Skill[];
  };
  languages: Language[];
  achievements: Achievement[];
  careerProgress: CareerItem[];
}
