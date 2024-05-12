import { useContext, useState } from "react"
import { MainContext } from "../../Context/Context"

const ProductInfoPrice = ({info}) => {
  const {rating , price ,id } =info

  const colors = (colorRate) => {
    if(colorRate >= 4){
      return 'text-emerald-600'
    } else if(colorRate >= 3){
      return 'text-yellow-500'
    } else if(colorRate >= 2){
      return 'text-orange-500'
    } else if(colorRate >= 1){
      return 'text-red-500'
    }
  }

  const {addToCart} = useContext(MainContext)

  return (
    <div className="flex flex-col justify-between items-center border w-72 h-72 p-6 mt-14 font-sanchez rounded-lg bg-secondary dark:bg-slate-700 dark:border-gray-600 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:mt-0 xl:w-[500px] xl:h-[400px] ">
        <p className="mt-4 font-medium md:text-lg lg:text-xl xl:text-2xl">Comment : <span className="text-blue-400 font-Lumanosimo">{rating?.count}</span></p>
        <p className="font-medium md:text-lg lg:text-xl xl:text-2xl">Rating : <span className={`${colors(rating?.rate)} font-Lumanosimo`}>{rating?.rate}</span></p>
        <p className="font-medium md:text-lg lg:text-xl xl:text-2xl">Price : <span className="text-green-500 font-Lumanosimo">$ {price}</span></p>
        <button onClick={() => addToCart(info,id)} className="bg-red-600  w-full h-12 rounded-lg text-3xl font-medium text-white transition ease-in duration-200 hover:opacity-90 active:scale-95">Buy</button>
    </div>
  )
}

export default ProductInfoPrice
