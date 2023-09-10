import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './Home/Home';
import { Movies } from './Movies/Movies';
import { MovieDetails } from './MovieDetails/MovieDetails';
import { Cast } from './Cast/Cast';
import { Reviews } from './Reviews/Reviews';

export const Routes = () => {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movies" exact component={Movies} />
        <Route path="/movies/:id" exact component={MovieDetails} />
        <Route path="/movies/:id/cast" component={Cast} />
        <Route path="/movies/:id/reviews" component={Reviews} />
      </Switch>
    </div>
  );
};
