import { useState } from "react"
import Navbar from "./components/Navbar"
import Routes from "./components/Routes"
import Footer from "./components/Footer"
import { ResultContext } from "./context/ResultProvider"
const App = () => {
    const [darkTheme, setDarkTheme] = useState(true)
    const [results,setResults] = useState([]);
    const [isLoading,setIsLoading] = useState(false);
    const [searchTerm,setSearchTerm] = useState("web");

    const getResults = async (url) => {
      const baseUrl = "https://google-web-search1.p.rapidapi.com/"
        setIsLoading(true)
        const res = await fetch(`${baseUrl}${url}`,{
            method:"GET",
            headers:{
              'X-RapidAPI-Key': '50df4a21e8msh64bcc7eee9e2a9dp1a690ajsn2a7ee4d72b33',
              'X-RapidAPI-Host': 'google-web-search1.p.rapidapi.com'
            }
        })
        const data = await res.json();
        setResults(data)
        setIsLoading(false)
    }
  return (  
    <ResultContext.Provider value={{
        results,
        isLoading,
        searchTerm,
        getResults,
        darkTheme,
        setDarkTheme,
        setSearchTerm
    }}>
      <div className={darkTheme?"dark":""}>
          <div className="bg-gray-100 dark:bg-gray-900  dark:text-gray-200 min-h-screen">
              <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>  
              <Routes />
              <Footer />
          </div>
      </div>
    </ResultContext.Provider>
  )
}

export default App
