const HeaderMenu = () => {
  return (
    <ul className="flex-col hidden md:flex md:flex-row md:-mx-4">
      <li>
        <a
          href="#"
          className="my-1 text-white hover:text-blue-500 md:mx-4 md:my-0"
        >
          選ばれる理由
        </a>
      </li>
      <li>
        <a
          href="#"
          className="my-1 text-white hover:text-blue-500 md:mx-4 md:my-0"
        >
          学部・大学院
        </a>
      </li>
      <li>
        <a
          href="#"
          className="my-1 text-white hover:text-blue-500 md:mx-4 md:my-0"
        >
          授業番組表
        </a>
      </li>
    </ul>
  );
};
export default HeaderMenu;
