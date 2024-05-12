import { useContext } from 'react'
import { MainContext } from '../../Context/Context';


const Search = () => {

  const {search, setSearch} = useContext(MainContext);
  
  return (
      <form onSubmit={e => e.preventDefault()} className='w-full flex justify-end relative md:w-1/2 '>
            <input
              type="text" 
              required
              placeholder="search..."
              value={search}
              onChange={(e) => setSearch(e.target.value.toLowerCase())}
              className='w-2/3 h-10 rounded-xl mx-20 bg-transparent border outline-none pr-10 pl-4 text-gray-300 focus:text-white md:mx-10 md:text-lg lg:h-12 lg:text-xl xl:text-2xl 2xl:text-3xl xl:h-14 2xl:w-7/12'
              />
              {
                search.length === 0 ?
              <i className='fas fa-search absolute top-3 right-24 text-gray-300 md:right-14 md:text-lg md:top-2 lg:top-3 lg:text-xl xl:text-2xl'></i>
              :<i onClick={() => setSearch('')} className="fa fa-remove absolute top-3 right-24 text-gray-300 transition ease-in duration-300 cursor-pointer hover:text-red-500 md:text-lg md:right-14 md:top-2 lg:top-3 lg:text-xl xl:text-2xl"></i>
              }
          </form>
  )
}

export default Search