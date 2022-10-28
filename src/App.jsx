import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import React from 'react';
import './styles.css';
import { Navbar } from './components/navbar';

const App = () => (
  <BrowserRouter>
    <Navbar />

    <div>
      <Route exact path="/" component={Home} />
    </div>
  </BrowserRouter>
);

export default App;
