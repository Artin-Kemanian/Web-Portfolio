import './App.css';
import { useEffect } from 'react';

function App() {

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
      <div class="watch">
        <section id="contReloj" class="hora"><p id="pHoras"></p><p>:</p><p id="pMinutos"></p><p>:</p><p id="pSegundos"></p></section>
        <section id="contSaludo" class="saludo"></section>
      </div>

      <div class="socials">
        <a href="https://www.linkedin.com/in/artinkemanian-akb/" target="_blank" ><img src="./icons8-linkedin-circled.gif" alt="Linkedin" loading="lazy" class="socicon" /></a>
        <a href="https://github.com/Artin-Kemanian" target="_blank" ><img src="./icons8-github.gif" alt="Github" class="socicon" /></a>
        <a href="https://www.instagram.com/artukb_5/" target="_blank" ><img src="./icons8-instagram.gif" alt="Instagram" loading="lazy" class="socicon" /></a>
        <a href="Link inhabilitado" target="_blank" ><img src="./icons8-twitter-circled.gif" alt="Twitter" loading="lazy" class="socicon" /></a>
      </div>

      <i class="scroll-up" id="scroll-up" onClick={scrollToTop}>
        <img src="./icons8-upward-arrow.gif" class="socicon up-arrow" alt="" />
      </i>
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

export default App;
