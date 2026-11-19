import type { ResearchBlog } from "./types";

export const qnnBenchmarking: ResearchBlog = {
  title: "QNN Benchmarking",
  project: "QNN Benchmarking",
  articleTitle: "Do quantum neural networks help forecast energy once noise, finite measurements and strong classical baselines are considered?",
  articleByline: "Led by Batuhan Hangün, with Anthony Mitine, Hossam Mohamed, Aarush Tiyyagura, Hallie Shiotsu and A. R. Bathri Narayanan",
  content: [
    { type: "paragraph", text: "Every power grid must match supply and demand second by second. Operators plan that balance with forecasts: how much electricity people will use (load), and how much solar panels and wind turbines will produce. As more renewable energy joins the grid, these forecasts get harder and more important, because sunlight and wind change by the hour." },
    { type: "paragraph", text: "Machine learning already does much of this forecasting today. Quantum machine learning is often proposed as the next step, and several studies, including our own earlier work on wind power, report quantum neural networks (QNNs) that are competitive with classical models [[ref:hangun]]. Our project asks the harder follow-up question: does that promise to hold up under realistic conditions and a fair fight?" },
    { type: "heading", text: "Why benchmarking quantum models is tricky" },
    { type: "expandable", summary: "What is a quantum neural network?", body: "A QNN is a quantum circuit with adjustable settings, trained much like a classical neural network. Classical data is encoded into qubits, the circuit transforms them, and a measurement turns the result back into a prediction. Hybrid models combine a QNN with classical layers." },
    { type: "paragraph", text: "A claim that a quantum model ‘beats’ a classical one depends heavily on how the comparison is set up. A large study by Bowles, Ahmed and Schuld tested 12 popular quantum models on 160 datasets and found that out-of-the-box classical models usually came out ahead [[ref:bowles]]. The lesson is not that quantum models are hopeless, but that results depend on experimental design. Three gaps show up repeatedly:" },
    { type: "list", items: ["Ideal simulations. Most studies run QNNs on a perfect, noiseless simulator, which no real device matches.", "Uneven tuning. The quantum model gets careful tuning while the classical baseline gets default settings, or the other way around.", "Narrow evaluation. Accuracy on clean test data says little about how a model behaves when its inputs are noisy or shifted, as real sensor data often is."] },
    { type: "expandable", summary: "What do ‘finite shots’ mean?", body: "A quantum computer does not hand back a clean number. Each run of a circuit gives a random outcome, so the output is estimated by repeating the circuit many times (each repetition is a ‘shot’). Fewer shots mean a noisier estimate, and that noise reaches the model's predictions." },
    { type: "expandable", summary: "What is device-calibrated noise?", body: "Real qubits make errors: gates are imperfect, qubits lose their state over time, and readouts sometimes flip. Quantum hardware providers publish calibration data that describe these error rates, which lets us simulate a specific real device on a classical computer." },
    { type: "heading", text: "Our approach" },
    { type: "paragraph", text: "We are building an open benchmark in which every quantum, hybrid and classical model sees the same data, the same tuning budget and the same levels of realism." },
    { type: "figure", src: "/research/qnn-benchmark-design.png", alt: "Benchmark design: load, solar and wind data feed classical, hybrid and quantum models with equal tuning budgets. Models are evaluated for forecast accuracy and robustness at ideal, finite-shot and calibrated device-noise levels, with optional real hardware." },
    { type: "heading", level: 3, text: "Benchmark design · 4 stages, 3 realism levels" },
    { type: "list", items: ["Same data, same rules. All models forecast the same energy time series with identical data splits and preprocessing.", "Equal tuning budgets. Each model gets the same hyperparameter search budget, so no model wins simply because it was tuned more carefully.", "Three levels of realism. Every model is tested in ideal simulation, finite-shot simulation and device-calibrated noisy simulation. A final run on real quantum hardware is an option.", "Robustness. We perturb the inputs and measure how much each model's forecasts degrade, in the spirit of recent robustness benchmarks run on real quantum processors [[ref:zhang]].", "Open and reproducible. The benchmark is written in Qiskit and PennyLane, runs on HPC resources, and will be released with the paper."] },
    { type: "paragraph", text: "The result is a clear map rather than a leaderboard: where quantum models hold their ground, how their performance changes as realism increases, and what that means for practical energy forecasting." },
  ],
  resultsHeading: "Results",
  resultsContent: "The team is building the benchmark pipeline now, and we will update this section as experiments come in. Our first results are headed for a conference paper, followed by a journal extension.",
  references: [
    { id: "hangun", text: "Hangün, B., Altun, O., & Eyecioglu, O. (2026). Quantum neural networks for wind energy forecasting: A comparative study of performance and scalability with classical models. Quantum Information Processing. https://doi.org/10.1007/s11128-026-05387-8" },
    { id: "bowles", text: "Bowles, J., Ahmed, S., & Schuld, M. (2024). Better than classical? The subtle art of benchmarking quantum machine learning models. arXiv:2403.07059. https://arxiv.org/abs/2403.07059" },
    { id: "zhang", text: "Zhang, H.-F., Chen, Z.-Y., Wang, P., et al. (2026). Experimental robustness benchmarking of quantum neural networks on a superconducting quantum processor. Science China Physics, Mechanics & Astronomy, 69, 260315. https://doi.org/10.1007/s11433-025-2943-6" },
    { id: "ssrn", text: "Hangün, Batuhan and ALTUN, OĞUZ and Eyecioglu, Onder, Quantum Neural Networks for Wind Energy Forecasting: A Comparative Study of Performance and Scalability with Classical Models. Available at SSRN: https://ssrn.com/abstract=5357700 or http://dx.doi.org/10.2139/ssrn.5357700" },
  ],
};
