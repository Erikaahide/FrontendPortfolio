import React from "react";
import { X } from "lucide-react";

export default function ASNosotrasModal({ onClose }) {
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
          About us (Team & Identity)
        </h2>

        {/* Descripción breve */}
        <p className="text-sm opacity-80 text-justify mb-6">
          The <strong>Nosotras</strong> section introduces the team behind
          AprendeShop through a layout that blends storytelling and responsive
          design. It highlights collaboration, accessibility, and visual
          identity while presenting each member of the development team.
        </p>

        {/* Estructura */}
        <h3 className="font-semibold text-lg mb-2 text-[var(--accent-improve-from)]">
          Structure
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>
            <strong>Intro Header:</strong> Presents the project’s purpose and
            mission, emphasizing creativity and community.
          </li>
          <li>
            <strong>Automatic Carousel:</strong> Built with Bootstrap 5.3.7 to
            showcase each team member’s photo, name, and role dynamically.
          </li>
          <li>
            <strong>Team Cards Grid:</strong> Responsive layout using
            Bootstrap’s <code>row</code> and <code>col-lg-6</code> classes to
            organize detailed profiles.
          </li>
          <li>
            <strong>Mission & Vision Block:</strong> Two closing text panels
            reinforce the project’s identity and goals.
          </li>
        </ul>

        {/* Tecnologías */}
        <h3 className="font-semibold text-lg mt-6 mb-2 text-[var(--accent-improve-from)]">
          Technologies
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>HTML5 and CSS3 for semantic structure and style.</li>
          <li>Bootstrap 5.3.7 for grid system, responsive design, and carousel.</li>
          <li>
            Font Awesome 6.5 and Bootstrap Icons 1.13 for contact and social
            icons.
          </li>
          <li>
            Custom CSS (<code>style.css</code>) for color palette, rounded cards,
            and typography hierarchy.
          </li>
        </ul>

        {/* Diseño */}
        <h3 className="font-semibold text-lg mt-6 mb-2 text-[var(--accent-improve-from)]">
          Design Highlights
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>
            Rounded team portraits and soft shadows to humanize the interface.
          </li>
          <li>
            Alternating layout between carousel and grid for visual rhythm and
            engagement.
          </li>
          <li>
            Smooth automatic transitions and color accents aligned with brand
            identity.
          </li>
          <li>
            Fully responsive, ensuring accessibility and consistency across
            devices.
          </li>
        </ul>

        {/* Cierre */}
        <div className="mt-8 text-center">
          <p className="text-sm italic opacity-70">
            “Nosotras” reflects AprendeShop’s collaborative essence — blending
            creativity, learning, and technology to build an accessible
            community.
          </p>
        </div>
      </div>
    </div>
  );
}
