import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HeroHome from "./components/HeroHome";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";

// 🔸 Importación de secciones
import AprendeShopSection from "./components/ProjectSections/AprendeShopSection";
import BirdmanSection from "./components/ProjectSections/BirdmanSection";
import FitAppSection from "./components/ProjectSections/FitAppSection";
import OdooSection from "./components/ProjectSections/OdooSection";
import FigmaSection from "./components/ProjectSections/FigmaSection";
import JSDemoSection from "./components/ProjectSections/JSDemoSection";
import SQLSection from "./components/ProjectSections/SQLSection";
import AdobeSection from "./components/ProjectSections/AdobeSection";
import ContactSection from "./components/ProjectSections/ContactSection";

// 🔸 Importación de modales
import SkillsModal from "./components/Modals/SkillsModal";
import EducationModal from "./components/Modals/EducationModal";
import ExtraEducationModal from "./components/Modals/ExtraEducationModal";
import ProblemModal from "./components/Modals/ProblemModal";
import StoriesModal from "./components/Modals/StoriesModal";
import BirdmanModal from "./components/Modals/BirdmanModal";
import FitFutureModal from "./components/Modals/FitFutureModal";

export default function App() {
  const [activeModal, setActiveModal] = useState(null);

  return (
    <div>
      <Navbar />
      <main>
        <HeroHome />
        <AboutSection setActiveModal={setActiveModal} />
        <AprendeShopSection setActiveModal={setActiveModal} />
        <BirdmanSection setActiveModal={setActiveModal} />
        <FitAppSection setActiveModal={setActiveModal} />
        <OdooSection />
        <FigmaSection />
        <JSDemoSection />
        <SQLSection />
        <AdobeSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Render dinámico de modales */}
      {activeModal === "skills" && (
        <SkillsModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "education" && (
        <EducationModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "extra_education" && (
        <ExtraEducationModal onClose={() => setActiveModal(null)} />
      )}

      {(activeModal === "problem" || activeModal === "fit-problem") && (
        <ProblemModal
          onClose={() => setActiveModal(null)}
          activeModal={activeModal}
        />
      )}
      {(activeModal === "storiesAS" || activeModal === "fit-stories") && (
        <StoriesModal
          onClose={() => setActiveModal(null)}
          activeModal={activeModal}
        />
      )}

      {activeModal === "birdman-stories" && (
        <BirdmanModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "roles" && (
        <RolesModal onClose={() => setActiveModal(null)} />
      )}
      {activeModal === "fit-future" && (
        <FitFutureModal onClose={() => setActiveModal(null)} />
      )}
    </div>
  );
}
