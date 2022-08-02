import axios from "axios";
import { companyAction } from "./companyAction";
import Swal from 'sweetalert2'

export const loginUser = (dataForm, navigate) => async (dispatch) => {
  try {
    dispatch({ type: 'USER_LOGIN_PENDING' })
    const result = await axios.post(
      "https://hire-jobs.herokuapp.com/authCompany/login", dataForm
    );
    const user = result.data.data
    const token = result.data.data.token
    localStorage.setItem("token", token);
    localStorage.setItem("refreshToken", user.refreshToken);
    dispatch({ type: 'USER_LOGIN_SUCCESS', payload: user })
    if (result.data.message == "email atau password anda salah") {
      return Swal.fire({
        title: 'Caution!',
        text: 'Email / Password Salah',
        icon: 'warning',
        confirmButtonText: 'Oke'
      })
    }
    Swal.fire({
      title: 'Success!',
      text: 'Login Berhasil',
      icon: 'success',
      confirmButtonText: 'Oke'
    })
    dispatch({ type: "USER_LOGIN_SUCCESS", payload: user });
    dispatch(companyAction(token))
    dispatch({
      type: 'LOGIN_SUCCESS', payload: {
        ...user,
        role: "company"
      }
    })
    navigate('/home')

  } catch (error) {
    console.log(error);
    Swal.fire({
      title: 'Error!',
      text: 'Email / Password Salah',
      icon: 'error',
      confirmButtonText: 'Oke'
    })
  }
}
export const registerUser = (dataForm, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "USER_REGISTER_PENDING" });
    const result = await axios.post(
      `https://hire-jobs.herokuapp.com/authCompany/register`,
      dataForm
    );
    const user = result.data.data;

    localStorage.setItem("token", user.token);
    localStorage.setItem("refreshToken", user.refreshToken);
    dispatch({ type: "USER_REGISTER_SUCCESS", payload: user });
    Swal.fire({
      title: 'Success!',
      text: 'Registrasi Berhasil',
      icon: 'success',
      confirmButtonText: 'Oke'
    })
    navigate("/company/login");
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: 'Error!',
      text: 'Registrasi Gagal',
      icon: 'error',
      confirmButtonText: 'Oke'
    })
  }
};

export const GET_USERS_DETAIL = "GET_USERS_DETAIL";

export const getUserDetail = (id) => {
  return (dispatch) => {
    axios
      .get("https://hire-jobs.herokuapp.com/employee/" + id)
      .then(function (response) {
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          }
        })
      })
      .catch(function (error) {
        dispatch({
          type: GET_USERS_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          }
        })
      })
  }
}