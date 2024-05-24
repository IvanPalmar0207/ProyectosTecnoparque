/*React-Router-Dom*/
import { BrowserRouter, Routes, Route } from "react-router-dom"
/*Pages*/
import { MainPage } from "./pages/MainPage"
import { LoginSection } from "./pages/Login"
import { RegisterSection } from "./pages/Register"
import { ShopNow } from "./pages/ShopNow"
import { ContactSection } from "./pages/ContactUs"
import { CartSection } from "./pages/Cart"
import { AboutUs } from "./pages/AboutUs"
/*Components*/
import { NavBar } from "./components/NavBar"
import { CategoriesSection } from "./components/CategoriesSection"
import { FooterPage } from "./components/Footer"

function App() {

  return (
    <BrowserRouter>
      <NavBar />
      <CategoriesSection />
      <Routes>
        <Route path="/" element={<MainPage />}/>
        <Route path="/Login" element={<LoginSection />}/>
        <Route path="/Register" element={<RegisterSection />}/>
        <Route path="/ShopNow" element={<ShopNow />}/>
        <Route path="/Contact" element={<ContactSection />}/>
        <Route path="/Cart" element={<CartSection />}/>
        <Route path="/AboutUs" element={<AboutUs />}/>
      </Routes>
      <FooterPage />
    </BrowserRouter>
  )
}

export default App
