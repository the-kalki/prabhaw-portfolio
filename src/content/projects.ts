export const projects = {
  heading: "Projects",
  items: [
    {
      title: "InsureMe — Insurance Microservices Platform",
      domain: "Insurance / Microservices",
      description:
        "Spring Boot microservice exposing REST APIs for policy management with automated CI/CD and cloud deployment.",
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
  ],
};
