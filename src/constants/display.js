export const heroContents = {
  headline: "Welcome to Razbotics",
  subtitle: `One stop solution for your web and mobile 
  app development, explore now`,
  btnLabel: "Get Started",
  video: "/videos/video.mp4",
};

export const aboutContents = {
  video: "/videos/video.mp4",
  profileImage: "/images/profile.jpeg",
  header: "Hi, I'm Shubhankar",
  abouts: [
    { name: "Experience", description: "" },
    { name: "Education", description: "" },
    { name: "Skills", description: "" },
    { name: "Hobbies", description: "" },
  ],
};
export const ProjectsContent = [
  {
    name: "Netflix Clone",
    desc: `A similar looking netflix website with 
    authentication using FIrebase as its backend`,
    videoUrl: "videos/netflix_clone.mp4",
    videoLeft: true,
  },
  {
    name: "Chat App",
    desc: `Simple React app for real time chatting with 
    Authentication using Firebase as its backend
    `,
    videoUrl: "videos/chat_app.mp4",
    videoLeft: false,
  },
  {
    name: "Done-With-It",
    desc: `This is a mobile app for selling used items built with React Native 
    with node.js as its backend`,
    videoUrl: "videos/done_with_it.mp4",
    videoLeft: true,
  },
];

export const displayContents = [
  {
    id: "about",
    lightBg: false,
    primaryTopline: true,
    lightHeadline: true,
    lightDesc: true,
    topline: "About me",
    headline: "Know me better",
    description: `Want to hire me for your work? 
      Then you should definitely check my bio!`,
    buttonLabel: "See Bio",
    primaryButton: "true",
    darkBtnText: "true",
    route: "/about-me",
    img: "/images/about.svg",
    alt: "about",
    imgStart: true,
  },
  {
    id: "projects",
    lightBg: true,
    primaryTopline: true,
    lightHeadline: false,
    lightDesc: false,
    topline: "Projects",
    headline: "Know my skills",
    description: `I have worked on projects like Netflix clone, 
    Chat app and many more! Want to see them?`,
    buttonLabel: "Yes, Show me",
    primaryButton: "true",
    route: "/projects",
    img: "/images/projects.svg",
    alt: "project",
    imgStart: false,
  },
];

export const displayService = [
  {
    id: "service1",
    icon: "/images/web-service.svg",
    title: "Websites",
    subtitle: `Modern tailored website for 
      your business or startup`,
    route: "/",
  },
  {
    id: "service2",
    icon: "/images/mobile-service.svg",
    title: "Mobile App",
    subtitle: `Have an app idea? Get it developed fast`,
    route: "/",
  },
  {
    id: "service3",
    icon: "/images/full-stack.svg",
    title: "Full Stack",
    subtitle: `Get a full project infrastructure developed 
        at low rates`,
    route: "/",
  },
];
