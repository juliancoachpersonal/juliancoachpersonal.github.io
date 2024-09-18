import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { contentCards } from "../../utils/data";

import profile from "../../assets/images/profile/julian.png";

export function DetailGenerality() {
  const { key } = useParams();
  const [content, setContent] = useState();

  useEffect(() => {
    setContent(contentCards.find((card) => card.key === key));

    (content)?document.title = content.title:'';
    
  }, [key, content]);

  return (
    content && (
      <div>
        <div className="w-full px-5 py-24 mx-auto lg:px-32">
          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="order-last w-full max-w-screen-sm m-auto mt-12 lg:w-1/4 lg:order-first">
              <a
                href="https://www.instagram.com/juliancoachpersonal/"
                rel="noreferrer"
                target="_blank"
              >
                <div className="transition duration-500 ease-in-out transform bg-white border rounded-lg">
                  <div className="flex py-4 px-5">
                    <img
                      src={profile}
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">
                        Julian Amaya
                      </p>

                      <p className="text-sm text-gray-500">
                        Entrenador y preparador físico
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div className="w-full px-4 mt-12 prose lg:px-0 lg:w-3/4">
              <div className="mb-5 border-b border-gray-200">
                <div className="flex flex-wrap items-baseline -mt-2">
                  <h5 className="text-gray-500">{content.createdAt}</h5>
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-5 text-center text-lime-500">
                { content.title }
              </h2>
              <img
                src={content.image}
                alt="nutricion"
                className="md:w-1/2 mx-auto"
              />
              <div className="my-5">
                <p className="text-justify mb-5 whitespace-pre-line">
                  {content.content}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
