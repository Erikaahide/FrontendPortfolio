import React, { useEffect, useState } from "react";

// --- Simple theme hook (light/dark) ----------------------------------------
function useTheme() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    // Load saved theme or system preference
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
      <span aria-hidden>{theme === "dark" ? "🌞" : "🌙"}</span>
      <span className="sr-only">Cambiar tema</span>
    </button>
  );
}

// --- UI: Navbar -------------------------------------------------------------
function Navbar() {
  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <a href="#home" className="btn btn-ghost" style={{ paddingInline: ".5rem" }}>
          <strong>Erika</strong>
        </a>
        <nav style={{ display: "flex", gap: "0.5rem" }}>
          <a className="btn btn-ghost" href="#about">About</a>
          <a className="btn btn-ghost" href="#fitapp">FitApp</a>
          <a className="btn btn-ghost" href="#contact">Contacto</a>
        </nav>
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
        Full‑Stack Developer & Fashion Designer. Diseño interfaces limpias y desarrollo aplicaciones web con foco en UX, performance y accesibilidad.
      </p>
      <div style={{ display: "flex", gap: "0.75rem", justifyContent: "center", flexWrap: "wrap" }}>
        <a href="#about" className="btn btn-primary">About me</a>
        <a href="#fitapp" className="btn">FitApp Demo</a>
        <a href="#contact" className="btn btn-accent">Contacto</a>
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
      <main>
        <HeroHome />
        <Section id="about" title="About me">
          <p>Mini bio, skills (Java, Spring Boot, React, CSS), y enlaces a LinkedIn y Figma.</p>
        </Section>
        <Section id="fitapp" title="FitApp Demo">
          <p>Próximamente: formulario de alimentos, totales por macro, y progreso diario.</p>
        </Section>
        <Section id="contact" title="Contacto">
          <p>Formulario corto de contacto y redes.</p>
        </Section>
      </main>
      <footer className="container" style={{ padding: "2rem 0", opacity: .8 }}>
        <small className="muted">© {new Date().getFullYear()} Erika. All rights reserved.</small>
      </footer>
    </div>
  );
}
