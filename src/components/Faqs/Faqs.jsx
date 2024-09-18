import bgParallax from "../../assets/images/landing/carousel/carousel1.webp";
import nequi from "../../assets/images/landing/icons/nequi.svg";
import paypal from "../../assets/images/landing/icons/paypal.png";

import brochureService from "../../assets/files/landing/brochure_cop.pdf";
import brochureSpecific from "../../assets/files/landing/brochure_usd.pdf";

import "./Faqs.css";


export const Faqs = () => {
  return (
    <div>
      <div
        className="py-8 bg-center"
        style={{
          background: `linear-gradient(rgba(60,130,116,.9), rgba(60,130,116,1)), url(${bgParallax})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="relative w-full bg-white px-6 pt-10 pb-8 mt-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10">
          <div className="mx-auto px-5">
            <div className="flex flex-col items-center">
              <h2 className="text-center text-[#3c8274] text-5xl pb-6 font-bold">
                Preguntas Frecuentes
              </h2>
              <p className="text-neutral-500 text-center">
                Encuentra las preguntas más frecuentes al momento de adquirir un
                plan de entrenamiento
              </p>
            </div>
            <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span className="font-bold text-[#3c8274]">
                      ¿Cómo se realiza la evaluación inicial y el seguimiento
                      del progreso?
                    </span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 text-justify">
                    Se realiza una toma de medidas antropométricas
                    (circunferencias, diámetros y pliegues), y se llena un
                    formulario de chequeo general (médica, nutricional y
                    psicológica) el cual será revisitado cada 3 meses.
                  </p>
                  <blockquote className="mt-5 text-emerald-500 indent-5">&quot;El progreso no se logra en un solo salto gigante, sino paso a paso, día a día.&quot; <b>- J.R.R. Tolkien</b></blockquote>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span className="font-bold text-[#3c8274]">
                      ¿Qué tipo de seguimiento y apoyo brindas durante el
                      programa?
                    </span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 text-justify">
                    Dependiendo de tus necesidades, se realizará un seguimiento
                    y control médico-deportivo, psicológico-deportivo y
                    nutricional-deportivo. El apoyo se brindará de acuerdo con
                    el plan que elijas.
                  </p>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 text-justify">
                    Lo más importante para mí como profesional es priorizar en tu salud teniendo en cuenta el principio básico de entrenamiento de la individualización, en donde, se hace una caracterización de todos y cada uno de los componentes únicos e independientes que tu cuerpo presenta actualmente
                  </p>
                  <blockquote className="mt-5 text-emerald-500 indent-5">&quot;La grandeza no está en nunca caer, sino en levantarse cada vez que lo haces.&quot; <b>- Confucio</b></blockquote>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span className="font-bold text-[#3c8274]">
                      ¿Cómo estructuras tus planes de entrenamiento
                      personalizado?
                    </span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 text-justify">
                    Para garantizar el éxito en cualquier actividad deportiva, es fundamental establecer un plan de entrenamiento estructurado y bien definido. Este plan debe estar alineado con los objetivos personales del individuo y adaptado a sus capacidades y cualidades físicas básicas. Un enfoque organizado y metódico es esencial para maximizar el rendimiento y alcanzar los resultados deseados de manera eficiente y efectiva.
                  </p>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 text-justify">
                    Manejo tres componentes principales:
                  </p>
                  <ul className="ps-3 mt-2 text-neutral-600">
                      <li>
                        <span className="font-bold">
                          - Componente Deportivo
                        </span>{" "}
                        enfocado en el entrenamiento físico y la mejora en el
                        rendimiento atlético.
                      </li>
                      <li>
                        <span className="font-bold">
                          - Componente Nutricional
                        </span>{" "}
                        Deportivo con planes alimenticios personalizados que
                        complementan el régimen de entrenamiento.
                      </li>
                      <li>
                        <span className="font-bold">
                          - Componente Psicológico
                        </span>{" "}
                        Deportivo centrado en fortalecer la salud mental del
                        deportista.
                      </li>
                    </ul>
                    <p className="group-open:animate-fadeIn mt-3 text-neutral-600 text-justify">
                      Es importante destacar que el profesional que representa la marca <b>JULIAN COACH PERSONAL</b> cuenta con el título profesional con énfasis en inclusión. Este conocimiento especializado le permite diseñar planes de entrenamiento estructurados y adaptados específicamente para diversas modalidades deportivas adaptadas, como tenis de mesa adaptado, atletismo de pista y campo, baloncesto en silla de ruedas, voleibol sentado y fútbol 5 adaptado, entre otros.
                    </p>
                    <blockquote className="mt-5 text-emerald-500 indent-5">&quot;El verdadero éxito en el deporte surge de la dedicación constante a un plan estratégico, donde cada paso cuenta hacia la meta final.&quot; <b>- Michael Jordan</b></blockquote>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span className="font-bold text-[#3c8274]">
                      ¿Ofreces opciones de entrenamiento presencial, en línea o
                      ambos?
                    </span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 text-justify">
                    Ofrezco sesiones tanto presenciales como virtuales,
                    dependiendo de tu ubicación, tus objetivos y las condiciones
                    de trabajo que mejor se adapten a ti.
                  </p>
                  <blockquote className="mt-5 text-emerald-500 indent-5">&quot;La flexibilidad es la clave para el éxito. Adaptarse a las circunstancias y aprovechar las oportunidades es lo que nos lleva más allá de nuestros límites&quot; <b>- Elon Musk</b></blockquote>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span className="font-bold text-[#3c8274]">
                      Además del entrenamiento convencional, ¿qué otros métodos o tipos de entrenamiento ofreces?
                    </span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 text-justify">
                    <b>¡Claro que sí!</b> Además de los entrenamientos centrados en el acondicionamiento físico dentro de un espacio deportivo, también implemento técnicas como la acuaterapia, ajustadas a las capacidades básicas del individuo, como velocidad, equilibrio, peso corporal, alta intensidad y resistencia, ideales para actividades como running y trekking. En particular, realizo entrenamiento por intervalos aeróbicos, alternando períodos de ejercicio de alta intensidad con períodos de recuperación.
                  </p>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 text-justify">
                  Además, he incorporado métodos alternativos de entrenamiento que se centran en la biomecánica del ejercicio, analizando y aplicando componentes pliométricos o de estabilización corporal. Entre estos métodos, he aplicado con éxito el método <b>Wim Hof</b> en varios de mis clientes.
                  </p>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 text-justify">
                  Como entrenador, también tengo la oportunidad de participar activamente en las sesiones, lo que me ha permitido llevar a cabo entrenamientos de crossfit, enriqueciendo la experiencia y los resultados obtenidos por quienes entreno.
                  </p>
                  <blockquote className="mt-5 text-emerald-500 indent-5">&quot;El éxito no se logra solo con fuerza física, sino con la capacidad de adaptarse y superar los desafíos con determinación y perseverancia.&quot; <b>- Arnold Schwarzenegger</b></blockquote>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span className="font-bold text-[#3c8274]">
                      ¿Puedo comunicarme contigo fuera de las sesiones de
                      entrenamiento?
                    </span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 text-justify">
                    <b>¡Por supuesto, estoy aquí para ayudarte! 😊 </b>
                  </p>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 text-justify">
                  Tengo un calendario de trabajo que mi asistente revisa semanalmente. La mejor forma de avanzar es ponerte en contacto directamente conmigo lo antes posible, así podemos encontrar el plan que mejor se ajuste a tu presupuesto.
                  </p>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 text-justify">
                    Estaré encantado de
                    hablar contigo ya sea por{" "}
                    <a
                      className="font-bold text-[#25d366]"
                      href="https://api.whatsapp.com/send?phone=573214387967&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20planes%20de%20entrenamiento."
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp
                    </a>{" "}
                    o mediante llamada telefónica.
                  </p>
                  <blockquote className="mt-5 text-emerald-500 indent-5">&quot;La comunicación es la clave para cualquier relación exitosa. Mantente en contacto y cultiva tu crecimiento día a día.&quot; <b>- Zig Ziglar</b></blockquote>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span className="font-bold text-[#3c8274]">
                    ¿Cómo se ajusta el plan si mis circunstancias cambian durante el programa?
                    </span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 text-justify">
                    Entiendo que las circunstancias pueden cambiar, por lo que ofrezco una flexibilidad completa en la modalidad de entrenamiento para adaptarnos a tus necesidades en tiempo real. Si inicialmente optas por sesiones presenciales y, por razones personales necesitas cambiar a un formato virtual, <b>puedo acomodar ese ajuste sin problema.</b>
                  </p>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 text-justify">
                    También, si deseas pasar de entrenamientos virtuales a presenciales, <b>¡podemos organizarlo!</b> Mi objetivo es garantizar que tu entrenamiento sea conveniente y accesible, asegurando que sigas con motivación y compromiso con tus metas, independientemente de los cambios que puedan surgir.
                  </p>
                  <blockquote className="mt-5 text-emerald-500 indent-5">&quot;La verdadera medida del liderazgo es cómo te adaptas al cambio.&quot; <b>- John Wooden</b></blockquote>
                </details>
              </div>
              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span className="font-bold text-[#3c8274]">
                    ¿Cómo se realiza el pago?
                    </span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 text-justify">
                    Dependiendo del plan que elijas, el pago será efectuado a través de  
                    
                    <a 
            className=" inline"
            href='https://transacciones.nequi.com/bdigital/login.jsp'
            rel="noreferrer"
            target="_blank"
            >
              <img className="w-[15%] inline mx-2" src={nequi} alt="logo_nequi" />
            </a>
            <a 
            className="inline"
            href='https://www.paypal.com/signin'
            rel="noreferrer"
            target="_blank"
            >
              <img className="w-[15%] inline mx-2 mt-1" src={paypal} alt="logo_paypal" />
            </a>
            <span>o a través de tarjeta débito o crédito.</span>
                  </p>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 text-justify">Puedes consultar el plan que se adapte a tus necesidades dando click{' '}  
                  <a
              className="text-emerald-500 font-bold"
              href={brochureService}
              rel="noreferrer"
              target="_blank"
              // download="brochure_servicios.pdf"
            >
              Aquí
            </a>
            {' o '}
            <a
              className="text-emerald-500 font-bold"
              href={brochureSpecific}
              rel="noreferrer"
              target="_blank"
              // download="brochure_servicios.pdf"
            >
              Aquí.
            </a>
                  </p>
                  <blockquote className="mt-5 text-emerald-500 indent-5">&quot;La mejor inversión que puedes hacer es en ti mismo.&quot; <b>- Warren Buffett</b></blockquote>
                </details>
              </div>

              <div className="py-5">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span className="font-bold text-[#3c8274]">
                    ¿Hay algún costo adicional por equipo o instalaciones específicas necesarias para el entrenamiento?
                    </span>
                    <span className="transition group-open:rotate-180">
                      <svg
                        fill="none"
                        height="24"
                        shapeRendering="geometricPrecision"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        viewBox="0 0 24 24"
                        width="24"
                      >
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </summary>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 text-justify">
                   Así, pero no te preocupes, el pago adicional es mínimo 😊
                  </p>
                  <p className="group-open:animate-fadeIn mt-3 text-neutral-600 text-justify">
                   Para el caso de acuaterapia o ejercicios donde se requiera una infraestructura especial para realizar el entrenamiento, se paga una pequeña fracción adicional para cubrir los ingresos y elementos adicionales.
                  </p>
                  <blockquote className="mt-5 text-emerald-500 indent-5">&quot;La calidad nunca es un accidente; siempre es el resultado de un esfuerzo de la inteligencia.&quot; <b>- John Ruskin</b></blockquote>
                </details>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};
