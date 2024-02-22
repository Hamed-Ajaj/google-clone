import { Link } from "react-router-dom"
import Search from "./Search"
const Navbar = ({darkTheme,setDarkTheme}) => {
  return (
    <div className='p-5 pb-4 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200'>
      <div className='flex justify-between w-screen items-center space-x-5'>
        <Link to='/' className='text-2xl font-bold text-gray-800 dark:text-gray-200'>
          <p className="text-2xl bg-blue-500 font-bold text-white py-1 px-2 rounded dark:bg-gray-500 dark:text-gray-900">Gooogle 🔎</p>
        </Link>
        <button type="button" onClick={() => setDarkTheme(!darkTheme)}
        className="text-xl dark:bg-gray-50 dark:text-gray-900 bg-white rounded-full px-3 py-2 hover:shadow-lg"
        >
          {darkTheme ? 'Light 💡' : 'Dark 🌙'}
        </button>
      </div>
      <Search />
    </div>
  )
}

export default Navbar
