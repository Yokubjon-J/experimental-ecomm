import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from "./containers/Header";
import ProductListing from './containers/ProductListing';
import ProductDetail from './containers/ProductDetail';
import ProductComponent from './containers/ProductComponent';

function App() {
  return (
    <div >
      <Router>
        <Header/>
        <Switch>
        <Route path='/' exact component={ProductListing} />
        <Route path='/product/:productId' exact component={ProductDetail} />
        <Route>404</Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
