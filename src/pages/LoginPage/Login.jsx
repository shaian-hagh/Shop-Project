import axios from "axios";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../../Context/Context";
import bg from "../../assets/symbol-scatter-haikei.svg";

const Login = () => {
  const { token, setToken } = useContext(MainContext);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState("fas fa-eye");
  const [inputType, setInputType] = useState("password");

  const loginHandle = () => {
    setInterval(() => {
      setError("");
    }, 3000);
    setPassword("");
    setUserName("");
    axios({
      url: `https://fakestoreapi.com/auth/login`,
      method: "POST",
      data: {
        username: userName,
        password: password,
      },
    })
      .then((res) => {
        setToken(res.data.token);
        localStorage.setItem("users", res.data.token);
      })
      .catch((err) => {
        console.log(err.response);
        setError(err.response.data);
      });
  };

  const showInput = () => {
    setShowPassword(
      showPassword === "fas fa-eye" ? "fas fa-eye-slash" : "fas fa-eye"
    );
    setInputType(inputType === "password" ? "text" : "password");
  };

  return (
    <div
      className="text-white h-[100vh] bg-cover relative flex items-center flex-col justify-center font-sanchez"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className=" w-72 h-80 bg-slate-800 border border-slate-400 rounded-md p-8 shadow-lg backdrop-filter backdrop-blur-md bg-opacity-30 relative sm:w-[350px] md:h-[350px]">
        <h1 className="text-2xl text-white font-bold text-center mb-6 sm:text-3xl md:text-4xl">
          Login
        </h1>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="relative my-4">
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="block w-56 py-1.5 px-0 text-sm my-6 pl-2 pr-8 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-fourth focus:outline-none focus:ring-0 focus:text-white focus:border-fourth peer sm:w-72 md:text-xl"
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fourth peer-focus:dark:text-fourth peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Uses Name
            </label>
            <i className="fa-solid fa-envelope absolute top-1 right-2"></i>{" "}
          </div>
          <div className="relative my-4">
            <input
              type={inputType}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-56 py-1.5 px-0 text-sm my-6 pl-2 pr-8 text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:focus:border-fourth focus:outline-none focus:ring-0 focus:text-white focus:border-fourth peer sm:w-72 md:text-xl"
              placeholder=""
            />
            <label
              htmlFor=""
              className="absolute text-sm text-white duration-300 transform -translate-y-6 scale-75 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-fourth peer-focus:dark:text-fourth peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Password
            </label>
            {password.length === 0 ? (
              <i className="fa-solid fa-unlock-keyhole absolute top-1 right-2"></i>
            ) : (
              <i
                onClick={() => showInput()}
                className={`${showPassword} absolute top-1 right-2 cursor-pointer hover:text-fourth`}
              ></i>
            )}
          </div>
          {error && (
            <small className="text-red-500 flex justify-center items-center text-center sm:text-lg">
              this is error
            </small>
          )}
          <button
            onClick={loginHandle}
            type="submit"
            className="w-2/3 absolute right-12 text[18px] mt-6 mb-4 rounded-full bg-white text-emerald-800 py-2 transition-colors duration-300 hover:bg-emerald-600 hover:text-white sm:right-14 md:w-full md:static"
          >
            Login
          </button>
        </form>
      </div>
      {token ? (
        <Link to={"/"}>
          <p className="text-xl mt-10 text-red-500 w-24 h-14 flex justify-center items-center rounded-xl font-semibold transition ease-in duration-300 bg-white active:scale-105 hover:bg-red-500 hover:text-white sm:text-2xl sm:w-36 sm:h-20 md:text-4xl md:w-44 md:h-24">
            Home
          </p>
        </Link>
      ) : null}
    </div>
  );
};

export default Login;
