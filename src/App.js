import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import AdminSignIn from './components/AdminSignIn';
import UserSignIn from './components/UserSignIn';
import MovieList from './components/MovieList';
import UserMovieList from './components/UserMovieList';
import AdminMovieManagement from './components/AdminMovieManagement';
import './App.css';

const router = createBrowserRouter([
  {

    path: '/admin-signin',
    
  }
])

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/admin-signin" component={AdminSignIn} />
          <Route path="/user-signin" component={UserSignIn} />
          <Route path="/movies" component={MovieList} />
          <Route path="/user-movies" component={UserMovieList} />
          <Route path="/admin" component={AdminMovieManagement} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
