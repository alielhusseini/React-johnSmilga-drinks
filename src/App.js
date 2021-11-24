import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import Home from './pages/Home';
import Error from './pages/Home';
import About from './pages/About';
import SingleCocktail from './pages/SingleCocktail';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path='/' component={ Home }/>
        <Route path='/about' component={ About }/>
        <Route path='/cocktail/:id' component={ SingleCocktail }/>
        <Route path='*' component={ Error }/>
      </Switch>
    </Router>
  );
}
 
export default App;