import { css } from "linaria";
import tw from "twin.macro";
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
          <div>
            <a href="#" className="text-xl font-bold text-white md:text-2xl">
              放送大学
            </a>
          </div>
          <div>
            <button
              type="button"
              className="block text-gray-800 hover:text-gray-100 focus:text-gray-600 focus:outline-none md:hidden"
            >
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-current">
                <path d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
          </div>
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
