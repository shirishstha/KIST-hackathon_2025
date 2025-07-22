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
import AdminCodewar from "./pages/admin/codewar"
import AdminHome from "./pages/admin/home"
import AdminGraphicDesigning from "./pages/admin/graphicDesigning"
import AdminHackathon from "./pages/admin/hackathon"
import Login from "./pages/admin/login"
import Layout from "./pages/admin/layout"
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
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
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/codewar" element={<Codewar />} />
        <Route path="/hackathon" element={<Hackathon />} />
        <Route path="/ui-ux" element={<GraphicDesigning />} />
        <Route path="/successfull_registration" element={<SuccessfullRegistration />} />
        <Route path="/login" element={<Login/>}/>

        <Route path="/admin" element={<Layout />}>
          <Route path="home" element={<AdminHome />} />
          <Route path="codewar" element={<AdminCodewar />} />
          <Route path="graphicdesigning" element={<AdminGraphicDesigning />} />
          <Route path="hackathon" element={<AdminHackathon />} />
        </Route>

        <Route path="*" element={<PageNotFound />} />

      </Routes>
      {!isAdminRoute && <Footer />}


    </>

  )
}

export default App