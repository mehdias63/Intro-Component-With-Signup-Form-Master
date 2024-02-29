import React from "react";

export default function Input({
  str,
  name,
  text,
  onChange,
  errors,
}) {
  return (
    <div className="m-2 w-full relative">
      <input
        type={str}
        name={name}
        placeholder={text}
        onChange={onChange}
        className=" w-full px-7 py-3 border-2 border-gray rounded-md"
      />
      {errors && (
        <p className="text-pink text-end mt-2 italic text-[0.6875rem] font-medium md:my-2">
          {errors}
        </p>
      )}
      {errors && (
        <img
          src="/images/icon-error.svg"
          className="absolute right-[1.8rem] top-[.8rem]"
          alt="icon"
        />
      )}
    </div>
  );
}
