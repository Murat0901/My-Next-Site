import Navigation from "./Navigation"
import Footer from './Footer'
import Header from './Header'
import Contact from './Contact'
import About from './About'

function Layout ({ children }) {
    return (
        <div>
            <Header />
            <Navigation />
            <main>
                {children}
            </main>
            <About />
            <Contact />
            <Footer />
        </div>
            
    )
}

export default Layout
