import type { ResearchBlog } from "./types";

export const qecBenchmarking: ResearchBlog = {
  "title": "Benchmarking Quantum Error Correction Across Circuit Workloads",
  "project": "QEC Benchmarking",
  "content": [
    {
      "type": "paragraph",
      "text": "Quantum error correction protects information by encoding logical qubits across multiple physical qubits. Choosing a code also means choosing how that information will be stored, manipulated, and measured. Our project asks which circuit structures favor bivariate bicycle (BB) codes and other high-rate codes compared with surface-code architectures, and how reliably we can predict their performance during computation."
    },
    {
      "type": "heading",
      "text": "Why the workload matters"
    },
    {
      "type": "paragraph",
      "text": "A common way to evaluate a code is through a quantum memory experiment: prepare encoded information, repeatedly measure error-detecting checks, and determine whether the information survives. These experiments establish how well a particular code, syndrome-extraction circuit, and decoder work together. BB codes have shown substantial reductions in the physical-qubit overhead of memory under specified noise and connectivity assumptions. [1]"
    },
    {
      "type": "paragraph",
      "text": "The next question is how those advantages translate to computation. A circuit may spend much of its time waiting, perform frequent joint measurements, or require many non-Clifford operations. Each pattern places different demands on the encoded hardware."
    },
    {
      "type": "paragraph",
      "text": "Encoding rate measures the number of logical qubits protected per physical data qubit. BB codes can offer attractive rates, while surface-code implementations offer local checks on a two-dimensional layout. However, the full cost also includes measurement ancillas, logical-operation hardware, communication, and resources for non-Clifford gates. A useful comparison must account for the operations a circuit actually requires. [1, 2]"
    },
    {
      "type": "heading",
      "text": "What existing work tells us"
    },
    {
      "type": "paragraph",
      "text": "Several recent studies provide starting points for this project:"
    },
    {
      "type": "list",
      "items": [
        "Tour de gross constructs a modular BB architecture, simulates logical instructions under circuit-level noise, and uses their estimated errors and durations to evaluate computational workloads, including T-heavy circuits. Its full-workload error estimates assume independent logical errors. [2]",
        "ECCentric compares QEC codes under modeled hardware constraints, including connectivity, noise, routing, and decoding. Its implemented benchmarks focus on encoded memory circuits; the paper explicitly lists fault-tolerant logical gate constructions as a limitation. [3]",
        "FTCircuitBench provides algorithm circuits, compilation tools, and statistics describing logical workloads. Its current version also relates those statistics to architectural costs and physical resource estimates. The authors identify validation against cycle-level architecture simulation and hardware as future work. [4]"
      ]
    },
    {
      "type": "paragraph",
      "text": "These studies already connect codes, hardware, and computation. Our proposed contribution is to examine how well those connections predict the reliability and cost of selected circuits when operations are composed and error correction continues throughout execution."
    },
    {
      "type": "heading",
      "text": "Our proposed comparison"
    },
    {
      "type": "paragraph",
      "text": "We would begin with BB and surface-code implementations, using controlled circuit families to separate the effects of different workload features."
    },
    {
      "type": "table",
      "headers": [
        "Circuit family",
        "Features to vary",
        "What we would investigate"
      ],
      "rows": [
        [
          "Memory and idle-heavy circuits",
          "Storage duration and waiting between operations",
          "How protected waiting contributes to failure and runtime"
        ],
        [
          "Clifford circuits",
          "Gate density, ordering, and parallelism",
          "How active operations change performance relative to memory"
        ],
        [
          "Circuits with frequent Pauli product measurements",
          "Measurement support and interactions between code blocks",
          "How joint measurements and communication affect overhead"
        ],
        [
          "Non-Clifford-heavy circuits",
          "T-count, T-depth, and timing of magic-state demand",
          "How non-Clifford resources change the cost of computation"
        ]
      ]
    },
    {
      "type": "paragraph",
      "text": "A Pauli product measurement (PPM) jointly measures a product of Pauli operators on logical qubits. It is an important primitive in the bicycle architecture. T gates are non-Clifford operations that, in the architectures considered here, consume specially prepared auxiliary states called magic states. [2, 4]"
    },
    {
      "type": "paragraph",
      "text": "Two circuits with the same T-count can place very different demands on a machine. One might require its T gates sequentially; another might request many magic states simultaneously. Similarly, two circuits with identical logical gate counts can require different communication patterns. We would vary these features explicitly rather than use gate count alone to characterize a workload."
    },
    {
      "type": "paragraph",
      "text": "The comparison would use the same logical task and a common target for total circuit failure probability. We would report physical-qubit requirements and execution time separately, alongside their combined qubit-time cost. Hardware assumptions would be explicit, including the availability, duration, and error rate of nonlocal operations. Equal code distance alone would not define a fair comparison. Each implementation would need an appropriate decoder, with its settings and any assumed latency reported."
    },
    {
      "type": "heading",
      "text": "Testing how logical errors compose"
    },
    {
      "type": "paragraph",
      "text": "A more focused direction is to test whether logical-operation benchmarks accurately predict longer circuits. In particular, we could study sequences combining protected idling, PPMs, and shift automorphisms. Shift automorphisms exploit BB code symmetries to perform logical Clifford transformations through physical-qubit permutations. [2]"
    },
    {
      "type": "paragraph",
      "text": "The experiment would compare two approaches. First, we would characterize operations separately and compose the resulting logical error models to predict a circuit's behavior. Second, we would simulate the noisy physical sequence directly, retaining the syndrome history across operation boundaries and decoding the complete experiment."
    },
    {
      "type": "paragraph",
      "text": "For example, we could alternate idle intervals with shift automorphisms, then vary the spacing and ordering of those operations. Joint measurements would be a subsequent extension. This gives us a manageable starting point before attempting complete algorithmic workloads."
    },
    {
      "type": "paragraph",
      "text": "Both approaches must use the same definition of failure, such as a flipped deterministic logical-observable outcome or an incorrect parity in the logical measurement record. A discrepancy would not automatically demonstrate correlated logical errors: it could also reflect error propagation, information lost when reducing a logical error channel to a single probability, or different preparation and termination conditions. We would check these explanations before attributing disagreement to correlations."
    },
    {
      "type": "paragraph",
      "text": "The question is therefore when independently characterized operations provide an accurate prediction, what information the model needs, and whether the remaining discrepancies affect comparisons between code implementations."
    },
    {
      "type": "heading",
      "text": "Proposed next steps"
    },
    {
      "type": "paragraph",
      "text": "A practical first milestone would be to reproduce a published BB memory benchmark and a corresponding surface-code baseline, then validate a small set of active Clifford circuits. Stabilizer simulators such as Stim make this initial scope computationally accessible. [5]"
    },
    {
      "type": "paragraph",
      "text": "Non-Clifford workloads would be a later extension. Stim does not directly simulate arbitrary non-Clifford state evolution, so that stage would require a separately justified method, such as combining calibrated gadget error models with logical-level simulation. Resource estimates would also need to include magic-state preparation and delivery. [4, 5]"
    },
    {
      "type": "paragraph",
      "text": "The intended outcome is a reproducible set of benchmarks showing how circuit structure changes reliability and resource requirements, together with evidence about the accuracy of the models used to predict them. Even if an independent-operation model works well, identifying the conditions where it remains reliable would help guide larger resource estimates. If it fails, understanding why could reveal which details a useful benchmark must retain."
    }
  ],
  "references": [
    {
      "id": "qec-1",
      "text": "Sergey Bravyi et al. High-threshold and low-overhead fault-tolerant quantum memory. Nature 627, 778–782 (2024). arXiv:2308.07915."
    },
    {
      "id": "qec-2",
      "text": "Theodore J. Yoder et al. Tour de gross: A modular quantum computer based on bivariate bicycle codes (2025). arXiv:2506.03094."
    },
    {
      "id": "qec-3",
      "text": "Aleksandra Świerkowska et al. ECCentric: An Empirical Analysis of Quantum Error Correction Codes. Proceedings of the ACM on Measurement and Analysis of Computing Systems 10(2), Article 37 (2026). arXiv:2511.01062."
    },
    {
      "id": "qec-4",
      "text": "Adrian Harkness et al. FTCircuitBench: A Benchmark Suite for Fault-Tolerant Quantum Compilation and Architecture (2026), version 2. arXiv:2601.03185."
    },
    {
      "id": "qec-5",
      "text": "Craig Gidney. Stim: a fast stabilizer circuit simulator. Quantum 5, 497 (2021). arXiv:2103.02202."
    }
  ]
};
