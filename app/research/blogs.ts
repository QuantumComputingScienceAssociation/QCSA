export interface ResearchBlog {
  title: string;
  project: string;
  /** Add image paths here as the post grows, for example: ["/research/vqe/ansatz.png"]. */
  figures: { src: string; alt: string; caption?: string }[];
}

export const researchBlogs: Record<string, ResearchBlog> = {
  "vqe-benchmarking": {
    title: "VQE Benchmarking",
    project: "VQE Benchmarking",
    figures: [],
  },
  "protein-ligand-binding-affinity": {
    title: "Classical-Quantum CNNs for Protein-Ligand Binding Affinity",
    project: "Classical-Quantum CNNs for Protein-Ligand Binding Affinity",
    figures: [],
  },
};
