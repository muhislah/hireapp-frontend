import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Login from './Pages/Perekrut/Auth/Login'
import Register from './Pages/Perekrut/Auth/Register'
import LoginPekerja from './Pages/Pekerja/Auth/Login'
import RegisterPekerja from './Pages/Pekerja/Auth/Register'
import ProfileRecuiter from './Pages/ProfileRecruiter'
import EditProfilCompany from './Pages/EditProfile'
import Hire from './Pages/HirePage'
import LandingPage from './Pages/landingpage/Landingpage';
import Home from './Pages/home/Home';
import Profile from './Pages/profilepekerja/Profile';
import Portfolios from './Pages/profilepekerja/page/Portfolios';
import Experience from './Pages/profilepekerja/page/Experience';
import NotFound from './Pages/NotFound/NotFound';
import Edit from './Pages/editpekerja/Edit';
import MyProfile from './Pages/myprofile/Profile';
import MyPortfolios from './Pages/myprofile/page/Portfolios';
import MyExperience from './Pages/myprofile/page/Experience';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/" replace="true"/>}/>
        <Route path="/company/login" element={<Login/>}/>
        <Route path="/company/register" element={<Register/>}/>
        <Route path="/login" element={<LoginPekerja/>}/>
        <Route path="/register" element={<RegisterPekerja/>}/>
        <Route path="/company/profile" element={<ProfileRecuiter/>}/>
        <Route path="/company/profile/edit" element={<EditProfilCompany/>}/>
        <Route path="/company/hire" element={<Hire/>}/>
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/employee/:idemployee" element={<Profile />}>
          <Route index element={<Portfolios />} />
          <Route path="portfolio" element={<Portfolios />} />
          <Route path="experience" element={<Experience />} />
        </Route>
        <Route path="/profile" element={<MyProfile />}>
          <Route index element={<MyPortfolios />} />
          <Route path="portfolio" element={<MyPortfolios />} />
          <Route path="experience" element={<MyExperience />} />
        </Route>
        <Route path='/company/hire/:idHire' element={<Hire />} />
        <Route path="/edit" element={<Edit />} />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
