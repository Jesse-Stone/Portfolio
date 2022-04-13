import About from "./components/about/About";
import Intro from "./components/intro/Intro";
import ProductList from "./components/productList/productList";
import Contact from "./components/contact/Contact";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  return (
  <div>
    <Navbar/>
    <Intro/>
    <About/>
    <ProductList/>
    <Contact/>
  </div>
  )
};

export default App;