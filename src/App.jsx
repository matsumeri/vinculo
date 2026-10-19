import { useState } from 'react'
import './App.css'

const products = [
  {
    name: 'Anillo Presencia',
    type: 'Anillos',
    price: '$ 28.000',
    image:
      'https://images.unsplash.com/photo-1617038220319-276d3cfab638?auto=format&fit=crop&w=900&q=85',
    alt: 'Anillo artesanal de cobre con acabado cálido',
    note: 'Un pequeño recordatorio de volver al presente.',
  },
  {
    name: 'Pulsera Raíz',
    type: 'Pulseras',
    price: '$ 36.000',
    image:
      'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=900&q=85',
    alt: 'Pulsera de cobre minimalista sobre fondo natural',
    note: 'Lleva contigo lo que te hace sentir en casa.',
  },
  {
    name: 'Colgante Esencia',
    type: 'Colgantes',
    price: '$ 42.000',
    image:
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=85',
    alt: 'Colgante artesanal de metal con diseño orgánico',
    note: 'Un gesto cotidiano para honrar tu propia esencia.',
  },
  {
    name: 'Aros Calma',
    type: 'Aros',
    price: '$ 32.000',
    image:
      'https://images.unsplash.com/photo-1635767798638-3665a54c8c11?auto=format&fit=crop&w=900&q=85',
    alt: 'Aros artesanales de cobre de líneas delicadas',
    note: 'Una pausa suave, cerca de ti.',
  },
]

const benefits = [
  {
    number: '01',
    title: 'Un hilo conductor',
    text: 'El cobre acompaña tus rituales como símbolo de conexión entre el cuerpo y aquello que te hace bien.',
  },
  {
    number: '02',
    title: 'Un ancla de equilibrio',
    text: 'Una pieza elegida con intención te invita a hacer una pausa y escuchar lo que necesitas.',
  },
  {
    number: '03',
    title: 'Contacto consciente',
    text: 'Su calidez sobre la piel transforma un accesorio en un gesto cercano de amor propio.',
  },
]

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" fill="none">
      <path d="M3.5 10h12m-5-5 5 5-5 5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

function App() {
  const [subscribed, setSubscribed] = useState(false)

  function handleSubscribe(event) {
    event.preventDefault()
    setSubscribed(true)
  }

  return (
    <>
      <div className="announcement">
        <span>Un recordatorio para volver a ti.</span>
        <a href="#manifiesto">Conoce nuestra intención <ArrowIcon /></a>
      </div>

      <header className="site-header">
        <a className="wordmark" href="#inicio" aria-label="Vínculo, inicio">
          VÍN<span className="wordmark-cu">Cu</span>LO
          <span className="wordmark-caption">JOYERÍA CONSCIENTE</span>
        </a>
        <nav className="desktop-nav" aria-label="Navegación principal">
          <a href="#coleccion">Colección</a>
          <a href="#manifiesto">Nuestra esencia</a>
          <a href="#cobre">El cobre</a>
        </nav>
        <a className="header-link" href="#newsletter">Encuentra tu amuleto <ArrowIcon /></a>
        <details className="mobile-nav">
          <summary aria-label="Abrir menú de navegación">
            <span></span><span></span>
          </summary>
          <nav aria-label="Navegación móvil">
            <a href="#coleccion">Colección</a>
            <a href="#manifiesto">Nuestra esencia</a>
            <a href="#cobre">El cobre</a>
            <a href="#newsletter">Encuentra tu amuleto</a>
          </nav>
        </details>
      </header>

      <main>
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-image" role="img" aria-label="Joyería artesanal en tonos cálidos sobre una superficie natural">
            <div className="hero-shade"></div>
          </div>
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span></span> Hecho para estar cerca</p>
            <h1 id="hero-title">VÍNCULO — Conexión profunda y constante con tu interior.</h1>
            <p className="hero-description">Accesorios de cobre diseñados como rituales diarios de amor propio.</p>
            <a className="button button-light" href="#coleccion">Explorar colección <ArrowIcon /></a>
          </div>
          <div className="hero-element" aria-label="Cobre, elemento químico Cu">
            <span>29</span>
            <strong>Cu</strong>
            <small>Cobre</small>
          </div>
          <div className="hero-caption"><span>01 / 04</span><span>La calidez de lo esencial</span></div>
        </section>

        <section className="intro section-wrap" id="manifiesto">
          <p className="eyebrow">Una pausa consciente</p>
          <h2>Volver a ti también<br />puede ser <em>un ritual.</em></h2>
          <p className="intro-copy">En un mundo lleno de prisa, VÍNCULO nace para acompañarte de vuelta a lo que importa. Cada pieza es un gesto tangible de amor propio, una invitación a habitar tu presente con intención.</p>
          <a className="text-link" href="#cobre">Descubre nuestra esencia <ArrowIcon /></a>
          <span className="intro-mark" aria-hidden="true">Cu</span>
        </section>

        <section className="collection section-wrap" id="coleccion">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Pequeños gestos, grandes vínculos</p>
              <h2>Piezas para <em>volver a ti.</em></h2>
            </div>
            <a className="text-link collection-link" href="#newsletter">Ver toda la colección <ArrowIcon /></a>
          </div>
          <div className="product-grid">
            {products.map((product, index) => (
              <article className="product-card" key={product.name}>
                <a className="product-image" href="#newsletter" aria-label={`Consultar por ${product.name}`}>
                  <img src={product.image} alt={product.alt} loading="lazy" />
                  <span className="product-index">0{index + 1}</span>
                  <span className="product-meaning">{product.note}</span>
                  <span className="product-arrow"><ArrowIcon /></span>
                </a>
                <div className="product-info">
                  <div><p className="product-type">{product.type}</p><h3>{product.name}</h3></div>
                  <span className="product-price">{product.price}</span>
                </div>
              </article>
            ))}
          </div>
          <p className="collection-note">Cada pieza está hecha a mano. Sus pequeñas variaciones la hacen única, como tú.</p>
        </section>

        <section className="copper-story" id="cobre">
          <div className="story-image" role="img" aria-label="Detalle de una pieza de cobre artesanal junto a elementos naturales"></div>
          <div className="story-copy">
            <p className="eyebrow">Un metal noble, una conexión propia</p>
            <h2>El cobre.<br /><em>Cerca de ti.</em></h2>
            <p className="story-lead">Un material cálido, nacido de la tierra, que nos recuerda la importancia de estar presentes.</p>
            <p>En VÍNCULO lo elegimos por su historia, su carácter y su contacto cercano con la piel. Creemos en su simbolismo como conductor natural: un hilo entre tu cuerpo, tus intenciones y tu bienestar cotidiano.</p>
            <a className="text-link" href="#beneficios">El significado de cada pieza <ArrowIcon /></a>
            <span className="story-signature">VÍNCULO <span>·</span> Cu</span>
          </div>
        </section>

        <section className="benefits section-wrap" id="beneficios">
          <div className="benefits-intro">
            <p className="eyebrow">Más que un accesorio</p>
            <h2>Una intención<br />que te <em>acompaña.</em></h2>
            <p>No se trata solo de lo que llevas puesto, sino de lo que eliges llevar contigo.</p>
          </div>
          <div className="benefit-list">
            {benefits.map((benefit) => (
              <article className="benefit-item" key={benefit.number}>
                <span className="benefit-number">{benefit.number}</span>
                <div><h3>{benefit.title}</h3><p>{benefit.text}</p></div>
                <span className="benefit-symbol" aria-hidden="true">✳</span>
              </article>
            ))}
          </div>
        </section>

        <section className="community">
          <div className="community-symbol" aria-hidden="true">“</div>
          <p className="eyebrow">Un espacio para sentir</p>
          <h2>Tu historia también<br />empieza <em>por ti.</em></h2>
          <p className="community-copy">Cada vínculo es único. Muy pronto compartiremos aquí las historias reales de quienes eligen llevar VÍNCULO cerca de su piel.</p>
          <a className="text-link" href="#newsletter">Sé parte de la comunidad <ArrowIcon /></a>
          <div className="community-dots" aria-hidden="true"><span></span><span></span><span></span></div>
        </section>

        <section className="newsletter" id="newsletter">
          <div>
            <p className="eyebrow">Un momento para ti</p>
            <h2>Inspira tu <em>bandeja.</em></h2>
            <p>Recibe reflexiones y novedades para tu bienestar. Sin prisa, solo cuando valga la pena.</p>
          </div>
          <form className="newsletter-form" onSubmit={handleSubscribe}>
            <label className="sr-only" htmlFor="email">Tu correo electrónico</label>
            <input id="email" type="email" name="email" placeholder="Tu correo electrónico" required autoComplete="email" />
            <button type="submit" aria-label="Suscribirme"><ArrowIcon /></button>
            <p className="form-message" aria-live="polite">{subscribed ? 'Gracias por tu interés. La lista se habilitará pronto.' : 'Al suscribirte, aceptas recibir novedades de VÍNCULO.'}</p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-main">
          <a className="wordmark footer-wordmark" href="#inicio" aria-label="Vínculo, volver al inicio">
            VÍN<span className="wordmark-cu">Cu</span>LO
            <span className="wordmark-caption">EL HILO CONDUCTOR HACIA TU AMOR PROPIO</span>
          </a>
          <p className="footer-message">Un abrazo diario.<br />Un recordatorio constante de volver a ti.</p>
          <div className="footer-links">
            <a href="#coleccion">Colección</a>
            <a href="#manifiesto">Nuestra esencia</a>
            <a href="mailto:hola@vinculo.com">Escríbenos</a>
          </div>
          <a className="social-link" href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram <ArrowIcon /></a>
        </div>
        <div className="footer-bottom">
          <span>© 2026 VÍNCULO. Hecho con intención.</span>
          <span>Accesorios y joyería en cobre <b>Cu</b></span>
          <a href="#inicio">Volver arriba ↑</a>
        </div>
      </footer>
    </>
  )
}

export default App
