import React from "react";
import { css } from "linaria";
import tw from "twin.macro";

import Button from "../components/atoms/Button";

export default function Index() {
  return (
    <div className="App">
      <h1>Next.js + twin.macro + Linaria</h1>
      <div
        className={css`
          ${tw`mt-[50px] md:bg-gray-500 sm:bg-pink-500 border border-solid border-purple-900 p-6 font-bold`}
        `}
      >
        I am styled with twin.macro + Linaria
        <Button label="Button" />
      </div>
    </div>
  );
}
