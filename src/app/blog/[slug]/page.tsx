import { notFound } from "next/navigation";
import posts from "../../../content/blog-posts.json";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  return { title: post?.title ?? "Blog" };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  const pdfUrl = `/blog-pdfs/${post.pdf}`;

  return (
    <div className="blog-post-page">
      <div className="blog-post-page-header">
        <p className="kicker">{post.date}</p>
        <h1 className="h1">{post.title}</h1>
        <p className="lead">{post.summary}</p>
      </div>
      <div className="pdf-viewer">
        <iframe
          src={pdfUrl}
          title={post.title}
          className="pdf-frame"
        />
      </div>
    </div>
  );
}
