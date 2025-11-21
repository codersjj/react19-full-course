import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "success" | "error" | "outline" | "ghost";
};

const Button = ({
  children,
  variant = "success",
  className,
  ...props
}: ButtonProps) => {
  const base = "rounded-md px-4 py-3 text-base font-normal";
  const variants = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    outline: "border border-gray-300 text-gray-800",
    ghost: "bg-transparent text-black",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
