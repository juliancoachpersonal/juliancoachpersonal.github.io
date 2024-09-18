import { useEffect, useRef, useCallback } from "react";
import { useWavesurfer } from '@wavesurfer/react'

import clipsCocuy from "../../../assets/images/components/adventure/cocuy_clips.mp4";
import adventure_podcast from "../../../assets/audios/components/adventure/deportes_de_aventura.mp3";
import mapagua2 from "../../../assets/images/components/adventure/mapagua.png"
import cocuy_pozos from "../../../assets/images/components/adventure/cocuy_pozos.jpg"
import perros from "../../../assets/images/components/adventure/perros.png"
import pozos from "../../../assets/images/components/adventure/pozos.png"
// import cocuy_nieve from "../../../assets/images/components/adventure/cocuy_nieve.png"
// import cocuy_nieve2 from "../../../assets/images/components/adventure/cocuy_nieve2.png"
// import cocuy_land from "../../../assets/images/components/adventure/cocuy_land.jpg"
// import pozosv from "../../../assets/images/components/adventure/pozosv.png"



export const Adventure = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const containerRef = useRef(null)
  

  const { wavesurfer, isPlaying } = useWavesurfer({
    container: containerRef,
    height: 100,
    waveColor: 'rgb(60, 130, 116)',
    progressColor: 'rgb(31, 74, 65)',
    url: adventure_podcast
  })

  

  const onPlayPause = useCallback(() => {
    wavesurfer && wavesurfer.playPause()
  }, [wavesurfer])

  return (
    <div className="py-32 md:py-36">
      <h2 className="text-center text-4xl text-[#3C8274] font-bold pb-8">
        ¡Explora el mundo sin límites!
      </h2>

      <div className="flex justify-center mb-6">
        <div className="aspect-video w-[100%] md:w-[80%]">
          <iframe
            className="h-full w-[100%]"
            src="https://www.youtube.com/embed/AzUjSpGZnZQ?si=TCEN5c2VkLs7HETn"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <section className="bg-zinc-50 overflow-hidden">
        <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto my-40 flex flex-col justify-center flex-wrap">
          <div className="flex flex-col sm:flex-row mx-auto">
            <a href="#_">
              {" "}
              <img
                src={ cocuy_pozos }
                className="rounded-xl  rotate-3 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />{" "}
            </a>
            <a href="#_">
              {" "}
              <img
                src={ mapagua2 }
                className="rounded-xl  -rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />{" "}
            </a>
            <a href="#_">
              {" "}
              <img
                src={ perros }
                className="rounded-xl  rotate-3 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />{" "}
            </a>
            <a href="#_">
              {" "}
              <img
                src={ pozos }
                className="rounded-xl  -rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />{" "}
            </a>
          </div>
          
        </div>
        {/* <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto flex flex-col justify-center flex-wrap">
          <div className="flex flex-col sm:flex-row mx-auto">
            <a href="#_">
              {" "}
              <img
                src={ cocuy_nieve }
                className="rounded-xl  rotate-3 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />{" "}
            </a>
            <a href="#_">
              {" "}
              <img
                src={ cocuy_nieve2 }
                className="rounded-xl  -rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />{" "}
            </a>
            <a href="#_">
              {" "}
              <img
                src={ cocuy_land }
                className="rounded-xl  rotate-3 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />{" "}
            </a>
            <a href="#_">
              {" "}
              <img
                src={ pozosv }
                className="rounded-xl -rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom"
                alt="#_"
              />{" "}
            </a>
          </div>
          
        </div> */}
      </section>

      

      

      <div className="px-6 md:px-36">
      <div className="flex justify-center my-8 md:my-0">
      <video autoPlay loop muted playsInline className="md:w-[30%]">
              <source src={clipsCocuy} type="video/mp4"/>
        </video>
      </div>
        <h3 className="text-4xl text-[#3C8274] font-bold mt-12 mb-4 text-center">
          ¿Qué son los Deportes de Aventura?
        </h3>
        {/* <div className="flex justify-center my-8 md:my-0">
        <audio controls>
          <source src={adventure_podcast} type="audio/mp3"/>
        Your browser does not support the audio element.
        </audio>
      </div> */}
      <div>
      <div ref={containerRef} />

        <div style={{ display: 'flex', gap: '1em', justifyContent: 'center' }}>
          

          <button onClick={onPlayPause} className="cursor-pointer inline-block rounded bg-[#489c8c] px-6 pb-2 pt-2.5 font-medium leading-normal text-white shadow-primary-3 transition duration-150 ease-in-out hover:bg-primary-accent-300 hover:shadow-primary-2 focus:bg-primary-accent-300 focus:shadow-primary-2 focus:outline-none focus:ring-0 active:bg-primary-600 active:shadow-primary-2 dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
            {isPlaying ? 'Pausa el Audio' : '¿No quieres leer? Da click aquí!'}
            <i className={`fa-solid ms-3 ${
                  isPlaying ? "fa-circle-pause text-lg":"fa-volume-high" }`}></i>
            
          </button>
        </div>
      </div>
        <p className="text-justify text-neutral-600 text-lg mt-4 md:mt-6">
          Los deportes de aventura son actividades que se desarrollan al aire
          libre y a menudo en contacto con la naturaleza. Estos deportes
          implican más riesgo que los deportes corrientes y generan una mayor
          sensación de adrenalina. Algunos deportes de aventura pueden
          practicarse sin conocimiento previo porque se desarrollan a través de
          una empresa de turismo activo o junto a un instructor. Existen tres
          tipos de deportes de aventura: terrestres (como la escalada, el esquí,
          el alpinismo, el trekking, el motocross, la espeleología, el rápel o
          el BTT), acuáticos (como el surf, el windsurf, el buceo, el
          barranquismo, el esquí acuático, el rafting o el piragüismo) y aéreos
          (como el wingsuit fly, el paracaidismo, la tirolina, el parapente o el
          ala delta).
        </p>

        <h3 className="text-2xl text-[#3C8274] font-bold mt-8 mb-4">
          Origen de los Deportes de Aventura
        </h3>
        <p className="text-justify text-neutral-600 text-lg">
          La historia de los deportes de aventura se remonta a siglos pasados
          donde grandes civilizaciones y personajes de la época probaron con y
          sin éxito lo que hoy en día conocemos. Cada deporte tiene su propia
          historia, pues son muchos y de lo más variados. Por ejemplo, algunos
          hablan de que los chinos fueron los precursores del paracaidismo y
          otros señalan a Oliver Malmesbury, un monje inglés del siglo XI. Otros
          también señalan a “Leonardo Da Vinci” como el inventor del paracaídas
          con su &quot;baldaquino&quot;.
        </p>

        <h3 className="text-2xl text-[#3C8274] font-bold mt-8 mb-4">
          Importancia de los deportes de aventura
        </h3>
        <p className="text-justify text-neutral-600 text-lg">
          El deporte de aventura tiene una gran cantidad de beneficios que a
          menudo pasan desapercibidos. Por un lado, ayudan muchísimo a mejorar
          la gestión del miedo y la autosuperación. Además, a menudo requieren
          de contacto social y te permitirán conocer a muchas personas con
          intereses similares a los tuyos. El ejercicio en ambientes naturales
          se asocia a un aumento de las emociones positivas y del afecto
          positivo, disminución del afecto negativo y de respuestas fisiológicas
          relacionadas con el estrés, mayor atención, energía, satisfacción y
          compromiso e intención de ejercicio futuro.
        </p>

        <h3 className="text-2xl text-[#3C8274] font-bold mt-8 mb-4">
          Deportes de aventura específicos: Trekking y Senderismo
        </h3>
        <p className="text-justify text-neutral-600 text-lg">
          El trekking y el senderismo son dos de los deportes de aventura más
          populares. Ambos implican caminar por senderos y caminos, generalmente
          en entornos naturales. Aunque son similares, el trekking suele ser más
          desafiante e implica rutas más largas y difíciles, mientras que el
          senderismo se refiere a caminatas más fáciles y relajadas. El
          senderismo es una actividad al aire libre que consiste en caminar por
          senderos y rutas trazadas en entornos naturales. Es una práctica que
          combina el ejercicio físico con el contacto directo con la naturaleza,
          permitiéndote explorar y disfrutar de paisajes impresionantes.
        </p>

        <h3 className="text-2xl text-[#3C8274] font-bold mt-8 mb-4">
          Conclusiones
        </h3>
        <ul className="list-disc ml-4 md:ml-8 text-justify">
          <li className="text-neutral-600 text-lg mb-2">
            Los deportes de aventura son actividades que combinan emoción,
            riesgo y contacto directo con la naturaleza. Estas actividades
            suelen realizarse en entornos naturales y requieren una cierta
            preparación física y mental.
          </li>
          <li className="text-neutral-600 text-lg mb-2">
            Estas disciplinas deportivas permiten a las personas explorar nuevos
            terrenos, desafiar sus límites y vivir emociones intensas. Son una
            excelente manera de salir de la rutina y vivir experiencias únicas.
          </li>
          <li className="text-neutral-600 text-lg mb-2">
            Los deportes de aventura se desarrollan al aire libre y a menudo en
            contacto con la naturaleza. Esto permite a los participantes
            disfrutar de paisajes impresionantes y conectarse con el medio
            ambiente.
          </li>
          <li className="text-neutral-600 text-lg mb-2">
            La historia de los deportes de aventura se remonta a siglos pasados
            donde grandes civilizaciones y personajes de la época probaron con y
            sin éxito lo que hoy en día conocemos. A lo largo de los años, estos
            deportes han evolucionado y se han adaptado a las necesidades y
            gustos de las personas.
          </li>
          <li className="text-neutral-600 text-lg mb-2">
            Cada deporte de aventura tiene su propia historia, pues son muchos y
            de lo más variados. Desde el montañismo hasta el buceo, cada deporte
            tiene su origen y su evolución.
          </li>
          <li className="text-neutral-600 text-lg mb-2">
            El deporte de aventura tiene una gran cantidad de beneficios que a
            menudo pasan desapercibidos. No solo mejora la condición física,
            sino que también contribuye al bienestar emocional y mental.
          </li>
          <li className="text-neutral-600 text-lg mb-2">
            Los deportes de aventura ayudan muchísimo a mejorar la gestión del
            miedo y la autosuperación. Al enfrentarse a desafíos y superar
            obstáculos, los participantes ganan confianza en sí mismos y
            aprenden a manejar sus miedos.
          </li>
          <li className="text-neutral-600 text-lg mb-2">
            A menudo, los deportes de aventura requieren de contacto social y te
            permitirán conocer a muchas personas con intereses similares a los
            tuyos. Esto puede llevar a la formación de nuevas amistades y a la
            creación de recuerdos inolvidables.
          </li>
          <li className="text-neutral-600 text-lg mb-2">
            El trekking y el senderismo son dos de los deportes de aventura más
            populares. Son accesibles para la mayoría de las personas y ofrecen
            una excelente manera de disfrutar de la naturaleza y hacer ejercicio
            al mismo tiempo.
          </li>
          <li className="text-neutral-600 text-lg mb-2">
            Aunque son similares, el trekking suele ser más desafiante e implica
            rutas más largas y difíciles, mientras que el senderismo se refiere
            a caminatas más fáciles y relajadas. Ambos ofrecen beneficios para
            la salud y el bienestar, y son una excelente opción para las
            personas que buscan una actividad al aire libre.
          </li>
        </ul>
      </div>
    </div>
  );
};
