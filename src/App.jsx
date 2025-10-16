import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroHome from "./components/HeroHome";
import Section from "./components/Section";
import "./i18n"; // importa la configuración de idiomas

export default function App() {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Navbar />
      <main>
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

        {/* ---  Modal -------------------------------------------------------------------- */}
        {showModal && (
          <div
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center px-4 animate-fadeIn"
            onClick={() => setShowModal(false)} // Cierra al hacer click en fondo
          >
            {/* MODAL CARD */}
            <div
              className="relative w-full max-w-3xl rounded-[var(--radius)] p-[var(--space-6)] shadow-md backdrop-blur-sm animate-scaleIn"
              style={{
                backgroundColor: "rgba(5, 85, 76, 0.87)",
                color: "var(--surface)",
                border: "var(--border)",
                fontFamily: "var(--font-sans)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              }}
              onClick={(e) => e.stopPropagation()} // Evita cerrar si haces click dentro
            >
              {/* Botón cerrar */}
              <button
                className="absolute top-4 right-4 text-xl font-bold text-[var(--muted)] hover:text-[var(--text)]"
                onClick={() => setShowModal(false)}
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* Contenido */}
              <h4 className="text-lg font-semibold mb-4">Challenges & Solutions</h4>
              <ul className="list-disc list-inside space-y-2 text-sm text-[var(--surface-muted)]">
                <li>
                  Properly configuring the deployment on AWS Elastic Beanstalk was a challenge due to environment variable errors.
                  We resolved it by creating a clean and well-documented <code className="font-mono">application.properties</code> file.
                </li>
                <li>
                  During JWT authentication, we encountered CORS issues in production, which we solved by adjusting the backend headers.
                </li>
                <li>
                  We managed to synchronize local and deployed databases using migration scripts with MySQL Workbench.
                </li>
              </ul>
            </div>
          </div>
        )}


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
              <button className="btn btn-accent3" onClick={() => setShowModal(true)}> Problem solving </button>
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
