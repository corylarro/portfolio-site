import './App.css';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap-social/bootstrap-social.css';
import SiteNav from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom';



function App() {
    return (
        <div className="background">
            <BrowserRouter>
            <SiteNav />
            <Switch>
                <Route path="/about" component={About} />
                <Route exact path="/skills" component={Skills} />
                <Route exact path="/contact" component={Contact} />
                <Redirect to="/about" />
            </Switch>
            <Footer />
            </BrowserRouter>
        </div>
    );
}

export default App;
