import { useEffect } from "react";

import article from "../../../assets/images/components/esports/esports_article1.jpg";
import videoTwitch from "../../../assets/images/components/esports/twitch.mp4"
import { AudioPlayer } from "../../../components/AudioPlayer/AudioPlayer";
// import { Game } from "../../../components/Game/Game";
import intro from "../../../assets/audios/components/esports/intro_esports.mp3";
import content from "../../../assets/audios/components/esports/content_esports.mp3";


const audioSources = [
  { url: intro, label: "Sumérgete en los E-Sports" },
  { url: content, label: "Sumérgete en los E-Sports" }
];


export const Esports = () => {


    useEffect(() => {
        window.scrollTo(0, 0);
        
      }, []);

  return (
    <div className="py-32 md:py-30">
      
      <video autoPlay loop muted playsInline className="w-full">
              <source src={videoTwitch} type="video/mp4"/>
        </video>

        <h2 className="py-8 text-center text-5xl md:text-7xl text-[#7DD219] font-semibold pb-8 racing-type">
      🎮 E-Sports 🎮
      </h2>

      

        <img className="mx-auto w-80 md:w-[20%] rounded-full mb-4" src={article} alt="" />
      <div className="px-4 md:px-16">
        
        
        <div className="">
          <AudioPlayer url={audioSources[0].url} label={audioSources[0].label} />
          <p className="text-justify text-neutral-600 text-lg mb-2">
          Los E-Sports, también conocidos como deportes electrónicos, son competiciones organizadas de videojuegos en las que los jugadores compiten individualmente o en equipos. Este fenómeno ha experimentado un crecimiento exponencial en los últimos años, convirtiéndose en un negocio multimillonario ligado al avance de las comunicaciones, la electrónica y las tecnologías de la información.
          </p>
          <p className="text-justify text-neutral-600 text-lg mb-2">
          Los E-Sports ya no se diferencian mucho de los deportes tradicionales. Cuentan con jugadores profesionales, ligas organizadas, eventos mundiales y millones de seguidores. Lo que comenzó como un pasatiempo para muchos aficionados, se ha convertido en una profesión respaldada por una industria profesional mundial.
          </p>
          <p className="text-justify text-neutral-600 text-lg mb-2">
          En 2021, los E-Sports facturaron más de mil millones de dólares, siendo Asia y Estados Unidos los líderes del sector. En Europa, España se posiciona entre los países con mayor penetración en el mercado. El mundial de League of Legends en 2023 se convirtió en el torneo de E-Sports más visto de la historia, alcanzando los 6.402.760 espectadores.
          </p>
          <p className="text-justify text-neutral-600 text-lg mb-2">
          Como <span className="text-[#7DD219] font-bold">entrenador personal</span>, es fascinante observar cómo este nuevo campo de competencia está evolucionando y cómo podemos aplicar nuestros conocimientos en ciencias del deporte para mejorar la salud y el rendimiento de estos atletas digitales.
          </p>
          <p className="text-justify text-neutral-600 text-lg mb-2">
          Espero que este resumen sea de tu agrado. Si necesitas más detalles o quieres continuar con la siguiente sección, <span className="font-bold">no dudes en decírmelo.</span>
          </p>
        </div>

        {/* <Game/> */}

        <h3 className="text-center racing-type text-4xl md:text-5xl text-[#7DD219]  mt-8 mb-4">
          Sumérgete en el emocionante mundo de los E-Sports
        </h3>

        <div className="">
          {/* <AudioPlayer url={audioSources[1].url} label={audioSources[1].label} /> */}
          <p className="text-justify text-neutral-600 text-lg mb-2">
          Los E-sports, a pesar de su creciente popularidad y reconocimiento como una forma legítima de competencia, presentan desafíos únicos para la salud de sus participantes. Los jugadores de E-sports a menudo pasan largas horas sentados frente a una pantalla, lo que puede llevar a un estilo de vida sedentario.
          </p>
          <p className="text-justify text-neutral-600 text-lg mb-2">
          El sedentarismo puede tener varias consecuencias negativas para la salud. Estas incluyen un mayor riesgo de enfermedades cardiovasculares, diabetes tipo 2, obesidad, hipertensión arterial, osteoporosis, artrosis, y ciertos tipos de cáncer. Además, pasar largas horas en la misma posición puede llevar a problemas musculoesqueléticos y a una mala postura.
          </p>
          <p className="text-justify text-neutral-600 text-lg mb-2">
          Es importante destacar que estos riesgos no son exclusivos de los E-sports, sino que son comunes en cualquier actividad que implique largos períodos de inactividad. Por lo tanto, es crucial que los jugadores de E-sports, al igual que cualquier persona que pase mucho tiempo sentada, tomen medidas para mitigar estos riesgos, como incorporar el ejercicio regular en su rutina diaria.
          </p>
          <p className="text-justify text-neutral-600 text-lg mb-2">
          Espero que esta explicación sea clara y útil. Si tienes alguna otra pregunta o si quieres que desarrollemos la siguiente sección del artículo, por favor házmelo saber.

          </p>
        </div>

      </div>
    </div>
  );
};
