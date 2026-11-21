export type BlogBlock =
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "expandable"; summary: string; body: string }
  | { type: "heading"; text: string; level?: 2 | 3 }
  | { type: "caption"; text: string }
  | { type: "figure"; src: string; alt: string; caption?: string };

export interface BlogReference {
  id: string;
  text: string;
}

export interface ResearchBlog {
  title: string;
  project: string;
  content?: BlogBlock[];
  articleTitle?: string;
  articleByline?: string;
  articleAuthor?: string;
  articleDate?: string;
  introductionHeading?: string;
  methodologyOverview?: { src: string; alt: string };
  resultsHeading?: string;
  resultsContent?: string;
  references?: BlogReference[];
}
