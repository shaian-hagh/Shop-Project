import Search from "../../Search/Search";
import Login from "../../Login/Login";
import { useContext } from "react";
import { MainContext } from "../../../Context/Context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { itemAmount, setToken, token } = useContext(MainContext);

  const logoutHandle = () => {
    setToken("");
    localStorage.clear();
  };
  
  return (
    <header className="bg-primary py-6 px-4 flex items-center justify-between flex-col font-Lumanosimo md:flex-row-reverse">
      <Search />
      <div className="flex w-52 mt-8 md:m-5">
        <Link to={"/cart"} >
          <div className="w-20 flex justify-end items-center cursor-pointer relative mr-10 hover:text-five text-white transition ease-in duration-300 active:scale-105 md:w-24 lg:w-28 xl:w-32">
            <i className="fas fa-shopping-cart text-base md:text-lg lg:text-xl xl:text-2xl"></i>
            <h3 className="ml-2 text-base md:text-lg lg:text-xl xl:text-2xl">Shop</h3>
            <p className="flex justify-center items-center absolute top-0 left-1 z-10 text-black bg-red-500 w-4 h-4 rounded-full text-base md:w-5 md:h-5 md:left-3 lg:left-5 xl:left-5 xl:h-6 xl:w-6 xl:text-xl">
              {itemAmount}
            </p>
          </div>
        </Link>
        {token ? (
            <div
              onClick={() => logoutHandle()}
              className="w-20 flex items-center hover:text-five text-white cursor-pointer transition  ease-in duration-300 md:w-24 lg:w-28 xl:w-32"
            >
              <i className="fas fa-sign-out-alt text-xl cursor-pointer md:text-lg lg:text-xl xl:text-2xl"></i>
              <h3 className="ml-2 text-base md:text-lg lg:text-xl xl:text-2xl">Logout</h3>
            </div>
        ) : (
          <Login />
        )}
      </div>
    </header>
  );
};

export default Navbar;
