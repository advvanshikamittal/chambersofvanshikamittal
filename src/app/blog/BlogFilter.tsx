"use client";

import { useState } from "react";
import Link from "next/link";

type Post = {
  slug: string;
  title: string;
  caseYear: number;
  summary: string;
  date: string;
};

export default function BlogFilter({ posts }: { posts: Post[] }) {
  const [yearInput, setYearInput] = useState("");

  const filtered = yearInput.trim() === ""
    ? posts
    : posts.filter((p) => String(p.caseYear) === yearInput.trim());

  return (
    <>
      <div className="blog-filter">
        <input
          className="input"
          type="number"
          placeholder="Filter by order year e.g. 2024"
          value={yearInput}
          onChange={(e) => setYearInput(e.target.value)}
          style={{ maxWidth: 220 }}
        />
      </div>

      <div className="blog-list">
        {filtered.length === 0 ? (
          <p style={{ color: "var(--muted)", padding: "16px 0" }}>No posts found for {yearInput}.</p>
        ) : (
          filtered.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="blog-post-card">
              <div className="blog-post-meta">{post.date}</div>
              <h2 className="blog-post-title">{post.title}</h2>
              <p className="blog-post-summary">{post.summary}</p>
            </Link>
          ))
        )}
      </div>
    </>
  );
}

