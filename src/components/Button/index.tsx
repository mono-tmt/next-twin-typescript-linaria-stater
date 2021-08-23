import { css } from "linaria";
import React from "react";
// import tw from "twin.macro";

interface Props {
  isPrimary?: boolean;
  isSecondary?: boolean;
  isSmall?: boolean;
}

const Button: React.FC<Props> = () => {
  return (
    <button className={css`px-8 py-2 text-lg focus:outline`}>Button</button>
  );
};

export default Button;
