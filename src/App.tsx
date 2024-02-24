import {Header} from "./components/header"
import {ChatRoom} from "./components/chatroom" 
import Signup_page from "./pages/signup_page"

function App() {
  

  return (
    <>
    <div className=" hidden">
     <Header/>
     <ChatRoom/>
     </div> 
     <Signup_page/>
    </>
  )
}

export default App
