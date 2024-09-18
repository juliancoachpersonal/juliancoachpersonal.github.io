import workout1 from '../../assets/images/generality/workout/workout1.jpg'
import workout2 from '../../assets/images/generality/workout/workout2.jpg'
import workout3 from '../../assets/images/generality/workout/workout3.jpg'

import nutrition1 from '../../assets/images/generality/nutrition/nutri1.jpg'
import nutrition2 from '../../assets/images/generality/nutrition/nutri2.jpg'
import nutrition3 from '../../assets/images/generality/nutrition/nutri3.jpg'

import mental1 from '../../assets/images/generality/psychology/mental1.jpg'
import mental2 from '../../assets/images/generality/psychology/mental2.jpg'
import mental3 from '../../assets/images/generality/psychology/mental3.jpg'

export const Component = () => {
  return (
    <div className="py-32 md:py-36 px-6 md:px-36">
        <h2 className="text-center text-5xl pb-16 font-bold text-[#3c8274]">Componentes</h2>
      {/* Componente */}
      <div id="c_deportivo" className="">
        <h3 className="text-[#3c8274] font-bold text-3xl">
          Componente Deportivo
        </h3>

        <div className="py-4 flex flex-wrap justify-center gap-8">
          <div className="block rounded-lg bg-white shadow-xl dark:bg-surface-dark md:max-w-[30%]">
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              <img
                className="rounded-t-lg"
                src={workout1}
                alt=""
              />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div className="p-6 text-surface ">
              <h5 className="mb-2 text-xl font-medium leading-tight">
                Video 
              </h5>
              <p className="mb-4 text-base">
                Descripción video del video donde se explica acerca del entrenamiento
              </p>
              <button
                type="button"
                className="inline-block rounded bg-[#3c8274] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Explorar más
              </button>
            </div>
          </div>
          <div className="block rounded-lg bg-white shadow-xl dark:bg-surface-dark md:max-w-[30%]">
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              <img
                className="rounded-t-lg"
                src={workout2}
                alt=""
              />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div className="p-6 text-surface ">
              <h5 className="mb-2 text-xl font-medium leading-tight">
                Video 
              </h5>
              <p className="mb-4 text-base">
                Descripción video del video donde se explica acerca del entrenamiento
              </p>
              <button
                type="button"
                className="inline-block rounded bg-[#3c8274] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Explorar más
              </button>
            </div>
          </div>
          <div className="block rounded-lg bg-white shadow-xl dark:bg-surface-dark md:max-w-[30%]">
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              <img
                className="rounded-t-lg"
                src={workout3}
                alt=""
              />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div className="p-6 text-surface ">
              <h5 className="mb-2 text-xl font-medium leading-tight">
                Video 
              </h5>
              <p className="mb-4 text-base">
                Descripción video del video donde se explica acerca del entrenamiento
              </p>
              <button
                type="button"
                className="inline-block rounded bg-[#3c8274] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Explorar más
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Componente 2 */}
      <div id="c_nutricion" className="pt-16 md:pt-24">
        <h3 className="text-[#3c8274] font-bold text-3xl">
          Componente Nutricional Deportivo
        </h3>

        <div className="py-4 flex flex-wrap justify-center gap-8">
          <div className="block rounded-lg bg-white shadow-xl dark:bg-surface-dark md:max-w-[30%]">
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              <img
                className="rounded-t-lg"
                src={nutrition1}
                alt=""
              />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div className="p-6 text-surface ">
              <h5 className="mb-2 text-xl font-medium leading-tight">
                Video 
              </h5>
              <p className="mb-4 text-base">
                Descripción video del video donde se explica acerca de la nutrición
              </p>
              <button
                type="button"
                className="inline-block rounded bg-[#3c8274] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Explorar más
              </button>
            </div>
          </div>
          <div className="block rounded-lg bg-white shadow-xl dark:bg-surface-dark md:max-w-[30%]">
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              <img
                className="rounded-t-lg"
                src={nutrition2}
                alt=""
              />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div className="p-6 text-surface ">
              <h5 className="mb-2 text-xl font-medium leading-tight">
                Video 
              </h5>
              <p className="mb-4 text-base">
                Descripción video del video donde se explica acerca de la nutrición
              </p>
              <button
                type="button"
                className="inline-block rounded bg-[#3c8274] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Explorar más
              </button>
            </div>
          </div>
          <div className="block rounded-lg bg-white shadow-xl dark:bg-surface-dark md:max-w-[30%]">
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              <img
                className="rounded-t-lg"
                src={nutrition3}
                alt=""
              />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div className="p-6 text-surface ">
              <h5 className="mb-2 text-xl font-medium leading-tight">
                Video 
              </h5>
              <p className="mb-4 text-base">
                Descripción video del video donde se explica acerca de la nutrición
              </p>
              <button
                type="button"
                className="inline-block rounded bg-[#3c8274] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Explorar más
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Componente 3 */}
      <div id="c_psycho" className="pt-16 md:pt-24">
        <h3 className="text-[#3c8274] font-bold text-3xl">
          Componente Psicológico Deportivo
        </h3>

        <div className="py-4 flex flex-wrap justify-center gap-8">
          <div className="block rounded-lg bg-white shadow-xl dark:bg-surface-dark md:max-w-[30%]">
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              <img
                className="rounded-t-lg"
                src={mental1}
                alt=""
              />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div className="p-6 text-surface ">
              <h5 className="mb-2 text-xl font-medium leading-tight">
                Video 
              </h5>
              <p className="mb-4 text-base">
                Descripción video del video donde se explica acerca de la Psicología Deportiva
              </p>
              <button
                type="button"
                className="inline-block rounded bg-[#3c8274] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Explorar más
              </button>
            </div>
          </div>
          <div className="block rounded-lg bg-white shadow-xl dark:bg-surface-dark md:max-w-[30%]">
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              <img
                className="rounded-t-lg"
                src={mental2}
                alt=""
              />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div className="p-6 text-surface ">
              <h5 className="mb-2 text-xl font-medium leading-tight">
                Video 
              </h5>
              <p className="mb-4 text-base">
                Descripción video del video donde se explica acerca de la Psicología Deportiva
              </p>
              <button
                type="button"
                className="inline-block rounded bg-[#3c8274] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Explorar más
              </button>
            </div>
          </div>
          <div className="block rounded-lg bg-white shadow-xl dark:bg-surface-dark md:max-w-[30%]">
            <div
              className="relative overflow-hidden bg-cover bg-no-repeat"
              data-twe-ripple-init
              data-twe-ripple-color="light"
            >
              <img
                className="rounded-t-lg"
                src={mental3}
                alt=""
              />
              <a href="#!">
                <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"></div>
              </a>
            </div>
            <div className="p-6 text-surface ">
              <h5 className="mb-2 text-xl font-medium leading-tight">
                Video 
              </h5>
              <p className="mb-4 text-base">
                Descripción video del video donde se explica acerca de la Psicología Deportiva
              </p>
              <button
                type="button"
                className="inline-block rounded bg-[#3c8274] px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
                data-twe-ripple-init
                data-twe-ripple-color="light"
              >
                Explorar más
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
