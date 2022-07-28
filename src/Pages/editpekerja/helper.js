import axios from 'axios'

export const addExperience = async (user, token) => {
  try {
    const config = {
      method: 'post',
      url: 'https://hire-jobs.herokuapp.com/work-experience',
      headers: { "Authorization": `Bearer ${token}` },
      data: user
    }
    const result = await axios(config)
    const data = result.data.data
    return data
  } catch (error) {
    console.log(error)
  }
}

export const addPortofolio = async (porto, token, image) => {
  try {
    let portfolio = new FormData();
    portfolio.append('nameApps', porto.nameapps);
    portfolio.append('respository', porto.repository);
    portfolio.append('type', porto.type);
    portfolio.append('image', image.file);
    const config = {
      method: 'post',
      url: 'https://hire-jobs.herokuapp.com/portfolio',
      headers: { "Authorization": `Bearer ${token}`, 'content-type': 'multipart/form-data' },
      data: portfolio
    }
    const result = await axios(config)
    const data = result.data.data
    return data
  } catch (error) {
    console.log(error)
  }
}

export const deleteExperience = async (id, token) => {
  try {
    const config = {
      method: 'delete',
      url: 'https://hire-jobs.herokuapp.com/work-experience/' + id,
      headers: { "Authorization": `Bearer ${token}` },
    }
    const result = await axios(config)
    const data = result.data.data
    return data
  } catch (error) {
    console.log(error)
  }
}

export const updateProfile = async (user, image, token) => {
  try {
    let profile = new FormData();
    user.fullname && profile.append('fullname', user.fullname);
    user.phone && profile.append('phonenumber', user.phone);
    user.jobs && profile.append('jobs', user.jobs);
    user.work_place && profile.append('work_place', user.work_place);
    user.description && profile.append('description', user.description);
    user.address && profile.append('address', user.address);
    image && profile.append('image', image.file);
    user.instagram  && profile.append('instagram', user.instagram );
    user.github && profile.append('github', user.github);
    user.skill?.length > 0 && user.skill.map(skill => {
      return profile.append('skill', skill)
    })
    const config = {
      method: 'put',
      url: 'https://hire-jobs.herokuapp.com/authEmployee/update-profil',
      headers: { "Authorization": `Bearer ${token}`, 'content-type': 'multipart/form-data' },
      data: profile
    }
    const result = await axios(config)
    const datas = result.data.data
    return datas
  } catch (error) {
    console.log(error)
  }
}


export const deletePortfolio = async (id, token) => {
  try {
    const config = {
      method: 'delete',
      url: 'https://hire-jobs.herokuapp.com/portfolio/' + id,
      headers: { "Authorization": `Bearer ${token}` },
    }
    const result = await axios(config)
    const data = result.data.data
    return data
  } catch (error) {
    console.log(error)
  }
}