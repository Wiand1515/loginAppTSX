import classNames from "classnames";
import { InputHTMLAttributes } from 'react'
import "./TextInputComponent.css";


interface Props extends InputHTMLAttributes<HTMLInputElement> {
  label?: string,
  type?: string,
  name?: string,
  innerRef?: string,
  containerClass?: string,
  errors?: string | boolean,
  value?: string,
}

export const TextInputComponent = ({
  label,
  type,
  name,
  innerRef,
  onChange,
  containerClass,
  errors,
  value,
}: Props) => {
  const containerClasses = classNames(
    "w-full flex flex-col min-h-14 h-14 justify-center bg-gray-100 rounded-md relative pf-input--container border-2 mb-1",
    containerClass || "",
    { "border border-red-200": errors }
  );

  const inputClasses = classNames(
    "form__input",
    "w-full text-sm bg-transparent outline-none mt-1"
  );

  return (
    <div className={containerClasses}>
      <input
        className={inputClasses}
        type={type || "text"}
        onChange={onChange}
        autoComplete="off"
        ref={innerRef}
        name={name}
        placeholder=""
        value={value}
      />
      <label htmlFor={name} className="form__label text-gray-500">
        {label}
      </label>
    </div>
  );
};
