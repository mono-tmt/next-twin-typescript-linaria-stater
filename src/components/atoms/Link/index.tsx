interface Props {
  size?: "small" | "medium" | "large";
  label: string;
}
const Link: React.FC<Props> = ({ label, size }) => {
  const baseLink = "hover:underline";

  const sizeMode =
    size === "small"
      ? "text-blue-500"
      : size === "large"
      ? "text-2xl font-bold text-gray-700"
      : "";
  return (
    <a href="#" className={`${sizeMode} ${baseLink}`}>
      {label}
    </a>
  );
};
export default Link;
