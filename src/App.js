import React from 'react';
import { Route , Switch, BrowserRouter} from 'react-router-dom';

//components
import Home from './components/home'

//dotenv
require('dotenv').config()

function App() {
  return (
    <main role="document">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}

export default App;
