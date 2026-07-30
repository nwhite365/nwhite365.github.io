export interface Profile {
  name: string;
  title: string;
  role: string;
  company: {
    name: string;
    url: string;
  };
  education: {
    phd: {
      degree: string;
      institution: string;
      lab: string;
      labUrl: string;
      advisor: string;
      advisorUrl: string;
    };
    ms: {
      degree: string;
      institution: string;
    };
    bs: {
      degree: string;
      institution: string;
    };
  };
  statusBadge: {
    text: string;
    emoji: string;
  };
  bioParagraphs: string[];
  socialLinks: {
    email: string;
    github: string;
    linkedin: string;
    googleScholar: string;
    researchGate: string;
    cvUrl: string;
  };
}

export const profileData: Profile = {
  name: "Nathan Thomas White",
  title: "Ph.D.",
  role: "Research Software Engineer",
  company: {
    name: "Intrinsic",
    url: "https://www.intrinsic.ai/"
  },
  education: {
    phd: {
      degree: "Ph.D. in Computer Science",
      institution: "University of Wisconsin - Madison",
      lab: "People and Robots Lab",
      labUrl: "https://peopleandrobots.wisc.edu/",
      advisor: "Dr. Bilge Mutlu",
      advisorUrl: "http://bilgemutlu.com/"
    },
    ms: {
      degree: "M.S. in Computer Science",
      institution: "University of Wisconsin - Madison"
    },
    bs: {
      degree: "B.S. in Computer Science",
      institution: "University of Minnesota - Twin Cities"
    }
  },
  statusBadge: {
    text: "Building Agentic LLMs & Intelligent Robotics",
    emoji: "🤖"
  },
  bioParagraphs: [
    "I currently work at Intrinsic as a Research Software Engineer, developing advanced robotics and AI systems.",
    "Technology is human-centered and needs to be usable by people. I am passionate about designing systems and technologies that are usable and intuitive for a wide range of potential users. My research bridges the gap between technical complexity and user understanding across Human-Robot Interaction (HRI), Agentic AI, design, and human behavior."
  ],
  socialLinks: {
    email: "mailto:ntwhite@intrinsic.ai",
    github: "https://github.com/nwhite365",
    linkedin: "https://www.linkedin.com/in/white-nathan-t/",
    googleScholar: "https://scholar.google.com/citations?user=cYNLu9cAAAAJ",
    researchGate: "https://www.researchgate.net/profile/Nathan-White-18",
    cvUrl: "https://drive.google.com/file/d/1Fp8XyXQk6Re5hrKr8RrbKu8b_mI2cvn0/view"
  }
};
