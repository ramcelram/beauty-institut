import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 w-full bg-pink-300 shadow-md z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/">
          <img
            src="/images/logo_du_site.png"
            alt="Celina Beauty Queen"
            className="h-12 w-12 object-cover rounded-full border-2 border-pink-500 shadow-sm"
          />
        </Link>

        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-pink-700 text-2xl">
            {isOpen ? "✖" : "☰"}
          </button>
        </div>

        <div
          className={`flex-col gap-4 absolute top-16 left-0 w-full bg-pink-300 py-4 px-6 transition-all duration-300 ${
            isOpen ? "flex" : "hidden"
          } md:static md:flex md:flex-row md:bg-transparent md:py-0 md:px-0 md:gap-8`}
        >
          <Link
            to="/"
            className={`font-medium transition ${
              location.pathname === "/" ? "text-pink-700" : "text-gray-800"
            } hover:text-pink-500`}
            onClick={() => setIsOpen(false)}
          >
            Accueil
          </Link>
          <Link
            to="/services"
            className={`font-medium transition ${
              location.pathname === "/services"
                ? "text-pink-700"
                : "text-gray-800"
            } hover:text-pink-500`}
            onClick={() => setIsOpen(false)}
          >
            Nos Services
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
