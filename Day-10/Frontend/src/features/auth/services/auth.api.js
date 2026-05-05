import axios from "axios"

const api = axios.create({
  baseURL: "http://localhost:3000/api/auth",
  withCredentials: true
})

export async function register(username, email, password){
  try {
    const res = await api.post("/register",{
      username,
      email,
      password
    })
    .then(res =>{
      console.log(res.data)
    })
  } catch (error) {
    console.error(error)
  }
}

export async function login(username, password){
  try {
    const res = await api.post("/login",{
      username,
      password
    })
    .then(res =>{
      console.log(res.data)
    })
  } catch (error) {
    console.error(error)
  }
}

export { register, login }
