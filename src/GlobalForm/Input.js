import React from "react";
import { Controller } from "react-hook-form";

const Input = ({
  control,
  name,
  errorDisabled,
  errors,
  className,
  placeholder,
  errorMessage,
  validateEmail = false,
}) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        defaultValue=""
        rules={{
          required: errorDisabled === true ? errorMessage : false,
          ...(validateEmail && {
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          }),
        }}
        render={({ field: { onChange, value } }) => (
          <>
            <input
              type="text"
              value={value}
              onChange={onChange}
              className={className}
              placeholder={placeholder}
            />
            <p className="error">{errors[name]?.message}</p>
          </>
        )}
      />
    </>
  );
};

export default Input;
