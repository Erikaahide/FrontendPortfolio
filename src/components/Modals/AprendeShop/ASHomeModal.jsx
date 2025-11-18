import React from "react";
import { X } from "lucide-react";

export default function ASHomeModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[var(--surface)] text-[var(--text)] p-8 rounded-2xl max-w-3xl w-[90%] shadow-xl relative animate-fadeIn overflow-y-auto max-h-[90vh]">
        {/* Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X size={22} />
        </button>

        {/* Título */}
        <h2 className="text-3xl font-bold text-[var(--accent-improve-from)] mb-4 text-center">
          Home Page
        </h2>

        {/* Descripción breve */}
        <p className="text-sm opacity-80 text-justify mb-6">
          The <strong>Home Page</strong> is the main entry point of AprendeShop.
          It introduces users to the platform’s mission, showcases key features,
          and guides them to explore courses, understand how the platform works,
          and connect with the community. Designed with accessibility,
          engagement, and clarity in mind, it blends marketing storytelling with
          interactive UI elements.
        </p>

        {/* Estructura */}
        <h3 className="font-semibold text-lg mb-2 text-[var(--accent-improve-from)]">
          Structure
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>
            <strong>Announcement Bar:</strong> Highlights platform advantages
            like verified reviews, included kits, and accessibility.
          </li>
          <li>
            <strong>Hero Section:</strong> Combination of text and Bootstrap
            carousel that introduces AprendeShop’s value proposition and shows
            sample courses.
          </li>
          <li>
            <strong>Distinctions Section:</strong> “Lo que nos distingue” cards
            that emphasize unique features: kits, verified reviews, community,
            and useful products.
          </li>
          <li>
            <strong>Catalog Section:</strong> Placeholder for dynamically loaded
            courses rendered through <code>clasesCatalogo.js</code>.
          </li>
          <li>
            <strong>How It Works:</strong> Four-step guide illustrating the user
            journey — from choosing a course to sharing results.
          </li>
          <li>
            <strong>Community Section:</strong> Promotes social interaction and
            collaboration through imagery and CTA buttons linking to “Nosotras”
            and the catalog.
          </li>
          <li>
            <strong>Final CTA:</strong> Encourages users to start learning with
            a clear call-to-action leading to the login page.
          </li>
        </ul>

        {/* Tecnologías */}
        <h3 className="font-semibold text-lg mt-6 mb-2 text-[var(--accent-improve-from)]">
          Technologies
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>HTML5 and Bootstrap 5.3.7 for layout and responsive design.</li>
          <li>
            Font Awesome and Bootstrap Icons for accessible and cohesive iconography.
          </li>
          <li>
            JavaScript modules (<code>inicio.js</code> and
            <code>clasesCatalogo.js</code>) to manage interactivity and dynamic
            content loading.
          </li>
          <li>
            SweetAlert2 prepared for user alerts or future interaction feedback.
          </li>
          <li>
            Custom CSS (<code>style.css</code>, <code>inicio.css</code>) for
            gradients, buttons, and brand consistency.
          </li>
        </ul>

        {/* Diseño */}
        <h3 className="font-semibold text-lg mt-6 mb-2 text-[var(--accent-improve-from)]">
          Design Highlights
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>
            Gradient hero background and card hover effects that bring visual
            depth and interactivity.
          </li>
          <li>
            Clean grid system and rounded containers for an approachable and
            modern interface.
          </li>
          <li>
            Strong typographic hierarchy and spacing for a professional look.
          </li>
          <li>
            Accessible colors and iconography for inclusive design.
          </li>
          <li>
            Responsive layout that adapts seamlessly across devices.
          </li>
        </ul>

        {/* Cierre */}
        <div className="mt-8 text-center">
          <p className="text-sm italic opacity-70">
            “Home” captures AprendeShop’s identity — a creative, accessible, and
            community-driven platform where learning and making come together.
          </p>
        </div>
      </div>
    </div>
  );
}
