import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Suggestion = ({ product }) => {
  
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/category/${product.category}`)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  }, [product]);

  const scrollToTop = () => {
    window.scrollTo({ top:0, behavior: 'smooth'})
  };

  return (
    <div className="flex flex-col items-center w-[80vw] mt-8 mb-20">
      <h1 className="border-b pb-4 w-1/3 text-center text-2xl font-sanchez dark:border-b-gray-700">Related Products :</h1>
      <div className="flex justify-center items-center flex-wrap w-full mt-12">
        {data &&
          data.map((item) => {
            return item.id !== product.id && 
              <Link onClick={scrollToTop()} to={`/product/${item.id}`} key={item.id} className="flex flex-col justify-between flex-wrap w-40 h-56 m-4 hover:scale-105 transition duration-300 border border-gray-100 rounded-lg shadow-xl dark:border-gray-700 md:w-56 md:h-64 xl:w-66 xl:h-80">
                <div className="flex justify-center items-center h-32 w-full mb-4 dark:rounded-t-xl dark:bg-white md:h-44 xl:h-56">
                <img src={item?.image} className="max-w-32 max-h-28 min-h-24 md:max-h-32 md:max-w-44 md:min-h-36 xl:max-h-48 xl:max-w-48"/>
                </div>
                <p className="mx-2 font-lato">{item.title.substring(0,12)} ...</p>
                <p className="mx-2 mb-2 font-Lumanosimo opacity-70">$ {item.price}</p>
              </Link>
          })}
      </div>
    </div>
  );
};

export default Suggestion;
