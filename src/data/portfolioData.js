export const userData = {
    name: "John Doe",
    title: "Frontend Developer",
    bio: "I'm a passionate frontend developer specializing in React.js. With a strong foundation in modern web technologies, I create responsive and user-friendly applications.",
    avatar: "/images/avatar.jpg",
    contact: {
      email: "contact@example.com",
      phone: "+1 (123) 456-7890",
      location: "New York, USA"
    },
    social: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourusername",
      twitter: "https://twitter.com/yourusername",
      instagram: "https://instagram.com/yourusername"
    },
    skills: [
      // Frontend skills
      { name: "HTML", level: "Advanced", category: "Frontend", icon: "html" },
      { name: "CSS", level: "Advanced", category: "Frontend", icon: "css" },
      { name: "JavaScript", level: "Advanced", category: "Frontend", icon: "javascript" },
      { name: "React.js", level: "Advanced", category: "Frontend", icon: "react" },
      { name: "Redux", level: "Intermediate", category: "Frontend", icon: "redux" },
      { name: "Tailwind CSS", level: "Advanced", category: "Frontend", icon: "tailwind" },
      { name: "Bootstrap", level: "Intermediate", category: "Frontend", icon: "bootstrap" },
      
      // Additional skills
      { name: "TypeScript", level: "Intermediate", category: "Languages", icon: "typescript" },
      { name: "Next.js", level: "Intermediate", category: "Frameworks", icon: "next" },
      { name: "Git", level: "Advanced", category: "Tools", icon: "git" },
      { name: "Figma", level: "Intermediate", category: "Design", icon: "figma" },
      { name: "Jest", level: "Intermediate", category: "Testing", icon: "jest" },
      { name: "GraphQL", level: "Beginner", category: "API", icon: "graphql" },
      { name: "Firebase", level: "Intermediate", category: "Backend", icon: "firebase" },
      { name: "Webpack", level: "Intermediate", category: "Tools", icon: "webpack" },
      { name: "Responsive Design", level: "Advanced", category: "Frontend", icon: "responsive" }
    ],
    education: [
      {
        degree: "Bachelor of Computer Science",
        school: "University of Technology",
        year: "2018 - 2022",
      },
      {
        degree: "Full Stack Web Development",
        school: "Coding Bootcamp",
        year: "2022",
      },
      {
        degree: "Advanced JavaScript Certification",
        school: "Online Learning Platform",
        year: "2021",
      }
    ],
    experience: [
      {
        position: "Senior Frontend Developer",
        company: "Tech Innovations Inc.",
        year: "2022 - Present",
        description: "Developing and maintaining modern web applications using React.js and related technologies."
      },
      {
        position: "Frontend Developer",
        company: "Digital Solutions LLC",
        year: "2020 - 2022",
        description: "Built responsive user interfaces and implemented new features for client websites."
      },
      {
        position: "Junior Web Developer",
        company: "Web Crafters Co.",
        year: "2019 - 2020",
        description: "Assisted in the development of websites and web applications using HTML, CSS, and JavaScript."
      }
    ]
  };
  
  export const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform with product filtering, cart functionality, and checkout process.",
      image: "/images/projects/ecommerce.jpg",
      tags: ["React", "Redux", "Styled Components", "Firebase"],
      links: {
        github: "https://github.com/yourusername/ecommerce",
        live: "https://ecommerce-demo.vercel.app"
      },
      featured: true
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description: "A social media dashboard with analytics, content scheduling, and performance tracking.",
      image: "/images/projects/dashboard.jpg",
      tags: ["React", "Chart.js", "Tailwind CSS", "Context API"],
      links: {
        github: "https://github.com/yourusername/social-dashboard",
        live: "https://social-dashboard-demo.vercel.app"
      },
      featured: true
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A Kanban-style task management application with drag-and-drop functionality and team collaboration.",
      image: "/images/projects/taskapp.jpg",
      tags: ["React", "React DnD", "Redux", "Firebase"],
      links: {
        github: "https://github.com/yourusername/task-manager",
        live: "https://task-manager-demo.vercel.app"
      },
      featured: true
    },
    {
      id: 4,
      title: "Weather Dashboard",
      description: "A weather application with forecast and location search using the OpenWeather API.",
      image: "/images/projects/weather.jpg",
      tags: ["React", "API Integration", "Geolocation", "CSS"],
      links: {
        github: "https://github.com/yourusername/weather-app",
        live: "https://weather-app-demo.vercel.app"
      },
      featured: false
    },
    {
      id: 5,
      title: "Personal Blog",
      description: "A personal blog with categories, tags, and a commenting system.",
      image: "/images/projects/blog.jpg",
      tags: ["React", "Markdown", "CSS Modules", "LocalStorage"],
      links: {
        github: "https://github.com/yourusername/blog",
        live: "https://blog-demo.vercel.app"
      },
      featured: false
    },
    {
      id: 6,
      title: "Movie Database",
      description: "A movie database application using the TMDB API with search and filtering capabilities.",
      image: "/images/projects/movies.jpg",
      tags: ["React", "API Integration", "React Router", "CSS"],
      links: {
        github: "https://github.com/yourusername/movie-database",
        live: "https://movie-database-demo.vercel.app"
      },
      featured: false
    }
  ];
  
  // For placeholder images
  export const placeholderImages = {
    avatar: "https://via.placeholder.com/400x400?text=Developer",
    project: "https://via.placeholder.com/600x400?text=Project+Image",
    ecommerce: "https://via.placeholder.com/600x400?text=E-Commerce+Website",
    dashboard: "https://via.placeholder.com/600x400?text=Social+Media+Dashboard",
    taskapp: "https://via.placeholder.com/600x400?text=Task+Management+App",
    weather: "https://via.placeholder.com/600x400?text=Weather+Dashboard",
    blog: "https://via.placeholder.com/600x400?text=Personal+Blog",
    movies: "https://via.placeholder.com/600x400?text=Movie+Database",
    map: "https://via.placeholder.com/600x300?text=Location+Map"
  };
  