// src/App.js
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Home from './Home';
import Movies from './components/Movies';
import MovieDetails from './components/MovieDetails';
import Cast from './components/Cast';
import Reviews from './components/Reviews';

export function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </ul>
        </nav>

        <hr />

        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movies" exact component={Movies} />
            <Route path="/movies/:id" exact component={MovieDetails} />
            <Route path="/movies/:id/cast" component={Cast} />
            <Route path="/movies/:id/reviews" component={Reviews} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}
