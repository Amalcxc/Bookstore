import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './nav'
import categories from './categories'
import Books from './books'

function App() {
  return (
    <Router>
       <Nav />
       <Switch>
         <Route path='/' exact component={Books} />
         <Route path='/categories' component={categories} />
      </Switch>
    </Router>
  );
}

export default App;
