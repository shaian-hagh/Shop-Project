import { useContext } from "react";
import { MainContext } from "../../../Context/Context";

const Category = () => {
  const { categories, setCategories } = useContext(MainContext);

  return (
    <div className="drop-shadow-xl w-full">
      <h1 className="text-2xl my-4 ml-4 font-lato dark:text-white xl:ml-0 xl:my-6 xl:text-3xl ">Category :</h1>
      <form
        className="flex flex-col m-auto w-10/12 font-sanchez text-xs sm:text-sm md:text-base lg:text-lg xl:w-full xl:text-xl 2xl:text-2xl"
        name="category"
        id="category"
        onChange={(e) => setCategories(e.target.value)}
        value={categories}
      >
        <label className="my-2">
          <input
            name="value"
            type="radio"
            value=""
            className="peer hidden"
          />
          <div className="flex items-center justify-between w-full p-2 bg-third text-white rounded-xl transition ease-in duration-200 shadow-lg hover:shadow-xl hover:scale-105 peer-checked:bg-white peer-checked:border peer-checked:border-gray-200 peer-checked:text-fourth xl:p-5">
            <h2>All</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        </label>
        <label className="my-2">
          <input
            name="value"
            type="radio"
            value="women's clothing"
            className="peer hidden"
          />
          <div className="flex items-center justify-between w-full p-3 bg-third text-white rounded-xl transition ease-in duration-200 shadow-lg hover:shadow-xl hover:scale-105 peer-checked:bg-white peer-checked:border peer-checked:border-gray-200 peer-checked:text-fourth xl:p-5">
            <h2>Women`s Clothing</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        </label>
        <label className="my-2">
          <input
            name="value"
            type="radio"
            value="men's clothing"
            className="peer hidden"
          />
          <div className="flex items-center justify-between w-full p-3 bg-third text-white rounded-xl transition ease-in duration-200 shadow-lg hover:shadow-xl hover:scale-105 peer-checked:bg-white peer-checked:border peer-checked:border-gray-200 peer-checked:text-fourth xl:p-5">
            <h2>Men`s Clothing</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        </label>
        <label className="my-2">
          <input
            name="value"
            type="radio"
            value="jewelery"
            className="peer hidden"
          />
          <div className="flex items-center justify-between w-full p-3 bg-third text-white rounded-xl transition ease-in duration-200 shadow-lg hover:shadow-xl hover:scale-105 peer-checked:bg-white peer-checked:border peer-checked:border-gray-200 peer-checked:text-fourth xl:p-5">
            <h2>Jewelery</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        </label>
        <label className="my-2">
          <input
            name="value"
            type="radio"
            value="electronics"
            className="peer hidden"
          />
          <div className="flex items-center justify-between w-full p-3 bg-third text-white rounded-xl transition ease-in duration-200 shadow-lg hover:shadow-xl hover:scale-105 peer-checked:bg-white peer-checked:border peer-checked:border-gray-200 peer-checked:text-fourth xl:p-5">
            <h2>Electronics</h2>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 xl:w-8 xl:h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>
          </div>
        </label>
      </form>
    </div>
  );
};

export default Category;
