import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroHome from "./components/HeroHome";
import Section from "./components/Section";
import "./i18n"; // importa la configuración de idiomas
import { useTranslation } from "react-i18next";
import { Trans } from "react-i18next";
import { Wrench, Server, GraduationCap, Palette, BookOpen, Laptop, Code2, } from "lucide-react";


export default function App() {
  const { t } = useTranslation();
  const [activeModal, setActiveModal] = useState(null);

  const getModalClass = () => {
    if (activeModal?.includes("fit")) return "modal-fit animate-fadeIn";
    if (activeModal?.includes("birdman")) return "modal-birdman animate-fadeIn";
    if (["about", "education", "skills", "extra_education"].includes(activeModal))
      return "modal-aboutme animate-slideUp";
    return "modal-aprende animate-zoomIn";
  };

  return (
    <div>
      <Navbar />
      <main>
        <HeroHome />
        {/* --- ABOUT SECTION --- */}
        <Section id="about" title={t("about_title")}>
          <div className="stack">
            <h2 className="text-2xl font-bold mb-2">{t("about_intro")}</h2>
            <p className="mb-4">{t("about_text")}</p>

            <p>{t("about_linkedin_intro")}</p>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a
                className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-xl shadow-md transition duration-300"
                href="http://www.linkedin.com/in/erikaahg-desarrolladora-web"
                target="_blank"
                rel="noreferrer"
              >
                {t("about_linkedin_btn")}
              </a>

              <button
                className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-xl shadow-md transition duration-300"
                onClick={() => setActiveModal("skills")}
              >
                {t("modal_skills_title")}
              </button>

              <button
                className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-xl shadow-md transition duration-300"
                onClick={() => setActiveModal("education")}
              >
                {t("modal_education_title")}
              </button>
              <button
                className="bg-pink-500 hover:bg-pink-600 text-white font-medium py-2 px-4 rounded-xl shadow-md transition duration-300"
                onClick={() => setActiveModal("extra_education")}
              >
                {t("modal_extra_education_title")}
              </button>
            </div>
          </div>
        </Section>


        {/* --- Dinamic modals --- */}
        {activeModal && (
          <div className="modal-overlay" onClick={() => setActiveModal(null)}>
            <div
              className={`modal-box glow-border glow-border-hover  ${getModalClass()}
                  ? "modal-fit animate-fadeIn"
                  : activeModal.includes("about")
                    ? "modal-aboutme animate-slideUp"
                    : "modal-aprende animate-zoomIn"
                }`}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="modal-close"
                onClick={() => setActiveModal(null)}
                aria-label="Close modal"
              >
                ✕
              </button>

              {/* --- SKILLS --- */}
              {activeModal === "skills" && (
                <>
                  <h4 className="text-2xl font-bold mb-3 text-pink-100 flex items-center gap-2">
                    <Wrench className="w-5 h-5 text-pink-200" />
                    {t("modal_skills_title")}
                  </h4>

                  <p className="text-sm mb-6 text-[var(--surface-muted)]">
                    {t("modal_skills_text")}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* --- Frontend --- */}
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
                      <h5 className="font-semibold text-pink-200 mb-3 flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-pink-300" />
                        {t("modal_skills_frontend")}
                      </h5>
                      <ul className="list-disc list-inside text-sm space-y-1 text-[var(--surface-muted)]">
                        <li>HTML5 / CSS3</li>
                        <li>TailwindCSS</li>
                        <li>Bootstrap</li>
                        <li>React.js</li>
                        <li>Figma (UI/UX Design)</li>
                      </ul>
                    </div>

                    {/* --- Backend --- */}
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
                      <h5 className="font-semibold text-pink-200 mb-3 flex items-center gap-2">
                        <Server className="w-4 h-4 text-pink-300" />
                        {t("modal_skills_backend")}
                      </h5>
                      <ul className="list-disc list-inside text-sm space-y-1 text-[var(--surface-muted)]">
                        <li>Java / Spring Boot</li>
                        <li>Node.js</li>
                        <li>MySQL / JPA</li>
                        <li>REST APIs / Postman</li>
                        <li>Junit</li>
                      </ul>
                    </div>

                    {/* --- Tools & Platforms --- */}
                    <div className="md:col-span-2 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
                      <h5 className="font-semibold text-pink-200 mb-3 flex items-center gap-2">
                        <Wrench className="w-4 h-4 text-pink-300" />
                        {t("modal_skills_tools")}
                      </h5>
                      <ul className="flex flex-wrap gap-3 text-sm text-[var(--surface-muted)]">
                        {[
                          "Git / GitHub",
                          "Linux",
                          "VS Code / Eclipse",
                          "AWS ",
                          "Agile / Scrum",
                        ].map((tool) => (
                          <li
                            key={tool}
                            className="px-3 py-1 bg-white/10 rounded-full backdrop-blur-sm border border-white/10 hover:bg-white/20 transition"
                          >
                            {tool}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}

              {/* --- Education --- */}
              {activeModal === "education" && (
                <>
                  <h4 className="text-2xl font-bold mb-3 text-pink-100 flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-pink-200" />
                    {t("modal_education_title")}
                  </h4>

                  <p className="text-sm mb-6 text-[var(--surface-muted)]">
                    {t("modal_about_education_intro")}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* --- Full Stack Development --- */}
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
                      <h5 className="font-semibold text-pink-200 mb-2 flex items-center gap-2">
                        <GraduationCap className="w-4 h-4 text-pink-300" />
                        {t("modal_about_fullstack")}
                      </h5>
                      <p className="text-sm text-[var(--surface-muted)] leading-relaxed">
                        {t("modal_about_fullstack_desc")}
                      </p>
                      <ul className="list-disc list-inside mt-2 text-sm text-[var(--surface-muted)]">
                        <li>{t("modal_about_fullstack_point1")}</li>
                        <li>{t("modal_about_fullstack_point2")}</li>
                        <li>{t("modal_about_fullstack_point3")}</li>
                      </ul>
                    </div>

                    {/* --- Fashion Design --- */}
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
                      <h5 className="font-semibold text-pink-200 mb-2 flex items-center gap-2">
                        <Palette className="w-4 h-4 text-pink-300" />
                        {t("modal_about_fashiondesign")}
                      </h5>
                      <p className="text-sm text-[var(--surface-muted)] leading-relaxed">
                        {t("modal_about_fashiondesign_desc")}
                      </p>
                      <ul className="list-disc list-inside mt-2 text-sm text-[var(--surface-muted)]">
                        <li>{t("modal_about_fashiondesign_point1")}</li>
                        <li>{t("modal_about_fashiondesign_point2")}</li>
                        <li>{t("modal_about_fashiondesign_point3")}</li>
                      </ul>
                    </div>
                  </div>
                </>
              )}

              {/* --- Extra Education --- */}
              {activeModal === "extra_education" && (
                <>
                  <h4 className="text-2xl font-bold mb-3 text-pink-100 flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-pink-200" />
                    {t("modal_extra_education_title")}
                  </h4>

                  <p className="text-sm mb-6 text-[var(--surface-muted)]">
                    {t("modal_extra_education_intro")}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    {/* --- Tech Workshops & Certifications --- */}
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
                      <h5 className="font-semibold text-pink-200 mb-2 flex items-center gap-2">
                        <Laptop className="w-4 h-4 text-pink-300" />
                        {t("modal_extra_education_tech")}
                      </h5>
                      <ul className="list-disc list-inside text-sm text-[var(--surface-muted)] space-y-1">
                        <li>Skill share - Figma Pro: Auto Layouts, Grids & Components</li>
                        <li>Fundaula - Java</li>
                        <li>Desafío Latam - CSS, Figma, Git, Web development</li>
                        <li>Santander Open Academy – Gestión de Proyectos y Fundamentos de metodología Agile</li>
                        <li>Coursera - Selenium Course</li>
                      </ul>
                    </div>

                    {/* --- Creative & Professional Training --- */}
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition">
                      <h5 className="font-semibold text-pink-200 mb-2 flex items-center gap-2">
                        <Palette className="w-4 h-4 text-pink-300" />
                        {t("modal_extra_education_design")}
                      </h5>
                      <ul className="list-disc list-inside text-sm text-[var(--surface-muted)] space-y-1">
                        <li>Cisco Networking Academy – English for IT  (B2 - CEFR)</li>
                        <li>Berlitz – English Communication for Professionals</li>
                        <li>EF SET Cetification (C1)</li>
                        <li>Domestika - Adobe Creative Suite</li>
                        <li>INSIDE LVMH - Fashion Design, Innovation & Cutomer experience</li>
                      </ul>
                    </div>
                  </div>
                </>
              )}

              {/* --- PROBLEM SOLVING MODAL (AprendeShop & FitApp) --- */}
              {(activeModal === "problem" || activeModal === "fit-problem") && (
                <>
                  <h4 className="text-lg font-semibold mb-4">
                    {t(activeModal === "fit-problem" ? "modal_fit_problem_title" : "modal_problem_title")}
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[var(--surface-muted)]">
                    <li>{t(activeModal === "fit-problem" ? "modal_fit_problem_1" : "modal_problem_1")}</li>
                    <li>{t(activeModal === "fit-problem" ? "modal_fit_problem_2" : "modal_problem_2")}</li>
                    <li>{t(activeModal === "fit-problem" ? "modal_fit_problem_3" : "modal_problem_3")}</li>
                  </ul>
                </>
              )}

              {/* --- USER STORIES (AprendeShop & FitApp) --- */}
              {(activeModal === "storiesAS" || activeModal === "fit-stories") && (
                <>
                  <h4 className="text-lg font-semibold mb-4">
                    {t(activeModal === "fit-stories" ? "modal_fit_stories_title" : "modal_stories_title")}
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[var(--surface-muted)]">
                    <li>{t(activeModal === "fit-stories" ? "modal_fit_story_1" : "modal_story_1")}</li>
                    <li>{t(activeModal === "fit-stories" ? "modal_fit_story_2" : "modal_story_2")}</li>
                    <li>{t(activeModal === "fit-stories" ? "modal_fit_story_3" : "modal_story_3")}</li>
                  </ul>
                </>
              )}
              {/* --- USER STORIES - Birdman Improvements --- */}
              {activeModal === "birdman-stories" && (
                <>
                  <h4 className="text-lg font-semibold mb-4">
                    {t("modal_birdman_stories_title")}
                  </h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[var(--surface-muted)]">
                    <li>{t("modal_birdman_story_1")}</li>
                    <li>{t("modal_birdman_story_2")}</li>
                    <li>{t("modal_birdman_story_3")}</li>
                  </ul>
                </>
              )}


              {/* --- TEAM ROLES --- */}
              {activeModal === "roles" && (
                <>
                  <h4 className="text-lg font-semibold mb-4">{t("modal_roles_title")}</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[var(--surface-muted)]">
                    <li>{t("modal_role_1")}</li>
                    <li>{t("modal_role_2")}</li>
                    <li>{t("modal_role_3")}</li>
                  </ul>
                </>
              )}

              {/* --- FUTURE GOALS (FitApp) --- */}
              {activeModal === "fit-future" && (
                <>
                  <h4 className="text-lg font-semibold mb-4">{t("modal_fit_future_title")}</h4>
                  <ul className="list-disc list-inside space-y-2 text-sm text-[var(--surface-muted)]">
                    <li>{t("modal_fit_future_1")}</li>
                    <li>{t("modal_fit_future_2")}</li>
                    <li>{t("modal_fit_future_3")}</li>
                  </ul>
                </>
              )}
            </div>
          </div>
        )}



        <Section id="aprendeShop" title="AprendeShop">
          <div className="stack">
            <h3 className="text-xl font-bold mb-2">
              {t("aprendeshop_subtitle")}
            </h3>
            <p className="mb-4">{t("aprendeshop_description")}</p>
            <p className="font-semibold mb-2">{t("aprendeshop_tasks_title")}</p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>{t("aprendeshop_task_1")}</li>
              <li>{t("aprendeshop_task_2")}</li>
              <li>{t("aprendeshop_task_3")}</li>
              <li>{t("aprendeshop_task_4")}</li>
              <li>{t("aprendeshop_task_5")}</li>
              <li>{t("aprendeshop_task_6")}</li>
            </ul>
            <p>{t("aprendeshop_conclusion")}</p>

            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn btn-accent3" href="https://rubiportuguez.github.io/Aprende-Shop/index.html" target="_blank" rel="noreferrer">{t("view_btn")}</a>
              <a className="btn btn-accent3" href="https://github.com/RubiPortuguez/Aprende-Shop/tree/develop" target="_blank" rel="noreferrer">{t("fr_repo_btn")}</a>
              <a className="btn btn-accent3" href="https://github.com/RubiPortuguez/AprendeShop-Backend/tree/develop" target="_blank" rel="noreferrer">{t("ba_repo_btn")}</a>
              <a className="btn btn-accent3" href="https://www.figma.com/design/MG8TBK9lzvWV1aU8pJSIPd/Borradores-AprendeShop?node-id=0-1&t=K5eREUPBSSRUzPKl-1" target="_blank" rel="noreferrer">🖥️ Figma</a>
              <button className="btn btn-accent3" onClick={() => setActiveModal("problem")}>{t("problem_solving_btn")}</button>
              <button className="btn btn-accent3" onClick={() => setActiveModal("storiesAS")}>{t("user_stories_btn")}</button>

            </div>
          </div>
        </Section>

        <Section id="improve" title="Improvements">
          <div className="stack">
            <h3 className="text-xl font-bold mb-2">Birdman Web Improvements</h3>
            <p className=" mb-4">
              {t("improve_description")}</p>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn btn-accentB" href="https://erikaahide.github.io/Birdman-Improvements/" target="_blank" rel="noreferrer">{t("view_btn")}</a>
              <a className="btn btn-accentB" href="https://mx.birdman.com/?srsltid=AfmBOoqRKqiBwmBaszMRHu67mPj-ZH0bITLB6EnWoO56ytlSL86Y6cVi" target="_blank" rel="noreferrer">Real website</a>
              <a className="btn btn-accentB" href="https://github.com/Erikaahide/Birdman-Improvements" target="_blank" rel="noreferrer">GitHub Repo</a>
              <button className="btn btn-accentB" onClick={() => setActiveModal("birdman-stories")}>{t("user_stories_btn")}</button>
            </div>
          </div>
        </Section>

        <Section id="fitapp" title="FitAppDemo">
          <div className="stack">
            <h3 className="text-xl font-bold mb-2">
              {t("fitapp_description")}</h3>
            <p className=" mb-4">{t("fitapp_text")}</p>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn btn-accent2" href="https://erikaahide.github.io/FitApp/" target="_blank" rel="noreferrer">{t("view_btn")}</a>
              <a className="btn btn-accent2" href="https://github.com/Erikaahide/FitApp?tab=readme-ov-file" target="_blank" rel="noreferrer">GitHub Repo</a>
              <a className="btn btn-accent2" href="https://www.figma.com/design/zsiRvaHp8P9v2CB2HxYtHE/Portfolio?t=1vvkAoR8YqURUruz-1" target="_blank" rel="noreferrer">Wireframe</a>
              <button
                className="btn btn-accent2"
                onClick={() => setActiveModal("fit-problem")}
              >
                {t("problem_solving_btn")}
              </button>
              <button
                className="btn btn-accent2"
                onClick={() => setActiveModal("fit-stories")}
              >
                {t("user_stories_btn")}
              </button>
              <button
                className="btn btn-accent2"
                onClick={() => setActiveModal("fit-future")}
              >
                {t("future_features_btn")}
              </button>
            </div>
          </div>
        </Section>

        <Section id="odoo" title="Odoo">
          <div className="stack">
            <h3 className="text-xl font-bold mb-2">Odoo design excersice</h3>
            <p className=" mb-4">
              {t("odoo_description")}</p>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn btn-accentO" href="https://erikaahide.github.io/Odoo/" target="_blank" rel="noreferrer">{t("view_btn")}</a>
              <a className="btn btn-accentO" href="https://github.com/Erikaahide/Odoo" target="_blank" rel="noreferrer">GitHub Repo</a>
              <a className="btn btn-accentO" href="https://panic-circus-60529424.figma.site/" target="_blank" rel="noreferrer">Wireframe</a>
            </div>
          </div>
        </Section>

        <Section id="figma" title="Figma">
          <div className="stack">
            <h3 className="text-xl font-bold mb-2">{t("figma_description")}</h3>
            <p className=" mb-4">
              {t("figma_text")}</p>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn btn-accent7" href="https://www.figma.com/design/zsiRvaHp8P9v2CB2HxYtHE/Portfolio?node-id=0-1&t=1TMprCo3F1mFlZZx-1" target="_blank" rel="noreferrer">{t("portfolio_btn")}</a>
              <a className="btn btn-accent7" href="https://www.figma.com/design/ZPpJGbMZmsWddn3i0icvXt/Portfolio?node-id=0-1&t=BCGzJieD65UEbvnu-0" target="_blank" rel="noreferrer">Wireframe</a>
            </div>
          </div>
        </Section>

        <Section id="JS" title="JSDemo">
          <div className="stack">
            <h3 className="text-xl font-bold mb-2">
              Mini Search App API (JSdemo)</h3>
            <p className="mb-4">
              <Trans i18nKey="jsdemo_description">
                A simple JavaScript demo project: a user search app. <br />
                Built with <strong>Vanilla JS, HTML5, and CSS3</strong>. Fetch user data asynchronously from a REST API.
              </Trans>
            </p>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn btn-accent5" href="https://erikaahide.github.io/API-JS-PROMISES/" target="_blank" rel="noreferrer">{t("view_btn")}</a>
              <a className="btn btn-accent5" href="https://github.com/Erikaahide/API-JS-PROMISES" target="_blank" rel="noreferrer">GitHub Repo</a>
            </div>
          </div>
        </Section>

        <Section id="SQL" title="SQL">
          <div className="stack">
            <h3 className="text-xl font-bold mb-2">{t("SQL_subtitle")}</h3>
            <p className=" mb-4">
              {t("SQL_description")}</p>
            <ul className="list-disc list-inside space-y-1 mb-4">
              <li>{t("SQL_task_1")}</li>
              <li>{t("SQL_task_2")}</li>
              <li>{t("SQL_task_3")}</li>
              <li>{t("SQL_task_4")}</li>
              <li>{t("SQL_task_5")}</li>
            </ul>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn btn-accent6" href="https://github.com/Erikaahide/SQLpractices" target="_blank" rel="noreferrer">GitHub Repo</a>
            </div>
          </div>
        </Section>

        <Section id="adobe" title="AdobeSuite">
          <div className="stack">
            <h3 className="text-xl font-bold mb-2">
              {t("book")}</h3>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn btn-accent4" href="https://drive.google.com/file/d/1LXkoXs2C3OjuENXDobDhNGNGjYEuHxeY/view?usp=sharing" target="_blank" rel="noreferrer">{t("portfolio_PDF_btn")}</a>
            </div>
          </div>
        </Section>

        <Section id="contact" title={t("contact_title")}>
          <div className="stack">
            <h3 className="text-xl font-bold mb-2">
              {t("contact_subtitle")}
            </h3>
            <div style={{ display: "flex", gap: ".5rem", flexWrap: "wrap" }}>
              <a className="btn btn-accent" href="mailto:eahidehernandez@gmail.com" rel="noreferrer">📧 Email</a>
              <a className="btn btn-accent" href="http://www.linkedin.com/in/erikaahg-desarrolladora-web" target="_blank" rel="noreferrer">💼 LinkedIn</a>
              <a className="btn btn-accent" href="https://github.com/Erikaahide" target="_blank" rel="noreferrer">🐱 GitHub</a>
            </div>
          </div>
        </Section>

      </main>
      <footer className="container" style={{ padding: "2rem 0", opacity: 0.8 }}>
        <small className="muted">
          © {new Date().getFullYear()} ErikaA. {t("footer_rights")}
        </small>
      </footer>
    </div>
  );
}
