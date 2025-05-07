import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


import { articles } from "../../../utils/runing";

export const RunningDetails = () => {
  const { id } = useParams();

  const [article_run, setArticleRun] = useState("");

  useEffect(() => {
    const article = articles.find((item) => item.id == id);

    setArticleRun(article);
  }, [id, article_run]);

  return (
    <div className="py-32 md:py-36 px-6 md:px-36">
      {article_run && (
        <>
          <h2 className="text-center text-3xl mb-2 font-bold text-[#3c8274] capitalize">
            {article_run.title}
          </h2>
          <h3 className="text-center mb-6 text-gray-600">
            {article_run.description}
          </h3>

          <img
            className="mx-auto md:w-[30%]"
            src={article_run.image}
            alt={article_run.id}
          />

          <div className="text-neutral-600 text-lg  text-justify my-8 mb-4">
            <p>{article_run.introduction}</p>

            {article_run.content &&
              article_run.content.map((con, index) => (
                <div key={index} className="mt-10">
                  <h3 className="font-bold text-[#3c8274] ">{con.subtitle}</h3>
                  <p className="text-justify mb-2">{con.description}</p>

                  {con.caracteristics && (
                    <>
                      <i className="font-bold text-[#c75b5b]">
                        Características
                      </i>
                      {con.caracteristics.map((car, index) => (
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

                  {con.importance && (
                    <div className="mt-2">
                      <i className="font-bold text-[#c75b5b]">
                        Beneficios
                      </i>
                      {con.importance.map((car, index) => (
                        <ul key={index} className="list-disc ms-8">
                          <li>
                            <span className="font-bold text-[#4a90a4]">
                              {car.title}:
                            </span>{" "}
                            {car.description}
                          </li>
                        </ul>
                      ))}
                    </div>
                  )}

                  {
                    con.example && (
                      <div className="mt-3">
                      <i className="font-bold text-[#c75b5b]">
                        Ejemplo
                      </i>
                      {
                        <p>{con.example}</p>
                      }
                      </div>
                    )
                  }


                </div>
              ))}
              {
                    article_run.conclusion && (
                      <p className="mt-12">{article_run.conclusion}</p>
                      
                    )
                  }
          </div>
        </>
      )}
    </div>
  );
};
