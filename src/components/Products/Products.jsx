import { HashLink } from "react-router-hash-link";
import "./Products.css";

export const Products = ({t}) => {
  console.log('Language', t)
  return (
    <div id="services" className="bg-[#3c8274] mt-6">
      {/* Divider */}
      <div className="custom-shape-divider-top-1711750337">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>

      {/* services */}
      <div className="py-8">
        <h2 className="text-white text-center text-5xl font-bold">
        {t("products.title")}
        </h2>
        <p className="text-white text-center py-6 text-xl">
        {t("products.desc")}
        </p>

        <div className="flex flex-wrap justify-center gap-5 px-4 py-4 md:py-8">
        {/* /componentes#c_deportivo */}
          <HashLink smooth to="/componentes/entrenamiento">
            <div className="group relative cursor-pointer overflow-hidden bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm rounded-lg px-8">
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#6e9f9c] transition-all duration-300 group-hover:scale-[12]"></span>
              <div className="relative max-w-md">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-[#3c8274] transition-all duration-300 group-hover:bg-[#4d7a77]">
                  <i className="fa-solid fa-dumbbell text-white transition-all text-4xl"></i>
                </span>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <h3 className="font-bold text-xl text-[#3c8274] group-hover:text-white">
                    {t("products.components.train.title")}
                  </h3>
                  <p className="text-justify">
                    {t("products.components.train.desc")}
                  </p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <p>
                    <a
                      href="#"
                      className="text-[#3c8274] transition-all duration-300 group-hover:text-white"
                    >
                      {t("products.see_more")} &rarr;
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </HashLink>

          <HashLink smooth to="/componentes/nutricion">
            <div className="group relative cursor-pointer overflow-hidden bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm rounded-lg px-8">
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#6e9f9c] transition-all duration-300 group-hover:scale-[12]"></span>
              <div className="relative max-w-md">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-[#3c8274] transition-all duration-300 group-hover:bg-[#4d7a77]">
                  <i className="fa-solid fa-bowl-food text-white transition-all text-4xl"></i>
                </span>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <h3 className="font-bold text-xl text-[#3c8274] group-hover:text-white">
                    {t("products.components.nutrition.title")}
                  </h3>
                  <p className="text-justify">
                    {t("products.components.nutrition.desc")}
                  </p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <p>
                    <a
                      href="#"
                      className="text-[#3c8274] transition-all duration-300 group-hover:text-white"
                    >
                      {t("products.see_more")} &rarr;
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </HashLink>

          {/* /componentes#c_psycho */}
          <HashLink smooth to="/componentes/psicologia">
            <div className="group relative cursor-pointer overflow-hidden bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm rounded-lg px-8">
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#6e9f9c] transition-all duration-300 group-hover:scale-[12]"></span>
              <div className="relative max-w-md">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-[#3c8274] transition-all duration-300 group-hover:bg-[#4d7a77]">
                  <i className="fa-solid fa-brain text-white transition-all text-4xl"></i>
                </span>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <h3 className="font-bold text-xl text-[#3c8274] group-hover:text-white">
                    {t("products.components.psychology.title")}
                  </h3>
                  <p className="text-justify">
                    {t("products.components.psychology.desc")}
                  </p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <p>
                    <a
                      href="#"
                      className="text-[#3c8274] transition-all duration-300 group-hover:text-white"
                    >
                      {t("products.see_more")} &rarr;
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </HashLink>

          <HashLink to="/componentes/aventura">
            <div className="group relative cursor-pointer overflow-hidden bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm rounded-lg px-8">
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#6e9f9c] transition-all duration-300 group-hover:scale-[12]"></span>
              <div className="relative max-w-md">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-[#3c8274] transition-all duration-300 group-hover:bg-[#4d7a77]">
                  <i className="fa-solid fa-person-walking-luggage text-white transition-all text-5xl"></i>
                </span>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <h3 className="font-bold text-xl text-[#3c8274] group-hover:text-white">
                    {t("products.components.adventure.title")}
                  </h3>
                  <p className="text-justify">
                  {t("products.components.adventure.desc")}
                  </p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <p>
                    <a
                      href="#"
                      className="text-[#3c8274] transition-all duration-300 group-hover:text-white"
                    >
                      {t("products.see_more")} &rarr;
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </HashLink>

          <HashLink to="/componentes/running">
            <div className="group relative cursor-pointer overflow-hidden bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm rounded-lg px-8">
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#6e9f9c] transition-all duration-300 group-hover:scale-[12]"></span>
              <div className="relative max-w-md">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-[#3c8274] transition-all duration-300 group-hover:bg-[#4d7a77]">
                  <i className="fa-solid fa-person-running text-white transition-all text-5xl"></i>
                </span>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <h3 className="font-bold text-xl text-[#3c8274] group-hover:text-white">
                  {t("products.components.running.title")}
                  </h3>
                  <p className="text-justify">
                  {t("products.components.running.desc")}
                  </p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <p>
                    <a
                      href="#"
                      className="text-[#3c8274] transition-all duration-300 group-hover:text-white"
                    >
                      {t("products.see_more")} &rarr;
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </HashLink>

          <HashLink smooth to="/componentes/esports">
            <div className="group relative cursor-pointer overflow-hidden bg-white pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm rounded-lg px-8">
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#6e9f9c] transition-all duration-300 group-hover:scale-[12]"></span>
              <div className="relative max-w-md">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-[#3c8274] transition-all duration-300 group-hover:bg-[#4d7a77]">
                  <i className="fa-solid fa-gamepad text-white transition-all text-5xl"></i>
                </span>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <h3 className="font-bold text-xl text-[#3c8274] group-hover:text-white">
                  {t("products.components.esports.title")}
                  </h3>
                  <p className="text-justify">
                  {t("products.components.esports.desc")}
                  </p>
                </div>
                <div className="pt-5 text-base font-semibold leading-7">
                  <p>
                    <a
                      href="#"
                      className="text-[#3c8274] transition-all duration-300 group-hover:text-white"
                    >
                      {t("products.see_more")} &rarr;
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </HashLink>
        </div>
      </div>
    </div>
  );
};
