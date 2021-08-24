// import { css } from "linaria";
import React from "react";
// import tw from "twin.macro";

interface Props {
  icon?: boolean;
  size?: "small" | "medium" | "large";
  label?: string;
  onClick?: () => void;
}
const Button: React.FC<Props> = ({ icon = false, size = "large", label }) => {
  const baseButton = "border-2 border-gray-900 rounded-full";
  const sizeMode =
    size === "small"
      ? "py-2 px-4 text-xs"
      : size === "medium"
      ? "py-2 px-5 text-sm"
      : size === "large"
      ? "py-3 px-6 text-base"
      : "";
  return (
    <button
      className={`transition ease-in duration-200 uppercase hover:bg-gray-800 hover:text-white focus:outline-none  ${baseButton} ${sizeMode}`}
    >
      {icon && <i></i>}
      {label}
    </button>
  );
};

export default Button;
