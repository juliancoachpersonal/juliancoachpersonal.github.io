import { useEffect, useRef} from "react";

import "./Psychology.css";
import psycho from "../../../assets/images/components/psychology/pyschology.jpg";
import psycho2 from "../../../assets/images/components/psychology/pysco2.jpg";
import components from "../../../assets/images/components/psychology/components.png";
import applications from "../../../assets/images/components/psychology/applications.png";
import impacts from "../../../assets/images/components/psychology/impacts.png";

import techniques from "../../../assets/audios/components/psychology/tecnicas_respiracion.mp3";
import benefits from "../../../assets/audios/components/psychology/benefits.mp3";
import application from "../../../assets/audios/components/psychology/application.mp3";
import { AudioPlayer } from "../../../components/AudioPlayer/AudioPlayer";

const audioSources = [
  { url: techniques, label: "Escucha las técnicas de respiración" },
  { url: benefits, label: "Escucha el artículo" },
  { url: application, label: "Escucha el artículo" },
];



export const Psychology = () => {
  const circleRef = useRef(null);
  const circleRef2 = useRef(null);
  const circleRef3 = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const circle = circleRef.current;
    const circle2 = circleRef2.current;
    const circle3 = circleRef3.current;

    // Define the keyframes for the animation
    circle.style.animation = "coherente 15s ease-in-out infinite";
    circle2.style.animation = "breathing2 19s ease-in-out infinite";
    circle3.style.animation = "wimhof 60s linear infinite";

    return () => {
      circle.style.animation = "";
    };
  }, []);



  return (
    <div className="py-32 md:py-36 px-6 md:px-36">
      <h2 className="text-center text-5xl pb-2 font-bold text-[#3c8274]">
        Psicología Deportiva
      </h2>

      <img
        className="rounded-full mx-auto w-[50%] md:w-[20%]"
        src={psycho}
        alt="psycho"
      />
      <p className="text-gray-500 py-9 text-justify">
        La psicología deportiva se centra en el estudio del comportamiento
        humano durante la práctica deportiva y en los momentos previos y
        posteriores al ejercicio. Para ello, se analiza la motivación, las tasas
        de ansiedad, de agresividad, entre otros estados emocionales, que puede
        experimentar el deportista en competiciones y deportes colectivos.
      </p>

      <h3 className="text-[#3c8274] text-center font-bold text-2xl py-8">
        RESPIREMOS JUNTOS!
      </h3>

      <AudioPlayer url={audioSources[0].url} label={audioSources[0].label} />

      <div className="flex justify-center overflow-x-auto sm:overflow-x-visible">
        <table className="w-[90%] min-w-[640px] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 fixed-column text-center text-[#3c8274]"
              >
                TÉCNICA
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-center max-w-[200px] text-[#3c8274]"
              >
                NOMBRE
              </th>
              <th scope="col" className="px-6 py-3 text-center text-[#3c8274]">
                DESCRIPCIÓN
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              style={{ height: "250px" }}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <div className="flex justify-center items-start">
                  <div
                    className="circle-container"
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div
                      ref={circleRef}
                      className="circle w-24 h-24 bg-[#3c8274] rounded-full"
                    ></div>
                  </div>
                </div>
              </th>
              <td className="px-6 py-4 text-center">RESPIRACIÓN COHERENTE</td>
              <td className="px-6 py-4">
                <p className="text-justify">
                  <span className="text-[#3c8274] font-bold">
                    Cómo se hace:{" "}
                  </span>{" "}
                  Inhala y exhala por igual en ciclos de 5 segundos cada uno.
                  Puedes usar un temporizador o simplemente contar en tu cabeza.
                </p>{" "}
                <br />
                <p className="text-justify">
                  <span className="text-[#3c8274] font-bold">Beneficios: </span>{" "}
                  Ayuda a regular el sistema nervioso autónomo, equilibrando la
                  respuesta de lucha o huida con la respuesta de relajación.
                  Mejora la variabilidad de la frecuencia cardíaca (VFC), lo
                  cual es un indicador de salud cardiovascular.
                </p>
              </td>
            </tr>
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              style={{ height: "250px", width: "300px" }}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <div className="flex justify-center items-center">
                  <div
                    className="circle-container"
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div
                      ref={circleRef2}
                      className="circle w-24 h-24 bg-[#44AB96] rounded-full"
                    ></div>
                  </div>
                </div>
              </th>
              <td className="px-6 py-4 text-center">RESPIRACIÓN 4-7-8</td>
              <td className="px-6 py-4">
                <p className="text-justify">
                  <span className="text-[#3c8274] font-bold">
                    Cómo se hace:{" "}
                  </span>{" "}
                  implica inhalar profundamente por la nariz durante 4 segundos,
                  luego retener la respiración durante 7 segundos y, finalmente,
                  exhalar lentamente por la boca durante 8 segundos. Este ciclo
                  se repite varias veces para obtener los beneficios deseados.
                </p>{" "}
                <br />
                <p className="text-justify">
                  <span className="text-[#3c8274] font-bold">Beneficios: </span>{" "}
                  Practicar la técnica 4-7-8 de respiración ayuda a reducir la
                  ansiedad, ya que promueve la relajación del cuerpo y la mente.
                  Además, puede mejorar la calidad del sueño y ayudar a
                  conciliarlo más fácilmente. Esta técnica también puede ser
                  útil para reducir el estrés y promover una sensación general
                  de bienestar.
                </p>
              </td>
            </tr>
            <tr
              className="bg-white dark:bg-gray-800"
              style={{ height: "250px" }}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "100%",
                }}
              >
                <div className="flex justify-center items-center">
                  <div
                    className="circle-container"
                    style={{
                      position: "relative",
                      width: "100%",
                      height: "100%",
                    }}
                  >
                    <div
                      ref={circleRef3}
                      className="circle w-24 h-24 bg-[#2CDEBA] rounded-full"
                    ></div>
                  </div>
                </div>
              </th>
              <td className="px-6 py-4 text-center">RESPIRACIÓN WIM HOF</td>
              <td className="px-6 py-4">
                <td className="px-6 py-4">
                  <p className="text-justify">
                    <span className="text-[#3c8274] font-bold">
                      Cómo se hace:{" "}
                    </span>{" "}
                    Realiza 30 respiraciones rápidas y profundas, seguidas de
                    una exhalación completa y una retención de la respiración
                    por el tiempo que te sientas cómodo. Luego, inhala
                    profundamente y mantén la respiración durante 15 segundos.
                    Repite el ciclo.
                  </p>{" "}
                  <br />
                  <p className="text-justify">
                    <span className="text-[#3c8274] font-bold">
                      Beneficios:{" "}
                    </span>{" "}
                    Aumenta la oxigenación del cuerpo, mejora la resistencia al
                    estrés y puede fortalecer el sistema inmunológico.
                  </p>
                </td>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="text-[#3c8274] text-center font-bold text-2xl py-8">
          BENEFICIOS DE LA PSICOLOGIA DEPORTIVA
        </h3>
        <img
          className="mx-auto w-[50%] md:w-[20%] mb-4"
          src={psycho2}
          alt="pyscho2"
        />

        <AudioPlayer url={audioSources[1].url} label={audioSources[1].label} />


        <p className="text-gray-500 text-justify">
          La psicología deportiva juega un papel crucial en el rendimiento de
          los atletas, ayudándoles a desarrollar una fortaleza mental que es
          esencial para el éxito en el deporte. Esta disciplina se centra en la
          preparación mental de los atletas, permitiéndoles manejar la presión y
          las expectativas, controlar sus emociones en situaciones de alta
          tensión y mantener la concentración durante las competencias. La
          fortaleza mental es tan importante como la habilidad física en el
          deporte, y la psicología deportiva proporciona las herramientas para
          desarrollarla.
        </p>{" "}
        <br />
        <img
          className="mx-auto w-[80%] md:w-[25%] mb-4"
          src={components}
          alt="componentes"
        />
        <p className="text-gray-500 text-justify">
          Además, la psicología deportiva también ayuda a fortalecer la
          autoconfianza de los atletas, un factor clave para el rendimiento
          deportivo. Un atleta con alta autoconfianza tiene más probabilidades
          de rendir al máximo de su capacidad y de recuperarse rápidamente de
          los contratiempos. La resiliencia, la capacidad de recuperarse de las
          dificultades y seguir adelante, es otro aspecto que la psicología
          deportiva puede ayudar a cultivar. En resumen, la psicología deportiva
          ofrece una serie de beneficios que son indispensables para alcanzar el
          éxito en el mundo del deporte.
        </p>
        <h3 className="text-[#3c8274] font-bold text-2xl pt-8 pb-4">
          Aplicabilidad en la Vida Diaria
        </h3>
        <img
          className="mx-auto w-[80%] md:w-[25%] mb-4"
          src={applications}
          alt="aplicaciones"
        />
        <AudioPlayer url={audioSources[2].url} label={audioSources[2].label} />
        <p className="text-gray-500 text-justify">
          La psicología deportiva no solo beneficia a los atletas en su
          rendimiento deportivo, sino que también tiene una aplicabilidad
          significativa en la vida diaria. Los principios y técnicas aprendidos
          a través de la psicología deportiva, como el control emocional, la
          concentración y la resiliencia, pueden ser útiles en diversas
          situaciones cotidianas.
        </p>{" "}
        <br />
        <p className="text-gray-500 text-justify">
          Por ejemplo, los movimientos que se practican en el entrenamiento
          funcional, que replican gestos cotidianos, pueden facilitar la
          realización de actividades diarias. Esto incluye acciones como
          levantar objetos, agacharse, subir escaleras o mantener una buena
          postura. Al mejorar estas habilidades físicas, se puede aumentar la
          autonomía en las tareas diarias y mejorar la calidad de vida. En
          resumen, la psicología deportiva puede tener un impacto positivo tanto
          en el campo deportivo como en la vida cotidiana.
        </p>{" "}
        <br />
        <img
          className="mx-auto w-[80%] md:w-[25%]"
          src={impacts}
          alt="impactos"
        />
      </div>
    </div>
  );
};
