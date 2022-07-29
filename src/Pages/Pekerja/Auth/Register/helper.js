import axios from "axios"


export const register = async (user) => {
  var config = {
    method: 'post',
    url: 'https://hire-jobs.herokuapp.com/authEmployee/register',
    data : user
  }
  try {
    const result = await axios(config)
    console.log(result)
    return result.data
  } catch (error) {
    console.log(error)
  }
}