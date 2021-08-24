import HeadingGroup from "../../molecules/HeadingGroup";
import { Heading } from "../../atoms";
import { AuthorList, Post, Pagination, List } from "../../organisms";
const Main = () => {
  return (
    <div className="px-6 py-8">
      <div className="container flex justify-between mx-auto">
        <div className="hidden w-4/12 -mx-8 lg:block">
          <div className="px-8">
            <Heading title="投稿者" />
            <div className="mb-4" />
            <AuthorList />
            <div className="mb-6" />
            <Heading title="使用する技術" />
            <div className="mb-4" />
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
