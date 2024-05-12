import Category from "./Category/Category";
import PriceRange from "./PriceRange/PriceRange";

const Sidebar = () => {
 
  return (
    <div className="w-[27vw] hidden xl:flex flex-col px-10 pb-20 my-20 border-l border-gray-200 dark:border-gray-700">
      <Category />
      <PriceRange />
    </div>
  );
};

export default Sidebar;
