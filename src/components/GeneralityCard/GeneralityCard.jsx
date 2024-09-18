import { Link } from "react-router-dom";
import profile from "../../assets/images/profile/julian.png";

export const GeneralityCard = ({ contentCard }) => {
  return (
    <div>
      <div className="flex flex-col overflow-hidden rounded-lg shadow-lg">
        <div className="flex-shrink-0">
          <img
            className="object-cover w-full h-48"
            src={contentCard.image}
            alt=""
          />
        </div>
        <div className="flex flex-col justify-between flex-1 p-6 bg-white">
          <div className="flex-1">
              <p className="text-xl cursor-pointer font-semibold text-neutral-600 hover:text-[#3c8274]">
                {contentCard.title}
              </p>
              <Link 
                to={`/generalidades/${contentCard.value}`}
                className="text-[#6e9f9c] font-bold mt-2">
                  {contentCard.value}
              </Link>
            <Link
              to={`/generalidades/${contentCard.value}/${contentCard.key}`}
              className="block mt-2"
            >
              
              <p className="mt-3 text-base text-gray-500 text-justify">
                {contentCard.resume}
              </p>
              <p className="text-lime-500 font-bold mt-2">Leer más...</p>
            </Link>
          </div>
          <div className="flex items-center mt-6">
            <div className="flex-shrink-0">
              <a
                href="https://www.instagram.com/juliancoachpersonal/"
                rel="noreferrer"
                target="_blank"
              >
                <span className="sr-only">Julian Amaya</span>
                <img className="w-10 h-10 rounded-full" src={profile} alt="" />
              </a>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-neutral-600">
                <a
                  href="https://www.instagram.com/juliancoachpersonal/"
                  rel="noreferrer"
                  target="_blank"
                  className="hover:underline"
                >
                  Julian Amaya
                </a>
              </p>
              <div className="flex space-x-1 text-sm text-gray-500">
                <time dateTime="2024-02-04"> {contentCard.createdAt} </time>
                <span aria-hidden="true"> · </span>
                <span> {contentCard.readTime} min de lectura </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
