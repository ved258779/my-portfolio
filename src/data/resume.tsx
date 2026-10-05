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
} from "lucide-react";
import { Python } from "@/components/ui/svgs/python";
import { Csharp } from "@/components/ui/svgs/csharp";

export const DATA = {
  name: "Ved Prakash Kumar",
  initials: "VPK",
  url: "https://linkedin.com/in/ved-prakash-kumar-6296972a1",
  location: "Patna, Bihar, India",
  locationLink: "https://www.google.com/maps/place/Patna,+Bihar",
  description:
    "Data Analyst skilled in Python, SQL, and Power BI. Passionate about transforming raw data into actionable business insights.",
  summary:
    "Aspiring Data Analyst with hands-on experience in Python and SQL. Completed the [IBM Data Analyst Professional Certificate](https://www.coursera.org/professional-certificates/ibm-data-analyst), building real-world dashboards and analytical reports using Pandas, NumPy, and Power BI. Strong foundation in data cleaning, visualization, and translating raw data into actionable business insights.",
  avatarUrl: "/ved.jpg",
  skills: [
    { name: "Python", icon: Python },
    { name: "SQL", icon: Database },
    { name: "MySQL", icon: Database },
    { name: "Power BI", icon: BarChart3 },
    { name: "IBM Cognos Analytics", icon: PieChart },
    { name: "Pandas", icon: Table },
    { name: "NumPy", icon: Binary },
    { name: "Data Cleaning", icon: Sparkles },
    { name: "Dashboard Creation", icon: LayoutDashboard },
    { name: "C", icon: Code2 },
    { name: "C++", icon: Csharp },
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
      title: "Data Analyst Trainee",
      logoUrl: "/ibm.png",
      start: "16 Feb 2026",
      end: "19 Feb 2026",
      description:
        "Completed rigorous hands-on curriculum encompassing data extraction, data cleaning, analysis, and visualization. Built real-world dashboards in Power BI and IBM Cognos Analytics using Python (Pandas, NumPy) and SQL.",
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
      title: "Orbit Dashboard",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Analyzed sample datasets using Python to identify key trends and patterns. Wrote optimized SQL queries to filter, sort, and summarize data for dashboard visualization, and structured an end-to-end data-driven platform.",
      technologies: [
        "Python",
        "SQL",
        "MySQL",
        "Data Analysis",
        "Data Cleaning",
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
      title: "Sales Data Analysis Dashboard",
      href: "#",
      dates: "2024",
      active: true,
      description:
        "Cleaned and preprocessed sales data using Pandas and NumPy for analysis-ready datasets. Wrote SQL queries to extract revenue trends and regional performance insights, and built interactive dashboards in Power BI and IBM Cognos Analytics to visualize KPIs.",
      technologies: [
        "Python",
        "SQL",
        "Power BI",
        "IBM Cognos Analytics",
        "Pandas",
        "NumPy",
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
