import HomePage from "./pages/home"
import MouseFollower from "./components/mouseFollower"
import { Routes, Route } from "react-router-dom"
import PageNotFound from "./pages/pageNotFound"
import Registration from "./pages/registration"
import Codewar from "./pages/codewar"
import { Toaster } from 'react-hot-toast'
import Hackathon from "./pages/hackathon"
import GraphicDesigning from "./pages/graphicDesigning"
import SuccessfullRegistration from "./pages/successfullRegistration"
import ScrollToTop from "./components/scrollToTop"
import Footer from "./components/footer"

function App() {
  return (
    <>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            background: '#333',
            color: '#fff',
          },
        }}
      />
      <MouseFollower />
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/codewar" element={<Codewar />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path="/ui-ux" element={<GraphicDesigning />} />
        <Route path="/successfull_registration" element={<SuccessfullRegistration />} />

        <Route path="*" element={<PageNotFound />} />

      </Routes>
      <Footer/>


    </>

  )
}

export default App