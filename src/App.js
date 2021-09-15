import './App.css';
import 'bootstrap-social/bootstrap-social.css';
import SiteNav from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Stack from './components/Stack';
import Projects from './components/Projects';



function App() {
    return (
        <div>
        <SiteNav />
        <About />
        <Stack />
        <Projects />
        <Contact />
        <Footer />
        </div>
    );
}

export default App;
