function Navbar() {

    const toggleMenu = () => {
        const ul = document.querySelector("nav ul");
        ul.classList.toggle("show");
    };
    
    return (
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
    )
}

export default Navbar