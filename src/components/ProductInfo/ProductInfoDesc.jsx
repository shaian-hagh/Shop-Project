const ProductInfoDesc = ({ info }) => {
  
  const {title , category , description} = info

  return (
    <div className=" w-80 my-10 flex flex-col justify-start text-justify font-sanchez md:w-[400px] lg:w-[500px] lg:h-[50vh] lg: lg:mx-20 xl:mx-10 xl:pt-20 xl:mt-10">
      <p className="text-sm font-semibold sm:text-base md:text-lg lg:text-xl">{title}</p>
      <p className="text-sm font-normal my-4 opacity-90 sm:text-base md:text-lg lg:text-xl">{category}</p>
      <p className="text-xs font-light sm:text-sm md:text-base lg:text-lg">{description}</p>
    </div>
  );
};

export default ProductInfoDesc;
