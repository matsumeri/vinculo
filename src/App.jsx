import { useEffect, useRef } from 'react'
import './App.css'

const contactEmail = 'hola@vinculo.com'

const products = [
  {
    id: 'anillo-presencia',
    name: 'Anillo Presencia',
    type: 'Anillos',
    price: '$ 28.000',
    image:
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=85',
    alt: 'Fotografía referencial de un anillo sobre fondo oscuro',
    note: 'Un pequeño recordatorio de volver al presente.',
  },
  {
    id: 'pulsera-raiz',
    name: 'Pulsera Raíz',
    type: 'Pulseras',
    price: '$ 36.000',
    image:
      'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?auto=format&fit=crop&w=900&q=85',
    alt: 'Fotografía referencial de una pulsera sobre fondo rosado',
    note: 'Lleva contigo lo que te hace sentir en casa.',
  },
  {
    id: 'colgante-esencia',
    name: 'Colgante Esencia',
    type: 'Colgantes',
    price: '$ 42.000',
    image:
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=85',
    alt: 'Fotografía referencial de colgantes en tonos dorados',
    note: 'Un gesto cotidiano para honrar tu propia esencia.',
  },
  {
    id: 'aros-calma',
    name: 'Aros Calma',
    type: 'Aros',
    price: '$ 32.000',
    image:
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85',
    alt: 'Fotografía referencial de aros con piedras azules sobre una hoja',
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

function ProductCard({ product, index }) {
  const subject = encodeURIComponent(`Consulta por ${product.name}`)
  const body = encodeURIComponent(
    `Hola, me interesa ${product.name} (${product.price}, precio publicado). Quisiera confirmar disponibilidad, precio y moneda, medidas, material, cuidados y opciones de envío. ¡Gracias!`,
  )

  return (
    <article className="product-card" id={product.id}>
      <details className="product-details">
        <summary>
          <span className="product-image">
            <img src={product.image} alt={product.alt} loading="lazy" width="900" height="1200" />
            <span className="product-index" aria-hidden="true">0{index + 1}</span>
            <span className="product-meaning">{product.note}</span>
            <span className="product-arrow"><ArrowIcon /></span>
          </span>
          <span className="product-info">
            <span><span className="product-type">{product.type}</span><span className="product-name">{product.name}</span></span>
            <span className="product-price">{product.price}</span>
          </span>
          <span className="product-detail-label">Detalles y consulta <span aria-hidden="true">+</span></span>
        </summary>
        <div className="product-description">
          <h3>{product.name}</h3>
          <p>{product.note}</p>
          <p>Consulta disponibilidad, medidas, material, cuidados y envío antes de elegir. El precio y la moneda se confirman por correo.</p>
          <p className="photo-disclaimer">Foto referencial: no representa la pieza final ni acredita su material.</p>
          <a className="button button-dark" href={`mailto:${contactEmail}?subject=${subject}&body=${body}`} aria-label={`Consultar por ${product.name} por correo`}>
            Consultar por correo <ArrowIcon />
          </a>
          <p className="email-help">Se abrirá tu aplicación de correo. También puedes escribir a <a href={`mailto:${contactEmail}`}>{contactEmail}</a> indicando esta pieza.</p>
        </div>
      </details>
    </article>
  )
}

function App() {
  const menuRef = useRef(null)

  useEffect(() => {
    const menu = menuRef.current
    const desktop = window.matchMedia('(min-width: 901px)')

    function closeOnOutsideClick(event) {
      if (!menu.contains(event.target)) menu.open = false
    }

    function closeOnEscape(event) {
      if (event.key === 'Escape' && menu.open) {
        menu.open = false
        menu.querySelector('summary').focus()
      }
    }

    function closeOnDesktop(event) {
      if (event.matches) menu.open = false
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)
    desktop.addEventListener('change', closeOnDesktop)
    return () => {
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
      desktop.removeEventListener('change', closeOnDesktop)
    }
  }, [])

  return (
    <>
      <a className="skip-link" href="#contenido">Saltar al contenido</a>
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
        <a className="header-link" href="#coleccion">Encuentra tu amuleto <ArrowIcon /></a>
        <details className="mobile-nav" ref={menuRef}>
          <summary aria-label="Menú principal">
            <span></span><span></span>
          </summary>
          <nav aria-label="Navegación móvil" onClick={(event) => {
            if (event.target.closest('a')) menuRef.current.open = false
          }}>
            <a href="#coleccion">Colección</a>
            <a href="#manifiesto">Nuestra esencia</a>
            <a href="#cobre">El cobre</a>
            <a href="#contacto">Ayuda para elegir</a>
          </nav>
        </details>
      </header>

      <main id="contenido" tabIndex="-1">
        <section className="hero" id="inicio" aria-labelledby="hero-title">
          <div className="hero-image" role="img" aria-label="Joyería artesanal en tonos cálidos sobre una superficie natural">
            <div className="hero-shade"></div>
          </div>
          <div className="hero-copy">
            <p className="eyebrow hero-eyebrow"><span></span> Hecho para estar cerca</p>
            <h1 id="hero-title">Un vínculo<br />para volver a ti.</h1>
            <p className="hero-description">Accesorios de cobre diseñados como rituales diarios de amor propio.</p>
            <a className="button button-light" href="#coleccion">Explorar colección <ArrowIcon /></a>
          </div>
          <div className="hero-element" aria-label="Cobre, elemento químico Cu">
            <span>29</span>
            <strong>Cu</strong>
            <small>Cobre</small>
          </div>
          <div className="hero-caption"><span>Joyería consciente</span><span>La calidez de lo esencial</span></div>
        </section>

        <section className="collection section-wrap" id="coleccion">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Pequeños gestos, grandes vínculos</p>
              <h2>Piezas para <em>volver a ti.</em></h2>
            </div>
            <a className="text-link collection-link" href="#contacto">Ayuda para elegir <ArrowIcon /></a>
          </div>
          <p className="collection-description">Explora las cuatro piezas de nuestra colección. Abre sus detalles para consultar por la que más conecte contigo.</p>
          <div className="product-grid">
            {products.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
          <p className="collection-note">Fotografías referenciales de cada categoría. El diseño, material, precio y disponibilidad de la pieza final se confirman al consultar.</p>
        </section>

        <section className="intro section-wrap" id="manifiesto">
          <p className="eyebrow">Una pausa consciente</p>
          <h2>Volver a ti también<br />puede ser <em>un ritual.</em></h2>
          <p className="intro-copy">En un mundo lleno de prisa, VÍNCULO nace para acompañarte de vuelta a lo que importa. Cada pieza es un gesto tangible de amor propio, una invitación a habitar tu presente con intención.</p>
          <a className="text-link" href="#cobre">Descubre nuestra esencia <ArrowIcon /></a>
          <span className="intro-mark" aria-hidden="true"></span>
        </section>

        <section className="copper-story" id="cobre">
          <div className="story-image" role="img" aria-label="Fotografía referencial de collares en tonos cálidos"></div>
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
          <a className="text-link" href="#contacto">Conversemos <ArrowIcon /></a>
        </section>

        <section className="newsletter" id="newsletter">
          <div>
            <p className="eyebrow">Próximamente</p>
            <h2>Inspira tu <em>bandeja.</em></h2>
            <p>Estamos preparando nuestras novedades. La suscripción todavía no está disponible y no recogemos correos desde esta página.</p>
          </div>
          <div className="contact-card" id="contacto">
            <h3>Te ayudamos a elegir</h3>
            <p>Cuéntanos qué pieza te interesa y consulta sus detalles por correo, sin compromiso.</p>
            <a className="button button-dark" href={`mailto:${contactEmail}`}>Escríbenos <ArrowIcon /></a>
            <p className="email-help">Se abrirá tu aplicación de correo. Si no abre, escribe a <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
          </div>
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
            <a href={`mailto:${contactEmail}`}>Escríbenos</a>
          </div>
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
