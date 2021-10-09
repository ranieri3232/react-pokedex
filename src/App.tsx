import {Switch, Route, BrowserRouter} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { GenerationPage } from './pages/GenerationPage';
import { Home } from './pages/Home';
import './styles/global.scss';

function App() {
 
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/generation' component={GenerationPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
