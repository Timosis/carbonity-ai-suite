import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3 } from "lucide-react";
import { blogPosts, getPost } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Yazı bulunamadı — Carbonity.ai" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    return {
      meta: [
        { title: `${loaderData.title} — Carbonity.ai Blog` },
        { name: "description", content: loaderData.excerpt },
        { property: "og:title", content: loaderData.title },
        { property: "og:description", content: loaderData.excerpt },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: BlogPostPage,
  notFoundComponent: PostNotFound,
});

const demoHref = "mailto:hello@carbonity.ai?subject=Carbonity.ai Demo Talebi";

function BlogPostPage() {
  const post = Route.useLoaderData();
  const others = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between px-6 py-4">
          <Link to="/" className="inline-flex items-center gap-2.5 font-display text-xl font-bold tracking-tight" aria-label="Carbonity.ai ana sayfa">
            <span className="relative flex h-6 w-6 items-center justify-center" aria-hidden="true">
              <span className="absolute h-4 w-2.5 rounded-full border-2 border-primary" />
              <span className="absolute h-4 w-2.5 rounded-full border-2 border-primary -rotate-45 translate-x-1 translate-y-0.5" />
            </span>
            <span>carbonity.ai</span>
          </Link>
          <a
            href={demoHref}
            className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-semibold text-inverse transition-all hover:bg-foreground/90"
          >
            Demo talep et
          </a>
        </div>
      </header>

      <article className="mx-auto max-w-3xl px-6 py-14 lg:py-20">
        <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft size={16} aria-hidden="true" /> Tüm yazılar
        </Link>

        <div className="mt-8 flex items-center gap-3 text-sm">
          <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">{post.category}</span>
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            <CalendarDays size={14} aria-hidden="true" /> {post.date}
          </span>
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            <Clock3 size={14} aria-hidden="true" /> {post.readTime} okuma
          </span>
        </div>

        <h1 className="mt-6 font-display text-3xl font-bold leading-tightish tracking-tight sm:text-4xl">
          {post.title}
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">{post.excerpt}</p>

        <div className="mt-10 space-y-6 border-t border-border pt-10 text-base leading-relaxed text-foreground/90">
          {post.body.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8">
          <h2 className="font-display text-xl font-bold tracking-tight">CBAM sürecinizi tek platformda yönetin</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Veri toplama, maliyet senaryoları ve doğrulanabilir raporlama — hepsi Carbonity.ai'de.
          </p>
          <a
            href={demoHref}
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-semibold text-inverse transition-all hover:bg-foreground/90"
          >
            Demo talep et <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </article>

      {others.length > 0 && (
        <section className="border-t border-border bg-secondary/40">
          <div className="mx-auto max-w-[1360px] px-6 py-14">
            <h2 className="font-display text-2xl font-bold tracking-tight">Diğer yazılar</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to="/blog/$slug"
                  params={{ slug: p.slug }}
                  className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-shadow hover:shadow-lg"
                >
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary self-start">{p.category}</span>
                  <h3 className="mt-4 font-display text-lg font-bold leading-tightish tracking-tight transition-colors group-hover:text-primary">
                    {p.title}
                  </h3>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock3 size={13} aria-hidden="true" /> {p.readTime} okuma
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between px-6 py-8 text-sm text-muted-foreground">
          <span>© 2026 carbonity.ai</span>
          <Link to="/blog" className="transition-colors hover:text-foreground">Tüm yazılar →</Link>
        </div>
      </footer>
    </div>
  );
}

function PostNotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center">
      <h1 className="font-display text-3xl font-bold tracking-tight">Yazı bulunamadı</h1>
      <p className="text-muted-foreground">Aradığınız yazı taşınmış ya da kaldırılmış olabilir.</p>
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 rounded-lg bg-foreground px-6 py-3.5 text-sm font-semibold text-inverse transition-all hover:bg-foreground/90"
      >
        <ArrowLeft size={16} aria-hidden="true" /> Blog'a dön
      </Link>
    </div>
  );
}
