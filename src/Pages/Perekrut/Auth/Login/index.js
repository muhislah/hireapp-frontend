import React, { Fragment, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import logincss from './login.module.css'
import BG from '../../../../Images/BG.png'
import Mask from '../../../../Images/Mask.png'
import Mask1 from '../../../../Images/Mask1.png'
import Logo from '../../../../Images/PeworldLogo.png'
import { loginUser } from '../../../../Configs/redux/actions/userAction'
// import Logo2


const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { isLoading } = useSelector((state) => state.auth);
  const [formLogin, setFormLogin] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormLogin({
      ...formLogin,
      [e.target.name]: e.target.value,
    });
};
console.log(formLogin.email)
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser(formLogin, navigate));
  };
  return (
    <Fragment>
      <div className="container-fluid">
        <div className={logincss.Cover}>
          <div className={logincss.wrapperPwImg}>
            <div>
              <div>
                <img src={BG} className={logincss.BG} alt="" />
                <img src={Mask} className={logincss.Mask} alt="" />
                <img src={Mask1} className={logincss.Mask1} alt="" />
              </div>
              <div>
              <img src={Logo} className={logincss.Logo} alt="" />
              <p className={logincss.text}>Peeworld</p>
                <h3 className={logincss.text2}>
                  Temukan developer berbakat & terbaik di berbagai bidang
                  keahlian
                </h3>
                </div>
            </div>
          </div>
          <div className={logincss.Wrapper}>
            <p className={logincss.halo}>Halo, Pewpeople</p>
            <p className={logincss.lorem}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
            <form onSubmit={handleLogin}>
            <div className={logincss.wrapperEmail}>
              <p>Email</p>
              <input type="text" name="email" className={logincss.inpEmail} placeholder="Masukan alamat email" value={formLogin.email} onChange={handleChange}/>
              </div>
            <div className={logincss.wrapperPassword}>
              <p>Kata Sandi</p>
              <input type="password" name="password" placeholder="Masukan kata sandi" className={logincss.inpEmail} value={formLogin.password} onChange={handleChange} />
              <p className={logincss.forgot}><Link to='../ResetPassword' />Lupa kata sandi?</p>
              <button className={logincss.btnLogin}>Masuk</button>
              <p className={logincss.textAkhir}>
                Anda belum punya akun?{" "}
                <a href="../Register" className={logincss.daftar}>Daftar disini</a>
              </p>
            </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;