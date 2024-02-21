import Home from './page/Home';
import Signup from './page/Signup';
import Login from './page/Login';
import Form from './page/Form';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'dayjs/locale/en';
import { Link } from 'react-router-dom';


function App() {
 
  return (
    <Router>
      <div>
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <Link class="nav-link" to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/form">Give me Data</Link>
          </li>
        </ul>
        <section>                              
            <Routes>
              <Route path="/" element={<Login/>}/>
              <Route path="/home" element={<Home/>}/>
              <Route path="/signup" element={<Signup/>}/>
              <Route path="/form" element={<Form/>}/>
            </Routes>                    
        </section>
      </div>
    </Router>
  );
}
 
export default App;