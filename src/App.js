import {BrowserRouter as Router,Route,Routes,Link,NavLink} from 'react-router-dom';
import Home from './com/Home';
import ContactUs from './com/ContactUs';
import AboutUs from './com/AboutUs';
import Login from './com/Login';
import Daschboard from './com/Dashboard';

function App() {
  return (
    <>
    <center>
      <h1>Main</h1>
      </center>
      <Router>
        {/* <nav>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to='/about-us'>AboutUs</Link></li>
            <li><Link to='/contact-us'>ContactUs</Link></li>
          </ul>
        </nav> */}
        <Routes>
          <Route path='/home' element={<Home/>}></Route>
          <Route path='/contact-us' element={<ContactUs/>}></Route>
          <Route path='/about-us' element={<AboutUs/>}></Route>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/login-dash' element={<Daschboard/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
