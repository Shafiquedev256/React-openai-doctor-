import axios from "axios" 
import {useState,useEffect} from "react"

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
  const [messages, setMessages]=useState<Response[]>({}as Response[])  
  
  useEffect(()=>{
  const oldMessages = localStorage.getItem("oldmessages");
  if(oldMessages){
    setMessages(JSON.parse(oldMessages))
  }
  },[])

const send = (user:User)=>{
axios.post(import.meta.env.VITE_SEND,user)
.then(json=>{
  const reverseData = json.data.slice().reverse(); 
  setMessages(reverseData)
  localStorage.setItem("oldmessages",JSON.stringify(reverseData))
})
  } 
  
  return {messages,send}
}

