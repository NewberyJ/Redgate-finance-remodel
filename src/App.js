import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import './App.css';
import Navbar from './components/navbar';
import Aos from 'aos';
import 'aos/dist/aos.css';
import About from './components/pages/About';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';


function App() {
  return (
    <React.Fragment>

    <Router>
    <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/pages/About" exact component={About} />
        <Route path="/pages/Services" exact component={Services} />
        <Route path="/pages/Contact" exact component={Contact} />

      </Switch>

    </Router>

    </React.Fragment>
  );
}

export default App;
