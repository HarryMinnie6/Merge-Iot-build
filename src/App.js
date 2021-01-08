import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {AnimatePresence, motion} from 'framer-motion'
import ComingSoon from './Pages/ComingSoonPage/ComingSoon';

function App() {
  return (
    <Router>
    <AnimatePresence>
      <Switch>
       

        <Route path='/'>
        <ComingSoon />
        </Route>
      </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
