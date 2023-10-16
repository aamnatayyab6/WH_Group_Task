import React from "react";

type Props = {};

const SuccessModal = (props: Props) => {
  return (
    <div className="modal-overlay">
      <div className="flex justify-center items-center bg-header-color/90 md:w-1/4 md:h-1/4 w-2/3 h-1/4 rounded-md">
        <h1 className="text-white text-center justify-center font-thin text-2xl ">Successful Registration</h1>
      </div>
    </div>
  );
};

export default SuccessModal;
