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
    <button className={`btn ${className}`} onClick={toggle} aria-label="Toggle theme">
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
        <a href="#home" className="btn btn-ghost" style={{ paddingInline: ".5rem" }}>
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
        <a href="#fitapp" className="btn btn-accent2">FitApp Demo</a>
        <a href="#aprendeShop" className="btn btn-accent3">AprendeShop</a>
        <a href="#adobe" className="btn btn-accent4">AdobeSuite</a>
        <a href="#contact" className="btn btn-accent">Contact</a>
      </div>
    </section>
  );
}

// --- Placeholder sections to scroll (you can replace later with pages/routes) --
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
          <p><strong>Hello! nice to see you</strong>, my name is Erika. I studied fashion design, which gave me strong skills in creativity, project management, and attention to detail. Recently, I decided to transition into the tech world, and now I’m a Java full-stack developer. Some of my skills (HTML, CSS,  Bootstrap, Java Script, Java, Spring Boot, React, Tailwind, Adobe Suite, SQL, Git/GitHub), if you want to know more about my professional environment here is my LinkedIn profile.</p>
          <a className="btn" href="http://www.linkedin.com/in/erikaahg-desarrolladora-web" target="_blank" rel="noreferrer">LinkedIn</a>
        </Section>
        <Section id="fitapp" title="FitApp Demo">
          <p>Soon: calculate your macros and track the food you eat.</p>
        </Section>
        <Section id="aprendeShop" title="AprendeShop">
          <div className="stack">
            <p><strong>Full‑stack e‑commerce (team project)</strong>. AprendeShop is a full-stack web application developed as part of Generation’s Java Full-Stack Bootcamp. It is designed as an e-commerce and learning platform where users can purchase creative courses, materials, and interact in a community forum.
              As part of the team, I collaborated on:
              Developing responsive UI components with HTML, CSS, JavaScript, and Bootstrap
              Implementing features such as wishlist, dark/light mode, and forum
              Building back-end functionality with Java and Spring Boot
              Managing databases with MySQL
              Deploying the application on AWS
              Although AprendeShop is a capstone project and not a commercial product, it showcases my ability to work in agile teams, apply industry tools, and develop scalable solutions from scratch.</p>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn" href="https://rubiportuguez.github.io/Aprende-Shop/index.html" target="_blank" rel="noreferrer">View demo</a>
              <a className="btn" href="https://github.com/RubiPortuguez/Aprende-Shop/tree/develop" target="_blank" rel="noreferrer">Front End Repository</a>
              <a className="btn" href="https://github.com/RubiPortuguez/AprendeShop-Backend/tree/develop" target="_blank" rel="noreferrer">Back End Repository</a>
              <a className="btn" href="https://www.figma.com/design/MG8TBK9lzvWV1aU8pJSIPd/Borradores-AprendeShop?node-id=0-1&t=K5eREUPBSSRUzPKl-1" target="_blank" rel="noreferrer">Figma</a>
            </div>
          </div>
        </Section>
        <Section id="adobe" title="AdobeSuite">
          <div className="stack">
            <p><strong>Illustrator & Photoshop Book</strong></p>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn" href="https://drive.google.com/file/d/1LXkoXs2C3OjuENXDobDhNGNGjYEuHxeY/view?usp=sharing" target="_blank" rel="noreferrer"> Book (PDF)</a>
            </div>
          </div>
        </Section>
        <Section id="contact" title="Contact">
          <div className="stack">
            <p>Let's work together!!</p>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn" href="mailto:eahidehernandez@gmail.com" rel="noreferrer">Email</a>
              <a className="btn" href="http://www.linkedin.com/in/erikaahg-desarrolladora-web" target="_blank" rel="noreferrer">LinkedIn</a>
              <a className="btn" href="https://github.com/Erikaahide" target="_blank" rel="noreferrer">GitHub</a>
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
