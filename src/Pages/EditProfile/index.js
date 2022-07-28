import React, { Fragment, useState, useEffect } from "react";
import styles from "./EditProfile.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Header from "../../Components/Module/Header/Header";
import Footer from "../../Components/Module/Footer/Footer";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const EditProfilCompany = () => {
  const [companyfield, setCompanyfield] = useState("");
  const [address, setAddress] = useState("");
  const [companydescription, setCompanydescription] = useState("");
  const [email, setEmail] = useState("");
  const [instagram, setInstagram] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [image, setImage] = useState(
    "http://res.cloudinary.com/dwdpjepcr/image/upload/v1658966493/w1isr3ad8obsmw3lzdj1.jpg"
  );
  const [company, setCompany] = useState("");
  const [phonenumber, setPhonenumber] = useState("");
  const [imagePreview, setImagePreview] = useState(
    image ||
      "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Kurt&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale"
  );

  const onImageUpload = (e) => {
    const file = e.target.files[0];
    setImage(file);
    console.log(file);
    setImagePreview(URL.createObjectURL(file));
  };
  const navigate = useNavigate();
  const onSubmit = (e) => {
    const token = localStorage.getItem("token");
    e.preventDefault();
    const data = new FormData();
    data.append("companyfield", companyfield);
    data.append("companydescription", companydescription);
    data.append("email", email);
    data.append("address", address);
    data.append("instagram", instagram);
    data.append("image", image);
    data.append("linkedin", linkedin);
    data.append("phonenumber", phonenumber);
    data.append("company", company);
    e.preventDefault();
    axios
      .put(
        `${process.env.REACT_APP_BACKEND_API}/authCompany/update-profil`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          "Content-Type": "multipart/form-data",
        }
      )
      .then((res) => {
        console.log(res);
        navigate("/profilerecruiter");
        Swal.fire({
          icon: "success",
          title: "Berhasil mengupdate users",
          text: `username : ${company}`,
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "data yang anda inputkan salah",
        });
        console.log(err);
      });
  };
  useEffect(() => {
    datas();
  }, []);
  const datas = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_API}/authCompany/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log(response.data.data[0].image);
    setCompanyfield(response.data.data[0].companyfield);
    setAddress(response.data.data[0].address);
    setCompanydescription(response.data.data[0].companydescription);
    setEmail(response.data.data[0].email);
    setInstagram(response.data.data[0].instagram);
    setLinkedin(response.data.data[0].linkedin);
    setImagePreview(
      response.data.data[0].image ||
        "https://avataaars.io/?avatarStyle=Circle&topType=ShortHairShortFlat&accessoriesType=Kurt&hairColor=BlondeGolden&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Pale"
    );
    setPhonenumber(response.data.data[0].phonenumber);
    setCompany(response.data.data[0].company);
  };
  return (
    <Fragment>
      <div className={styles.Container}></div>
      <Header />
      <div className={styles.WrapperProfil}>
        <div className={styles.imgProfil}>
          <img src={imagePreview} alt="" className={styles.profiles} />
        </div>
        <div className={styles.Edit}>
          <label htmlFor="photo" className={styles.faPencil}>
            <FontAwesomeIcon icon={faPencil} /> Edit
          </label>
          <input
            type="file"
            id="photo"
            onChange={(e) => onImageUpload(e)}
            names="image"
            hidden
            gambar={imagePreview}
          />
        </div>
        <div className={styles.Content}>
          <p className={styles.CompanyName}>{company}</p>
          <p className={styles.CompanyRole}>
            {companyfield ? companyfield : "belum ada bidang"}
          </p>
          <p className={styles.WrapperLoct}>
            <FontAwesomeIcon className={styles.MapsIcon} icon={faLocationDot} />{" "}
            <span className={styles.CompanyAdress}>
              {address ? address : "belum ada alamat"}
            </span>
          </p>
        </div>
        <button onClick={onSubmit} type="submit" className={styles.BtnSave}>
          Simpan
        </button>
        <Link to="/profilerecruiter">
          <button className={styles.BtnCancel}>Batal</button>
        </Link>
      </div>
      <form action="">
        <div className={styles.Container2}>
          <h3 className={styles.textHead}>Data Diri</h3>
          <div className={styles.Line}></div>
          <div className={styles.wrapperCompanyName}>
            <p>Nama Perusahaan</p>
            <input
              type="text"
              className={styles.FormInput}
              value={company}
              name="company"
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Masukan nama perusahaan"
            />
          </div>
          <div className={styles.wrapperCompanyRole}>
            <p>Bidang</p>
            <input
              type="text"
              value={companyfield}
              name="companyfield"
              onChange={(e) => setCompanyfield(e.target.value)}
              className={styles.FormInput}
              placeholder="Masukan bidang perusahaan ex : Financial"
            />
          </div>
          <div className={styles.wrapperCity}>
            <p>Kota</p>
            <input
              type="text"
              className={styles.FormInput}
              placeholder="Masukan kota"
              value={address}
              name="address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className={styles.wrapperDescript}>
            <p>Deskripsi Singkat</p>
            <input
              type="text"
              value={companydescription}
              name="companydescription"
              onChange={(e) => setCompanydescription(e.target.value)}
              className={styles.FormInputDescript}
              placeholder="Tuliskan deskripsi singkat"
            />
          </div>
          <div className={styles.wrapperEmail}>
            <p>Email</p>
            <input
              type="text"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className={styles.FormInput}
              placeholder="Masukan email"
            />
          </div>
          <div className={styles.wrapperInstagram}>
            <p>Instagram</p>
            <input
              type="text"
              className={styles.FormInput}
              value={instagram}
              name="instagram"
              onChange={(e) => setInstagram(e.target.value)}
              placeholder="Masukan nama instagram"
            />
          </div>
          <div className={styles.wrapperNoTelepon}>
            <p>Nomor Telepon</p>
            <input
              type="text"
              className={styles.FormInput}
              value={phonenumber}
              name="phonenumber"
              onChange={(e) => setPhonenumber(e.target.value)}
              placeholder="Masukan nomor telepon"
            />
          </div>
          <div className={styles.wrapperLinkedIn}>
            <p>LinkedIn</p>
            <input
              type="text"
              value={linkedin}
              name="linkedin"
              onChange={(e) => setLinkedin(e.target.value)}
              className={styles.FormInput}
              placeholder="Masukan nama LinkedIn"
            />
          </div>
        </div>
      </form>
      <Footer />
    </Fragment>
  );
};

export default EditProfilCompany;
