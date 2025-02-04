import metadata from "../framework/metadata";
import { notFound } from "next/navigation";
import { getPostContent } from "../framework/getPostContent";
import ReactMarkdown from "react-markdown";

interface PostPageProps {
  params: { id: string };
}

export async function generateStaticParams() {
  return metadata.map((post) => ({ id: post.id }));
}

const Post = async ({ params }: PostPageProps) => {
  const id = params.id;

  const datas = metadata.filter((md) => md.id === id);
  if (datas.length !== 1) {
    notFound();
  }
  const post = datas[0];

  const content = await getPostContent(id);
  if (content === null) {
    notFound();
  }

  return (
    <article className="prose prose-lg dark:prose-invert">
      <h1>{post.title}</h1>
      <span className="italic text-gray-400">{post.date.toDateString()}</span>
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default Post;
