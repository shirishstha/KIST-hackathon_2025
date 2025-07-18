import HomePage from "./pages/home"
import MouseFollower from "./components/mouseFollower"
import { Routes,Route } from "react-router-dom"
import PageNotFound from "./pages/pageNotFound"
import Registration from "./pages/registration"
import Codewar from "./pages/codewar"

function App() {
  return (
    <>
    <MouseFollower/>
     <Routes>
      <Route path="/landingpage" element={ <HomePage/>}/>
      <Route path="/registration" element={<Registration/>}/>
      <Route path="/codewar" element={<Codewar/>}/>
      <Route path="*" element={<PageNotFound/>}/>
    
    </Routes>
     
   
    </>
   
  )
}

export default App