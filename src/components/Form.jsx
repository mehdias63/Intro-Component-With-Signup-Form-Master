import React, { useState } from "react";
import Input from "./Input";

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
      alert("Form submitted successfully!");
      setErrors({});
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white flex flex-col justify-center items-center text-black p-8 md:px-12 rounded-xl lg:max-w-[34.75rem]"
    >
      <Input
        str="text"
        name="firstName"
        onChange={handleChange}
        text="First Name"
        errors={errors.firstName}
      />
      <Input
        str="text"
        name="lastName"
        onChange={handleChange}
        text="Last Name"
        errors={errors.lastName}
      />
      <Input
        str="email"
        name="email"
        onChange={handleChange}
        text="Email"
        errors={errors.email}
      />
      <Input
        str="password"
        name="password"
        onChange={handleChange}
        text="Password"
        errors={errors.password}
      />
      <button
        type="submit"
        className="bg-green shadow-[0px -4px 0px 0px rgba(0, 0, 0, 0.09)] w-full p-4 text-[0.9375rem] text-white font-semibold leading-[1.625rem] tracking-[0.0625rem] rounded-md hover:bg-opacity-50 mt-2"
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
