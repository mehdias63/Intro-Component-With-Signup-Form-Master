import React, { useState } from "react";
import InputForm from "./InputForm";

function FormComponent() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key] === "") {
        newErrors[key] = `${key} cannot be empty`;
      }
    });
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      // Handle successful form submission
      alert("Form submitted successfully!");
      setErrors({});
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white flex flex-col justify-center items-center text-black p-6 rounded-xl"
    >
      <InputForm
        str="text"
        name="firstName"
        onChange={handleChange}
        text="First Name"
      />
      {errors.firstName && (
        <p className="text-pink self-end">{errors.firstName}</p>
      )}
      {errors.firstName && (
        <img
          src="/images/icon-error.svg"
          className="absolute right-[5rem] top-[26.5rem] md:right-[8rem] md:top-[15rem]"
          alt="icon"
        />
      )}
      <InputForm
        str="text"
        name="lastName"
        onChange={handleChange}
        text="Last Name"
      />
      {errors.lastName && (
        <p className="text-pink self-end">{errors.lastName}</p>
      )}
      {errors.firstName && (
        <img
          src="/images/icon-error.svg"
          className="absolute right-[5rem] top-[32.25rem] md:right-[8rem] md:top-[20.75rem]"
          alt="icon"
        />
      )}
      <InputForm
        str="email"
        name="email"
        onChange={handleChange}
        text="Email"
      />
      {errors.email && <p className="text-pink self-end">{errors.email}</p>}
      {errors.firstName && (
        <img
          src="/images/icon-error.svg"
          className="absolute right-[5rem] top-[38rem] md:right-[8rem] md:top-[26.5rem]"
          alt="icon"
        />
      )}
      <InputForm
        str="password"
        name="password"
        onChange={handleChange}
        text="Password"
      />
      {errors.password && (
        <p className="text-pink self-end">{errors.password}</p>
      )}
      {errors.firstName && (
        <img
          src="/images/icon-error.svg"
          className="absolute right-[5rem] top-[43.75rem] md:right-[8rem] md:top-[32.25rem]"
          alt="icon"
        />
      )}
      <button
        type="submit"
        className="bg-green shadow-[0px -4px 0px 0px rgba(0, 0, 0, 0.09)] w-full p-4 text-[0.9375rem] text-white font-semibold leading-[1.625rem] tracking-[0.0625rem] rounded-md hover:bg-opacity-50 mt-4"
      >
        CLAIM YOUR FREE TRIAL
      </button>
      <p className="mt-2 text-gray">
        By clicking the button, you are agreeing to our
        <span className="text-pink"> Terms and Services</span>
      </p>
    </form>
  );
}

export default FormComponent;
