const ProductInfoImage = ({ img }) => {
  return (
    <div className="w-2/3 h-[30vh] flex justify-center items-center mb-10 dark:bg-white dark:rounded-xl sm:w-1/2 md:w-[30vw] md:h-[35vh] lg:w-[25vw] xl:w-[20vw] xl:h-[40vh]">
      <img src={img} className="max-h-44 max-w-44 sm:max-w-48 sm:max-h-48 md:max-w-52 md:max-h-52 lg:max-w60 lg:max-h-60 xl:max-w-72 xl:max-h-72" />
    </div>
  );
};

export default ProductInfoImage;
