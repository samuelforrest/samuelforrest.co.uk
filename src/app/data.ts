type Project = {
  name: string;
  description: string;
  longDescription: string;
  link: string;
  image?: string;
  id: string;
  links?: {
    website?: string;
    download?: string;
    sourceCode?: string;
  };
};

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

type BlogPost = {
  title: string;
  description: string;
  link: string;
  uid: string;
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
    logo: "/apprentadream.webp",
    id: "work1",
  },
  {
    company: "Superprof",
    title: "Private Tutor",
    start: "Sep 2024",
    end: "Present",
    link: "https://www.superprof.co.uk/trusted-computer-science-tutor-with-hours-experience-taught-grade-sixth-form-student-software-engineer.html",
    logo: "/superprof.webp",
    id: "work2",
  },
  {
    company: "Forrest Studio",
    title: "Freelance Developer",
    start: "Jul 2025",
    end: "Present",
    link: "https://www.forreststudio.co.uk",
    logo: "/forrest-studio.webp",
    id: "work3",
  },
  {
    company: "Bookmark Reading Charity",
    title: "Volunteer Mentor",
    start: "Sep 2025",
    end: "Present",
    link: "",
    logo: "/bookmark.webp",
    id: "work4",
  },
  {
    company: "British Airways",
    title: "Work Experience",
    start: "Jul 2025",
    end: "Sep 2025",
    link: "",
    logo: "/ba.webp",
    id: "work5",
  },
  {
    company: "Bath University",
    title: "Summer Course",
    start: "Jul 2025",
    end: "Jul 2025",
    link: "",
    logo: "/bath.webp",
    id: "work6",
  },
  {
    company: "AAIB",
    title: "Work Experience",
    start: "Apr 2025",
    end: "Apr 2025",
    link: "",
    logo: "/aaib.webp",
    id: "work7",
  },
  {
    company: "HUDJO",
    title: "Work Experience",
    start: "Aug 2024",
    end: "Oct 2024",
    link: "",
    logo: "/hudjo.webp",
    id: "work8",
  },
  {
    company: "Virgin Atlantic",
    title: "Summer Course",
    start: "Aug 2024",
    end: "Aug 2024",
    link: "",
    logo: "/virgin.webp",
    id: "work9",
  },
  {
    company: "St Michael's Church",
    title: "Volunteer Sound Engineer",
    start: "Jan 2017",
    end: "Jan 2023",
    link: "",
    logo: "/stmichaels.webp",
    id: "work10",
  },
];

// EDUCATION

export const EDUCATION: Education[] = [
  {
    school: "St George's College, Weybridge",
    degree: "A Levels: Predicted A*A*AA",
    start: "Sep 2024",
    end: "Jul 2026",
    link: "https://www.stgeorgesweybridge.com",
    logo: "/st-georges-weybridge.webp",
    id: "edu1",
  },
  {
    school: "St George's College, Weybridge",
    degree: "GCSEs: 9999999987",
    start: "Sep 2021",
    end: "Jul 2024",
    link: "https://www.newlandhouse.net",
    logo: "/st-georges-weybridge.webp",
    id: "edu2",
  },
  {
    school: "Newland House School",
    degree: "KS3",
    start: "Sep 2012",
    end: "Jul 2021",
    link: "https://www.stgeorgesweybridge.com",
    logo: "/newland-house-school.webp",
    id: "edu3",
  },
];

// BEST BLOG POSTS FROM SUBSTACK

export const BLOG_POSTS: BlogPost[] = [
  {
    title:
      "Why it makes sense that Degree Apprenticeships are gaining popularity.",
    description:
      "In this article, I will discuss the recent rise in popularity of degree apprenticeships and examine why they are becoming a compelling alternative to traditional university.",
    link: "https://samueljforrest.substack.com/p/why-it-makes-sense-that-degree-apprenticeships",
    uid: "blog-1",
  },
  {
    title: "Diary of a CEO episodes that changed how I think",
    description:
      "In this article, I will discuss some of the recent Diary of a CEO Episodes, presented by Steven Bartlett, that have impacted my perspective on AI and entrepreneurialism.",
    link: "https://samueljforrest.substack.com/p/diary-of-a-ceo-episodes-that-changed",
    uid: "blog-2",
  },
  {
    title: "Is AI a bubble waiting to burst...",
    description:
      "My idea for this article stemmed from the disappointing release of GPT-5, which underwhelmed many in the tech world, in addition to reading MIT’s article.",
    link: "https://samueljforrest.substack.com/p/is-ai-a-bubble-waiting-to-burst",
    uid: "blog-3",
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
    label: "Substack",
    link: "https://samueljforrest.substack.com/",
  },
  {
    label: "Book call",
    link: "https://calendar.app.google/UGF12VGCT4zaFQFDA",
  },
];

// Tech Stack

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
    name: "Figma",
    category: "Design",
    id: "tech9",
  },
];
