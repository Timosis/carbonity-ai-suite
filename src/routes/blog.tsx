import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import { blogPosts } from "@/lib/blog-posts";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Carbonity.ai" },
      {
        name: "description",
        content:
          "CBAM mevzuatı, tedarikçi veri toplama, maliyet yönetimi ve doğrulanabilir raporlama üzerine pratik rehberler.",
      },
      { property: "og:title", content: "Blog — Carbonity.ai" },
      {
        property: "og:description",
        content: "CBAM ve karbon maliyeti yönetimi üzerine pratik rehberler ve analizler.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

const demoHref = "mailto:hello@carbonity.ai?subject=Carbonity.ai Demo Talebi";

function BlogPage() {
  const featured = blogPosts[0]!;
  const rest = blogPosts.slice(1);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-[1360px] items-center justify-between px-6 py-4">
          <Link to="/" className="inline-flex items-center gap-2.5 font-display text-xl font-bold tracking-tight" aria-label="Carbonity.ai ana sayfa">
            <span className="relative flex h-6 w-6 items-center justify-center" aria-hidden="true">
              <span className="absolute h-4 w-2.5 rounded-full border-2 border-primary" />
              <span className="absolute h-4 w-2.5 rounded-full border-2 border-primary -rotate-45 translate-x-1 translate-y-0.5" />
            </span>
            <span>carbonity.ai</span>
          </Link>
          <nav className="flex items-center gap-8 text-sm font-semibold" aria-label="Blog navigasyonu">
            <Link to="/" className="hidden text-muted-foreground transition-colors hover:text-foreground sm:inline">Ana sayfa</Link>
            <a
              href={demoHref}
              className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-2.5 text-sm font-semibold text-inverse transition-all hover:bg-foreground/90"
            >
              Demo talep et
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-border bg-secondary/40">
        <div className="mx-auto max-w-[1360px] px-6 py-16 lg:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            Carbonity Blog
          </div>
          <h1 className="mt-6 max-w-3xl font-display text-4xl font-bold leading-display tracking-tight sm:text-5xl">
            CBAM'ı anlaşılır kılan yazılar
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
            Mevzuat değişiklikleri, tedarikçi veri operasyonu ve karbon maliyeti yönetimi üzerine pratik rehberler — jargon olmadan.
          </p>
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-[1360px] px-6 py-14 lg:py-20">
        <Link
          to="/blog/$slug"
          params={{ slug: featured.slug }}
          className="group grid gap-8 rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg lg:grid-cols-2 lg:items-center lg:p-12"
        >
          <div className="flex aspect-[16/9] items-center justify-center rounded-xl bg-grid bg-primary/5">
            <span className="font-display text-7xl font-bold text-primary/20" aria-hidden="true">
              01
            </span>
          </div>
          <div>
            <div className="flex items-center gap-3 text-sm">
              <span className="rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">{featured.category}</span>
              <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                <CalendarDays size={14} aria-hidden="true" /> {featured.date}
              </span>
              <span className="inline-flex items-center gap-1.5 text-muted-foreground">
                <Clock3 size={14} aria-hidden="true" /> {featured.readTime}
              </span>
            </div>
            <h2 className="mt-5 font-display text-2xl font-bold leading-tightish tracking-tight transition-colors group-hover:text-primary sm:text-3xl">
              {featured.title}
            </h2>
            <p className="mt-4 text-muted-foreground">{featured.excerpt}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Yazıyı oku <ArrowRight size={16} aria-hidden="true" className="transition-transform group-hover:translate-x-1" />
            </span>
          </div>
        </Link>

        {/* Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {rest.map((post) => (
            <Link
              key={post.slug}
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-shadow hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">{post.category}</span>
                <ArrowUpRight size={18} aria-hidden="true" className="text-muted-foreground transition-colors group-hover:text-primary" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold leading-tightish tracking-tight transition-colors group-hover:text-primary">
                {post.title}
              </h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{post.excerpt}</p>
              <div className="mt-6 flex items-center gap-4 border-t border-border pt-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <CalendarDays size={13} aria-hidden="true" /> {post.date}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock3 size={13} aria-hidden="true" /> {post.readTime}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary">
        <div className="mx-auto flex max-w-[1360px] flex-col items-start gap-6 px-6 py-16 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold leading-tightish tracking-tight text-inverse">
              CBAM sürecinizi yazılardan öteye taşıyın
            </h2>
            <p className="mt-3 max-w-xl text-inverse/80">
              Verilerinizi tek platformda toplayın, maliyetinizi görün ve doğrulanabilir raporunuzu dakikalar içinde üretin.
            </p>
          </div>
          <a
            href={demoHref}
            className="inline-flex items-center gap-3 rounded-lg bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-background/90"
          >
            Demo talep et <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border">
        <div className="mx-auto flex max-w-[1360px] flex-col items-start justify-between gap-4 px-6 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <span>© 2026 carbonity.ai — Tüm hakları saklıdır.</span>
          <Link to="/" className="transition-colors hover:text-foreground">Ana sayfaya dön →</Link>
        </div>
      </footer>
    </div>
  );
}
