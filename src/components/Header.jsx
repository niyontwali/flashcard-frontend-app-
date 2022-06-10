import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
const Header = () => {
  return (
    <div className="shadow-lg shadow-gray-300">
     <nav className="bg-[#f3f4f6] py-2 px-36">
       <div className="flex justify-between">
        <div className="flex gap-20 items-center">
          <Link to="/">
            <img src={logo} width="60px" alt="logo" />
          </Link>
          <Link to="/flashcards">
            <li className="list-none text-md font-semibold hover:text-[#ff5a3c] lg:block sm:hidden">FlashCards</li>
          </Link>
        </div>
        <div className="flex gap-20 items-center ">
          <Link to="/dashboard">
            <li className="list-none text-md font-semibold hover:text-[#ff5a3c]">Dashboard</li>
          </Link>
          <a href="https://main--deft-klepon-ede3d5.netlify.app/blog" target="_blank" rel="noreferrer">
            <li className="list-none text-md text-white font-semibold bg-[#ec735e] hover:bg-[#da4f37] px-4 py-2 rounded-full">Visit my Blog</li>
            </a>
        </div>
       </div>
     </nav>
    </div>
  )
}

export default Header