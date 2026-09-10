"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, Clock, Tag } from "lucide-react";
import { blogPosts, blogCategories } from "@/lib/blog-data";
import { blogIllustrations } from "@/components/blog/BlogIllustrations";

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? blogPosts
    : blogPosts.filter((p) => p.category === activeCategory);

  const [featured, ...rest] = filtered;

  return (
    <main className="bg-background" style={{ backgroundImage: "linear-gradient(to bottom, #070C10 340px, transparent 340px)", backgroundRepeat: "no-repeat" }}>

      {/* ── HERO */}
      <section className="w-full bg-[#070C10] pt-[calc(68px+4rem)] pb-20 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-[#E01F59]/5 blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0 relative">
          <p className="text-sm font-bold tracking-widest uppercase text-[#E01F59] mb-4">Insights</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-5">
            Ideas, Thinking &<br />
            <span className="text-[#E01F59]">Plain Advice.</span>
          </h1>
          <p className="text-base text-white/55 leading-relaxed max-w-xl">
            Strategy, design, development, and digital marketing — written for founders and teams who want to build better.
          </p>
        </div>
      </section>

      {/* ── CATEGORY FILTER */}
      <section className="w-full bg-background border-b border-black/5 sticky top-[68px] z-30">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0">
          <div className="flex items-center gap-2 py-4 overflow-x-auto no-scrollbar">
            {blogCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`shrink-0 px-4 py-1.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? "bg-[#E01F59] text-white"
                    : "bg-transparent text-foreground/60 hover:text-foreground border border-black/10 hover:border-black/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── POSTS */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0">

          {filtered.length === 0 ? (
            <p className="text-center text-foreground/50 py-20">No posts in this category yet.</p>
          ) : (
            <>
              {/* Featured post */}
              {featured && (() => {
                const FeaturedIllustration = blogIllustrations[featured.slug];
                return (
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="group grid lg:grid-cols-2 gap-10 mb-16 pb-16 border-b border-black/8"
                  >
                    {/* Cover */}
                    <div
                      className="relative w-full h-72 lg:h-full min-h-[280px] rounded-2xl overflow-hidden"
                      style={{ background: featured.coverGradient }}
                    >
                      {FeaturedIllustration && (
                        <div className="absolute inset-0">
                          <FeaturedIllustration />
                        </div>
                      )}
                      <div className="absolute top-5 left-5">
                        <span className="px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-sm">
                          {featured.category}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex flex-col justify-center gap-5">
                      <span className="text-xs font-bold tracking-widest uppercase text-[#E01F59]">Featured</span>
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground leading-tight group-hover:text-[#E01F59] transition-colors duration-200">
                        {featured.title}
                      </h2>
                      <p className="text-base text-foreground/60 leading-relaxed">{featured.excerpt}</p>
                      <div className="flex items-center gap-4 text-sm text-foreground/40">
                        <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featured.readTime}</span>
                        <span>·</span>
                        <span>{featured.publishedAt}</span>
                      </div>
                      <div className="inline-flex items-center gap-2 text-[#E01F59] font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                        Read Article <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                );
              })()}

              {/* Grid */}
              {rest.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {rest.map((post) => {
                    const Illustration = blogIllustrations[post.slug];
                    return (
                      <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="group flex flex-col gap-5"
                      >
                        {/* Cover */}
                        <div
                          className="relative w-full h-48 rounded-2xl overflow-hidden"
                          style={{ background: post.coverGradient }}
                        >
                          {Illustration && (
                            <div className="absolute inset-0">
                              <Illustration />
                            </div>
                          )}
                          <div className="absolute top-4 left-4">
                            <span className="px-2.5 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-sm flex items-center gap-1">
                              <Tag className="w-3 h-3" />{post.category}
                            </span>
                          </div>
                        </div>

                        {/* Text */}
                        <div className="flex flex-col gap-3 flex-1">
                          <h3 className="text-base font-bold text-foreground leading-snug group-hover:text-[#E01F59] transition-colors duration-200">
                            {post.title}
                          </h3>
                          <p className="text-sm text-foreground/55 leading-relaxed flex-1">{post.excerpt}</p>
                          <div className="flex items-center justify-between text-xs text-foreground/40 pt-2 border-t border-black/5">
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{post.readTime}</span>
                            <span>{post.publishedAt}</span>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              )}
            </>
          )}

        </div>
      </section>

    </main>
  );
}
