import metadata from "../framework/metadata";
import { notFound } from "next/navigation";
import { getPostContent } from "../framework/getPostContent";
import ReactMarkdown from "react-markdown";

interface PostPageProps {
    params: { id: string };  // Dynamic Route Parameter
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
    <article className="prose-lg">
        <h1>{post.title}</h1>
        <ReactMarkdown>{content}</ReactMarkdown>
    </article>
);

//   return (
//     <div className="prose lg:prose-xl">
//       <h1>{post.title}</h1>
//       <div dangerouslySetInnerHTML={{ __html: content }} />
//     </div>
//   );
};

export default Post;
