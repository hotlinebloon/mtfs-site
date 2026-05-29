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

export type FeatureBlock = {
  title: string;
  description: string;
  iconPosition: "right" | "bottom" | "left" | "top";
};

/* ---------------- STAFF ---------------- */

export const staff: StaffMember[] = [
  {
    name: "Edesa",
    role: "Founder",
    bio: "Founder of Mapping the Future with STEM.",
    initials: "E",
    photo: "/staff/edesa.png",
    linkedin: "#",
    website: "#",
  },
  {
    name: "Gerti Kida",
    role: "Tech Lead",
    bio: "Leads technical projects and development.",
    initials: "GK",
    photo: "/gerti.png",
    linkedin: "#",
    website: "#",
  },
  {
    name: "Vesa",
    role: "STEM Lead",
    bio: "Leads STEM workshops and learning initiatives.",
    initials: "V",
    photo: "/vesa.png",
    linkedin: "#",
    website: "#",
  },
];


export const projects: Project[] = [
  {
    title: "STEM for Safety",
    label: "STEM + awareness",
    status: "Active project",
    imageLabel: "engineering + community",
    description:
      "Community-based STEM Safety is an initiative designed to connect science, technology, engineering, and mathematics with real-world safety awareness in local communities. The project focuses on teaching young people how STEM knowledge can be used to understand, prevent, and respond to everyday risks such as digital safety threats, environmental hazards, and basic engineering safety principles.",
    image: "/STEM_for_Safety.png",
    imageMode: "logo",
    sections: [],
  },
    {
    title: "CTRL+HER",
    label: "Girls in tech",
    status: "Active project",
    imageLabel: "first steps into tech",
    description:
      "CTRL+Her is a web development learning program created to empower girls to enter the world of technology through hands-on experience in HTML, CSS, and JavaScript. The course is designed for beginners and focuses on building confidence, creativity, and practical skills by guiding participants through real projects such as personal websites, portfolios, and small interactive web apps. ",
    image: "/CTRL+HER.png",
    imageMode: "photo",
    sections: [],
  },
   {
    title: "CTRL+HER Global",
    label: "GIRLS in tech",
    status: "Active project",
    imageLabel: "global initiative",
    description: "CTRL+HER Global is envisioned as a future innovation and learning lab that expands the impact of the CTRL+Her program to a wider, international scale. It aims to create a collaborative space where students from different backgrounds can work on technology, creativity, and innovation projects together. ",
    image: "/ctrlglobal.png",
    imageMode: "logo",
    sections: [],
  },
  {
    title: "InnoTechX",
    label: "Innovation lab",
    status: "Coming soon",
    imageLabel: "young makers",
    description: "InnoTechX is a future-focused innovation lab designed to inspire students to explore cutting-edge technologies and turn ideas into real-world solutions. The project aims to provide a space where creativity meets engineering, allowing young innovators to experiment with coding, artificial intelligence, robotics, and digital product development. It encourages project-based learning, where students work on solving meaningful problems through teamwork and iterative design.",
    image: "/innotechx.png",
    imageMode: "logo",
    sections: [],
  },
];

/* ---------------- FEATURES ---------------- */

export const featureBlocks: FeatureBlock[] = [
  {
    title: "hands-on",
    iconPosition: "right",
    description: "Learn by building real projects.",
  },
  {
    title: "collaborative",
    iconPosition: "bottom",
    description: "Team-based STEM learning.",
  },
  {
    title: "youth-led",
    iconPosition: "left",
    description: "Driven by young innovators.",
  },
  {
    title: "impact-focused",
    iconPosition: "top",
    description: "Real-world community impact.",
  },
];


export const partners = [
  {
    name: "LinkPlus IT",
    logo: "/linkplus.png",
  },
  {
    name: "Hydroline LLC",
    logo: "/hydroline.png",
  },
  {
    name: "Miket",
    logo: "/miket.png",
  },
   {
    name: "LinkPlus IT",
    logo: "/linkplus.png",
  },
  {
    name: "Hydroline LLC",
    logo: "/hydroline.png",
  },
  {
    name: "Miket",
    logo: "/miket.png",
  },
];


export const contact = {
  email: "mappingthefuturewithstem@gmail.com",
  phone: "+38344974225",
};