import logo from './logo.svg';
import './App.css';
import { Wrap } from './component/Wrap';
import Appbar from './component/Appbar';
import {BrowserRouter,Route,Routes, Switch} from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Project from './component/Project';
import Whole from './component/Whole';
function App() {
  return ( 
<>
<div className="App">
 <BrowserRouter>
 <Appbar></Appbar>
 <Switch>
   <Route exact path='/' component={Whole} />
   <Route exact path='/about' component={About}/>
   <Route exact path='/contact' component={Contact} />
   <Route exact path='/project' component={Project} />
   </Switch>
 </BrowserRouter>  
 </div>
</>


  );
}

export default App;
