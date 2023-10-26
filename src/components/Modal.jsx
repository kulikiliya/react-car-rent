import React, { useEffect } from "react";
import { useMyContext } from "./context/usMyContexst";

export const Modal = ({ children }) => {
  const { close, isOpen } = useMyContext();
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        console.log(isOpen);
        close();
      }
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [close]);
  const handleClick = (e) => {
    if (e.currentTarget === e.target) {
      close();
    }
  };
  const handleClickClose = (e) => {
    console.log(isOpen);
    close();
  };
  return (
    <div
      className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-transparent opacity-100 z-10"
      onClick={handleClick}
    >
      <div className="fixed flex items-center justify-center z-50 bg-black-rgba w-[700px] h-[800px] opacity-100 ">
        <button onClick={handleClickClose}>Закрой меня</button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
