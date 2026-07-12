import { RecommendationWizard } from "./components/RecommendationWizard";
import { MenuCatalog } from "./components/MenuCatalog";
import { featuredProducts } from "./data/menu";

const highlights = [
  { value: "4,3", label: "avaliação no Google" },
  { value: "+1,2 mil", label: "avaliações de clientes" },
  { value: "24h", label: "para matar sua fome" },
];

export default function Home() {
  return (
    <main>
      <div className="demo-banner">Demonstração conceitual • não oficial</div>

      <header className="site-header shell">
        <a className="brand" href="#inicio" aria-label="Kid Blanco — início">
          <span className="brand-logo" aria-hidden="true">
            <img src="/kid-blanco-instagram.png" alt="" />
          </span>
          <span>
            <strong>Kid Blanco</strong>
            <small>Pães &amp; Doces</small>
          </span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#destaques">Destaques</a>
          <a href="#cardapio">Cardápio</a>
          <a href="#assistente">Assistente</a>
          <a href="#localizacao">Visite-nos</a>
        </nav>
        <a className="header-cta" href="#assistente">Me ajuda a escolher</a>
      </header>

      <section className="hero shell" id="inicio">
        <div className="hero-copy">
          <span className="eyebrow">A melhor e mais completa padaria da região</span>
          <h1>Sua fome sabe o que quer. <em>A gente ajuda a descobrir.</em></h1>
          <p>
            Responda três perguntas rápidas e receba uma sugestão feita para o seu
            momento — sem perder tempo olhando dezenas de opções.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#assistente">Descobrir meu pedido</a>
            <a className="button button-secondary" href="#cardapio">Ver cardápio completo</a>
          </div>
          <div className="hero-notes">
            <span>● Aberta 24h</span>
            <span>● Estacionamento próprio</span>
            <span>● Pedido sem mínimo</span>
          </div>
        </div>

        <div className="hero-visual" aria-label="Seleção especial da Kid Blanco">
          <div className="pizza-orbit">
            <div className="pizza-photo" />
            <div className="orbit-label orbit-top"><small>A partir de</small><strong>R$ 45,90</strong></div>
            <div className="orbit-label orbit-bottom"><strong>32 sabores</strong><small>até 2 por pizza</small></div>
          </div>
          <div className="hero-stamp"><strong>8</strong><span>fatias<br />para dividir</span></div>
        </div>
      </section>

      <section className="social-proof">
        <div className="shell proof-grid">
          {highlights.map((item) => (
            <div key={item.label}>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          ))}
          <p>“Ótimo atendimento, preço justo e a pizza no balcão uma delícia.”</p>
        </div>
      </section>

      <section className="section shell" id="destaques">
        <div className="section-heading">
          <div>
            <span className="eyebrow">Escolhas que não têm erro</span>
            <h2>Favoritos para cada tipo de fome</h2>
          </div>
          <a href="#assistente">Quero uma indicação →</a>
        </div>

        <div className="product-grid">
          {featuredProducts.map((product) => (
            <article className="product-card" key={product.name}>
              <div className={`product-art ${product.art}`}>
                <span>{product.emoji}</span>
                {product.badge && <small>{product.badge}</small>}
              </div>
              <div className="product-info">
                <span className="product-category">{product.category}</span>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <strong>{product.price}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="menu-section" id="cardapio">
        <div className="shell menu-intro">
          <div>
            <span className="eyebrow">Prefere escolher sozinho?</span>
            <h2>Cardápio completo</h2>
          </div>
          <p>Explore todas as opções disponíveis no cardápio digital, pesquise por ingrediente e peça diretamente pelo WhatsApp.</p>
        </div>
        <div className="shell"><MenuCatalog /></div>
      </section>

      <section className="assistant-section" id="assistente">
        <div className="shell assistant-intro">
          <span className="eyebrow light">Atendente inteligente Kid Blanco</span>
          <h2>Não sabe o que pedir?<br />Deixa com a gente.</h2>
          <p>São só três escolhas. No fim, você recebe opções reais do cardápio e entende por que elas combinam com você.</p>
        </div>
        <RecommendationWizard />
      </section>

      <section className="visit shell" id="localizacao">
        <div>
          <span className="eyebrow">Perto de você, a qualquer hora</span>
          <h2>Vem para a Kid Blanco</h2>
          <p>Av. do Cursino, 2783<br />Jardim da Saúde • São Paulo</p>
          <div className="visit-tags"><span>24 horas</span><span>Estacionamento</span><span>Delivery</span></div>
        </div>
        <a className="button button-primary" href="https://www.google.com/maps/search/?api=1&query=Kid+Blanco+Av.+do+Cursino+2783" target="_blank" rel="noreferrer">Como chegar</a>
      </section>

      <footer>
        <div className="shell footer-content">
          <div className="brand footer-brand">
            <span className="brand-logo" aria-hidden="true"><img src="/kid-blanco-instagram.png" alt="" /></span>
            <span><strong>Kid Blanco</strong><small>Pães &amp; Doces</small></span>
          </div>
          <p>Protótipo demonstrativo criado a partir de informações públicas. Preços sujeitos a confirmação.</p>
        </div>
      </footer>
    </main>
  );
}
