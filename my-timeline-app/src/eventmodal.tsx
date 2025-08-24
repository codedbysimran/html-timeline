import React, { useEffect, useRef } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, description }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (isOpen) {
      // trap focus inside modal
      const focusableEls = modalRef.current?.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      const firstEl = focusableEls?.[0];
      const lastEl = focusableEls?.[focusableEls.length - 1];

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
        if (e.key === "Tab" && focusableEls && firstEl && lastEl) {
          if (e.shiftKey) {
            if (document.activeElement === firstEl) {
              e.preventDefault();
              lastEl.focus();
            }
          } else {
            if (document.activeElement === lastEl) {
              e.preventDefault();
              firstEl.focus();
            }
          }
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      closeButtonRef.current?.focus();

      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      aria-describedby="modal-description"
      className="fixed inset-0 bg-black/50 flex items-center justify-center"
      ref={modalRef}
    >
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-lg w-full">
        <h2 id="modal-title" className="text-xl font-bold">
          {title}
        </h2>
        <p id="modal-description" className="mt-2 text-gray-700">
          {description}
        </p>
        <button
          ref={closeButtonRef}
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;