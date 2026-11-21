import { qecBenchmarking } from "./qec-benchmarking";
import { qnnBenchmarking } from "./qnn-benchmarking";
import { proteinLigandBindingAffinity } from "./protein-ligand-binding-affinity";
import { vqeBenchmarking } from "./vqe-benchmarking";
import type { ResearchBlog } from "./types";

export type { ResearchBlog } from "./types";

/** Add one post module here whenever a new research blog is created. */
export const researchBlogs: Record<string, ResearchBlog> = {
  "qec-benchmarking": qecBenchmarking,
  "qnn-benchmarking": qnnBenchmarking,
  "vqe-benchmarking": vqeBenchmarking,
  "protein-ligand-binding-affinity": proteinLigandBindingAffinity,
};
