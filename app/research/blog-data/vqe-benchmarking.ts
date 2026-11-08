import type { ResearchBlog } from "./types";

export const vqeBenchmarking: ResearchBlog = {
    title: "VQE Benchmarking",
    project: "VQE Benchmarking",
    introductionHeading: "Why Molecular Simulation is an Important Problem",
    methodologyOverview: {
      src: "/research/vqe/configurability_overview.svg",
      alt: "Overview of the VQE benchmarking inputs, experiment pipelines, algorithms, and exposed run controls.",
    },
    resultsHeading: "Results",
    resultsContent: "We're currently working on doing a larger re-run of all of our experiments, so we'll be updating this section over the next few weeks. In the meantime, feel free to reach out for a sneak peek.",
    content: [
      {
        type: "paragraph",
        text: "Finding molecular ground state energies (GSEs) and subsequent excited states to study stability or reactivity is an important problem for applications in material discovery for particular niches, as well as simulating biological molecules.",
      },
      {
        type: "paragraph",
        text: "However, it is computationally expensive to simulate large molecules! This is a classic problem that we've been historically and currently limited by, as simulation complexity increases exponentially with each additional electron. As a caveat, classical methods that approximate the electron-space are already able to handle many important use-cases, but do not achieve high accuracy for difficult systems. Exact simulation is not a classically tractable problem.",
      },
      {
        type: "expandable",
        summary: "Why are electrons challenging to represent?",
        body: "Electrons are not just 'dots' that are in fixed orbitals. Their orbitals are more like 'probability clouds' that interact through Coulomb repulsion with other electrons. Representing their correlated state is part of the computational challenge.",
      },
      {
        type: "paragraph",
        text: "Quantum computers may provide a solution. While each classical bit can only represent a 0 and a 1, a qubit can be in a superposition of 0 and 1… and multiple qubits can become ‘entangled’.",
      },
      {
        type: "expandable",
        summary: "What does entanglement mean?",
        body: "Entanglement means two or more qubits share a joint state, so their measurement results are correlated in ways that cannot be explained by treating each qubit independently.",
      },
    ],
  };
