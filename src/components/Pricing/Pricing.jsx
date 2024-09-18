import { useState } from "react";

import "./Pricing.css";
// import brochureService from "../../assets/files/landing/brochure_cop.pdf";
// import brochureSpecific from "../../assets/files/landing/brochure_usd.pdf";
import nequi from "../../assets/images/landing/icons/nequi.svg";
import paypal from "../../assets/images/landing/icons/paypal.png";
import daviplata from "../../assets/images/landing/icons/daviplata.png";
import approve from "../../assets/images/prices/approve.webp";

export const Pricing = () => {
  const [isChecked, setIsChecked] = useState(true);

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.classList.add("overflow-y-hidden");
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove("overflow-y-hidden");
  };

  const handleToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div id="plan" className="bg-[#3c8274] pb-12">
      {isOpen && (
        <div
          id="modelConfirm"
          className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4"
        >
          <div className="relative top-10 mx-auto shadow-xl rounded-md bg-white max-w-2xl">
            <div className="flex justify-end p-2">
              <button
                onClick={closeModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="p-6 px-8 pt-0 text-center overflow-y-auto max-h-82 md:max-h-90">
              <h3 className="text-[#3c8274] font-bold mb-2 text-2xl">
                MANTENIMIENTO MUSCULAR
              </h3>
              <i className="fa-solid fa-notes-medical text-[#3c8274] text-6xl"></i>
              <div className="mt-8">
                <h5 className="text-left text-[#3c8274] font-bold mt-4">
                  Aromaterapia
                </h5>
                <p className="text-justify">
                  La aromaterapia utiliza aceites esenciales extraídos de
                  plantas para promover la relajación, aliviar el estrés y
                  mejorar el bienestar emocional. Se aplican mediante masajes,
                  inhalación o difusión.
                </p>
                <p className="text-justify">
                  Dentro de los beneficios, ayuda a reducir la ansiedad, mejorar
                  el sueño y aliviar dolores musculares.
                </p>
                <h5 className="text-left text-[#3c8274] font-bold mt-4">
                  Acuaterapia (o hidroterapia)
                </h5>
                <p className="text-justify">
                  Consiste en realizar ejercicios y terapia en el agua. El agua
                  proporciona soporte y resistencia, lo que facilita la
                  rehabilitación y el fortalecimiento muscular.
                </p>
                <p className="text-justify">
                  Tiene beneficios como mejorar la movilidad, aliviar el dolor y
                  favorecer la relajación.
                </p>
                <h5 className="text-left text-[#3c8274] font-bold mt-4">
                  Reflexología
                </h5>
                <p className="text-justify">
                  Se basa en la estimulación de puntos específicos en los pies,
                  manos o orejas para influir en órganos y sistemas del cuerpo.
                  Cada zona refleja una parte del cuerpo.
                </p>
                <p className="text-justify">
                  Tiene beneficios como aliviar el estrés, mejorar la
                  circulación y equilibrar energéticamente.
                </p>
                <h5 className="text-left text-[#3c8274] font-bold mt-4">
                  Cromoterapia
                </h5>
                <p className="text-justify">
                  Utiliza colores para influir en el estado emocional y físico.
                  Se aplica mediante luces de diferentes tonalidades o
                  visualización de colores.
                </p>
                <p className="text-justify">
                  Tiene beneficios como promover la armonía, estimular la
                  energía y ayudar en el tratamiento de trastornos específicos.
                </p>
              </div>

              <button
                onClick={closeModal}
                className="text-white text-xl mt-2 bg-[#3c8274] hover:bg-[#4a9e8d] focus:ring-4 focus:ring-red-300 font-medium rounded-lg inline-flex items-center px-12 py-2.5 text-center "
              >
                Regresar
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="custom-shape-divider-top-1711765483">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="py-8">
        <h2 className="text-white text-center text-5xl font-bold">
          Planes y Precios
        </h2>
      </div>

      <div className="px-4">
        <div>
          <p className="max-w-3xl mx-auto text-xl text-center text-white">
            Elige el plan a tu medida
          </p>
        </div>

        <div className="flex justify-center mt-6">
          <label className="inline-flex items-center cursor-pointer">
            <span
              className={`me-3 ${
                !isChecked ? "font-bold text-yellow-300" : "text-white"
              } text-lg`}
            >
              Precio en pesos (COP)
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
                isChecked ? "font-bold text-yellow-300" : "text-white"
              } text-lg`}
            >
              Precio en dólares (USD)
            </span>
          </label>
        </div>

        <div className="mt-10 flex justify-center flex-wrap gap-8 ">
          

          <div className="relative p-8  bg-gray-200 rounded-2xl shadow-sm flex flex-col md:max-w-[30%]">
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="text-4xl font-semibold ">
                  Plan Intermedio (Bronce)
                </h3>
                <span className="text-3xl">🥉</span>
              </div>
              {/* <p className="absolute top-0 py-1.5 px-4 bg-emerald-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide  transform -translate-y-1/2">
                Descuento en tu primera sesión
              </p> */}
              <p className="mt-4 flex items-baseline ">
                <span className="text-3xl text-emerald-500 font-extrabold tracking-tight pe-5">
                  {!isChecked ? "$390.000" : "111 USD"}
                </span>
              </p>
              <p className="mt-6 text-justify">
                Perfecto para quienes buscan un equilibrio entre costo y
                beneficio, y desean un progreso constante y sostenido.
              </p>
              <p className="mt-2 text-justify">Incluye:</p>
              <ul role="list" className="mt-6 space-y-3">
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 ">
                    6 sesiones de entrenamiento deportivo
                  </span>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 ">1 sesión de nutrición deportiva</span>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 ">
                    1 sesión de psicología deportiva
                  </span>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-justify">
                    1 sesión de mantenimiento muscular (que puede ser
                    rehabilitación muscular-articular, acuaterapia,
                    aromaterapia, reflexología, cromoterapia).{" "}
                    <button
                      onClick={openModal}
                      className="inline text-emerald-500 mx-auto mb-4 text-sm font-semibold"
                    >
                      Encuentra más información
                    </button>
                  </span>
                </li>
              </ul>

              <p className="mt-6 md:mt-12 text-gray-500">
                * Las sesiones pueden tomarse de forma virtual y/o presencial
              </p>
            </div>

            <p className="text-emerald-700 font-bold mt-6">
              Medios de Pago disponibles:
            </p>

            <div className="flex justify-center w-full flex-wrap">
              <a
                className="bg-emerald-50 text-emerald-700 font-bold hover:bg-emerald-100 mt-4 inline w-full py-3 px-6 border border-transparent rounded-md text-center"
                href="https://transacciones.nequi.com/bdigital/login.jsp"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="w-[40%] inline mx-3"
                  src={nequi}
                  alt="logo_nequi"
                />
              </a>

              <a
                className="bg-emerald-50 text-emerald-700 font-bold hover:bg-emerald-100 mt-4 inline w-full py-3 px-6 border border-transparent rounded-md text-center"
                href="https://www.daviplata.com/wps/portal/daviplata/Home/ComoMeterlePlata/DesdeOtroBanco"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="w-[40%] inline mx-3"
                  src={daviplata}
                  alt="logo_nequi"
                />
              </a>

              <a
                className="bg-emerald-50 text-emerald-700 font-bold hover:bg-emerald-100 mt-4 inline w-full py-3 px-6 border border-transparent rounded-md text-center"
                href="https://www.paypal.com/ncp/payment/4BFHVQ82JTCEN"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="w-[40%] inline mx-3"
                  src={paypal}
                  alt="logo_paypal"
                />
              </a>
            </div>
          </div>

          <div className="relative p-8  bg-gray-200 rounded-2xl shadow-sm flex flex-col md:max-w-[30%]">
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="text-4xl font-semibold ">
                  Plan Platino (Platinum)
                </h3>
                <span className="text-3xl">🥈</span>
              </div>

              <p className="absolute top-0 py-1.5 px-4 bg-emerald-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide  transform -translate-y-1/2">
                Recomendado
              </p>
              <p className="mt-4 flex items-baseline ">
                <span className="text-3xl text-emerald-500 font-extrabold tracking-tight pe-5">
                  {!isChecked ? "$575.000" : "164 USD"}
                </span>
              </p>
              <p className="mt-6 text-justify">
                Diseñado para quienes desean maximizar su rendimiento y alcanzar
                metas más ambiciosas.
              </p>
              <p className="mt-2 text-justify">Incluye:</p>
              <ul role="list" className="mt-6 space-y-3">
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 ">
                    8 sesiones de entrenamiento deportivo
                  </span>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 ">
                    3 sesiones de nutrición deportiva
                  </span>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-justify">
                    2 sesiones de mantenimiento muscular (que puede ser
                    rehabilitación muscular-articular, acuaterapia,
                    aromaterapia, reflexología, cromoterapia){" "}
                    <button
                      onClick={openModal}
                      className="inline text-emerald-500 mx-auto mb-4 text-sm font-semibold"
                    >
                      Encuentra más información
                    </button>
                  </span>
                </li>
              </ul>

              <p className="mt-6 md:mt-12 text-gray-500">
                * Las sesiones pueden tomarse de forma virtual y/o presencial
              </p>
            </div>

            <p className="text-emerald-700 font-bold mt-6">
              Medios de Pago disponibles:
            </p>

            <div className="flex justify-center w-full flex-wrap">
              <a
                className="bg-emerald-50 text-emerald-700 font-bold hover:bg-emerald-100 mt-4 inline w-full py-3 px-6 border border-transparent rounded-md text-center"
                href="https://transacciones.nequi.com/bdigital/login.jsp"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="w-[40%] inline mx-3"
                  src={nequi}
                  alt="logo_nequi"
                />
              </a>

              <a
                className="bg-emerald-50 text-emerald-700 font-bold hover:bg-emerald-100 mt-4 inline w-full py-3 px-6 border border-transparent rounded-md text-center"
                href="https://www.daviplata.com/wps/portal/daviplata/Home/ComoMeterlePlata/DesdeOtroBanco"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="w-[40%] inline mx-3"
                  src={daviplata}
                  alt="logo_nequi"
                />
              </a>

              <a
                className="bg-emerald-50 text-emerald-700 font-bold hover:bg-emerald-100 mt-4 inline w-full py-3 px-6 border border-transparent rounded-md text-center"
                href="https://www.paypal.com/ncp/payment/UA6XD2E9SPU5U"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="w-[40%] inline mx-3"
                  src={paypal}
                  alt="logo_paypal"
                />
              </a>
            </div>
          </div>

          <div className="relative p-8  bg-gray-200 rounded-2xl shadow-sm flex flex-col md:max-w-[30%]">
            <div className="flex-1">
            <div className="flex justify-between items-center">
                <h3 className="text-4xl font-semibold ">
                Plan Diamante (Diamont)
                </h3>
                <span className="text-3xl">💎</span>
              </div>
              {/* <p className="absolute top-0 py-1.5 px-4 bg-emerald-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide  transform -translate-y-1/2">
                Recomendado
              </p> */}
              <p className="mt-4 flex items-baseline ">
                <span className="text-3xl text-emerald-500 font-extrabold tracking-tight pe-5">
                  {!isChecked ? "$840.000" : "240 USD"}
                </span>
              </p>
              <p className="mt-6 text-justify">
                La opción más completa y exclusiva. Ideal para quienes buscan un
                enfoque integral y de alto rendimiento.
              </p>
              <p className="mt-2 text-justify">Incluye:</p>
              <ul role="list" className="mt-6 space-y-3">
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 ">
                    12 sesiones de entrenamiento deportivo
                  </span>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 ">
                    4 sesiones de nutrición deportiva
                  </span>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 text-justify">
                    3 sesiones de mantenimiento muscular (que puede ser
                    rehabilitación muscular-articular, acuaterapia,
                    aromaterapia, reflexología, cromoterapia){" "}
                    <button
                      onClick={openModal}
                      className="inline text-emerald-500 mx-auto mb-4 text-sm font-semibold"
                    >
                      Encuentra más información
                    </button>
                  </span>
                </li>
              </ul>

              <p className="mt-6 md:mt-12 text-gray-500">
                * Las sesiones pueden tomarse de forma virtual y/o presencial
              </p>
            </div>

            <p className="text-emerald-700 font-bold mt-6">
              Medios de Pago disponibles:
            </p>

            <div className="flex justify-center w-full flex-wrap">
              <a
                className="bg-emerald-50 text-emerald-700 font-bold hover:bg-emerald-100 mt-4 inline w-full py-3 px-6 border border-transparent rounded-md text-center"
                href="https://transacciones.nequi.com/bdigital/login.jsp"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="w-[40%] inline mx-3"
                  src={nequi}
                  alt="logo_nequi"
                />
              </a>

              <a
                className="bg-emerald-50 text-emerald-700 font-bold hover:bg-emerald-100 mt-4 inline w-full py-3 px-6 border border-transparent rounded-md text-center"
                href="https://www.daviplata.com/wps/portal/daviplata/Home/ComoMeterlePlata/DesdeOtroBanco"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="w-[40%] inline mx-3"
                  src={daviplata}
                  alt="logo_nequi"
                />
              </a>

              <a
                className="bg-emerald-50 text-emerald-700 font-bold hover:bg-emerald-100 mt-4 inline w-full py-3 px-6 border border-transparent rounded-md text-center"
                href="https://www.paypal.com/ncp/payment/ADTSG8JCPJVL2"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="w-[40%] inline mx-3"
                  src={paypal}
                  alt="logo_paypal"
                />
              </a>
            </div>
          </div>
        </div>

        <p className="text-center text-white text-lg font-bold mt-8">
          ¿Todavía te quedan dudas de cuál plan elegir?
        </p>
        <p className="text-center text-white">
          Puedo adaptar el plan de acuerdo con tus necesidades y presupuesto!
        </p>
        <div className="flex justify-center">
          <img className="w-[60%] md:w-[10%]" src={approve} alt="Aprobacion" />
        </div>
        <div className="flex justify-center">
          <a
            className="flex justify-center md:w-[30%] items-center rounded-md bg-emerald-500 mt-4 py-2 px-6 text-emerald-50 text-center text-lg transition duration-500 ease-in-out hover:bg-emerald-700 hover:text-white "
            href="https://api.whatsapp.com/send?phone=573214387967&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20planes%20de%20entrenamiento."
            rel="noreferrer"
            target="_blank"
            // download="brochure_servicios.pdf"
          >
            <i className="fa-brands fa-whatsapp px-3 text-3xl"></i>
            <span>Pregúntame sin compromiso</span>
          </a>
        </div>
      </div>
    </div>
  );
};



              {/* <p className="absolute top-0 py-1.5 px-4 bg-emerald-500 text-white rounded-full text-xs font-semibold uppercase tracking-wide  transform -translate-y-1/2">
                Descuento en tu primera sesión
              </p> */}

{/* <div className="relative p-8  bg-gray-200 rounded-2xl shadow-sm flex flex-col md:max-w-[30%]">
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="text-4xl font-semibold ">
                  Plan Básico (Starter Plus)
                </h3>
                <span className="text-3xl">🌐</span>
              </div>
              <p className="mt-4 flex items-baseline ">
                <span className="text-3xl text-emerald-500 font-extrabold tracking-tight pe-5">
                 
                </span>
              </p>
              <p className="mt-6 text-justify">
                Perfecto para aquell@s que quieran mejorar sus técnicas de
                entrenamiento, nutrición y psicología deportiva. Ideal para
                establecer una base sólida y adquirir hábitos saluables.
              </p>
              <p className="mt-2 text-justify">Incluye:</p>
              <ul role="list" className="mt-6 space-y-3">
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 ">
                    4 sesiones de entrenamiento deportivo
                  </span>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 ">1 sesión de nutrición deportiva</span>
                </li>
                <li className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="flex-shrink-0 w-6 h-6 text-emerald-500"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span className="ml-3 ">
                    1 sesión de psicología deportiva
                  </span>
                </li>
              </ul>

              <p className="mt-6 md:mt-12 text-gray-500">
                * Las sesiones pueden tomarse de forma virtual y/o presencial
              </p>
            </div>

            <p className="text-emerald-700 font-bold mt-6">
              Medios de Pago disponibles:
            </p>

            <div className="flex justify-center w-full flex-wrap">
              <a
                className="bg-emerald-50 text-emerald-700 font-bold hover:bg-emerald-100 mt-4 inline w-full py-3 px-6 border border-transparent rounded-md text-center"
                href="https://transacciones.nequi.com/bdigital/login.jsp"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="w-[40%] inline mx-3"
                  src={nequi}
                  alt="logo_nequi"
                />
              </a>

              <a
                className="bg-emerald-50 text-emerald-700 font-bold hover:bg-emerald-100 mt-4 inline w-full py-3 px-6 border border-transparent rounded-md text-center"
                href="https://www.daviplata.com/wps/portal/daviplata/Home/ComoMeterlePlata/DesdeOtroBanco"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="w-[40%] inline mx-3"
                  src={daviplata}
                  alt="logo_nequi"
                />
              </a>

              <a
                className="bg-emerald-50 text-emerald-700 font-bold hover:bg-emerald-100 mt-4 inline w-full py-3 px-6 border border-transparent rounded-md text-center"
                href="https://www.paypal.com/ncp/payment/A2HJSV2MV7DJC"
                rel="noreferrer"
                target="_blank"
              >
                <img
                  className="w-[40%] inline mx-3"
                  src={paypal}
                  alt="logo_paypal"
                />
              </a>
            </div>
          </div> */}