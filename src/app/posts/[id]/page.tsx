/* eslint-disable @typescript-eslint/no-explicit-any */
import metadata from "../framework/metadata";
import { notFound } from "next/navigation";
import { getPostContent } from "../framework/getPostContent";
import ReactMarkdown, { Components } from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import rehypeRaw from "rehype-raw";
import "./style.css";
import Image from "next/image";

const renderers: Components = {
  code(props) {
    const {children, className, ...rest} = props
    const match = /language-(\w+)/.exec(className || "");
    return match ? (
      <SyntaxHighlighter
        {...(rest as any)}
        style={oneDark}
        language={match[1]}
        PreTag="div"
      >
        {String(children).replace(/\n$/, "")}
      </SyntaxHighlighter>
    ) : (
      <code {...props} className={className}>
        {children}
      </code>
    );
  },
  img({ src, alt, title, ...props }) {
    return (
      <Image
        {...props}
        src={src!}
        alt={alt ?? ''}
        title={title}
        width={800}
        height={600}
        className="rounded-lg"
      />
    );
  },
};

interface PostPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return metadata.map((post) => ({ id: post.id }));
}

const Post = async ({ params }: PostPageProps) => {
  const { id } = await params;

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
      <ReactMarkdown
        remarkPlugins={[remarkMath]} // enables math rendering
        rehypePlugins={[rehypeKatex, rehypeRaw]} // enables Katex for LaTeX rendering
        components={renderers} // custom renderer for code blocks
      >
        {content}
      </ReactMarkdown>
    </article>
  );
};

export default Post;
