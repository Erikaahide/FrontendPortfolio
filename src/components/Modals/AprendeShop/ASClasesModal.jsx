import React from "react";
import { X } from "lucide-react";

export default function ASClasesModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[var(--surface)] text-[var(--text)] p-8 rounded-2xl max-w-3xl w-[90%] shadow-xl relative animate-fadeIn overflow-y-auto max-h-[90vh]">
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition"
        >
          <X size={22} />
        </button>

        {/* Título */}
        <h2 className="text-3xl font-bold text-[var(--accent-improve-from)] mb-4 text-center">
          Classes
        </h2>

        {/* Descripción breve */}
        <p className="text-sm opacity-80 text-justify mb-6">
          The <strong>Classes</strong> page functions as the main{" "}
          <em>catalog interface</em> of AprendeShop, allowing users to explore,
          filter, and visually discover available courses. Designed with clarity
          and efficiency in mind, it provides an intuitive way to browse
          creative disciplines and their included materials.
        </p>

        {/* Estructura */}
        <h3 className="font-semibold text-lg mb-2 text-[var(--accent-improve-from)]">
          Structure
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>
            <strong>Navbar Filter:</strong> Responsive navigation bar containing
            category filters (e.g., <em>Cerámica, Pintura, Crochet</em>), each
            represented by a custom icon.
          </li>
          <li>
            <strong>Dynamic Course Grid:</strong> The container{" "}
            <code>#itemsContainer</code> dynamically loads course cards using
            JavaScript from <code>clasesCatalogo.js</code>.
          </li>
          <li>
            <strong>Filter Interaction:</strong> Clicking a category refines
            visible cards by their associated tag without reloading the page.
          </li>
          <li>
            <strong>Cards Layout:</strong> Each class card includes an image,
            title, description, and essential course info to enhance user
            decision-making.
          </li>
          <li>
            <strong>Iconography:</strong> Custom category icons provide quick
            visual context and a friendly, craft-oriented identity.
          </li>
        </ul>

        {/* Tecnologías */}
        <h3 className="font-semibold text-lg mt-6 mb-2 text-[var(--accent-improve-from)]">
          Technologies
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>
            HTML5 and Bootstrap 5.3.7 for responsive structure and grid layout.
          </li>
          <li>
            JavaScript module (<code>clasesCatalogo.js</code>) handles dynamic
            rendering and filtering logic.
          </li>
          <li>
            Font Awesome and Bootstrap Icons integrated with{" "}
            <code>.iconosClases</code> for accessible icon design.
          </li>
          <li>
            Custom CSS (<code>style.css</code>) defines consistent spacing,
            rounded corners, and hover transitions.
          </li>
          <li>
            SweetAlert2 included for future integration of user feedback or
            action confirmations.
          </li>
        </ul>

        {/* Diseño */}
        <h3 className="font-semibold text-lg mt-6 mb-2 text-[var(--accent-improve-from)]">
          Design Highlights
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>
            Filter bar with icons that keep the UI visually lightweight and
            mobile-friendly.
          </li>
          <li>
            Uniform course cards with consistent height and shadow to maintain a
            clean catalog view.
          </li>
          <li>
            Soft color palette aligned with AprendeShop’s accessible and
            creative branding.
          </li>
          <li>
            Modular structure enabling scalability for new course categories or
            additional filters.
          </li>
          <li>
            Emphasis on discoverability — users can immediately identify and
            explore courses of interest.
          </li>
        </ul>

        {/* Cierre */}
        <div className="mt-8 text-center">
          <p className="text-sm italic opacity-70">
            “Clases” represents the heart of AprendeShop’s learning experience —
            an intuitive, dynamic catalog that blends creativity and usability.
          </p>
        </div>
      </div>
    </div>
  );
}
