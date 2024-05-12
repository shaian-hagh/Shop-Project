import { Link } from "react-router-dom";

const Product = ({ data }) => {
  const { id, image, title, price } = data;

  return (
    <section className="h-60 w-60 flex flex-col font-lato border border-gray-200 m-auto shadow-xl rounded-xl hover:scale-105 transition duration-300  dark:border-gray-700 dark:text-white dark:shadow-none md:h-96 md:w-full">
      <div className="flex justify-center items-center w-full h-60 dark:bg-white rounded-t-xl">
        <img className="max-w-28 max-h-28  md:max-w-44 md:max-h-44" src={image} alt={id} />
      </div>
      <div className="text-sm mt-6 flex flex-col justify-between md:text-base md:mt-10">
        <p className="pl-2 font-medium 2xl:ml-4">{title.substring(0,25)} ...</p>
        <div className="flex justify-between items-center my-2 mx-4 font-Lumanosimo md:my-4 2xl:px-4">
          <p className="opacity-70 dark:text-gray-200 md:mt-2">$ {price}</p>
          <Link
            to={`product/${id}`}
            className="px-2 py-1 bg-third rounded-xl text-sm text-white active:scale-95 hover:opacity-90 md:px-4 md:py-2 md:text-xl "
          >
            more ...
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
