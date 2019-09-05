import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Posts from './components/Posts';
import New from './components/New';
import PostsProvider from './components/PostsProvider';
import PostCard from './components/PostCard';

function App() {
  return (
    <PostsProvider>
      <Router>
        <div className="page">
          <Switch>
            <Route path="/posts/new" component={New} />
            <Route path="/posts/:id" component={PostCard} />
            <Route exact path="/" component={Posts} />
          </Switch>
        </div>
      </Router>
    </PostsProvider>
  );
}

export default App;
