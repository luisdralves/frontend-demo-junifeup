import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import React from 'react';
import './styles.css';

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
    </div>
  </BrowserRouter>
);

export default App;
