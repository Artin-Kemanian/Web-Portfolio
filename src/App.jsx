import './App.css';
import { useEffect } from 'react';

function App() {

  const toggleMenu = () => {
    const ul = document.querySelector("nav ul");
    ul.classList.toggle("show");
  };

  useEffect(() => {
    const closeMenu = () => {
      const ul = document.querySelector("nav ul");
      ul.classList.remove("show");
    };

    const navLinks = document.querySelectorAll(".nav-link");
    navLinks.forEach(link => {
      link.addEventListener("click", closeMenu);
    });

    return () => {
      navLinks.forEach(link => {
        link.removeEventListener("click", closeMenu);
      });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  };

  return (
    <div>
      <nav>
        <h1>Artín Kemanian</h1>
        <ul class="navigation">
          <li><a href="#about" class="nav-link">Sobre mí</a></li>
          <li><a href="#skills" class="nav-link">Habilidades</a></li>
          <li><a href="#projects" class="nav-link">Proyectos</a></li>
          <li><a href="#contact" class="nav-link">Contacto</a></li>
        </ul>
        <button class="burger-menu" id="burger-menu" onClick={toggleMenu}>
          <ion-icon class="bars" name="menu-outline"></ion-icon>
        </button>
      </nav>
      
      <div class="reloj">
        <section id="contReloj" class="hora"><p id="pHoras"></p><p>:</p><p id="pMinutos"></p><p>:</p><p id="pSegundos"></p></section>
        <section id="contSaludo" class="saludo"></section>
      </div>

      <section class="hero" id="about">
        <img src="./face_pic.jpg" alt="face-pic" loading="lazy" class="hero-img" />
        <div class="bio animate__animated animate__shakeX">
          <h2 class="bio-title">¡Bienvenido a mi portfolio!</h2>
          <p class="bio-text">
            Soy desarrollador de software full-stack diplomado en 4Geeks Academy
            y manejo diferentes lenguajes y librerías. También soy egresado del
            bachillerato del Liceo Santo Domingo en 2017. A su vez puedo
            desenvolverme con facilidad en inglés y con un nivel intermedio
            de francés.
          </p>
        </div>
      </section>

      <section class="more-about">
        <h2>Más sobre mí</h2>
        <p>
          Trabajé entre julio del 2021 y octubre del 2023 en la empresa Arquifoam
          como Operario de planta.
        </p>
        <p>
          Además me sigo formando cursando la carrera de ingeniería civil (la cual
          comencé en el año 2018) en la Universidad de la República y recientemente
          comencé a cursar la carrera de ingeniería en computación (julio del 2024).
        </p>
      </section>

      <section class="skills" id="skills">
        <h2 class="skill-header">Habilidades</h2>
        <div class="skills-wrapper">
          <div class="first-set animate__animated animate__pulse">
            <img src="./icons8-html-5.svg" alt="" loading="lazy" class="icon icon-card" />
            <img src="./icons8-css3.svg" alt="" loading="lazy" class="icon icon-card" />
            <img src="./icons8-javascript.svg" alt="" loading="lazy" class="icon icon-card" />
          </div>
          <div class="second-set animate__animated animate__pulse">
            <img src="./icons8-bootstrap.svg" alt="" loading="lazy" class="icon icon-card" />
            <img src="./icons8-react-native.svg" alt="" loading="lazy" class="icon icon-card" />
            <img src="./icons8-github.svg" alt="" loading="lazy" class="icon icon-card" />
          </div>
          <div class="second-set animate__animated animate__pulse">
            <img src="./icon-sql.svg" alt="" loading="lazy" class="icon icon-card" />
            <img src="./icons8-python.svg" alt="" loading="lazy" class="icon icon-card" />
          </div>
        </div>
      </section>

      <section class="projects" id="projects">
        <h2 class="projects-title">Algunos de mis proyectos</h2>
        <div class="projects-container">
          <div class="project-container project-card">
            <img src="./YNG-logo.png" alt="your-nomad-guide" loading="lazy" class="project-pic" />
            <h3 class="project-title">Your Nomad Guide</h3>
            <p class="project-details">
              Sitio web que sirve de guía para nómades digitales que quieren saber datos de lugares que desean visitar.
            </p>
            <a href="#" target="_blank" class="project-link">Ver</a>
          </div>
          <div class="project-container project-card">
            <img src="./proyecto-ig.png" alt="instagram-bootstrap" loading="lazy" class="project-pic" />
            <h3 class="project-title">Instagram con Bootstrap</h3>
            <p class="project-details">
              Utilizando Bootstrap, hice una elaboración a modo de réplica de cómo se ve el feed de la versión web.
            </p>
            <a href="#" target="_blank" class="project-link">Ver</a>
          </div>
          <div class="project-container project-card">
            <img src="./sw-blog.png" alt="sw-blog" loading="lazy" class="project-pic" />
            <h3 class="project-title">Star Wars Blog</h3>
            <p class="project-details">
              Blog que contiene toda la información sobre contenido de la saga Star Wars.
            </p>
            <a href="#" target="_blank" class="project-link">Ver</a>
          </div>
        </div>
      </section>

      <section class="contact" id="contact">
        <h2>Contáctame</h2>
        <div class="contact-form-container">
          <div class="contact-form">
            <form action="https://formspree.io/f/xyylnggw" method="POST">
              <div class="form-control">
                <label for="name">Nombre</label>
                <input type="text" id="name" name="sender-name" placeholder="Insertar nombre" class="input-field" required />
              </div>
              <div class="form-control">
                <label for="email">Email</label>
                <input type="email" id="email" name="sender-email" placeholder="Insertar email" class="input-field" required />
              </div>
              <div class="form-control">
                <label for="message">Mensaje</label>
                <textarea id="message" cols="60" rows="10" placeholder="Escriba su mensaje" name="message" class="input-field" required ></textarea>
              </div>
              <input type="submit" value="Submit" id="submit-btn" class="submit-btn" />
            </form>
          </div>
        </div>
      </section>

      <div class="socials">
        <a href="https://www.linkedin.com/in/artin-kemanian/" target="_blank" ><img src="./icons8-linkedin-circled.gif" alt="Linkedin" loading="lazy" class="socicon" /></a>
        <a href="https://github.com/Artin-Kemanian" target="_blank" ><img src="./icons8-github.gif" alt="Github" class="socicon" /></a>
        <a href="https://www.instagram.com/artinkemanian/" target="_blank" ><img src="./icons8-instagram.gif" alt="Instagram" loading="lazy" class="socicon" /></a>
        <a href="#" target="_blank" ><img src="/icons8-twitter-circled.gif" alt="Twitter" loading="lazy" class="socicon" /></a>
      </div>

      <i class="scroll-up" id="scroll-up" onClick={scrollToTop}>
        <img src="./icons8-upward-arrow.gif" class="socicon up-arrow" alt="" />
      </i>

      <footer>
        <div>
          <p>artinkemanian@hotmail.com</p>
        </div>
        
      </footer>
    </div>
  );
}

function ActualizarHora(){
  var fecha = new Date();
  var horas = fecha.getHours();
  var minutos = fecha.getMinutes();
  var segundos = fecha.getSeconds();

  var elementoHoras = document.getElementById("pHoras");
  var elementoMinutos = document.getElementById("pMinutos");
  var elementoSegundos = document.getElementById("pSegundos");
  var pSaludo = document.getElementById("contSaludo");

  elementoHoras.textContent = horas;
  elementoMinutos.textContent = minutos;
  elementoSegundos.textContent = segundos;

  if (minutos <= 9) {
    elementoMinutos.textContent = "0"+minutos;
  }
  if (segundos <= 9) {
    elementoSegundos.textContent = "0"+segundos;
  }

  if (horas >= 7 && minutos >= 1 && horas < 12) {
    pSaludo.textContent = "Buenos días";
  }
  if (horas >= 12 && minutos >= 1 && horas < 19) {
    pSaludo.textContent = "Buenas tardes";
  }
  if (horas >= 19 && minutos >= 1) {
    pSaludo.textContent = "Buenas noches";
  }
}

setInterval(ActualizarHora,1000);

function desaparecerPlaceholder() {
  var noPlaceholder = document.getElementsByName("placeholder");
  var siInput = document.getElementsByTagName("Input")
  var siTextarea = document.getElementsByTagName("Textarea");

  if (siInput || siTextarea != "") {
    noPlaceholder.textContent = ""
  }
}

desaparecerPlaceholder()

export default App;
