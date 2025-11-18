import React from "react";
import { X } from "lucide-react";

export default function ASPerfilModal({ onClose }) {
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
          User Profile 
        </h2>

        {/* Descripción breve */}
        <p className="text-sm opacity-80 text-justify mb-6">
          The <strong>Profile</strong> section allows users to manage their
          personal information, wishlist, and account settings in an intuitive
          interface. It integrates Bootstrap modals for smooth editing and
          leverages responsive design for a clean user experience across devices.
        </p>

        {/* Estructura */}
        <h3 className="font-semibold text-lg mb-2 text-[var(--accent-improve-from)]">
          Structure
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>
            <strong>Profile Card:</strong> Displays user avatar, name,
            description, and email, with icons to trigger edit modals.
          </li>
          <li>
            <strong>Edit Modals:</strong> Includes pop-ups to modify name,
            description, email, password, and avatar selection, built using
            Bootstrap modal components.
          </li>
          <li>
            <strong>Wishlist Section:</strong> Dynamic grid to show saved courses
            the user intends to purchase, styled with Bootstrap cards.
          </li>
          <li>
            <strong>Add Product:</strong> A button at the bottom of the page lets
            users publish new courses with future functionality integration.
          </li>
        </ul>

        {/* Tecnologías */}
        <h3 className="font-semibold text-lg mt-6 mb-2 text-[var(--accent-improve-from)]">
          Technologies
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>HTML5 and Bootstrap 5.3.7 for layout, grid, and modals.</li>
          <li>Font Awesome and Bootstrap Icons for intuitive edit actions.</li>
          <li>
            JavaScript modules (<code>perfil.js</code>, <code>main.js</code>)
            manage form logic, modals, and interactivity.
          </li>
          <li>
            SweetAlert2 for user-friendly confirmation alerts and feedback.
          </li>
        </ul>

        {/* Diseño */}
        <h3 className="font-semibold text-lg mt-6 mb-2 text-[var(--accent-improve-from)]">
          Design Highlights
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>
            Rounded avatar images and soft shadows reinforce a welcoming visual
            identity.
          </li>
          <li>
            Multiple modals for quick, accessible profile editing without leaving
            the page.
          </li>
          <li>
            Consistent visual hierarchy across titles, labels, and buttons for
            clarity.
          </li>
          <li>
            Responsive layout ensures seamless usability on desktop and mobile.
          </li>
        </ul>

        {/* Cierre */}
        <div className="mt-8 text-center">
          <p className="text-sm italic opacity-70">
            “Perfil” centralizes user control — from personal data to wishlist
            management — creating a connected and personalized experience.
          </p>
        </div>
      </div>
    </div>
  );
}
