// src/components/Modal.js
import { useRef, useEffect } from "react";
import "./Modal.css"; // we’ll create this CSS file

export default function Modal({
  isOpen,
  onClose,
  children,
  showCloseButton = true,
  isFullscreen = false,
  className = "",
  size = "md", // "sm" | "md" | "lg"
}) {
  const modalRef = useRef(null);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlayy">
      {!isFullscreen && (
        <div className="modal-backdropp" onClick={onClose}></div>
      )}
      <div
        ref={modalRef}
        className={`modal-contentt ${isFullscreen ? "fullscreen" : ""} ${size} ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {showCloseButton && (
          <button onClick={onClose} className="modal-close-btnn">
            ✕
          </button>
        )}
        <div>{children}</div>
      </div>
    </div>
  );
}
