import {useSend} from "../hooks/sendMessageHook.tsx"
import {Header} from "../components/header" 
import {useState} from "react"

type Message = {
  role:string,
  message:string
}

export const ChatRoom = ()=>{
  const [message, setMessage]=useState("")
  const {messages,send}=useSend() 
    let thread = "" 
    let name = ""
    let email = ""
const userInLocalStorage = localStorage.getItem("_user_details"); 
  if(userInLocalStorage){
    thread=JSON.parse(userInLocalStorage).thread
  name=JSON.parse(userInLocalStorage).name
email=JSON.parse(userInLocalStorage).email
  } 
  
  const handleClick = ()=>{
    send({messageEl:message,thread,name,email}) 
    setMessage("")
  }
  
  return(
    <> 
    <Header/>
    <div className="w-screen h-screen overflow-x-hidden overflow-y-scroll p-3"> 
    <div className="w-screen p-8"></div>
  {
  messages.length>0&&(messages.map((msg:Message)=>(
  <div className="bg-gray-100 w-fit p-3 ml-3 rounded my-1 flex flex-col max-w-[96%]"> 
  <span className="font-bold text-xs w-fit h-fit">{msg.role }</span>
  <span>{msg.message}</span>
  </div>
  )))
  }
  
    <div className="w-screen p-9"></div>
    <div className="fixed bottom-0 w-screen p-2 bg-gray-100 left-0">
    <div className="bg-white flex flex-row justify-between p-2 rounded">
     <input type="text" className="outline-0 p-2 w-4/5 rounded" value={message} onChange={(e)=>{setMessage(e.target.value)}}/>
     <button className="p-2 w-fit h-fit text-white font-bold bg-green-500 text-center rounded" onClick={handleClick}>send</button>
     </div>
     </div>
    </div>
    </>
    )
}