import photo from "../../assets/shopping-cart5929.jpg";

const NotText = () => {
  return (
    <div className="max-w-[100vw]  h-[64.5vh] relative flex justify-center font-Lumanosimo dark:bg-slate-900 dark:text-white">
      <img
        src={photo}
        alt="cart"
        className="w-[80vw] opacity-5 absolute top-28 mix-blend-color-burn	dark:opacity-10 sm:w-[80vw] sm:top-20 md:w-[70vw] lg:w-[60vw] xl:w-[50vw] 2xl:w-[40vw] "
      />
      <h1 className="text-xl font-semibold absolute top-20 sm:text-2xl md:text-3xl xl:text-5xl">
        Your shopping cart is empty.
      </h1>
    </div>
  );
};

export default NotText;
