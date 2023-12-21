const Navbar = () => (
  <nav className="navbar navbar-expand-sm bg-dark navbar-dark p-3">
    <div className="container-lg">
      <a className="navbar-brand text-uppercase" href="#">
        AuroraTours
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link" href="#packages">
              Packages
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#FAQ">
              FAQ
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
