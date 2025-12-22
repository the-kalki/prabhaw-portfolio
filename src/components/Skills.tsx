"use client";

import { motion } from "framer-motion";
import { skills } from "@/content/skills";
import {
  SiAmazonwebservices, SiDocker, SiKubernetes, SiJenkins, SiTerraform, SiAnsible,
  SiJavascript, SiPython, SiCplusplus, SiMysql,
  SiSelenium, SiLinux,
  SiPrometheus, SiGrafana,
  SiGit, SiGithub, SiGitlab
} from "react-icons/si";
import { FaJava, FaWindows } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { IconType } from "react-icons";

// Icon mapping for each skill
const skillIcons: Record<string, IconType> = {
  "AWS": SiAmazonwebservices,
  "Docker": SiDocker,
  "Kubernetes": SiKubernetes,
  "Jenkins": SiJenkins,
  "Terraform": SiTerraform,
  "Ansible": SiAnsible,
  "Java": FaJava,
  "Python": SiPython,
  "C++": SiCplusplus,
  "JavaScript": SiJavascript,
  "SQL": SiMysql,
  "Selenium": SiSelenium,
  "TestNG": SiJavascript, // Using JS icon as fallback
  "Linux (Ubuntu)": SiLinux,
  "Windows": FaWindows,
  "Prometheus": SiPrometheus,
  "Grafana": SiGrafana,
  "Git": SiGit,
  "GitHub": SiGithub,
  "GitLab": SiGitlab,
  "VS Code": VscVscode,
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-4"
          >
            {skills.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="opacity-40 text-lg"
          >
            A collection of tools and technologies I use to bring ideas to life.
          </motion.p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.groups.map((group, idx) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-[2rem] hover:bg-[var(--foreground)]/5 transition-all group"
            >
              <h3 className="text-xl font-bold mb-6 opacity-90 group-hover:opacity-100 transition-colors">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => {
                  const Icon = skillIcons[item];
                  return (
                    <span
                      key={item}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--foreground)]/5 border border-[var(--glass-border)] text-sm opacity-60 hover:opacity-100 hover:bg-[var(--foreground)]/10 transition-all"
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      {item}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}