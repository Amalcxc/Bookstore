import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/cofigureStore';
import Nav from './nav';
import categories from './categories';
import Books from './displayBooks';


function App() {
  return (
    <Provider store={store}>
    <Router>
       <Nav />
       <Switch>
         <Route path='/' exact component={Books} />
         <Route path='/categories' component={categories} />
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
