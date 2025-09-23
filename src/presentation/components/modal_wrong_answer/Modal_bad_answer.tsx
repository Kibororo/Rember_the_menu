import React from "react";
import ReactDOM from "react-dom";

export default function Modal_bad_answer({ isOpen, onClose, children }: { isOpen: boolean; onClose: () => void; children: React.ReactNode; }) {
  
    if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50"
      onClick={onClose} 
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={onClose}
        >
          Fermer
        </button>
      </div>
    </div>,
    document.body 
  );
}
