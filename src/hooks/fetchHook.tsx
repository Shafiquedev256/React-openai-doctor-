import {useState} from "react"

type Message = {
  role:string,
  message:string,
thread:string,
}

export const useFetch = ()=>{
  const [messages,setMessages] = useState<Message[]>([{role:"user",message:"hello!",thread:"12345"}])
const [message,setMessage]= useState("")
  
  const sendMessage = (message:Message)=>{
    setMessages(msg=>[...msg,message])
  }
  const msges = ()=>messages
  return{
    msges,
    sendMessage,
    message,
    setMessage
  }
}