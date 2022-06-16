import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom' 
import Login from './Pages/Perekrut/Auth/Login'
import Register from './Pages/Perekrut/Auth/Register'
import ResetPassword from './Pages/Perekrut/Auth/ResetPassword'
import ConfirmPassword from './Pages/Perekrut/Auth/ConfirmPassword'
import LoginConfirm from './Pages/Perekrut/Auth/LoginConfirm'
import RequestReset from './Pages/Perekrut/Auth/RequestReset'
import LoginPekerja from './Pages/Pekerja/Auth/Login'
import RegisterPekerja from './Pages/Pekerja/Auth/Register'
import ProfileRecuiter from './Pages/ProfileRecruiter'
import EditProfilCompany from './Pages/EditProfile/index'
import Hire from './Pages/HirePage'
import LandingPage from './Pages/landingpage/Landingpage';
import Home from './Pages/home/Home';
import Profile from './Pages/profilepekerja/Profile';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/Register" replace="true"/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Register" element={<Register/>}/>
        <Route path="/ResetPassword" element={<ResetPassword/>}/>
        <Route path="/ConfirmPassword" element={<ConfirmPassword/>}/>
        <Route path="/LoginConfirm" element={<LoginConfirm/>}/>
        <Route path="/RequestReset" element={<RequestReset/>}/>
        <Route path="/LoginPekerja" element={<LoginPekerja/>}/>
        <Route path="/RegisterPekerja" element={<RegisterPekerja/>}/>
        <Route path="/ProfileRecuiter" element={<ProfileRecuiter/>}/>
        <Route path="/EditProfilCompany" element={<EditProfilCompany/>}/>
        <Route path="/Hire" element={<Hire/>}/>
        <Route path="/Landingpage" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
