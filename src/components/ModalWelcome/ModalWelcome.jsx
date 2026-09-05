import { useState, useEffect } from 'react';
// import modalH from "../../assets/images/landing/welcome/splash2.jpeg";
import modalV from "../../assets/images/landing/welcome/splash2.jpeg";
import modalVideo from "../../assets/images/landing/welcome/welcome.mp4";


export const ModalWelcome = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Comprobar si el modal ya se ha mostrado
      const hasShownModal = sessionStorage.getItem('hasShownModal');

      if (!hasShownModal) {
      // Mostrar el modal después de que la página carga
      const timer = setTimeout(() => {
        setIsVisible(true);
        sessionStorage.setItem('hasShownModal', 'true');
      }, 1000); // 2 segundos después de cargar la página
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50">
      <div className="md:w-[50%] m-0 bg-transparent shadow overflow-auto">
        <div className="flex">
          
          <div className="md:hidden max-h-screen overflow-y-auto">
            <video autoPlay muted loop className="w-50">
              <source src={modalVideo} type="video/mp4" />
            </video>
            {/* <img className='' src={modalV} alt="Imagen version movil" /> */}
          </div>
          <div className="hidden md:block w-100">
            <video autoPlay muted loop className="w-1/2 mx-auto">
              <source src={modalVideo} type="video/mp4" />
            </video>
            {/* <img className='w-100 m-0' src={modalH} alt="Imagen version escritorio" /> */}
          </div>
        </div>
        <div className="flex justify-center bg-tranparent items-center md:mb-0 w-full md:py-0">
          <button onClick={() => setIsVisible(false)} className="px-4 py-1 md:py-2 my-2 ml-2 bg-[#3C8274] hover:bg-[#469686] text-white text-sm md:text-md font-medium">
            Da click para explorar más!
          </button>
        </div>
      </div>
    </div>
  );
};