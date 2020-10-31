import React from 'react';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchPage from './SearchPage';

import AdSense from 'react-adsense';

function App() {
  return (
    <div className='app'>
      <Router>
        <Header />

        <Switch>
          <Route path='/search'>
            <SearchPage />
          </Route>

          <Route path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
      {/* // auto full width responsive ads
      <AdSense.Google
        client='ca-pub-7292810486004926'
        slot='7806394673'
        style={{ display: 'block' }}
        format='auto'
        responsive='true'
        layoutKey='-gw-1+2a-9x+5c'
      /> */}
    </div>
  );
}

export default App;
