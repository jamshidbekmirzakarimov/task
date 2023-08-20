import React from "react";

const Input = ({ className, type, name, value, onChange, placeholder }) => {
  return (
    <>
      <input
        className={`border rounded-md px-3 py-2 ${className}`}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
