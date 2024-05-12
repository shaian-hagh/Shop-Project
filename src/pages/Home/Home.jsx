import React, { useContext } from "react";
import Product from "../../components/Product/Product";
import Sidebar from "../../components/Sidebar/Sidebar";
import { MainContext } from "../../Context/Context";
import photo from "../../assets/Virgin-Red-online-shopping-offers.jpg";

const Home = () => {
  const { search, categories, price ,products } = useContext(MainContext);

  return (
    <React.Fragment>
      <img src={photo} alt="Photo" className="w-screen hidden sm:block sm:h-[40vh] md:h-[50vh] lg:h-[70vh] xl:h-[90vh] 2xl:h-[100vh] "/>
      <div className="max-w[100vw]  min-h[100vh] flex justify-center flex-row-reverse   dark:bg-slate-900 scrollbar-hide">
        <Sidebar />
        <div className="w-2/3 grid grid-cols-1 auto-rows-auto gap-8 my-20 mx-10 sm:w-1/2 md:grid-cols-2 md:w-4/5 lg:w-10/12 lg:grid-cols-3 lg:grid-rows-3 xl:w-2/3 xl:mx-20">
          {products && products
          .filter((data) => {
            return categories === ""
              ? data
              : data.category === categories;
          })
          .filter((data) => {
            return data.price <= price ;
          })
          .filter((data) => {
            return search.toLowerCase() === ""
              ? data
              : data.title.toLowerCase().includes(search)                
          })
            .map(data => {
              return <Product data={data} key={data?.id} />;
            })}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;