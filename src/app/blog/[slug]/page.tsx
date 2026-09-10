import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Clock, ArrowUpRight } from "lucide-react";
import { getBlogPostBySlug, getAllBlogSlugs, blogPosts } from "@/lib/blog-data";
import { blogIllustrations } from "@/components/blog/BlogIllustrations";

export async function generateStaticParams() {
  return getAllBlogSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Heaps Lab`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);
  const HeroIllustration = blogIllustrations[post.slug];

  return (
    <main className="bg-background" style={{ backgroundImage: post.coverGradient, backgroundSize: "100% 340px", backgroundRepeat: "no-repeat" }}>

      {/* ── HERO */}
      <section
        className="relative w-full pt-[calc(68px+4rem)] pb-20 overflow-hidden"
        style={{ background: post.coverGradient }}
      >
        {/* Illustration as background */}
        {HeroIllustration && (
          <div className="absolute inset-0 opacity-30">
            <HeroIllustration />
          </div>
        )}
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </Link>

          <div className="max-w-3xl">
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-sm mb-5">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-5">
              {post.title}
            </h1>
            <p className="text-base text-white/70 leading-relaxed mb-8">{post.excerpt}</p>
            <div className="flex items-center gap-5 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                  <span className="text-sm font-black text-white/70">HL</span>
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{post.author}</p>
                  <p className="text-xs text-white/50">{post.authorRole}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-white/50">
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{post.readTime}</span>
                <span>·</span>
                <span>{post.publishedAt}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE BODY */}
      <section className="w-full py-16 md:py-24">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0">
          <div className="grid lg:grid-cols-[1fr_340px] gap-16 items-start">

            {/* Article */}
            <article className="max-w-2xl">
              <p className="text-lg text-foreground/75 leading-relaxed mb-12 pb-12 border-b border-black/8 font-medium">
                {post.content.intro}
              </p>

              <div className="flex flex-col gap-12">
                {post.content.sections.map((section) => (
                  <div key={section.heading}>
                    <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">{section.heading}</h2>
                    <div className="flex flex-col gap-4">
                      {section.body.split("\n\n").map((para, i) => (
                        <p key={i} className="text-base text-foreground/65 leading-relaxed">{para}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-12 border-t border-black/8">
                <div className="bg-[#F7F5F9] rounded-2xl p-7 border-l-4 border-[#E01F59]">
                  <p className="text-base text-foreground/70 leading-relaxed font-medium">{post.content.conclusion}</p>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-[calc(68px+2rem)] flex flex-col gap-6">
              <div className="bg-[#070C10] rounded-2xl p-7">
                <p className="text-sm font-bold tracking-widest uppercase text-[#E01F59] mb-3">Work With Us</p>
                <h3 className="text-xl font-bold text-white mb-3 leading-tight">Ready to build something great?</h3>
                <p className="text-sm text-white/55 mb-6 leading-relaxed">Tell us about your project and we&apos;ll get back to you within 24 hours.</p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#E01F59] hover:bg-[#b91947] text-white text-sm font-semibold px-5 py-3 rounded-full transition-colors duration-200 w-full justify-center"
                >
                  Start a Project
                </Link>
              </div>

              <div className="bg-[#F7F5F9] rounded-2xl p-7">
                <p className="text-sm font-semibold text-foreground/50 mb-4">Share this article</p>
                <div className="flex flex-col gap-2">
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://heapslab.io/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-white border border-black/8 text-sm font-medium text-foreground/70 hover:border-[#E01F59]/30 hover:text-[#E01F59] transition-colors group"
                  >
                    Share on X <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://heapslab.io/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between px-4 py-2.5 rounded-xl bg-white border border-black/8 text-sm font-medium text-foreground/70 hover:border-[#E01F59]/30 hover:text-[#E01F59] transition-colors group"
                  >
                    Share on LinkedIn <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </a>
                </div>
              </div>

              <div className="bg-[#F7F5F9] rounded-2xl p-7">
                <p className="text-sm font-semibold text-foreground/50 mb-1">Category</p>
                <span className="inline-block px-3 py-1 rounded-full bg-[#E01F59]/10 text-[#E01F59] text-sm font-semibold mt-1">
                  {post.category}
                </span>
              </div>
            </aside>

          </div>
        </div>
      </section>

      {/* ── RELATED POSTS */}
      <section className="w-full py-16 md:py-24 bg-[#F7F5F9]">
        <div className="max-w-screen-2xl mx-auto px-6 md:px-10 lg:px-0">
          <div className="mb-12">
            <p className="text-sm font-bold tracking-widest uppercase text-[#E01F59] mb-3">Keep Reading</p>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">More from Insights</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((p) => {
              const RelIllustration = blogIllustrations[p.slug];
              return (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col gap-4 bg-white rounded-2xl overflow-hidden border border-black/5 hover:border-[#E01F59]/20 hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className="relative h-44 overflow-hidden"
                    style={{ background: p.coverGradient }}
                  >
                    {RelIllustration && (
                      <div className="absolute inset-0">
                        <RelIllustration />
                      </div>
                    )}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/15 text-white text-xs font-semibold backdrop-blur-sm">
                      {p.category}
                    </span>
                  </div>
                  <div className="px-5 pb-5 flex flex-col gap-2">
                    <h3 className="text-sm font-bold text-foreground leading-snug group-hover:text-[#E01F59] transition-colors duration-200">
                      {p.title}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-foreground/40">
                      <Clock className="w-3 h-3" />{p.readTime}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}
