import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Link to="/login">
      <div className="w-20 flex items-center hover:text-five text-white cursor-pointer transition ease-in duration-300 md:w-24 lg:w-28 xl:w-32">
        <i className="fa-solid fa-right-to-bracket text-xl cursor-pointer md:text-lg lg:text-xl xl:text-2xl"></i>
        <h3 className="ml-2 text-base md:text-lg lg:text-xl xl:text-2xl">
          Login
        </h3>
      </div>
    </Link>
  );
};

export default Login;
