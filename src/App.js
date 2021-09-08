import './App.css';
import 'bootstrap-social/bootstrap-social.css';
import SiteNav from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Stack from './components/Stack';



function App() {
    return (
        <div>
        <SiteNav />
        <About />
        <Stack />
        <Contact />
        {/* <Projects /> */}
        <Footer />
        </div>
    );
}

export default App;
