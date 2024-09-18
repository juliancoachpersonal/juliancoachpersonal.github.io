import { useEffect, useState } from "react";

import { HashLink } from "react-router-hash-link";
import profile from "../../assets/images/profile/hero_def.png";
import profile2 from "../../assets/images/profile/hero_def2.png";
import profile3 from "../../assets/images/profile/hero_def32.png";
import './Hero.css'; 

export const Hero = () => {
  const images = [profile, profile2, profile3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const textPhrases = [
    "Encuentra los mejores planes de entrenamiento personalizados y semipersonalizados",
    "Transforma tu cuerpo y mente con resultados garantizados",
    "Supera tus límites y disfruta de una vida más activa y saludable"
  ];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 7000); // 10 segundos por imagen + 2 segundos de transición
    
    const textInterval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 2) % textPhrases.length);
    }, 7000);

    return () => {clearInterval(interval), clearInterval(textInterval)};
  }, [images.length, textPhrases.length]);

  return (
    <div className="w-100 md:py-2 md:mx-16 flex flex-wrap-reverse justify-center items-center">
      <div className="content-text max-w-[45rem] md:px-14 self-end md:py-10">
        <h1 className="text-[#3c8274] font-extrabold racing-type text-center md:text-left text-5xl md:text-7xl">
          Julian Coach Personal <span></span>
        </h1>
        <div className="text-container roboto-font text-2xl py-4 mx-3 md:mx-0 md:font-bold md:px-3 text-center md:text-left relative h-[50px] mt-4 mb-10 md:my-6">
          {textPhrases.map((phrase, index) => (
            <p
              key={index}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${currentTextIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
            >
              {phrase}
            </p>
          ))}
        </div>
        {/* <h2 className="roboto-font text-xl py-4 px-3 text-justify">
          Encuentra los mejores planes de entrenamiento que se adapten a tus
          necesidades, obtén los mejores resultados y sé tu mejor versión.
        </h2> */}
        <div className="flex justify-center md:justify-start flex-wrap md:gap-3">
          <HashLink
            type="button"
            smooth
            to="/#plan"
            className="my-3 rounded-full bg-[#193630] px-4 pb-2 pt-2.5 text-lg text-white font-semibold leading-normal shadow-[0_4px_9px_-4px_#6e9f9c] transition duration-150 ease-in-out hover:bg-[#2E6359] hover:text-dark"
          >
            Comienza tu Transformación
          </HashLink>
          <a
            type="button"
            target="_blank"
            rel="noreferrer"
            href="https://api.whatsapp.com/send?phone=573214387967&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20planes%20de%20entrenamiento."
            className="my-3 rounded-full bg-[#3c8274] px-4 pb-2 pt-2.5 text-lg text-white font-semibold leading-normal shadow-[0_4px_9px_-4px_#6e9f9c] transition duration-150 ease-in-out hover:bg-[#6e9f9c] hover:text-dark"
          >
            Contáctame
          </a>
        </div>
      </div>
      <div className="relative w-[70%] md:w-[35%] lg:w-[33%] 2xl:w-[30%] h-[270px] md:h-[370px] 2xl:h-[500px] overflow-hidden ">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`profile ${index}`}
            className={`absolute inset-0 w-50 object-cover transition-opacity duration-4000 ${currentImageIndex === index ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
      </div>
    </div>
  );
};
