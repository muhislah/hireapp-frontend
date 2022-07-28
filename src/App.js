/* eslint-disable no-unused-vars */
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
import { IsCompany, IsEmployee, IsLogin, RemoveToken } from './Configs/redux/route/privateRoute';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/landingpage" replace="true"/>}/>
        <Route path="/company/login" element={ <RemoveToken><Login/></RemoveToken>}/>
        <Route path="/company/register" element={<RemoveToken><Register/></RemoveToken>}/>
        <Route path="/login" element={<RemoveToken><LoginPekerja /></RemoveToken>}/>
        <Route path="/register" element={<RemoveToken><RegisterPekerja/></RemoveToken>}/>
        <Route path="/company/profile" element={<IsCompany><ProfileRecuiter/></IsCompany>}/>
        <Route path="/company/profile/edit" element={<IsCompany><EditProfilCompany/></IsCompany>}/>
        <Route path="/company/hire" element={<IsCompany><Hire/></IsCompany>}/>
        <Route path="/landingpage" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/employee/:idemployee" element={<Profile />}>
          <Route index element={<Portfolios />} />
          <Route path="portfolio" element={<Portfolios />} />
          <Route path="experience" element={<Experience />} />
        </Route>
        <Route path="/profile" element={<IsEmployee><MyProfile /></IsEmployee>}>
          <Route index element={<MyPortfolios />} />
          <Route path="portfolio" element={<MyPortfolios />} />
          <Route path="experience" element={<MyExperience />} />
        </Route>
        <Route path='/company/hire/:idHire' element={<IsCompany><Hire /></IsCompany>} />
        <Route path="/edit" element={<IsEmployee><Edit /></IsEmployee>} />
        <Route path="*" element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
