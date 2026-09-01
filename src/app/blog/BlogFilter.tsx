"use client";

import { useState, useMemo } from "react";
import areas from "../../content/practice-areas.json";

type Post = {
  title: string;
  caseYear?: number;
  summary: string;
  practiceArea?: string[];
  fileName?: string;
};

export default function BlogFilter({ posts }: { posts: Post[] }) {
  const [year, setYear] = useState("");
  const [area, setArea] = useState("");

  const years = useMemo(() => {
    const set = new Set(posts.map((p) => p.caseYear).filter(Boolean) as number[]);
    return Array.from(set).sort((a, b) => b - a);
  }, [posts]);

  const filtered = posts.filter((p) => {
    const yearMatch = year === "" || String(p.caseYear) === year;
    const areaMatch = area === "" || (p.practiceArea ?? []).includes(area);
    return yearMatch && areaMatch;
  });

  return (
    <>
      <div className="blog-filter">
        <select
          className="select"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          style={{ maxWidth: 200 }}
        >
          <option value="">All Years</option>
          {years.map((y) => (
            <option key={y} value={String(y)}>{y}</option>
          ))}
        </select>

        <select
          className="select"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          style={{ maxWidth: 280 }}
        >
          <option value="">All Practice Areas</option>
          {areas.map((a) => (
            <option key={a.title} value={a.title}>{a.title}</option>
          ))}
        </select>
      </div>

      <div className="blog-list">
        {filtered.length === 0 ? (
          <p style={{ color: "var(--muted)", padding: "16px 0" }}>No posts match the selected filters.</p>
        ) : (
          filtered.map((post) => {
            const pdfUrl = `/pdfs/${post.fileName}`
            return (
              <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="blog-post-card">
                <div className="blog-post-meta">
                  {[post.caseYear, ...(post.practiceArea ?? [])].filter(Boolean).join(" · ")}
                </div>
                <h2 className="blog-post-title">{post.title}</h2>
                <p className="blog-post-summary">{post.summary}</p>
              </a>
            );
          })
        )}
      </div>
    </>
  );
}

