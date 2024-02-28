import axios from "axios" 
import {useState,useEffect} from "react";
import {Loader} from "../components/loader"

type User = {
name: string,
email: string,
thread:string,
messageEl:string
} 
type Response = {
  role:string,
  message:string
}

export const useSend = ()=>{
  const [messages, setMessages]=useState<Response[]>({}as Response[]);
  const [userMessage,setUsermessage]=useState("")
  const [loading,setLoading]=useState(false);
  
  
  useEffect(()=>{
  const oldMessages = localStorage.getItem("oldmessages");
  if(oldMessages){
    setMessages(JSON.parse(oldMessages))
  }
  },[])

const send = (user:User)=>{ 
  setLoading(true);
axios.post(import.meta.env.VITE_SEND,user)
.then(json=>{
  const reverseData = json.data.slice().reverse(); 
  setMessages(reverseData)
  localStorage.setItem("oldmessages",JSON.stringify(reverseData))
})
.finally(()=>{setLoading(false)})
  }  
  
  const messageLoader = ()=>{
    if(loading){
      return (<Loader message={userMessage} />);
      return (<></>)
    }
  }
  
  return {messages,send,messageLoader,setUsermessage}
}

