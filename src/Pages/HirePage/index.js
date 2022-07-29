import React, { Fragment, useState, useEffect } from "react";
import styles from "./Hire.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Header from "../../Components/module/Header/Header";
import Footer from "../../Components/module/Footer/Footer";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { companyAction } from "../../Configs/redux/actions/companyAction";
import { createHire } from "../../Configs/redux/actions/hireActions";
import { detailEmployeeAction } from "../../Configs/redux/actions/detailEmployeeAction";
import photo from './noimage.jpg'

const Hire = () => {
  const dispatch = useDispatch();
  // company
  const {
    company: { data: company },
  } = useSelector((state) => state);
//   console.log(company[0].idcompany);
  const token = localStorage.getItem("token");
  useEffect(() => {
    dispatch(companyAction(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // employee
  useEffect(() => {
    dispatch(detailEmployeeAction(idHire));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { idHire } = useParams();
  const {
    detailEmployee: { data },
  } = useSelector((state) => state);

//   console.log(data.employee[0].skill);
  const [fullname, setFullname] = useState();
  const [email, setEmail] = useState();
  const [hp, setHp] = useState();
  const [deskripsi, setDeskripsi] = useState();
  const [tujuan, setTujuan] = useState();

  // create Hire
  const navigate = useNavigate();
  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      fullname,
      email,
      hp,
      deskripsi,
      tujuan,
      idemployee : idHire,
      idcompany : company.idcompany
    }
    dispatch(createHire(data, navigate));
    Swal.fire({
      icon: "success",
      title: "Berhasil mengupload ",
      text: `hire`,
    });
  };

  return (
    <Fragment>
      <Header />
      <div className={styles.WrapperProfil}>
        <div className={styles.imgProfil}>
          <img
            src={data.employee.length > 0 ? data.employee[0].image_profil : photo}
            width="160px"
            height="160px"
            alt=""
            style={{ borderRadius: "50%" }}
          />
        </div>
        <div className={styles.Content}>
          <p className={styles.CompanyName}>
            {data.employee.length > 0 ? data.employee[0].fullname : ""}
          </p>
          <p className={styles.CompanyRole}>
            {data.employee.length > 0 ? data.employee[0].jobs : ""}
          </p>
          <p className={styles.WrapperLoct}>
            <FontAwesomeIcon className={styles.MapsIcon} icon={faLocationDot} />{" "}
            <span className={styles.CompanyAdress}>
              {data.employee.length > 0 ? data.employee[0].address : ""}
            </span>
          </p>
          <p className={styles.Text}>
            {data.employee.length > 0
              ? data.employee[0].description
              : "BELUM ADA DESKRIPSI"}
          </p>
          <p className={styles.Text2}>Skill</p>
          <div className={styles.BoxRectangleSkill}>
            {data.employee.length > 0
              ? data.employee[0].skill?.map((skills) => (
                  <ul className={styles.List}>
                    <li className={styles.RectangleSkill}>
                      <p className={styles.TextSkill}>{skills}</p>
                    </li>
                  </ul>
                ))
              : "TIDAK ADA SKILL"}
          </div>
          <div className={styles.Form}>
            <p className={styles.TextHead}>Hubungi Louis Tomlinson</p>
            <p className={styles.TextDescript}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
              euismod ipsum et dui rhoncus auctor.
            </p>
          </div>
          <form action="">
            <div className={styles.wrapperProject}>
              <p>Tujuan tentang pesan ini</p>
              <select
                className={styles.ProjectOption}
                value={tujuan}
                name="tujuan"
                onChange={(e) => setTujuan(e.target.value)}
              >
                <option value="Project">Project</option>
                <option value="Freelance">freelance</option>
                <option value="Desain">Desain</option>
                <option value="Riset">Riset</option>
                <option value="Software">Software</option>
              </select>
            </div>
            <div className={styles.wrapperFullName}>
              <p>Nama Lengkap</p>
              <input
                type="text"
                name="fullname"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
                className={styles.FormInput}
                placeholder="Masukan nama lengkap"
              />
            </div>
            <div className={styles.wrapperEmail}>
              <p>Email</p>
              <input
                type="text"
                className={styles.FormInput}
                placeholder="Masukan email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.wrapperNoHp}>
              <p>Nomor Handphone</p>
              <input
                type="text"
                name="hp"
                value={hp}
                onChange={(e) => setHp(e.target.value)}
                className={styles.FormInput}
                placeholder="Masukan nomor handphone"
              />
            </div>
            <div className={styles.wrapperDescript}>
              <p>Deskripsi</p>
              <input
                type="text"
                name="deskripsi"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                className={styles.FormInputDescript}
                placeholder="Deskripsi/jelaskan lebih detail"
              />
            </div>
            <button
              className={`${styles.simpan} btn btn-warning`}
              type="submit"
              onClick={(e) =>onSubmit(e)}
            >
              Simpan
            </button>
          </form>
        </div>
      </div>
      <div className={styles.footer}>
        <Footer />
      </div>
    </Fragment>
  );
};

export default Hire;
