import {BrowserRouter,Routes,Route} from "react-router-dom" 
import {Protected} from "./context/protect" 
import {ChatRoom} from "./pages/chatroom" 
import Signup_page from "./pages/signup_page" 
import Signin_page from "./pages/signin"

function App() { 
  
  return (
    <> 
     <BrowserRouter>
     <Routes>
     <Route path="/" element={     <Protected><ChatRoom/></Protected>}/> 
     <Route path="/signup" element={         <Signup_page/>}/>
     <Route path="/signin" element={         <Signin_page/>}/>
     </Routes>
     </BrowserRouter> 
    </>
  )
}

export default App
