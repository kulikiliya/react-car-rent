import React, { useEffect } from "react";
import { useMyContext } from "./context/usMyContexst";
import IconClose from "../img/svg/closeButton";
import { useDispatch } from "react-redux";
import { clearModal } from "../redux/slice";

export const Modal = ({ children }) => {
  const { close } = useMyContext();
  const dispatch = useDispatch();
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        close();
        dispatch(clearModal());
      }
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [close, dispatch]);
  const handleClick = (e) => {
    if (e.currentTarget === e.target) {
      close();
      dispatch(clearModal());
    }
  };
  const handleClickClose = (e) => {
    close();
    dispatch(clearModal());
  };
  return (
    <div
      className="fixed top-0 left-0 flex items-center justify-center w-screen h-screen bg-slate-950/50 z-10"
      onClick={handleClick}
    >
      <div className="fixed bg-black-rgba w-[700px] h-fit p-[40px] z-50 bg-[white]">
        <button
          onClick={handleClickClose}
          className="absolute top-[16px] right-[16px]"
        >
          <IconClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
