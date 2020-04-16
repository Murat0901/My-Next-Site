import Navigation from "./Navigation"
import Footer from './Footer'
import Header from './Header'

function Layout ({ children }) {
    return (
        <div>
            <Header />
            <Navigation />
            <main>
                {children}
            </main>
            <Footer />
        </div>
            
    )
}

export default Layout
