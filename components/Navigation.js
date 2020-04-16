import Link from "next/link";
import { FaHome, FaCreativeCommonsBy, FaBookReader, FaPhone } from "react-icons/fa";

function Navigation() {
  return (
    <div>
      <div className="header-wrapper">
        <Link href="http://localhost:8000/admin">
          <a>
            <button className="header-button">Yönetim Paneli</button>
          </a>
        </Link>
      </div>
      <nav className="navbar navbar-default my-nav">
        <a className="navbar-brand">Murat Menzilci</a>
        <ul className="nav navbar-right">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">
                {" "}
                <FaHome /> Home
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/about">
              <a className="nav-link">
                {" "}
                <FaCreativeCommonsBy /> About Me
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/blog">
              <a className="nav-link">
                {" "}
                <FaBookReader /> Blog
              </a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/contact">
              <a className="nav-link"> <FaPhone/> Contact Me</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
