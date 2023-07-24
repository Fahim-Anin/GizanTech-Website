import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home';
import Projects from './Pages/Projects/Projects';
import Team from './Pages/Team/Team';
import Registration from './Pages/Registration/Registration';
// import { MessengerChat } from "react-messenger-chat-plugin";
import Apply from './Pages/Apply/Apply';
import Member from './Pages/Login/Member';
import Admin from './Pages/Login/Admin';
import Dashboard from './Pages/Admin/Dashboard';
import { EmployeeInfo } from './Pages/Admin/EmployeeInfo';
import Manage from './Pages/Admin/Manage';
import Profile from './Pages/Admin/Profile';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/registration" element={<Registration />}></Route>
          <Route exact path="/projects" element={<Projects />}></Route>
          <Route exact path="/team" element={<Team />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/apply/:id" element={<Apply />}></Route>
          <Route exact path="/memberlogin" element={<Member/>}></Route>
          <Route exact path="*" element={<Home />}></Route>
         {/* ADMIN ROUTE   */}
          <Route exact path="/admin" element={<Admin />}></Route>
          <Route exact path="/adminpanel/" element={<Manage />}></Route>
          <Route exact path="/adminpanel/empinfo" element={<EmployeeInfo />}></Route>
          <Route exact path="/adminpanel/empinfo/profile/:id" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
