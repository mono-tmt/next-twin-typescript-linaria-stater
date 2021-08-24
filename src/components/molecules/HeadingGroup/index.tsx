import { Heading, Select } from "../../atoms";
const HeadingGroup = () => {
  return (
    <div className="flex items-center justify-between">
      <Heading size="large" title="新規開設科目のインターネット配信について" />
      <Select />
    </div>
  );
};

export default HeadingGroup;
