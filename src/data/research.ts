export interface ResearchDomain {
  id: string;
  iconName: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  featuredVideo?: {
    title: string;
    url: string;
  };
}

export const researchPhilosophyStatement = 
  "Technology is human-centered, and thus needs to be usable by people. I am passionate about designing systems and technologies that are usable and intuitive for a wide range of potential users. My work reflects this commitment, as I have built systems and designed interactions that aim to bridge the gap between technical complexity and user understanding. While my work has focused on human-robot interaction, I have incorporated elements from human-computer interaction, design, and human behavior literature to create interfaces and interactions that simplify complex tasks, enabling users to engage with advanced technologies more effectively. By building systems that bridge the gap between technical complexity and user understanding, I aim to make advanced technologies seamlessly integrate into people's daily lives across various domains.";

export const researchOverviewStatement = researchPhilosophyStatement;

export const researchDomains: ResearchDomain[] = [
  {
    id: "agentic-llms",
    iconName: "BrainCircuit",
    title: "Agentic LLMs & AI Systems",
    subtitle: "LLM-Assisted Robot Programming & Reasoning",
    description: "Developing agents and agentic systems that translate natural language user requests and high-level goals into verifiably safe and efficient robot programs.",
    tags: ["Agentic LLMs", "LLM Planning", "Code Generation", "Autonomous Reasoning"],
    featuredVideo: {
      title: "Robo-Blocks: LLM Assisted Robot Programming",
      url: "https://www.youtube.com/watch?v=qpr57pWMeOc"
    }
  },
  {
    id: "hri-cobots",
    iconName: "Bot",
    title: "Human-Robot Interaction & Cobots",
    subtitle: "Intuitive Interfaces & Manufacturing Workflows",
    description: "Designing end-user interfaces, expert frames, and task allocation planners that empower human workers to collaborate seamlessly with collaborative industrial robots.",
    tags: ["HRI", "Cobots", "Manufacturing Integration", "Task Allocation"],
    featuredVideo: {
      title: "CoFrame: Expert-Assisted Cobot Programming",
      url: "https://www.youtube.com/watch?v=8cp1bihmV6o"
    }
  },
  {
    id: "child-robot-interaction",
    iconName: "Sparkles",
    title: "Social & Educational Robotics",
    subtitle: "Child-Robot Learning Companions",
    description: "Investigating long-term in-home deployments of social reading & math companion robots to support child development and parental engagement.",
    tags: ["Social Robots", "In-Home Deployment", "Affective Computing", "Educational AI"],
    featuredVideo: {
      title: "RoboMath: Educational Learning Companion",
      url: "https://www.youtube.com/watch?v=Ons3kjGKjWQ"
    }
  }
];
