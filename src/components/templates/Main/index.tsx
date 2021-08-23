import HeadingGroup from "../../molecules/HeadingGroup";
import { Heading } from "../../atoms";
import { Post, Pagination, List } from "../../organisms";
const Main = () => {
  return (
    <div className="px-6 py-8">
      <div className="container flex justify-between mx-auto">
        <div className="hidden w-4/12 -mx-8 lg:block">
          <div className="px-8 mt-10">
            <Heading />
            <List />
          </div>
        </div>
        <div className="w-full lg:w-8/12">
          <HeadingGroup />
          <div className="mt-2">
            <Post />
          </div>
          <div className="mt-2">
            <Post />
          </div>
          <div className="mt-2">
            <Post />
          </div>
          <div className="mt-8">
            <Pagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
