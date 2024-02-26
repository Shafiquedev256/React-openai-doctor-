import {createContext,useContext,ReactNode,useState} from "react"  

type Context = {
  islogedIn:true|false,
  logIn:()=>void
} 
type Children = {
  children:ReactNode
}

const UserContext = createContext<Context>({}as Context)

export const UserAuthProvider = ({children}:Children)=>{
  const [islogedIn,setIslogedIn]=useState(false); 
  
 const logIn = ()=>{
      setIslogedIn(true)
    }
  
  return (
  <UserContext.Provider value={{islogedIn,logIn}}>
  {children}
  </UserContext.Provider>
  )
} 

export const userAuth = ()=>useContext(UserContext)