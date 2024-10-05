import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { routines } from "../../utils/routines";

export const DetailRoutine = () => {
  const [muscleRoutine, setMuscleRoutine] = useState();
  const { muscle, id } = useParams();

  useEffect(() => {
    const muscler = routines.find((rout) => rout.id == muscle);
    setMuscleRoutine(muscler.routine.find((rut) => rut.id == id));
    // (content)?document.title = content.title:'';
    console.log(muscleRoutine);
  }, [id, muscle, muscleRoutine]);

  return (
    muscleRoutine && (
      <div className="py-32 md:py-36 px-6 md:px-36">
        <h2 className="text-center text-5xl pb-2 font-bold text-[#3c8274]">
          {muscleRoutine.name}
        </h2>

        <img src={muscleRoutine.image} alt={muscleRoutine.name} className="w-[50%] mx-auto"/>

        <div className="bg-neutral-100 shadow-sm mt-6 p-4 rounded-lg">
          <div className="flex items-center space-x-4 mb-3">
            <i className="fa-solid fa-person-rays text-2xl bg-[#3c8274] text-white px-3 py-2 rounded-full transition-colors duration-300 hover:bg-blue-400"></i>
            <h3 className="text-3xl font-bold text-[#3c8274] self-center underline">
              Posición Inicial
            </h3>
          </div>

          <ul>
            {muscleRoutine.position.map((item, index) => (
              <li key={index} className="list-disc ms-6 text-justify">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-neutral-100 shadow-sm mt-6 p-4 rounded-lg">
          <div className="flex items-center space-x-4 mb-3">
            <i className="fa-solid fa-dumbbell text-2xl bg-[#3c8274] text-white px-2 py-2 rounded-full transition-colors duration-300 hover:bg-blue-400"></i>
            <h3 className="text-3xl font-bold text-[#3c8274] self-center underline">
              Ejecución
            </h3>
          </div>
          <ul>
            {muscleRoutine.execution.map((item, index) => (
              <li key={index} className="list-disc ms-6 text-justify">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-neutral-100 shadow-sm mt-6 p-4 rounded-lg">
          <div className="flex items-center space-x-4 mb-3">
            <i className="fa-solid fa-clipboard-check text-2xl bg-[#3c8274] text-white px-4 py-2 rounded-full transition-colors duration-300 hover:bg-blue-400"></i>
            <h3 className="text-3xl font-bold text-[#3c8274] self-center underline">
              Consejos
            </h3>
          </div>
          <ul>
            {muscleRoutine.advices.map((item, index) => (
              <li key={index} className="list-disc ms-6 text-justify">
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-neutral-100 shadow-sm mt-6 p-4 rounded-lg">
          <div className="flex items-center space-x-4 mb-3">
            <i className="fa-solid fa-child text-2xl bg-[#3c8274] text-white px-4 py-2 rounded-full transition-colors duration-300 hover:bg-blue-400"></i>
            <h3 className="text-3xl font-bold text-[#3c8274] self-center underline">
              Músculos Trabajados
            </h3>
          </div>
          <ul>
            {muscleRoutine.muscles.map((item, index) => (
              <li key={index} className="list-disc ms-6 text-justify">
                <span className="font-bold text-[#3c8274]">{item.name}:</span>{" "}
                {item.desc}
              </li>
            ))}
          </ul>
        </div>

        {muscleRoutine.warnings && (
          <div className="bg-neutral-100 shadow-sm mt-6 p-4 rounded-lg">
            <div className="flex items-center space-x-4 mb-3">
              <i className="fa-solid fa-triangle-exclamation text-2xl bg-[#3c8274] text-white px-3 py-2 rounded-full transition-colors duration-300 hover:bg-blue-400"></i>
              <h3 className="text-3xl font-bold text-[#3c8274] self-center underline">
                Precauciones
              </h3>
            </div>
            <ul>
              {muscleRoutine.warnings.map((item, index) => (
                <li key={index} className="list-disc ms-6 text-justify">
                  <span className="font-bold text-[#3c8274]">{item.name}:</span>{" "}
                  {item.desc}
                </li>
              ))}
            </ul>
          </div>
        )}

        {muscleRoutine.variations && (
          <div className="bg-neutral-100 shadow-sm mt-6 p-4 rounded-lg">
            <div className="flex items-center space-x-4 mb-3">
              <i className="fa-solid fa-child text-2xl bg-[#3c8274] text-white px-3 py-2 rounded-full transition-colors duration-300 hover:bg-blue-400"></i>
              <h3 className="text-3xl font-bold text-[#3c8274] self-center underline">
                Variaciones
              </h3>
            </div>
            <ul>
              {muscleRoutine.variations.map((item, index) => (
                <li key={index} className="list-disc ms-6 text-justify">
                  <span className="font-bold text-[#3c8274]">{item.name}:</span>{" "}
                  {item.desc}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    )
  );
};
