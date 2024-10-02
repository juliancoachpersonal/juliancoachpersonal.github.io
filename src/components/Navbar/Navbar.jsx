import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

// import { useTranslation } from "react-i18next";

import logo from "../../assets/images/profile/logo.png";
import spain from "../../assets/images/navbar/spain.svg";
import english from "../../assets/images/navbar/english.svg";

const locales = {
  es: { title: "Es", flag: spain },
  en: { title: "En", flag: english  },
};

export const Navbar = ({t, i18n }) => {
  // const { t, i18n } = useTranslation();

  const navigate = useNavigate();

  const [isMenuHidden, setMenuHidden] = useState(true);
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isDropLanVisible, setDropLanVisible] = useState(false);
  const [isSearchVisible, setSearchVisible] = useState(false);
  const [filterValue, setFilterValue] = useState("");

  const toggleMenu = () => {
    setMenuHidden(!isMenuHidden);
  };

  const handleMouseEnter = () => {
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    setDropdownVisible(false);
  };

  const handleMouseLanEnter = () => {
    setDropLanVisible(true);
  };

  const handleMouseLanLeave = () => {
    setDropLanVisible(false);
  };

  const handleSearchBox = () => {
    setSearchVisible(!isSearchVisible);
  };

  const navigateToArticles = () => {
    navigate(`generalidades/${filterValue}`);
    handleSearchBox();
    setFilterValue("");
  };

  return (
    <div>
      <div className="logo fixed top-0 z-50 w-full mb-5 flex flex-wrap justify-between items-center px-4 md:px-24 2xl:px-[25%] py-3 shadow-xl bg-white">
        <div className="">
          <Link to="/" className="m-0 p-0 flex justify-center ps-3">
            <img src={logo} alt="logo" className="w-[4rem]" />
            {/* <div className="flex items-center px-2">
              <h1 className="main-text p-0 m-0 text-3xl md:text-4xl text-[#394752]">
                Julian
              </h1>
            </div>
            <div className="racing-type text-[#a3e635]">
              <h2 className="p-0 m-0 text-xl md:text-2xl">COACH</h2>
              <h2 className="p-0 m-0 text-xl md:text-2xl">PERSONAL</h2>
            </div> */}
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
          <ul className="font-medium text-md flex flex-col items-end md:p-0 md:flex-row md:space-x-8 me-6">
            <hr
              className="w-[50%] md:hidden"
              style={{ border: "1px solid #d8f934" }}
            />
            <li>
              <HashLink
                smooth
                to="/#services"
                className="block py-2 text-[#394752] rounded md:bg-transparent md:text-[#394752] md:hover:text-[#3c8274] md:p-0"
              >
                {t("services")}
              </HashLink>
            </li>
            <li>
              <HashLink
                smooth
                to="/#about"
                className="block py-2 text-[#394752] rounded md:bg-transparent md:text-[#394752] md:hover:text-[#3c8274] md:p-0"
              >
                {t("about_me")}
              </HashLink>
            </li>

            <li>
              <HashLink
                smooth
                to="/#plan"
                className="block py-2 text-[#394752] rounded md:bg-transparent md:text-[#394752] md:hover:text-[#3c8274] md:p-0"
              >
                {t("brochure")}
              </HashLink>
            </li>

            <li
              className="relative hidden md:inline-block"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                className="block py-2 text-[#394752] rounded md:bg-transparent md:text-[#394752] md:hover:text-[#3c8274] md:p-0"
                to="/generalidades/nutricion"
              >
                {t("generalities.main")}
              </Link>

              {isDropdownVisible && (
                <ul className="z-50 absolute left-1/2 -translate-x-1/2 bg-[#3c8274] border py-2 rounded-lg shadow-xl">
                  <li>
                    <Link
                      className="text-white hover:bg-slate-200 hover:text-[#3c8274] flex items-center px-5 py-2 whitespace-nowrap"
                      to="/generalidades/nutricion"
                    >
                      {t("generalities.nutrition")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white hover:bg-slate-200 hover:text-[#3c8274] flex items-center px-5 py-2 whitespace-nowrap"
                      to="/generalidades/entrenamiento"
                    >
                      {t("generalities.train")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="text-white hover:bg-slate-200 hover:text-[#3c8274] flex items-center px-5 py-2 whitespace-nowrap"
                      to="/generalidades/psicologia"
                    >
                      {t("generalities.psychology")}
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <HashLink
                smooth
                to="/#contact"
                className="block py-2 text-[#394752] rounded md:bg-transparent md:text-[#394752] md:hover:text-[#3c8274] md:p-0"
              >
                {t("contact_me")}
              </HashLink>
            </li>

            <li
              className="relative hidden md:inline-block self-end"
              onMouseEnter={handleMouseLanEnter}
              onMouseLeave={handleMouseLanLeave}
            >
              <Link
                className="block py-2 text-[#3c8274] hover:text-[#3c8274] md:p-0"
                to="/"
              >
                <i className="fa-solid fa-language text-3xl m-0 p-0"></i>
              </Link>

              {isDropLanVisible && (
                <ul className="z-50 absolute left-1/2 -translate-x-1/2  bg-slate-200 border py-2 rounded-lg shadow-xl min-w-md overflow-hidden">
                {Object.keys(locales).map((locale) => (
                  <div key={locale} className="flex items-center px-2">
                    
                    <li className="hover:bg-slate-300 hover:text-[#3c8274] flex items-center py-2">  
                    
                      <button
                        style={{
                          fontWeight: i18n.resolvedLanguage === locale ? "bold" : "normal",
                        }}
                        type="submit"
                        onClick={() => i18n.changeLanguage(locale)}
                        className="flex"
                      >
                        <img 
                      src={locales[locale].flag} 
                      alt="flag" 
                      className="mr-6 rounded-full" 
                    />
                        {/* {locales[locale].title} */}
                      </button>
                    </li>
                  </div>
                ))}
              </ul>
                // <ul className="z-50 absolute left-1/2 -translate-x-1/2 bg-[#3c8274] border py-2 rounded-lg shadow-xl">
                //   <li>
                //     <Link className="text-white hover:bg-slate-200 hover:text-[#3c8274] flex items-center px-5 py-2 whitespace-nowrap"
                //         to="/generalidades/nutricion">
                //       Nutrición
                //     </Link>
                //   </li>
                //   <li>
                //   <Link className="text-white hover:bg-slate-200 hover:text-[#3c8274] flex items-center px-5 py-2 whitespace-nowrap"
                //         to="/generalidades/entrenamiento">
                //       Entrenamiento
                //     </Link>
                //   </li>
                //   <li>
                //   <Link className="text-white hover:bg-slate-200 hover:text-[#3c8274] flex items-center px-5 py-2 whitespace-nowrap"
                //       to="/generalidades/psicologia">
                //       Psicología Deportiva
                //     </Link>
                //   </li>

                // </ul>
              )}
            </li>

            {/* <li>
            <i className="fa-solid fa-language"></i>
                <ul>
                  
            {Object.keys(locales).map((locale) => (
              <li key={locale}><button style={{ fontWeight: i18n.resolvedLanguage === locale ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(locale)}>
                {locales[locale].title}
              </button></li>
            ))}
          </ul>
            </li> */}

            <li className="md:hidden">
              <a
                href="/generalidades/nutricion.html"
                className="block py-2 pb-0 text-[#394752] rounded md:bg-transparent md:text-[#394752] md:hover:text-[#3c8274] md:p-0 text-right"
              >
                Generalidades
              </a>
              <ul className="md:hidden flex flex-col items-end p-0 pb-2">
                <li>
                  <Link
                    className="text-[#3c8274] text-base"
                    to="/generalidades/nutricion"
                  >
                    Nutrición
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[#3c8274] text-base"
                    to="/generalidades/entrenamiento"
                  >
                    Entrenamiento
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-[#3c8274] text-base"
                    to="/generalidades/psicologia"
                  >
                    Psicología Deportiva
                  </Link>
                </li>
              </ul>
            </li>
            <hr
              className="w-[50%] md:hidden"
              style={{ border: "1px solid #d8f934" }}
            />
          </ul>
        </div>
        <div className="hidden md:inline-block">
          <div className="relative">
            <button onClick={handleSearchBox}>
              {isSearchVisible ? (
                <i className="fa-solid fa-xmark text-lg hover:text-[#3c8274]"></i>
              ) : (
                <i className="fa-solid fa-magnifying-glass text-lg hover:text-[#3c8274]"></i>
              )}
            </button>

            {isSearchVisible && (
              <div className="w-[320px] px-3 py-6 z-50 absolute right-1/4 top--4 bg-white border rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
                <input
                  value={filterValue}
                  onChange={(e) => {
                    setFilterValue(e.target.value);
                  }}
                  placeholder="Busca artículos por palabra clave"
                  className="block w-full px-5 py-2 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
                />
                <button
                  onClick={navigateToArticles}
                  type="button"
                  className="flex items-center justify-center mt-2 w-full px-10 py-2 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-[#3c8274] rounded-xl hover:bg-[#60b6a5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Buscar
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
