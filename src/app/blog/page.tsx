import Image from "next/image"
import type { Metadata } from "next"
import hammer from "./../../../pictures/hammer.png"
import posts from "../../content/blog-posts.json";
import BlogFilter from "./BlogFilter";

export const metadata: Metadata = {
  title: "Legal Resources & Case Studies | Chambers of Vanshika Mittal",
  description: "Case studies and articles on Supreme Court and High Court judgments, curated by Chambers of Vanshika Mittal across constitutional, civil, and criminal law.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Legal Resources & Case Studies | Chambers of Vanshika Mittal",
    description: "Case studies and articles from the team at Chambers of Vanshika Mittal.",
    url: "/blog",
  },
};

export default function BlogPage() {
  return (
    <>
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
            <p className="lead" style={{textAlign: "center"}}>Case Studies &amp; Articles from the team</p>
          </div>
        </div>

      <BlogFilter posts={posts} />
    </>
  );
}
