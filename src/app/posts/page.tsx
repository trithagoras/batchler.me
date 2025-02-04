import Link from "next/link";
import metadata from "./framework/metadata";
import PostModel from "./models/postModel";

const PostEntry = ({ model }: { model: PostModel }) => (
  <div className="p-4">
    <span>{model.date.toDateString()}</span>
    <Link href={`/posts/${model.id}`}>
      <h2 className="text-3xl text-blue-700 dark:text-blue-300 hover:underline">
        {model.title}
      </h2>
    </Link>
  </div>
);

const Posts = () => (
  <div>
    {metadata
      .sort((a, b) => (a.date <= b.date ? 1 : -1))
      .map((md) => (
        <PostEntry key={md.id} model={md} />
      ))}
  </div>
);

export default Posts;
