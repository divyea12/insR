import Login from "./Components/Login"
import Signup from "./Components/Signup";
import ForgetPass from './Components/ForgetPass'
import Feed from './Components/Feed'
import ResetPass from './Components/ResetPass'
import Profile from './Components/Profile'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import AuthProvider from './Context/Auth'
function App() {
  return (
    <div className="App">
      <Router>
            <Routes>
              <Route path="/" element={<Signup/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/forgetPassword" element={<ForgetPass/>}/>
              <Route path="/feed" element={<Feed/>}/>
              <Route path='/resetPassword'element={<ResetPass/>}/>
              <Route path='/profile'element={<Profile/>}/>
            </Routes>
      </Router>
    </div>
  );
}

export default App;
