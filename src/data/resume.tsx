import { Icons } from "@/components/icons";
import {
  HomeIcon,
  NotebookIcon,
  Database,
  BarChart3,
  PieChart,
  Table,
  Binary,
  GitBranch,
  Code,
  Code2,
  FileCode2,
  Sparkles,
  LayoutDashboard,
  Brain,
  Cpu,
  Bot,
  Server,
  Cloud,
  Layers,
  Workflow,
  Eye,
} from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Docker } from "@/components/ui/svgs/docker";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Ved Prakash Kumar",
  initials: "VPK",
  url: "https://linkedin.com/in/ved-prakash-kumar-6296972a1",
  location: "Patna, Bihar, India",
  locationLink: "https://www.google.com/maps/place/Patna,+Bihar",
  description:
    "Full Stack Data Scientist & AI Engineer skilled in Python, PyTorch, GenAI & Agentic Systems, MLOps, and Cloud deployments.",
  summary:
    "Full Stack Data Scientist & AI Engineer with a B.Tech in Computer Science. Experienced across the complete data & AI lifecycle: from SQL data engineering and exploratory analytics to predictive modeling with Scikit-learn/XGBoost, deep learning with PyTorch/OpenCV, multi-agent GenAI applications (LangChain, Gemini API), and production microservices with FastAPI and Docker. Passionate about architecting scalable, data-driven systems with measurable business impact.",
  avatarUrl: "/ved.jpg",
  skills: [
    // Programming & Core CS
    { name: "Python", icon: Python },
    { name: "SQL", icon: Database },
    { name: "C", icon: Code },
    { name: "C++", icon: Csharp },

    // Data Analysis & Statistics
    { name: "Pandas", icon: Table },
    { name: "NumPy", icon: Binary },
    { name: "Maths & Statistics for ML", icon: Binary },
    { name: "Data Cleaning & EDA", icon: Sparkles },

    // Machine Learning
    { name: "Scikit-learn", icon: Cpu },
    { name: "XGBoost & LightGBM", icon: Cpu },

    // Deep Learning & Computer Vision
    { name: "PyTorch", icon: Brain },
    { name: "TensorFlow & Keras", icon: Brain },
    { name: "CNNs", icon: Brain },
    { name: "OpenCV & Computer Vision", icon: Eye },

    // NLP, LLMs & GenAI
    { name: "Transformers & Hugging Face", icon: Layers },
    { name: "NLP (NLTK, spaCy)", icon: Layers },
    { name: "LangChain & LlamaIndex", icon: Bot },
    { name: "Multi-Agent Systems", icon: Bot },
    { name: "Prompt Engineering & GenAI APIs", icon: Sparkles },

    // MLOps & Backend Deployment
    { name: "FastAPI", icon: Server },
    { name: "Docker", icon: Docker },
    { name: "MLflow & CI/CD Pipelines", icon: Workflow },
    { name: "Streamlit", icon: LayoutDashboard },

    // Databases & Cloud
    { name: "Microsoft SQL Server", icon: Database },
    { name: "MongoDB & Vector Search", icon: Database },
    { name: "AWS (S3, EC2, SageMaker)", icon: Cloud },

    // BI & Visualization
    { name: "Power BI", icon: BarChart3 },
    { name: "IBM Cognos Analytics", icon: PieChart },

    // Developer Tools
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: Icons.github },
    { name: "VS Code", icon: Code },
    { name: "Jupyter Notebook", icon: FileCode2 },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ved258779@gmail.com",
    tel: "+91-9693422878",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/ved-prakash-kumar-6296972a1",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://linkedin.com/in/ved-prakash-kumar-6296972a1",
        icon: Icons.x,
        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://youtube.com",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "mailto:ved258779@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "IBM (Coursera)",
      href: "https://lnkd.in/p/dYh9eWQU",
      badges: ["Professional Certificate"],
      location: "Online",
      title: "Data Analyst & Applied ML Trainee",
      logoUrl: "/ibm.png",
      start: "16 Feb 2026",
      end: "19 Feb 2026",
      description:
        "Completed rigorous hands-on curriculum encompassing data extraction, data cleaning, analysis, predictive modeling, and visualization. Built real-world dashboards in Power BI and IBM Cognos Analytics using Python (Pandas, NumPy) and SQL.",
    },
    {
      company: "EduPyramids & SINE, IIT Bombay",
      href: "https://lnkd.in/p/dyuSrh4x",
      badges: ["Training"],
      location: "Virtual",
      title: "Python Programming Trainee",
      logoUrl: "/sine-iitb.png",
      start: "2026",
      end: "2026",
      description:
        "Completed extensive training in Python programming evaluated by EduPyramids and SINE, IIT Bombay. Mastered core scripting, data structures, algorithms, and computational problem solving with an assessment score of 94.00%.",
    },
    {
      company: "AICTE",
      href: "https://lnkd.in/p/dM5a6jBz",
      badges: ["Virtual Internship"],
      location: "Remote, India",
      title: "Salesforce Developer Virtual Intern",
      logoUrl: "/aicte.png",
      start: "Dec 2023",
      end: "Jan 2024",
      description:
        "Completed the Salesforce Developer Virtual Internship supported by AICTE. Built practical understanding of cloud application architecture, Apex programming, data modeling, and process automation on the Salesforce platform.",
    },
  ],
  education: [
    {
      school: "Bakhtiyarpur College of Engineering, Patna",
      href: "https://bcepatna.ac.in/",
      degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering (CGPA: 7.56/10)",
      logoUrl: "/bce-patna.png",
      start: "Nov 2022",
      end: "May 2026",
    },
    {
      school: "RR College, Sheohar, Bihar",
      href: "#",
      degree: "Intermediate (Class XII) - Percentage: 79%",
      logoUrl: "/rr-college.png",
      start: "2018",
      end: "2020",
    },
    {
      school: "Sri Nawab High School, Sheohar, Bihar",
      href: "#",
      degree: "Matriculation (Class X) - Percentage: 71.2%",
      logoUrl: "/nawab-school.png",
      start: "2017",
      end: "2018",
    },
  ],
  projects: [
    {
      title: "Enterprise Sales Forecasting & MLOps Pipeline",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Engineered an end-to-end sales forecasting and inventory demand planning system. Automated Microsoft SQL Server feature extraction with rolling lag variables, trained XGBoost and LightGBM models with MLflow experiment tracking (achieving an 18% MAPE improvement over baselines), deployed a sub-45ms asynchronous FastAPI inference microservice, and packaged the solution with Docker and Streamlit.",
      technologies: [
        "Python",
        "Microsoft SQL Server",
        "Pandas",
        "Scikit-learn",
        "XGBoost",
        "LightGBM",
        "MLflow",
        "FastAPI",
        "Docker",
        "Streamlit",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/sales-dashboard.jpg",
      video: "",
    },
    {
      title: "Autonomous Multi-Agent Research Assistant",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Architected an autonomous multi-agent research and knowledge synthesis platform using LangChain and Gemini API. Implemented hybrid RAG with MongoDB vector search, citation verification agents, asynchronous FastAPI worker queues, and an interactive Streamlit UI displaying real-time agent reasoning steps and exportable reports.",
      technologies: [
        "Python",
        "LangChain",
        "Gemini API",
        "MongoDB",
        "Vector Search",
        "LlamaIndex",
        "FastAPI",
        "Streamlit",
        "Prompt Engineering",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/orbit-dashboard.jpg",
      video: "",
    },
    {
      title: "Real-Time Industrial Defect Detection System",
      href: "#",
      dates: "2025",
      active: true,
      description:
        "Developed a deep learning computer vision pipeline with PyTorch and OpenCV. Fine-tuned a CNN classifier using transfer learning on 10,000+ surface defect images achieving 93.4% accuracy (0.92 F1-score), and deployed a low-latency (28+ FPS) FastAPI inference microservice with live Streamlit monitoring and defect alert thresholds.",
      technologies: [
        "Python",
        "PyTorch",
        "Torchvision",
        "OpenCV",
        "CNN",
        "Transfer Learning",
        "FastAPI",
        "Docker",
        "Streamlit",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/defect-detection.jpg",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "IBM Data Analyst Professional Certificate",
      dates: "16 Feb 2026 - 19 Feb 2026",
      location: "Online",
      description:
        "Earned professional certification demonstrating comprehensive skills in data analysis, SQL querying, Python libraries (Pandas, NumPy), data visualization, and dashboard creation in Power BI and IBM Cognos.",
      image: "/ibm.png",
      mlh: "",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://lnkd.in/p/dYh9eWQU",
        },
      ],
    },
    {
      title: "Python Programming Trainee & Certification",
      dates: "2026 | Score: 94.00%",
      location: "EduPyramids, SINE, IIT Bombay",
      description:
        "Completed comprehensive Python technical training and earned certificate with an outstanding 94.00% score from EduPyramids and Society for Innovation and Entrepreneurship (SINE), IIT Bombay.",
      image: "/sine-iitb.png",
      mlh: "",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://lnkd.in/p/dyuSrh4x",
        },
      ],
    },
    {
      title: "Salesforce Developer Virtual Internship",
      dates: "Dec 2023 - Jan 2024",
      location: "Remote, India",
      description:
        "Completed virtual internship program backed by AICTE covering Salesforce development fundamentals, Apex coding, automation, and enterprise cloud data handling.",
      image: "/aicte.png",
      mlh: "",
      links: [
        {
          title: "Certificate",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://lnkd.in/p/dM5a6jBz",
        },
      ],
    },
  ],
} as const;
