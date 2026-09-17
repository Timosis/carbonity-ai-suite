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

const ArrowLink = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
  <a
    href="mailto:hello@carbonity.ai?subject=Carbonity.ai Demo Talebi"
    className={dark ? "button button-dark" : "button button-lime"}
  >
    <span>{children}</span>
    <ArrowRight aria-hidden="true" size={18} strokeWidth={2.2} />
  </a>
);

function Logo() {
  return (
    <a href="#top" className="brand" aria-label="Carbonity.ai ana sayfa">
      <span className="brand-mark" aria-hidden="true">
        <span />
        <span />
      </span>
      <span>carbonity.ai</span>
    </a>
  );
}

function DashboardPreview() {
  return (
    <div className="product-shell" aria-label="Carbonity.ai ürün ekranı örneği">
      <div className="product-topbar">
        <div className="product-dots"><span /><span /><span /></div>
        <span>CBAM CONTROL CENTER</span>
        <span className="live-pill"><i /> CANLI</span>
      </div>
      <div className="product-layout">
        <aside className="product-sidebar">
          <div className="mini-logo"><Leaf size={14} /> C</div>
          {[CircleGauge, BarChart3, Network, FileCheck2].map((Icon, index) => (
            <div className={index === 1 ? "side-icon active" : "side-icon"} key={index}>
              <Icon size={17} />
            </div>
          ))}
        </aside>
        <div className="product-main">
          <div className="product-heading">
            <div>
              <span className="eyebrow">2026 TAHMİNİ</span>
              <h3>CBAM maliyet görünümü</h3>
            </div>
            <button type="button" className="period-button">Son 12 ay <ChevronDown size={14} /></button>
          </div>
          <div className="metric-grid">
            <div className="metric"><span>TOPLAM MALİYET</span><strong>€1,84M</strong><small className="positive">↓ %18 optimizasyon</small></div>
            <div className="metric"><span>KAPSANAN EMİSYON</span><strong>12.480 <em>tCO₂e</em></strong><small>23 aktif tedarikçi</small></div>
            <div className="metric alert"><span>RİSK ALTINDA</span><strong>€326K</strong><small>4 tedarikçi incelemede</small></div>
          </div>
          <div className="chart-panel">
            <div className="chart-header"><span>MALİYET PROJEKSİYONU</span><div><i className="legend-current" /> Mevcut <i className="legend-carbonity" /> Carbonity</div></div>
            <div className="chart" aria-hidden="true">
              <div className="y-labels"><span>€2.4M</span><span>€1.8M</span><span>€1.2M</span><span>€600K</span></div>
              <div className="chart-area">
                <div className="grid-line l1"/><div className="grid-line l2"/><div className="grid-line l3"/>
                <svg viewBox="0 0 700 220" preserveAspectRatio="none">
                  <path className="area-path" d="M0,190 C90,175 140,130 220,140 C300,150 330,72 420,90 C500,105 550,36 700,20 L700,220 L0,220 Z" />
                  <path className="line-current" d="M0,190 C90,175 140,130 220,140 C300,150 330,72 420,90 C500,105 550,36 700,20" />
                  <path className="line-optimized" d="M0,190 C100,185 145,160 220,168 C305,175 345,132 430,148 C520,160 575,100 700,105" />
                </svg>
                <div className="x-labels"><span>OCA</span><span>MAR</span><span>MAY</span><span>TEM</span><span>EYL</span><span>ARA</span></div>
              </div>
            </div>
          </div>
          <div className="supplier-row">
            <span className="supplier-rank">01</span><span className="supplier-name">Nordsteel GmbH<small>Almanya · Çelik</small></span>
            <span className="supplier-score">1.42 <small>tCO₂e/t</small></span><span className="verified"><Check size={12}/> DOĞRULANDI</span>
          </div>
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

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main id="top" className="site-shell">
      <header className="site-header">
        <Logo />
        <nav className={menuOpen ? "nav-links open" : "nav-links"} aria-label="Ana navigasyon">
          <a href="#platform" onClick={() => setMenuOpen(false)}>Platform</a>
          <a href="#cozumler" onClick={() => setMenuOpen(false)}>Çözümler</a>
          <a href="#neden" onClick={() => setMenuOpen(false)}>Neden Carbonity?</a>
          <a href="mailto:hello@carbonity.ai">İletişim</a>
        </nav>
        <a href="mailto:hello@carbonity.ai?subject=Carbonity.ai Demo Talebi" className="header-cta">Demo talep et <ArrowRight size={16}/></a>
        <button type="button" className="menu-toggle" aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"} onClick={() => setMenuOpen((value) => !value)}>
          {menuOpen ? <X /> : <Menu />}
        </button>
      </header>

      <section className="hero-section">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="status-line"><span /> CBAM, maliyet yönetimine dönüşüyor.</div>
            <h1>Karbon maliyetini<br/><em>avantaja</em> çevirin.</h1>
            <p>Emisyon verilerinizi otomatik toplayın, CBAM yükümlülüğünüzü bugünden öngörün ve daha düşük maliyetli tedarik kararları alın.</p>
            <div className="hero-actions">
              <ArrowLink>Demo talep et</ArrowLink>
              <a href="#platform" className="text-link">Platformu keşfet <ArrowRight size={17}/></a>
            </div>
            <div className="hero-proof"><ShieldCheck size={19}/><span>Denetime hazır veri izi</span><i/><span>AB CBAM uyumlu</span></div>
          </div>
          <div className="hero-aside" aria-hidden="true">
            <div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="orbit orbit-three"/>
            <div className="core-mark"><span>CO₂</span><small>MALİYET / TON</small></div>
            <div className="data-tag tag-one"><span>ÇELİK</span><strong>€86.40/t</strong></div>
            <div className="data-tag tag-two"><span>ALÜMİNYUM</span><strong>€112.20/t</strong></div>
            <div className="data-tag tag-three"><span>GÜBRE</span><strong>€54.80/t</strong></div>
          </div>
        </div>
        <div className="dashboard-wrap"><DashboardPreview /></div>
      </section>

      <section className="trust-strip" aria-label="Ürün avantajları">
        <p>Karbon verisini finansal karara dönüştüren tek çalışma alanı.</p>
        <div className="trust-items"><span>CBAM</span><span>GHG PROTOCOL</span><span>ISO 14064</span><span>SCOPE 1 · 2 · 3</span></div>
      </section>

      <section className="process-section" id="platform">
        <div className="section-intro">
          <span className="eyebrow">TEK PLATFORM. UÇTAN UCA KONTROL.</span>
          <h2>Dağınık veriden<br/><em>net karara.</em></h2>
          <p>Elektronik tablolardan çıkın. Her veri noktasının kaynağını, etkisini ve maliyetini aynı akışta yönetin.</p>
        </div>
        <div className="steps-grid">
          {steps.map(({ n, icon: Icon, title, body }) => (
            <article className="step" key={n}>
              <div className="step-top"><span>{n}</span><Icon size={26} strokeWidth={1.7}/></div>
              <h3>{title}</h3><p>{body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="scenario-section" id="cozumler">
        <div className="scenario-panel">
          <div className="scenario-copy">
            <span className="eyebrow">SENARYO MOTORU</span>
            <h2>Hangi tedarikçi<br/>yarının <em>kazananı?</em></h2>
            <p>Karbon fiyatı, ürün yoğunluğu ve ticaret rotalarını birlikte modelleyin. Satın alma kararını emisyon kadar maliyet açısından da test edin.</p>
            <ul>
              <li><Check size={15}/> Alternatif tedarikçileri anında karşılaştırın</li>
              <li><Check size={15}/> 2030’a kadar karbon maliyetini projekte edin</li>
              <li><Check size={15}/> En yüksek riskli kalemleri otomatik bulun</li>
            </ul>
            <ArrowLink>Kendi senaryonu gör</ArrowLink>
          </div>
          <div className="comparison-card">
            <div className="comparison-head"><span>TEDARİKÇİ KARŞILAŞTIRMASI</span><span>2027 PROJEKSİYONU</span></div>
            <div className="comparison-row selected"><span className="company">A<small>Mevcut tedarikçi</small></span><span className="bar"><i /></span><strong>€482K<small>1.84 tCO₂e/t</small></strong></div>
            <div className="comparison-row best"><span className="company">B<small>Önerilen alternatif</small></span><span className="bar"><i /></span><strong>€316K<small>1.12 tCO₂e/t</small></strong></div>
            <div className="comparison-row"><span className="company">C<small>Alternatif tedarikçi</small></span><span className="bar"><i /></span><strong>€395K<small>1.49 tCO₂e/t</small></strong></div>
            <div className="saving"><TrendingDown size={24}/><span>TAHMİNİ YILLIK TASARRUF<strong>€166.000</strong></span><span className="saving-percent">−%34</span></div>
          </div>
        </div>
      </section>

      <section className="roles-section" id="neden">
        <div className="roles-head"><span className="eyebrow">ORTAK VERİ. ORTAK HEDEF.</span><h2>Her ekip için<br/>tek gerçek kaynağı.</h2></div>
        <div className="role-grid">
          <article><span>FİNANS</span><strong>Karbon yükümlülüğünü bütçeye sürpriz olmadan taşıyın.</strong><ArrowRight size={22}/></article>
          <article><span>SATIN ALMA</span><strong>Tedarikçileri fiyatın ötesinde, gelecekteki maliyetle kıyaslayın.</strong><ArrowRight size={22}/></article>
          <article><span>SÜRDÜRÜLEBİLİRLİK</span><strong>Her hesaplamayı kanıtıyla birlikte denetime hazır tutun.</strong><ArrowRight size={22}/></article>
        </div>
      </section>

      <section className="impact-strip">
        <div><strong>%82</strong><span>raporlama süresinde<br/>potansiyel azalma</span></div>
        <div><strong>1→∞</strong><span>tek veriden sınırsız<br/>senaryo</span></div>
        <div><strong>0</strong><span>gizli karbon<br/>maliyeti</span></div>
      </section>

      <section className="cta-section">
        <div><span className="eyebrow">CARBONITY.AI İLE TANIŞIN</span><h2>CBAM'ı yalnızca<br/>raporlamayın.<br/><em>Yönetin.</em></h2></div>
        <div className="cta-copy"><p>Verinizi, riskinizi ve fırsatlarınızı 30 dakikalık kişiselleştirilmiş demoda birlikte görelim.</p><ArrowLink dark>Demo talep et</ArrowLink></div>
      </section>

      <footer>
        <div className="footer-top"><Logo/><p>Karbon zekâsı.<br/>Daha iyi iş kararları.</p></div>
        <div className="footer-bottom"><span>© 2026 Carbonity.ai</span><div><a href="mailto:hello@carbonity.ai">hello@carbonity.ai</a><a href="#top">Yukarı dön ↑</a></div></div>
      </footer>
    </main>
  );
}