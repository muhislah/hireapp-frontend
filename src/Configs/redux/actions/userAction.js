import axios from "axios";

export const loginUser = (dataForm, navigate)=> async(dispatch)=>{
    try {
        dispatch({type: 'USER_LOGIN_PENDING'})
        const result = await axios.post(
            "https://hire-jobs.herokuapp.com/authCompany/login", dataForm
        );
      const user = result.data.data
      // console.log(result.data.data.token);
      const token = result.data.data.token
        localStorage.setItem("token", token);
        localStorage.setItem("refreshToken", user.refreshToken);
        dispatch({type: 'USER_LOGIN_SUCCESS', payload: user})
        alert("Anda berhasil Login");

       dispatch({
         type: "USER_LOGIN_SUCCESS",
         token: token.data,
         payload: user,
       });
        navigate('/')

    } catch (error) {
        console.log(error);
        alert("Password dan email salah");
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
      navigate("/login");
      alert("Anda berhasil daftar")
    } catch (error) {
      console.log(error);
      alert("User sudah terdaftar")
    }
  };
  
