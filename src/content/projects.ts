export const projects = {
  heading: "Projects",
  items: [
    {
      title: "FinanceMe — Cloud-Native Banking System",
      domain: "Banking / Cloud Infrastructure",
      description:
        "End-to-end cloud-native banking backend with automated provisioning, CI/CD, and monitoring.",
      image: "/projects/financeme.png",
      highlights: [
        "Spring Boot backend with AWS RDS (MySQL)",
        "Infrastructure provisioning using Terraform",
        "CI/CD using Jenkins, Docker & Ansible",
        "System monitoring via Prometheus & Grafana",
      ],
      tech: [
        "Java",
        "Spring Boot",
        "AWS RDS",
        "Terraform",
        "Docker",
        "Jenkins",
        "Prometheus",
        "Grafana",
      ],
      links: {
        github: "#",
      },
    },
    {
      title: "InsureMe — Insurance Microservices Platform",
      domain: "Insurance / Microservices",
      description:
        "Spring Boot microservice exposing REST APIs for policy management with automated CI/CD and cloud deployment.",
      image: "/projects/insureme.png",
      highlights: [
        "Spring Boot + REST APIs",
        "Jenkins CI/CD pipeline",
        "Dockerized deployment on AWS EC2",
        "Ansible-based configuration management",
        "Automated Selenium post-deployment testing",
      ],
      tech: [
        "Java",
        "Spring Boot",
        "Docker",
        "Jenkins",
        "AWS EC2",
        "Ansible",
        "Selenium",
      ],
      links: {
        github: "#",
      },
    },
    {
      title: "Voice-based Personality Prediction Test",
      domain: "AI / Web Development / Behavioral Analysis",
      description:
        "An AI-powered personality assessment platform that uses voice recognition and Myers-Briggs (MBTI) logic to predict user personality traits with high precision.",
      image: "/projects/personality.png", // Aap apna image path yahan de sakte hain
      highlights: [
        "Integrated Voice Recognition API for hands-free user input",
        "Implemented Myers-Briggs Type Indicator (MBTI) logic engine",
        "Achieved 95% result accuracy across 1,000+ experimental runs",
        "Full-stack development with MongoDB for secure user data persistence",
        "Optimized frontend for real-time speech-to-text processing",
      ],
      tech: [
        "JavaScript (ES6+)",
        "HTML5/CSS3",
        "MongoDB",
        "Web Speech API",
        "Node.js", // Assuming Node for MongoDB connectivity
      ],
      links: {
        github: "https://github.com/Anushka14Rai/SProject", // Add your repo link here
      },
    },
    /*
    {
      title: "Testify Pro — Test Automation Framework",
      domain: "QA / Automation Testing",
      description:
        "Robust automation testing framework integrated into CI pipelines for continuous quality assurance.",
      image: "/projects/testifypro.png",
      highlights: [
        "Selenium WebDriver with Java & TestNG",
        "Jenkins integration for automated test execution",
        "Cross-browser testing",
        "Defect tracking with Jira",
      ],
      tech: ["Java", "Selenium", "TestNG", "Jenkins", "Jira"],
      links: {
        github: "#",
      },
    },
    */
    {
      title: "Modern Dev Portfolio",
      domain: "Frontend Engineering / Portfolio",
      description:
        "A high-performance, responsive personal portfolio built with the latest React and Next.js features, focusing on fluid UX and type-safe architecture.",
      image: "/projects/portfolio.png",
      highlights: [
        "Architected with Next.js 16 App Router & React 19 for cutting-edge performance",
        "Crafted immersive UI with Tailwind CSS and Framer Motion animations",
        "Implemented smooth-scroll experience using Lenis and Zustand for state management",
        "SEO optimized with dynamic Open Graph tags and high performance Lighthouse scores",
        "Strictly typed codebase using TypeScript for long-term maintainability",
      ],
      tech: [
        "Next.js 16",
        "React 19",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Zustand",
        "Lenis",
      ],
      links: {
        github: "https://github.com/the-kalki/prabhaw-portfolio.git",
        live: "https://prabhaw.vercel.app/",
      },
},
  ],
};