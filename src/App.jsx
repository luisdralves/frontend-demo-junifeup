import { BrowserRouter, Route } from 'react-router-dom';
import { Navbar } from './components/navbar';
import Home from './pages/home';
import Feed from './pages/feed';
import PostDetails from './pages/post';
import React from 'react';
import Share from './pages/share';
import './styles.css';
import PostEdit from './pages/edit';

const App = () => (
  <BrowserRouter>
    <div>
      <Navbar />

      <Route exact path="/" component={Home} />
      <Route path="/feed" component={Feed} />
      <Route path="/post/:postId" component={PostDetails} />
      <Route path="/edit-post/:postId" component={PostEdit} />
      <Route path="/share" component={Share} />
    </div>
  </BrowserRouter>
);

export default App;
