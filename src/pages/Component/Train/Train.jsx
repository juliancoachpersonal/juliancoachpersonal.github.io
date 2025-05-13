import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
// import { GalleryExpandible } from "../../../components/GalleryExpandible/GalleryExpandible";

import { muscles } from "../../../utils/data";

import car1 from "../../../assets/images/components/train/carousel/car1.mp4";
import car2 from "../../../assets/images/components/train/carousel/car2.mp4";
import car3 from "../../../assets/images/components/train/carousel/car3.mp4";
import car4 from "../../../assets/images/components/train/carousel/car4.mp4";
import car5 from "../../../assets/images/components/train/carousel/car5.mp4";
import car6 from "../../../assets/images/components/train/carousel/car6.mp4";
import car7 from "../../../assets/images/components/train/carousel/car7.mp4";
import { Carousel } from "../../../components/Carousel/Carousel";

export const Train = () => {
  const list_muscles = muscles;
  const car_train = [car1, car2, car3, car4, car5, car6, car7];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="mt-[6rem] md:mt-[5.5rem]">
      <Carousel carousel={car_train} loopV={false}></Carousel>
      {/* <h2 className="text-center text-5xl pb-2 mt-8 font-bold text-[#3c8274]">
        Entrenamiento
      </h2> */}

      {/* <GalleryExpandible /> */}

      {/* <h3 className=" font-bold text-neutral-600 text-xl text-center my-8 mb-4">
        Encuentra los mejores recursos y consejos para mantenerte en forma!
      </h3> */}

      <div>
        <div className="flex gap-6 flex-wrap justify-center">
          {list_muscles.map((item, index) => (
            <HashLink
              key={index}
              className="relative md:w-[20%] group cursor-pointer"
              to={`${item.alt}`} 
            >
              <div>
                <img
                  className="mx-auto rounded-full transition-opacity duration-300 ease-in-out"
                  src={item.src}
                  alt={item.alt}
                />
                <div className="absolute cursor-pointer inset-0 bg-black opacity-0 group-hover:opacity-50 rounded-full transition-opacity duration-300 ease-in-out"></div>
                <h3 className="absolute inset-0 flex items-center justify-center text-white text-2xl font-bold text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                  {item.label}
                </h3>
              </div>
            </HashLink>
          ))}
        </div>
      </div>

      <div className="hidden md:flex justify-center mt-16">
        <iframe width="1110" height="740" src="https://www.zygotebody.com" frameBorder="0" ></iframe>
      </div>
    </div>
  );
};
