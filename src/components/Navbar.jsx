import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { HiMenuAlt3, HiX } from "react-icons/hi";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center">
      <nav className="w-[90%] mt-8 py-5 px-6 rounded-2xl backdrop-blur-md bg-white/10 border border-white/10 shadow-md shadow-black/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <img
              src="/favicon.webp"
              alt="Logo"
              className="h-12 w-12 object-contain"
            />
            <span className="text-white font-semibold text-xl">Brewsta</span>
          </div>

          <div className="hidden md:flex items-center space-x-6 text-white text-md font-medium">
            <Link
              to="/about"
              className="hover:text-[#d0b185] transition-colors"
            >
              About
            </Link>
            <Link to="/brew" className="hover:text-[#d0b185] transition-colors">
              Brew Bar
            </Link>
            <Link
              to="/order"
              className="border border-[#d0b185] text-[#d0b185] hover:bg-[#b49a6f] hover:text-black px-4 py-2 rounded-lg transition-colors"
            >
              Get a Brew
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white text-2xl"
            >
              {menuOpen ? <HiX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 text-white text-md font-medium">
            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#d0b185]"
            >
              About
            </Link>
            <Link
              to="/brew"
              onClick={() => setMenuOpen(false)}
              className="hover:text-[#d0b185]"
            >
              Brew Bar
            </Link>
            <Link
              to="/order"
              onClick={() => setMenuOpen(false)}
              className="border border-[#d0b185] text-[#d0b185] hover:bg-[#b49a6f] hover:text-black px-4 py-2 rounded-lg"
            >
              Get a Brew
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
