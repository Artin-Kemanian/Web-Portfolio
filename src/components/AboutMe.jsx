function AboutMe() {

    return (
        <div>
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
        </div>
        
    )
}

export default AboutMe