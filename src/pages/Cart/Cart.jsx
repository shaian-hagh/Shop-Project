import { useContext } from "react";
import { MainContext } from "../../Context/Context";
import { Link } from "react-router-dom";
import NotLogin from "../../components/NotLogin/NotLogin";
import NotProduct from "../../components/NotProduct/NotProduct";

const Cart = () => {
  const {
    cartItem,
    removeFromCart,
    clearCart,
    increaseAmount,
    decreaseAmount,
    totalPrice,
    token,
  } = useContext(MainContext);

  return token ? (
    cartItem && cartItem.length === 0 ? (
      <NotProduct />
    ) : (
      <section className="min-h-[80vh] grid grid-cols-1 justify-items-center dark:bg-slate-900 dark:text-white sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
        {cartItem?.map((item) => {
          return (
            <div
              key={item.id}
              className="w-44 h-60 relative border border-gray-200 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ease-in hover:scale-105 m-10 dark:border-gray-700 sm:w-52 sm:h-72 md:w-64 md:h-[340px] lg:h-[380px] lg:w-[270px] xl:h-[380px] xl:w-72"
            >
              <Link to={`/Product/${item.id}`}>
                <div className="flex justify-center items-center mb-6 w-full h-28 dark:bg-white dark:rounded-t-xl sm:h-36 md:h-44 lg:h-52 ">
                  <img
                    className="max-w-28 max-h-24 sm:max-h-28 sm:max-w-36 md:max-w-44 md:max-h-36 lg:max-w-52 lg:max-h-44"
                    src={item.image}
                    alt=""
                  />
                </div>
                <div className="text-xs my-2 mx-5 sm:text-sm md:text-base lg:text-lg xl:text-xl">
                  <p className="font-lato">{item?.title?.substring(0, 20)} ...</p>
                  <h3 className="mt-2 font-Lumanosimo opacity-70">{item.price}</h3>
                </div>
              </Link>
              <div className="flex justify-evenly items-center mt-4 md:mt-5">
                <button
                  onClick={() => increaseAmount(item.id)}
                  className="bg-five py-1 px-4 rounded-md text-xs transition ease-in duration-200 hover:opacity-90 active:scale-105 sm:text-sm sm:py-1.5 sm:px-6 md:text-base md:px-7 lg:text-lg xl:py-2 lg:px-8 xl:text-xl"
                >
                  <i className="fas fa-plus	text-white"></i>
                </button>
                <h2 className="text-sm md:text-base">{item.amount}</h2>
                <button
                  onClick={() => decreaseAmount(item.id)}
                  className="bg-five py-1 px-4 rounded-md text-xs transition ease-in duration-200 hover:opacity-90 active:scale-105 sm:text-sm sm:py-1.5 sm:px-6 md:text-base md:px-7 lg:text-lg lg:px-8 xl:py-2 xl:text-xl"
                >
                  <i className="fas fa-minus text-white"></i>
                </button>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="absolute right-3 top-1 transition ease-in duration-300 hover:text-red-500 active:scale-105 dark:text-black dark:hover:text-red-500 md:text-lg lg:text-xl xl:text-2xl "
              >
                <i className="fa fa-remove "></i>
              </button>
            </div>
          );
        })}
        <div className=" w-2/3 my-20  grid col-span-full justify-items-center items-center h-[30vh] rounded-xl font-sanchez">
          <div className="w-full h-full flex justify-between items-center flex-col p-5">
            <h1 className="w-52 text-lg border-b pb-10 text-center sm:w-64 md:w-72 md:text-xl lg:w-80 lg:text-2xl xl:w-96 xl:text-3xl dark:border-gray-700">
              Total Price : $ {parseFloat(totalPrice).toFixed(2)}
            </h1>
            <div className="w-full h-full flex flex-col justify-evenly items-center">
              <button
                onClick={clearCart}
                className="w-1/2 h-8 flex justify-center items-center text-lg rounded-xl text-slate-800 bg-red-500 transition ease-in duration-200 hover:opacity-90 active:scale-105 sm:w-52 md:w-64 md:h-9 lg:w-72 lg:h-10 xl:w-80 xl:text-2xl"
              >
                <p className="md:text-lg lg:text-2xl">clear</p>
                <i className="far fa-trash-alt ml-4 md:text-lg lg:text-xl "></i>
              </button>
              <button
                onClick={() => clearCart()}
                className="w-1/2 h-8 bg-emerald-600 rounded-xl text-base text-slate-800 transition ease-in duration-200 hover:opacity-90 active:scale-105 sm:w-52 md:w-64 md:text-lg md:h-9 lg:w-72 lg:h-10 lg:text-xl xl:w-80 xl:text-2xl"
              >
                Purchase
              </button>
            </div>
          </div>
        </div>
      </section>
    )
  ) : (
    <NotLogin />
  );
};

export default Cart;
