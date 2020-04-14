import Navigation from "./Navigation"
import Footer from './Footer'
import Header from './Header'

function Layout ({ children }) {
    return (
        <div>
            <Header />
            <Navigation />
            <main className="container pt-3">
                {children}
            </main>
            <Footer />
        </div>
            
    )
}

export default Layout
