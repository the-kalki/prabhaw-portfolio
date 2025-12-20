export const projects = {
  heading: "Projects",
  items: [
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
        github: "#", // Add your repo link here
      },
    },
  ],
};
