import React, { useState } from "react";

export default function InputForm({
  str,
  name,
  text,
  onChange,
  value,
  errors,
}) {
  return (
    <div className="m-2 w-full">
      <input
        type={str}
        name={name}
        placeholder={text}
        onChange={onChange}
        className=" w-full px-7 py-3 border-2 border-gray rounded-md"
      />
    </div>
  );
}
