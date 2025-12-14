import React from "react";
import { useTranslation } from "react-i18next";

export default function HeroHome() {
  const { t } = useTranslation();
  const [filter, setFilter] = React.useState("all");
  const buttons = [
    { id: "about", label: t("about_title"), href: "#about", className: "btn btn-primary", categories: ["info"] },
    { id: "aprendeShop", label: "AprendeShop", href: "#aprendeShop", className: "btn btn-accent3", categories: ["frontend", "backend", "uxui"] },
    { id: "improve", label: "Improvements", href: "#improve", className: "btn btn-accentB", categories: ["uxui"] },
    { id: "odoo", label: "Exercise", href: "#odoo", className: "btn btn-accentO", categories: ["uxui"] },
    { id: "google", label: "Google", href: "#google", className: "btn btn-accentG", categories: ["uxui"] },
    { id: "mapping", label: "Mapping", href: "#mapping", className: "btn btn-accentM", categories: ["uxui"] },
    { id: "ai", label: "Generative AI", href: "#ai", className: "btn btn-accentAI", categories: ["uxui"] },
    { id: "figma", label: "Figma", href: "#figma", className: "btn btn-accent7", categories: ["uxui"] },
    { id: "fitapp", label: "FitAppDemo", href: "#fitapp", className: "btn btn-accent2", categories: ["frontend", "uxui"] },
    { id: "JS", label: "JSDemo", href: "#JS", className: "btn btn-accent5", categories: ["frontend"] },
    { id: "SQL", label: "SQLDemo", href: "#SQL", className: "btn btn-accent6", categories: ["backend", "data"] },
    { id: "adobe", label: "AdobeSuite", href: "#adobe", className: "btn btn-accent4", categories: ["uxui"] },
    { id: "contact", label: t("contact_title"), href: "#contact", className: "btn btn-accent", categories: ["info"] }
  ];

  const filteredButtons = buttons.filter(btn => {
    if (filter === "all") return true;
    return btn.categories.includes(filter);
  });


  return (
    <section id="home" className="hero dynamic-bg" style={{ padding: "4rem 0", color: "white", width: "100vw" }}>
      <div className="container" style={{ maxWidth: "100%" }}>
        <h1 className="hero-title">{t("hero_title")}</h1>
        <p className="hero-sub">{t("hero_sub")}</p>
        <div className="flex gap-3 justify-center flex-wrap mt-4">
          {filteredButtons.map(btn => (
            <a key={btn.id} href={btn.href} className={btn.className}>
              {btn.label}
            </a>
          ))}
        </div>
      </div>
      {/* <button onClick={() => setFilter("all")} className="chip">All</button>
      <button onClick={() => setFilter("frontend")} className="chip">Frontend</button>
      <button onClick={() => setFilter("backend")} className="chip">Backend</button>
      <button onClick={() => setFilter("uxui")} className="chip">UX/UI Design</button>
      <button onClick={() => setFilter("data")} className="chip">Data</button> */}
    </section>
  );
}
