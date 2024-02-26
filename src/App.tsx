import {BrowserRouter,Routes,Route} from "react-router-dom" 
import {Protected} from "./context/protect" 
import {UserAuthProvider} from "./context/userAuth" 
import {ChatRoom} from "./pages/chatroom" 
import Signup_page from "./pages/signup_page" 
import Signin_page from "./pages/signin"

function App() {
  

  return (
    <> 
    <UserAuthProvider>
     <BrowserRouter>
     <Routes>
     <Route path="/" element={     <Protected><ChatRoom/></Protected>}/> 
     <Route path="/signup" element={         <Signup_page/>}/>
     <Route path="/signin" element={         <Signin_page/>}/>
     </Routes>
     </BrowserRouter> 
     </UserAuthProvider>
    </>
  )
}

export default App
