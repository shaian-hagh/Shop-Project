// react
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FadeLoader } from "react-spinners";
// pages
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/LoginPage/Login";
import About from "./pages/About/About";
import Cart from "./pages/Cart/Cart";
//components
import Navbar from "./components/Layout/Navbar/Navbar";
import Footer from "./components/Layout/Footer/Footer";
import Menu from "./components/Layout/Menu/Menu";
import ProductInfo from "./components/ProductInfo/ProductInfo";
import ShowNavbar from "./components/ShowLayout/ShowNavbar/ShowNavbar";
import ShowFooter from "./components/ShowLayout/ShowFooter/ShowFooter";
// Context
import ShopContext from "./Context/Context";

const App = () => {
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 100);
  }, []);

  return loader ? (
    <div className="w-screen h-screen flex justify-center items-center dark:bg-slate-900">
      <FadeLoader
      className=""
        color="#00d9ff"
        height={30}
        margin={10}
        radius={2}
        speedMultiplier={1}
        width={7}
      />
    </div>
  ) : (
    <ShopContext>
      <Router>
        <ShowNavbar>
          <Navbar />
          <Menu />
        </ShowNavbar>
        <Routes>
          <Route index element={<Home />} />
          <Route path={"/product/:id"} element={<ProductInfo />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/about"} element={<About />} />
          <Route path={"/cart"} element={<Cart />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
        <ShowFooter>
          <Footer />
        </ShowFooter>
      </Router>
    </ShopContext>
  );
};
export default App;
