import { Link } from 'react-router-dom';

function Navbar() {

    const toggleMenu = () => {
        const ul = document.querySelector("nav ul");
        ul.classList.toggle("show");
    };

    return (
        <nav>
            <h1>Artín Kemanian</h1>
            <ul className="navigation">
                <li><Link to="/Web-Portfolio/abilities" className="nav-link">Habilidades</Link></li>
                <li><Link to="/Web-Portfolio/projects" className="nav-link">Proyectos</Link></li>
                <li><Link to="/Web-Portfolio/contact" className="nav-link">Contacto</Link></li> {/* Cambia a Link */}
            </ul>
            <button className="burger-menu" id="burger-menu" onClick={toggleMenu}>
                <ion-icon className="bars" name="menu-outline"></ion-icon>
            </button>
        </nav>
    )
}

export default Navbar;
