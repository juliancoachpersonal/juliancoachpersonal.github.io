import { useState } from "react";

export const Imc = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [heightUnit, setHeightUnit] = useState("cm");
  const [weightUnit, setWeightUnit] = useState("kg");
  const [result, setResult] = useState("");

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.body.classList.add("overflow-y-hidden");
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.classList.remove("overflow-y-hidden");
  };

  const calculateBMI = () => {
    const parsedHeight = parseFloat(height);
    const parsedWeight = parseFloat(weight);
    if (
      !isNaN(parsedHeight) &&
      !isNaN(parsedWeight) &&
      parsedHeight > 0 &&
      parsedWeight > 0
    ) {
      let convertedHeight = parsedHeight;
      let convertedWeight = parsedWeight;
      if (heightUnit === "ft") {
        convertedHeight *= 30.48;
      }
      if (weightUnit === "lb") {
        convertedWeight *= 0.453592;
      }
      const bmi = calculateBMIFunction(convertedHeight, convertedWeight);
      console.log("bmi", bmi);
      const category = getBMICategory(bmi);
      setResult(
        `Su IMC es ${bmi.toFixed(
          2
        )}. Lo que indica que está en la categoría de "${category}".`
      );
    } else {
      setResult("Por favor ingresa una altura y peso válidos.");
    }
  };

  const calculateBMIFunction = (height, weight) => {
    console.log(height);
    console.log(weight);
    return weight / Math.pow(height / 100, 2);
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) {
      return "Bajo Peso";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
      return "Peso saludable";
    } else if (bmi > 24.9 && bmi <= 29.9) {
      return "Sobrepeso";
    } else {
      return "Obesidad";
    }
  };

  return (
    <div className="flex justify-center">
      {isOpen && (
        <div
          id="modelConfirm"
          className="fixed z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full px-4"
        >
          <div className="relative top-10 mx-auto shadow-xl rounded-md bg-white max-w-2xl">
            <div className="flex justify-end p-2">
              <button
                onClick={closeModal}
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="p-6 px-8 pt-0 text-center overflow-y-auto max-h-82 md:max-h-90">
              <h3 className="text-[#3c8274] font-bold mb-2 text-2xl">INDICE DE MASA CORPORAL</h3>
            <i className="fa-solid fa-weight-scale text-[#3c8274] text-6xl"></i>
            <div className="mt-2">
              <p className="text-justify">El <b>IMC</b> es como una regla rápida para medir tu cuerpo. Imagina que es una fórmula mágica que usa tu altura y peso para decirte si estás en un rango saludable. Pero, ¡ojo! No es perfecto, especialmente para los deportistas que son puro músculo.</p>
              <h5 className="text-left text-[#3c8274] font-bold mt-4">¿Por qué no siempre funciona para atletas?</h5>
              <p className="text-justify">Los deportistas pueden tener un IMC alto y aún así estar súper en forma. Esto es porque el IMC no puede ver la diferencia entre tus músculos y la grasa. Así que, si eres un atleta, no te preocupes si tu IMC dice que estás “sobrepeso”; probablemente es por esos músculos impresionantes que tienes.</p>
              <h5 className="text-left text-[#3c8274] font-bold mt-4">¿Cómo lo usan los expertos en deporte?</h5>
              <p className="text-justify">Los doctores y entrenadores que trabajan con atletas prefieren otras formas de medir el cuerpo que les dan más detalles, como cuánta grasa y músculo tienes. Esto les ayuda a darte consejos más personalizados para que estés en tu mejor forma.</p>
              <h5 className="text-left text-[#3c8274] font-bold mt-4">¿Qué más deberías saber?</h5>
              <p className="text-justify">Aunque el IMC es un buen punto de partida, no lo es todo. Es importante comer bien y cuidar tu salud en general. Los expertos miran más allá del IMC para asegurarse de que estás fuerte y saludable, tanto por dentro como por fuera.</p>
            
              <p className="text-justify mt-4"><i>Recuerda, el IMC es solo una pieza del rompecabezas cuando se trata de tu salud y forma física. ¡Siempre es mejor hablar con un profesional para obtener la imagen completa!</i> </p>
            </div>
              
              
              <button
                onClick={closeModal}
                className="text-white text-xl mt-2 bg-[#3c8274] hover:bg-[#4a9e8d] focus:ring-4 focus:ring-red-300 font-medium rounded-lg inline-flex items-center px-12 py-2.5 text-center "
              >
                Regresar
              </button>
              
            </div>
          </div>
        </div>
      )}

      <div className="bg-gray-100 md:max-w-[25%] flex justify-center items-center ">
        <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl border border-emerald-600">
          <h1 className="text-xl font-semibold text-center mb-2 text-[#3c8274]">
            Calcula tu Indice de Masa Corporal (IMC)
          </h1>
          <button onClick={openModal} className="text-emerald-500 mx-auto block mb-4 text-sm font-semibold">¿Qué es el IMC?</button>

          <div className="mb-4">
            <label htmlFor="height" className="block mb-2 text-neutral-500">
              Altura
            </label>
            <div className="flex">
              <input
                type="number"
                id="height"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                className="form-input flex-1 mr-2 border-0"
                placeholder="Ingresa tu altura"
              />
              <select
                id="heightUnit"
                value={heightUnit}
                onChange={(e) => setHeightUnit(e.target.value)}
                className="form-select w-24"
              >
                <option value="cm">cm</option>
                <option value="ft">ft</option>
              </select>
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="weight" className="block mb-2 text-neutral-500">
              Peso
            </label>
            <div className="flex">
              <input
                type="number"
                id="weight"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="form-input flex-1 mr-2"
                placeholder="Ingresa tu peso"
              />
              <select
                id="weightUnit"
                value={weightUnit}
                onChange={(e) => setWeightUnit(e.target.value)}
                className="form-select w-24"
              >
                <option value="kg">kg</option>
                <option value="lb">lb</option>
              </select>
            </div>
          </div>
          <button
            onClick={calculateBMI}
            className="bg-[#3c8274] text-white font-semibold py-2 px-4 rounded w-full mb-4"
          >
            Calcular IMC
          </button>
          <div id="result" className="text-center text-emerald-500">
            {result}
          </div>
        </div>
      </div>
    </div>
  );
};
