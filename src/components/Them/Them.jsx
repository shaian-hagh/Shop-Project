import { useEffect, useState } from "react";

const DarkMode = () => {

    const [theme , setTheme] = useState()

    useEffect(()=>{
        if(theme !== undefined){
            localStorage.setItem('theme' , JSON.stringify(theme))
        }
    },[theme])

    
  useEffect(()=> {
    setTheme(JSON.parse(localStorage.getItem('theme')))
  },[])

  useEffect(() => {
      if (theme === "dark") {
          document.documentElement.classList.add("dark")
        }else{
            document.documentElement.classList.remove("dark")
      }
  },[theme])

    const toggleDarkMode = () => {
        setTheme(theme === 'dark' ? 'light' :'dark')
    }
 
  return (
    theme === 'light' ?
    <div className="w-8 h-8 text-xl flex justify-center items-center rounded-full text-white bg-black  transition ease-in duration-200 md:h-10 md:w-10 md:text-2xl lg:w-12 lg:h-12 lg:text-3xl">
      <button className="" onClick={toggleDarkMode}>
        <i className="fas fa-moon"></i>
      </button>
    </div>
    :
    <div className="w-8 h-8 text-xl flex justify-center items-center rounded-full text-yellow-400 bg-white transition ease-in duration-200 md:h-10 md:w-10 md:text-2xl lg:w-12 lg:h-12 lg:text-3xl">
      <button className="" onClick={toggleDarkMode}>
        <i className="fas fa-sun"></i>
      </button>
    </div>
    
  );
};

export default DarkMode;
