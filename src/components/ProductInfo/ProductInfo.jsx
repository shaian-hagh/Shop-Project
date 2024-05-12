import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductInfoImage from "./ProductInfoImage";
import ProductInfoDesc from "./ProductInfoDesc";
import ProductInfoPrice from "./ProductInfoPrice";
import Suggestion from "../Suggestion/Suggestion";
import { MainContext } from "../../Context/Context";
import NotLogin from "../NotLogin/NotLogin";

const ProductInfo = () => {
  const params = useParams();
  const [productInfo, setProductInfo] = useState({});
  const { token } = useContext(MainContext);

  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${params.id}`)
      .then((res) => setProductInfo(res.data))
      .catch((err) => console.error(err));
  }, [params]);

  return token ? (
    <div className="flex flex-col justify-center items-center dark:bg-slate-900 dark:text-white">
      <div className="flex flex-col-reverse justify-between items-center w-[90vw] max-w-[screen] h-full my-12 py-8 border-b dark:border-b-gray-700 xl:flex-row">
        <ProductInfoPrice info={productInfo} />
        <div className="w-full flex justify-center items-center flex-col-reverse h-[60vh] lg:flex-row lg:items-start xl:justify-evenly ">
        <ProductInfoDesc info={productInfo} />
        <ProductInfoImage img={productInfo?.image} alt={productInfo.title} />
        </div>
      </div>
      <Suggestion product={productInfo} />
    </div>
  ) : (
    <NotLogin />
  );
};

export default ProductInfo;
