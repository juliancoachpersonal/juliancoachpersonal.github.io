import claps from "../../assets/images/components/train/claps.webp";
import nice from "../../assets/images/components/train/nice.webp";


export const PremiumPage = () => {
  return (
    <div className="pt-32 md:py-36 px-6 md:px-36">
      <h2 className="text-emerald-600 text-center text-4xl font-bold pt-6">
        Me alegra que hayas tomado esta decisión! 💹
      </h2>

      <img className="mx-auto w-[50%] md:w-[15%]" src={claps} alt="Claps" />

      <p className="text-center mt-9 text-lg">Adquiriendo contenido <span className="text-emerald-600 font-bold">Premium</span>, tendrás la posibilidad de acceder a una amplia gama de recursos de alta calidad</p>

      <section className=" bg-white ">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div
      className="grid grid-cols-1 text-center sm:mt-16 mt-0 sm:grid-cols-2 sm:gap-x-12 md:grid-cols-3 md:gap-0">
      
      <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
        <div className="w-14 h-14 rounded-full bg-yellow-400 flex justify-center items-center">
        <i className="fa-solid fa-dumbbell text-3xl text-gray-900"></i>
          {/* <i className="fa-solid fa-chart-column text-3xl text-gray-900"></i> */}
        </div>
        <h3 className="mt-6 text-xl font-bold text-gray-900">Videos explicativos de entrenamientos</h3>
        <p className="mt-5 text-base text-gray-600">Diseñados específicamente para enfocarse en cada grupo muscular. Cada video ofrece instrucciones detalladas y técnicas precisas para maximizar los resultados y evitar lesiones, asegurando que realices cada ejercicio de manera correcta y eficiente.</p>
      </div>

      
      <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
        <div className="w-14 h-14 rounded-full bg-emerald-300 flex justify-center items-center">
          <i className="fa-brands fa-nutritionix text-3xl text-gray-900"></i>
        </div>
        <h3 className="mt-6 text-xl font-bold text-gray-900">Videos explicativos y artículos de nutrición</h3>
        <p className="mt-5 text-base text-gray-600">Elaborados por expertos en la materia, estos recursos te proporcionarán información valiosa y aprenderás a planificar tus comidas, seleccionar los mejores alimentos y comprender la importancia de una buena nutrición en tu rendimiento físico y bienestar general.</p>
      </div>

      
      <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
        <div className="w-14 h-14 rounded-full bg-cyan-300 flex justify-center items-center">
          <i className="fa-solid fa-brain text-3xl text-gray-900"></i>
        </div>
        <h3 className="mt-6 text-xl font-bold text-gray-900">Consejos de Psicología Deportiva</h3>
        <p className="mt-5 text-base text-gray-600">Contenido exclusivo que no encontrarás en ningún otro lugar. Estos consejos están diseñados para mantenerte siempre motivado, ayudarte a superar los obstáculos mentales y desarrollar una mentalidad ganadora.</p>
      </div>


    </div>
      <p className="text-center mt-9 text-lg">🤑 No lo dudes <span className="text-emerald-600 font-bold">¡Te garantizo los mejores resultados, compra ya! 🤑</span></p>

      <img className="mx-auto w-[50%] md:w-[20%]" src={nice} alt="Nice" />
      <div className="flex justify-center">
          <a
            className="flex justify-center md:w-[30%] items-center rounded-md bg-emerald-500 mt-4 py-2 px-6 text-emerald-50 text-center text-lg transition duration-500 ease-in-out hover:bg-emerald-700 hover:text-white "
            href="https://api.whatsapp.com/send?phone=573214387967&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20recursos%20de%20Premium."
            rel="noreferrer"
            target="_blank"
            // download="brochure_servicios.pdf"
          >
            <i className="fa-brands fa-whatsapp px-3 text-3xl"></i>
            <span>Pregúntame por las promociones</span>
          </a>
        </div>
  </div>
</section>
    </div>
  );
};
