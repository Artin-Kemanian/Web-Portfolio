function Projects() {
    
    return (
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
            <p class="projects-disabled">
                Aclaración: quiero remarcar que los proyectos tienen sus respectivos repositorios, están testeados y funcionales pero por el momento
                no está hecho el deploy como página web para ver el proyecto funcionando y por eso los botones no están habilitados.
                En cuanto pueda hacerlo, quedarán habilitados para verlos y probarlos; de momento aconsejo hacer click derecho sobre
                la imagen de los mismos y visualizar casi a escala real una captura de cada proyecto.
            </p>
        </section>
    )
}

export default Projects