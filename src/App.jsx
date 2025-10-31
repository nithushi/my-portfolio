import React from 'react';
import './App.css';

// --- ICONS (අලුත් icons 2ක් add කරා) ---
import { FaGithub, FaLinkedin, FaExternalLinkAlt, FaWhatsapp } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'; 

// --- ඔයාගේ Image එක මෙතනින් Import කරන්න ---
import NithushiProfilePic from './assets/nithushi-shavindi.jpg'; // <-- ඔයාගේ image file නම දාන්න

// --- 1. Navbar Component ---
function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          Nithushi Shavindi
        </a>
        <ul className="navbar-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

// --- 2. Hero Component ---
function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-content">
        <div className="hero-profile-picture">
          <img src={NithushiProfilePic} alt="Nithushi Shavindi" />
        </div>
        <h1>
          Hi, I'm <span className="hero-gradient-text">Nithushi Shavindi</span>
        </h1>
        <p>I build modern web applications with React & Spring Boot.</p>
        <a href="#projects" className="hero-button">
          View My Work
        </a>
        <div className="hero-socials">
          <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}

// --- 3. About Component ---
function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={NithushiProfilePic} alt="Nithushi Shavindi" />
          </div>
          <div className="about-text">
            <h3>Hello!</h3>
            <p>
              I am a passionate software developer specializing in building
              full-stack applications. My expertise lies in creating dynamic
              front-ends with React and robust back-ends with Java & Spring Boot.
            </p>
            <p>
              I love tackling complex problems and turning ideas into
              high-quality code.
            </p>
            <h4 className="skills-title">My Skills:</h4>
            <div className="skills-grid">
              <span className="skill-tag">React</span>
              <span className="skill-tag">Next.js</span>
              <span className="skill-tag">Java</span>
              <span className="skill-tag">Spring Boot</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">Git & GitHub</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">JavaScript</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// --- 4. Projects Component ---
function Projects() {
  const myProjects = [
    {
      title: "Mobile Chat Application",
      description: "A real-time, full-stack mobile chat solution enabling seamless communication. Built with React for a dynamic frontend and a robust Java backend, ensuring instant message delivery and a user-friendly experience.",
      tech: ["React", "Java", "MySQL"],
      github: "https://github.com/your-username/student-system",
      live: "#",
    },
    {
      title: "Mobile Food Ordering & Delivery Application",
      description: "A complete mobile food ordering and delivery platform. This Android-native application, powered by a Java backend and Firebase, allows users to browse restaurants, place orders, and track deliveries in real-time.",
      tech: ["Android", "Java", "Firebase"],
      github: "https://github.com/nithushi/SavoryHub",
      live: "#",
    },
    {
      title: "E-Commerce Web Application",
      description: "A scalable E-Commerce web application designed for a modern online shopping experience. It features a secure Spring Boot backend for managing products and orders, coupled with a Node.js layer for handling user interactions and APIs",
      tech: ["node.js", "Spring Boot", "MySQL"],
      github: "https://github.com/your-username/savoryhub",
      live: "#",
    },
    {
      title: "Healthcare Management System (used OODP concepts)",
      description: "A comprehensive desktop application for managing healthcare operations, built using JavaFX. This system demonstrates strong Object-Oriented Design Principles (OODP) to handle patient records, appointments, and staff management.",
      tech: ["java FX", "Java", "MySQL"],
      github: "https://github.com/your-username/savoryhub",
      live: "#",
    },
    {
      title: "Realtime Chat Application",
      description: "An interactive, real-time chat application built on the Angular framework. It uses a Spring Boot WebSocket backend and MongoDB to deliver instant, bi-directional communication and message persistence for a live chat experience.",
      tech: ["Angular", "Spring Boot", "MongoDB"],
      github: "https://github.com/your-username/savoryhub",
      live: "#",
    },
    {
      title: "Notebook Project",
      description: "A secure and intuitive note-taking application for Android. Users can create, edit, and organize notes, with all data securely stored and managed by a Java-based backend and a MySQL database.",
      tech: ["Android", "Java", "MySQL"],
      github: "https://github.com/nithushi/Notebook",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="section bg-light">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {myProjects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


// --- 5. Contact Component (මෙතන තමයි වෙනස් කලේ) ---
function Contact() {
  return (
    <section id="contact" className="section bg-white">
      <div className="section-container contact-container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="contact-subtitle">
          I'm currently looking for new opportunities! My inbox is always open.
        </p>
        
        {/* --- Buttons 2ක දාන්න අලුත් container එකක් --- */}
        <div className="contact-buttons-container">
          
          {/* --- Email Button (Icon එකක් එක්ක) --- */}
          <a href="mailto:nithushishavindi0@gmail.com" className="hero-button">
            <MdEmail /> Say Hello
          </a>

          {/* --- WhatsApp Button (අලුතෙන්) --- */}
          <a 
            href="https://wa.me/94704548253" // <-- මෙතනට ඔයාගේ WhatsApp Number එක දාන්න!
            className="hero-button whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp /> WhatsApp Me
          </a>

        </div>
      </div>
    </section>
  );
}

// --- 6. Footer Component ---
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>
      <p>&copy; 2025 Nithushi Shavindi. All rights reserved.</p>
    </footer>
  );
}

// --- Main App ---
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;