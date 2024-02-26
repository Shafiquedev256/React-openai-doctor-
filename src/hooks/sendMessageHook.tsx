import axios from "axios" 
import {useState} from "react"

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
const send = (user:User)=>{
axios.post(import.meta.env.VITE_SEND,user)
.then(json=>setMessages(json.data))
  } 
  
  return {messages,send}
}

