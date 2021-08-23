const Pagination = () => {
  return (
    <div className="flex">
      <a
        href="#"
        className="px-3 py-2 mx-1 font-medium text-gray-500 bg-white rounded-md cursor-not-allowed"
      >
        前へ戻る
      </a>

      <a
        href="#"
        className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
      >
        1
      </a>

      <a
        href="#"
        className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
      >
        2
      </a>

      <a
        href="#"
        className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
      >
        3
      </a>

      <a
        href="#"
        className="px-3 py-2 mx-1 font-medium text-gray-700 bg-white rounded-md hover:bg-blue-500 hover:text-white"
      >
        次に進む
      </a>
    </div>
  );
};
export default Pagination;
