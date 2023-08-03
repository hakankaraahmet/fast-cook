import React from "react";

const CommonModal = ({ showModal, setShowModal, title, buttonName }) => {
  return (
    <div className="text-mainButtonText">
      {showModal && (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-center border-2 justify-between p-5 border-b border-solid  rounded-t">
                  <h3 className="text-3xl font-semibold">
                   {title}
                  </h3>

                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-transparent ml-16 text-mainButtonText  px-1 text-4xl block outline-none focus:outline-none"
                  >
                    ×
                  </button>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className="bg-mainButtonText text-white  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    {buttonName}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
    </div>
  );
};

export default CommonModal;
