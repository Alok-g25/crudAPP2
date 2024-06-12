import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Navbar from './components/Navbar';
import Home from './components/Home';
import Adduser from './components/Adduser';
import Edituser from './components/Edituser';
import PageNotFound from './components/PageNotFound';
import User from './components/User';




function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/add" element={<Adduser />}/>
        <Route path="/edit/:id" element={<Edituser />}/>
        <Route path="/user/:id" element={<User />}/>
        <Route path="/*" element={<PageNotFound />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
