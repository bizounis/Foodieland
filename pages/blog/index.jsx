import Newsletter from "../../components/Newsletter";
import Sidebar from "../../components/Sidebar";

export default function Blog() {
  return(
    <div className="fcontainer">
      <div className="border-2 border-yellow-500">
        <h1 className="text-center">Blog & Articles</h1>
        <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
        <div className="border-2 border-green-400">Search Box</div>
        <div className='w-full h-screen flex'>
          <div className="w-3/4 border-2 border-purple-500">
            Blog
          </div>
          <div className="w-1/4 border-2 border-purple-800">
            <Sidebar />
          </div>
        </div>
        <div className="border-2 border-pink-500">
          Pagination
        </div>
        <Newsletter />      
      </div>
    </div>
  )
}