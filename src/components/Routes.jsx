import { Routes, Route, Navigate } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import Search from "./Search"
import Results from "./Results"


const RoutesComp = () => {

  return (
    <div className="p-4">
      <Routes>
        <Route  path="/" element={<Navigate to="/search" />}/>
        <Route path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />

      </Routes>
    </div>
  )
}

export default RoutesComp
