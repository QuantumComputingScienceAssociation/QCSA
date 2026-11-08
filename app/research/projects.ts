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
    // Replace with the project paper URL when it is finalized.
    paperUrl: "https://arxiv.org/search/?query=VQE+benchmarking&searchtype=all",
    blogSlug: "vqe-benchmarking",
  },
  {
    title: "Classical-Quantum CNNs for Protein-Ligand Binding Affinity",
    description: "Exploring hybrid classical-quantum models for predicting protein-ligand binding affinity.",
    image: "/research/protein-ligand.png",
    imageAlt: "Protein with a ligand in its binding pocket",
    paperLabel: "OpenReview",
    // Replace with the project submission URL when it is finalized.
    paperUrl: "https://openreview.net/search?term=Classical-Quantum%20CNNs%20Protein-Ligand%20Binding%20Affinity",
    blogSlug: "protein-ligand-binding-affinity",
  },
];
