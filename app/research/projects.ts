export interface ResearchProject {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  paperLabel: string;
  paperUrl: string;
  blogSlug: string;
}

export const researchProjects: ResearchProject[] = [
  {
    title: "VQE Benchmarking",
    description: "Benchmarking variational quantum eigensolver approaches.",
    image: "/research/amino-acid.png",
    imageAlt: "Amino acid molecular model",
    paperLabel: "arXiv",
    paperUrl: "https://arxiv.org/abs/2607.02620",
    blogSlug: "vqe-benchmarking",
  },
  {
    title: "Classical-Quantum CNNs for Protein-Ligand Binding Affinity",
    description: "Exploring hybrid classical-quantum models for predicting protein-ligand binding affinity.",
    image: "/research/protein-ligand.png",
    imageAlt: "Protein with a ligand in its binding pocket",
    paperLabel: "OpenReview",
    paperUrl: "https://openreview.net/pdf?id=vmma8SnJh6",
    blogSlug: "protein-ligand-binding-affinity",
  },
];
