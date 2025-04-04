import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Get current route

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/60 shadow-md backdrop-blur-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="text-3xl font-extrabold text-cyan-400 tracking-wide">
          Gym<span className="text-yellow-400">Fit</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {["Home", "About", "Services", "Plans", "Contact"].map((item, index) => {
            const path = `/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`;
            const isActive = location.pathname === path;
            
            return (
              <Link 
                key={index} 
                to={path}
                className={`relative text-gray-200 transition duration-300 group 
                           ${isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"}`}
              >
                {item}
                <span className={`absolute left-0 bottom-0 w-0 h-1 bg-cyan-400 
                                  transition-all duration-300 group-hover:w-full 
                                  ${isActive ? "w-full" : ""}`}></span>
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-3xl text-yellow-400" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 left-0 w-full h-screen bg-[#0f172a]/80 text-white flex flex-col 
                    items-center justify-center space-y-8 transition-transform duration-500 
                    backdrop-blur-2xl ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {["Home", "About", "Services", "Plans", "Contact"].map((item, index) => {
          const path = `/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`;
          const isActive = location.pathname === path;

          return (
            <Link 
              key={index} 
              to={path}
              className={`text-3xl text-gray-200 transition 
                          ${isActive ? "text-cyan-400 font-bold" : "hover:text-cyan-400"}`}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default Navbar;
