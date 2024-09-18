import { useParams } from "react-router-dom";
import { muscle_desc } from "../../../utils/data";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

import "./MuscleDetails.css";

import nice from "../../../assets/images/components/train/surprised.webp";

export const MuscleDetails = () => {
  const { muscle } = useParams();

  const [bodyPart, setBodyPart] = useState("");

  useEffect(() => {
    const part = muscle_desc.find((item) => item.id === muscle);
    setBodyPart(part);
  }, [muscle]);

  return (
    <div className="py-32 md:py-36 px-6 md:px-36">
      {bodyPart && (
        <>
          <h2 className="text-center text-5xl mb-6 font-bold text-red-700 capitalize">
            {bodyPart.id}
          </h2>

          <img
            className="mx-auto md:w-[30%]"
            src={bodyPart.img}
            alt={bodyPart.id}
          />

          <div className="flex flex-wrap justify-center gap-5 mt-12">
            {bodyPart.videos.map((item, index) => (
              <video
                key={index}
                muted
                controls
                className="md:w-[28%] rounded-3xl border-8 border-gray-300 shadow-2xl"
              >
                <source src={item} type="video/mp4" />
              </video>
            ))}
          </div>

            <img className="mx-auto w-[50%] md:w-[15%]" src={nice} alt="Nice!" />
          <div className="flex justify-center">
            <HashLink to="/premium" className="mt-2 inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]">
                Ver Más Entrenamientos!
            </HashLink>
          </div>

          <h3 className=" font-bold text-neutral-600 text-xl my-8 mb-4">
            Al entrenar esta área del cuerpo, podrás notar que estás
            fortaleciendo los siguientes grupos musculares:
          </h3>

          <ul className="list-disc ps-8">
            {bodyPart.muscles.map((item, index) => (
              <li className="py-2" key={index}>
                <span className="font-bold text-red-700">{item.name}: </span>{" "}
                {item.desc}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};
