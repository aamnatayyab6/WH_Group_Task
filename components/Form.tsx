import Link from "next/link";
import React, { useState } from "react";
import Dropdown from "./Dropdown";
import SuccessModal from "./SuccessModal";

type Props = {};

const Form = (props: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    selectedOption: "",
    agree: false,
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;

    setFormData({
      ...formData,
      [name]:
        type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // validation
    const errors: Record<string, string> = {};

    if (!formData.name) {
      errors.name = "Name is required!";
    }
    if (!formData.email) {
      errors.email = "Email is required!";
    }
    if (!formData.confirmEmail) {
      errors.confirmEmail = "Confirm Email is required!";
    }
    if (!formData.selectedOption) {
      errors.selectedOption = "You must select an option from the dropdown!";
    }
    if (!formData.agree) {
      errors.agree = "You must agree to the privacy policy!";
    }
    if (formData.email !== formData.confirmEmail) {
      errors.agree = "Emails do not match!";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      setFormSubmitted(true);
    }
  };

  return (
    <div className="h-screen relative flex max-w-7xl justify-evenly mx-auto items-center">
      <h3 className="absolute top-10 uppercase tracking-[15px] text-md md:text-2xl text-center text-header-color">
        Registration Form
      </h3>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col mt-24 md:mt-0 mx-auto space-y-2 "
      >
        {/* Name */}
        <input
          name="name"
          placeholder="Name"
          className="contactInput w-80 md:w-auto"
          style={
            formErrors.name
              ? {
                  border: "1px",
                  borderStyle: "solid",
                  borderColor: "#b63636",
                }
              : {}
          }
          type="text"
          value={formData.name}
          onChange={handleInputChange}
        />
        {formErrors.name && (
          <span className="errors-text">{formErrors.name}</span>
        )}

        {/* Email */}
        <input
          name="email"
          placeholder="Email"
          style={
            formErrors.email
              ? {
                  border: "1px",
                  borderStyle: "solid",
                  borderColor: "#b63636",
                }
              : {}
          }
          className="contactInput w-80 md:w-auto"
          type="text" //type could have been email, following task description instead
          value={formData.email}
          onChange={handleInputChange}
        />
        {formErrors.email && (
          <span className="errors-text">{formErrors.email}</span>
        )}

        {/* Confirm Email */}
        <input
          name="confirmEmail"
          placeholder="Confirm Email"
          style={
            formErrors.confirmEmail
              ? {
                  border: "1px",
                  borderStyle: "solid",
                  borderColor: "#b63636",
                }
              : {}
          }
          className="contactInput w-80 md:w-auto"
          type="text"
          value={formData.confirmEmail}
          onChange={handleInputChange}
        />
        {formErrors.confirmEmail && (
          <span className="errors-text">{formErrors.confirmEmail}</span>
        )}

        {/* Dropdown */}
        <Dropdown
          selectedOption={formData.selectedOption}
          handleSelect={(option: string) =>
            setFormData({ ...formData, selectedOption: option })
          }
          isError={formErrors.selectedOption === "You must select an option from the dropdown!"}
        />
        {formErrors.selectedOption && (
          <span className="errors-text">{formErrors.selectedOption}</span>
        )}

        {/* Checkbox */}
        <div className="w-80 md:w-auto">
          <input
            name="agree"
            checked={formData.agree}
            onChange={handleInputChange}
            type="checkbox"
            className="required:border-red-600 checked:bg-header-color"
          />
          <label className="text-header-color text-base md:ml-2 break-normal hyphens-auto">
            * Agree with the data handling in accordance with our{" "}
            <Link
              rel="noopener noreferrer"
              target="_blank"
              href={"https://whitehair.hu/adatkezeles"}
            >
              <span className="decoration-header-color/30 underline text-header-color/60">
                policy
              </span>
              .
            </Link>
          </label>
        </div>
        {formErrors.agree && (
          <span className="errors-text">{formErrors.agree}</span>
        )}

        {/* submit */}
        <button
          type="submit"
          className="bg-header-color/60 py-5 px-10 rounded-md
           text-gray-300 text-lg w-80 md:w-auto uppercase tracking-[5px]"
        >
          Register
        </button>
      </form>

      {formSubmitted && <SuccessModal />}
    </div>
  );
};

export default Form;
