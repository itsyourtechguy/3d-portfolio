import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  eship,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  alena,
  leila,
  victor,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Dreammill",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2017 - Feb 2020",
    points: [
      "Built interactive SPAs using ReactJS and managed application state with modern JavaScript (ES6+).",
      "Created responsive layouts and interactive UI components for seamless user interaction.",
      "Integrated RESTful APIs and optimized data-fetching strategies for performance.",
      "Utilized Git for version control and GitLab for continuous integration to enhance team workflows.",
      "Ensured high performance and scalability by optimizing code and application architecture.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "E-ship SImplified",
    icon: eship,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Sep 2022",
    points: [
      "Led the development of web applications using React, Redux, and Node.js, focusing on scalability and performance.",
      "Created and maintained RESTful APIs to support seamless data communication between frontend and backend.",
      "Improved performance by 30% using lazy loading, memoization, and efficient state management.",
      "Automated testing and deployment processes through CI/CD pipelines using GitLab.",
      "Collaborated with UX teams to deliver responsive and user-friendly designs.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Great. Fast, impeccable and professional work. I recommend him and would work with him again. Thank you",
    name: "Victor Daniel S.",
    image: victor,
  },
  {
    testimonial:
      "It was a pleasure to work with Ankit. He is a highly qualified specialist and very patient. He did a great job and I highly recommend him.",
    name: "Alena M.",
    image: alena,
  },
  {
    testimonial:
      "Had few problems with my couple of website. He solved them all quickly . Would recommend him.",
    name: "Leila E.",
    image: leila,
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
