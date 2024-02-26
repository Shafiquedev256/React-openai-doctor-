import {Navigate} from "react-router-dom" 

type Children = {
  children:React.ReactNode
}

export const Protected = ({children}:Children)=>{
const userInLocalStorage = localStorage.getItem("_user_details"); 
  if(userInLocalStorage){
    return children
  } 
  return <Navigate to="signin" replace />
}