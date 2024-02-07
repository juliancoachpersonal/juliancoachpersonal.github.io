import about from "../../assets/images/landing/about.webp";

export const AboutMe = () => {
  return (
    <div id="about">
      <div className="flex flex-col px-[7%] md:px-[15%] py-5 lg:py-10">
        <p className="racing-type mb-3 lg:mb-0 text-center lg:text-left text-4xl sm:text-5xl text-[#394752]">
          Acerca de Mí
        </p>
        <hr
          className="w-[20%] invisible md:visible"
          style={{ border: "2px solid #d8f934" }}
        />
        <div className="flex flex-col lg:flex-row lg:flex-row-reverse justify-center items-start">
          <div className="basis-[40%] flex justify-center xl:justify-start px-8">
            <img className="w-full 2xl:w-[50%]" src={about} alt="" />
          </div>
          <div className="basis-[60%] text-justify w-full">
            <div className="pt-3">
              <p className="roboto-font">
                Julián E. Amaya, es un entrenador y preparador físico.
                Capacitado en el área de los deportes y la actividad física.
                Egresado de la universidad Juan De Castellanos, también,
                especialista en el ámbito de la inclusión (deporte paralímpico).
              </p>
              <br />
              <p className="roboto-font">
                Además, certificado por importantes entidades como ARCOPREF,
                ADEL, IRDET, siendo partícipe del 1er Congreso Internacional de
                Cultura Física, Educación Física, Deporte, Recreación y Medicina
                Deportiva en Boyacá.
              </p>
              <br />
              <p className="roboto-font">
                Un profesional preparado y capacitado para ayudarte a mejorar tu
                calidad de vida.
              </p>
            </div>

            <a
              type="button"
              target="_blank"
              rel="noreferrer"
              href="https://api.whatsapp.com/send?phone=573214387967&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20planes%20de%20entrenamiento."
              className="my-3 rounded bg-[#d8f934] ms-3 px-4 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#d8f934] transition duration-150 ease-in-out hover:bg-[#394752] hover:text-[#d8f934] hover:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:bg-warning-600 focus:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)] focus:outline-none focus:ring-0 active:bg-warning-700 active:shadow-[0_8px_9px_-4px_rgba(228,161,27,0.3),0_4px_18px_0_rgba(228,161,27,0.2)]"
            >
              Comienza tu Transformación!
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
