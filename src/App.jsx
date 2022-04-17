import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/productList";
import Contact from "./components/contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Auth from "./components/Auth/Auth"


const App = () => {

  return (
  <div>
    <Navbar/>
    <Intro/>
    <Auth/>
    <About/>
    <ProductList/>
    <Contact/>
  </div>
  )
};

export default App;