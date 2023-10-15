import React from "react";

type Props = {};

const SuccessModal = (props: Props) => {
  return (
    <div className="modal-overlay">
      <div className="flex justify-center items-center bg-header-color/90 w-1/4 h-1/4 rounded-md">
        <h1 className="text-white text-center justify-center font-thin text-2xl ">Successful Registration</h1>
      </div>
    </div>
  );
};

export default SuccessModal;
