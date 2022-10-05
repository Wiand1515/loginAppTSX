import React from "react";
import classNames from "classnames";

interface Props extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label: string
}

export const Button = ({ label, onClick, className, disabled }: Props) => {
  const buttonClasses = classNames(
    "w-full p-3 px-6 text-sm cursor-pointer outline-none rounded-xl border-2",
    className,
    { "bg-gray-300 cursor-not-allowed": disabled }
  );

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={(disabled ||= false)}
      type="button"
    >
      {label}
    </button>
  );
};
