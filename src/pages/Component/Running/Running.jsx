import { useEffect } from "react";

import { running } from "../../../utils/data.js";

import clipsCocuy from "../../../assets/images/components/running/publicity.mp4";

import { articles_resume } from "../../../utils/runing.js";
// import { HashLink } from "react-router-hash-link";

export const Running = () => {

  const list_articles = articles_resume;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-32 md:py-36">
      <h2 className="text-center text-4xl text-[#3C8274] font-bold pb-8">
        ¡Corre hacia tus metas sin límites!
      </h2>
      

      <div className="px-6 md:px-36">
        <div className="flex justify-center my-8 md:my-0">
      <video controls playsInline className="md:w-[30%]">
              <source src={clipsCocuy} type="video/mp4"/>
        </video>
      </div>

      <p className="text-center text-neutral-600 text-lg md:mt-6">
          Explora artículos de interés relacionados al running
        </p>

      <div className="py-4 flex flex-wrap justify-center gap-8">
          {
            running.map((diet, index) => (
              <div key={index} className="block rounded-lg bg-white shadow-xl dark:bg-surface-dark md:max-w-[30%]">
                <div
                  className="relative overflow-hidden bg-cover bg-no-repeat"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  <img
                    className="rounded-t-lg"
                    src={diet.image}
                    alt=""
                  />
                  <a href="#!">
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
                <div className="p-6 text-surface ">
                  <h5 className="mb-2 text-xl font-bold leading-tight text-[#3c8274]">
                    {diet.name}
                  </h5>
                  <p className="mb-2 text-base text-justify">
                        {diet.description}
                  </p>
                  <a
                    type="button"
                    className="cursor-pointer inline-block rounded bg-[#3c8274] px-6 pb-2 pt-2.5 font-medium leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    href={diet?.url}
                    target="_blanket"
                  >
                    Más información
                  </a>
                </div>
            </div>
            ))
          }
        </div>

      <div className="py-4 flex flex-wrap justify-center gap-8">
          {
            list_articles.map((item, index) => (
              <div key={index} className="block rounded-lg bg-white shadow-xl dark:bg-surface-dark md:max-w-[30%]">
                <div
                  className="relative overflow-hidden bg-cover bg-no-repeat"
                  data-twe-ripple-init
                  data-twe-ripple-color="light"
                >
                  <img
                    className="rounded-t-lg"
                    src={item.image}
                    alt=""
                  />
                  <a href="#!">
                    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
                  </a>
                </div>
                <div className="p-6 text-surface ">
                  <h5 className="mb-2 text-xl font-bold leading-tight text-[#3c8274]">
                    {item.title}
                  </h5>
                  <p className="mb-2 text-base text-justify">
                        {item.desc}
                  </p>
                  <a
                    type="button"
                    className="cursor-pointer inline-block rounded bg-[#3c8274] px-6 pb-2 pt-2.5 font-medium leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    data-twe-ripple-init
                    data-twe-ripple-color="light"
                    href={item?.url}
                    target="_blanket"
                  >
                    Más información
                  </a>
                </div>
            </div>
            ))
          }
        </div>

        
      </div>
    </div>
  );
};
