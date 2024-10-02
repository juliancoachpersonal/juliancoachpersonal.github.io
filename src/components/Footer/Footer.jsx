import { useState } from "react";
import "./Footer.css";

export const Footer = ( {t} ) => {

  const [clicked, setClicked] = useState([false, false, false, false, false]);
  const handleStarClick = (e, index) => {
    e.preventDefault();
    
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      if (i <= index) clickStates[i] = true;
      else clickStates[i] = false;
    }

    setClicked(clickStates);
  };

  return (
    <div>
      <footer className="flex flex-col items-center bg-[#3c8274] text-center text-white">
        <div className="custom-shape-divider-top-1711828872">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="container px-6 pt-6">
        <div className="py-3 flex justify-center gap-2 items-center">
          <p className="font-medium text-center text-white">{t("footer.valoration")}</p>
            <i onClick={(e) => handleStarClick(e, 0)} className={`cursor-pointer fa-star text-lg ${clicked[0] ? 'fa-solid text-yellow-500':'fa-regular'}`}></i>
            <i onClick={(e) => handleStarClick(e, 1)} className={`cursor-pointer fa-star text-lg ${clicked[1] ? 'fa-solid text-yellow-500':'fa-regular'}`}></i>
            <i onClick={(e) => handleStarClick(e, 2)} className={`cursor-pointer fa-star text-lg ${clicked[2] ? 'fa-solid text-yellow-500':'fa-regular'}`}></i>
            <i onClick={(e) => handleStarClick(e, 3)} className={`cursor-pointer fa-star text-lg ${clicked[3] ? 'fa-solid text-yellow-500':'fa-regular'}`}></i>
            <i onClick={(e) => handleStarClick(e, 4)} className={`cursor-pointer fa-star text-lg ${clicked[4] ? 'fa-solid text-yellow-500':'fa-regular'}`}></i>
          </div>
          <div className="mb-6 mt-4 flex justify-center">
            <a
              href="https://www.instagram.com/juliancoachpersonal/"
              target="_blank"
              rel="noreferrer"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white hover:border-[#ea0c5f] text-white flex justify-center items-center group"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <i className="fa-brands fa-instagram text-slate-50 group-hover:text-[#ea0c5f] text-xl"></i>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=573214387967&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20planes%20de%20entrenamiento."
              target="_blank"
              rel="noreferrer"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white group hover:border-[#25d366] text-white flex justify-center items-center"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <i className="fa-brands fa-whatsapp text-slate-50 group-hover:text-[#25d366] text-xl"></i>
            </a>

            <a
              href="https://www.facebook.com/people/Julian-Coach-Personal/61558626211664/"
              target="_blank"
              rel="noreferrer"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white group hover:border-[#83d4f7] text-white flex justify-center items-center"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <i className="fa-brands fa-facebook-f text-slate-50 group-hover:text-[#83d4f7] text-xl"></i>
            </a>

            <a
              href="tel:573214387967"
              type="button"
              className="flex justify-center items-center m-1 h-9 w-9 rounded-full border-2 border-white group hover:border-[#d8f934] uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <i className="fa-solid fa-phone text-slate-50 hover:text-[#d8f934]"></i>
            </a>
          </div>

          
          
        </div>

        <div className="w-full p-2 text-center bg-[#28574d]">
          <span className="font-bold text-md">© 2024 Copyright: </span> 
          <a className="text-white" href="#">
            {t("footer.copyright")}
          </a>
        </div>
      </footer>
    </div>
  );
};
