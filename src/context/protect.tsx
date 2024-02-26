import {userAuth} from "./userAuth"
import {Navigate} from "react-router-dom" 
import {useEffect} from "react"

type Children = {
  children:React.ReactNode
}

export const Protected = ({children}:Children)=>{
  const {islogedIn,logIn} = userAuth() 
const userInLocalStorage = localStorage.getItem("_user_details"); 

useEffect(()=>{ 
  if(userInLocalStorage){
  logIn()
  }
},[])

  if(islogedIn){
    return children
  } 
  return <Navigate to="signin" replace />
}