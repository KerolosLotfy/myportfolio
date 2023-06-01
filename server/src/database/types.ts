export type skills = {
  id: string;
  title: string;
  percent: number;
};

export type projects = {
  id: string;
  title: string;
  languages: string[];
  img: string;
  repo: string;
  demo: string;
};

export type dataTypes = {
  skills: skills;
  projects: projects;
};
