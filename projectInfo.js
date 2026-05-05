const projectInfo = [
  {
    id: 1,
    projectTitle: "Amplify",
    projectLink: "https://amplifyguitar.netlify.app/",
    projectScreenshot: "docs/amplify-jamroom.png",
    shortDescription:
      "Amplify Guitar is a gamified guitar learning dashboard that solves the motivational gap in solo guitar practice by turning sessions into a measurable progression loop — users earn XP, level up, unlock lessons, track practice streaks, and earn achievement rewards. The platform provides four core areas: structured lessons (with embedded YouTube videos), a Jam Room for chord/scale reference, a song library, and a timed practice session tracker (the Shed).",
    fullDescription: null,
    note: "The frontend is built with React 19, React Router v7, Tailwind CSS v4, and Axios, bundled via Vite. The backend is a Java 21 / Spring Boot 4 REST API using Spring Data JPA with a MySQL database, and JJWT for token handling. This project will be deployed to Netlify and Railway in the near future",
    techStack: [
      {
        techName: "React",
        icon: "devicon-react-original",
        link: "https://react.dev/",
      },
      {
        techName: "JavaScript",
        icon: "devicon-javascript-plain",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        techName: "Java",
        icon: "devicon-java-plain",
        link: "https://docs.oracle.com/en/java/javase/21/",
      },
      {
        techName: "Spring Boot",
        icon: "devicon-spring-plain",
        link: "https://spring.io/",
      },
      {
        techName: "MySQL",
        icon: "devicon-mysql-plain",
        link: "https://dev.mysql.com/doc/",
      },
      {
        techName: "TailwindCSS",
        icon: "devicon-tailwindcss-plain",
        link: "https://tailwindcss.com/",
      },
      { techName: "Shadcn UI", icon: null, link: "https://ui.shadcn.com/" },
      { techName: "Headless UI", icon: null, link: "https://headlessui.com/" },
    ],
  },
  {
    id: 2,
    projectTitle: "Rifflog",
    projectLink: "https://rifflog.netlify.app/",
    projectScreenshot: null,
    shortDescription:
      "Rifflog is a personal guitar practice journal built with React 19 + TypeScript on the frontend and Java 21 + Spring Boot on the backend, with MySQL for storage and Cloudinary for media hosting. It lets the admin (me) upload audio and video recordings from practice sessions, tagging each with metadata like tuning, key, gear used, and custom tags, while a dedicated Rig page showcases gear photos organized by category. The app is publicly browsable, with JWT-secured admin controls for uploading, editing, and deleting content.",
    fullDescription: null,
    note: "This project was deployed to Netlify (frontend) and Railway (backend)",
    techStack: [
      {
        techName: "React",
        icon: "devicon-react-original",
        link: "https://react.dev/",
      },
      {
        techName: "TypeScript",
        icon: "devicon-typescript-plain",
        link: "https://www.typescriptlang.org/",
      },
      {
        techName: "Java",
        icon: "devicon-java-plain",
        link: "https://docs.oracle.com/en/java/javase/21/",
      },
      {
        techName: "Spring Boot",
        icon: "devicon-spring-plain",
        link: "https://spring.io/",
      },
      {
        techName: "MySQL",
        icon: "devicon-mysql-plain",
        link: "https://dev.mysql.com/doc/",
      },
      {
        techName: "TailwindCSS",
        icon: "devicon-tailwindcss-plain",
        link: "https://tailwindcss.com/",
      },
      { techName: "Shadcn UI", icon: null, link: "https://ui.shadcn.com/" },
    ],
  },
];

export default projectInfo;
