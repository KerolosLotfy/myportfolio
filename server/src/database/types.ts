type skills = {
  id: string;
  title: string;
  percent: number;
};

type projects = {
  id: string;
  title: string;
  languages: string;
  img: string | undefined;
  description: string | undefined;
  category: string;
  repo: string;
  demo: string;
};

export type dataTypes = {
  skills: skills;
  projects: projects;
};
