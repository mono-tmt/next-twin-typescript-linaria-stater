interface Props {
  size?: "small" | "medium" | "large";
  title: string;
}
const Heading: React.FC<Props> = ({ size = "medium", title }) => {
  const baseHeading = "font-bold text-gray-700";
  const sizeMode =
    size === "small"
      ? "py-2 px-4 text-xs"
      : size === "medium"
      ? "text-xl"
      : size === "large"
      ? "text-xl md:text-2xl"
      : "";
  return <h1 className={`${baseHeading} ${sizeMode}`}>{title}</h1>;
};
export default Heading;
