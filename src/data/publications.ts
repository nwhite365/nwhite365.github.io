export interface Publication {
  id: string;
  title: string;
  authors: string;
  abstract: string;
  date: string; // YYYY
  venue: string;
  venueShort: string;
  paperurl: string;
  videourl?: string;
  citations?: number;
  bibtex: string;
  keywords: string[];
}

export const publicationsData: Publication[] = [
  // --- 2026 ---
  {
    id: "robo-blocks-2026",
    title: "Robo-Blocks: Generative Scaffolding in End-User Design and Programming of Social Robots",
    authors: "AJ Sato, CY Kim, NT White, A Maneesh, Y Wang, HR Ho, B Mutlu",
    abstract: "Explores generative AI scaffolding for end-user programming of social robots, combining block-based interfaces with large language model assistance for natural interaction authoring.",
    date: "2026",
    venue: "Proceedings of the 2026 Designing Interactive Systems Conference (DIS '26), 3763-3779",
    venueShort: "DIS '26",
    paperurl: "https://arxiv.org/abs/2605.28154",
    videourl: "https://www.youtube.com/watch?v=qpr57pWMeOc",
    citations: 1,
    bibtex: `@inproceedings{sato2026roboblocks,
  title={Robo-Blocks: Generative Scaffolding in End-User Design and Programming of Social Robots},
  author={Sato, AJ and Kim, CY and White, Nathan Thomas and Maneesh, A and Wang, Y and Ho, HR and Mutlu, Bilge},
  booktitle={Proceedings of the 2026 Designing Interactive Systems Conference},
  pages={3763--3779},
  year={2026}
}`,
    keywords: ["Generative Scaffolding", "Social Robots", "LLMs", "End-User Interfaces"]
  },
  {
    id: "robocritics-2026",
    title: "Robocritics: Enabling reliable end-to-end llm robot programming through expert-informed critics",
    authors: "CY Kim, NT White, E He, F Sala, B Mutlu",
    abstract: "Proposes an end-to-end LLM robot programming framework incorporating expert-informed critic modules to evaluate, verify, and ground code generation for reliable robot execution.",
    date: "2026",
    venue: "Proceedings of the 21st ACM/IEEE International Conference on Human-Robot Interaction (HRI '26)",
    venueShort: "HRI '26",
    paperurl: "https://dl.acm.org/doi/abs/10.1145/3757279.3785550",
    citations: 2,
    bibtex: `@inproceedings{kim2026robocritics,
  title={Robocritics: Enabling reliable end-to-end llm robot programming through expert-informed critics},
  author={Kim, CY and White, Nathan Thomas and He, E and Sala, F and Mutlu, Bilge},
  booktitle={Proceedings of the 21st ACM/IEEE International Conference on Human-Robot Interaction},
  year={2026}
}`,
    keywords: ["LLM Agents", "Robot Programming", "AI Reliability"]
  },

  // --- 2025 ---
  {
    id: "bridging-generations-2025",
    title: "Bridging generations using ai-supported co-creative activities",
    authors: "CY Kim, AJ Sato, NT White, HR Ho, CP Lee, Y Hwang, B Mutlu",
    abstract: "Explores AI-supported co-creative interfaces designed to foster intergenerational connection and collaborative storytelling between young children and older adults.",
    date: "2025",
    venue: "Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems (CHI '25)",
    venueShort: "CHI '25",
    paperurl: "https://doi.org/10.1145/3706598.3713718",
    videourl: "https://www.youtube.com/watch?v=qpr57pWMeOc",
    citations: 31,
    bibtex: `@inproceedings{kim2025bridging,
  title={Bridging generations using ai-supported co-creative activities},
  author={Kim, CY and Sato, AJ and White, Nathan Thomas and Ho, HR and Lee, CP and Hwang, Y and Mutlu, Bilge},
  booktitle={Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems},
  year={2025}
}`,
    keywords: ["Co-Creative AI", "Intergenerational", "HCI"]
  },
  {
    id: "robot-primals-2025",
    title: "Robot Primals: Exploring World Beliefs as a Source for Robot Behavior Design",
    authors: "D Sullivan, NT White, Y Hu, J DW Clifton, B Mutlu",
    abstract: "Investigates how representing explicit robot world beliefs influences human perception of robot state, intent, and behavioral consistency across collaborative tasks.",
    date: "2025",
    venue: "ACM Transactions on Human-Robot Interaction 15 (1), 1-23",
    venueShort: "THRI '25",
    paperurl: "https://doi.org/10.1145/3749997",
    videourl: "https://www.youtube.com/watch?v=WGt2nPobw3g",
    citations: 2,
    bibtex: `@article{sullivan2025robotprimals,
  title={Robot Primals: Exploring World Beliefs as a Source for Robot Behavior Design},
  author={Sullivan, D and White, Nathan Thomas and Hu, Y and Clifton, J DW and Mutlu, Bilge},
  journal={ACM Transactions on Human-Robot Interaction},
  volume={15},
  number={1},
  pages={1--23},
  year={2025}
}`,
    keywords: ["World Beliefs", "Robot Behavior", "Trust", "HRI"]
  },
  {
    id: "ergonomics-task-allocation-2025",
    title: "Ergonomics analysis for a simulation approach to human-robot collaborative task allocation",
    authors: "A Konstant, N White, B Mutlu, RG Radwin",
    abstract: "Presents an ergonomic evaluation framework for human-robot collaborative task allocation in simulated manufacturing environments.",
    date: "2025",
    venue: "IISE Transactions on Occupational Ergonomics and Human Factors 13 (4), 290-300",
    venueShort: "IISE '25",
    paperurl: "https://www.tandfonline.com/doi/abs/10.1080/24725838.2025.2562469",
    citations: 1,
    bibtex: `@article{konstant2025ergonomics,
  title={Ergonomics analysis for a simulation approach to human-robot collaborative task allocation},
  author={Konstant, A and White, Nathan Thomas and Mutlu, Bilge and Radwin, RG},
  journal={IISE Transactions on Occupational Ergonomics and Human Factors},
  volume={13},
  number={4},
  pages={290--300},
  year={2025}
}`,
    keywords: ["Ergonomics", "Task Allocation", "Simulation", "Cobots"]
  },
  {
    id: "dis-thesis-2025",
    title: "Improving Human-Robot Collaboration Through Abstraction and Scaffolding in Planning and Programming Interfaces",
    authors: "NT White",
    abstract: "Ph.D. Dissertation, University of Wisconsin–Madison. Investigates high-level abstraction frameworks, generative scaffolding, and expert-informed critics for human-robot collaboration.",
    date: "2025",
    venue: "The University of Wisconsin-Madison",
    venueShort: "Ph.D. Thesis '25",
    paperurl: "https://par.nsf.gov/servlets/purl/10655436",
    bibtex: `@phdthesis{white2025improving,
  title={Improving Human-Robot Collaboration Through Abstraction and Scaffolding in Planning and Programming Interfaces},
  author={White, Nathan Thomas},
  school={The University of Wisconsin-Madison},
  year={2025}
}`,
    keywords: ["Ph.D. Thesis", "HRI", "LLMs", "Cobots"]
  },
  {
    id: "carbon-cycle-2025",
    title: "Interactive Visual Analytics of Carbon Cycle Science",
    authors: "L Pham, K Hu, M Joo, N White, A Bloom, K Blackwood, S Lombeyda, ...",
    abstract: "Presents an interactive visual analytics platform designed to analyze, explore, and visualize carbon cycle scientific datasets.",
    date: "2025",
    venue: "IEEE Visualization and Visual Analytics (VIS '25) / OSF Preprints",
    venueShort: "IEEE VIS '25",
    paperurl: "https://osf.io/preprints/osf/v6b7f",
    bibtex: `@article{pham2025interactive,
  title={Interactive Visual Analytics of Carbon Cycle Science},
  author={Pham, L and Hu, K and Joo, M and White, N and Bloom, A and Blackwood, K and Lombeyda, S},
  journal={IEEE Visualization and Visual Analytics (VIS)},
  year={2025}
}`,
    keywords: ["Carbon Cycle", "Data Visualization"]
  },
  {
    id: "climascope-2025",
    title: "Visualizing Climate Model Outputs with CliMAScope",
    authors: "L Pham, K Hu, N White, M Joo, A Renchon, T Schneider, K Blackwood, ...",
    abstract: "Introduces CliMAScope, a visual analysis tool for inspecting, rendering, and diagnosing high-dimensional climate model simulation outputs.",
    date: "2025",
    venue: "IEEE Visualization and Visual Analytics (VIS '25) / OSF Preprints",
    venueShort: "IEEE VIS '25",
    paperurl: "https://osf.io/preprints/osf/z7h8x",
    bibtex: `@article{pham2025climascope,
  title={Visualizing Climate Model Outputs with CliMAScope},
  author={Pham, L and Hu, K and White, N and Joo, M and Renchon, A and Schneider, T and Blackwood, K},
  journal={IEEE Visualization and Visual Analytics (VIS)},
  year={2025}
}`,
    keywords: ["CliMAScope", "Climate Models", "Data Visualization"]
  },

  // --- 2024 ---
  {
    id: "hri-2024-cobot-decisions",
    title: "Making Informed Decisions: Supporting Cobot Integration Considering Business and Worker Preferences",
    authors: "D Sullivan, NT White, A Schoen, B Mutlu",
    abstract: "Robots are ubiquitous in small-to-large-scale manufacturers. While collaborative robots (cobots) have significant potential in these settings due to their flexibility and ease of use, proper integration is critical to realize their full potential. We propose an approach involving planning, analysis, development, and presentation stages to inform manufacturers about cobot integration within facilities prior to the integration process.",
    date: "2024",
    venue: "Proceedings of the 2024 ACM/IEEE International Conference on Human-Robot Interaction (HRI '24)",
    venueShort: "HRI '24",
    paperurl: "https://arxiv.org/pdf/2401.05587.pdf",
    videourl: "",
    citations: 7,
    bibtex: `@inproceedings{sullivan2024making,
  title={Making Informed Decisions: Supporting Cobot Integration Considering Business and Worker Preferences},
  author={Sullivan, D and White, Nathan Thomas and Schoen, A and Mutlu, Bilge},
  booktitle={Proceedings of the 2024 ACM/IEEE International Conference on Human-Robot Interaction},
  year={2024}
}`,
    keywords: ["Cobots", "Manufacturing", "HRI"]
  },
  {
    id: "generative-ai-logic-2024",
    title: "Understanding generative AI in robot logic parametrization",
    authors: "Y Hwang, AJ Sato, P Praveena, NT White, B Mutlu",
    abstract: "Evaluates how generative AI models parametrize control logic, state machines, and task execution parameters in robotic applications.",
    date: "2024",
    venue: "arXiv preprint arXiv:2411.04273",
    venueShort: "ArXiv '24",
    paperurl: "https://arxiv.org/abs/2411.04273",
    citations: 2,
    bibtex: `@article{hwang2024understanding,
  title={Understanding generative AI in robot logic parametrization},
  author={Hwang, Y and Sato, AJ and Praveena, P and White, Nathan Thomas and Mutlu, Bilge},
  journal={arXiv preprint arXiv:2411.04273},
  year={2024}
}`,
    keywords: ["Generative AI"]
  },
  {
    id: "hri-2024-end-user-interfaces",
    title: "End user interfaces for human-robot collaboration",
    authors: "NT White, B Mutlu",
    abstract: "Collaborative robots (cobots) introduce new interaction paradigms that require careful design of work distribution. In this research, we propose a set of tools targeting cobot usage across multiple user groups to simplify collaborative tasks, lower technical barriers, and enable LLM-assisted robot programming.",
    date: "2024",
    venue: "Companion of the 2024 ACM/IEEE International Conference on Human-Robot Interaction (HRI '24)",
    venueShort: "HRI '24 Companion",
    paperurl: "https://dl.acm.org/doi/pdf/10.1145/3610978.3638362",
    videourl: "",
    citations: 1,
    bibtex: `@inproceedings{white2024enduser,
  title={End user interfaces for human-robot collaboration},
  author={White, Nathan Thomas and Mutlu, Bilge},
  booktitle={Companion of the 2024 ACM/IEEE International Conference on Human-Robot Interaction},
  year={2024}
}`,
    keywords: ["End-User Interfaces", "Cobots", "LLMs", "HRI"]
  },
  {
    id: "hri-uist-2024",
    title: "HRI and UIST: Designing Socially Engaging Robot Interfaces",
    authors: "P Praveena, AJ Sato, A Koike, R Zhou, NT White, K Nakagaki",
    abstract: "Explores synergistic interaction design paradigms at the intersection of Human-Robot Interaction (HRI) and User Interface Software and Technology (UIST).",
    date: "2024",
    venue: "Adjunct Proceedings of the 37th Annual ACM Symposium on User Interface Software and Technology (UIST '24)",
    venueShort: "UIST '24 Adjunct",
    paperurl: "https://doi.org/10.1145/3672539.3686705",
    bibtex: `@inproceedings{praveena2024hri,
  title={HRI and UIST: Designing Socially Engaging Robot Interfaces},
  author={Praveena, P and Sato, AJ and Koike, A and Zhou, R and White, Nathan Thomas and Nakagaki, K},
  booktitle={Adjunct Proceedings of the 37th Annual ACM Symposium on User Interface Software and Technology},
  year={2024}
}`,
    keywords: ["HRI", "UIST", "Robot Interfaces", "Social Robots"]
  },

  // --- 2023 ---
  {
    id: "idc-2023-parent-child-robot",
    title: "Designing parent-child-robot interactions to facilitate in-home parental math talk with young children",
    authors: "HR Ho, NT White, EM Hubbard, B Mutlu",
    abstract: "We explore how educational robots can be designed to facilitate parent-child conversations, focusing on math talk as a predictor of later achievement. We prototyped capabilities for a social robot to support math talk via reading and play activities.",
    date: "2023",
    venue: "Proceedings of the 22nd Annual ACM Interaction Design and Children (IDC '23)",
    venueShort: "IDC '23",
    paperurl: "https://arxiv.org/pdf/2305.02525.pdf",
    citations: 30,
    bibtex: `@inproceedings{ho2023designing,
  title={Designing parent-child-robot interactions to facilitate in-home parental math talk with young children},
  author={Ho, HR and White, Nathan Thomas and Hubbard, EM and Mutlu, Bilge},
  booktitle={Proceedings of the 22nd Annual ACM Interaction Design and Children},
  year={2023}
}`,
    keywords: ["Educational Robots", "Parent-Child Interaction", "Social HRI"]
  },

  // --- 2022 ---
  {
    id: "idc-2022-long-term-engagement",
    title: "Understanding factors that shape children’s long term engagement with an in-home learning companion robot",
    authors: "B Cagiltay, NT White, R Ibtasar, B Mutlu, J Michaelis",
    abstract: "We deployed a reading companion robot in 14 families' homes for 4 weeks during the summer. Our qualitative and quantitative analysis revealed critical factors shaping long-term engagement, including family involvement, routines, and individual interests.",
    date: "2022",
    venue: "Proceedings of the 21st annual ACM interaction design and children (IDC '22)",
    venueShort: "IDC '22",
    paperurl: "https://dl.acm.org/doi/pdf/10.1145/3501712.3529747",
    citations: 55,
    bibtex: `@inproceedings{cagiltay2022understanding,
  title={Understanding factors that shape children’s long term engagement with an in-home learning companion robot},
  author={Cagiltay, B and White, Nathan Thomas and Ibtasar, R and Mutlu, Bilge and Michaelis, J},
  booktitle={Proceedings of the 21st annual ACM interaction design and children},
  year={2022}
}`,
    keywords: ["In-Home Deployment", "Longitudinal HRI", "Educational Robotics"]
  },
  {
    id: "hri-2022-coframe",
    title: "CoFrame: A system for training novice cobot programmers",
    authors: "A Schoen, N White, C Henrichs, A Siebert-Evenstone, D Shaffer, B Mutlu",
    abstract: "Using expert insights in collaborative interaction design, we developed a set of Expert Frames integrated into a new training system that enables novice operators to program and troubleshoot industrial cobots like experts.",
    date: "2022",
    venue: "2022 17th ACM/IEEE International Conference on Human-Robot Interaction (HRI '22)",
    venueShort: "HRI '22",
    paperurl: "https://par.nsf.gov/servlets/purl/10340572",
    videourl: "https://www.youtube.com/watch?v=8cp1bihmV6o",
    citations: 26,
    bibtex: `@inproceedings{schoen2022coframe,
  title={CoFrame: A system for training novice cobot programmers},
  author={Schoen, A and White, N and Henrichs, C and Siebert-Evenstone, A and Shaffer, D and Mutlu, Bilge},
  booktitle={2022 17th ACM/IEEE International Conference on Human-Robot Interaction},
  year={2022}
}`,
    keywords: ["Expert Frames", "Cobots", "Training System", "End-User Interfaces"]
  },

  // --- 2021 ---
  {
    id: "idc-2021-robomath",
    title: "RoboMath: Designing a learning companion robot to support children’s numerical skills",
    authors: "HR Ho, B Cagiltay, NT White, EM Hubbard, B Mutlu",
    abstract: "Investigated how young children experience sensory feedback (audio, visual, social) from a companion robot while playing a linear number board game, demonstrating significant engagement and learning gains.",
    date: "2021",
    venue: "Proceedings of the 20th Annual ACM Interaction Design and Children (IDC '21)",
    venueShort: "IDC '21",
    paperurl: "https://dl.acm.org/doi/pdf/10.1145/3459990.3460709",
    videourl: "https://www.youtube.com/watch?v=Ons3kjGKjWQ",
    citations: 20,
    bibtex: `@inproceedings{ho2021robomath,
  title={RoboMath: Designing a learning companion robot to support children’s numerical skills},
  author={Ho, HR and Cagiltay, B and White, Nathan Thomas and Hubbard, EM and Mutlu, Bilge},
  booktitle={Proceedings of the 20th Annual ACM Interaction Design and Children},
  year={2021}
}`,
    keywords: ["Educational Robotics", "Math Learning", "Child HRI"]
  },
  {
    id: "idc-2021-social-commentary",
    title: "Designing emotionally expressive social commentary to facilitate child-robot interaction",
    authors: "NT White, B Cagiltay, JE Michaelis, B Mutlu",
    abstract: "Explored how children experienced emotionally expressive social commentary from a reading companion robot across 5 interaction styles, providing design guidelines for speech content and non-verbal expressiveness.",
    date: "2021",
    venue: "Proceedings of the 20th Annual ACM Interaction Design and Children (IDC '21)",
    venueShort: "IDC '21",
    paperurl: "https://dl.acm.org/doi/pdf/10.1145/3459990.3460714",
    citations: 10,
    bibtex: `@inproceedings{white2021designing,
  title={Designing emotionally expressive social commentary to facilitate child-robot interaction},
  author={White, Nathan Thomas and Cagiltay, B and Michaelis, JE and Mutlu, Bilge},
  booktitle={Proceedings of the 20th Annual ACM Interaction Design and Children},
  year={2021}
}`,
    keywords: ["Social Commentary", "Affective Expressions", "Reading Companion"]
  },
  {
    id: "sas-2021-emotional-expressions",
    title: "Designing Emotional Expressions for a Reading Companion Robot",
    authors: "F Zhao, N White, B Cagiltay, P Niedenthal, J Michaelis, B Mutlu",
    abstract: "Borrowing from theories of nonverbal expressions of emotion, we designed and validated 24 distinct emotional expressions for a reading companion robot (Misty II) across crowdsourced studies with and without social context.",
    date: "2021",
    venue: "OSF / Society for Affective Science",
    venueShort: "OSF '21",
    paperurl: "https://psyarxiv.com/7p2ns",
    citations: 3,
    bibtex: `@article{zhao2021designing,
  title={Designing Emotional Expressions for a Reading Companion Robot},
  author={Zhao, F and White, N and Cagiltay, B and Niedenthal, P and Michaelis, J and Mutlu, Bilge},
  journal={OSF Preprints},
  year={2021}
}`,
    keywords: ["Affective Expressions", "Social Robots"]
  }
];
