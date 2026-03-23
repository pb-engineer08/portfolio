// src/App.jsx
// Fully responsive professional portfolio for GitHub Pages

import ExperienceCard from "./components/ExperienceCard";
import ProjectCard from "./components/ProjectCard";
import SkillBlock from "./components/SkillBlock";
import { Mail, Github, Linkedin } from "lucide-react";

export default function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      {/* Navbar */}
      <header className="fixed w-full bg-white shadow z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
          <h1 className="font-bold">Projesh Bhoumik</h1>
          <nav className="space-x-6 hidden md:block">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-28 pb-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center">
        <h2 className="text-5xl font-bold mb-4">Embedded Software Engineer</h2>
        <p className="max-w-2xl mx-auto mb-6">
          Specialized in real-time systems, embedded Linux, and networked audio platforms.
        </p>
        <div className="flex justify-center gap-4">
          <a href="mailto:" className="bg-white text-black px-4 py-2 rounded flex items-center gap-2">
            <Mail size={16} /> Email
          </a>
          <a href="https://github.com/pb-engineer08" className="border px-4 py-2 rounded flex items-center gap-2">
            <Github size={16} /> GitHub
          </a>
          <a href="https://linkedin.com/in/proje-bhm" className="border px-4 py-2 rounded flex items-center gap-2">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-5xl mx-auto p-6">
        <h3 className="text-3xl font-semibold mb-4">About Me</h3>
        <p>
          Embedded software engineer with experience in audio-over-IP, firmware development,
          and virtualization for automotive and industrial systems. I build low-latency,
          production-grade software from hardware to cloud.
        </p>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-8">Professional Experience</h3>

          <div className="space-y-6">
            <ExperienceCard
              title="Embedded Audio Software Engineer"
              company="LineRush Technologies GmbH"
              period="2025 – Present"
              points={[
                "Develop real-time audio pipelines and VoIP services",
                "Implement OPUS, SIP, AES67 streaming",
                "Build Qt-based device control applications",
              ]}
            />

            <ExperienceCard
              title="Firmware Engineer"
              company="Siemens AG"
              period="2023 – 2024"
              points={[
                "Firmware for real-time location systems",
                "Low-power battery management design",
                "HIL testing and legacy refactoring",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-8">Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <ProjectCard
              title="Network Audio Streaming"
              description="Low-latency RTP streaming stack using OPUS on embedded Linux."
              link="#"
            />
            <ProjectCard
              title="ECU Virtualization"
              description="Xen-based virtualization architecture for ARM automotive ECUs."
              link="#"
            />
            <ProjectCard
              title="Oscilloscope Test Automation"
              description="Python SCPI framework for automated instrument validation."
              link="#"
            />
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-white py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h3 className="text-3xl font-semibold mb-8">Technical Skills</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <SkillBlock title="Languages" items="C, C++, Python, JavaScript" />
            <SkillBlock title="Embedded" items="Embedded Linux, FreeRTOS, STM32, ARM" />
            <SkillBlock title="Tools" items="Qt, Yocto, Docker, Git, CI/CD" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 text-center">
        <h3 className="text-3xl font-semibold mb-4">Get in Touch</h3>
        <p className="mb-6">Open to embedded, audio, and systems engineering roles.</p>
        <a href="mailto:" className="bg-indigo-600 text-white px-6 py-3 rounded">
          Contact Me
        </a>
      </section>

      <footer className="bg-gray-900 text-gray-400 text-center py-6">
        © {new Date().getFullYear()} PB
      </footer>
    </div>
  );
}
