import { PacmanLoader } from "react-spinners"

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <PacmanLoader color="#00bfff" size={100} loading/>
    </div>
  )
}

export default Loading
