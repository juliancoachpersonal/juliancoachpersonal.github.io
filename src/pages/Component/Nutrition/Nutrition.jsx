import { useState } from "react";

// import { dietas } from "../../../utils/data.js";

import { Imc } from '../../../components/IMC/Imc'
import { HarrisBenedict } from "../../../components/HarrisBenedict/HarrisBenedict.jsx";
import { AudioPlayer } from "../../../components/AudioPlayer/AudioPlayer.jsx";

import types from "../../../assets/audios/components/nutrition/types_diets.mp3";
import { HashLink } from "react-router-hash-link";

import { articles_resume } from "../../../utils/dietas.js";


export const Nutrition = () => {

  const list_articles = articles_resume;

  const [isChecked, setIsChecked] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };


  return (
    <div className="py-32 md:py-36 px-6 md:px-36">
        <h2 className="text-center text-5xl pb-2 font-bold text-[#3c8274]">Nutrición</h2>

        

        <div className="flex justify-center mt-6">
          <label className="inline-flex items-center cursor-pointer">
            <span
              className={`me-3 ${
                !isChecked ? "font-bold text-[#3c8274]" : "text-black"
              } text-lg`}
            >
              Calculadora IMC
            </span>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={handleToggle}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-emerald-600 after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-emerald-600"></div>
            <span
              className={`ms-3 ${
                isChecked ? "font-bold text-[#3c8274]" : "text-black"
              } text-lg`}
            >
              Calculadora de calorías
            </span>
          </label>
        </div>


        <div className='flex justify-center my-8'>
              {!isChecked? <Imc></Imc>: <HarrisBenedict></HarrisBenedict>}
        </div>

      
      <div>
        <h3 className=" font-bold text-neutral-600 text-xl text-center my-16 mb-4">
          Explora las mejores dietas y encuentra la que mejor se ajuste a tu medida
        </h3>

        <AudioPlayer url={types} label="Aprende más sobre las dietas" />

        <div className="py-4 flex flex-wrap justify-center gap-8">
          {list_articles &&
            list_articles.map((diet, index) => (
              diet &&
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
                    {diet.title}
                  </h5>
                  <p className="mb-2 text-base text-justify">
                        {diet.desc}
                  </p>
                  <HashLink
                    key={index}
                    className="cursor-pointer inline-block rounded bg-[#3c8274] px-6 pb-2 pt-2.5 font-medium leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                    to={`${diet.id}`}
                  >
                      Más información
                  </HashLink>
                </div>
            </div>
            ))
          }
        </div>



        {/* <div className="py-4 flex flex-wrap justify-center gap-8">
          {dietas &&
            dietas.map((diet, index) => (
              diet &&
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
        </div> */}
      </div>

    </div>
  );
};
