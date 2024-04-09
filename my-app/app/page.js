import React from 'react';
import Head from 'next/head';
import '../app/styles.css'; 

const metadata = {
  viewport: 'width=device-width, initial-scale=1.0',
  charset: 'UTF-8',
  description: 'Encuentra refacciones de electrodomésticos y servicios técnicos en un solo lugar. Ofrecemos una amplia gama de repuestos para lavadoras, refrigeradores, microondas y más. Además, contamos con servicios de reparación y mantenimiento para ayudarte a mantener tus electrodomésticos en perfecto estado. ¡Explora nuestra selección hoy y mantén tus aparatos funcionando como nuevos',
  ogTitle: 'electrodomésticos',
  ogType: 'Refacciones de electrodomésticos',
  ogImage: '',
  ogUrl: '',
  ogDescription: 'Refacciones de electrodomésticos',
  ogLocal: ''
};

const Page = () => {
  return (
    <div className='background'>
      <Head>
        <meta name="viewport" content={metadata.viewport}></meta>
        <meta charset={metadata.charset}></meta>
        <meta name="description" content={metadata.description}></meta>
        <meta property="og:title" content={metadata.ogTitle}></meta>
        <meta property="og:type" content={metadata.ogType}></meta>
        <meta property="og:image" content={metadata.ogImage}></meta>
        <meta property="og:url" content={metadata.ogUrl}></meta>
        <meta property="og:description" content={metadata.ogDescription}></meta>
        <meta property="og:local" content={metadata.ogLocal}></meta>
        <title>Refaccionaria "Vega"</title>
      </Head>
      {/* Contenido de tu página aquí */}
      <header className="header">
          <img src="/images/icono.jpeg" className="Logo"></img>
          <nav>
              <a href="#">Inicio</a>
              <a href="#">Nosotros</a>
              <a href="#">Productos</a>
              <a href="#">Contacto</a>
          </nav>
      </header>
      <section className="one">
          <div className="content">
              <div className="text-container">
                  <h1>Bienvenidos a Refaccionaria "Vega"</h1>
                  <p>Podrás encontrar <a href="#"><strong>refacciones</strong></a> de los siguientes aparatos:</p>
                  <article className="productos">
                      <ul> 
                          <li><a href="./aparatos/ventilador.html">Ventiladores</a></li>
                          <li><a href="./aparatos/pulidora.html">Pulidoras</a></li>
                          <li><a href="./aparatos/taladros.html">Taladros</a></li>
                          <li><a href="./aparatos/microondas.html">Microondas</a></li>
                          <li><a href="./aparatos/bombas.html">Bombas de agua</a></li>
                      </ul>
                  </article>
              </div>
              <div className="img-container">
                  <img src="./images/icono.jpeg" className="img-body"></img>
              </div>
          </div>
      </section>
      <section>
          <footer className="footer">
              <div>
                  <nav>
                      <ul>
                          <li><a href="#">Inicio</a></li>
                          <li><a href="#">Servicios</a></li>
                          <li><a href="#">Acerca de</a></li>
                          <li><a href="/footer.html">Contacto</a></li>
                      </ul>
                  </nav>
              </div>
          </footer>
      </section>  
    </div>
  );
};

export default Page;
