import './App.css';
import { Switch, Route } from 'react-router-dom'

import MainPage from './pages/mainPage/mainPage';
import Dashboard from './pages/dashboard/dashboard';
import "./global.scss"
import Zayavka from './components/zayavka/zayavka';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/zayavka" component={Zayavka} />
      </Switch>
    </div>
  );
}

export default App;
