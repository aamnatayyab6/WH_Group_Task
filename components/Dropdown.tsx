import React, { useState } from "react";

type Props = {
  selectedOption: string;
  handleSelect: (option: string) => void;
};

const Dropdown = ({ selectedOption, handleSelect }: Props) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const options: string[] = ["Internet", "Television", "Other Places"];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <>
      <div className="relative contactInput cursor-pointer w-80 md:w-auto">
        <div
          onClick={toggleDropdown}
          className="flex justify-between items-center"
        >
          <label
            className={`text-${
              selectedOption && options.includes(selectedOption)
                ? "black"
                : "gray-500"
            }`}
          >
            {selectedOption || "How did you hear about us?"}
          </label>

          {/* icon */}
          <div className="cursor-pointer">
            <svg
              className={`-mr-1 h-5 w-5 text-gray-400 transition-transform transform ${
                isDropdownOpen ? "rotate-180" : ""
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>

        {isDropdownOpen && (
          <div className="bg-[#c2c5c6] absolute w-full right-0 top-10 rounded-md mt-1 space-y-5 border border-gray-300 shadow-lg">
            {options.map((option: string, index: number) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    handleSelect(option);
                    setIsDropdownOpen(false);
                  }}
                  className="cursor-pointer hover:bg-header-color/30"
                >
                  {option}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
};

export default Dropdown;
