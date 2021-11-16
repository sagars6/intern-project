
import { Home } from './pages/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import{BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Contact from './pages/Contact/Contact';
import Loginpage from './pages/Login/Loginpage';

function App() {
  return (
    <>

   <Router>
    <Switch>
   <Route exact path="/" render={()=><Home/>}/>
   </Switch>
   
   <Switch>
   <Route exact path="/Login" render={()=><Loginpage/>}/>
   </Switch>
   
   <Switch>
   <Route exact path="/Contact" render={()=><Contact/>}/>
   </Switch>
  
  </Router>
    </>
  );
}

export default App;
