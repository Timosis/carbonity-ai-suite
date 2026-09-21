import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronDown,
  CircleGauge,
  FileCheck2,
  Leaf,
  Menu,
  Network,
  ScanLine,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  X,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Carbonity.ai — CBAM maliyetini görünür kılın" },
      {
        name: "description",
        content:
          "CBAM verilerinizi tek yerde toplayın, emisyon maliyetini hesaplayın ve tedarik senaryolarını Carbonity.ai ile karşılaştırın.",
      },
      { property: "og:title", content: "Carbonity.ai — CBAM maliyetini görünür kılın" },
      {
        property: "og:description",
        content: "Emisyon verisinden doğrulanabilir CBAM raporuna, tek bir çalışma alanında.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const demoHref = "mailto:hello@carbonity.ai?subject=Carbonity.ai Demo Talebi";

function Logo() {
  return (
    <a href="#top" className="inline-flex items-center gap-2.5 font-display text-xl font-bold tracking-tight" aria-label="Carbonity.ai ana sayfa">
      <span className="relative flex h-6 w-6 items-center justify-center" aria-hidden="true">
        <span className="absolute h-4 w-2.5 rounded-full border-2 border-primary" />
        <span className="absolute h-4 w-2.5 rounded-full border-2 border-primary -rotate-45 translate-x-1 translate-y-0.5" />
      </span>
      <span>carbonity.ai</span>
    </a>
  );
}

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary">
      <span className="h-2 w-2 rounded-full bg-primary" />
      {children}
    </div>
  );
}

function PrimaryCta({ children }: { children: React.ReactNode }) {
  return (
    <a
      href={demoHref}
      className="inline-flex items-center justify-center gap-3 rounded-lg bg-foreground px-6 py-3.5 text-sm font-semibold text-inverse transition-all hover:bg-foreground/90"
    >
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={16} strokeWidth={2.2} />
    </a>
  );
}

function OutlineCta({ children, href }: { children: React.ReactNode; href?: string }) {
  return (
    <a
      href={href || "#platform"}
      className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-muted"
    >
      <span>{children}</span>
      <ArrowRight aria-hidden="true" size={16} strokeWidth={2.2} />
    </a>
  );
}

function DashboardPreview() {
  return (
    <div className="relative" aria-label="Carbonity.ai ürün ekranı örneği">
      <div className="absolute -inset-8 -z-10 bg-grid opacity-40" />
      <div className="rounded-2xl border border-border bg-muted p-2 shadow-xl shadow-foreground/5">
        <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <div className="flex gap-1.5">
              <span className="h-3 w-3 rounded-full bg-muted" />
              <span className="h-3 w-3 rounded-full bg-muted" />
              <span className="h-3 w-3 rounded-full bg-muted" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              CBAM Control Center
            </span>
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-primary/5">
              <Leaf size={14} className="text-primary" />
            </span>
          </div>

          <div className="space-y-5 p-5">
            <div className="grid grid-cols-3 gap-3">
              <div className="rounded-lg border border-primary/10 bg-primary/5 p-3">
                <div className="text-[10px] font-bold uppercase tracking-wider text-primary">Toplam Maliyet</div>
                <div className="mt-1 text-xl font-bold text-foreground font-display">€1,84M</div>
                <div className="mt-0.5 text-[10px] font-medium text-primary">↓ %18 optimizasyon</div>
              </div>
              <div className="rounded-lg border border-border bg-muted p-3">
                <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Kapsanan Emisyon</div>
                <div className="mt-1 text-xl font-bold text-foreground font-display">12.480 <span className="text-sm font-medium text-muted-foreground">tCO₂e</span></div>
                <div className="mt-0.5 text-[10px] font-medium text-muted-foreground">23 aktif tedarikçi</div>
              </div>
              <div className="rounded-lg border border-border bg-muted p-3">
                <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Risk Altında</div>
                <div className="mt-1 text-xl font-bold text-foreground font-display">€326K</div>
                <div className="mt-0.5 text-[10px] font-medium text-muted-foreground">4 tedarikçi incelemede</div>
              </div>
            </div>

            <div className="rounded-lg border border-border bg-muted p-4">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-foreground">Maliyet Projeksiyonu</div>
                  <div className="text-[10px] text-muted-foreground">Son 12 aylık görünüm</div>
                </div>
                <div className="flex items-center gap-3 text-[10px] font-medium text-muted-foreground">
                  <span className="flex items-center gap-1.5"><span className="h-0.5 w-3 bg-foreground" /> Mevcut</span>
                  <span className="flex items-center gap-1.5"><span className="h-0.5 w-3 bg-primary" /> Carbonity</span>
                </div>
              </div>
              <div className="h-40 w-full">
                <svg viewBox="0 0 700 160" preserveAspectRatio="none" className="h-full w-full">
                  <path
                    d="M0,140 C90,125 140,95 220,105 C300,115 330,55 420,70 C500,82 550,30 700,18 L700,160 L0,160 Z"
                    className="fill-primary/10"
                  />
                  <path
                    d="M0,140 C90,125 140,95 220,105 C300,115 330,55 420,70 C500,82 550,30 700,18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-foreground"
                  />
                  <path
                    d="M0,140 C100,132 145,115 220,122 C305,128 345,95 430,108 C520,118 575,78 700,82"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="text-primary"
                  />
                </svg>
              </div>
              <div className="mt-2 flex justify-between text-[10px] text-muted-foreground">
                <span>OCA</span><span>MAR</span><span>MAY</span><span>TEM</span><span>EYL</span><span>ARA</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-5 -right-5 flex max-w-[220px] items-center gap-3 rounded-xl border border-border bg-card p-3 shadow-lg">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-inverse">
          <Check size={20} strokeWidth={2.5} />
        </div>
        <div>
          <div className="text-xs font-bold text-foreground">Otomatik Rapor</div>
          <div className="text-[10px] text-muted-foreground">CBAM bildirime hazır.</div>
        </div>
      </div>
    </div>
  );
}

const steps = [
  { n: "01", icon: ScanLine, title: "Veriyi içeri alın", body: "Fatura, ERP ve tedarikçi verilerini tek noktada birleştirin. Carbonity.ai eksikleri işaretler, belgeleri kaynağına bağlar." },
  { n: "02", icon: Sparkles, title: "Emisyonu hesaplayın", body: "Ürün, tesis ve tedarikçi bazında gömülü emisyonları doğru faktörlerle otomatik hesaplayın." },
  { n: "03", icon: TrendingDown, title: "Maliyeti düşürün", body: "Alternatif tedarik ve karbon fiyatı senaryolarını karşılaştırın; en yüksek tasarruf potansiyelini görün." },
  { n: "04", icon: FileCheck2, title: "Raporu güvenle verin", body: "Doğrulanabilir veri iziyle CBAM bildirimlerinizi hazırlayın, kontrol edin ve dışa aktarın." },
];

const comparisonRows = [
  { label: "A", sub: "Mevcut tedarikçi", cost: "€482K", intensity: "1.84 tCO₂e/t", width: "88%", best: false },
  { label: "B", sub: "Önerilen alternatif", cost: "€316K", intensity: "1.12 tCO₂e/t", width: "58%", best: true },
  { label: "C", sub: "Alternatif tedarikçi", cost: "€395K", intensity: "1.49 tCO₂e/t", width: "72%", best: false },
];

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main id="top" className="min-h-screen overflow-hidden bg-background">
      <header className="absolute left-0 right-0 top-0 z-30 w-full px-6">
        <div className="flex h-20 items-center justify-between border-b border-border">
          <Logo />
          <nav className={`absolute left-0 right-0 top-20 flex-col gap-6 border-b border-border bg-background px-6 py-6 text-sm font-semibold lg:static lg:flex lg:flex-row lg:items-center lg:gap-8 lg:border-0 lg:bg-transparent lg:px-0 lg:py-0 ${menuOpen ? "flex" : "hidden lg:flex"}`} aria-label="Ana navigasyon">
            <a href="#platform" onClick={() => setMenuOpen(false)} className="text-muted-foreground transition-colors hover:text-foreground">Platform</a>
            <a href="#cozumler" onClick={() => setMenuOpen(false)} className="text-muted-foreground transition-colors hover:text-foreground">Çözümler</a>
            <a href="#neden" onClick={() => setMenuOpen(false)} className="text-muted-foreground transition-colors hover:text-foreground">Neden Carbonity?</a>
            <a href="mailto:hello@carbonity.ai" onClick={() => setMenuOpen(false)} className="text-muted-foreground transition-colors hover:text-foreground">İletişim</a>
          </nav>
          <div className="flex items-center gap-4">
            <a href={demoHref} className="hidden lg:inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm font-semibold transition-colors hover:bg-muted">
              Demo talep et <ArrowRight size={14} />
            </a>
            <button type="button" className="p-2 lg:hidden" aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"} onClick={() => setMenuOpen((v) => !v)}>
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <section className="relative px-6 pt-36 pb-16 lg:pt-44 lg:pb-24">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-12">
          <div className="animate-rise lg:col-span-5">
            <SectionBadge>CBAM 2.0 uyumlu çözüm</SectionBadge>
            <h1 className="mt-6 font-display text-4xl font-bold leading-tightish tracking-tight text-foreground md:text-5xl lg:text-6xl">
              CBAM maliyetlerinizi <span className="text-primary">akıllıca</span> yönetin.
            </h1>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground lg:text-lg">
              Emisyon verilerinizi otomatik toplayın, CBAM yükümlülüğünüzü bugünden öngörün ve daha düşük maliyetli tedarik kararları alın.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <PrimaryCta>Demo talep et</PrimaryCta>
              <OutlineCta href="#platform">Platformu keşfet</OutlineCta>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-2"><ShieldCheck size={18} className="text-primary" /> Denetime hazır veri izi</span>
              <span className="hidden h-4 w-px bg-border sm:inline-block" />
              <span className="flex items-center gap-2"><Check size={16} className="text-primary" /> AB CBAM uyumlu</span>
            </div>
          </div>

          <div className="animate-fade lg:col-span-7">
            <DashboardPreview />
          </div>
        </div>
      </section>

      <section className="border-y border-border px-6 py-8" aria-label="Ürün avantajları">
        <div className="flex w-full flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
          <p className="max-w-sm text-sm font-semibold text-muted-foreground">Karbon verisini finansal karara dönüştüren tek çalışma alanı.</p>
          <div className="flex flex-wrap items-center gap-6 text-xs font-bold uppercase tracking-widest text-muted-foreground lg:gap-10">
            <span>CBAM</span>
            <span>GHG Protocol</span>
            <span>ISO 14064</span>
            <span>Scope 1 · 2 · 3</span>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:py-28" id="platform">
        <div className="w-full">
          <div className="mb-12 grid grid-cols-1 gap-6 lg:mb-16 lg:grid-cols-2 lg:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Tek platform. Uçtan uca kontrol.</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tightish tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Dağınık veriden <span className="text-primary">net karara.</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-relaxed text-muted-foreground">
              Elektronik tablolardan çıkın. Her veri noktasının kaynağını, etkisini ve maliyetini aynı akışta yönetin.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ n, icon: Icon, title, body }) => (
              <article key={n} className="bg-background p-6 lg:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-display text-sm font-semibold text-muted-foreground">{n}</span>
                  <Icon size={24} className="text-primary" strokeWidth={1.7} />
                </div>
                <h3 className="mt-10 font-display text-xl font-bold text-foreground lg:mt-14 lg:text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted px-6 py-20 lg:py-28" id="cozumler">
        <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary">Senaryo motoru</span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tightish tracking-tight text-foreground md:text-4xl lg:text-5xl">
              Hangi tedarikçi yarının <span className="text-primary">kazananı?</span>
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-muted-foreground">
              Karbon fiyatı, ürün yoğunluğu ve ticaret rotalarını birlikte modelleyin. Satın alma kararını emisyon kadar maliyet açısından da test edin.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Check size={15} className="text-primary" /> Alternatif tedarikçileri anında karşılaştırın</li>
              <li className="flex items-center gap-2"><Check size={15} className="text-primary" /> 2030’a kadar karbon maliyetini projekte edin</li>
              <li className="flex items-center gap-2"><Check size={15} className="text-primary" /> En yüksek riskli kalemleri otomatik bulun</li>
            </ul>
            <div className="mt-8">
              <PrimaryCta>Kendi senaryonu gör</PrimaryCta>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <div className="flex items-center justify-between border-b border-border pb-4 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
              <span>Tedarikçi Karşılaştırması</span>
              <span>2027 Projeksiyonu</span>
            </div>
            <div className="mt-5 space-y-4">
              {comparisonRows.map((row) => (
                <div key={row.label} className={`grid grid-cols-[100px_1fr_90px] items-center gap-4 rounded-lg border p-4 ${row.best ? "border-l-4 border-l-primary bg-primary/5" : "border-border"}`}>
                  <div className="font-display text-lg font-bold leading-tight text-foreground">
                    {row.label}
                    <span className="block text-[10px] font-medium text-muted-foreground">{row.sub}</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-foreground" style={{ width: row.width, backgroundColor: row.best ? "var(--primary)" : undefined }} />
                  </div>
                  <div className="text-right font-display text-sm font-bold leading-tight text-foreground">
                    {row.cost}
                    <span className="block text-[10px] font-medium text-muted-foreground">{row.intensity}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-4 rounded-lg bg-primary p-5 text-inverse">
              <TrendingDown size={24} />
              <div className="flex-1">
                <div className="text-[10px] font-bold uppercase tracking-wider">Tahmini yıllık tasarruf</div>
                <div className="font-display text-2xl font-bold">€166.000</div>
              </div>
              <div className="font-display text-xl font-bold">−%34</div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 lg:py-28" id="neden">
        <div className="w-full">
          <div className="mb-10 flex flex-col items-start justify-between gap-6 lg:mb-14 lg:flex-row lg:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Ortak veri. Ortak hedef.</span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tightish tracking-tight text-foreground md:text-4xl lg:text-5xl">
                Her ekip için tek gerçek kaynağı.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-px border border-border bg-border lg:grid-cols-3">
            {[
              { title: "FİNANS", body: "Karbon yükümlülüğünü bütçeye sürpriz olmadan taşıyın." },
              { title: "SATIN ALMA", body: "Tedarikçileri fiyatın ötesinde, gelecekteki maliyetle kıyaslayın." },
              { title: "SÜRDÜRÜLEBİLİRLİK", body: "Her hesaplamayı kanıtıyla birlikte denetime hazır tutun." },
            ].map((role) => (
              <article key={role.title} className="group bg-background p-6 transition-colors hover:bg-muted lg:p-8">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{role.title}</span>
                <strong className="mt-8 block font-display text-xl font-semibold leading-snug text-foreground lg:mt-12 lg:text-2xl">
                  {role.body}
                </strong>
                <ArrowRight size={22} className="mt-8 text-primary transition-transform group-hover:translate-x-1" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mb-20 w-full border-y border-border">
        <div className="grid grid-cols-1 divide-y divide-border lg:grid-cols-3 lg:divide-x lg:divide-y-0">
          <div className="flex items-center gap-6 p-6 lg:p-8">
            <strong className="font-display text-4xl font-semibold text-foreground lg:text-5xl">%82</strong>
            <span className="text-sm leading-snug text-muted-foreground">raporlama süresinde<br />potansiyel azalma</span>
          </div>
          <div className="flex items-center gap-6 p-6 lg:p-8">
            <strong className="font-display text-4xl font-semibold text-foreground lg:text-5xl">1→∞</strong>
            <span className="text-sm leading-snug text-muted-foreground">tek veriden sınırsız<br />senaryo</span>
          </div>
          <div className="flex items-center gap-6 p-6 lg:p-8">
            <strong className="font-display text-4xl font-semibold text-foreground lg:text-5xl">0</strong>
            <span className="text-sm leading-snug text-muted-foreground">gizli karbon<br />maliyeti</span>
          </div>
        </div>
      </section>

      <section className="bg-primary px-6 py-20 text-inverse lg:py-28">
        <div className="grid w-full grid-cols-1 items-end gap-10 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-inverse/70">Carbonity.ai ile tanışın</span>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tightish tracking-tight md:text-4xl lg:text-5xl">
              CBAM'ı yalnızca raporlamayın.<br />
              <span className="text-inverse/40">Yönetin.</span>
            </h2>
          </div>
          <div>
            <p className="max-w-md text-base leading-relaxed text-inverse/80">
              Verinizi, riskinizi ve fırsatlarınızı 30 dakikalık kişiselleştirilmiş demoda birlikte görelim.
            </p>
            <a href={demoHref} className="mt-6 inline-flex items-center gap-3 rounded-lg bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-background/90">
              <span>Demo talep et</span>
              <ArrowRight size={16} strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-muted px-6 py-14">
        <div className="w-full">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row">
            <Logo />
            <p className="max-w-xs text-right font-display text-2xl font-medium leading-snug text-muted-foreground lg:text-3xl lg:text-right">
              Karbon zekâsı.<br />Daha iyi iş kararları.
            </p>
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-border pt-6 text-sm text-muted-foreground lg:flex-row">
            <span>© 2026 Carbonity.ai</span>
            <div className="flex gap-8">
              <a href="mailto:hello@carbonity.ai" className="transition-colors hover:text-foreground">hello@carbonity.ai</a>
              <a href="#top" className="transition-colors hover:text-foreground">Yukarı dön ↑</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
