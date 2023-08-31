import './Navbar.css';
import Icon from '../assets/logo_s_nd.png';

function Navbar() {
  return (
    <header className="menu">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">

          <a className="navbar-brand" href="/"><img className="icono-inicio" src={Icon}></img></a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/servicios">SERVICIOS</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="/contacto">CONTACTO</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}


export default Navbar;