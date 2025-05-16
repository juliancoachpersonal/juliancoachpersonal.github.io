import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


import { articles } from "../../../utils/dietas.js";

export const NutritionDetails = () => {
  const { id } = useParams();

  const [article_diet, setArticleRun] = useState("");

  useEffect(() => {
    const article = articles.find((item) => item.id == id);

    setArticleRun(article);
  }, [id, article_diet]);

  return (
    <div className="py-32 md:py-36 px-6 md:px-36">
      {article_diet && (
        <>
          <h2 className="text-center text-3xl mb-2 font-bold text-[#3c8274] capitalize">
            {article_diet.title}
          </h2>
          <h3 className="text-center mb-6 text-gray-600">
            {article_diet.description}
          </h3>

          <img
            className="mx-auto md:w-[30%]"
            src={article_diet.image}
            alt={article_diet.id}
          />

          <div className="text-neutral-600 text-lg  text-justify my-8 mb-4">
            <p>{article_diet.introduction}</p>

            <h3 className="font-bold text-[#3c8274] mt-6 text-xl">¿En qué consiste?</h3>
            <p className="text-justify mb-2">{article_diet.definition}</p>

            {article_diet.benefits && (
                    <>
                      <h3 className="font-bold text-[#3c8274] mt-6 text-xl">Beneficios</h3>
                                            {article_diet.benefits.map((car, index) => (
                        <ul key={index} className="list-disc ms-8">
                          <li>
                            <span className="font-bold text-[#4a90a4]">
                              {car.title}:
                            </span>{" "}
                            {car.description}
                          </li>
                        </ul>
                      ))}
                    </>
            )}

            {article_diet.desventajas && (
                    <>
                      <h3 className="font-bold text-[#3c8274] mt-6 text-xl">Desventajas</h3>
                                            {article_diet.desventajas.map((car, index) => (
                        <ul key={index} className="list-disc ms-8">
                          <li>
                            <span className="font-bold text-[#4a90a4]">
                              {car.title}:
                            </span>{" "}
                            {car.description}
                          </li>
                        </ul>
                      ))}
                    </>
            )}

              {
                    article_diet.conclutions && (
                      <p className="mt-12">{article_diet.conclutions}</p>
                      
                    )
                  }
          </div>
        </>
      )}
    </div>
  );
};
