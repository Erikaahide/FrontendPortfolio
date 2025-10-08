import React, { useEffect, useState } from "react";

// --- Simple theme hook (light/dark) ----------------------------------------
function useTheme() {
  const [theme, setTheme] = React.useState("light");

  React.useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      document.documentElement.dataset.theme = saved;
      return;
    }
    const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initial = prefersDark ? "dark" : "light";
    setTheme(initial);
    document.documentElement.dataset.theme = initial;
  }, []);

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  };

  return { theme, toggle };
}

// --- UI: Theme Toggle -------------------------------------------------------
function ThemeToggle({ className = "" }) {
  const { theme, toggle } = useTheme();
  return (
    <button className={`btn btn-circle ${className}`} onClick={toggle} aria-label="Toggle theme">
      <span aria-hidden>{theme === "dark" ? "☀️" : "🌙"}</span>
      <span className="sr-only">Change theme</span>
    </button>
  );
}

// --- UI: Navbar -------------------------------------------------------------
function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <a href="#home" className="bg-pink-500 hover:bg-pink-600 text-white font-medium 
               w-12 h-12 rounded-full shadow-md transition duration-300 
               flex items-center justify-center" style={{ paddingInline: ".5rem" }}>
          <strong>EA</strong>
        </a>
        {/* <nav style={{ display: "flex", gap: "0.5rem" }}>
          <a className="btn btn-ghost" href="#about">AboutMe</a>
          <a className="btn btn-ghost" href="#fitapp">FitApp</a>
          <a className="btn btn-ghost" href="#aprendeShop">AprendeShop</a>
          <a className="btn btn-ghost" href="#adobe">Adobe</a>
          <a className="btn btn-ghost" href="#contact">Contact</a>
        </nav> */}
        <ThemeToggle />
      </div>
    </header>
  );
}


// --- Section: Hero Home -----------------------------------------------------
function HeroHome() {
  return (
    <section id="home" className="hero container">
      <h1 className="hero-title">Portfolio</h1>
      <p className="hero-sub">
        Full‑Stack Developer & Fashion Designer. Design UI/UX, performance and accesibility.
      </p>
      <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
        <a href="#about" className="btn btn-primary">About me</a>
        <a href="#aprendeShop" className="btn btn-accent3">AprendeShop</a>
        <a href="#JS" className="btn btn-accent5">JSDemo</a>
        <a href="#fitapp" className="btn btn-accent2">FitAppDemo</a>
        <a href="#figma" className="btn btn-accent7">Figma</a>
        <a href="#SQL" className="btn btn-accent6">SQLDemo</a>
        <a href="#adobe" className="btn btn-accent4">AdobeSuite</a>
        <a href="#contact" className="btn btn-accent">Contact</a>
      </div>
    </section>
  );
}

// --- Placeholder sections to scroll (replace later with pages/routes) --
function Section({ id, title, children }) {
  return (
    <section id={id} className="container stack" style={{ padding: "3rem 0" }}>
      <h2>{title}</h2>
      <div className="card">{children}</div>
    </section>
  );
}

// --- App --------------------------------------------------------------------
export default function App() {
  return (
    <div>
      <Navbar />
      <main className="container">
        <HeroHome />
        <Section id="about" title="About me">
          <div className="stack">
            <h2 className="text-2xl font-bold mb-2">
              Hello! Nice to see you</h2>
            <p className="mb-4">
              My name is Erika. I studied fashion design,
              which gave me strong skills in creativity, project management, and attention to detail.
              Recently, I decided to transition into the tech world, and now I’m a
              <span className="font-semibold"> Java Full-Stack Developer</span>.
            </p>

            <h3 className="text-lg font-semibold mb-2">
              Some of my skills:
            </h3>
            <p className="mb-4">
              HTML, CSS, Bootstrap, JavaScript, Java, Spring Boot, React, Tailwind, Adobe Suite, SQL, Git/GitHub...
            </p>

            <p>If you want to know more about my professional environment here is my LinkedIn profile.</p>
            <a
              className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-xl shadow-md transition duration-300" href="http://www.linkedin.com/in/erikaahg-desarrolladora-web" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </Section>

        <Section id="aprendeShop" title="AprendeShop">
          <div className="stack">
            <h3 className="text-xl font-bold mb-2">
              Full-stack e-commerce (team project)
            </h3>
            <p className=" mb-4">
              AprendeShop is a full-stack web application developed as part of Generation’s Java Full-Stack Bootcamp.
              It is designed as an e-commerce and learning platform where users can purchase creative courses, materials,
              and interact in a community forum.
            </p>
            <p className="font-semibold mb-2">
              As part of the team, I collaborated on:
            </p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Developing responsive UI components with HTML, CSS, JavaScript, and Bootstrap</li>
              <li>Building back-end functionality with Java and Spring Boot</li>
              <li>Implemented RESTful APIs with Spring Boot JPA/Hibernate.</li>
              <li>Secured authentication and authorization using Spring Security, JWT and password encryption with BCrypt.</li>
              <li>Designed and maintained relational schema with MySQL/MariaDB</li>
              <li>Deploying the application on AWS</li>
            </ul>
            <p>
              Although AprendeShop is not only a commercial product, it showcases my ability to
              work in agile teams, apply industry tools, and develop scalable solutions from scratch.
            </p>

            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn btn-accent3" href="https://rubiportuguez.github.io/Aprende-Shop/index.html" target="_blank" rel="noreferrer">👁️ View demo</a>
              <a className="btn btn-accent3" href="https://github.com/RubiPortuguez/Aprende-Shop/tree/develop" target="_blank" rel="noreferrer">🎨 Front End Repository</a>
              <a className="btn btn-accent3" href="https://github.com/RubiPortuguez/AprendeShop-Backend/tree/develop" target="_blank" rel="noreferrer">🧩 Back End Repository</a>
              <a className="btn btn-accent3" href="https://www.figma.com/design/MG8TBK9lzvWV1aU8pJSIPd/Borradores-AprendeShop?node-id=0-1&t=K5eREUPBSSRUzPKl-1" target="_blank" rel="noreferrer">🖥️ Figma</a>
            </div>
          </div>
        </Section>

        <Section id="JS" title="JSDemo">
          <div className="stack">
            <h3 className="text-xl font-bold mb-2">
              Mini Search App (JSdemo)</h3>
            <p className=" mb-4">
              A simple JavaScript demo project: a user search app. <br />
              Built with <strong>Vanilla JS, HTML5, and CSS3</strong>. Fetch user data asynchronously from a REST API .
            </p>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn btn-accent5" href="https://erikaahide.github.io/API-JS-PROMISES/" target="_blank" rel="noreferrer">👁️ View</a>
              <a className="btn btn-accent5" href="https://github.com/Erikaahide/API-JS-PROMISES" target="_blank" rel="noreferrer">GitHub Repo</a>
            </div>
          </div>
        </Section>

        <Section id="fitapp" title="FitAppDemo">
        <div className="stack">
            <h3 className="text-xl font-bold mb-2">
            Macro Calculator, Food Tracker, Shopping List, Fitness Blog and more.. </h3>
            <p className=" mb-4">
            This app is inspired by the bodybuilding lifestyle where nutrition is everything. - I’m currently building this demo.
            </p>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn btn-accent2" href="https://erikaahide.github.io/FitApp/" target="_blank" rel="noreferrer">👁️ View Demo</a>
              <a className="btn btn-accent2" href="https://github.com/Erikaahide/FitApp?tab=readme-ov-file" target="_blank" rel="noreferrer">GitHub Repo</a>
              <a className="btn btn-accent2" href="https://www.figma.com/design/ZPpJGbMZmsWddn3i0icvXt/Portfolio?node-id=0-1&t=BCGzJieD65UEbvnu-0" target="_blank" rel="noreferrer">Wireframe</a>
            </div>
          </div>
        </Section>

        <Section id="figma" title="Figma">
          <div className="stack">
            <h3 className="text-xl font-bold mb-2">
            Wireframe, layout, mockup and prototype</h3>
            <p className=" mb-4">
            Find my latest UI mockups on Figma — they’re still a work in progress, but constantly evolving with new layouts and design explorations.
            </p>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn btn-accent7" href="https://www.figma.com/design/zsiRvaHp8P9v2CB2HxYtHE/Portfolio?node-id=0-1&t=1TMprCo3F1mFlZZx-1" target="_blank" rel="noreferrer">Portfolio</a>
              <a className="btn btn-accent7" href="https://www.figma.com/design/ZPpJGbMZmsWddn3i0icvXt/Portfolio?node-id=0-1&t=BCGzJieD65UEbvnu-0" target="_blank" rel="noreferrer">Wireframe</a>
            </div>
          </div>
        </Section>

        <Section id="SQL" title="SQL">
          <div className="stack">
            <h3 className="text-xl font-bold mb-2">
              SQL practice </h3>
            <p className=" mb-4">
              This repository contains my SQL practice exercises during the bootcamp. It includes examples of:  </p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>Table creation (CREATE TABLE)</li>
              <li>Data insertion (INSERT INTO)</li>
              <li>Basic queries (SELECT, WHERE, ORDER BY, DISTINCT)</li>
              <li>Functions (LIKE, IN, BETWEEN, MONTH(), etc.)</li>
              <li>Safe updates and deletes (UPDATE, DELETE)</li>
            </ul>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn btn-accent6" href="https://github.com/Erikaahide/SQLpractices" target="_blank" rel="noreferrer">GitHub Repo</a>
            </div>
          </div>
        </Section>

        <Section id="adobe" title="AdobeSuite">
          <div className="stack">
            <h3 className="text-xl font-bold mb-2">
              Illustrator & Photoshop Book</h3>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn btn-accent4" href="https://drive.google.com/file/d/1LXkoXs2C3OjuENXDobDhNGNGjYEuHxeY/view?usp=sharing" target="_blank" rel="noreferrer">📔 Book (PDF)</a>
            </div>
          </div>
        </Section>

        <Section id="contact" title="Contact">
          <div className="stack">
            <h3 className="text-xl font-bold mb-2">
              Let's work together!!</h3>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn btn-accent" href="mailto:eahidehernandez@gmail.com" rel="noreferrer">📧 Email</a>
              <a className="btn btn-accent" href="http://www.linkedin.com/in/erikaahg-desarrolladora-web" target="_blank" rel="noreferrer">💼 LinkedIn</a>
              <a className="btn btn-accent" href="https://github.com/Erikaahide" target="_blank" rel="noreferrer">🐱 GitHub</a>
            </div>
          </div>
        </Section>
      </main>
      <footer className="container" style={{ padding: "2rem 0", opacity: .8 }}>
        <small className="muted">© {new Date().getFullYear()} ErikaA. All rights reserved.</small>
      </footer>
    </div>
  );
}
