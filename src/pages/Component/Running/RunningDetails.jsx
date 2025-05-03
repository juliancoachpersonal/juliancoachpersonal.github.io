import { useParams } from "react-router-dom";
import { articles } from "../../../utils/runing";
import { useEffect, useState } from "react";
import { HashLink } from "react-router-hash-link";

import "./MuscleDetails.css";

import nice from "../../../assets/images/components/train/surprised.webp";
import { Link } from "react-router-dom";

export const MuscleDetails = () => {
  const { id } = useParams();

  const [article_run, setArticleRun] = useState("");
  

  useEffect(() => {
    const article = articles.find((item) => item.id == id);
    
    setArticleRun(article);
    
    console.log(article_run);
  }, [id, article_run]);

  return (
    <div className="py-32 md:py-36 px-6 md:px-36">
      {article_run && (
        <>
          <h2 className="text-center text-5xl mb-6 font-bold text-[#3c8274] capitalize">
            {article_run.id}
          </h2>

          <img
            className="mx-auto md:w-[30%]"
            src={article_run.img}
            alt={article_run.id}
          />

          <div className="mx-auto mt-12 grid max-w-lg gap-12 lg:max-w-none lg:grid-cols-3">
            {article_run &&
              article_run.routine.map((routine, index) => (
                <div
                  key={index}
                  className="mb-8 flex flex-col overflow-hidden shadow-xl"
                >
                  {/* <a href="/blog-post"> */}
                  <div className="shrink-0">
                    <img
                      src={routine.image}
                      alt={routine.name}
                      className="w-100"
                    />
                  </div>
                  {/* </a> */}
                  <div className="flex flex-1 flex-col justify-between p-4">
                    {/* <a href="/blog-post"></a> */}
                    <div className="flex-1">
                      {/* <a href="/blog-post"> */}
                      <div className="flex space-x-1 pt-6 text-sm text-gray-500">
                        <span className="font-bold">
                          {" "}
                          🟢 Todos los niveles{" "}
                        </span>
                        <span aria-hidden="true"> · </span>
                        <span> 4 minutos </span>
                      </div>
                      {/* </a> */}
                      {/* <a href="#" className="mt-2 block space-y-6"> */}
                      <div className="mt-2 mb-4 block text-justify">
                        <h3 className="text-xl font-semibold leading-none tracking-tighter text-[#3c8274] my-4">
                          {routine.name}
                        </h3>
                        <p className="text-md font-normal text-gray-500">
                          {routine.position[0]}
                        </p>
                        <p className="text-md font-normal text-gray-500">
                          {routine.position[1]}
                        </p>
                      </div>

                      {/* </a> */}
                    </div>
                    <Link
                      to={`/componentes/entrenamiento/${this.article}/${routine.id}`}
                      className=" text-blue-500 font-bold"
                    >
                      Ver más detalles
                    </Link>
                  </div>
                </div>
              ))}

            {/* <div className="mb-12 flex cursor-pointer flex-col overflow-hidden">
                    <a href="/blog-post">
                      <div className="shrink-0">
                        <img className="h-48 w-full rounded-lg object-cover" src="/images/placeholders/original/neon-2.webp" alt="" />
                      </div>
                    </a>
                    <div className="flex flex-1 flex-col justify-between">
                      <a href="/blog-post"></a>
                      <div className="flex-1">
                        <a href="/blog-post">
                          <div className="flex space-x-1 pt-6 text-sm text-gray-500">
                            <time dateTime="2020-03-10"> Mar 10, 2020 </time>
                            <span aria-hidden="true"> · </span>
                            <span> 4 min read </span>
                          </div>
                        </a>
                        <a href="#" className="mt-2 block space-y-6">
                          <h3 className="text-2xl font-semibold leading-none tracking-tighter text-gray-600">
                            Typography on app.
                          </h3>
                          <p className="text-lg font-normal text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                            facilis asperiores porro quaerat doloribus, eveniet dolore.
                            Adipisci tempora aut inventore optio animi., tempore
                            temporibus quo laudantium.
                          </p>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mb-12 flex cursor-pointer flex-col overflow-hidden">
                    <a href="/blog-post">
                      <div className="shrink-0">
                        <img className="h-48 w-full rounded-lg object-cover" src="/images/placeholders/original/neon-3.webp" alt="" />
                      </div>
                    </a>
                    <div className="flex flex-1 flex-col justify-between">
                      <a href="/blog-post"></a>
                      <div className="flex-1">
                        <a href="/blog-post">
                          <div className="flex space-x-1 pt-6 text-sm text-gray-500">
                            <time dateTime="2020-03-10"> Mar 10, 2020 </time>
                            <span aria-hidden="true"> · </span>
                            <span> 4 min read </span>
                          </div>
                        </a>
                        <a href="#" className="mt-2 block space-y-6">
                          <h3 className="text-2xl font-semibold leading-none tracking-tighter text-gray-600">
                            Typography on app.
                          </h3>
                          <p className="text-lg font-normal text-gray-500">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                            facilis asperiores porro quaerat doloribus, eveniet dolore.
                            Adipisci tempora aut inventore optio animi., tempore
                            temporibus quo laudantium.
                          </p>
                        </a>
                      </div>
                    </div>
                  </div> */}
          </div>

          <h3 className=" font-bold text-neutral-600 text-xl my-8 mb-4">
            Al entrenar esta área del cuerpo, podrás notar que estás
            fortaleciendo los siguientes grupos musculares:
          </h3>

          <ul className="list-disc ps-8">
            {this.article.muscles.map((item, index) => (
              <li className="py-2" key={index}>
                <span className="font-bold text-red-700">{item.name}: </span>{" "}
                {item.desc}
              </li>
            ))}
          </ul>

          <img className="mx-auto w-[50%] md:w-[15%]" src={nice} alt="Nice!" />
          <div className="flex justify-center">
            <HashLink
              to="/premium"
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-green-600 py-3 px-6 font-dm text-base font-medium text-white shadow-xl shadow-green-400/75 transition-transform duration-200 ease-in-out hover:scale-[1.02]"
            >
              Ver Más Entrenamientos!
            </HashLink>
          </div>
        </>
      )}
    </div>
  );
};
