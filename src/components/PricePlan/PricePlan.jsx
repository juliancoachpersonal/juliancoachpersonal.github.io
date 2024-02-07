import plan from "../../assets/images/landing/plan.png";
import brochure from "../../assets/files/landing/brochure.pdf";

export const PricePlan = () => {
  return (
    <div id="plan">
      <div className="py-6">
        <p className="racing-type mb-3 lg:mb-0 text-center text-4xl sm:text-5xl text-[#394752]">
          Brochure
        </p>
        <hr
          className="mx-[30%] invisible md:visible"
          style={{ border: "2px solid #d8f934" }}
        />

        <div className="flex justify-center pt-4">
          <div className="flex flex-col items-center rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-2xl md:flex-row">
            <img
              className="w-[50%] rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg"
              src={plan}
              alt=""
            />
            <div className="flex flex-col justify-start p-6 w-full gap-6">
              <p className="text-justify">
                Al adquirir alguno de los planes ajustado a tus necesidades,
                tendrás la posibilidad de disfrutar de múltiples beneficios
                relacionados con medicina deportiva, área motivacional,
                acondicionamiento físico y fitness, actividades al aire libre y
                procesos deportivos y pedagógicos
              </p>
              <p className="text-justify">
                Encuentra más información descargando el siguiente Brochure:
              </p>
              <a
                type="button"
                className="flex justify-center my-3 rounded bg-[#d8f934] ms-3 px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#d8f934] transition duration-150 ease-in-out hover:bg-[#394752] hover:text-[#d8f934] hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)]"
                href={brochure}
                rel="noreferrer"
                target="_blank"
                download="brochure.pdf"
              >
                Descargar Brochure
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
