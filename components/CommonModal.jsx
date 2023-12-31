import React, { useRef, useEffect } from "react";
import { outSideClick } from "../shared/outSideClick";

const CommonModal = ({ showModal, setShowModal, title, buttonName,onClick, children }) => {
  const modalRef = useRef(null);


  useEffect(() => {
    outSideClick(modalRef, setShowModal)
  }, [modalRef]);

  return (
    <div className="text-mainDarkText" >
      {showModal && (
        <div  className="fixed inset-0 z-50 max-w-[90%]  m-auto flex items-center justify-center overflow-x-hidden overflow-y-auto ">
          <div className="relative w-full max-w-3xl mx-auto">
            <div className=" bg-[#684020] rounded-lg shadow-lg overflow-hidden bg-opacity-95" ref={modalRef}>
              <div className="flex items-center justify-between p-5 border-b border-solid rounded-t">
                <h3 className="text-3xl font-semibold text-white">{title}</h3>
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-transparent text-white px-1 text-4xl block outline-none focus:outline-none"
                >
                  ×
                </button>
              </div>
              <div className="mx-5 overflow-y-auto max-h-[45vh]">
                {children}
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                <button
                  className="bg-mainDarkText text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={onClick}
                >
                  {buttonName}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CommonModal;
