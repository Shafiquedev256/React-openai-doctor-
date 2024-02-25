import axios from "axios"

type User = {
  name:string,
  email:string
} 


export const useSignup = ()=>{
  
  const register = async (info:User)=>{
axios.post("http://localhost:2567/api/user/register",info)
.then(json=>{
  localStorage.setItem("_user_details",JSON.stringify(json.data))
})
  } 
  
  
  return {register}
} 