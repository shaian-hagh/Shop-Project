import { Link } from "react-router-dom";
import Them from "../../Them/Them";
import Category from "../../Sidebar/Category/Category";
import PriceRange from "../../Sidebar/PriceRange/PriceRange";
import { useRef } from "react";

const Menu = () => {
  const open = useRef();
  const closeSidebar = () => {
    open.current.style.display = "none";
  };
  const openSidebar = () => {
    open.current.style.display = "block";
  };

  return (
    <menu className=" flex items-center justify-center px-12 py-4 relative text-sm border-b-2 bg-secondary font-Lumanosimo dark:border-none dark:bg-slate-800 dark:text-white xl:h-20 sm:text-base md:justify-start md:text-lg lg:text-xl xl:text-2xl">
      <div className="w-10/12 flex justify-center items-center flex-col md:flex-row md:items-start md:justify-start md:w-1/3 ">
        <Link
          className="w-16 text-center font-normal transition ease-in duration-300 mx-2 hover:text-five md:w-28 xl:m-0"
          to={"/"}
        >
          Home
        </Link>
        <span className="mx-2 hidden md:flex xl:m-0">/</span>
        <Link
          className="w-16 text-center font-normal transition ease-in duration-300 mx-2 py-2 hover:text-five md:w-28 xl:m-0 md:py-0"
          to={"about"}
        >
          About
        </Link>
        <span className="mx-2 hidden md:flex xl:m-0">/</span>
        <Link
          className="w-16 text-center font-normal transition ease-in duration-300 mx-2 hover:text-five md:w-28 xl:m-0"
          to={"cart"}
        >
          Cart
        </Link>
      </div>
      {/* <div className="flex w-16 justify-between items-center md:w-20 lg:w-24 xl:w-12"> */}
      <div className="absolute left-10 md:right-20 md:left-auto lg:right-24 xl:right-10">
        <Them />
      </div>
        <i
          onClick={() => openSidebar()}
          className="fas fa-bars text-2xl absolute right-10 cursor-pointer transition ease-in duration-300 active:scale-105 hover:text-five dark:hover:text-five xl:hidden md:text-3xl lg:text-4xl"
        ></i>
      {/* </div> */}
      <div
        ref={open}
        className="bg-secondary w-1/3 h-full z-10 top-0 right-0 fixed py-10 hidden xl:absolute xl:-left-[200%]  xl:hidden dark:bg-slate-800"
      >
        <i
          onClick={() => closeSidebar()}
          className="fas fa-arrow-right text-xl absolute top-4 left-4 cursor-pointer transition ease-in duration-300 active:scale-105 hover:text-five dark:hover:text-five sm:text-2xl md:text-3xl lg:text-4xl"
        ></i>
        <Category />
        <PriceRange />
      </div>
    </menu>
  );
};

export default Menu;
