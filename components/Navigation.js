import Link from 'next/link'

function Navigation() {
    return (
        <div>
            <Link href="/">
                <a>Home</a>
            </Link>
            
            <Link href="/about">
                <a>About Me</a>
            </Link>

            <Link href="/contact">
                <a>Contact Me</a>
            </Link>
        </div>
    )
}

export default Navigation
