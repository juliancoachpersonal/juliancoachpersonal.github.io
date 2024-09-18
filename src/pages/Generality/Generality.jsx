import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { generalityTypes } from "../../utils/data";
import { GeneralityCard } from "../../components/GeneralityCard/GeneralityCard";
import { contentCards } from "../../utils/data"; 
import error404 from '../../assets/images/shared/404.svg'

export function Generality() {
  const { typeGen } = useParams();
  // const [titleGenerality, setTitle] = useState('Nutrición')
  const [generality, setGenerality] = useState(generalityTypes[0]);
  const [cards, setCards] = useState()

  const getGeneralityValues = () => {
    let values = [];
    generalityTypes.map((type) => {
      return values.push(type.value);
    });
    return values;
  };

  const [valueGenerality] = useState(getGeneralityValues);


  useEffect(() => {

    const filterByContent = () => {
      return contentCards.filter((card) =>
        card.content.toLowerCase().includes(typeGen.toLowerCase()) ||
        card.resume.toLowerCase().includes(typeGen.toLowerCase()) ||
        card.title.toLowerCase().includes(typeGen.toLowerCase())
      );
    };

    if (valueGenerality.includes(typeGen)) {

      setGenerality(generalityTypes.find((gen) => gen.value === typeGen));
      document.title = generality.title;
      setCards(contentCards.filter(card => card.value===typeGen))

    }else {
      document.title = 'Artículos Filtrados por ' +typeGen
      setCards(filterByContent())
    }

  }, [valueGenerality, typeGen, generality]);

  return (
    <div>
      <div className="px-5 md:px-20 pt-24 md:pt-32">
        <h2 className="text-3xl md:text-5xl text-center font-bold text-[#3c8274] py-5">
          {valueGenerality.includes(typeGen)?generality.title:`Artículos Filtrados por "${typeGen}"`}
        </h2>

        {cards && cards.length == 0 && (
          <div>
            <p className="text-center text-[#3c8274] font-bold text-lg">No se encontró ninguna coincidencia. ¡Inténtalo de Nuevo!</p>
            <img src={error404} className="mx-auto w-[60%]"></img>
          </div>
        )} 

        {valueGenerality.includes(typeGen) && 
        (
          <>
            <img src={generality.img} alt="" className="img mx-auto" />

            <p className="text-justify pt-5 pb-3">{generality.description}</p>

            <span className="text-[#3c8274] font-bold text-lg">
              Palabras clave:{" "}
            </span>
            <span className="text-justify">{generality.keywords}</span>
          </>
        )}
      </div>

      <div className="relative px-4 py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="relative mx-auto max-w-7xl">
          <div className="grid max-w-lg gap-5 mx-auto lg:grid-cols-3 lg:max-w-none">
            {
                cards && cards.map((card, index) => (
                    <GeneralityCard 
                        key={index} 
                        contentCard={card}/>
                        ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
