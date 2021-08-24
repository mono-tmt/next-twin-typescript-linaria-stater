import { Button, Link, Paragraph } from "../../atoms";
const Post = () => {
  return (
    <div className="max-w-4xl px-10 py-6 mx-auto bg-white rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <span className="font-light text-gray-600">8月1日, 2020</span>
        <Button label="タグ" size="small" />
      </div>
      <div className="mt-2">
        <a
          href="#"
          className="text-2xl font-bold text-gray-700 hover:underline"
        >
          Build Your New Idea with Next.js.
        </a>
        <div className="mt-2" />
        <Paragraph
          text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos
          enim reprehenderit nisi, accusamus delectus nihil quis facere in modi
          ratione libero!"
        />
      </div>
      <div className="flex items-center justify-between mt-4">
        <Link size="small" label="詳しく見る" />
        <div>
          <a href="#" className="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
              alt="avatar"
              className="hidden object-cover w-10 h-10 mx-4 rounded-full sm:block"
            />
            <h1 className="font-bold text-gray-700 hover:underline">
              Kenji Tomita
            </h1>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Post;
