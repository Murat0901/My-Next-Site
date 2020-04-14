import Link from "next/link";

function Navigation() {
  return (
    <div>
      <div className="header-wrapper">
        <Link href="http://localhost:8000/admin">
            <a><button>Yönetim Paneli</button></a>
        </Link>
      </div>
        <nav className="navbar navbar-default my-nav">
          <a className="navbar-brand">Murat Menzilci</a>
          <ul className="nav navbar-right">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/about">
                <a className="nav-link">About Me</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact">
                <a className="nav-link">Contact Me</a>
              </Link>
            </li>
          </ul>
        </nav>
    </div>
  );
}

export default Navigation;
