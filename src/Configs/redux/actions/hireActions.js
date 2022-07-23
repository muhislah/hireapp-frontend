import axios from "axios";
import Swal from "sweetalert2";

export const createHire = (data, navigate) => async (dispacth) => {
  try {
    const token = localStorage.getItem("token");
    const createdAt = await axios.post(
      `https://hire-jobs.herokuapp.com/hirejob`,
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(createdAt);
    dispacth({ type: "HIRE_SUCCESS", payload: createdAt });
    Swal.fire({
      icon: "success",
      title: "Berhasil Memesan",
      text: `Selamat !!`,
    });
    navigate("/home");
  } catch (error) {
    dispacth({ type: "HIRE_ERROR", payload: error.response });
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "data yang anda inputkan salah",
    });
  }
};
