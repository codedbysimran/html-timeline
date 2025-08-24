import React from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null; // modal tabhi dikhega jab open hoga

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()} // andar click se band na ho
      >
        <header className="modal-header">
          <h2>{title}</h2>
          <button
            className="close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✖
          </button>
        </header>
        <section className="modal-body">{children}</section>
      </div>
    </div>
  );
};

export default Modal;