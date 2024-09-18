import { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
// import { GalleryExpandible } from "../../../components/GalleryExpandible/GalleryExpandible";

import { muscles } from "../../../utils/data";

export const Train = () => {
  const list_muscles = muscles;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="py-32 md:py-36 px-6 md:px-36">
      <h2 className="text-center text-5xl pb-2 font-bold text-[#3c8274]">
        Entrenamiento
      </h2>

      {/* <GalleryExpandible /> */}

      <h3 className=" font-bold text-neutral-600 text-xl text-center my-8 mb-4">
        Encuentra los mejores recursos y consejos para mantenerte en forma!
      </h3>

      <div className="hidden md:flex justify-center mb-8">
        <iframe width="1110" height="740" src="https://www.zygotebody.com" frameBorder="0" ></iframe>
      </div>

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
    </div>
  );
};
