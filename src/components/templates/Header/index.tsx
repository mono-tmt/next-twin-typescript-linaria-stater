import { css } from "linaria";
import tw from "twin.macro";

import Logo from "../../atoms/Logo";
import HumburgerButton from "../../atoms/HumburgerButton";
const Header = () => {
  return (
    <nav
      className={css`
        ${tw`px-6 py-4 shadow`}
        background-color: #0045E4;
      `}
    >
      <div className="container flex flex-col mx-auto md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <Logo />
          <HumburgerButton />
        </div>
        <ul className="flex-col hidden md:flex md:flex-row md:-mx-4">
          <a
            href="#"
            className="my-1 text-white hover:text-blue-500 md:mx-4 md:my-0"
          >
            選ばれる理由
          </a>
          <a
            href="#"
            className="my-1 text-white hover:text-blue-500 md:mx-4 md:my-0"
          >
            学部・大学院
          </a>
          <a
            href="#"
            className="my-1 text-white hover:text-blue-500 md:mx-4 md:my-0"
          >
            授業番組表
          </a>
        </ul>
      </div>
    </nav>
  );
};
export default Header;
