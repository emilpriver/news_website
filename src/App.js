import React from 'react';
import { Route , Switch, BrowserRouter} from 'react-router-dom';

//components
import Home from './components/home'

console.log(process.env)

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
