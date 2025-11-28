import React from 'react';
import './NosotrosWeb.css'; // Asegúrate de crear este archivo CSS para los estilos

const NosotrosWeb = () => {
  return (
    <div className="nosotros-container">
      <header className="nosotros-header">
        <h1>El Alma de Cada Llama: Nuestra Historia</h1>
        <p>En La Tiendita, cada vela cuenta una historia.</p>
      </header>

      <section className="nosotros-introduccion">
        <div className="introduccion-content">
          <p>En un pequeño taller, entre aromas de cera y esencias, nació un sueño. No era solo el sueño de crear velas, sino de encender momentos, de transformar espacios y de despertar emociones con cada parpadeo. Así comenzó la historia de La Tiendita, con la convicción de que una vela es mucho más que un objeto: es un ritual, un recuerdo, una promesa de bienestar.</p>
          <p>Todo empezó con la pasión de nuestra fundadora, Juana Maria Garcia, por la alquimia de los aromas y su deseo de compartir esa magia con el mundo. Pasamos incontables horas experimentando con diferentes ceras naturales, mechas ecológicas y las más exquisitas fragancias. Cada vela era una obra de arte en proceso, vertida a mano con cuidado y dedicación, asegurándonos de que cada una ofreciera una experiencia sensorial inigualable.</p>
        </div>
        <div className="introduccion-image">
          {/* Aquí puedes colocar una imagen de un taller de velas o alguien trabajando */}
          <img src="../src/images/vela_taller.png" alt="Taller de velas" />
          {/* O si prefieres, podemos generar una aquí: */}
          <p>Imagina un ambiente acogedor con herramientas de fabricación de velas y cera derretida. 
</p>
        </div>
      </section>

      <section className="nosotros-vision-mision">
        <div className="vision-content">
          <h2>Nuestra Visión</h2>
          <p>En La Tiendita, visualizamos un mundo donde la luz y el aroma se unen para crear santuarios personales. Nos esforzamos por ser más que una marca de velas; queremos ser un catalizador para la relajación, la inspiración y el disfrute consciente. Buscamos enriquecer la vida de las personas a través de la belleza simple y profunda de una vela bien hecha.</p>
        </div>
        <div className="mision-content">
          <h2>Nuestra Misión</h2>
          <p>Nuestra misión es crear velas aromáticas de la más alta calidad, utilizando ingredientes sostenibles y procesos artesanales. Nos comprometemos a:</p>
          <ul>
            <li><strong>Artesanía y Calidad:</strong> Cada vela es vertida a mano con amor y atención al detalle, garantizando una combustión limpia y una dispersión de aroma excepcional.</li>
            <li><strong>Sostenibilidad y Respeto:</strong> Elegimos ceras naturales, mechas de algodón orgánico y envases reciclables, minimizando nuestro impacto en el planeta.</li>
            <li><strong>Experiencia Sensorial:</strong> Seleccionamos cuidadosamente fragancias que evocan emociones, recuerdos y sensaciones, transformando tu hogar en un oasis de bienestar.</li>
          </ul>
        </div>
      </section>

      <section className="nosotros-galeria">
        <h2>Nuestras Creaciones</h2>
        <div className="galeria-imagenes">

          <div className="vela-item">
            <img src="../src/images/vela_ejemplo1.png" alt="Vela aromática 1" />

            <p>Aquí tienes una imagen de una vela aromática elegante y minimalista. 
</p>
          </div>
          <div className="vela-item">
            <img src="../src/images/vela_ejemplo2.png" alt="Vela aromática 2" />

            <p>Una vela aromática rústica en un frasco de cerámica, perfecta para un ambiente acogedor. </p>  
          </div>
          <div className="vela-item">
            <img src="../src/images/vela5.jpg" alt="Vela aromática 3" />

            <p>Una vela aromática con un diseño moderno, quizás en un frasco de vidrio oscuro. 
</p>
          </div>
        </div>
      </section>

      <footer className="nosotros-footer">
        <p>Gracias por ser parte de nuestro viaje y por permitirnos encender la magia en tu vida.</p>
      </footer>
    </div>
  );
};

export default NosotrosWeb;