import React, { Fragment, useState } from "react";
import styles from "./Register.module.css";
import BG from "../../../../Images/BG.png";
import Mask from "../../../../Images/Mask.png";
import Mask1 from "../../../../Images/Mask1.png";
import Logo from "../../../../Images/PeworldLogo.png";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../../../../Configs/redux/actions/userAction";

const RegisterPekerja = ({ label, ...props }) => {
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [register, setRegister] = useState({
    fullname: "",
    email: "",
    company: "",
    position: "",
    phonenumber: "",
    password: "",
    confirmPassword: "",
  });

  if (auth === register) {
    alert("upsss");
  }
  console.log(auth);
  const handleChange = (e) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser(register, navigate));
  };
  //  if (auth.email) return navigate("/login");

  return (
    <Fragment>
      <div className="container-fluid">
        <div className={styles.Cover}>
          <div className={styles.wrapperPwImg}>
          <div>
              <div>
                <img src={BG} className={styles.BG} alt="" />
                <img src={Mask} className={styles.Mask} alt="" />
                <img src={Mask1} className={styles.Mask1} alt="" />
              </div>
              <div>
              <img src={Logo} className={styles.logopee} alt="" />
              <p className={styles.peeworld}>Peeworld</p>
                <h3 className={styles.text2}>
                  Temukan developer berbakat & terbaik di berbagai bidang
                  keahlian
                </h3>
                </div>
            </div>
          </div>
          <div className={styles.wrapper}>
            <p className={styles.halo}>Halo, Pewpeople</p>
            <p className={styles.lorem}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
          </div>
            <form onSubmit={handleRegister}>
              <div className={styles.wrapperFullName}>
                <p>Nama</p>
                <input
                  type="text"
                  {...props}
                  name="fullname"
                  className={styles.inpEmail}
                  placeholder="Masukan nama lengkap"
                  value={register.fullname}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.wrapperEmail}>
                <p>Email</p>
                <input
                  type="text"
                  {...props}
                  name="email"
                  className={styles.inpEmail}
                  placeholder="Masukan alamat email"
                  value={register.email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.wrapperCompanyName}>
                <p>Perusahaan</p>
                <input
                  type="text"
                  {...props}
                  name="company"
                  className={styles.inpEmail}
                  placeholder="Masukan nama perusahaan"
                  value={register.company}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.wrapperPosisi}>
                <p>Jabatan</p>
                <input
                  type="text"
                  {...props}
                  name="position"
                  className={styles.inpEmail}
                  placeholder="Posisi di perusahaan anda"
                  value={register.position}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.wrapperNoHp}>
                <p>No. Handphone</p>
                <input
                  type="text"
                  {...props}
                  name="phonenumber"
                  className={styles.inpEmail}
                  placeholder="Masukan No. Handphone"
                  value={register.phonenumber}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.wrapperPassword}>
                <p>Kata Sandi</p>
                <input
                  type="password"
                  {...props}
                  name="password"
                  className={styles.inpEmail}
                  placeholder="Masukan kata sandi"
                  value={register.password}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.wrapperConfPassword}>
                <p>Konfirmasi Kata Sandi</p>
                <input
                  type="password"
                  {...props}
                  className={styles.inpEmail}
                  placeholder="Konfirmasi kata sandi"
                />
              </div>
              <p className={styles.forgot}>Lupa kata sandi?</p>
              <button className={styles.btnLogin}>Daftar</button>
              <p className={styles.textAkhir}>
                Anda belum punya akun?{" "}
                <span className={styles.daftar}>Masuk disini</span>
              </p>
            </form>
          </div>
        </div>
    </Fragment>
  );
};

export default RegisterPekerja;
