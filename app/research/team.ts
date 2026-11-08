export interface ResearchTeamMember {
  name: string;
  role: string;
  /** Add each person's short introduction here when ready. */
  blurb: string;
  /** Headshot file stem; accepted extensions are .jpg, .jpeg, .png, and .webp. */
  headshot: string;
}

export const researchTeam: ResearchTeamMember[] = [
  { name: "Sanskriti Shindadkar", role: "Research Director*", blurb: "", headshot: "sanskriti-shindadkar" },
  { name: "Batuhan Hangün", role: "Research Project Lead (QNN Benchmarking)", blurb: "", headshot: "batuhan-hangun" },
  { name: "Deidra Hodges", role: "Research Project Lead (AI for Fabricating Josephson Junctions)", blurb: "", headshot: "deidra-hodges" },
  { name: "Clyde Villacrusis", role: "Researcher", blurb: "", headshot: "clyde-villacrusis" },
  { name: "Jasper Andrews", role: "Researcher", blurb: "", headshot: "jasper-andrews" },
  { name: "Kerem Yurtseven", role: "Researcher", blurb: "", headshot: "kerem-yurtseven" },
  { name: "Shreya Sinha", role: "Researcher", blurb: "", headshot: "shreya-sinha" },
  { name: "Anthony Mitine", role: "Researcher", blurb: "", headshot: "anthony-mitine" },
  { name: "A R Bathri Narayanan", role: "Researcher", blurb: "", headshot: "a-r-bathri-narayanan" },
  { name: "Aashay Pandharpatte", role: "Researcher", blurb: "", headshot: "aashay-pandharpatte" },
  { name: "Nachiket Joshi", role: "Researcher", blurb: "", headshot: "nachiket-joshi" },
  { name: "Perawit Boonsomchua", role: "Researcher", blurb: "", headshot: "perawit-boonsomchua" },
];
