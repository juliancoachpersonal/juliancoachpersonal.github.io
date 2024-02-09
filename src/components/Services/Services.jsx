import bgParallax from '../../assets/images/landing/bg_services.webp'

export const Services = () => {
  return (
    <div id='services'>
      <div className="py-8 mb-12 bg-center" style={{background: `linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.7)), url(${bgParallax})`, backgroundSize: 'cover', backgroundAttachment: 'fixed'}}>
        <h2 className="text-center text-[#d8f934] text-5xl pb-6  uppercase racing-type">
          Un lugar que lo tiene todo
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col basis-[15%] items-center">
            <div className="bg-white rounded-full">
              <lord-icon
                src="https://cdn.lordicon.com/ressvnrn.json"
                trigger="hover"
                colors="primary:#121331,secondary:#d8f934"
                style={{ width: "250px", height: "250px" }}
              ></lord-icon>
            </div>
            <p className="text-xl text-center text-white roboto-font font-bold py-3">
              Entrenamientos personalizados
            </p>
          </div>

          <div className="flex flex-col basis-[15%] items-center">
            <div className="bg-white rounded-full">
              <lord-icon
                src="https://cdn.lordicon.com/fyhanzjw.json"
                trigger="hover"
                colors="primary:#000000,secondary:#d8f934"
                style={{ width: "250px", height: "250px" }}
              ></lord-icon>
            </div>
            <p className="text-xl text-center text-white roboto-font font-bold py-3">
              Recomendaciones y Consejos Nutricionales
            </p>
          </div>

          <div className="flex flex-col basis-[15%] items-center">
            <div className="bg-white rounded-full">
              <lord-icon
                src="https://cdn.lordicon.com/wxnxiano.json"
                trigger="morph"
                colors="primary:#d8f934,secondary:#121331"
                style={{ width: "250px", height: "250px" }}
              ></lord-icon>
            </div>
            <p className="text-xl text-center text-white roboto-font font-bold py-3">
              Planificación de Entrenamientos
            </p>
          </div>

          <div className="flex flex-col basis-[15%] items-center">
            <div className="bg-white rounded-full">
              <lord-icon
                src="https://cdn.lordicon.com/zpxybbhl.json"
                trigger="hover"
                colors="primary:#121331,secondary:#d8f934"
                style={{ width: "250px", height: "250px" }}
              ></lord-icon>
            </div>
            <p className="text-xl text-center text-white roboto-font font-bold py-3">
              Contacto Permanente con tu Entrenador
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
