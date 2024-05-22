import { Route, Routes, BrowserRouter } from "react-router-dom"
/*Components*/
import { NavBar } from "./componentes/NavBar"
import { FooterPage } from "./componentes/Footer"
/*Pages*/
import { MainPage } from "./pages/MainPage"
import { AboutUs } from "./pages/AboutUs"
import { ContactUs } from "./pages/ContactUs"

function App() {
  return (    
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/AboutUs" element={<AboutUs />}/>
        <Route path="/ContactUs" element={<ContactUs />}/>
      </Routes>
      <FooterPage />
    </BrowserRouter>
  )
}

export default App
