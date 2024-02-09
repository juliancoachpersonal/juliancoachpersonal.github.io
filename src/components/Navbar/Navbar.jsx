import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

export const Navbar = () => {
  const [isMenuHidden, setMenuHidden] = useState(true);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleMenu = () => {
    setMenuHidden(!isMenuHidden);
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  return (
    <div>
      <div className="logo bg-[#394752] flex flex-wrap items-center justify-between px-4 md:px-12 2xl:px-[25%] py-3">
        <div className="">
          <Link to="/" className="m-0 p-0 flex justify-center ps-3">
            <div className="flex items-center px-2">
              <h1 className="main-text p-0 m-0 text-3xl md:text-5xl text-white">
                Julian
              </h1>
            </div>
            <div className="racing-type text-[#d8f934]">
              <h2 className="p-0 m-0 text-xl md:text-3xl">COACH</h2>
              <h2 className="p-0 m-0 text-xl md:text-3xl">PERSONAL</h2>
            </div>
          </Link>
        </div>

        <button
          onClick={toggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        <div
          className={`${
            isMenuHidden && "hidden"
          } w-full md:block md:w-auto pt-4 md:pt-0`}
          id="navbar-default"
        >
          <ul className="font-medium text-lg flex flex-col items-end md:p-0 md:flex-row md:space-x-8 me-6">
            <hr
              className="w-[50%] md:hidden"
              style={{ border: "1px solid #d8f934" }}
            />
            <li>
              <HashLink
                smooth
                to="/#about"
                className="block py-2 text-white rounded md:bg-transparent md:text-white md:hover:text-[#d8f934] md:p-0 dark:text-white"
              >
                Acerca de mí
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#services"
                className="block py-2 text-white rounded md:bg-transparent md:text-white md:hover:text-[#d8f934] md:p-0 dark:text-white"
              >
                Servicios
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#plan"
                className="block py-2 text-white rounded md:bg-transparent md:text-white md:hover:text-[#d8f934] md:p-0 dark:text-white"
              >
                Brochure
              </HashLink>
            </li>

            <li className="relative hidden md:inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>
              <Link 
              className="block py-2 text-white rounded md:bg-transparent md:text-white md:hover:text-[#d8f934] md:p-0 dark:text-white"
              to="/generalidades">
                Generalidades
              </Link>
              

              {isDropdownVisible && (
                <ul className="z-50 absolute left-1/2 -translate-x-1/2 bg-[#d8f934] border py-2 rounded-lg shadow-xl">
                  <li>
                    <Link className="text-slate-800 hover:bg-slate-200 flex items-center px-5 py-2 whitespace-nowrap">
                      Nutrición
                    </Link>
                  </li>
                  <li>
                  <Link className="text-slate-800 hover:bg-slate-200 flex items-center px-5 py-2 whitespace-nowrap">
                      Entrenamiento
                    </Link>
                  </li>
                  <li>
                  <Link className="text-slate-800 hover:bg-slate-200 flex items-center px-5 py-2 whitespace-nowrap">
                      Psicología Deportiva
                    </Link>
                  </li>
                  
                </ul>
              )}
            </li>


            <li>
              <HashLink
                smooth
                to="#contact"
                className="block py-2 text-white rounded md:bg-transparent md:text-white md:hover:text-[#d8f934] md:p-0 dark:text-white"
              >
                Contacto
              </HashLink>
            </li>


            <li className="md:hidden">
              <a
                href="/generalidades/nutricion.html"
                className="block py-2 pb-0 text-white rounded md:bg-transparent md:text-white md:hover:text-[#d8f934] md:p-0 dark:text-white text-right"
              >
                Generalidades
              </a>
              <ul className="md:hidden flex flex-col items-end p-0 pb-2">
                <li>
                  <a
                    href="/generalidades/nutricion.html"
                    className="text-lime-400 text-base"
                  >
                    Nutrición
                  </a>
                </li>
                <li>
                  <a href="" className="text-lime-400 text-base">
                    Entrenamiento
                  </a>
                </li>
                <li>
                  <a href="" className="text-lime-400 text-base">
                    Psicología Deportiva
                  </a>
                </li>
              </ul>
            </li>
            <hr
              className="w-[50%] md:hidden"
              style={{ border: "1px solid #d8f934" }}
            />
          </ul>
        </div>
      </div>
    </div>
  );
};

