import React from "react";
import { X } from "lucide-react";

export default function ASContactModal({ onClose }) {
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
          Contact us
        </h2>

        {/* Descripción breve */}
        <p className="text-sm opacity-80 text-justify mb-6">
          The <strong>Contact</strong> section provides users with an easy and
          professional way to reach the AprendeShop team. It integrates a
          responsive form, validation feedback, and location details to enhance
          user trust and accessibility.
        </p>

        {/* Estructura */}
        <h3 className="font-semibold text-lg mb-2 text-[var(--accent-improve-from)]">
          Structure
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>
            <strong>Header:</strong> A centered introduction with the brand name
            and slogan <em>“Aprende algo nuevo, un kit a la vez.”</em>
          </li>
          <li>
            <strong>Contact Form:</strong> Bootstrap form with validation for
            name, email, phone, and message inputs. Includes feedback messages
            for invalid data.
          </li>
          <li>
            <strong>Map Section:</strong> Embedded Google Maps iframe showing
            the AprendeShop office.
          </li>
        </ul>

        {/* Tecnologías */}
        <h3 className="font-semibold text-lg mt-6 mb-2 text-[var(--accent-improve-from)]">
          Technologies
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>HTML5 and Bootstrap 5.3.7 for responsive layout and grid system.</li>
          <li>
            <code>emailjs</code> integration to handle automated email delivery
            upon form submission.
          </li>
          <li>Font Awesome & Bootstrap Icons for accessible visual cues.</li>
          <li>
            Custom CSS (<code>contacto.css</code>) for button styles, colors,
            and layout consistency.
          </li>
        </ul>

        {/* Diseño */}
        <h3 className="font-semibold text-lg mt-6 mb-2 text-[var(--accent-improve-from)]">
          Design Highlights
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>Clean and minimal form layout for easy interaction.</li>
          <li>
            Consistent brand palette and rounded containers that match the
            AprendeShop identity.
          </li>
          <li>
            Google Maps integration adds a real-world connection and credibility.
          </li>
          <li>
            Smooth feedback and validation flow enhance the user experience.
          </li>
        </ul>

        {/* Cierre */}
        <div className="mt-8 text-center">
          <p className="text-sm italic opacity-70">
            “Contact” bridges the gap between users and the AprendeShop team,
            ensuring open communication through design and functionality.
          </p>
        </div>
      </div>
    </div>
  );
}
