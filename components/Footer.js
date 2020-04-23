import { FaGithub, FaTwitter,FaLinkedin } from "react-icons/fa";
import Link from "next/link";

function footer() {
  const size = 35;
  return (
    <div className="footer">
      <p>Design by Murat Menzilci with Next.js</p>
      <ul>
        <li>
          <Link href="https://github.com/Murat0901">
            <a>
              <FaGithub size={size} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://twitter.com/menzilcim">
            <a>
              <FaTwitter size={size} />
            </a>
          </Link>
        </li>
        <li>
          <Link href="https://www.linkedin.com/in/murat-menzilci-223823a8">
            <a>
              <FaLinkedin size={size} />
            </a>
          </Link>
        </li>
      </ul>
      <p>V 0.0.1</p>
    </div>
  );
}

export default footer;
