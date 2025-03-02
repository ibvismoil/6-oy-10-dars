import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("auth") === "true");

  const handleLogout = () => {
    localStorage.removeItem("auth");
    setIsAuthenticated(false);
    navigate("/login");
  };

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </Link>

        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          {isAuthenticated && (
            <Link to="/add" className="mr-5 hover:text-gray-900">
              ➕ Odam qoshish
            </Link>
          )}
          <Link to="/about" className="mr-5 hover:text-gray-900">О нас</Link>
          <Link to="/services" className="mr-5 hover:text-gray-900">Сервисы</Link>
          <Link to="/contact" className="mr-5 hover:text-gray-900">Контакты</Link>
        </nav>

        {isAuthenticated ? (
          <button
            onClick={handleLogout}
            className="inline-flex items-center bg-red-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-red-600 rounded text-base mt-4 md:mt-0"
          >
            🚪 Chiqish
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="inline-flex items-center bg-green-500 text-white border-0 py-1 px-3 focus:outline-none hover:bg-green-600 rounded text-base mt-4 md:mt-0"
          >
            🔑 Kirish
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
