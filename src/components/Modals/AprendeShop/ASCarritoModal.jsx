import React from "react";
import { X } from "lucide-react";

export default function ASCarritoModal({ onClose }) {
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
          Cart 
        </h2>

        {/* Descripción breve */}
        <p className="text-sm opacity-80 text-justify mb-6">
          The <strong>Cart</strong> page of AprendeShop is where users review,
          manage, and finalize their selected courses. It integrates a dynamic
          purchase flow — balancing simplicity, accessibility, and a clear
          summary of selected items before checkout.
        </p>

        {/* Estructura */}
        <h3 className="font-semibold text-lg mb-2 text-[var(--accent-improve-from)]">
          Structure
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>
            <strong>Cart Header:</strong> Displays the title and a summary
            counter of total selected courses or kits.
          </li>
          <li>
            <strong>Product List:</strong> Dynamically rendered cards containing
            course name, thumbnail, price, and quantity controls.
          </li>
          <li>
            <strong>Price Summary:</strong> Displays subtotal, tax (if applied),
            and final total with clean visual hierarchy.
          </li>
          <li>
            <strong>Action Buttons:</strong> Options to <em>Continue Shopping</em>,
            <em>Clear Cart</em>, or <em>Proceed to Payment</em>.
          </li>
          <li>
            <strong>Responsive Layout:</strong> Stacks cards vertically on
            mobile while maintaining a two-column grid on desktop.
          </li>
        </ul>

        {/* Tecnologías */}
        <h3 className="font-semibold text-lg mt-6 mb-2 text-[var(--accent-improve-from)]">
          Technologies
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>
            HTML5 and Bootstrap 5.3.7 for flexible grid-based cart layout.
          </li>
          <li>
            JavaScript logic (in <code>carrito.js</code>) manages add/remove
            actions, quantity updates, and total calculation.
          </li>
          <li>
            SweetAlert2 for confirmation dialogs on clearing the cart or
            completing the purchase.
          </li>
          <li>
            Font Awesome and Bootstrap Icons to enhance clarity in buttons and
            interactive elements.
          </li>
          <li>
            Custom CSS for button gradients, spacing, and cart responsiveness.
          </li>
        </ul>

        {/* Diseño */}
        <h3 className="font-semibold text-lg mt-6 mb-2 text-[var(--accent-improve-from)]">
          Design Highlights
        </h3>
        <ul className="list-disc list-inside space-y-2 text-sm opacity-80">
          <li>
            Focus on readability and simplicity — the user always knows what’s
            in their cart.
          </li>
          <li>
            Subtle animations for item removal and total updates improve user
            feedback.
          </li>
          <li>
            Rounded cards, soft shadows, and ample white space create a sense of
            calm and organization.
          </li>
          <li>
            Consistent brand accents (<code>--accent-improve-from</code>,
            <code>--accent-improve-to</code>) reinforce brand identity.
          </li>
          <li>
            Fully responsive for seamless experience on mobile and desktop
            checkout.
          </li>
        </ul>

        {/* Cierre */}
        <div className="mt-8 text-center">
          <p className="text-sm italic opacity-70">
            “Carrito” completes the learning journey — turning curiosity into
            action by making enrollment clear, simple, and satisfying.
          </p>
        </div>
      </div>
    </div>
  );
}
