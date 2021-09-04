import './App.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import SiteNav from './components/Navbar';
import About from './components/About';



function App() {
    return (
        <div className="background">
            <SiteNav />
            <About />
        </div>
    );
}

export default App;
