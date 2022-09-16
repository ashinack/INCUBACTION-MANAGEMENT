
import './App.css';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Login from './components/Screens/Login/Login';
import Userhome from './components/Screens/Landing/Userhome';
import Register from './components/Screens/Register/Register'
import Mynotes from './components/Screens/Applicationform/Applicationform'
import Adminhome from './components/Screens/Landing/Adminhome';
import Adminlogin from './components/Screens/Login/Adminlogin';
import Applicationform from './components/Screens/Applicationform/Applicationform';
import Header from './components/header/Header';
import Success from './components/success page/Success';
import Adminheader from './components/header/Adminheader';
import Adminrightbar from '../src/components/Screens/Adminrightbar/Adminrightbar'
import Viewcompanydetails from './components/Screens/Viewapplication/Viewcompanydetails';
import Registeredcompany from './components/Screens/Registeredcompanies/Registeredcompany';
import Slot from './components/Screens/Slots/Slot';




const App = () => {
  const user = localStorage.getItem("userInfo")
  return (

    <Router>

      <main>

        <Routes>
          <Route path='/' element={<Userhome />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/notes' element={<Mynotes />}></Route>
          <Route path='/adminHome' element={<Adminrightbar />}></Route>
          <Route path='/admin' element={<Adminlogin />}></Route>
          <Route path='/applicationform' element={<Applicationform />}></Route>
          <Route path='/success' element={<Success />}></Route>
          <Route path='/viewCompanydt/:companyid' element={<Viewcompanydetails />}></Route>
          <Route path='/registeredcompany' element={<Registeredcompany />}></Route>
          <Route path='/slots' element={<Slot />}></Route>

        </Routes>

      </main>
    </Router>

  )
}

export default App;
