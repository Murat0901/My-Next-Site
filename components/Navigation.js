import Link from "next/link";

function Navigation() {
  return (
      <div className="my-navbar">
        <div className="my-container">
          <h2 className="my-brand">Murat Menzilci</h2>
          <ul className="my-nav">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default Navigation;
