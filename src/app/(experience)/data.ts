type WorkExperience = {
  company: string;
  title: string;
  start: string;
  end: string;
  link: string;
  logo?: string;
  id: string;
};

type Education = {
  school: string;
  degree: string;
  start: string;
  end: string;
  link: string;
  logo?: string;
  id: string;
};

type SocialLink = {
  label: string;
  link: string;
};

type TechStack = {
  name: string;
  category: string;
  id: string;
};

// WORK EXPERIENCE

export const WORK_EXPERIENCE: WorkExperience[] = [
  {
    company: "Apprentadream",
    title: "CTO",
    start: "Sep 2025",
    end: "Present",
    link: "https://www.apprentadream.co.uk",
    logo: "/images/apprentadream.webp",
    id: "work1",
  },
  {
    company: "Superprof",
    title: "Private Tutor",
    start: "Sep 2024",
    end: "Present",
    link: "https://www.superprof.co.uk/trusted-computer-science-tutor-with-hours-experience-taught-grade-sixth-form-student-software-engineer.html",
    logo: "/images/superprof.webp",
    id: "work2",
  },
  {
    company: "Forrest Studio",
    title: "Freelance Developer",
    start: "Jul 2025",
    end: "Present",
    link: "https://www.forreststudio.co.uk",
    logo: "/images/forrest-studio.webp",
    id: "work3",
  },
  {
    company: "Bookmark Reading Charity",
    title: "Volunteer Mentor",
    start: "Sep 2025",
    end: "Present",
    link: "",
    logo: "/images/bookmark.webp",
    id: "work4",
  },
  {
    company: "British Airways",
    title: "Work Experience",
    start: "Jul 2025",
    end: "Sep 2025",
    link: "",
    logo: "/images/ba.webp",
    id: "work5",
  },
  {
    company: "Bath University",
    title: "Summer Course",
    start: "Jul 2025",
    end: "Jul 2025",
    link: "",
    logo: "/images/bath.webp",
    id: "work6",
  },
  {
    company: "AAIB",
    title: "Work Experience",
    start: "Apr 2025",
    end: "Apr 2025",
    link: "",
    logo: "/images/aaib.webp",
    id: "work7",
  },
  {
    company: "HUDJO",
    title: "Work Experience",
    start: "Aug 2024",
    end: "Oct 2024",
    link: "",
    logo: "/images/hudjo.webp",
    id: "work8",
  },
  {
    company: "Virgin Atlantic",
    title: "Summer Course",
    start: "Aug 2024",
    end: "Aug 2024",
    link: "",
    logo: "/images/virgin.webp",
    id: "work9",
  },
  {
    company: "St Michael's Church",
    title: "Volunteer Sound Engineer",
    start: "Jan 2017",
    end: "Jan 2023",
    link: "",
    logo: "/images/stmichaels.webp",
    id: "work10",
  },
];

// EDUCATION

export const EDUCATION: Education[] = [
  {
    school: "St George's Weybridge",
    degree: "A Levels: Predicted A*A*AA",
    start: "Sep 2024",
    end: "Jul 2026",
    link: "https://www.stgeorgesweybridge.com",
    logo: "/images/st-georges-weybridge.webp",
    id: "edu1",
  },
  {
    school: "St George's Weybridge",
    degree: "GCSEs: 9999999987",
    start: "Sep 2021",
    end: "Jul 2024",
    link: "https://www.newlandhouse.net",
    logo: "/images/st-georges-weybridge.webp",
    id: "edu2",
  },
  {
    school: "Newland House School",
    degree: "KS3",
    start: "Sep 2012",
    end: "Jul 2021",
    link: "https://www.stgeorgesweybridge.com",
    logo: "/images/newland-house-school.webp",
    id: "edu3",
  },
];

// SOCIAL LINKS

export const SOCIAL_LINKS: SocialLink[] = [
  {
    label: "Github",
    link: "https://github.com/samuelforrest",
  },
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/samueljforrest/",
  },

  {
    label: "Book a Call",
    link: "https://calendar.app.google/UGF12VGCT4zaFQFDA",
  },
];

// TECH STACK

export const TECH_STACK: TechStack[] = [
  {
    name: "React",
    category: "Frontend",
    id: "tech1",
  },
  {
    name: "Next.js",
    category: "Frontend",
    id: "tech2",
  },
  {
    name: "TypeScript",
    category: "Language",
    id: "tech3",
  },
  {
    name: "Tailwind CSS",
    category: "Styling",
    id: "tech4",
  },
  {
    name: "Supabase",
    category: "Database",
    id: "tech5",
  },
  {
    name: "Python",
    category: "Backend",
    id: "tech6",
  },
  {
    name: "Vercel",
    category: "Deployment",
    id: "tech7",
  },
  {
    name: "Git & GitHub",
    category: "Tools",
    id: "tech8",
  },
  {
    name: "ChatGPT",
    category: "AI",
    id: "tech9",
  },
  {
    name: "Claude",
    category: "AI",
    id: "tech10",
  },
  {
    name: "Google Workspace",
    category: "Collaboration",
    id: "tech11",
  },
  {
    name: "Figma",
    category: "Design",
    id: "tech12",
  },
  {
    name: "Notion",
    category: "Documentation",
    id: "tech13",
  },
];
