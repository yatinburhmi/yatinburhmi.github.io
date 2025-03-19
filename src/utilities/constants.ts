import emoji from "react-easy-emoji";

const greeting = {
  username: "Yatin Burhmi",
  title: "Hi all, I'm Yatin",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
};

const experienceSection = {
  title: "Experience",
  display: true,
};

const experiences = [
  {
    id: 1,
    role: "Software Engineer",
    company: "VIRAL NATION",
    companyUrl: "https://www.viralnation.com/",
    startDate: "June 2022",
    endDate: "Present",
    overview:
      "Led the development of VN-Empower, leveraging REST APIs, GraphQL and ReactJS to create a scalable and intuitive employee advocacy platform.",
    technologies: [
      "Node.js",
      "React",
      "Redux",
      "GraphQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "AWS",
      "Stripe",
    ],
  },
  {
    id: 2,
    role: "Software Developer",
    company: "Kuliza Technologies",
    companyUrl: "https://www.finvolv.ai/",
    startDate: "May 2019",
    endDate: "April 2021",
    overview: "Scaled a loan platform for Standard Chartered, Singapore. ",
    technologies: ["React", "Node.js", "Java", "SpringBoot", "MySQL", "Docker"],
  },
  {
    id: 3,
    role: "System Engineer Trainee",
    company: "Infosys",
    companyUrl: "https://www.infosys.com/",
    startDate: "Feb 2018",
    endDate: "May 2018",
    overview:
      "Developed a Data Generation Tool for creating custom test data linked to MS SQL Server",
    technologies: ["MS SQL Server", "IBM Cognos", "Javascript"],
  },
];

const projectSection = {
  title: "Projects",
  display: false,
};

interface IProject {
  id: number;
  title: string;
  description: string;
  tech: Array<string>;
  github: string;
  demo: string;
}

export type { IProject as IProjectType };

const projects: Array<IProject> = [
  // {
  //   id: 1,
  //   title: "",
  //   description: "",
  //   tech: [""],
  //   github: "",
  //   demo: "",
  // },
];

const contactSection = {
  title: "Contact",
  display: true,
};

const resumeSection = {
  title: "Resume",
  display: true,
};

const YATIN_EMAIL_ID = "yatinburhmi@gmail.com";
const YATIN_BURHMI_LINKEDIN = "https://www.linkedin.com/in/yatin-burhmi/";
const YATIN_BURHMI_GITHUB = "https://github.com/yatinburhmi";

export {
  greeting,
  experienceSection,
  experiences,
  projectSection,
  projects,
  contactSection,
  resumeSection,
  YATIN_EMAIL_ID,
  YATIN_BURHMI_LINKEDIN,
  YATIN_BURHMI_GITHUB,
};
