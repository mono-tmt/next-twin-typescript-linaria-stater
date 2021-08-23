const Select = () => {
  return (
    <div>
      <select className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
        <option>最新10件</option>
        <option>先週</option>
      </select>
    </div>
  );
};
export default Select;
