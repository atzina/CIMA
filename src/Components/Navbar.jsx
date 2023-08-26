function Navbar() {
  return (
    <header className="menu">
      <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            {/* <img className="icon-nav" src={}></img> */} 
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse div-nav"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link nav-link-blue" href="/">
                  {"Inicio"}
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link nav-link-yellow" href="/servicios">
                  {"Servicios"}
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link nav-link-pink" href="/contacto">
                  {"Contacto"}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}


export default Navbar;