import React from "react";

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-green-50 rounded-xl shadow-lg w-full max-w-md p-6 relative animate-fadeIn">
        {/* Close button */}
        <button
          className="absolute top-2 right-3 text-gray-400 hover:text-green-600 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>

        {/* Title */}
        <h2 className="text-lg font-bold text-green-700 mb-4">{title}</h2>

        {/* Content */}
        {children}
      </div>
    </div>
  );
}
