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
  header: "Hello, I' m Shubhankar Das",
};

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
    buttonLabel: "Know more",
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
    route: "/",
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
