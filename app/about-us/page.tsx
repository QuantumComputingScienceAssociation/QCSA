'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  major: string;
  year: string;
  bio: string;
  image: string;
  linkedIn: string;
}

interface FacultyMember {
  id: number;
  name: string;
  role: string;
  affiliation?: string;
  branches: string[];
  bio: string;
  image: string;
  linkedIn: string;
}

const boardMembers: TeamMember[] = [
  {
    id: 1,
    name: "Victor Yu",
    role: "President",
    major: "Electrical Engineering",
    year: "2nd Year",
    bio: "Victor is a second year at UCLA studying Electrical Engineering with a minor in Mathematics. He works in the Petta Group to model the effects of cosmic rays on semiconductor spin qubits and to perform automated tune-up of quantum dot systems. He enjoys teaching others about quantum science, such as through QCSA's involvement in ACM Quantum. In his free time, he enjoys playing the piano, reading fantasy & science fiction, eating good food, and calisthenics.",
    image: "/Victoryu.png",
    linkedIn: "https://www.linkedin.com/in/victoryu0/",
  },
  {
    id: 2,
    name: "Alexander Jürgens",
    role: "President",
    major: "EECS",
    year: "PhD Student",
    bio: "Alex is an EECS PhD student at the Narang Lab. He completed his BSc in Physics and MSc in Quantum Engineering at ETH Zürich in Switzerland and worked at IBM and the German Aerospace Center before joining UCLA in 2024. In his research, Alexander focuses on Quantum Algorithms and Learning Theory as well as optimization techniques and Machine Learning. On the rare occasion that he quantum tunnels outside the office he enjoys water sports, Brazilian Jiu Jitsu and all things Italian in nature.",
    image: "/AlexanderJurgens.png",
    linkedIn: "https://www.linkedin.com/in/alexander-jurgens/",
  },
  {
    id: 3,
    name: "Ilaana Khan",
    role: "President",
    major: "Physics",
    year: "2nd Year",
    bio: "Ilaana is an undergraduate at UCLA studying Biophysics and on the QCSA leadership board. She is involved in the research of computational fluid dynamics to model blood vessels, talent development via mixed-methods psychology, and modeling distant stars in the Milky Way galaxy. Ilaana has previously worked with the American Cancer Society, ACM, City of Austin Law Department, Society of Robotic Surgeons, and Ascension Seton Medical Center in Austin. At UCLA, Ilaana is an editor at the Society and Genetics Research Journal and co-manager of the Upsilon Lab CFD group. She is also a nationally registered Emergency Medical Technician. Outside of her academic involvements, Ilaana loves Roblox, Minecraft, and caffeine.",
    image: "/ilaana-web.webp",
    linkedIn: "https://www.linkedin.com/in/ilaanak/",
  },
  {
    id: 4,
    name: "Nicolas Dirnegger",
    role: "Quantum Devices",
    major: "Electrical Engineering",
    year: "PhD Student",
    bio: "Nicolas received a Bachelor of Science in Electrical Engineering at ETH Zurich, Switzerland in 2022 and a Master of Science in Physics at the University of California, Los Angeles in 2023. He is currently pursuing a PhD in Electrical Engineering in the NarangLab. Currently, his main research focus is on quantum sensing and quantum networks. He also has research interests in quantum error correction and quantum computation. Feel free to reach out if you want to go surfing!",
    image: "/NicolasDirnegger.png",
    linkedIn: "https://www.linkedin.com/in/nicolas-dirnegger-aa8442100/",
  },
  {
    id: 5,
    name: "Cody Fan",
    role: "Quantum Devices",
    major: "EE & Physics",
    year: "PhD Student",
    bio: "Cody received a double Bachelor of Science in Electrical Engineering and Physics from UCLA and a Masters of Science in Electrical Engineering from UCLA with a Distinguished Masters Thesis Award. He is currently pursuing a PhD at the Mesoscopic Optics and Quantum Electronics Lab as an NSF Graduate Research Fellow. Currently, his main research focus is on superconducting bosonic qubits and silicon color centers. Before starting graduate school, he interned at Stanford Research Institute as a Quantum Machine Learning Intern. In his free time, he enjoys producing music, cooking, fashion, and raving.",
    image: "/CodyFan.png",
    linkedIn: "https://www.linkedin.com/in/cody-fan-09717a167/",
  },
  // {
  //   id: 6,
  //   name: "Samuel Oh",
  //   role: "Finances",
  //   major: "Computer Science & Economics",
  //   year: "3rd Year",
  //   bio: "Samuel is a 3rd-year Computer Science and Economics student at UCLA. He serves as Sector Head at Bruin Capital Management and is actively involved in multiple finance organizations on campus. Samuel previously served 18 months in the Republic of Korea Army, where he worked in Korean-English interpretation and military logistics. His past experiences also include internships in corporate finance and consulting. After graduation, he hopes to pursue a career in the finance industry.",
  //   image: "/Samuel.png",
  //   linkedIn: "https://www.linkedin.com/in/samuel-oh-ucla/",
  // },
  {
    id: 7,
    name: "Sanskriti Shindadkar",
    role: "Research Lead",
    major: "Bioengineering",
    year: "4th Year",
    bio: "Sanskriti is a fourth year undergraduate bioengineering student at UCLA. She enjoys exploring quantum computing for chemistry and biological applications. She has previously led the industry collaboration with QCSA, BruinAI, and Fetch.ai to explore the use of hybrid quantum-CNNs for predicting protein-ligand binding energies. She loves hearing about projects other people are working on and are excited about, so contact her any time to chat over lunch :)",
    image: "/sanskriti.png",
    linkedIn: "https://www.linkedin.com/in/sanskriti/",
  },
  {
    id: 8,
    name: "Connor Engel",
    role: "Events & Advertisement",
    major: "Physics",
    year: "3rd Year",
    bio: "Connor is a third-year undergraduate student majoring in Physics. He currently works as a research assistant in Professor Qianhui Shi's laboratory, where he contributes to condensed matter physics. Connor is passionate about exploring the fundamental principles of physics and is particularly fascinated by the potential of photonics in advancing quantum computing technologies. He also has an adorable dog who is terrified of Connor getting weird ideas about boxes and superpositions.",
    image: "/Connor.png",
    linkedIn: "https://www.linkedin.com/in/connor-engel-492216254/",
  },
  {
    id: 9,
    name: "Matt Guibord",
    role: "Events & Advertisement",
    major: "Electrical Engineering",
    year: "PhD",
    bio: "Matt is an Electrical Engineering PhD student at UCLA researching quantum-limited cavity optomechanics in the Mesoscopic Optics and Quantum Electronics Laboratory. Before joining UCLA, he received his B.S. in Electrical and Computer Engineering from UIUC, where he explored the intersection of NV centers and plasmonics. Matt has previously studied distributed computing at Northrop Grumman and superconducting qubit packaging at Applied Materials. Outside of the lab, he loves to cycle, produce music, and jam on his sax.",
    image: "/matt-web.webp",
    linkedIn: "https://www.linkedin.com/in/matthew-guibord/",
  },
  {
    id: 10,
    name: "Clyde Villacrusis",
    role: "Web Developer Tech Lead",
    major: "Computer Science",
    year: "4th Year",
    bio: "Helloo!! Clyde Villacrusis is an undergraduate 4th year Computer Science and Linguistics double major. He is apart of the QCSA's tech team and working on making an interactive and accessible website for all. He is extremely excited to learn more about Quantum Computing while also developing his tech skills. Besides QCSA. he also interned under UCLA Health to make their AI-powered application (still in progress) and he is also in fetch.ai x qcsa x bruin.ai research group to research more about predicting binding affinities using hybrid CNNs, traditional Machine learning modes, and quantum circuits! He also likes to play Valorant, Minecraft, nature, and caffeine. Hit him up anytime to learn or just to chat about anything!",
    image: "/clyde.png",
    linkedIn: "https://www.linkedin.com/in/clydevillacrusis/",
  },
  {
    id: 11,
    name: "Dibyesh Ganguly",
    role: "Web Developer Tech Lead",
    major: "Computer Science and Engineering",
    year: "2nd Year",
    bio: "Dibyesh is a sophomore at UCLA, majoring in Computer Science and Engineering and Pure Mathematics, where he primarily conducts research in High-energy QCD analyses at the Kang Research Group, with additional interests in quantum simulation and physics-driven machine learning for large-scale scientific modelling. Outside of the lab, he competes on UCLA's Archery team, is active in IEEE at UCLA, and is a big coaster and aviation enthusiast!",
    image: "/dibyesh.jpg",
    linkedIn: "https://www.linkedin.com/in/dibyeshganguly/",
  },
  {
    id: 12,
    name: "Dhruv Saran",
    role: "Web Developer",
    major: "Computer Science",
    year: "3rd Year",
    bio: "Dhruv is a junior Computer Science student at UCLA with interests in software engineering, machine learning, and systems, and is actively involved in physics research, tutoring through Upsilon Pi Epsilon @ UCLA, and building impactful full-stack and AI projects.",
    image: "/dhruv.png",
    linkedIn: "https://www.linkedin.com/in/dhruv-saran/",
  },
  {
    id: 13,
    name: "Ivan Fang",
    role: "Web Developer",
    major: "Computer Science",
    year: "1st Year",
    bio: "Ivan is a Computer Science student at UCLA, originally from Singapore. As part of QCSA's tech team, he works on building and maintaining the club's various websites. Outside of QCSA, he's also a developer on UCLA's ACM Dev Team and on UCLA MentorSEAS, where he supports incoming engineering students. On the quantum side, he's more of a \"curious observer\" than researcher. When he's not writing code, he's probably eating in the dining halls.",
    image: "/ivan-web.webp",
    linkedIn: "https://www.linkedin.com/in/ivan-fang-dev/",
  },
  {
    id: 14,
    name: "Kimberley Wu",
    role: "Designer",
    major: "Design Media Arts and Psychology",
    year: "2nd Year",
    bio: "Kimberley is a second-year undergraduate studying Design Media Arts and Psychology. She is part of QCSA's design team, creating engaging websites and developing their visual branding. She is excited to learn more about quantum science while building her design skills. Kimberley previously interned in communications at BOUSD and is currently involved in Daily Bruin, BruinLife, Adobe Creatives, and Stratist Prep. In her free time, she enjoys spontaneous side-quests, playing tennis, photography, and sketch-booking.",
    image: "/kimberley.png",
    linkedIn: "https://www.linkedin.com/in/kimberleywu/",
  },
  {
    id: 15,
    name: "Gina Namkung",
    role: "Designer",
    major: "Cognitive Science and Architecture",
    year: "2nd Year",
    bio: "Gina is a second year undergraduate Cognitive Science and Architecture student at UCLA. She is a part of the QCSA's design team and eager to create an intuitive and immersive website experience for all. Gina is passionate about learning more about the art of quantum while developing design skills. At UCLA Gina is involved in the Data-Graphics section of the Daily Bruin, secretary for the American Institute of Architecture Students, and worked as a designer for a journaling app called Rose Garden. In her free time you can find her exploring LA for new thrift finds and cafes.",
    image: "/gina.png",
    linkedIn: "https://www.linkedin.com/in/gina-namkung/",
  },
];

const facultyLeadership: FacultyMember[] = [
  {
    id: 1,
    name: "Professor Mark Gyure",
    role: "Senior Director",
    affiliation: "UCLA",
    branches: ['UCLA'],
    bio: "In addition to coordinating the day-to-day activities of the CQSE, Gyure's research is focused on the theory and simulation of solid-state quantum information processing devices and architectures, specifically electrostatically-defined semiconductor quantum dots. He and collaborators at UCLA and HRL Laboratories, LLC in Malibu have developed a sophisticated device modeling code that employs the full configuration-interaction (FCI) method to solve the multi-electron Schrodinger equation self consistently with the electrostatic potential generated from realistic device geometries, enabling highly accurate calculations of the energy spectrum of coupled quantum dot systems. He came to UCLA recently from HRL Laboratories where he was the Principal Investigator and Chief Scientist for over 15 years on numerous programs in the quantum information science and technology area.",
    image: "/mark.png",
    linkedIn: "https://www.linkedin.com/in/mark-gyure-15b186196/",
  },
  {
    id: 2,
    name: "Eli Levenson-Falk",
    role: "Senior Director",
    affiliation: "University of Southern California",
    branches: ['UCLA', 'QDC'],
    bio: "Eli Levenson-Falk is an Associate Professor at USC specializing in quantum device fabrication, materials science, and noise in superconducting quantum systems. His group studies the microscopic origins of decoherence and develops new approaches to building long-lived qubits.",
    image: "/ELILF.jpeg",
    linkedIn: "",
  },
  {
    id: 3,
    name: "Murat Can Sarihan",
    role: "Senior Director",
    affiliation: "Google Quantum AI",
    branches: ['UCLA', 'QDC'],
    bio: "Murat Can Sarihan is a Research Scientist at Google Quantum AI focusing on superconducting qubit design and quantum error correction. His research contributes to Google's efforts to build large-scale, error-corrected quantum processors.",
    image: "/Murat_Can_Sarihan.jpeg",
    linkedIn: "",
  },
  {
    id: 4,
    name: "Zlatko Minev",
    role: "Senior Director",
    affiliation: "Google Quantum AI",
    branches: ['UCLA', 'QDC'],
    bio: "Zlatko Minev is a Research Scientist at Google Quantum AI, known for his landmark work on catching and reversing quantum jumps. He also created Qiskit Metal, an open-source quantum hardware design tool. His research spans quantum measurement, qubit design automation, and machine learning for quantum systems.",
    image: "/ZMinev.jpeg",
    linkedIn: "",
  },
];

const teamBranches = ['UCLA', 'QDC'];

export default function AboutPage() {
  const [hoveredMember, setHoveredMember] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedMember, setSelectedMember] = useState<TeamMember | FacultyMember | null>(null);
  const [selectedBranch, setSelectedBranch] = useState('UCLA');

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMemberClick = (member: TeamMember | FacultyMember) => {
    if (isMobile) {
      setSelectedMember(member);
    } else if (member.linkedIn) {
      window.open(member.linkedIn, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen bg-[#F3F8FF]">
      <Navbar />
      <main>

        {/* Hero / Mission Statement */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold text-[#234285] mb-6">About QCSA</h1>
              <p className="text-lg text-[#234285]/80 max-w-3xl mx-auto leading-relaxed">
                We want to empower the next generation of students through hands-on learning,
                collaboration, and prepare them to lead in the field of quantum computing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#234285] text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
            >
              Our Values
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Collaboration',
                  delay: 0,
                  text: 'We believe that progress in quantum computing comes from interdisciplinary teamwork. QCSA fosters a supportive community that brings together students, researchers, and industry leaders.',
                },
                {
                  title: 'Education',
                  delay: 0.2,
                  text: 'We are committed to making quantum computing accessible to all students. Through workshops, talks, and hands-on learning, we help break down complex topics and spark curiosity.',
                },
                {
                  title: 'Innovation',
                  delay: 0.4,
                  text: 'QCSA encourages creative problem-solving and forward thinking. We empower students to explore new ideas, contribute to cutting-edge research, and shape the future.',
                },
              ].map(({ title, delay, text }) => (
                <motion.div
                  key={title}
                  className="bg-[#F3F8FF] rounded-2xl p-8 shadow-sm"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay, duration: 0.6 }}
                  whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
                >
                  <h3 className="text-2xl font-bold text-[#234285] mb-4">{title}</h3>
                  <p className="text-[#234285]/80 leading-relaxed">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Meet the Team */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#234285] text-center mb-10"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Meet the Team
            </motion.h2>

            {/* Branch tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {teamBranches.map((branch) => (
                <button
                  key={branch}
                  onClick={() => setSelectedBranch(branch)}
                  className={`px-5 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
                    selectedBranch === branch
                      ? 'bg-[#234285] text-white'
                      : 'bg-white text-[#234285] border border-[#234285]/30 hover:bg-[#234285]/10'
                  }`}
                >
                  {branch}
                </button>
              ))}
            </div>

            {selectedBranch === 'UCLA' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {boardMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    className={`relative group cursor-pointer ${hoveredMember === member.id ? 'z-50' : 'z-0'}`}
                    onMouseEnter={() => !isMobile && setHoveredMember(member.id)}
                    onMouseLeave={() => !isMobile && setHoveredMember(null)}
                    onClick={() => handleMemberClick(member)}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05, duration: 0.5 }}
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105">
                      <div className="w-full h-64 bg-gray-200 flex items-center justify-center overflow-hidden relative">
                        <Image
                          src={member.image}
                          alt={member.name}
                          fill
                          className="object-cover"
                        />
                        {isMobile && (
                          <button
                            className="absolute top-2 right-2 w-8 h-8 bg-[#234285] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg hover:bg-blue-700 transition-colors z-10"
                            onClick={(e) => {
                              e.stopPropagation();
                              if (member.linkedIn) window.open(member.linkedIn, '_blank', 'noopener,noreferrer');
                            }}
                            aria-label={`View ${member.name}'s LinkedIn profile`}
                          >
                            in
                          </button>
                        )}
                      </div>
                      <div className="p-5 text-center">
                        <h3 className="font-bold text-lg text-gray-800 mb-1">{member.name}</h3>
                        <p className="text-[#234285] font-medium text-sm mb-1">{member.role}</p>
                        <p className="text-gray-500 text-xs">{member.major}, {member.year}</p>
                      </div>
                    </div>

                    {/* Desktop hover popup */}
                    {!isMobile && hoveredMember === member.id && (
                      <div className="absolute z-50 top-0 left-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 transform -translate-x-2 -translate-y-2 max-h-80 overflow-y-auto">
                        <div className="flex items-start gap-4">
                          <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                            <Image
                              src={member.image}
                              alt={member.name}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h3 className="font-bold text-base text-gray-800 mb-0.5">{member.name}</h3>
                            <p className="text-[#234285] font-medium text-sm mb-1">{member.role}</p>
                            <p className="text-gray-500 text-xs mb-3">{member.major}, {member.year}</p>
                            <p className="text-gray-600 text-xs leading-relaxed">{member.bio}</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            ) : null}
          </div>
        </section>

        {(selectedBranch === 'UCLA' || selectedBranch === 'QDC') && (
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-[#234285] text-center mb-16"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Senior Leadership
            </motion.h2>
            <div className="flex flex-wrap justify-center gap-8">
              {facultyLeadership.filter((f) => f.branches.includes(selectedBranch)).map((faculty, index) => (
                <motion.div
                  key={faculty.id}
                  className={`relative group cursor-pointer w-full max-w-xs ${hoveredMember === faculty.id + 1000 ? 'z-50' : 'z-0'}`}
                  onMouseEnter={() => !isMobile && setHoveredMember(faculty.id + 1000)}
                  onMouseLeave={() => !isMobile && setHoveredMember(null)}
                  onClick={() => handleMemberClick(faculty)}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                >
                  <div className="bg-[#F3F8FF] rounded-2xl overflow-hidden shadow-md transition-transform duration-300 group-hover:scale-105">
                    <div className="w-full h-64 bg-gray-200 flex items-center justify-center overflow-hidden relative">
                      <Image
                        src={faculty.image}
                        alt={faculty.name}
                        fill
                        className="object-cover"
                      />
                      {isMobile && faculty.linkedIn && (
                        <button
                          className="absolute top-2 right-2 w-8 h-8 bg-[#234285] text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg hover:bg-blue-700 transition-colors z-10"
                          onClick={(e) => {
                            e.stopPropagation();
                            if (faculty.linkedIn) window.open(faculty.linkedIn, '_blank', 'noopener,noreferrer');
                          }}
                          aria-label={`View ${faculty.name}'s LinkedIn profile`}
                        >
                          in
                        </button>
                      )}
                    </div>
                    <div className="p-5 text-center">
                      <h3 className="font-bold text-lg text-gray-800 mb-1">{faculty.name}</h3>
                      <p className="text-[#234285] font-medium text-sm">{faculty.role}</p>
                      {faculty.affiliation && <p className="text-gray-500 text-xs mt-0.5">{faculty.affiliation}</p>}
                    </div>
                  </div>

                  {/* Desktop hover popup */}
                  {!isMobile && hoveredMember === faculty.id + 1000 && (
                    <div className="absolute z-50 top-0 left-0 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 transform -translate-x-2 -translate-y-2 max-h-80 overflow-y-auto">
                      <div className="flex items-start gap-4">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                          <Image
                            src={faculty.image}
                            alt={faculty.name}
                            fill
                            className="rounded-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-bold text-base text-gray-800 mb-0.5">{faculty.name}</h3>
                          <p className="text-[#234285] font-medium text-sm mb-0.5">{faculty.role}</p>
                          {faculty.affiliation && <p className="text-gray-500 text-xs mb-3">{faculty.affiliation}</p>}
                          <p className="text-gray-600 text-xs leading-relaxed">{faculty.bio}</p>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* Mobile Bio Modal */}
        {isMobile && selectedMember && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
            onClick={() => setSelectedMember(null)}
            style={{ backdropFilter: 'blur(2px)' }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-auto p-6"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden flex-shrink-0 bg-gray-200">
                    <Image
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 id="modal-title" className="font-bold text-lg text-gray-800 mb-1">{selectedMember.name}</h3>
                    <p className="text-[#234285] font-medium text-sm mb-1">{selectedMember.role}</p>
                    {'major' in selectedMember && (
                      <p className="text-gray-500 text-xs">{selectedMember.major}, {selectedMember.year}</p>
                    )}
                  </div>
                </div>
                <button
                  className="text-gray-500 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-800 rounded p-1 flex-shrink-0"
                  onClick={() => setSelectedMember(null)}
                  aria-label="Close modal"
                >
                  <span aria-hidden="true" className="text-xl">✕</span>
                </button>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{selectedMember.bio}</p>
              {selectedMember.linkedIn && (
                <div className="mt-6 flex justify-center">
                  <button
                    className="bg-[#234285] text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200"
                    onClick={() => window.open(selectedMember.linkedIn, '_blank', 'noopener,noreferrer')}
                  >
                    View LinkedIn Profile
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}

      </main>
      <Footer />
    </div>
  );
}
