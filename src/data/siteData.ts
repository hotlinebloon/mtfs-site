export type StaffMember = {
  name: string;
  role: string;
  bio: string;
  initials: string;
  photo?: string;
  linkedin: string;
  website: string;
};

export type ProjectSection = {
  title: string;
  body: string[];
};

export type Project = {
  title: string;
  label: string;
  status: string;
  imageLabel: string;
  description: string;
  image?: string;
  imageMode?: "photo" | "logo";
  sections: ProjectSection[];
};

export type Initiative = {
  title: string;
  label: string;
  status: string;
  imageLabel: string;
  description: string;
  body: string[];
};

export type Activity = {
  slug: string;
  title: string;
  date: string;
  category: string;
  location: string;
  coverText: string;
  summary: string;
  body: string[];
};

export type FeatureBlock = {
  title: string;
  description: string;
  iconPosition: "right" | "bottom" | "left" | "top";
};

export const staff: StaffMember[] = [
  {
    name: "Edesa Ibrahimi",
    role: "Founder",
    bio: "Founder and CEO of Mapping the Future with STEM.",
    initials: "EI",
    photo: "/staff/edesa.png",
    linkedin: "#",
    website: "#",
  },
  {
    name: "Gerti Kida",
    role: "Project Coordinator",
    bio: "Coordinates timelines, technical direction, and smooth project execution.",
    initials: "GK",
    photo: "/staff/gerti.png",
    linkedin: "#",
    website: "#",
  },
  {
    name: "Vesa Greicevci",
    role: "Project Coordinator",
    bio: "Drives project strategy, communication, and team coordination.",
    initials: "VG",
    photo: "/staff/vesa.png",
    linkedin: "#",
    website: "#",
  },
  {
    name: "Enea Berisha",
    role: "Project Assistant",
    bio: "Supports planning, coordination, and team operations.",
    initials: "EB",
    photo: "/staff/enea.png",
    linkedin: "#",
    website: "#",
  },
  {
    name: "Altina Thaqi",
    role: "Project Assistant",
    bio: "Supports scheduling, coordination, and project organization.",
    initials: "AT",
    photo: "/staff/altina.png",
    linkedin: "#",
    website: "#",
  },
  {
    name: "Verena Gashi",
    role: "Social Media Designer",
    bio: "Creates visuals and content for social media communication.",
    initials: "VG",
    photo: "",
    linkedin: "#",
    website: "#",
  },
  {
    name: "Elira Bytyqi",
    role: "Graphic Designer",
    bio: "Designs visual materials for branding, campaigns, and project communication.",
    initials: "EB",
    photo: "",
    linkedin: "#",
    website: "#",
  },
];

export const projects: Project[] = [
  {
    title: "CTRL+Her",
    label: "Girls in tech",
    status: "Active project",
    imageLabel: "first steps into tech",
    description:
      "An intensive web development course for girls focused on HTML, CSS, JavaScript, and website creation.",
    image: "/projects/CTRL+HER.png",
    imageMode: "logo",
    sections: [
      {
        title: "CTRL+Her Local",
        body: [
          "CTRL+Her Local was the first official project of Mapping the Future with STEM, created to introduce girls to computer science through accessible and hands-on learning.",
          "Participants learned how websites are built, developed their own projects, and built confidence in a supportive environment.",
          "All of the girls who completed the course successfully developed their own websites and went on to create websites for companies in Kosovo.",
        ],
      },
    ],
  },
  {
    title: "CTRL+Her Global",
    label: "International learning",
    status: "Project archive",
    imageLabel: "17-country reach",
    description:
      "A global learning network that connected girls from 17 countries through web development and peer collaboration.",
    image: "/projects/CTRL+HER International.png",
    imageMode: "logo",
    sections: [
      {
        title: "CTRL+Her Global",
        body: [
          "CTRL+Her expanded internationally into a learning network connecting girls from 17 countries, including Egypt, Algeria, Albania, Kosovo, Fiji, and the United States.",
          "Participants explored web development fundamentals, created websites, and worked together in an international environment.",
          "The program showed that youth-led STEM learning can reach students across borders without waiting for traditional institutions.",
        ],
      },
    ],
  },
  {
    title: "STEM for Safety",
    label: "Engineering + community",
    status: "Active project",
    imageLabel: "safety mapping",
    description:
      "A community project connecting safety walks, mapping, and engineering-based problem solving.",
    image: "/projects/STEM_for_Safety.png",
    imageMode: "logo",
    sections: [
      {
        title: "About STEM for Safety",
        body: [
          "STEM for Safety combines STEM education with civic engagement to improve safety in local neighborhoods in Pristina.",
          "Volunteers observe safety concerns in public spaces, analyze the findings, and develop STEM-based solutions.",
          "The project builds technical skills while directly contributing to safer and more inclusive communities.",
        ],
      },
      {
        title: "Participation Requirements",
        body: [
          "Ages 14–22, flexible for highly motivated applicants.",
          "Living in Pristina or willing to participate physically in activities.",
          "Interest in STEM, innovation, or community engagement.",
          "No previous experience is required. Training will be provided.",
        ],
      },
    ],
  },
  {
    title: "InnoTechX",
    label: "Innovation lab",
    status: "Coming soon",
    imageLabel: "young makers",
    description:
      "A future initiative for design thinking, engineering design, 3D printing, Python, and robotic components.",
    image: "/projects/innotechx.png",
    imageMode: "logo",
    sections: [
      {
        title: "InnoTechX",
        body: ["Stay tuned…"],
      },
    ],
  },
];

export const initiatives: Initiative[] = projects.map((project) => ({
  title: project.title,
  label: project.label,
  status: project.status,
  imageLabel: project.imageLabel,
  description: project.description,
  body: project.sections.flatMap((section) => section.body),
}));

export const activities: Activity[] = [
  {
    slug: "ctrl-her-global",
    title: "CTRL+Her Global",
    date: "Project archive",
    category: "Coding",
    location: "17 countries",
    coverText: "Girls in tech",
    summary:
      "CTRL+Her expanded from Kosovo into a global learning network connecting girls from 17 countries.",
    body: projects[1].sections[0].body,
  },
  {
    slug: "ctrl-her-local",
    title: "CTRL+Her Local",
    date: "First official project",
    category: "Web development",
    location: "Kosovo",
    coverText: "First websites",
    summary:
      "The local program introduced girls to HTML, CSS, JavaScript, and website creation.",
    body: projects[0].sections[0].body,
  },
  {
    slug: "stem-for-safety",
    title: "STEM for Safety",
    date: "Active project",
    category: "Community engineering",
    location: "Pristina",
    coverText: "Safety walks",
    summary:
      "STEM for Safety connects community challenges with engineering-based solutions.",
    body: projects[2].sections[0].body,
  },
];

export const featureBlocks: FeatureBlock[] = [
  {
    title: "hands-on",
    iconPosition: "right",
    description:
      "We focus on learning where students build, experiment, and learn by doing.",
  },
  {
    title: "collaborative",
    iconPosition: "bottom",
    description:
      "MTFS is built around teamwork, mentorship, and community-driven learning.",
  },
  {
    title: "youth-led",
    iconPosition: "left",
    description:
      "The organization is shaped by young people who understand what students need to feel confident.",
  },
  {
    title: "impact-focused",
    iconPosition: "top",
    description:
      "Our work connects learning with visible outcomes and community needs.",
  },
];

export const partners = [
  {
    name: "LinkPlus IT",
    logo: "/sponsors/linkplus.png",
  },
  {
    name: "Hydroline LLC",
    logo: "/sponsors/hydroline.png",
  },
  {
    name: "Miket",
    logo: "/sponsors/miket.png",
  },
];

export const contact = {
  email: "mappingthefuturewithstem@gmail.com",
  phone: "+38344974225",
};
