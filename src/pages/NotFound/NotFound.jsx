import { Link } from 'react-router-dom'

const NotFound = () => {

  return (
      <div className='flex justify-center items-center flex-col h-[70.5vh] bg-cover' style={{"backgroundImage":"URL(../public/blob-scene-haikei.svg)"}} >
          <h1 className='text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-700 mt-32'>Error 404</h1>
          <p className='text-6xl m-8 p-px text-white'>Page Not Found</p>
          <Link to={'/'}>
            <button className='bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-400 hover:to-blue-500 px-16 py-4 rounded-xl mb-32 mt-8 text-2xl text-white active:scale-95'>Home</button>
          </Link>
      </div>
  )
}

export default NotFound;