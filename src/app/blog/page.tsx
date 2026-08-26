import Image from "next/image"
import hammer from "./../../../pictures/hammer.png"
import Link from "next/link";
import posts from "../../content/blog-posts.json";

export default function BlogPage() {
  return (
    <>
      {/* <div className="blog-hero">
        <h1 className="h1">Legal Resources</h1>
        <p className="lead">Case Studies &amp; Articles from the team</p>
      </div> */}

      <div className="hero-media">
          <Image
            className="picture"
            src={hammer}
            alt="Hammer Image"
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className="hero-overlay">
            <h1 className="h1" style={{margin: "16px 16px 32px 16px", textAlign: "center"}}>Legal Resources</h1>
            <p className="lead">Case Studies &amp; Articles from the team</p>
          </div>
        </div>

      <div className="blog-list">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-post-card">
            <div className="blog-post-meta">{post.date}</div>
            <h2 className="blog-post-title">{post.title}</h2>
            <p className="blog-post-summary">{post.summary}</p>
          </Link>
        ))}
      </div>
    </>
  );
}
