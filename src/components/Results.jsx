import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import Loading from "./Loading"
import { useContext } from "react"
import ReactPlayer from "react-player"
import { ResultContext } from "../context/ResultProvider"

const Results = () => {
    const { results, isLoading, searchTerm , getResults } = useContext(ResultContext)
    const location = useLocation();

    useEffect(() => {
        if(searchTerm) {
            if(location.pathname === '/videos') {
                getResults(`?query=${searchTerm} videos&limit=100`)
            }
            else if(location.pathname === '/images') {
                getResults(`?query=${searchTerm} images&limit=100`)
            }
            else if(location.pathname === '/news') {
                getResults(`?query=${searchTerm} news&limit=100`)
            }
            else{
                getResults(`?query=${searchTerm}&limit=100`)
            }
        }
    },[searchTerm, location.pathname])
    if(isLoading) return <Loading />
    console.log(results)
    
    switch(location.pathname){
        case '/search':
            return (
                <div className="flex flex-col flex-wrap justify-between space-y-6 sm:px-56">
                    <div className="text-3xl p-5 block">Results for {results?.search_term}</div>
                    {results?.results?.map((result,index) => (
                        <div key={index} className="md:w-2/5 w-full">
                            <a href={result.url} target="_blank" rel="noreferrer">
                                <p className="md:text-sm text-[10px]">
                                    {result.url.length > 30 ? result.url.substring(0,30) : result.url}
                                </p>
                                <p className="text-lg  hover:underline dark:text-blue-300 text-blue-700">
                                    {result.title}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {result.description}
                                </p>
                            </a>
                        </div>
                    ))}
                </div>
            )
                
        case '/images':
            return "news"
        case '/news':
            return "news"
        case '/videos':
            return "videos"
        default:
            return "Error! Page not found!"
    }
}

export default Results
