import hombro from "../assets/images/components/train/hombro.jpg";
import biceps from "../assets/images/components/train/biceps.jpg";
import triceps from "../assets/images/components/train/brazo.jpg";
// import mano1 from "../assets/images/components/train/mano1.jpg";
import espalda from "../assets/images/components/train/espalda2.jpg";
import pecho from "../assets/images/components/train/pecho.jpg";
import abdomen from "../assets/images/components/train/abdomen.jpg";
// import pelvis from "../assets/images/components/train/pelvis.jpg";
import pierna from "../assets/images/components/train/pierna.jpg";
import gemelos from "../assets/images/components/train/gemelos.jpg";

import pecs_1 from "../assets/images/components/train/pecs/1.png";
import pecs_2 from "../assets/images/components/train/pecs/2.png";
import pecs_3 from "../assets/images/components/train/pecs/3.png";
import pecs_4 from "../assets/images/components/train/pecs/4.png";
import pecs_5 from "../assets/images/components/train/pecs/5.png";
import pecs_6 from "../assets/images/components/train/pecs/6.png";
import pecs_7 from "../assets/images/components/train/pecs/7.png";
import pecs_8 from "../assets/images/components/train/pecs/8.png";
import pecs_9 from "../assets/images/components/train/pecs/9.png";
import pecs_10 from "../assets/images/components/train/pecs/10.png";
import pecs_11 from "../assets/images/components/train/pecs/11.png";
import pecs_12 from "../assets/images/components/train/pecs/12.png";

// Rutina de Ejercicios
export const routines = [
  {
    id: "pecho",
    img: pecho,
    routine: [
      {
        id: 1,
        name: "Press Banca con Barra",
        image: pecs_1,
        position: [
          "Acuéstate en un banco plano con los pies firmemente apoyados en el suelo.",
          "Asegúrate de que tu espalda, cabeza y glúteos estén en contacto con el banco en todo momento.",
          "Agarra la barra con las manos un poco más separadas que el ancho de tus hombros.",
        ],
        execution: [
          "Baja la barra lentamente hacia tu pecho mientras inhalas.",
          "Mantén los codos en un ángulo de 90 grados.",
          "Empuja la barra hacia arriba mientras exhalas, extendiendo completamente los brazos.",
        ],
        advices: [
          "Mantén la espalda recta y evita arquearla.",
          "Realiza el movimiento de manera controlada para evitar lesiones.",
          "Puedes variar el agarre para trabajar diferentes partes del pectoral.",
        ],
        muscles: [
          {
            name: "Pectoral mayor",
            desc: "Trabaja el músculo principal del pecho.",
          },
          {
            name: "Pectoral menor",
            desc: "Ayuda a estabilizar la escápula y trabaja junto al pectoral mayor.",
          },
          {
            name: "Tríceps",
            desc: "Asiste en la extensión del codo durante el levantamiento.",
          },
          {
            name: "Deltoides anterior",
            desc: "Ayuda a estabilizar los hombros durante el movimiento.",
          },
          {
            name: "Serratos",
            desc: "Asisten en la estabilización del tórax durante el ejercicio.",
          },
        ],
      },
      {
        id: 2,
        name: "Press Banca Inclinado con Mancuernas",
        image: pecs_2,
        position: [
          "Ajusta el banco a una inclinación de aproximadamente 30-45 grados.",
          "Siéntate en el banco y coloca las mancuernas sobre tus muslos.",
          "Acuéstate en el banco y, al mismo tiempo, lleva las mancuernas hacia arriba para colocarlas a la altura de tus hombros.",
        ],
        execution: [
          "Empuja las mancuernas hacia arriba hasta que tus brazos estén completamente extendidos.",
          "Mantén las palmas de las manos mirando hacia adelante.",
          "Baja las mancuernas de manera controlada hasta que tus codos formen un ángulo de 90 grados o hasta que las mancuernas estén a la altura de tu pecho.",
        ],
        advices: [
          "Mantén los pies firmemente apoyados en el suelo.",
          "Evita arquear excesivamente la espalda.",
          "Realiza el movimiento de manera controlada para evitar lesiones.",
          "Mantén los omóplatos retraídos y el pecho elevado durante todo el ejercicio.",
        ],
        muscles: [
          {
            name: "Pectoral mayor (porción clavicular)",
            desc: "Principalmente trabaja la parte superior del pecho.",
          },
          {
            name: "Deltoides anterior",
            desc: "Ayuda en el movimiento de empuje.",
          },
          {
            name: "Tríceps braquial",
            desc: "Asiste en la extensión del codo.",
          },
        ],
        benefits: [
          {
            name: "Desarrollo de la parte superior del pecho",
            desc: "Ayuda a equilibrar el desarrollo muscular del pecho.",
          },
          {
            name: "Mejora de la fuerza de empuje",
            desc: "Beneficioso para otros ejercicios de empuje.",
          },
          {
            name: "Variedad en el entrenamiento",
            desc: "Añade diversidad a tu rutina de pecho.",
          },
        ],
      },
      {
        id: 3,
        name: "Aperturas en Máquina Peck Deck",
        image: pecs_3,
        position: [
          "Siéntate en la máquina Peck Deck con la espalda bien apoyada en el respaldo.",
          "Coloca los antebrazos contra las almohadillas, con los codos a la altura de los hombros.",
          "Ajusta el asiento de manera que los brazos estén paralelos al suelo.",
        ],
        execution: [
          "Empuja las almohadillas hacia adelante, juntando los brazos frente a tu pecho.",
          "Mantén una ligera flexión en los codos durante todo el movimiento.",
          "Contrae el pecho al final del movimiento y luego vuelve lentamente a la posición inicial.",
        ],
        advices: [
          "Evita arquear la espalda.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Mantén los pies firmemente apoyados en el suelo.",
        ],
        muscles: [
          {
            name: "Pectoral mayor",
            desc: "Principalmente trabaja la parte media del pecho.",
          },
          {
            name: "Deltoides anterior",
            desc: "Ayuda en el movimiento de empuje.",
          },
          {
            name: "Pectoral menor",
            desc: "Asiste en la estabilización del hombro.",
          },
        ],
      },
      {
        id: 4,
        name: "Cruce de Poleas",
        image: pecs_4,
        position: [
          "Colócate en el centro de una máquina de poleas con las poleas ajustadas a una altura alta.",
          "Sujeta las asas de las poleas con las palmas hacia abajo.",
          "Da un paso adelante con un pie, manteniendo una ligera flexión en las rodillas.",
          "Inclina ligeramente el torso hacia adelante, manteniendo la espalda recta.",
        ],
        execution: [
          "Con los brazos extendidos y ligeramente flexionados en los codos, tira de las poleas hacia abajo y hacia adelante, cruzando las manos frente a tu pecho.",
          "Mantén la contracción en el pecho por un segundo.",
          "Vuelve lentamente a la posición inicial, controlando el movimiento.",
        ],
        advices: [
          "Mantén una ligera flexión en los codos durante todo el movimiento para evitar tensión excesiva en las articulaciones.",
          "Realiza el movimiento de manera controlada, evitando movimientos bruscos.",
          "Mantén el core activado para estabilizar el cuerpo.",
        ],
        muscles: [
          {
            name: "Pectoral mayor",
            desc: "Principalmente trabaja la parte media e inferior del pecho.",
          },
          {
            name: "Deltoides anterior",
            desc: "Ayuda en el movimiento de empuje.",
          },
          {
            name: "Pectoral menor",
            desc: "Asiste en la estabilización del hombro.",
          },
        ],
        benefits: [
          {
            name: "Desarrollo del pecho",
            desc: "Excelente para definir y desarrollar la masa muscular del pecho.",
          },
          {
            name: "Variedad en el entrenamiento",
            desc: "Añade diversidad a tu rutina de pecho.",
          },
          {
            name: "Mejora de la fuerza",
            desc: "Fortalece los músculos del pecho, mejorando el rendimiento en otros ejercicios de empuje.",
          },
        ],
      },
      {
        id: 5,
        name: "Press de Banca Inclinado con Barra",
        image: pecs_5,
        position: [
          "Ajusta el banco a una inclinación de aproximadamente 30-45 grados.",
          "Acuéstate en el banco con los pies firmemente apoyados en el suelo.",
          "Agarra la barra con las manos un poco más separadas que el ancho de los hombros.",
        ],
        execution: [
          "Levanta la barra del soporte y colócala directamente sobre tu pecho con los brazos extendidos.",
          "Baja la barra lentamente hacia la parte superior del pecho mientras inhalas.",
          "Mantén los codos en un ángulo de 90 grados.",
          "Empuja la barra hacia arriba mientras exhalas, extendiendo completamente los brazos.",
        ],
        advices: [
          "Mantén la espalda recta y evita arquearla.",
          "Realiza el movimiento de manera controlada para evitar lesiones.",
          "Mantén los omóplatos retraídos y el pecho elevado durante todo el ejercicio.",
        ],
        muscles: [
          {
            name: "Pectoral mayor (porción clavicular)",
            desc: "Principalmente trabaja la parte superior del pecho.",
          },
          {
            name: "Deltoides anterior",
            desc: "Ayuda en el movimiento de empuje.",
          },
          {
            name: "Tríceps braquial",
            desc: "Asiste en la extensión del codo.",
          },
        ],
        benefits: [
          {
            name: "Desarrollo de la parte superior del pecho",
            desc: "Ayuda a equilibrar el desarrollo muscular del pecho.",
          },
          {
            name: "Mejora de la fuerza de empuje",
            desc: "Beneficioso para otros ejercicios de empuje.",
          },
          {
            name: "Variedad en el entrenamiento",
            desc: "Añade diversidad a tu rutina de pecho.",
          },
        ],
      },
      {
        id: 6,
        name: "Press de Banca Inclinado con Mancuernas",
        image: pecs_6,
        position: [
          "Ajusta el banco a una inclinación de aproximadamente 30-45 grados.",
          "Siéntate en el banco y coloca las mancuernas sobre tus muslos.",
          "Acuéstate en el banco y, al mismo tiempo, lleva las mancuernas hacia arriba para colocarlas a la altura de tus hombros.",
        ],
        execution: [
          "Empuja las mancuernas hacia arriba hasta que tus brazos estén completamente extendidos.",
          "Mantén las palmas de las manos mirando hacia adelante.",
          "Baja las mancuernas de manera controlada hasta que tus codos formen un ángulo de 90 grados o hasta que las mancuernas estén a la altura de tu pecho.",
        ],
        advices: [
          "Mantén los pies firmemente apoyados en el suelo.",
          "Evita arquear excesivamente la espalda.",
          "Realiza el movimiento de manera controlada para evitar lesiones.",
          "Mantén los omóplatos retraídos y el pecho elevado durante todo el ejercicio.",
        ],
        muscles: [
          {
            name: "Pectoral mayor (porción clavicular)",
            desc: "Principalmente trabaja la parte superior del pecho.",
          },
          {
            name: "Deltoides anterior",
            desc: "Ayuda en el movimiento de empuje.",
          },
          {
            name: "Tríceps braquial",
            desc: "Asiste en la extensión del codo.",
          },
        ],
        benefits: [
          {
            name: "Desarrollo de la parte superior del pecho",
            desc: "Ayuda a equilibrar el desarrollo muscular del pecho.",
          },
          {
            name: "Mejora de la fuerza de empuje",
            desc: "Beneficioso para otros ejercicios de empuje.",
          },
          {
            name: "Variedad en el entrenamiento",
            desc: "Añade diversidad a tu rutina de pecho.",
          },
        ],
      },
      {
        id: 7,
        name: "Aperturas con Mancuernas",
        image: pecs_7,
        position: [
          "Acuéstate en un banco plano con una mancuerna en cada mano.",
          "Mantén los pies firmemente apoyados en el suelo y la espalda en contacto con el banco.",
          "Extiende los brazos hacia arriba con una ligera flexión en los codos, las palmas de las manos mirándose entre sí.",
        ],
        execution: [
          "Baja las mancuernas en un arco amplio hacia los lados, manteniendo una ligera flexión en los codos.",
          "Detente cuando las mancuernas estén a la altura del pecho o ligeramente por debajo.",
          "Vuelve a levantar las mancuernas hacia arriba, juntándolas sobre tu pecho.",
        ],
        advices: [
          "Mantén el control durante todo el movimiento para evitar lesiones en los hombros.",
          "No bajes las mancuernas demasiado, ya que esto puede poner tensión excesiva en los hombros.",
          "Mantén una respiración constante y controlada.",
        ],
        muscles: [
          {
            name: "Pectoral mayor",
            desc: "Trabaja principalmente la parte media y externa del pecho.",
          },
          {
            name: "Deltoides anterior",
            desc: "Ayuda en el movimiento de apertura.",
          },
          {
            name: "Bíceps braquial",
            desc: "Asiste en la estabilización del brazo.",
          },
        ],
        benefits: [
          {
            name: "Desarrollo del pecho",
            desc: "Excelente para definir y desarrollar la masa muscular del pecho.",
          },
          {
            name: "Variedad en el entrenamiento",
            desc: "Añade diversidad a tu rutina de pecho.",
          },
          {
            name: "Mejora de la fuerza",
            desc: "Fortalece los músculos del pecho, mejorando el rendimiento en otros ejercicios de empuje.",
          },
        ],
      },
      {
        id: 8,
        name: "Aperturas Inclinadas con Mancuernas",
        image: pecs_8,
        position: [
          "Ajusta el banco a una inclinación de aproximadamente 30-45 grados.",
          "Siéntate en el banco y coloca las mancuernas sobre tus muslos.",
          "Acuéstate en el banco y lleva las mancuernas hacia arriba, extendiendo los brazos con una ligera flexión en los codos. Las palmas de las manos deben mirarse entre sí.",
        ],
        execution: [
          "Baja las mancuernas en un arco amplio hacia los lados, manteniendo una ligera flexión en los codos.",
          "Detente cuando las mancuernas estén a la altura del pecho o ligeramente por debajo.",
          "Vuelve a levantar las mancuernas hacia arriba, juntándolas sobre tu pecho.",
        ],
        advices: [
          "Mantén el control durante todo el movimiento para evitar lesiones en los hombros.",
          "No bajes las mancuernas demasiado, ya que esto puede poner tensión excesiva en los hombros.",
          "Mantén una respiración constante y controlada.",
        ],
        muscles: [
          {
            name: "Pectoral mayor (porción clavicular)",
            desc: "Trabaja principalmente la parte superior del pecho.",
          },
          {
            name: "Deltoides anterior",
            desc: "Ayuda en el movimiento de apertura.",
          },
          {
            name: "Bíceps braquial",
            desc: "Asiste en la estabilización del brazo.",
          },
        ],
        benefits: [
          {
            name: "Desarrollo del pecho superior",
            desc: "Excelente para definir y desarrollar la masa muscular de la parte superior del pecho.",
          },
          {
            name: "Variedad en el entrenamiento",
            desc: "Añade diversidad a tu rutina de pecho.",
          },
          {
            name: "Mejora de la fuerza",
            desc: "Fortalece los músculos del pecho, mejorando el rendimiento en otros ejercicios de empuje.",
          },
        ],
      },
      {
        id: 9,
        name: "Press de Banca en Máquina Sentado",
        image: pecs_9,
        position: [
          "Ajusta el asiento de la máquina para que los agarres estén alineados con la parte media de tu pecho.",
          "Siéntate con la espalda bien apoyada en el respaldo y los pies firmemente en el suelo.",
          "Agarra las manijas con las palmas hacia abajo y los codos en un ángulo de 90 grados.",
        ],
        execution: [
          "Empuja las manijas hacia adelante hasta que tus brazos estén completamente extendidos.",
          "Mantén una ligera flexión en los codos para evitar bloquear las articulaciones.",
          "Vuelve lentamente a la posición inicial, controlando el movimiento.",
        ],
        advices: [
          "Mantén la espalda recta y evita arquearla.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Mantén los pies firmemente apoyados en el suelo para mayor estabilidad.",
        ],
        muscles: [
          {
            name: "Pectoral mayor",
            desc: "Principalmente trabaja la parte media del pecho.",
          },
          {
            name: "Deltoides anterior",
            desc: "Ayuda en el movimiento de empuje.",
          },
          {
            name: "Tríceps braquial",
            desc: "Asiste en la extensión del codo.",
          },
        ],
        benefits: [
          {
            name: "Desarrollo del pecho",
            desc: "Excelente para desarrollar la masa muscular del pecho.",
          },
          {
            name: "Variedad en el entrenamiento",
            desc: "Añade diversidad a tu rutina de pecho.",
          },
          {
            name: "Mejora de la fuerza",
            desc: "Fortalece los músculos del pecho, mejorando el rendimiento en otros ejercicios de empuje.",
          },
        ],
      },
      {
        id: 10,
        name: "Press de Banca Declinado con Barra",
        image: pecs_10,
        position: [
          "Ajusta el banco a una declinación de aproximadamente 15-30 grados.",
          "Acuéstate en el banco con los pies firmemente asegurados bajo los rodillos para evitar deslizarte.",
          "Agarra la barra con las manos un poco más separadas que el ancho de los hombros.",
        ],
        execution: [
          "Levanta la barra del soporte y colócala directamente sobre tu pecho con los brazos extendidos.",
          "Baja la barra lentamente hacia la parte inferior del pecho mientras inhalas.",
          "Mantén los codos en un ángulo de 90 grados.",
          "Empuja la barra hacia arriba mientras exhalas, extendiendo completamente los brazos.",
        ],
        advices: [
          "Mantén la espalda recta y evita arquearla.",
          "Realiza el movimiento de manera controlada para evitar lesiones.",
          "Mantén los omóplatos retraídos y el pecho elevado durante todo el ejercicio.",
          "Es recomendable realizar este ejercicio con un compañero o un spotter para mayor seguridad.",
        ],
        muscles: [
          {
            name: "Pectoral mayor (porción esternal)",
            desc: "Principalmente trabaja la parte inferior del pecho.",
          },
          {
            name: "Deltoides anterior",
            desc: "Ayuda en el movimiento de empuje.",
          },
          {
            name: "Tríceps braquial",
            desc: "Asiste en la extensión del codo.",
          },
        ],
        benefits: [
          {
            name: "Desarrollo de la parte inferior del pecho",
            desc: "Ayuda a equilibrar el desarrollo muscular del pecho.",
          },
          {
            name: "Mejora de la fuerza de empuje",
            desc: "Beneficioso para otros ejercicios de empuje.",
          },
          {
            name: "Variedad en el entrenamiento",
            desc: "Añade diversidad a tu rutina de pecho.",
          },
        ],
      },
      {
        id: 11,
        name: "Press de Banca Declinado con Mancuernas",
        image: pecs_11,
        position: [
          "Ajusta el banco a una declinación de aproximadamente 15-30 grados.",
          "Siéntate en el banco y coloca las mancuernas sobre tus muslos.",
          "Acuéstate en el banco y lleva las mancuernas hacia arriba, extendiendo los brazos con una ligera flexión en los codos. Las palmas de las manos deben mirarse entre sí.",
        ],
        execution: [
          "Baja las mancuernas en un arco amplio hacia los lados, manteniendo una ligera flexión en los codos.",
          "Detente cuando las mancuernas estén a la altura del pecho o ligeramente por debajo.",
          "Vuelve a levantar las mancuernas hacia arriba, juntándolas sobre tu pecho.",
        ],
        advices: [
          "Mantén el control durante todo el movimiento para evitar lesiones en los hombros.",
          "No bajes las mancuernas demasiado, ya que esto puede poner tensión excesiva en los hombros.",
          "Mantén una respiración constante y controlada.",
        ],
        muscles: [
          {
            name: "Pectoral mayor (porción esternal)",
            desc: "Principalmente trabaja la parte inferior del pecho.",
          },
          {
            name: "Deltoides anterior",
            desc: "Ayuda en el movimiento de empuje.",
          },
          {
            name: "Tríceps braquial",
            desc: "Asiste en la extensión del codo.",
          },
        ],
        benefits: [
          {
            name: "Desarrollo de la parte inferior del pecho",
            desc: "Ayuda a equilibrar el desarrollo muscular del pecho.",
          },
          {
            name: "Mejora de la fuerza de empuje",
            desc: "Beneficioso para otros ejercicios de empuje.",
          },
          {
            name: "Variedad en el entrenamiento",
            desc: "Añade diversidad a tu rutina de pecho.",
          },
        ],
      },
      {
        id: 12,
        name: "Flexiones",
        image: pecs_12,
        position: [
          "Colócate en el suelo con las manos apoyadas un poco más separadas que el ancho de los hombros.",
          "Extiende las piernas hacia atrás, apoyando los dedos de los pies en el suelo.",
          "Mantén el cuerpo en una línea recta desde la cabeza hasta los talones.",
        ],
        execution: [
          "Baja el cuerpo doblando los codos, manteniéndolos cerca del cuerpo.",
          "Desciende hasta que el pecho esté cerca del suelo, sin tocarlo.",
          "Empuja el suelo con las manos para volver a la posición inicial, extendiendo completamente los brazos.",
        ],
        advices: [
          "Mantén el core activado para evitar que la cadera se hunda o se eleve.",
          "Mantén la cabeza alineada con la columna vertebral, mirando ligeramente hacia adelante.",
          "Realiza el movimiento de manera controlada, evitando movimientos bruscos.",
        ],
        muscles: [
          {
            name: "Pectoral mayor",
            desc: "Principalmente trabaja el pecho.",
          },
          {
            name: "Deltoides anterior",
            desc: "Ayuda en el movimiento de empuje.",
          },
          {
            name: "Tríceps braquial",
            desc: "Asiste en la extensión del codo.",
          },
          {
            name: "Core",
            desc: "Mantiene la estabilidad del cuerpo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento del tren superior",
            desc: "Trabaja varios grupos musculares al mismo tiempo.",
          },
          {
            name: "Mejora de la resistencia",
            desc: "Aumenta la capacidad de realizar ejercicios de empuje.",
          },
          {
            name: "Versatilidad",
            desc: "Puede realizarse en cualquier lugar sin necesidad de equipamiento.",
          },
        ],
        variations: [
          {
            name: "Flexiones con rodillas apoyadas",
            desc: "Ideal para principiantes.",
          },
          {
            name: "Flexiones con manos elevadas",
            desc: "Facilita el movimiento para aquellos que están empezando.",
          },
          {
            name: "Flexiones con pies elevados",
            desc: "Aumenta la dificultad y trabaja más los hombros.",
          },
        ],
      },
    ],
  },
  {
    id: "espalda",
    img: espalda,
    routine: [
      {
        id: 1,
        name: "Remo con Mancuerna a Una Mano",
        position: [
          "Coloca una mancuerna al lado de un banco plano.",
          "Coloca una rodilla y una mano del mismo lado sobre el banco, asegurándote de que la espalda esté recta y paralela al suelo.",
          "La pierna opuesta debe estar firmemente apoyada en el suelo, y el brazo opuesto debe estar extendido hacia el suelo, sosteniendo la mancuerna con un agarre neutro (palma mirando hacia adentro).",
        ],
        execution: [
          "Eleva la mancuerna hacia tu torso, manteniendo el codo cerca del cuerpo.",
          "Contrae los músculos de la espalda en la parte superior del movimiento.",
          "Baja la mancuerna de manera controlada hasta que el brazo esté completamente extendido.",
          "Realiza todas las repeticiones con un brazo antes de cambiar al otro lado.",
        ],
        advices: [
          "Mantén la espalda recta y evita cualquier rotación del torso.",
          "Concéntrate en levantar la mancuerna con los músculos de la espalda y no con el brazo.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
        ],
        muscles: [
          {
            name: "Dorsal ancho",
            desc: "Principalmente trabaja la parte media e inferior de la espalda.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la elevación y retracción de los omóplatos.",
          },
          {
            name: "Romboides",
            desc: "Asiste en la retracción de los omóplatos.",
          },
          {
            name: "Bíceps braquial",
            desc: "Asiste en la flexión del codo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de la espalda",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda.",
          },
          {
            name: "Mejora de la estabilidad del core",
            desc: "Ayuda a mejorar la estabilidad y el equilibrio.",
          },
          {
            name: "Variedad en el entrenamiento",
            desc: "Añade diversidad a tu rutina de espalda.",
          },
        ],
      },
      {
        id: 2,
        name: "Jalón con Agarre Ancho",
        position: [
          "Siéntate en el banco de la máquina de jalón con los pies apoyados en el suelo y las rodillas ligeramente flexionadas.",
          "Agarra la barra con las manos en un agarre ancho, más allá del ancho de tus hombros, y las palmas mirando hacia adelante.",
        ],
        execution: [
          "Tira de la barra hacia abajo hasta que toque o esté cerca de tu pecho.",
          "Mantén los codos apuntando hacia los lados y concéntrate en activar los músculos de la espalda, especialmente el dorsal ancho.",
          "Mantén la posición durante un segundo y luego regresa lentamente a la posición inicial, controlando el movimiento.",
        ],
        advices: [
          "Evita utilizar la fuerza de los brazos para realizar el movimiento; en su lugar, concéntrate en tirar con la espalda.",
          "Mantén la espalda recta y evita balancearte hacia atrás.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
        ],
        muscles: [
          {
            name: "Dorsal ancho",
            desc: "Principalmente trabaja la parte media e inferior de la espalda.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la elevación y retracción de los omóplatos.",
          },
          {
            name: "Romboides",
            desc: "Asiste en la retracción de los omóplatos.",
          },
          {
            name: "Bíceps braquial",
            desc: "Asiste en la flexión del codo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de la espalda",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona.",
          },
          {
            name: "Estabilidad y equilibrio",
            desc: "Al trabajar los músculos de la espalda, mejorarás tu estabilidad y equilibrio en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 3,
        name: "Remo en Máquina",
        position: [
          "Siéntate en la máquina de remo y ajusta las correas de los pies para que queden bien sujetas.",
          "Agarra el manillar con ambas manos, utilizando un agarre prono (palmas hacia abajo).",
          "Mantén las rodillas dobladas y el torso ligeramente inclinado hacia adelante desde las caderas, con la espalda recta.",
        ],
        execution: [
          "Fase de Captura (The Catch): Comienza con las rodillas dobladas y los talones firmemente plantados en los pedales. Inclínate ligeramente hacia adelante desde las caderas con la espalda recta.",
          "Fase de Tirón (The Drive): Empuja con las piernas primero, luego inclina el torso hacia atrás y finalmente tira del manillar hacia el pecho. Mantén los codos cerca del cuerpo.",
          "Fase de Finalización (The Finish): Termina el tirón cuando el manillar esté cerca del pecho y el torso ligeramente inclinado hacia atrás.",
          "Fase de Recuperación (The Recovery): Extiende los brazos primero, luego inclina el torso hacia adelante y finalmente dobla las rodillas para volver a la posición inicial.",
        ],
        advices: [
          "Mantén la espalda recta durante todo el movimiento para evitar lesiones.",
          "Realiza el movimiento de manera fluida y controlada, evitando tirones bruscos.",
          "Concéntrate en coordinar el empuje de las piernas, la inclinación del torso y el tirón de los brazos.",
        ],
        muscles: [
          {
            name: "Dorsal ancho",
            desc: "Principalmente trabaja la parte media e inferior de la espalda.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la elevación y retracción de los omóplatos.",
          },
          {
            name: "Romboides",
            desc: "Asiste en la retracción de los omóplatos.",
          },
          {
            name: "Bíceps braquial",
            desc: "Asiste en la flexión del codo.",
          },
          {
            name: "Cuádriceps y glúteos",
            desc: "Trabajan durante la fase de empuje con las piernas.",
          },
          {
            name: "Core",
            desc: "Mantiene la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Entrenamiento completo",
            desc: "Trabaja múltiples grupos musculares y mejora la resistencia cardiovascular.",
          },
          {
            name: "Bajo impacto",
            desc: "Es suave para las articulaciones, lo que lo hace adecuado para personas con problemas articulares.",
          },
          {
            name: "Mejora de la postura",
            desc: "Fortalece los músculos de la espalda, ayudando a mantener una buena postura.",
          },
        ],
      },
      {
        id: 4,
        name: "Jalón al Pecho con Agarre Cerrado",
        position: [
          "Siéntate en la máquina de jalón con los muslos asegurados bajo las almohadillas.",
          "Agarra la barra con las manos en un agarre cerrado, aproximadamente a 30-40 centímetros de distancia entre sí, con las palmas hacia abajo.",
        ],
        execution: [
          "Tira de la barra hacia abajo hasta que toque o esté cerca de la parte superior del pecho.",
          "Mantén los codos apuntando hacia los lados y concéntrate en activar los músculos de la espalda, especialmente el dorsal ancho.",
          "Mantén la posición durante un segundo y luego regresa lentamente a la posición inicial, controlando el movimiento.",
        ],
        advices: [
          "Evita utilizar la fuerza de los brazos para realizar el movimiento; en su lugar, concéntrate en tirar con la espalda.",
          "Mantén la espalda recta y evita balancearte hacia atrás.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
        ],
        muscles: [
          {
            name: "Dorsal ancho",
            desc: "Principalmente trabaja la parte media e inferior de la espalda.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la elevación y retracción de los omóplatos.",
          },
          {
            name: "Romboides",
            desc: "Asiste en la retracción de los omóplatos.",
          },
          {
            name: "Bíceps braquial",
            desc: "Asiste en la flexión del codo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de la espalda",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona.",
          },
          {
            name: "Estabilidad y equilibrio",
            desc: "Al trabajar los músculos de la espalda, mejorarás tu estabilidad y equilibrio en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 5,
        name: "Remo con Barra",
        position: [
          "Colócate de pie con los pies separados al ancho de los hombros.",
          "Agarra la barra con un agarre prono (palmas hacia abajo) a la altura de los hombros.",
          "Flexiona ligeramente las rodillas y empuja las caderas hacia atrás, manteniendo la espalda recta y el torso inclinado hacia adelante aproximadamente a 45 grados.",
        ],
        execution: [
          "Tira de la barra hacia tu abdomen, manteniendo los codos cerca del cuerpo.",
          "Contrae los músculos de la espalda en la parte superior del movimiento.",
          "Baja la barra de manera controlada hasta que los brazos estén completamente extendidos.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta durante todo el movimiento para evitar lesiones.",
          "Evita balancear el cuerpo; el movimiento debe ser controlado y enfocado en los músculos de la espalda.",
          "Concéntrate en tirar con los músculos de la espalda y no con los brazos.",
        ],
        muscles: [
          {
            name: "Dorsal ancho",
            desc: "Principalmente trabaja la parte media e inferior de la espalda.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la elevación y retracción de los omóplatos.",
          },
          {
            name: "Romboides",
            desc: "Asiste en la retracción de los omóplatos.",
          },
          {
            name: "Bíceps braquial",
            desc: "Asiste en la flexión del codo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de la espalda",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona.",
          },
          {
            name: "Estabilidad y equilibrio",
            desc: "Al trabajar los músculos de la espalda, mejorarás tu estabilidad y equilibrio en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 6,
        name: "Jalón Tras Nuca",
        position: [
          "Siéntate en la máquina de jalón con los muslos asegurados bajo las almohadillas.",
          "Agarra la barra con las manos en un agarre prono (palmas hacia abajo) y las manos separadas más allá del ancho de los hombros.",
        ],
        execution: [
          "Tira de la barra hacia abajo hasta que toque o esté cerca de la parte posterior de tu cuello.",
          "Mantén los codos apuntando hacia los lados y concéntrate en activar los músculos de la espalda, especialmente el dorsal ancho.",
          "Mantén la posición durante un segundo y luego regresa lentamente a la posición inicial, controlando el movimiento.",
        ],
        advices: [
          "Evita utilizar la fuerza de los brazos para realizar el movimiento; en su lugar, concéntrate en tirar con la espalda.",
          "Mantén la espalda recta y evita balancearte hacia adelante.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
        ],
        muscles: [
          {
            name: "Dorsal ancho",
            desc: "Principalmente trabaja la parte media e inferior de la espalda.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la elevación y retracción de los omóplatos.",
          },
          {
            name: "Romboides",
            desc: "Asiste en la retracción de los omóplatos.",
          },
          {
            name: "Bíceps braquial",
            desc: "Asiste en la flexión del codo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de la espalda",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona.",
          },
          {
            name: "Estabilidad y equilibrio",
            desc: "Al trabajar los músculos de la espalda, mejorarás tu estabilidad y equilibrio en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesión",
            desc: "El jalón tras nuca puede ser lesivo para los hombros debido a la rotación externa y abducción del hombro que requiere. Es importante realizarlo con una técnica adecuada y considerar alternativas más seguras, como el jalón al pecho.",
          },
        ],
      },
      {
        id: 7,
        name: "Jalón al Pecho con Agarre Invertido",
        position: [
          "Siéntate en la máquina de jalón con los muslos asegurados bajo las almohadillas.",
          "Agarra la barra con las manos en un agarre supino (palmas hacia arriba) y las manos separadas al ancho de los hombros.",
        ],
        execution: [
          "Tira de la barra hacia abajo hasta que toque o esté cerca de la parte superior del pecho.",
          "Mantén los codos apuntando hacia adelante y concéntrate en activar los músculos de la espalda, especialmente el dorsal ancho.",
          "Mantén la posición durante un segundo y luego regresa lentamente a la posición inicial, controlando el movimiento.",
        ],
        advices: [
          "Evita utilizar la fuerza de los brazos para realizar el movimiento; en su lugar, concéntrate en tirar con la espalda.",
          "Mantén la espalda recta y evita balancearte hacia atrás.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
        ],
        muscles: [
          {
            name: "Dorsal ancho",
            desc: "Principalmente trabaja la parte media e inferior de la espalda.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la elevación y retracción de los omóplatos.",
          },
          {
            name: "Romboides",
            desc: "Asiste en la retracción de los omóplatos.",
          },
          {
            name: "Bíceps braquial",
            desc: "Asiste en la flexión del codo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de la espalda",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona.",
          },
          {
            name: "Estabilidad y equilibrio",
            desc: "Al trabajar los músculos de la espalda, mejorarás tu estabilidad y equilibrio en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 8,
        name: "Jalón en Polea con Cuerda",
        position: [
          "Colócate de pie frente a una polea alta, con las rodillas ligeramente dobladas y el pecho ligeramente inclinado hacia adelante.",
          "Toma un extremo de la cuerda en cada mano con un agarre neutral (palmas enfrentadas).",
        ],
        execution: [
          "Tira de la cuerda hacia abajo y hacia atrás, llevando las manos hacia las caderas.",
          "Mantén los codos ligeramente doblados y cercanos al cuerpo.",
          "Contrae los músculos de la espalda al final del movimiento, apretando los omóplatos juntos.",
          "Vuelve lentamente a la posición inicial, controlando el movimiento.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte hacia adelante o hacia atrás.",
          "Concéntrate en tirar con los músculos de la espalda y no con los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
        ],
        muscles: [
          {
            name: "Dorsal ancho",
            desc: "Principalmente trabaja la parte media e inferior de la espalda.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la elevación y retracción de los omóplatos.",
          },
          {
            name: "Romboides",
            desc: "Asiste en la retracción de los omóplatos.",
          },
          {
            name: "Bíceps braquial",
            desc: "Asiste en la flexión del codo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de la espalda",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona.",
          },
          {
            name: "Estabilidad y equilibrio",
            desc: "Al trabajar los músculos de la espalda, mejorarás tu estabilidad y equilibrio en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 9,
        name: "Remo en Barra T",
        position: [
          "Coloca un extremo de la barra en una esquina o en un soporte específico para barra T.",
          "Coloca un agarre en V o una manija en el otro extremo de la barra.",
          "Colócate de pie con los pies separados al ancho de los hombros, con la barra entre tus piernas.",
          "Flexiona ligeramente las rodillas y empuja las caderas hacia atrás, manteniendo la espalda recta y el torso inclinado hacia adelante aproximadamente a 45 grados.",
        ],
        execution: [
          "Agarra la manija con ambas manos, manteniendo las palmas enfrentadas (agarre neutro).",
          "Tira de la barra hacia tu abdomen, manteniendo los codos cerca del cuerpo.",
          "Contrae los músculos de la espalda en la parte superior del movimiento.",
          "Baja la barra de manera controlada hasta que los brazos estén completamente extendidos.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta durante todo el movimiento para evitar lesiones.",
          "Evita balancear el cuerpo; el movimiento debe ser controlado y enfocado en los músculos de la espalda.",
          "Concéntrate en tirar con los músculos de la espalda y no con los brazos.",
        ],
        muscles: [
          {
            name: "Dorsal ancho",
            desc: "Principalmente trabaja la parte media e inferior de la espalda.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la elevación y retracción de los omóplatos.",
          },
          {
            name: "Romboides",
            desc: "Asiste en la retracción de los omóplatos.",
          },
          {
            name: "Bíceps braquial",
            desc: "Asiste en la flexión del codo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de la espalda",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona.",
          },
          {
            name: "Estabilidad y equilibrio",
            desc: "Al trabajar los músculos de la espalda, mejorarás tu estabilidad y equilibrio en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 10,
        name: "Remo Inclinado con Agarre Supinado",
        position: [
          "Colócate de pie con los pies separados al ancho de los hombros.",
          "Agarra la barra con un agarre supinado (palmas hacia arriba) a la altura de los hombros.",
          "Flexiona ligeramente las rodillas y empuja las caderas hacia atrás, manteniendo la espalda recta y el torso inclinado hacia adelante aproximadamente a 45 grados.",
        ],
        execution: [
          "Tira de la barra hacia tu abdomen, manteniendo los codos cerca del cuerpo.",
          "Contrae los músculos de la espalda en la parte superior del movimiento.",
          "Baja la barra de manera controlada hasta que los brazos estén completamente extendidos.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta durante todo el movimiento para evitar lesiones.",
          "Evita balancear el cuerpo; el movimiento debe ser controlado y enfocado en los músculos de la espalda.",
          "Concéntrate en tirar con los músculos de la espalda y no con los brazos.",
        ],
        muscles: [
          {
            name: "Dorsal ancho",
            desc: "Principalmente trabaja la parte media e inferior de la espalda.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la elevación y retracción de los omóplatos.",
          },
          {
            name: "Romboides",
            desc: "Asiste en la retracción de los omóplatos.",
          },
          {
            name: "Bíceps braquial",
            desc: "Asiste en la flexión del codo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de la espalda",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona.",
          },
          {
            name: "Estabilidad y equilibrio",
            desc: "Al trabajar los músculos de la espalda, mejorarás tu estabilidad y equilibrio en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 11,
        name: "Elevaciones con Barra Fija",
        position: [
          "Agarra la barra con un agarre prono (palmas hacia adelante) y las manos separadas al ancho de los hombros o ligeramente más anchas.",
          "Cuelga de la barra con los brazos completamente extendidos y los pies cruzados detrás de ti para mantener el equilibrio.",
        ],
        execution: [
          "Tira de tu cuerpo hacia arriba, llevando la barbilla por encima de la barra.",
          "Mantén los codos apuntando hacia abajo y cerca del cuerpo.",
          "Contrae los músculos de la espalda y los bíceps en la parte superior del movimiento.",
          "Baja el cuerpo de manera controlada hasta que los brazos estén completamente extendidos.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte.",
          "Concéntrate en tirar con los músculos de la espalda y no con los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
        ],
        muscles: [
          {
            name: "Dorsal ancho",
            desc: "Principalmente trabaja la parte media e inferior de la espalda.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la elevación y retracción de los omóplatos.",
          },
          {
            name: "Romboides",
            desc: "Asiste en la retracción de los omóplatos.",
          },
          {
            name: "Bíceps braquial",
            desc: "Asiste en la flexión del codo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de la espalda",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona.",
          },
          {
            name: "Estabilidad y equilibrio",
            desc: "Al trabajar los músculos de la espalda, mejorarás tu estabilidad y equilibrio en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 12,
        name: "Elevaciones Tras Nuca en Barra Fija",
        position: [
          "Agarra la barra con un agarre prono (palmas hacia adelante) y las manos separadas más allá del ancho de los hombros.",
          "Cuelga de la barra con los brazos completamente extendidos y los pies cruzados detrás de ti para mantener el equilibrio.",
        ],
        execution: [
          "Tira de tu cuerpo hacia arriba, llevando la parte posterior de la cabeza hacia la barra.",
          "Mantén los codos apuntando hacia abajo y cerca del cuerpo.",
          "Contrae los músculos de la espalda y los bíceps en la parte superior del movimiento.",
          "Baja el cuerpo de manera controlada hasta que los brazos estén completamente extendidos.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte.",
          "Concéntrate en tirar con los músculos de la espalda y no con los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
        ],
        muscles: [
          {
            name: "Dorsal ancho",
            desc: "Principalmente trabaja la parte media e inferior de la espalda.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la elevación y retracción de los omóplatos.",
          },
          {
            name: "Romboides",
            desc: "Asiste en la retracción de los omóplatos.",
          },
          {
            name: "Bíceps braquial",
            desc: "Asiste en la flexión del codo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de la espalda",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona.",
          },
          {
            name: "Estabilidad y equilibrio",
            desc: "Al trabajar los músculos de la espalda, mejorarás tu estabilidad y equilibrio en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesión",
            desc: "Las elevaciones tras nuca pueden ser lesivas para los hombros debido a la rotación externa y abducción del hombro que requieren. Es importante realizarlo con una técnica adecuada y considerar alternativas más seguras, como las elevaciones al frente.",
          },
        ],
      },
      {
        id: 13,
        name: "Elevaciones en Barra Fija con Agarre Supinado",
        position: [
          "Agarra la barra con un agarre supinado (palmas hacia ti) y las manos separadas al ancho de los hombros.",
          "Cuelga de la barra con los brazos completamente extendidos y los pies cruzados detrás de ti para mantener el equilibrio.",
        ],
        execution: [
          "Tira de tu cuerpo hacia arriba, llevando la barbilla por encima de la barra.",
          "Mantén los codos apuntando hacia adelante y cerca del cuerpo.",
          "Contrae los músculos de la espalda y los bíceps en la parte superior del movimiento.",
          "Baja el cuerpo de manera controlada hasta que los brazos estén completamente extendidos.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte.",
          "Concéntrate en tirar con los músculos de la espalda y los bíceps, no solo con los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
        ],
        muscles: [
          {
            name: "Dorsal ancho",
            desc: "Principalmente trabaja la parte media e inferior de la espalda.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la elevación y retracción de los omóplatos.",
          },
          {
            name: "Romboides",
            desc: "Asiste en la retracción de los omóplatos.",
          },
          {
            name: "Bíceps braquial",
            desc: "Principalmente trabaja en la flexión del codo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de la espalda y los bíceps",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda y los bíceps.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona.",
          },
          {
            name: "Estabilidad y equilibrio",
            desc: "Al trabajar los músculos de la espalda y los bíceps, mejorarás tu estabilidad y equilibrio en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 14,
        name: "Jalón Dorsal con Brazos Rectos",
        position: [
          "Colócate de pie frente a una polea alta con una barra recta.",
          "Agarra la barra con un agarre prono (palmas hacia abajo) y las manos separadas a la anchura de los hombros.",
          "Mantén los brazos rectos y ligeramente flexionados en los codos.",
          "Inclina el torso ligeramente hacia adelante desde las caderas, manteniendo la espalda recta.",
        ],
        execution: [
          "Tira de la barra hacia abajo en un arco amplio hasta que llegue a la altura de tus muslos.",
          "Mantén los brazos rectos durante todo el movimiento, concentrándote en usar los músculos de la espalda para bajar la barra.",
          "Aprieta los dorsales en la parte inferior del movimiento y mantén la contracción por un segundo.",
          "Devuelve la barra lentamente a la posición inicial, controlando el movimiento para mantener la tensión en los dorsales.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Usa un peso que te permita realizar el ejercicio con buena técnica.",
          "Mantén el torso estable y evita balancearte hacia adelante o hacia atrás.",
          "Coordina la respiración con el movimiento para mantener la estabilidad del torso y maximizar la eficiencia del ejercicio.",
        ],
        muscles: [
          {
            name: "Dorsal ancho",
            desc: "Principalmente trabaja la parte media e inferior de la espalda.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la elevación y retracción de los omóplatos.",
          },
          {
            name: "Romboides",
            desc: "Asiste en la retracción de los omóplatos.",
          },
          {
            name: "Deltoides posteriores",
            desc: "Trabajan en la extensión del hombro.",
          },
          {
            name: "Tríceps braquial",
            desc: "Ayuda en la extensión del codo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de la espalda",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona.",
          },
          {
            name: "Aislamiento de los dorsales",
            desc: "Permite un enfoque específico en los músculos dorsales sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 15,
        name: "Remo Inclinado con Mancuernas",
        position: [
          "Coloca una mancuerna en cada mano y ponte de pie con las piernas separadas a la altura de los hombros.",
          "Inclínate hacia adelante desde las caderas, manteniendo la espalda recta y las rodillas ligeramente flexionadas.",
          "Deja que los brazos cuelguen hacia abajo con las mancuernas, formando una línea perpendicular con el suelo.",
        ],
        execution: [
          "Tira de las mancuernas hacia arriba, llevando los codos hacia atrás y cerca del cuerpo.",
          "Contrae los músculos de la espalda en la parte superior del movimiento, llevando las mancuernas hacia los lados del torso.",
          "Baja las mancuernas de manera controlada hasta la posición inicial, extendiendo completamente los brazos.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita curvarla durante el ejercicio.",
          "Concéntrate en tirar con los músculos de la espalda y no solo con los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
        ],
        muscles: [
          {
            name: "Dorsal ancho",
            desc: "Principalmente trabaja la parte media e inferior de la espalda.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la elevación y retracción de los omóplatos.",
          },
          {
            name: "Romboides",
            desc: "Asiste en la retracción de los omóplatos.",
          },
          {
            name: "Deltoides posteriores",
            desc: "Trabajan en la extensión del hombro.",
          },
          {
            name: "Bíceps braquial",
            desc: "Principalmente trabaja en la flexión del codo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de la espalda",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona.",
          },
          {
            name: "Estabilidad y equilibrio",
            desc: "Al trabajar los músculos de la espalda y los bíceps, mejorarás tu estabilidad y equilibrio en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 16,
        name: "Pullover con Mancuerna",
        position: [
          "Colócate tumbado en un banco horizontal, con los pies firmemente apoyados en el suelo.",
          "Sujeta una mancuerna con ambas manos, extendiendo los brazos verticalmente sobre el pecho.",
          "Mantén los brazos ligeramente flexionados en los codos.",
        ],
        execution: [
          "Baja la mancuerna lentamente por detrás de la cabeza en un arco amplio, manteniendo una ligera flexión en los codos.",
          "Lleva la mancuerna lo más lejos posible sin comprometer la forma o causar molestias.",
          "Contrae los músculos del pecho y la espalda para devolver la mancuerna a la posición inicial, manteniendo el control durante todo el movimiento.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda baja y los glúteos en contacto con el banco para evitar arquear demasiado la espalda.",
          "Concéntrate en un movimiento controlado y evita usar el impulso.",
          "Respira de manera controlada, inhalando al bajar la mancuerna y exhalando al subirla.",
        ],
        muscles: [
          {
            name: "Dorsal ancho",
            desc: "Principalmente trabaja la parte media e inferior de la espalda.",
          },
          {
            name: "Pectoral mayor",
            desc: "Trabaja en la parte frontal del pecho.",
          },
          {
            name: "Serratos mayores",
            desc: "Ayudan en la estabilización de la caja torácica.",
          },
          {
            name: "Tríceps braquial",
            desc: "Ayuda en la extensión del codo.",
          },
          {
            name: "Intercostales",
            desc: "Se estiran y fortalecen durante el movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento del torso",
            desc: "Excelente para desarrollar la masa muscular y la fuerza del pecho y la espalda.",
          },
          {
            name: "Mejora de la flexibilidad",
            desc: "Estira los músculos intercostales y mejora la capacidad pulmonar.",
          },
          {
            name: "Apertura de la caja torácica",
            desc: "Ayuda a ensanchar el torso y mejorar la postura.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 17,
        name: "Pullover con Barra",
        position: [
          "Acuéstate en un banco plano, con los pies firmemente apoyados en el suelo.",
          "Sostén la barra con ambas manos, extendiendo los brazos verticalmente sobre el pecho.",
          "Mantén una ligera flexión en los codos.",
        ],
        execution: [
          "Baja la barra lentamente por detrás de la cabeza en un arco amplio, manteniendo una ligera flexión en los codos.",
          "Lleva la barra lo más lejos posible sin comprometer la forma o causar molestias.",
          "Contrae los músculos del pecho y la espalda para devolver la barra a la posición inicial, manteniendo el control durante todo el movimiento.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda baja y los glúteos en contacto con el banco para evitar arquear demasiado la espalda.",
          "Concéntrate en un movimiento controlado y evita usar el impulso.",
          "Respira de manera controlada, inhalando al bajar la barra y exhalando al subirla.",
        ],
        muscles: [
          {
            name: "Dorsal ancho",
            desc: "Principalmente trabaja la parte media e inferior de la espalda.",
          },
          {
            name: "Pectoral mayor",
            desc: "Trabaja en la parte frontal del pecho.",
          },
          {
            name: "Serratos mayores",
            desc: "Ayudan en la estabilización de la caja torácica.",
          },
          {
            name: "Tríceps braquial",
            desc: "Ayuda en la extensión del codo.",
          },
          {
            name: "Intercostales",
            desc: "Se estiran y fortalecen durante el movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento del torso",
            desc: "Excelente para desarrollar la masa muscular y la fuerza del pecho y la espalda.",
          },
          {
            name: "Mejora de la flexibilidad",
            desc: "Estira los músculos intercostales y mejora la capacidad pulmonar.",
          },
          {
            name: "Apertura de la caja torácica",
            desc: "Ayuda a ensanchar el torso y mejorar la postura.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 18,
        name: "Peso Muerto con Barra",
        position: [
          "Colócate de pie con los pies separados al ancho de las caderas, con la barra justo frente a ti.",
          "Agarra la barra con un agarre prono (palmas hacia abajo) o mixto (una palma hacia abajo y otra hacia arriba), con las manos separadas al ancho de los hombros.",
          "Mantén la espalda recta, el pecho hacia arriba y los hombros hacia atrás.",
          "Flexiona las rodillas y las caderas para bajar y agarrar la barra, asegurándote de que las tibias toquen la barra.",
        ],
        execution: [
          "Levanta la barra extendiendo las caderas y las rodillas al mismo tiempo, manteniendo la barra cerca del cuerpo.",
          "Mantén la espalda recta y los hombros hacia atrás durante todo el movimiento.",
          "Una vez que estés completamente erguido, aprieta los glúteos y los músculos de la espalda baja.",
          "Baja la barra de manera controlada, flexionando las caderas y las rodillas, y manteniendo la barra cerca del cuerpo.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita redondearla durante el levantamiento.",
          "Concéntrate en usar los músculos de las piernas y la espalda baja para levantar la barra, no solo los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira profundamente antes de levantar la barra y exhala al final del levantamiento.",
        ],
        muscles: [
          {
            name: "Glúteo mayor",
            desc: "Principalmente trabaja en la extensión de la cadera.",
          },
          {
            name: "Isquiotibiales",
            desc: "Trabajan en la flexión de la rodilla y extensión de la cadera.",
          },
          {
            name: "Cuádriceps",
            desc: "Ayudan en la extensión de la rodilla.",
          },
          {
            name: "Erectores de la columna",
            desc: "Mantienen la estabilidad de la espalda.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la estabilización de los hombros.",
          },
          {
            name: "Dorsal ancho",
            desc: "Asiste en la estabilización de la espalda.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento total del cuerpo",
            desc: "Involucra varios grupos musculares, promoviendo un equilibrio muscular y una mayor estabilidad.",
          },
          {
            name: "Incremento de la fuerza funcional",
            desc: "Mejora la capacidad para realizar actividades diarias que requieren levantar objetos pesados.",
          },
          {
            name: "Mejora de la postura y estabilidad de la espalda",
            desc: "Fortalece los músculos estabilizadores de la columna vertebral, reduciendo el riesgo de dolores y molestias en la espalda.",
          },
          {
            name: "Aumento de la densidad ósea",
            desc: "Ayuda a fortalecer los huesos, lo que es beneficioso para la salud ósea a largo plazo.",
          },
          {
            name: "Estimulación hormonal y quema de grasa",
            desc: "Promueve la liberación de hormonas anabólicas y ayuda en la pérdida de grasa.",
          },
        ],
      },
      {
        id: 19,
        name: "Peso Muerto Sumo con Barra",
        position: [
          "Coloca la barra en el suelo y párate con los pies más anchos que el ancho de los hombros, con los dedos de los pies ligeramente hacia afuera.",
          "Agarra la barra con las manos dentro de las piernas y las palmas hacia abajo.",
          "Mantén la espalda recta, el pecho hacia arriba y los hombros hacia atrás.",
          "Flexiona las rodillas y las caderas para bajar y agarrar la barra, asegurándote de que las tibias toquen la barra.",
        ],
        execution: [
          "Levanta la barra extendiendo las caderas y las rodillas al mismo tiempo, manteniendo la barra cerca del cuerpo.",
          "Mantén la espalda recta y los hombros hacia atrás durante todo el movimiento.",
          "Una vez que estés completamente erguido, aprieta los glúteos y los músculos de la espalda baja.",
          "Baja la barra de manera controlada, flexionando las caderas y las rodillas, y manteniendo la barra cerca del cuerpo.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita redondearla durante el levantamiento.",
          "Concéntrate en usar los músculos de las piernas y la espalda baja para levantar la barra, no solo los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira profundamente antes de levantar la barra y exhala al final del levantamiento.",
        ],
        muscles: [
          {
            name: "Glúteo mayor",
            desc: "Principalmente trabaja en la extensión de la cadera.",
          },
          {
            name: "Isquiotibiales",
            desc: "Trabajan en la flexión de la rodilla y extensión de la cadera.",
          },
          {
            name: "Cuádriceps",
            desc: "Ayudan en la extensión de la rodilla.",
          },
          {
            name: "Aductores",
            desc: "Trabajan en la estabilización de las piernas.",
          },
          {
            name: "Erectores de la columna",
            desc: "Mantienen la estabilidad de la espalda.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la estabilización de los hombros.",
          },
          {
            name: "Dorsal ancho",
            desc: "Asiste en la estabilización de la espalda.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento total del cuerpo",
            desc: "Involucra varios grupos musculares, promoviendo un equilibrio muscular y una mayor estabilidad.",
          },
          {
            name: "Incremento de la fuerza funcional",
            desc: "Mejora la capacidad para realizar actividades diarias que requieren levantar objetos pesados.",
          },
          {
            name: "Mejora de la postura y estabilidad de la espalda",
            desc: "Fortalece los músculos estabilizadores de la columna vertebral, reduciendo el riesgo de dolores y molestias en la espalda.",
          },
          {
            name: "Aumento de la densidad ósea",
            desc: "Ayuda a fortalecer los huesos, lo que es beneficioso para la salud ósea a largo plazo.",
          },
          {
            name: "Estimulación hormonal y quema de grasa",
            desc: "Promueve la liberación de hormonas anabólicas y ayuda en la pérdida de grasa.",
          },
        ],
      },
      {
        id: 20,
        name: "Peso Muerto con Barra Hexagonal",
        position: [
          "Colócate de pie dentro de la barra hexagonal, con los pies separados al ancho de las caderas y las puntas de los pies mirando hacia adelante.",
          "Agarra las asas de la barra con un agarre neutro (palmas enfrentadas).",
          "Mantén la espalda recta, el pecho hacia arriba y los hombros hacia atrás.",
          "Flexiona las rodillas y las caderas para bajar y agarrar las asas, asegurándote de que las tibias toquen la barra.",
        ],
        execution: [
          "Levanta la barra extendiendo las caderas y las rodillas al mismo tiempo, manteniendo la barra cerca del cuerpo.",
          "Mantén la espalda recta y los hombros hacia atrás durante todo el movimiento.",
          "Una vez que estés completamente erguido, aprieta los glúteos y los músculos de la espalda baja.",
          "Baja la barra de manera controlada, flexionando las caderas y las rodillas, y manteniendo la barra cerca del cuerpo.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita redondearla durante el levantamiento.",
          "Concéntrate en usar los músculos de las piernas y la espalda baja para levantar la barra, no solo los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira profundamente antes de levantar la barra y exhala al final del levantamiento.",
        ],
        muscles: [
          {
            name: "Glúteo mayor",
            desc: "Principalmente trabaja en la extensión de la cadera.",
          },
          {
            name: "Isquiotibiales",
            desc: "Trabajan en la flexión de la rodilla y extensión de la cadera.",
          },
          {
            name: "Cuádriceps",
            desc: "Ayudan en la extensión de la rodilla.",
          },
          {
            name: "Erectores de la columna",
            desc: "Mantienen la estabilidad de la espalda.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la estabilización de los hombros.",
          },
          {
            name: "Dorsal ancho",
            desc: "Asiste en la estabilización de la espalda.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento total del cuerpo",
            desc: "Involucra varios grupos musculares, promoviendo un equilibrio muscular y una mayor estabilidad.",
          },
          {
            name: "Incremento de la fuerza funcional",
            desc: "Mejora la capacidad para realizar actividades diarias que requieren levantar objetos pesados.",
          },
          {
            name: "Mejora de la postura y estabilidad de la espalda",
            desc: "Fortalece los músculos estabilizadores de la columna vertebral, reduciendo el riesgo de dolores y molestias en la espalda.",
          },
          {
            name: "Aumento de la densidad ósea",
            desc: "Ayuda a fortalecer los huesos, lo que es beneficioso para la salud ósea a largo plazo.",
          },
          {
            name: "Estimulación hormonal y quema de grasa",
            desc: "Promueve la liberación de hormonas anabólicas y ayuda en la pérdida de grasa.",
          },
        ],
      },
      {
        id: 21,
        name: "Peso Muerto con Mancuernas",
        position: [
          "Colócate de pie con los pies separados al ancho de las caderas, con una mancuerna en cada mano.",
          "Mantén las mancuernas frente a tus muslos, con las palmas hacia el cuerpo.",
          "Mantén la espalda recta, el pecho hacia arriba y los hombros hacia atrás.",
        ],
        execution: [
          "Flexiona las caderas y las rodillas para bajar las mancuernas hacia el suelo, manteniéndolas cerca del cuerpo.",
          "Mantén la espalda recta y los hombros hacia atrás durante todo el movimiento.",
          "Una vez que sientas un estiramiento en los isquiotibiales, invierte el movimiento extendiendo las caderas y las rodillas para volver a la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita redondearla durante el levantamiento.",
          "Concéntrate en usar los músculos de las piernas y la espalda baja para levantar las mancuernas, no solo los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira profundamente antes de bajar las mancuernas y exhala al final del levantamiento.",
        ],
        muscles: [
          {
            name: "Glúteo mayor",
            desc: "Principalmente trabaja en la extensión de la cadera.",
          },
          {
            name: "Isquiotibiales",
            desc: "Trabajan en la flexión de la rodilla y extensión de la cadera.",
          },
          {
            name: "Cuádriceps",
            desc: "Ayudan en la extensión de la rodilla.",
          },
          {
            name: "Erectores de la columna",
            desc: "Mantienen la estabilidad de la espalda.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la estabilización de los hombros.",
          },
          {
            name: "Dorsal ancho",
            desc: "Asiste en la estabilización de la espalda.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento total del cuerpo",
            desc: "Involucra varios grupos musculares, promoviendo un equilibrio muscular y una mayor estabilidad.",
          },
          {
            name: "Incremento de la fuerza funcional",
            desc: "Mejora la capacidad para realizar actividades diarias que requieren levantar objetos pesados.",
          },
          {
            name: "Mejora de la postura y estabilidad de la espalda",
            desc: "Fortalece los músculos estabilizadores de la columna vertebral, reduciendo el riesgo de dolores y molestias en la espalda.",
          },
          {
            name: "Aumento de la densidad ósea",
            desc: "Ayuda a fortalecer los huesos, lo que es beneficioso para la salud ósea a largo plazo.",
          },
          {
            name: "Estimulación hormonal y quema de grasa",
            desc: "Promueve la liberación de hormonas anabólicas y ayuda en la pérdida de grasa.",
          },
        ],
      },
      {
        id: 22,
        name: "Encogimiento de Hombros con Barra",
        position: [
          "Colócate de pie con los pies separados al ancho de los hombros.",
          "Sujeta la barra con un agarre prono (palmas hacia abajo) y las manos separadas al ancho de los hombros.",
          "Mantén los brazos extendidos y la barra frente a tus muslos.",
          "Mantén la espalda recta y los hombros hacia atrás.",
        ],
        execution: [
          "Eleva los hombros hacia arriba, intentando llevarlos lo más cerca posible de las orejas.",
          "Mantén los brazos rectos y evita doblar los codos.",
          "Contrae los trapecios en la parte superior del movimiento y mantén la contracción por un segundo.",
          "Baja los hombros de manera controlada hasta la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte hacia adelante o hacia atrás.",
          "Concéntrate en usar los músculos del trapecio para elevar los hombros, no solo los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al elevar los hombros e inhalando al bajarlos.",
        ],
        muscles: [
          {
            name: "Trapecio",
            desc: "Principalmente trabaja la parte superior de la espalda.",
          },
          {
            name: "Deltoides",
            desc: "Ayudan en la estabilización del movimiento.",
          },
          {
            name: "Romboides",
            desc: "Asisten en la retracción de los omóplatos.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los trapecios",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de la parte superior de la espalda.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del trapecio, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del trapecio sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 23,
        name: "Encogimiento de Hombros con Mancuernas",
        position: [
          "Colócate de pie con los pies separados al ancho de los hombros.",
          "Sujeta una mancuerna en cada mano con un agarre neutro (palmas enfrentadas).",
          "Mantén los brazos extendidos a los lados del cuerpo, con las mancuernas a la altura de los muslos.",
          "Mantén la espalda recta y los hombros hacia atrás.",
        ],
        execution: [
          "Eleva los hombros hacia arriba, intentando llevarlos lo más cerca posible de las orejas.",
          "Mantén los brazos rectos y evita doblar los codos.",
          "Contrae los trapecios en la parte superior del movimiento y mantén la contracción por un segundo.",
          "Baja los hombros de manera controlada hasta la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte hacia adelante o hacia atrás.",
          "Concéntrate en usar los músculos del trapecio para elevar los hombros, no solo los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al elevar los hombros e inhalando al bajarlos.",
        ],
        muscles: [
          {
            name: "Trapecio",
            desc: "Principalmente trabaja la parte superior de la espalda.",
          },
          {
            name: "Deltoides",
            desc: "Ayudan en la estabilización del movimiento.",
          },
          {
            name: "Romboides",
            desc: "Asisten en la retracción de los omóplatos.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los trapecios",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de la parte superior de la espalda.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del trapecio, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del trapecio sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
    ],
  },
  {
    id: "hombro",
    img: hombro,
    routine: [
      {
        id: 1,
        name: "Press de hombro con mancuernas",
        position: [
          "Siéntate en un banco con respaldo vertical, manteniendo la espalda recta y los pies firmemente apoyados en el suelo.",
          "Sujeta una mancuerna en cada mano, con las palmas mirando hacia adelante y las mancuernas a la altura de los hombros.",
          "Mantén los codos doblados y alineados con el torso.",
        ],
        execution: [
          "Empuja las mancuernas hacia arriba hasta que los brazos estén completamente extendidos por encima de la cabeza.",
          "Mantén los codos ligeramente flexionados en la parte superior del movimiento para evitar bloquear las articulaciones.",
          "Baja las mancuernas de manera controlada hasta la posición inicial, asegurándote de que los codos vuelvan a la altura de los hombros.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita arquearla durante el levantamiento.",
          "Concéntrate en usar los músculos del hombro para levantar las mancuernas, no solo los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar las mancuernas e inhalando al bajarlas.",
        ],
        muscles: [
          {
            name: "Deltoides",
            desc: "Principalmente trabaja las tres porciones del deltoides (anterior, media y posterior).",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la estabilización del movimiento.",
          },
          {
            name: "Tríceps Braquial",
            desc: "Asiste en la extensión del codo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los hombros",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y Control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 2,
        name: "Elevación lateral con mancuernas",
        position: [
          "Colócate de pie con los pies separados al ancho de los hombros.",
          "Sujeta una mancuerna en cada mano con un agarre neutro (palmas enfrentadas).",
          "Mantén los brazos extendidos a los lados del cuerpo, con una ligera flexión en los codos.",
          "Mantén la espalda recta y el abdomen contraído.",
        ],
        execution: [
          "Levanta las mancuernas hacia los lados hasta que los brazos estén paralelos al suelo.",
          "Mantén los codos ligeramente flexionados y las palmas mirando hacia abajo.",
          "Haz una pausa de 1-2 segundos en la parte superior del movimiento.",
          "Baja las mancuernas de manera controlada hasta la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte hacia adelante o hacia atrás.",
          "Concéntrate en usar los músculos del hombro para levantar las mancuernas, no solo los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar las mancuernas e inhalando al bajarlas.",
        ],
        muscles: [
          {
            name: "Deltoides laterales",
            desc: "Principalmente trabaja la parte media del hombro.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la estabilización del movimiento.",
          },
          {
            name: "Supraespinoso",
            desc: "Asiste en la elevación del brazo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los hombros",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 3,
        name: "Elevación frontal con mancuernas",
        position: [
          "Colócate de pie con los pies separados al ancho de los hombros.",
          "Sujeta una mancuerna en cada mano con un agarre prono (palmas hacia abajo).",
          "Mantén los brazos extendidos a los lados del cuerpo, con una ligera flexión en los codos.",
          "Mantén la espalda recta y el abdomen contraído.",
        ],
        execution: [
          "Levanta las mancuernas hacia adelante hasta que los brazos estén paralelos al suelo.",
          "Mantén los codos ligeramente flexionados y las palmas mirando hacia abajo.",
          "Haz una pausa de 1-2 segundos en la parte superior del movimiento.",
          "Baja las mancuernas de manera controlada hasta la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte hacia adelante o hacia atrás.",
          "Concéntrate en usar los músculos del hombro para levantar las mancuernas, no solo los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar las mancuernas e inhalando al bajarlas.",
        ],
        muscles: [
          {
            name: "Deltoides anteriores",
            desc: "Principalmente trabaja la parte frontal del hombro.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la estabilización del movimiento.",
          },
          {
            name: "Pectoral mayor",
            desc: "Asiste en la elevación del brazo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los hombros",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 4,
        name: "Cruces inversos en polea alta",
        position: [
          "Ajusta las poleas a una altura alta, por encima de tu cabeza.",
          "Sujeta las empuñaduras con un agarre prono (palmas hacia abajo) y da un paso hacia adelante para estabilizarte.",
          "Inclina ligeramente el torso hacia adelante desde las caderas, manteniendo la espalda recta.",
          "Mantén los brazos extendidos frente a ti con una ligera flexión en los codos.",
        ],
        execution: [
          "Abre los brazos hacia los lados en un arco amplio, llevando las empuñaduras hacia atrás y contrayendo los músculos de la parte superior de la espalda.",
          "Mantén los codos ligeramente flexionados y las palmas hacia abajo durante todo el movimiento.",
          "Haz una pausa de 1-2 segundos en la parte superior del movimiento.",
          "Regresa las empuñaduras de manera controlada a la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte hacia adelante o hacia atrás.",
          "Concéntrate en usar los músculos de la parte superior de la espalda y los deltoides posteriores para abrir los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al abrir los brazos e inhalando al cerrarlos.",
        ],
        muscles: [
          {
            name: "Deltoides posteriores",
            desc: "Principalmente trabaja la parte trasera del hombro.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la estabilización del movimiento.",
          },
          {
            name: "Romboides",
            desc: "Asisten en la retracción de los omóplatos.",
          },
          {
            name: "Infraespinoso y redondo menor",
            desc: "Ayudan en la rotación externa del hombro.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de la parte superior de la espalda",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de la parte superior de la espalda y los hombros.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos de la parte superior de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos de la parte superior de la espalda sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 5,
        name: "Press de hombros en máquina Smith",
        position: [
          "Ajusta un banco con respaldo vertical en la máquina Smith y siéntate con la espalda y la zona lumbar bien apoyadas en el respaldo.",
          "Coloca la barra a la altura de los ojos y carga el peso deseado.",
          "Sujeta la barra con un agarre prono (palmas hacia adelante) y las manos separadas al ancho de los hombros.",
          "Mantén los pies firmemente apoyados en el suelo para una mayor estabilidad.",
        ],
        execution: [
          "Desbloquea la barra y empújala hacia arriba hasta que los brazos estén completamente extendidos, sin bloquear los codos.",
          "Baja la barra de manera controlada hasta que llegue a la parte superior del pecho.",
          "Mantén los codos ligeramente flexionados y evita que se desvíen hacia los lados.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita arquearla durante el levantamiento.",
          "Concéntrate en usar los músculos del hombro para levantar la barra, no solo los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla.",
        ],
        muscles: [
          {
            name: "Deltoides",
            desc: "Principalmente trabaja las tres porciones del deltoides (anterior, media y posterior).",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la estabilización del movimiento.",
          },
          {
            name: "Tríceps braquial",
            desc: "Asiste en la extensión del codo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los hombros",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 6,
        name: "Remo alto con barra",
        position: [
          "Colócate de pie con los pies separados al ancho de los hombros.",
          "Sujeta la barra con un agarre prono (palmas hacia abajo) y las manos separadas al ancho de los hombros.",
          "Mantén la barra frente a tus muslos, con los brazos extendidos y los codos ligeramente flexionados.",
          "Mantén la espalda recta y el pecho hacia adelante.",
        ],
        execution: [
          "Eleva la barra verticalmente hacia arriba, llevando los codos hacia los lados y hacia arriba.",
          "Mantén la barra cerca del cuerpo mientras la subes hasta la altura del pecho.",
          "Contrae los músculos del trapecio en la parte superior del movimiento y mantén la contracción por un segundo.",
          "Baja la barra de manera controlada hasta la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte hacia adelante o hacia atrás.",
          "Concéntrate en usar los músculos del trapecio y los deltoides para elevar la barra, no solo los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al elevar la barra e inhalando al bajarla.",
        ],
        muscles: [
          {
            name: "Trapecio",
            desc: "Principalmente trabaja la parte superior de la espalda.",
          },
          {
            name: "Deltoides",
            desc: "Ayudan en la estabilización del movimiento.",
          },
          {
            name: "Romboides",
            desc: "Asisten en la retracción de los omóplatos.",
          },
          {
            name: "Bíceps braquial",
            desc: "Trabaja en la flexión del codo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de la parte superior de la espalda",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de la parte superior de la espalda y los hombros.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del trapecio, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del trapecio sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 7,
        name: "Elevaciones Posteriores para Hombros 'Pájaro'",
        position: [
          "Colócate de pie con los pies separados al ancho de los hombros.",
          "Sujeta una mancuerna en cada mano con un agarre neutro (palmas enfrentadas).",
          "Inclina el torso hacia adelante desde las caderas, manteniendo la espalda recta y las rodillas ligeramente flexionadas.",
          "Deja que los brazos cuelguen hacia abajo con las mancuernas, formando una línea perpendicular con el suelo.",
        ],
        execution: [
          "Levanta las mancuernas hacia los lados en un arco amplio, manteniendo una ligera flexión en los codos.",
          "Contrae los músculos de la parte superior de la espalda y los deltoides posteriores en la parte superior del movimiento.",
          "Haz una pausa de 1-2 segundos en la parte superior del movimiento.",
          "Baja las mancuernas de manera controlada hasta la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte hacia adelante o hacia atrás.",
          "Concéntrate en usar los músculos del hombro y la parte superior de la espalda para levantar las mancuernas.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar las mancuernas e inhalando al bajarlas.",
        ],
        muscles: [
          {
            name: "Deltoides posteriores",
            desc: "Principalmente trabaja la parte trasera del hombro.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la estabilización del movimiento.",
          },
          {
            name: "Romboides",
            desc: "Asisten en la retracción de los omóplatos.",
          },
          {
            name: "Infraespinoso y redondo menor",
            desc: "Ayudan en la rotación externa del hombro.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de la parte superior de la espalda",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de la parte superior de la espalda y los hombros.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos de la parte superior de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos de la parte superior de la espalda sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 8,
        name: "Elevación Lateral con Cable a una Mano",
        position: [
          "Colócate de pie junto a una polea baja, con los pies separados al ancho de los hombros.",
          "Sujeta el asa del cable con una mano, manteniendo el brazo extendido y la palma hacia el cuerpo.",
          "Mantén una ligera flexión en el codo y el torso erguido.",
        ],
        execution: [
          "Levanta el asa lateralmente en un arco amplio hasta que el brazo esté paralelo al suelo.",
          "Mantén el codo ligeramente flexionado y la palma hacia abajo durante todo el movimiento.",
          "Haz una pausa de 1-2 segundos en la parte superior del movimiento.",
          "Baja el asa de manera controlada hasta la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte hacia adelante o hacia atrás.",
          "Concéntrate en usar los músculos del hombro para levantar el asa, no solo los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar el asa e inhalando al bajarla.",
        ],
        muscles: [
          {
            name: "Deltoides laterales",
            desc: "Principalmente trabaja la parte media del hombro.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la estabilización del movimiento.",
          },
          {
            name: "Supraespinoso",
            desc: "Asiste en la elevación del brazo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los hombros",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 9,
        name: "Press Militar con Mancuernas",
        position: [
          "Siéntate en un banco con respaldo vertical, manteniendo la espalda recta y los pies firmemente apoyados en el suelo.",
          "Sujeta una mancuerna en cada mano, con las palmas mirando hacia adelante y las mancuernas a la altura de los hombros.",
          "Mantén los codos doblados y alineados con el torso.",
        ],
        execution: [
          "Empuja las mancuernas hacia arriba hasta que los brazos estén completamente extendidos por encima de la cabeza.",
          "Mantén los codos ligeramente flexionados en la parte superior del movimiento para evitar bloquear las articulaciones.",
          "Baja las mancuernas de manera controlada hasta la posición inicial, asegurándote de que los codos vuelvan a la altura de los hombros.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita arquearla durante el levantamiento.",
          "Concéntrate en usar los músculos del hombro para levantar las mancuernas, no solo los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar las mancuernas e inhalando al bajarlas.",
        ],
        muscles: [
          {
            name: "Deltoides",
            desc: "Principalmente trabaja las tres porciones del deltoides (anterior, media y posterior).",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la estabilización del movimiento.",
          },
          {
            name: "Tríceps braquial",
            desc: "Asiste en la extensión del codo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los hombros",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 10,
        name: "Press Militar",
        position: [
          "Colócate de pie con los pies separados al ancho de los hombros.",
          "Sujeta una barra con un agarre prono (palmas hacia abajo) y las manos separadas al ancho de los hombros.",
          "Mantén la barra a la altura de los hombros, con los codos ligeramente hacia adelante y el torso erguido.",
        ],
        execution: [
          "Empuja la barra hacia arriba hasta que los brazos estén completamente extendidos por encima de la cabeza.",
          "Mantén los codos ligeramente flexionados en la parte superior del movimiento para evitar bloquear las articulaciones.",
          "Baja la barra de manera controlada hasta la posición inicial, asegurándote de que los codos vuelvan a la altura de los hombros.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita arquearla durante el levantamiento.",
          "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
          "Concéntrate en usar los músculos del hombro para levantar la barra, no solo los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla.",
        ],
        muscles: [
          {
            name: "Deltoides",
            desc: "Principalmente trabaja las tres porciones del deltoides (anterior, media y posterior).",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la estabilización del movimiento.",
          },
          {
            name: "Tríceps braquial",
            desc: "Asiste en la extensión del codo.",
          },
          {
            name: "Pectoral superior",
            desc: "Ayuda en la estabilización y fuerza del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los hombros",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 11,
        name: "Elevaciones Frontales con Cable a una Mano",
        position: [
          "Colócate de pie junto a una polea baja, con los pies separados al ancho de los hombros.",
          "Sujeta el asa del cable con una mano, manteniendo el brazo extendido y la palma hacia el cuerpo.",
          "Mantén una ligera flexión en el codo y el torso erguido.",
        ],
        execution: [
          "Levanta el asa hacia adelante en un arco amplio hasta que el brazo esté paralelo al suelo.",
          "Mantén el codo ligeramente flexionado y la palma hacia abajo durante todo el movimiento.",
          "Haz una pausa de 1-2 segundos en la parte superior del movimiento.",
          "Baja el asa de manera controlada hasta la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte hacia adelante o hacia atrás.",
          "Concéntrate en usar los músculos del hombro para levantar el asa, no solo los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar el asa e inhalando al bajarla.",
        ],
        muscles: [
          {
            name: "Deltoides anteriores",
            desc: "Principalmente trabaja la parte frontal del hombro.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la estabilización del movimiento.",
          },
          {
            name: "Pectoral mayor",
            desc: "Asiste en la elevación del brazo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los hombros",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 12,
        name: "Elevaciones Frontales con Barra",
        position: [
          "Colócate de pie con los pies separados al ancho de los hombros.",
          "Sujeta la barra con un agarre prono (palmas hacia abajo) y las manos separadas al ancho de los hombros.",
          "Mantén la barra frente a tus muslos, con los brazos extendidos y los codos ligeramente flexionados.",
          "Mantén la espalda recta y el pecho hacia adelante.",
        ],
        execution: [
          "Levanta la barra hacia adelante en un arco amplio hasta que los brazos estén paralelos al suelo.",
          "Mantén los codos ligeramente flexionados y las palmas hacia abajo durante todo el movimiento.",
          "Haz una pausa de 1-2 segundos en la parte superior del movimiento.",
          "Baja la barra de manera controlada hasta la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte hacia adelante o hacia atrás.",
          "Concéntrate en usar los músculos del hombro para levantar la barra, no solo los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla.",
        ],
        muscles: [
          {
            name: "Deltoides anteriores",
            desc: "Principalmente trabaja la parte frontal del hombro.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la estabilización del movimiento.",
          },
          {
            name: "Pectoral mayor",
            desc: "Asiste en la elevación del brazo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los hombros",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 13,
        name: "Press Militar Sentado con Barra",
        position: [
          "Siéntate en un banco con respaldo vertical, manteniendo la espalda recta y los pies firmemente apoyados en el suelo.",
          "Sujeta la barra con un agarre prono (palmas hacia abajo) y las manos separadas al ancho de los hombros.",
          "Mantén la barra a la altura de los hombros, con los codos ligeramente hacia adelante y el torso erguido.",
        ],
        execution: [
          "Empuja la barra hacia arriba hasta que los brazos estén completamente extendidos por encima de la cabeza.",
          "Mantén los codos ligeramente flexionados en la parte superior del movimiento para evitar bloquear las articulaciones.",
          "Baja la barra de manera controlada hasta la posición inicial, asegurándote de que los codos vuelvan a la altura de los hombros.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita arquearla durante el levantamiento.",
          "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
          "Concéntrate en usar los músculos del hombro para levantar la barra, no solo los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla.",
        ],
        muscles: [
          {
            name: "Deltoides",
            desc: "Principalmente trabaja las tres porciones del deltoides (anterior, media y posterior).",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la estabilización del movimiento.",
          },
          {
            name: "Tríceps braquial",
            desc: "Asiste en la extensión del codo.",
          },
          {
            name: "Pectoral superior",
            desc: "Ayuda en la estabilización y fuerza del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los hombros",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 14,
        name: "Press Tras Nuca Sentado",
        position: [
          "Siéntate en un banco con respaldo vertical, manteniendo la espalda recta y los pies firmemente apoyados en el suelo.",
          "Sujeta la barra con un agarre prono (palmas hacia abajo) y las manos separadas al ancho de los hombros.",
          "Mantén la barra detrás de la cabeza, a la altura de la nuca.",
        ],
        execution: [
          "Empuja la barra hacia arriba hasta que los brazos estén completamente extendidos por encima de la cabeza.",
          "Mantén los codos ligeramente flexionados en la parte superior del movimiento para evitar bloquear las articulaciones.",
          "Baja la barra de manera controlada hasta la posición inicial, asegurándote de que los codos vuelvan a la altura de la nuca.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita arquearla durante el levantamiento.",
          "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
          "Concéntrate en usar los músculos del hombro para levantar la barra, no solo los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla.",
        ],
        muscles: [
          {
            name: "Deltoides",
            desc: "Principalmente trabaja las tres porciones del deltoides (anterior, media y posterior).",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la estabilización del movimiento.",
          },
          {
            name: "Tríceps braquial",
            desc: "Asiste en la extensión del codo.",
          },
          {
            name: "Pectoral superior",
            desc: "Ayuda en la estabilización y fuerza del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los hombros",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "La posición de la barra detrás de la cabeza puede ejercer presión en las vértebras cervicales y los hombros, aumentando el riesgo de lesiones si no se ejecuta correctamente.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el press militar con barra o mancuernas, que trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 15,
        name: "Press Militar de Pie",
        position: [
          "Colócate de pie con los pies separados al ancho de los hombros.",
          "Sujeta una barra con un agarre prono (palmas hacia abajo) y las manos separadas al ancho de los hombros.",
          "Mantén la barra a la altura de los hombros, con los codos ligeramente hacia adelante y el torso erguido.",
        ],
        execution: [
          "Empuja la barra hacia arriba hasta que los brazos estén completamente extendidos por encima de la cabeza.",
          "Mantén los codos ligeramente flexionados en la parte superior del movimiento para evitar bloquear las articulaciones.",
          "Baja la barra de manera controlada hasta la posición inicial, asegurándote de que los codos vuelvan a la altura de los hombros.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita arquearla durante el levantamiento.",
          "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
          "Concéntrate en usar los músculos del hombro para levantar la barra, no solo los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla.",
        ],
        muscles: [
          {
            name: "Deltoides",
            desc: "Principalmente trabaja las tres porciones del deltoides (anterior, media y posterior).",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la estabilización del movimiento.",
          },
          {
            name: "Tríceps braquial",
            desc: "Asiste en la extensión del codo.",
          },
          {
            name: "Pectoral superior",
            desc: "Ayuda en la estabilización y fuerza del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los hombros",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
      },
      {
        id: 16,
        name: "Press Militar de Pie Tras Nuca",
        position: [
          "Colócate de pie con los pies separados al ancho de los hombros.",
          "Sujeta una barra con un agarre prono (palmas hacia abajo) y las manos separadas un poco más que el ancho de los hombros.",
          "Mantén la barra detrás de la cabeza, a la altura de la nuca.",
          "Mantén la espalda recta y el pecho hacia adelante.",
        ],
        execution: [
          "Empuja la barra hacia arriba hasta que los brazos estén completamente extendidos por encima de la cabeza.",
          "Mantén los codos ligeramente flexionados en la parte superior del movimiento para evitar bloquear las articulaciones.",
          "Baja la barra de manera controlada hasta la posición inicial, asegurándote de que los codos vuelvan a la altura de la nuca.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita arquearla durante el levantamiento.",
          "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
          "Concéntrate en usar los músculos del hombro para levantar la barra, no solo los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla.",
        ],
        muscles: [
          {
            name: "Deltoides",
            desc: "Principalmente trabaja las tres porciones del deltoides (anterior, media y posterior).",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la estabilización del movimiento.",
          },
          {
            name: "Tríceps braquial",
            desc: "Asiste en la extensión del codo.",
          },
          {
            name: "Pectoral superior",
            desc: "Ayuda en la estabilización y fuerza del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los hombros",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "La posición de la barra detrás de la cabeza puede ejercer presión en las vértebras cervicales y los hombros, aumentando el riesgo de lesiones si no se ejecuta correctamente.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el press militar con barra o mancuernas, que trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 17,
        name: "Elevación Frontal con Mancuernas Alternas (Agarre Neutro)",
        position: [
          "Colócate de pie con los pies separados al ancho de los hombros.",
          "Sujeta una mancuerna en cada mano con un agarre neutro (palmas enfrentadas).",
          "Mantén los brazos extendidos a lo largo del cuerpo, con los codos ligeramente flexionados.",
          "Mantén la espalda recta y el pecho hacia adelante.",
        ],
        execution: [
          "Levanta una mancuerna hacia adelante en un movimiento de arco hasta que el brazo esté paralelo al suelo.",
          "Mantén la contracción en el deltoides anterior durante un momento.",
          "Baja la mancuerna de manera controlada hasta la posición inicial.",
          "Repite el movimiento con el otro brazo.",
          "Alterna los brazos para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita arquearla durante el levantamiento.",
          "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
          "Concéntrate en usar los músculos del hombro para levantar la mancuerna, no solo los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar la mancuerna e inhalando al bajarla.",
        ],
        muscles: [
          {
            name: "Deltoides anterior",
            desc: "Principalmente trabaja la porción anterior del deltoides.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la estabilización del movimiento.",
          },
          {
            name: "Tríceps braquial",
            desc: "Asiste en la extensión del codo.",
          },
          {
            name: "Pectoral superior",
            desc: "Ayuda en la estabilización y fuerza del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los hombros",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los hombros y la espalda.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como la elevación frontal con barra o con discos, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 18,
        name: "Elevación Frontal con un Brazo en Polea Baja (Agarre Neutro)",
        position: [
          "Colócate de pie de espaldas a la polea baja.",
          "Sujeta el mango de la polea con una mano en agarre neutro (palma mirando hacia el cuerpo).",
          "Mantén el brazo extendido a lo largo del cuerpo, con el codo ligeramente flexionado.",
          "Mantén la espalda recta y el pecho hacia adelante.",
        ],
        execution: [
          "Levanta el mango hacia adelante en un movimiento de arco hasta que el brazo esté paralelo al suelo.",
          "Mantén la contracción en el deltoides anterior durante un momento.",
          "Baja el mango de manera controlada hasta la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones.",
          "Cambia de brazo y repite el ejercicio.",
        ],
        advices: [
          "Mantén la espalda recta y evita arquearla durante el levantamiento.",
          "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
          "Concéntrate en usar los músculos del hombro para levantar el mango, no solo los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar el mango e inhalando al bajarlo.",
        ],
        muscles: [
          {
            name: "Deltoides anterior",
            desc: "Principalmente trabaja la porción anterior del deltoides.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la estabilización del movimiento.",
          },
          {
            name: "Tríceps braquial",
            desc: "Asiste en la extensión del codo.",
          },
          {
            name: "Pectoral superior",
            desc: "Ayuda en la estabilización y fuerza del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los hombros",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los hombros y la espalda.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como la elevación frontal con mancuernas o con discos, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 19,
        name: "Elevación Frontal con Mancuerna a Dos Manos",
        position: [
          "Colócate de pie con los pies separados al ancho de los hombros.",
          "Sujeta una mancuerna con ambas manos en agarre neutro (palmas enfrentadas).",
          "Mantén los brazos extendidos a lo largo del cuerpo, con los codos ligeramente flexionados.",
          "Mantén la espalda recta y el pecho hacia adelante.",
        ],
        execution: [
          "Levanta la mancuerna hacia adelante en un movimiento de arco hasta que los brazos estén paralelos al suelo.",
          "Mantén los codos ligeramente flexionados en la parte superior del movimiento para evitar bloquear las articulaciones.",
          "Baja la mancuerna de manera controlada hasta la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita arquearla durante el levantamiento.",
          "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
          "Concéntrate en usar los músculos del hombro para levantar la mancuerna, no solo los brazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar la mancuerna e inhalando al bajarla.",
        ],
        muscles: [
          {
            name: "Deltoides",
            desc: "Principalmente trabaja la porción anterior del deltoides.",
          },
          {
            name: "Trapecio",
            desc: "Ayuda en la estabilización del movimiento.",
          },
          {
            name: "Tríceps braquial",
            desc: "Asiste en la extensión del codo.",
          },
          {
            name: "Pectoral superior",
            desc: "Ayuda en la estabilización y fuerza del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los hombros",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los hombros y la espalda.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como la elevación frontal con polea baja o con discos, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
    ],
  },
  {
    id: "biceps",
    img: biceps,
    routine: [
      {
        id: 1,
        name: "Curl con Barra",
        position: [
          "Colócate de pie con los pies separados al ancho de los hombros.",
          "Sujeta una barra con un agarre supino (palmas hacia arriba) y las manos separadas al ancho de los hombros.",
          "Mantén los brazos extendidos hacia abajo, con los codos ligeramente flexionados.",
          "Mantén la espalda recta y el pecho hacia adelante.",
        ],
        execution: [
          "Flexiona los codos y levanta la barra hacia los hombros.",
          "Mantén los codos pegados al cuerpo y no los muevas durante el movimiento.",
          "Haz una pausa en la parte superior del movimiento, apretando los bíceps.",
          "Baja la barra de manera controlada hasta la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte durante el levantamiento.",
          "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
          "Concéntrate en usar los músculos del bíceps para levantar la barra, no solo los antebrazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla.",
        ],
        muscles: [
          {
            name: "Bíceps braquial",
            desc: "Principalmente trabaja la cabeza corta y larga del bíceps.",
          },
          {
            name: "Braquial",
            desc: "Ayuda en la flexión del codo.",
          },
          {
            name: "Braquiorradial",
            desc: "Asiste en la flexión del codo.",
          },
          {
            name: "Deltoides anterior",
            desc: "Ayuda en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los bíceps",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los bíceps.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del brazo, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del bíceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y la espalda.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el curl con mancuernas o con barra Z, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 2,
        name: "Curl Alterno con Mancuerna",
        position: [
          "Colócate de pie con los pies separados al ancho de los hombros.",
          "Sujeta una mancuerna en cada mano con un agarre supino (palmas hacia arriba).",
          "Mantén los brazos extendidos hacia abajo, con los codos ligeramente flexionados.",
          "Mantén la espalda recta y el pecho hacia adelante.",
        ],
        execution: [
          "Flexiona el codo de un brazo y levanta la mancuerna hacia el hombro, girando la palma hacia arriba durante el movimiento.",
          "Mantén el codo pegado al cuerpo y no lo muevas durante el levantamiento.",
          "Haz una pausa en la parte superior del movimiento, apretando el bíceps.",
          "Baja la mancuerna de manera controlada hasta la posición inicial.",
          "Repite el movimiento con el otro brazo.",
          "Alterna los brazos para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte durante el levantamiento.",
          "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
          "Concéntrate en usar los músculos del bíceps para levantar la mancuerna, no solo los antebrazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar la mancuerna e inhalando al bajarla.",
        ],
        muscles: [
          {
            name: "Bíceps braquial",
            desc: "Principalmente trabaja la cabeza corta y larga del bíceps.",
          },
          {
            name: "Braquial",
            desc: "Ayuda en la flexión del codo.",
          },
          {
            name: "Braquiorradial",
            desc: "Asiste en la flexión del codo.",
          },
          {
            name: "Deltoides anterior",
            desc: "Ayuda en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los bíceps",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los bíceps.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del brazo, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del bíceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y la espalda.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el curl con barra o con barra Z, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 3,
        name: "Curl con Cuerda en Polea Baja",
        position: [
          "Colócate de pie frente a la polea baja.",
          "Sujeta la cuerda con ambas manos en agarre neutro (palmas enfrentadas).",
          "Mantén los brazos extendidos hacia abajo, con los codos ligeramente flexionados.",
          "Mantén la espalda recta y el pecho hacia adelante.",
        ],
        execution: [
          "Flexiona los codos y levanta la cuerda hacia los hombros, separando ligeramente las manos al subir.",
          "Mantén los codos pegados al cuerpo y no los muevas durante el levantamiento.",
          "Haz una pausa en la parte superior del movimiento, apretando los bíceps.",
          "Baja la cuerda de manera controlada hasta la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte durante el levantamiento.",
          "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
          "Concéntrate en usar los músculos del bíceps para levantar la cuerda, no solo los antebrazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar la cuerda e inhalando al bajarla.",
        ],
        muscles: [
          {
            name: "Bíceps braquial",
            desc: "Principalmente trabaja la cabeza corta y larga del bíceps.",
          },
          {
            name: "Braquial",
            desc: "Ayuda en la flexión del codo.",
          },
          {
            name: "Braquiorradial",
            desc: "Asiste en la flexión del codo.",
          },
          {
            name: "Deltoides anterior",
            desc: "Ayuda en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los bíceps",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los bíceps.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del brazo, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del bíceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y la espalda.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el curl con mancuernas o con barra Z, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 4,
        name: "Curl con Barra EZ",
        position: [
          "Colócate de pie con los pies separados al ancho de los hombros.",
          "Sujeta la barra EZ con un agarre supino (palmas hacia arriba) y las manos en las curvas de la barra.",
          "Mantén los brazos extendidos hacia abajo, con los codos ligeramente flexionados.",
          "Mantén la espalda recta y el pecho hacia adelante.",
        ],
        execution: [
          "Flexiona los codos y levanta la barra hacia los hombros.",
          "Mantén los codos pegados al cuerpo y no los muevas durante el levantamiento.",
          "Haz una pausa en la parte superior del movimiento, apretando los bíceps.",
          "Baja la barra de manera controlada hasta la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte durante el levantamiento.",
          "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
          "Concéntrate en usar los músculos del bíceps para levantar la barra, no solo los antebrazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla.",
        ],
        muscles: [
          {
            name: "Bíceps braquial",
            desc: "Principalmente trabaja la cabeza corta y larga del bíceps.",
          },
          {
            name: "Braquial",
            desc: "Ayuda en la flexión del codo.",
          },
          {
            name: "Braquiorradial",
            desc: "Asiste en la flexión del codo.",
          },
          {
            name: "Deltoides anterior",
            desc: "Ayuda en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los bíceps",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los bíceps.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del brazo, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del bíceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y la espalda.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el curl con mancuernas o con barra recta, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 5,
        name: "Curl de Predicador con Barra EZ",
        position: [
          "Colócate de pie o sentado en un banco predicador ajustado a la altura adecuada.",
          "Sujeta la barra EZ con un agarre supino (palmas hacia arriba) y las manos en las curvas de la barra.",
          "Apoya la parte superior de los brazos en el banco predicador, asegurándote de que los codos estén ligeramente flexionados.",
          "Mantén la espalda recta y el pecho hacia adelante.",
        ],
        execution: [
          "Flexiona los codos y levanta la barra hacia los hombros.",
          "Mantén los codos pegados al banco y no los muevas durante el levantamiento.",
          "Haz una pausa en la parte superior del movimiento, apretando los bíceps.",
          "Baja la barra de manera controlada hasta la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte durante el levantamiento.",
          "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
          "Concéntrate en usar los músculos del bíceps para levantar la barra, no solo los antebrazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla.",
        ],
        muscles: [
          {
            name: "Bíceps braquial",
            desc: "Principalmente trabaja la cabeza corta y larga del bíceps.",
          },
          {
            name: "Braquial",
            desc: "Ayuda en la flexión del codo.",
          },
          {
            name: "Braquiorradial",
            desc: "Asiste en la flexión del codo.",
          },
          {
            name: "Deltoides anterior",
            desc: "Ayuda en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los bíceps",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los bíceps.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del brazo, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del bíceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y la espalda.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el curl con mancuernas o con barra recta, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 6,
        name: "Curl Alterno de Martillo Con Mancuernas",
        position: [
          "Colócate de pie con los pies separados al ancho de los hombros.",
          "Sujeta una mancuerna en cada mano con un agarre neutro (palmas enfrentadas).",
          "Mantén los brazos extendidos a lo largo del cuerpo, con los codos ligeramente flexionados.",
          "Mantén la espalda recta y el pecho hacia adelante.",
        ],
        execution: [
          "Flexiona el codo de un brazo y levanta la mancuerna hacia el hombro, manteniendo la palma hacia el cuerpo durante todo el movimiento.",
          "Mantén el codo pegado al cuerpo y no lo muevas durante el levantamiento.",
          "Haz una pausa en la parte superior del movimiento, apretando el bíceps.",
          "Baja la mancuerna de manera controlada hasta la posición inicial.",
          "Repite el movimiento con el otro brazo.",
          "Alterna los brazos para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte durante el levantamiento.",
          "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
          "Concéntrate en usar los músculos del bíceps y del antebrazo para levantar la mancuerna, no solo los antebrazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar la mancuerna e inhalando al bajarla.",
        ],
        muscles: [
          {
            name: "Bíceps braquial",
            desc: "Principalmente trabaja la cabeza corta y larga del bíceps.",
          },
          {
            name: "Braquial",
            desc: "Ayuda en la flexión del codo.",
          },
          {
            name: "Braquiorradial",
            desc: "Trabaja intensamente debido al agarre neutro.",
          },
          {
            name: "Deltoides anterior",
            desc: "Ayuda en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los bíceps y antebrazos",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los bíceps y antebrazos.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del brazo, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del bíceps y antebrazos sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y la espalda.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el curl con barra o con barra Z, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 7,
        name: "Curl Inclinado con Mancuernas",
        position: [
          "Ajusta un banco a un ángulo de aproximadamente 45 grados.",
          "Siéntate en el banco con los pies firmemente apoyados en el suelo.",
          "Sostén una mancuerna en cada mano con un agarre supino (palmas hacia arriba).",
          "Mantén los brazos extendidos hacia abajo, con los codos ligeramente flexionados.",
          "Asegúrate de que la espalda esté bien apoyada en el respaldo del banco y el pecho hacia adelante.",
        ],
        execution: [
          "Flexiona los codos y levanta las mancuernas hacia los hombros, manteniendo las palmas hacia arriba.",
          "Mantén los codos pegados al cuerpo y no los muevas durante el levantamiento.",
          "Haz una pausa en la parte superior del movimiento, apretando los bíceps.",
          "Baja las mancuernas de manera controlada hasta la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte durante el levantamiento.",
          "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
          "Concéntrate en usar los músculos del bíceps para levantar las mancuernas, no solo los antebrazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar las mancuernas e inhalando al bajarlas.",
        ],
        muscles: [
          {
            name: "Bíceps braquial",
            desc: "Principalmente trabaja la cabeza larga del bíceps.",
          },
          {
            name: "Braquial",
            desc: "Ayuda en la flexión del codo.",
          },
          {
            name: "Braquiorradial",
            desc: "Asiste en la flexión del codo.",
          },
          {
            name: "Deltoides anterior",
            desc: "Ayuda en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los bíceps",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los bíceps.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del brazo, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del bíceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y la espalda.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el curl con barra EZ o con barra recta, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 8,
        name: "Curl Concentrado con Mancuerna",
        position: [
          "Siéntate en un banco con los pies firmemente apoyados en el suelo.",
          "Sostén una mancuerna con una mano y coloca el codo del mismo brazo en el interior del muslo.",
          "Mantén el brazo extendido hacia abajo, con la palma de la mano mirando hacia arriba (agarre supino).",
          "Mantén la espalda recta y el pecho hacia adelante.",
        ],
        execution: [
          "Flexiona el codo y levanta la mancuerna hacia el hombro, manteniendo el codo apoyado en el muslo.",
          "Haz una pausa en la parte superior del movimiento, apretando los bíceps.",
          "Baja la mancuerna de manera controlada hasta la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones y luego cambia de brazo.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte durante el levantamiento.",
          "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
          "Concéntrate en usar los músculos del bíceps para levantar la mancuerna, no solo los antebrazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar la mancuerna e inhalando al bajarla.",
        ],
        muscles: [
          {
            name: "Bíceps braquial",
            desc: "Principalmente trabaja la cabeza corta y larga del bíceps.",
          },
          {
            name: "Braquial",
            desc: "Ayuda en la flexión del codo.",
          },
          {
            name: "Braquiorradial",
            desc: "Asiste en la flexión del codo.",
          },
          {
            name: "Deltoides anterior",
            desc: "Ayuda en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los bíceps",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los bíceps.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del brazo, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del bíceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y la espalda.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el curl con barra EZ o con barra recta, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 9,
        name: "Curl de Cable en Polea Baja a Una Mano",
        position: [
          "Colócate de pie frente a la polea baja, con los pies separados al ancho de los hombros.",
          "Ajusta la polea a la altura más baja y sujeta la empuñadura con una mano, con un agarre supino (palma hacia arriba).",
          "Mantén el brazo extendido hacia abajo, con el codo ligeramente flexionado.",
          "Mantén la espalda recta y el pecho hacia adelante.",
        ],
        execution: [
          "Flexiona el codo y levanta la empuñadura hacia el hombro, manteniendo el codo pegado al cuerpo.",
          "Haz una pausa en la parte superior del movimiento, apretando los bíceps.",
          "Baja la empuñadura de manera controlada hasta la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones y luego cambia de brazo.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte durante el levantamiento.",
          "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
          "Concéntrate en usar los músculos del bíceps para levantar la empuñadura, no solo los antebrazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar la empuñadura e inhalando al bajarla.",
        ],
        muscles: [
          {
            name: "Bíceps braquial",
            desc: "Principalmente trabaja la cabeza corta y larga del bíceps.",
          },
          {
            name: "Braquial",
            desc: "Ayuda en la flexión del codo.",
          },
          {
            name: "Braquiorradial",
            desc: "Asiste en la flexión del codo.",
          },
          {
            name: "Deltoides anterior",
            desc: "Ayuda en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los bíceps",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los bíceps.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del brazo, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del bíceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y la espalda.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el curl con barra EZ o con barra recta, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 10,
        name: "Curl de Cable con Barra Recta en Polea Baja",
        position: [
          "Colócate de pie frente a la máquina de polea baja, con los pies separados al ancho de los hombros.",
          "Ajusta la polea a la altura más baja y sujeta la barra recta con un agarre supino (palmas hacia arriba).",
          "Mantén los brazos extendidos hacia abajo, con los codos ligeramente flexionados.",
          "Mantén la espalda recta y el pecho hacia adelante.",
        ],
        execution: [
          "Flexiona los codos y levanta la barra hacia los hombros, manteniendo los codos pegados al cuerpo.",
          "Haz una pausa en la parte superior del movimiento, apretando los bíceps.",
          "Baja la barra de manera controlada hasta la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte durante el levantamiento.",
          "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
          "Concéntrate en usar los músculos del bíceps para levantar la barra, no solo los antebrazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla.",
        ],
        muscles: [
          {
            name: "Bíceps braquial",
            desc: "Principalmente trabaja la cabeza corta y larga del bíceps.",
          },
          {
            name: "Braquial",
            desc: "Ayuda en la flexión del codo.",
          },
          {
            name: "Braquiorradial",
            desc: "Asiste en la flexión del codo.",
          },
          {
            name: "Deltoides anterior",
            desc: "Ayuda en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los bíceps",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los bíceps.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del brazo, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del bíceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y la espalda.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el curl con barra EZ o con mancuernas, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 11,
        name: "Curl de Cable en Polea Alta de Pie",
        position: [
          "Colócate de pie frente a la máquina de polea alta, con los pies separados al ancho de los hombros.",
          "Ajusta la polea a la altura más alta y sujeta la barra o las asas con un agarre supino (palmas hacia arriba).",
          "Mantén los brazos extendidos hacia adelante y ligeramente hacia abajo, con los codos ligeramente flexionados.",
          "Mantén la espalda recta y el pecho hacia adelante.",
        ],
        execution: [
          "Flexiona los codos y tira de la barra o las asas hacia la cabeza, manteniendo los codos pegados al cuerpo.",
          "Haz una pausa en la parte superior del movimiento, apretando los bíceps.",
          "Baja la barra o las asas de manera controlada hasta la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte durante el levantamiento.",
          "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
          "Concéntrate en usar los músculos del bíceps para levantar la barra o las asas, no solo los antebrazos.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar la barra o las asas e inhalando al bajarlas.",
        ],
        muscles: [
          {
            name: "Bíceps braquial",
            desc: "Principalmente trabaja la cabeza corta y larga del bíceps.",
          },
          {
            name: "Braquial",
            desc: "Ayuda en la flexión del codo.",
          },
          {
            name: "Braquiorradial",
            desc: "Asiste en la flexión del codo.",
          },
          {
            name: "Deltoides anterior",
            desc: "Ayuda en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los bíceps",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los bíceps.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del brazo, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del bíceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y la espalda.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el curl con barra EZ o con mancuernas, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 12,
        name: "Curl de Muñeca con Barra Sentado",
        position: [
          "Siéntate en el extremo de un banco plano con los pies firmemente apoyados en el suelo.",
          "Sostén una barra con un agarre supino (palmas hacia arriba).",
          "Apoya la parte posterior de los antebrazos en la parte superior de los muslos o en el extremo del banco, de manera que las muñecas queden justo al final de las rodillas o del banco.",
        ],
        execution: [
          "Sin mover los antebrazos, levanta lentamente las manos hacia arriba lo máximo posible, apretando los músculos de los antebrazos en la parte superior del movimiento.",
          "Haz una pausa en la parte superior del movimiento.",
          "Baja lentamente la barra hasta la posición inicial.",
          "Repite el ejercicio el número de repeticiones deseadas.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte durante el levantamiento.",
          "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
          "Concéntrate en usar los músculos del antebrazo para levantar la barra, no solo las muñecas.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla.",
        ],
        muscles: [
          {
            name: "Flexores de la muñeca",
            desc: "Principalmente trabaja los músculos flexores del antebrazo.",
          },
          {
            name: "Extensores de la muñeca",
            desc: "Asisten en la estabilización del movimiento.",
          },
          {
            name: "Braquiorradial",
            desc: "Ayuda en la flexión del codo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los antebrazos",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los antebrazos.",
          },
          {
            name: "Mejora del agarre",
            desc: "Al fortalecer los músculos del antebrazo, puedes mejorar tu agarre en otros ejercicios y actividades cotidianas.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del antebrazo sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en las muñecas y los codos.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el curl de muñeca con mancuernas, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 13,
        name: "Extensión de Muñeca con Barra Sentado",
        position: [
          "Siéntate en el extremo de un banco plano con los pies firmemente apoyados en el suelo.",
          "Sostén una barra con un agarre prono (palmas hacia abajo).",
          "Apoya la parte posterior de los antebrazos en la parte superior de los muslos o en el extremo del banco, de manera que las muñecas queden justo al final de las rodillas o del banco.",
        ],
        execution: [
          "Sin mover los antebrazos, levanta lentamente las manos hacia arriba lo máximo posible, apretando los músculos de los antebrazos en la parte superior del movimiento.",
          "Haz una pausa en la parte superior del movimiento.",
          "Baja lentamente la barra hasta la posición inicial.",
          "Repite el ejercicio el número de repeticiones deseadas.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte durante el levantamiento.",
          "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
          "Concéntrate en usar los músculos del antebrazo para levantar la barra, no solo las muñecas.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla.",
        ],
        muscles: [
          {
            name: "Extensores de la muñeca",
            desc: "Principalmente trabaja los músculos extensores del antebrazo.",
          },
          {
            name: "Flexores de la muñeca",
            desc: "Asisten en la estabilización del movimiento.",
          },
          {
            name: "Braquiorradial",
            desc: "Ayuda en la flexión del codo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los antebrazos",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los antebrazos.",
          },
          {
            name: "Mejora del agarre",
            desc: "Al fortalecer los músculos del antebrazo, puedes mejorar tu agarre en otros ejercicios y actividades cotidianas.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del antebrazo sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en las muñecas y los codos.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como la extensión de muñeca con mancuernas, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 14,
        name: "Curl de Barra Invertido",
        position: [
          "Colócate de pie con los pies separados al ancho de los hombros.",
          "Sujeta una barra con un agarre prono (palmas hacia abajo).",
          "Mantén los brazos extendidos hacia abajo, con los codos ligeramente flexionados.",
          "Mantén la espalda recta y el pecho hacia adelante.",
        ],
        execution: [
          "Flexiona los codos y levanta la barra hacia los hombros, manteniendo los codos pegados al cuerpo.",
          "Haz una pausa en la parte superior del movimiento, apretando los bíceps y los músculos del antebrazo.",
          "Baja la barra de manera controlada hasta la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte durante el levantamiento.",
          "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
          "Concéntrate en usar los músculos del antebrazo y del bíceps para levantar la barra.",
          "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla.",
        ],
        muscles: [
          {
            name: "Braquiorradial",
            desc: "Principalmente trabaja este músculo del antebrazo.",
          },
          {
            name: "Bíceps braquial",
            desc: "También se activan las cabezas corta y larga del bíceps.",
          },
          {
            name: "Braquial",
            desc: "Ayuda en la flexión del codo.",
          },
          {
            name: "Extensores de la muñeca",
            desc: "Asisten en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los antebrazos",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los antebrazos.",
          },
          {
            name: "Mejora del agarre",
            desc: "Al fortalecer los músculos del antebrazo, puedes mejorar tu agarre en otros ejercicios y actividades cotidianas.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del antebrazo y del bíceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en las muñecas y los codos.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el curl con barra EZ o con mancuernas, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
    ],
  },
  {
    id: "triceps",
    img: triceps,
    routine: [
      {
        id: 1,
        name: "Extensión de Tríceps Tumbado",
        position: [
          "Selecciona el peso adecuado de las mancuernas.",
          "Acuéstate en un banco plano o en una esterilla en el suelo.",
          "Sostén una mancuerna con cada mano con un agarre neutro (palmas enfrentadas).",
          "Extiende completamente los brazos hacia arriba, de manera que queden perpendiculares al suelo.",
          "Mantén los pies firmemente apoyados en el suelo y contrae el core para estabilizar el cuerpo.",
        ],
        execution: [
          "Flexiona los codos y baja las mancuernas hacia la frente, manteniendo los codos fijos y sin mover los brazos.",
          "Haz una pausa cuando las mancuernas estén cerca de la frente.",
          "Extiende los codos para volver a la posición inicial, apretando los tríceps en la parte superior del movimiento.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los codos apuntando hacia adelante y evita que se abran hacia los lados.",
          "Controla el movimiento en todo momento para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al extender los brazos e inhalando al flexionarlos.",
          "Mantén la espalda recta y evita arquearla durante el ejercicio.",
        ],
        muscles: [
          {
            name: "Tríceps braquial",
            desc: "Principalmente trabaja las tres cabezas del tríceps.",
          },
          {
            name: "Anconeo",
            desc: "Ayuda en la extensión del codo.",
          },
          {
            name: "Deltoides anterior",
            desc: "Asiste en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los tríceps",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los tríceps.",
          },
          {
            name: "Mejora de la estabilidad del codo",
            desc: "Al fortalecer los músculos alrededor del codo, puedes mejorar la estabilidad y prevenir lesiones.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del tríceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y los hombros.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como la extensión de tríceps con barra EZ o con polea, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 2,
        name: "Extensión de Tríceps Tumbado",
        position: [
          "Selecciona el peso adecuado de las mancuernas.",
          "Acuéstate en un banco plano o en una esterilla en el suelo.",
          "Sostén una mancuerna con cada mano con un agarre neutro (palmas enfrentadas).",
          "Extiende completamente los brazos hacia arriba, de manera que queden perpendiculares al suelo.",
          "Mantén los pies firmemente apoyados en el suelo y contrae el core para estabilizar el cuerpo.",
        ],
        execution: [
          "Flexiona los codos y baja las mancuernas hacia la frente, manteniendo los codos fijos y sin mover los brazos.",
          "Haz una pausa cuando las mancuernas estén cerca de la frente.",
          "Extiende los codos para volver a la posición inicial, apretando los tríceps en la parte superior del movimiento.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los codos apuntando hacia adelante y evita que se abran hacia los lados.",
          "Controla el movimiento en todo momento para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al extender los brazos e inhalando al flexionarlos.",
          "Mantén la espalda recta y evita arquearla durante el ejercicio.",
        ],
        muscles: [
          {
            name: "Tríceps braquial",
            desc: "Principalmente trabaja las tres cabezas del tríceps.",
          },
          {
            name: "Anconeo",
            desc: "Ayuda en la extensión del codo.",
          },
          {
            name: "Deltoides anterior",
            desc: "Asiste en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los tríceps",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los tríceps.",
          },
          {
            name: "Mejora de la estabilidad del codo",
            desc: "Al fortalecer los músculos alrededor del codo, puedes mejorar la estabilidad y prevenir lesiones.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del tríceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y los hombros.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como la extensión de tríceps con barra EZ o con polea, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 3,
        name: "Extensión de Tríceps en Polea con Cuerda",
        position: [
          "Colócate de pie frente a la máquina de polea alta, con los pies separados al ancho de los hombros.",
          "Ajusta la polea a la altura más alta y sujeta la cuerda con ambas manos, con un agarre neutro (palmas enfrentadas).",
          "Mantén los codos pegados al cuerpo y los antebrazos paralelos al suelo.",
          "Mantén la espalda recta y el pecho hacia adelante.",
        ],
        execution: [
          "Extiende los codos y tira de la cuerda hacia abajo, separando las manos al final del movimiento para maximizar la contracción de los tríceps.",
          "Haz una pausa en la parte inferior del movimiento, apretando los tríceps.",
          "Regresa lentamente a la posición inicial, controlando el movimiento.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los codos pegados al cuerpo y evita que se abran hacia los lados.",
          "Controla el movimiento en todo momento para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al extender los brazos e inhalando al flexionarlos.",
          "Mantén una postura estable, activando el core para estabilizar la columna vertebral.",
        ],
        muscles: [
          {
            name: "Tríceps braquial",
            desc: "Principalmente trabaja las tres cabezas del tríceps.",
          },
          {
            name: "Anconeo",
            desc: "Ayuda en la extensión del codo.",
          },
          {
            name: "Deltoides anterior",
            desc: "Asiste en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los tríceps",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los tríceps.",
          },
          {
            name: "Mejora de la estabilidad del codo",
            desc: "Al fortalecer los músculos alrededor del codo, puedes mejorar la estabilidad y prevenir lesiones.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del tríceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y los hombros.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como la extensión de tríceps con barra EZ o con mancuernas, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 4,
        name: "Extensión de Tríceps con Mancuernas por Encima de la Cabeza",
        position: [
          "Siéntate en un banco con respaldo para mayor estabilidad, o puedes hacerlo de pie.",
          "Sostén una mancuerna con ambas manos, agarrándola por uno de los extremos con las palmas enfrentadas.",
          "Levanta la mancuerna por encima de la cabeza, con los brazos completamente extendidos.",
          "Mantén los pies firmemente apoyados en el suelo y contrae el core para estabilizar el cuerpo.",
        ],
        execution: [
          "Flexiona los codos y baja la mancuerna detrás de la cabeza, manteniendo los codos apuntando hacia arriba y cerca de la cabeza.",
          "Haz una pausa cuando sientas un buen estiramiento en los tríceps.",
          "Extiende los codos para volver a la posición inicial, apretando los tríceps en la parte superior del movimiento.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los codos apuntando hacia adelante y evita que se abran hacia los lados.",
          "Controla el movimiento en todo momento para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al extender los brazos e inhalando al flexionarlos.",
          "Mantén una postura estable, activando el core para estabilizar la columna vertebral.",
        ],
        muscles: [
          {
            name: "Tríceps braquial",
            desc: "Principalmente trabaja las tres cabezas del tríceps.",
          },
          {
            name: "Anconeo",
            desc: "Ayuda en la extensión del codo.",
          },
          {
            name: "Deltoides anterior",
            desc: "Asiste en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los tríceps",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los tríceps.",
          },
          {
            name: "Mejora de la estabilidad del codo",
            desc: "Al fortalecer los músculos alrededor del codo, puedes mejorar la estabilidad y prevenir lesiones.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del tríceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y los hombros.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como la extensión de tríceps con barra EZ o con polea, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 5,
        name: "Press Banca con Agarre Cerrado",
        position: [
          "Acuéstate en un banco plano con los pies firmemente apoyados en el suelo.",
          "Sujeta la barra con un agarre cerrado, es decir, con las manos colocadas a una distancia más estrecha que el ancho de los hombros (aproximadamente a la altura de los hombros o un poco más estrecho).",
          "Mantén los brazos extendidos hacia arriba, con los codos ligeramente flexionados.",
          "Asegúrate de que la espalda esté bien apoyada en el banco y el pecho hacia adelante.",
        ],
        execution: [
          "Baja la barra lentamente hacia el centro del pecho, manteniendo los codos pegados al cuerpo.",
          "Haz una pausa cuando la barra esté cerca del pecho.",
          "Empuja la barra hacia arriba, extendiendo los brazos y apretando los tríceps en la parte superior del movimiento.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los codos pegados al cuerpo para maximizar la activación de los tríceps y minimizar la tensión en los hombros.",
          "Controla el movimiento en todo momento para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al empujar la barra hacia arriba e inhalando al bajarla.",
          "Mantén una postura estable, activando el core para estabilizar la columna vertebral.",
        ],
        muscles: [
          {
            name: "Tríceps braquial",
            desc: "Principalmente trabaja las tres cabezas del tríceps.",
          },
          {
            name: "Pectoral mayor",
            desc: "Trabaja la parte interna del pecho.",
          },
          {
            name: "Deltoides anterior",
            desc: "Ayuda en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los tríceps",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los tríceps.",
          },
          {
            name: "Mejora de la estabilidad del codo",
            desc: "Al fortalecer los músculos alrededor del codo, puedes mejorar la estabilidad y prevenir lesiones.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del tríceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y los hombros.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como la extensión de tríceps con barra EZ o con mancuernas, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 6,
        name: "Patadas Traseras para Tríceps con Mancuernas",
        position: [
          "Colócate al lado de un banco plano.",
          "Apoya una mano y una rodilla en el banco para estabilizarte, mientras que la otra pierna permanece en el suelo.",
          "Sostén una mancuerna con la mano libre, con un agarre neutral (palma mirando hacia adentro).",
          "Mantén el brazo que sostiene la mancuerna pegado al torso, con el codo flexionado a 90 grados.",
        ],
        execution: [
          "Extiende el codo y lleva la mancuerna hacia atrás, manteniendo el brazo paralelo al suelo.",
          "Haz una pausa en la parte superior del movimiento, apretando los tríceps.",
          "Baja la mancuerna de manera controlada hasta la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones y luego cambia de brazo.",
        ],
        advices: [
          "Mantén la espalda recta y evita balancearte durante el levantamiento.",
          "Controla el movimiento en todo momento para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al extender el brazo e inhalando al flexionarlo.",
          "Mantén el codo pegado al cuerpo y evita que se abra hacia los lados.",
        ],
        muscles: [
          {
            name: "Tríceps braquial",
            desc: "Principalmente trabaja las tres cabezas del tríceps.",
          },
          {
            name: "Anconeo",
            desc: "Ayuda en la extensión del codo.",
          },
          {
            name: "Deltoides posterior",
            desc: "Asiste en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los tríceps",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los tríceps.",
          },
          {
            name: "Mejora de la estabilidad del codo",
            desc: "Al fortalecer los músculos alrededor del codo, puedes mejorar la estabilidad y prevenir lesiones.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del tríceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y los hombros.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como la extensión de tríceps con barra EZ o con polea, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 7,
        name: "Extensión de Tríceps con Cable de Agarre Inverso con Barra",
        position: [
          "Colócate de pie frente a la máquina de polea alta.",
          "Ajusta la polea a la altura más alta y sujeta la barra con un agarre supino (palmas hacia arriba).",
          "Mantén los pies separados al ancho de los hombros y los codos pegados al cuerpo.",
          "Mantén la espalda recta y el pecho hacia adelante.",
        ],
        execution: [
          "Extiende los codos y empuja la barra hacia abajo hasta que los brazos estén completamente extendidos.",
          "Haz una pausa en la parte inferior del movimiento, apretando los tríceps.",
          "Regresa lentamente a la posición inicial, controlando el movimiento.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los codos pegados al cuerpo y evita que se abran hacia los lados.",
          "Controla el movimiento en todo momento para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al extender los brazos e inhalando al flexionarlos.",
          "Mantén una postura estable, activando el core para estabilizar la columna vertebral.",
        ],
        muscles: [
          {
            name: "Tríceps braquial",
            desc: "Principalmente trabaja las tres cabezas del tríceps.",
          },
          {
            name: "Anconeo",
            desc: "Ayuda en la extensión del codo.",
          },
          {
            name: "Deltoides anterior",
            desc: "Asiste en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los tríceps",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los tríceps.",
          },
          {
            name: "Mejora de la estabilidad del codo",
            desc: "Al fortalecer los músculos alrededor del codo, puedes mejorar la estabilidad y prevenir lesiones.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del tríceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y los hombros.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como la extensión de tríceps con barra EZ o con mancuernas, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 8,
        name: "Extensión de Tríceps con Cable a Una Mano",
        position: [
          "Colócate de pie frente a la máquina de polea alta.",
          "Ajusta la polea a la altura más alta y sujeta el asa con un agarre supino (palma hacia arriba) o prono (palma hacia abajo), según prefieras.",
          "Mantén los pies separados al ancho de los hombros y los codos pegados al cuerpo.",
          "Mantén la espalda recta y el pecho hacia adelante.",
        ],
        execution: [
          "Extiende el codo y empuja el asa hacia abajo hasta que el brazo esté completamente extendido.",
          "Haz una pausa en la parte inferior del movimiento, apretando los tríceps.",
          "Regresa lentamente a la posición inicial, controlando el movimiento.",
          "Repite el movimiento para el número deseado de repeticiones y luego cambia de brazo.",
        ],
        advices: [
          "Mantén el codo pegado al cuerpo y evita que se abra hacia los lados.",
          "Controla el movimiento en todo momento para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al extender el brazo e inhalando al flexionarlo.",
          "Mantén una postura estable, activando el core para estabilizar la columna vertebral.",
        ],
        muscles: [
          {
            name: "Tríceps braquial",
            desc: "Principalmente trabaja las tres cabezas del tríceps.",
          },
          {
            name: "Anconeo",
            desc: "Ayuda en la extensión del codo.",
          },
          {
            name: "Deltoides anterior",
            desc: "Asiste en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los tríceps",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los tríceps.",
          },
          {
            name: "Mejora de la estabilidad del codo",
            desc: "Al fortalecer los músculos alrededor del codo, puedes mejorar la estabilidad y prevenir lesiones.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del tríceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y los hombros.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como la extensión de tríceps con barra EZ o con mancuernas, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 9,
        name: "Extensión de Tríceps con Cable a Una Mano con Agarre Supinado",
        position: [
          "Colócate de pie frente a la máquina de polea alta.",
          "Ajusta la polea a la altura más alta y sujeta el asa con un agarre supinado (palma hacia arriba).",
          "Mantén los pies separados al ancho de los hombros y los codos pegados al cuerpo.",
          "Mantén la espalda recta y el pecho hacia adelante.",
        ],
        execution: [
          "Extiende el codo y empuja el asa hacia abajo hasta que el brazo esté completamente extendido.",
          "Haz una pausa en la parte inferior del movimiento, apretando los tríceps.",
          "Regresa lentamente a la posición inicial, controlando el movimiento.",
          "Repite el movimiento para el número deseado de repeticiones y luego cambia de brazo.",
        ],
        advices: [
          "Mantén el codo pegado al cuerpo y evita que se abra hacia los lados.",
          "Controla el movimiento en todo momento para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al extender el brazo e inhalando al flexionarlo.",
          "Mantén una postura estable, activando el core para estabilizar la columna vertebral.",
        ],
        muscles: [
          {
            name: "Tríceps braquial",
            desc: "Principalmente trabaja las tres cabezas del tríceps.",
          },
          {
            name: "Anconeo",
            desc: "Ayuda en la extensión del codo.",
          },
          {
            name: "Deltoides anterior",
            desc: "Asiste en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los tríceps",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los tríceps.",
          },
          {
            name: "Mejora de la estabilidad del codo",
            desc: "Al fortalecer los músculos alrededor del codo, puedes mejorar la estabilidad y prevenir lesiones.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del tríceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y los hombros.",
          },
        ],
      },
      {
        id: 10,
        name: "Extensión de Tríceps con Mancuernas Tumbado",
        position: [
          "Selecciona el peso adecuado de las mancuernas.",
          "Acuéstate en un banco plano con los pies firmemente apoyados en el suelo.",
          "Sostén una mancuerna con cada mano con un agarre neutro (palmas enfrentadas).",
          "Extiende completamente los brazos hacia arriba, de manera que queden perpendiculares al suelo.",
          "Mantén los codos ligeramente flexionados y alineados con los hombros.",
        ],
        execution: [
          "Flexiona los codos y baja las mancuernas hacia la frente, manteniendo los codos fijos y sin mover los brazos.",
          "Haz una pausa cuando las mancuernas estén cerca de la frente.",
          "Extiende los codos para volver a la posición inicial, apretando los tríceps en la parte superior del movimiento.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los codos apuntando hacia adelante y evita que se abran hacia los lados.",
          "Controla el movimiento en todo momento para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al extender los brazos e inhalando al flexionarlos.",
          "Mantén la espalda recta y evita arquearla durante el ejercicio.",
        ],
        muscles: [
          {
            name: "Tríceps braquial",
            desc: "Principalmente trabaja las tres cabezas del tríceps.",
          },
          {
            name: "Anconeo",
            desc: "Ayuda en la extensión del codo.",
          },
          {
            name: "Deltoides anterior",
            desc: "Asiste en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los tríceps",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los tríceps.",
          },
          {
            name: "Mejora de la estabilidad del codo",
            desc: "Al fortalecer los músculos alrededor del codo, puedes mejorar la estabilidad y prevenir lesiones.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del tríceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y los hombros.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como la extensión de tríceps con barra EZ o con polea, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 11,
        name: "Press Francés Sentado con Barra",
        position: [
          "Siéntate en un banco con respaldo para mayor estabilidad.",
          "Sostén una barra con un agarre prono (palmas hacia abajo) y las manos separadas al ancho de los hombros.",
          "Levanta la barra por encima de la cabeza, con los brazos completamente extendidos.",
          "Mantén los pies firmemente apoyados en el suelo y contrae el core para estabilizar el cuerpo.",
        ],
        execution: [
          "Flexiona los codos y baja la barra detrás de la cabeza, manteniendo los codos apuntando hacia adelante y cerca de la cabeza.",
          "Haz una pausa cuando sientas un buen estiramiento en los tríceps.",
          "Extiende los codos para volver a la posición inicial, apretando los tríceps en la parte superior del movimiento.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los codos apuntando hacia adelante y evita que se abran hacia los lados.",
          "Controla el movimiento en todo momento para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al extender los brazos e inhalando al flexionarlos.",
          "Mantén una postura estable, activando el core para estabilizar la columna vertebral.",
        ],
        muscles: [
          {
            name: "Tríceps braquial",
            desc: "Principalmente trabaja las tres cabezas del tríceps.",
          },
          {
            name: "Anconeo",
            desc: "Ayuda en la extensión del codo.",
          },
          {
            name: "Deltoides anterior",
            desc: "Asiste en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los tríceps",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los tríceps.",
          },
          {
            name: "Mejora de la estabilidad del codo",
            desc: "Al fortalecer los músculos alrededor del codo, puedes mejorar la estabilidad y prevenir lesiones.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del tríceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y los hombros.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como la extensión de tríceps con barra EZ o con polea, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 12,
        name: "Fondos en Banco",
        position: [
          "Coloca un banco detrás de ti y siéntate en el borde.",
          "Apoya las manos en el borde del banco, con los dedos mirando hacia adelante y las palmas firmemente apoyadas.",
          "Extiende las piernas hacia adelante, con los talones apoyados en el suelo y las rodillas ligeramente flexionadas.",
        ],
        execution: [
          "Desliza el cuerpo hacia adelante, de manera que los glúteos queden fuera del banco.",
          "Flexiona los codos y baja el cuerpo hacia el suelo, manteniendo los codos apuntando hacia atrás.",
          "Haz una pausa cuando los codos estén a un ángulo de aproximadamente 90 grados.",
          "Empuja con las manos para extender los codos y levantar el cuerpo de vuelta a la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén la espalda recta y evita arquearla durante el movimiento.",
          "Controla el movimiento en todo momento para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al subir e inhalando al bajar.",
          "Mantén los codos pegados al cuerpo y evita que se abran hacia los lados.",
        ],
        muscles: [
          {
            name: "Tríceps braquial",
            desc: "Principalmente trabaja las tres cabezas del tríceps.",
          },
          {
            name: "Pectoral mayor",
            desc: "Ayuda en la estabilización del movimiento.",
          },
          {
            name: "Deltoides anterior",
            desc: "Asiste en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los tríceps",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los tríceps.",
          },
          {
            name: "Mejora de la estabilidad del codo",
            desc: "Al fortalecer los músculos alrededor del codo, puedes mejorar la estabilidad y prevenir lesiones.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del tríceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no bajar demasiado para evitar lesiones en los hombros y los codos.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las extensiones de tríceps con barra EZ o con polea, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 13,
        name: "Fondos en Barras Paralelas",
        position: [
          "Colócate entre dos barras paralelas y agárralas con las manos, con los brazos extendidos y las palmas mirando hacia adentro.",
          "Levanta el cuerpo hasta que los brazos estén completamente extendidos y las piernas colgando libremente.",
          "Mantén el torso erguido y los pies juntos.",
        ],
        execution: [
          "Flexiona los codos y baja el cuerpo lentamente, inclinándote ligeramente hacia adelante.",
          "Continúa bajando hasta que los codos formen un ángulo de aproximadamente 90 grados.",
          "Haz una pausa en la parte inferior del movimiento.",
          "Empuja con las manos para extender los codos y levantar el cuerpo de vuelta a la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los codos pegados al cuerpo y evita que se abran hacia los lados.",
          "Controla el movimiento en todo momento para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al subir e inhalando al bajar.",
          "Mantén una postura estable, activando el core para estabilizar la columna vertebral.",
        ],
        muscles: [
          {
            name: "Pectoral mayor",
            desc: "Trabaja principalmente la parte inferior del pecho.",
          },
          {
            name: "Tríceps braquial",
            desc: "Principalmente trabaja las tres cabezas del tríceps.",
          },
          {
            name: "Deltoides anterior",
            desc: "Ayuda en la estabilización del movimiento.",
          },
          {
            name: "Serrato anterior",
            desc: "Asiste en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento del tren superior",
            desc: "Excelente para desarrollar la masa muscular y la fuerza del pecho, los tríceps y los hombros.",
          },
          {
            name: "Mejora de la estabilidad del hombro",
            desc: "Al fortalecer los músculos alrededor del hombro, puedes mejorar la estabilidad y prevenir lesiones.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del pecho y los tríceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no bajar demasiado para evitar lesiones en los hombros y los codos.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las flexiones de brazos o los fondos en banco, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
    ],
  },
  {
    id: "abdomen",
    img: abdomen,
    routine: [
      {
        id: 1,
        name: "Abdominales Crunch",
        position: [
          "Túmbate en el suelo boca arriba sobre una esterilla.",
          "Flexiona las rodillas a unos 90 grados y mantén los pies apoyados en el suelo.",
          "Coloca las manos detrás de la cabeza o cruzadas sobre el pecho, evitando tirar del cuello.",
        ],
        execution: [
          "Contrae los músculos abdominales y levanta la parte superior del torso hacia las rodillas.",
          "Mantén la parte baja de la espalda en contacto con el suelo.",
          "Haz una pausa en la parte superior del movimiento, apretando los abdominales.",
          "Vuelve lentamente a la posición inicial sin dejar caer el torso bruscamente.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén el cuello relajado y evita tirar de la cabeza con las manos.",
          "Controla el movimiento en todo momento para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al subir e inhalando al bajar.",
          "Mantén una postura estable, activando el core para estabilizar la columna vertebral.",
        ],
        muscles: [
          {
            name: "Recto abdominal",
            desc: "Principal músculo trabajado en este ejercicio.",
          },
          {
            name: "Oblicuos",
            desc: "Asisten en la estabilización del movimiento.",
          },
          {
            name: "Transverso abdominal",
            desc: "Ayuda a mantener la estabilidad del core.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento del core",
            desc: "Excelente para desarrollar la fuerza y la resistencia de los músculos abdominales.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del core, puedes mejorar la postura y reducir el riesgo de dolores de espalda.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos abdominales sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no tirar del cuello para evitar lesiones cervicales.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como los abdominales en bicicleta o las planchas, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 2,
        name: "Crunch para Oblicuos",
        position: [
          "Túmbate en el suelo boca arriba sobre una esterilla.",
          "Flexiona las rodillas y mantén los pies apoyados en el suelo.",
          "Coloca las manos detrás de la cabeza, con los codos abiertos hacia los lados.",
        ],
        execution: [
          "Levanta la parte superior del torso hacia una rodilla, girando el torso para que el codo opuesto se acerque a la rodilla.",
          "Contrae los músculos oblicuos en la parte superior del movimiento.",
          "Haz una pausa breve y luego baja lentamente a la posición inicial.",
          "Repite el movimiento para el número deseado de repeticiones y luego cambia de lado.",
        ],
        advices: [
          "Mantén el cuello relajado y evita tirar de la cabeza con las manos.",
          "Controla el movimiento en todo momento para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al subir e inhalando al bajar.",
          "Mantén una postura estable, activando el core para estabilizar la columna vertebral.",
        ],
        muscles: [
          {
            name: "Oblicuos externos",
            desc: "Principalmente trabaja estos músculos.",
          },
          {
            name: "Oblicuos internos",
            desc: "También se activan durante el movimiento.",
          },
          {
            name: "Recto abdominal",
            desc: "Asiste en la estabilización del movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento de los oblicuos",
            desc: "Excelente para desarrollar la masa muscular y la fuerza de los oblicuos.",
          },
          {
            name: "Mejora de la estabilidad del core",
            desc: "Al fortalecer los músculos del core, puedes mejorar la estabilidad y prevenir lesiones.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos oblicuos sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no tirar del cuello para evitar lesiones cervicales.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las planchas laterales o los giros rusos, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 3,
        name: "Abdominales con Cuerda en Polea Alta",
        position: [
          "Ajusta la polea a la altura más alta y sujeta la cuerda con ambas manos.",
          "Arrodíllate en el suelo frente a la máquina de polea alta.",
          "Coloca las manos detrás de la cabeza, con las palmas hacia adentro y los codos apuntando hacia adelante.",
        ],
        execution: [
          "Contrae los músculos abdominales y lleva los codos hacia las rodillas, flexionando el torso.",
          "Mantén la parte baja de la espalda en contacto con el suelo y evita tirar de la cuerda con los brazos.",
          "Haz una pausa en la parte inferior del movimiento, apretando los abdominales.",
          "Vuelve lentamente a la posición inicial sin dejar caer el torso bruscamente.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén el cuello relajado y evita tirar de la cabeza con las manos.",
          "Controla el movimiento en todo momento para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al bajar e inhalando al subir.",
          "Mantén una postura estable, activando el core para estabilizar la columna vertebral.",
        ],
        muscles: [
          {
            name: "Recto abdominal",
            desc: "Principal músculo trabajado en este ejercicio.",
          },
          {
            name: "Oblicuos",
            desc: "Asisten en la estabilización del movimiento.",
          },
          {
            name: "Transverso abdominal",
            desc: "Ayuda a mantener la estabilidad del core.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento del core",
            desc: "Excelente para desarrollar la fuerza y la resistencia de los músculos abdominales.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del core, puedes mejorar la postura y reducir el riesgo de dolores de espalda.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos abdominales sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no tirar del cuello para evitar lesiones cervicales.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como los abdominales en bicicleta o las planchas, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 4,
        name: "La Plancha",
        position: [
          "Colócate boca abajo sobre una esterilla.",
          "Apoya los antebrazos en el suelo, con los codos alineados directamente debajo de los hombros.",
          "Extiende las piernas hacia atrás, apoyando las puntas de los pies en el suelo.",
          "Mantén el cuerpo en línea recta desde la cabeza hasta los talones.",
        ],
        execution: [
          "Contrae los músculos del core (abdominales y lumbares) para mantener el cuerpo recto y estable.",
          "Mantén la posición, asegurándote de no dejar caer las caderas ni levantar demasiado los glúteos.",
          "Respira de manera controlada y mantén la posición durante el tiempo deseado.",
        ],
        advices: [
          "Mantén la cabeza en una posición neutral, mirando hacia el suelo.",
          "Evita arquear la espalda baja; en su lugar, mantén una ligera inclinación pélvica para proteger la columna vertebral.",
          "Controla la respiración, inhalando y exhalando de manera constante.",
          "Si eres principiante, comienza con intervalos más cortos y aumenta gradualmente el tiempo a medida que ganes fuerza.",
        ],
        muscles: [
          {
            name: "Recto abdominal",
            desc: "Principal músculo trabajado en este ejercicio.",
          },
          {
            name: "Oblicuos",
            desc: "Asisten en la estabilización del movimiento.",
          },
          {
            name: "Transverso abdominal",
            desc: "Ayuda a mantener la estabilidad del core.",
          },
          {
            name: "Erectores espinales",
            desc: "Ayudan a mantener la alineación de la columna vertebral.",
          },
          {
            name: "Glúteos",
            desc: "Asisten en la estabilización de la pelvis.",
          },
          {
            name: "Hombros",
            desc: "Ayudan a mantener la posición de los brazos.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento del core",
            desc: "Excelente para desarrollar la fuerza y la resistencia de los músculos abdominales y lumbares.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del core, puedes mejorar la postura y reducir el riesgo de dolores de espalda.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos del core sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de mantener una buena alineación corporal para evitar lesiones en la espalda baja y los hombros.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las planchas laterales o las planchas con los brazos extendidos, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 5,
        name: "Elevación de Piernas Sostenido de Barra Fija",
        position: [
          "Agárrate de una barra fija con las manos separadas al ancho de los hombros y las palmas mirando hacia adelante.",
          "Cuelga de la barra con los brazos completamente extendidos y las piernas juntas.",
          "Mantén el core activado y la espalda recta.",
        ],
        execution: [
          "Levanta las piernas hacia arriba, manteniéndolas rectas, hasta que formen un ángulo de 90 grados con el torso.",
          "Haz una pausa en la parte superior del movimiento, apretando los abdominales.",
          "Baja las piernas de manera controlada hasta la posición inicial sin balancearte.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén el cuerpo lo más quieto posible para evitar balanceos.",
          "Controla el movimiento en todo momento para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar las piernas e inhalando al bajarlas.",
          "Si eres principiante, puedes empezar doblando las rodillas en lugar de mantener las piernas rectas.",
        ],
        muscles: [
          {
            name: "Recto abdominal",
            desc: "Principal músculo trabajado en este ejercicio.",
          },
          {
            name: "Oblicuos",
            desc: "Asisten en la estabilización del movimiento.",
          },
          {
            name: "Psoas ilíaco",
            desc: "Ayuda en la elevación de las piernas.",
          },
          {
            name: "Flexores de la cadera",
            desc: "También se activan durante el movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento del core",
            desc: "Excelente para desarrollar la fuerza y la resistencia de los músculos abdominales.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del core, puedes mejorar la postura y reducir el riesgo de dolores de espalda.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos abdominales inferiores sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no balancearte para evitar lesiones en la espalda baja y los hombros.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las elevaciones de rodillas en barra fija, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 6,
        name: "Encogimiento de Rodillas Para Abdominales",
        position: [
          "Túmbate en el suelo boca arriba sobre una esterilla.",
          "Flexiona las rodillas y mantén los pies apoyados en el suelo.",
          "Coloca las manos a los lados del cuerpo o debajo de los glúteos para mayor estabilidad.",
        ],
        execution: [
          "Contrae los músculos abdominales y lleva las rodillas hacia el pecho, levantando ligeramente las caderas del suelo.",
          "Haz una pausa en la parte superior del movimiento, apretando los abdominales.",
          "Baja las piernas de manera controlada hasta la posición inicial sin dejar que los pies toquen el suelo.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén el cuello relajado y evita tirar de la cabeza con las manos.",
          "Controla el movimiento en todo momento para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al levantar las piernas e inhalando al bajarlas.",
          "Mantén una postura estable, activando el core para estabilizar la columna vertebral.",
        ],
        muscles: [
          {
            name: "Recto abdominal",
            desc: "Principal músculo trabajado en este ejercicio.",
          },
          {
            name: "Oblicuos",
            desc: "Asisten en la estabilización del movimiento.",
          },
          {
            name: "Transverso abdominal",
            desc: "Ayuda a mantener la estabilidad del core.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento del core",
            desc: "Excelente para desarrollar la fuerza y la resistencia de los músculos abdominales.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del core, puedes mejorar la postura y reducir el riesgo de dolores de espalda.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos abdominales inferiores sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no balancearte para evitar lesiones en la espalda baja y los hombros.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las elevaciones de rodillas en barra fija, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 7,
        name: "Abdominales con Brazos Estirados",
        position: [
          "Túmbate en el suelo boca arriba sobre una esterilla.",
          "Flexiona las rodillas y mantén los pies apoyados en el suelo.",
          "Extiende los brazos hacia atrás, por encima de la cabeza, con las palmas mirando hacia arriba. Puedes entrelazar los pulgares si te resulta más cómodo.",
        ],
        execution: [
          "Contrae los músculos abdominales y levanta la parte superior del torso hacia las rodillas, manteniendo los brazos estirados por encima de la cabeza.",
          "Mantén los codos alineados con las orejas durante todo el movimiento.",
          "Haz una pausa en la parte superior del movimiento, apretando los abdominales.",
          "Baja lentamente a la posición inicial sin dejar caer el torso bruscamente.",
          "Repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén el cuello relajado y evita tirar de la cabeza con las manos.",
          "Controla el movimiento en todo momento para maximizar la activación muscular y evitar lesiones.",
          "Respira de manera controlada, exhalando al subir e inhalando al bajar.",
          "Mantén una postura estable, activando el core para estabilizar la columna vertebral.",
        ],
        muscles: [
          {
            name: "Recto abdominal",
            desc: "Principal músculo trabajado en este ejercicio.",
          },
          {
            name: "Oblicuos",
            desc: "Asisten en la estabilización del movimiento.",
          },
          {
            name: "Transverso abdominal",
            desc: "Ayuda a mantener la estabilidad del core.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento del core",
            desc: "Excelente para desarrollar la fuerza y la resistencia de los músculos abdominales.",
          },
          {
            name: "Mejora de la postura",
            desc: "Al fortalecer los músculos del core, puedes mejorar la postura y reducir el riesgo de dolores de espalda.",
          },
          {
            name: "Aislamiento muscular",
            desc: "Permite un enfoque específico en los músculos abdominales sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Estabilidad y control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no tirar del cuello para evitar lesiones cervicales.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como los abdominales con brazos cruzados sobre el pecho, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
      {
        id: 8,
        name: "Plancha con Flexión",
        position: [
          "Colócate en posición de plancha alta, con las manos apoyadas en el suelo a la altura de los hombros.",
          "Mantén el cuerpo en línea recta desde la cabeza hasta los pies, activando el core.",
        ],
        execution: [
          "Flexiona un brazo y apoya el antebrazo en el suelo.",
          "Repite el mismo movimiento con el otro brazo, de manera que ambos antebrazos queden apoyados en el suelo.",
          "Extiende un brazo y luego el otro para volver a la posición de plancha alta.",
          "Realiza el movimiento de forma fluida y continua, alternando los brazos.",
        ],
        advices: [
          "Mantén el core activado y el cuerpo en línea recta durante todo el ejercicio.",
          "Controla el movimiento para evitar dejarte caer bruscamente.",
          "Respira de manera controlada, exhalando al bajar e inhalando al subir.",
          "Mantén los hombros alineados con las manos y evita que las caderas se hundan.",
        ],
        muscles: [
          {
            name: "Core",
            desc: "Principalmente los músculos abdominales y lumbares.",
          },
          {
            name: "Hombros",
            desc: "Deltoides y trapecios.",
          },
          {
            name: "Brazos",
            desc: "Tríceps y bíceps.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento del Core",
            desc: "Mejora la fuerza y estabilidad del core.",
          },
          {
            name: "Mejora de la Postura",
            desc: "Ayuda a mantener una postura correcta y reduce el riesgo de dolores de espalda.",
          },
          {
            name: "Estabilidad y Control",
            desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas.",
          },
          {
            name: "Resistencia Muscular",
            desc: "Aumenta la resistencia de los músculos del core, hombros y brazos.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no dejarte caer bruscamente para evitar lesiones en los hombros y codos.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como la plancha estática o la plancha lateral, que también trabajan los mismos músculos con menor riesgo.",
          },
        ],
      },
    ],
  },
  {
    id: "pierna",
    img: pierna,
    routine: [
      {
        id: 1,
        name: "Sentadillas",
        position: [
          "Colócate de pie con los pies separados al ancho de los hombros.",
          "Mantén los pies firmemente apoyados en el suelo y los dedos ligeramente apuntando hacia afuera.",
          "Extiende los brazos hacia adelante para mantener el equilibrio, o colócalos detrás de la cabeza.",
        ],
        execution: [
          "Inicia el movimiento flexionando las rodillas y las caderas, como si fueras a sentarte en una silla.",
          "Baja el cuerpo hasta que los muslos estén paralelos al suelo, manteniendo la espalda recta y el pecho levantado.",
          "Asegúrate de que las rodillas no sobrepasen la línea de los dedos de los pies.",
          "Haz una pausa en la parte inferior del movimiento.",
          "Empuja con los talones para volver a la posición inicial, extendiendo las caderas y las rodillas.",
        ],
        advices: [
          "Mantén el core activado durante todo el ejercicio para estabilizar la columna vertebral.",
          "Controla el movimiento, evitando bajar demasiado rápido o subir de manera brusca.",
          "Respira de manera controlada, inhalando al bajar y exhalando al subir.",
          "Mantén la mirada hacia adelante para ayudar a mantener la postura correcta.",
        ],
        muscles: [
          {
            name: "Cuádriceps",
            desc: "Principalmente trabajados durante la extensión de las rodillas.",
          },
          {
            name: "Glúteos",
            desc: "Activados durante la extensión de las caderas.",
          },
          {
            name: "Isquiotibiales",
            desc: "Asisten en la flexión de las rodillas y estabilización.",
          },
          {
            name: "Core",
            desc: "Ayuda a mantener la estabilidad y la postura correcta.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas y el core.",
          },
          {
            name: "Mejora de la Postura",
            desc: "Ayuda a mantener una postura correcta y reduce el riesgo de dolores de espalda.",
          },
          {
            name: "Acondicionamiento Físico",
            desc: "Aumenta la capacidad cardiovascular y la resistencia general.",
          },
          {
            name: "Pérdida de Peso",
            desc: "Favorece la quema de calorías y la reducción de grasa corporal.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no dejar que las rodillas sobrepasen los dedos de los pies para evitar lesiones en las rodillas.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las sentadillas asistidas con una silla o las sentadillas con balón de pilates.",
          },
        ],
      },
      {
        id: 2,
        name: "Prensa de Piernas",
        position: [
          "Siéntate en la máquina de prensa de piernas con la espalda apoyada firmemente en el respaldo.",
          "Coloca los pies en la plataforma, separados al ancho de los hombros.",
          "Ajusta el asiento y el respaldo para que tus rodillas formen un ángulo de aproximadamente 90 grados cuando estén dobladas.",
        ],
        execution: [
          "Empuja la plataforma hacia afuera, extendiendo las piernas, pero sin bloquear las rodillas.",
          "Exhala mientras empujas la plataforma.",
          "Inhala mientras bajas la plataforma de nuevo hacia tu cuerpo, doblando las rodillas hasta que formen un ángulo de 90 grados.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies colocados correctamente en la plataforma para evitar lesiones.",
          "Mantén la espalda recta y apoyada en el respaldo de la máquina durante todo el ejercicio.",
          "No bloquees las rodillas en la posición extendida.",
          "Ajusta el peso de la máquina de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Cuádriceps",
            desc: "Principalmente trabajados durante la extensión de las piernas.",
          },
          {
            name: "Glúteos",
            desc: "Activados durante la extensión de las caderas.",
          },
          {
            name: "Isquiotibiales",
            desc: "Asisten en la flexión de las rodillas y estabilización.",
          },
          {
            name: "Aductores",
            desc: "Trabajan como músculos sinergistas.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas.",
          },
          {
            name: "Variedad de Posiciones",
            desc: "Puedes realizar el ejercicio en diferentes posiciones (horizontal, inclinada, vertical) para trabajar los músculos desde distintos ángulos.",
          },
          {
            name: "Ajustes Personalizados",
            desc: "La mayoría de las máquinas permiten ajustar el asiento y el respaldo para adaptarse a tu altura y longitud de pierna.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no bloquear las rodillas para evitar lesiones en las articulaciones.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las sentadillas o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 3,
        name: "Extensión de Pierna",
        position: [
          "Siéntate en la máquina de extensión de pierna con la espalda apoyada firmemente en el respaldo.",
          "Coloca los pies debajo del rodillo acolchado, asegurándote de que tus rodillas estén alineadas con el eje de la máquina.",
          "Ajusta el asiento y el respaldo para que tus rodillas formen un ángulo de aproximadamente 90 grados cuando estén dobladas.",
        ],
        execution: [
          "Extiende las piernas hacia adelante, levantando el rodillo acolchado hasta que las piernas estén completamente rectas.",
          "Mantén la posición un momento, contrayendo los cuádriceps.",
          "Baja lentamente el rodillo de nuevo hacia la posición inicial, doblando las rodillas hasta que formen un ángulo de 90 grados.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies colocados correctamente debajo del rodillo para evitar lesiones.",
          "Mantén la espalda recta y apoyada en el respaldo de la máquina durante todo el ejercicio.",
          "No bloquees las rodillas en la posición extendida.",
          "Ajusta el peso de la máquina de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Cuádriceps",
            desc: "Principalmente trabajados durante la extensión de las piernas.",
          },
          {
            name: "Aductores",
            desc: "Trabajan como músculos sinergistas.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas.",
          },
          {
            name: "Aislamiento Muscular",
            desc: "Permite un enfoque específico en los cuádriceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Variedad de Posiciones",
            desc: "Puedes realizar el ejercicio en diferentes posiciones (horizontal, inclinada, vertical) para trabajar los músculos desde distintos ángulos.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no bloquear las rodillas para evitar lesiones en las articulaciones.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las sentadillas o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 4,
        name: "Zancadas",
        position: [
          "Colócate de pie con los pies separados al ancho de las caderas.",
          "Mantén el torso erguido y los hombros hacia atrás.",
          "Coloca las manos en las caderas o a los lados para mantener el equilibrio.",
        ],
        execution: [
          "Da un paso amplio hacia adelante con una pierna.",
          "Flexiona ambas rodillas hasta que la rodilla trasera casi toque el suelo y la rodilla delantera forme un ángulo de 90 grados.",
          "Asegúrate de que la rodilla delantera no sobrepase los dedos del pie.",
          "Empuja con el talón del pie delantero para volver a la posición inicial.",
          "Repite el movimiento con la otra pierna.",
        ],
        advices: [
          "Mantén el core activado durante todo el ejercicio para estabilizar la columna vertebral.",
          "Controla el movimiento, evitando bajar demasiado rápido o subir de manera brusca.",
          "Respira de manera controlada, inhalando al bajar y exhalando al subir.",
          "Mantén la mirada hacia adelante para ayudar a mantener la postura correcta.",
        ],
        muscles: [
          {
            name: "Cuádriceps",
            desc: "Principalmente trabajados durante la extensión de las rodillas.",
          },
          {
            name: "Glúteos",
            desc: "Activados durante la extensión de las caderas.",
          },
          {
            name: "Isquiotibiales",
            desc: "Asisten en la flexión de las rodillas y estabilización.",
          },
          {
            name: "Core",
            desc: "Ayuda a mantener la estabilidad y la postura correcta.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas y el core.",
          },
          {
            name: "Mejora de la Postura",
            desc: "Ayuda a mantener una postura correcta y reduce el riesgo de dolores de espalda.",
          },
          {
            name: "Acondicionamiento Físico",
            desc: "Aumenta la capacidad cardiovascular y la resistencia general.",
          },
          {
            name: "Pérdida de Peso",
            desc: "Favorece la quema de calorías y la reducción de grasa corporal.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no dejar que la rodilla delantera sobrepase los dedos del pie para evitar lesiones en las rodillas.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las zancadas asistidas con una silla o las zancadas estáticas.",
          },
        ],
      },
      {
        id: 5,
        name: "Curl de Pierna en Máquina Tumbado",
        position: [
          "Ajusta la máquina para que el rodillo esté a la altura de tus tobillos.",
          "Túmbate boca abajo en la máquina, asegurándote de que tu cuerpo esté alineado y tus caderas estén apoyadas en el banco.",
          "Sujeta las asas laterales de la máquina para mejorar la estabilidad de la parte superior del cuerpo.",
        ],
        execution: [
          "Flexiona las rodillas para llevar los talones hacia los glúteos, levantando el rodillo acolchado.",
          "Mantén la posición un momento, contrayendo los isquiotibiales.",
          "Baja lentamente el rodillo de nuevo hacia la posición inicial, extendiendo las rodillas.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies colocados correctamente debajo del rodillo para evitar lesiones.",
          "Mantén la espalda recta y apoyada en el banco durante todo el ejercicio.",
          "No utilices el impulso para levantar el rodillo, utiliza los músculos de las piernas.",
          "Ajusta el peso de la máquina de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Isquiotibiales",
            desc: "Principalmente trabajados durante la flexión de las rodillas.",
          },
          {
            name: "Gastrocnemio",
            desc: "Trabaja como músculo sinergista.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas.",
          },
          {
            name: "Aislamiento Muscular",
            desc: "Permite un enfoque específico en los isquiotibiales sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Variedad de Posiciones",
            desc: "Puedes realizar el ejercicio en diferentes posiciones (horizontal, inclinada, vertical) para trabajar los músculos desde distintos ángulos.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no bloquear las rodillas para evitar lesiones en las articulaciones.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las sentadillas o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 6,
        name: "Sentadilla Hack",
        position: [
          "Ajusta la máquina para que las almohadillas estén a la altura de tus hombros.",
          "Coloca la espalda y los hombros contra las almohadillas de la máquina.",
          "Coloca los pies en la plataforma, separados a la altura de los hombros y con las puntas ligeramente hacia afuera.",
        ],
        execution: [
          "Suelta los seguros de la máquina.",
          "Inhala y baja lentamente, doblando las rodillas hasta que formen un ángulo de 90 grados o más, dependiendo de tu flexibilidad y comodidad.",
          "Mantén la posición un momento, contrayendo los cuádriceps.",
          "Empuja hacia arriba a través de los talones para volver a la posición inicial.",
          "Exhala mientras subes, manteniendo la espalda y los hombros en contacto con las almohadillas en todo momento.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies colocados correctamente en la plataforma para evitar lesiones.",
          "Mantén la espalda recta y apoyada en las almohadillas durante todo el ejercicio.",
          "No utilices el impulso para subir, utiliza los músculos de las piernas.",
          "Ajusta el peso de la máquina de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Cuádriceps",
            desc: "Principalmente trabajados durante la extensión de las rodillas.",
          },
          {
            name: "Glúteos",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Isquiotibiales",
            desc: "También se activan durante el movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas.",
          },
          {
            name: "Aislamiento Muscular",
            desc: "Permite un enfoque específico en los cuádriceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Variedad de Posiciones",
            desc: "Puedes ajustar la posición de los pies para trabajar los músculos desde distintos ángulos.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no bloquear las rodillas para evitar lesiones en las articulaciones.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las sentadillas tradicionales o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 7,
        name: "Curl de Piernas Sentado",
        position: [
          "Ajusta la máquina para que el rodillo esté a la altura de tus tobillos.",
          "Siéntate en la máquina con la espalda bien apoyada en el respaldo.",
          "Coloca las piernas encima de la almohadilla con los pies al ancho de las caderas.",
          "Sujeta las asas laterales de la máquina para mejorar la estabilidad de la parte superior del cuerpo.",
        ],
        execution: [
          "Flexiona las rodillas para llevar los talones hacia los glúteos, levantando el rodillo acolchado.",
          "Mantén la posición un momento, contrayendo los isquiotibiales.",
          "Baja lentamente el rodillo de nuevo hacia la posición inicial, extendiendo las rodillas.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies colocados correctamente debajo del rodillo para evitar lesiones.",
          "Mantén la espalda recta y apoyada en el respaldo durante todo el ejercicio.",
          "No utilices el impulso para levantar el rodillo, utiliza los músculos de las piernas.",
          "Ajusta el peso de la máquina de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Isquiotibiales",
            desc: "Principalmente trabajados durante la flexión de las rodillas.",
          },
          {
            name: "Gastrocnemio",
            desc: "Trabaja como músculo sinergista.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas.",
          },
          {
            name: "Aislamiento Muscular",
            desc: "Permite un enfoque específico en los isquiotibiales sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Variedad de Posiciones",
            desc: "Puedes realizar el ejercicio en diferentes posiciones (horizontal, inclinada, vertical) para trabajar los músculos desde distintos ángulos.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no bloquear las rodillas para evitar lesiones en las articulaciones.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las sentadillas o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 8,
        name: "Extensión a Una Pierna",
        position: [
          "Ajusta la máquina de extensión de piernas para que el rodillo esté a la altura de tus tobillos.",
          "Siéntate en la máquina con la espalda bien apoyada en el respaldo.",
          "Coloca una pierna debajo del rodillo, asegurándote de que tu rodilla esté alineada con el eje de la máquina.",
          "Sujeta las asas laterales de la máquina para mejorar la estabilidad de la parte superior del cuerpo.",
        ],
        execution: [
          "Extiende la pierna levantando el rodillo hacia arriba hasta que la pierna esté completamente extendida.",
          "Mantén la posición un momento, contrayendo los cuádriceps.",
          "Baja lentamente el rodillo de nuevo hacia la posición inicial, flexionando la rodilla.",
          "Repite este movimiento para el número deseado de repeticiones y luego cambia de pierna.",
        ],
        advices: [
          "Mantén el pie colocado correctamente debajo del rodillo para evitar lesiones.",
          "Mantén la espalda recta y apoyada en el respaldo durante todo el ejercicio.",
          "No utilices el impulso para levantar el rodillo, utiliza los músculos de las piernas.",
          "Ajusta el peso de la máquina de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Cuádriceps",
            desc: "Principalmente trabajados durante la extensión de la rodilla.",
          },
          {
            name: "Gastrocnemio",
            desc: "Trabaja como músculo sinergista.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas.",
          },
          {
            name: "Aislamiento Muscular",
            desc: "Permite un enfoque específico en los cuádriceps sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Corrección de Desequilibrios",
            desc: "Ayuda a nivelar la fuerza entre ambas piernas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no bloquear las rodillas para evitar lesiones en las articulaciones.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las sentadillas o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 9,
        name: "Sentadilla Frontal",
        position: [
          "Coloca la barra en un rack a la altura de los hombros.",
          "Coloca la barra sobre la parte frontal de los hombros, asegurándote de que esté apoyada en la parte superior del pecho.",
          "Cruza los brazos sobre la barra o utiliza un agarre de levantamiento olímpico, con los codos apuntando hacia adelante y hacia arriba.",
          "Mantén los pies separados a la altura de los hombros y las puntas ligeramente hacia afuera.",
        ],
        execution: [
          "Inhala profundamente y desciende en una sentadilla, manteniendo el torso erguido y los codos elevados.",
          "Baja hasta que las caderas estén por debajo de las rodillas, manteniendo la espalda recta y el pecho hacia arriba.",
          "Empuja a través de los talones para volver a la posición inicial, exhalando mientras subes.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies firmemente plantados en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el pecho hacia arriba durante todo el ejercicio.",
          "No utilices el impulso para subir, utiliza los músculos de las piernas.",
          "Ajusta el peso de la barra de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Cuádriceps",
            desc: "Principalmente trabajados durante la extensión de las rodillas.",
          },
          {
            name: "Glúteos",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas.",
          },
          {
            name: "Estabilidad y Postura",
            desc: "Ayuda a mejorar la estabilidad y la postura debido a la posición erguida del torso.",
          },
          {
            name: "Transferencia a Otros Deportes",
            desc: "Beneficia a deportes que requieren fuerza y estabilidad en las piernas, como el levantamiento olímpico y el atletismo.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no bloquear las rodillas para evitar lesiones en las articulaciones.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las sentadillas traseras o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 10,
        name: "Peso Muerto Rumano (Piernas Rectas) con Mancuernas",
        position: [
          "Coloca una mancuerna en cada mano, con las palmas hacia adentro.",
          "Párate con los pies separados a la anchura de los hombros y los dedos de los pies mirando hacia adelante.",
          "Mantén una ligera flexión en las rodillas y empuja el pecho hacia afuera.",
        ],
        execution: [
          "Inclínate hacia adelante desde las caderas, manteniendo la espalda recta y las piernas rígidas.",
          "Baja las mancuernas a lo largo de las piernas hasta sentir un estiramiento en los isquiotibiales.",
          "Mantén la posición un momento, contrayendo los glúteos y los isquiotibiales.",
          "Vuelve a la posición inicial empujando las caderas hacia adelante y levantando el torso.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies firmemente plantados en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el core tenso durante todo el ejercicio.",
          "No utilices el impulso para levantar las mancuernas, utiliza los músculos de las piernas.",
          "Ajusta el peso de las mancuernas de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Isquiotibiales",
            desc: "Principalmente trabajados durante la flexión de las caderas.",
          },
          {
            name: "Glúteos",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Espalda Baja",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de la cadena posterior.",
          },
          {
            name: "Aislamiento Muscular",
            desc: "Permite un enfoque específico en los isquiotibiales y glúteos sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Mejora de la Flexibilidad",
            desc: "Aumenta la flexibilidad de los isquiotibiales debido al amplio rango de movimiento.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no bloquear las rodillas para evitar lesiones en las articulaciones.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el peso muerto convencional o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 11,
        name: "Peso Muerto Rumano (Piernas Rectas) con Barra",
        position: [
          "Coloca una barra en el suelo frente a ti.",
          "Párate con los pies separados a la anchura de los hombros y los dedos de los pies mirando hacia adelante.",
          "Agarra la barra con un agarre prono (palmas hacia abajo) y las manos a la anchura de los hombros.",
          "Mantén una ligera flexión en las rodillas y empuja el pecho hacia afuera.",
        ],
        execution: [
          "Inclínate hacia adelante desde las caderas, manteniendo la espalda recta y las piernas rígidas.",
          "Baja la barra a lo largo de las piernas hasta sentir un estiramiento en los isquiotibiales.",
          "Mantén la posición un momento, contrayendo los glúteos y los isquiotibiales.",
          "Vuelve a la posición inicial empujando las caderas hacia adelante y levantando el torso.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies firmemente plantados en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el core tenso durante todo el ejercicio.",
          "No utilices el impulso para levantar la barra, utiliza los músculos de las piernas.",
          "Ajusta el peso de la barra de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Isquiotibiales",
            desc: "Principalmente trabajados durante la flexión de las caderas.",
          },
          {
            name: "Glúteos",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Espalda Baja",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de la cadena posterior.",
          },
          {
            name: "Aislamiento Muscular",
            desc: "Permite un enfoque específico en los isquiotibiales y glúteos sin la intervención de otros grupos musculares grandes.",
          },
          {
            name: "Mejora de la Flexibilidad",
            desc: "Aumenta la flexibilidad de los isquiotibiales debido al amplio rango de movimiento.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no bloquear las rodillas para evitar lesiones en las articulaciones.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el peso muerto convencional o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 12,
        name: "Sentadilla Goblet con Mancuerna",
        position: [
          "Sostén una mancuerna verticalmente con ambas manos, agarrándola por uno de los extremos.",
          "Coloca los pies separados a la anchura de los hombros y las puntas ligeramente hacia afuera.",
          "Mantén la mancuerna cerca del pecho, con los codos apuntando hacia abajo.",
        ],
        execution: [
          "Inhala profundamente y desciende en una sentadilla, manteniendo el torso erguido y la mancuerna cerca del pecho.",
          "Baja hasta que las caderas estén por debajo de las rodillas, manteniendo la espalda recta y el pecho hacia arriba.",
          "Empuja a través de los talones para volver a la posición inicial, exhalando mientras subes.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies firmemente plantados en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el pecho hacia arriba durante todo el ejercicio.",
          "No utilices el impulso para subir, utiliza los músculos de las piernas.",
          "Ajusta el peso de la mancuerna de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Cuádriceps",
            desc: "Principalmente trabajados durante la extensión de las rodillas.",
          },
          {
            name: "Glúteos",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas.",
          },
          {
            name: "Estabilidad y Postura",
            desc: "Ayuda a mejorar la estabilidad y la postura debido a la posición erguida del torso.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en casa o en el gimnasio con una mancuerna o kettlebell.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no bloquear las rodillas para evitar lesiones en las articulaciones.",
          },
        ],
      },
      {
        id: 13,
        name: "Salto Rodillas al Pecho",
        position: [
          "Párate con los pies separados a una distancia algo menor al ancho de los hombros.",
          "Mantén la parte superior de tu cuerpo vertical y la vista al frente.",
          "Relaja los brazos y contrae ligeramente los abdominales.",
        ],
        execution: [
          "Salta verticalmente hacia arriba balanceando un poco los brazos.",
          "Extiende todo tu cuerpo y luego agrúpate en el aire.",
          "Poco antes de alcanzar el punto más alto del salto, lleva tus rodillas hacia el pecho.",
          "Trata de mantener la parte superior de tu cuerpo lo más recta posible y levanta tus rodillas lo más alto posible.",
          "Extiéndete otra vez dejando la parte superior de tu cuerpo, las rodillas y los pies en una línea vertical.",
          "Rebota con la punta de tus pies, sin doblar las rodillas demasiado.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies firmemente plantados en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el core tenso durante todo el ejercicio.",
          "No utilices el impulso para levantar las rodillas, utiliza los músculos de las piernas.",
          "Ajusta la altura del salto de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Cuádriceps",
            desc: "Principalmente trabajados durante el salto.",
          },
          {
            name: "Isquiotibiales",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio.",
          },
          {
            name: "Aumento de la Potencia",
            desc: "Incrementa la potencia explosiva de las piernas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no bloquear las rodillas para evitar lesiones en las articulaciones.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como los saltos en la caja o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 14,
        name: "Burpees",
        position: [
          "Párate con los pies separados a la anchura de los hombros y los brazos a los lados.",
          "Mantén la espalda recta y el core contraído.",
        ],
        execution: [
          "Sentadilla y Plancha: Baja en una sentadilla profunda y coloca las manos en el suelo frente a ti. Salta con los pies hacia atrás para llegar a una posición de plancha.",
          "Flexión de Brazos: Realiza una flexión de brazos, bajando el pecho hacia el suelo.",
          "Regreso a Sentadilla: Salta con los pies hacia adelante para volver a la posición de sentadilla.",
          "Salto Vertical: Desde la posición de sentadilla, salta explosivamente hacia arriba, extendiendo los brazos por encima de la cabeza.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies firmemente plantados en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el core tenso durante todo el ejercicio.",
          "No utilices el impulso para realizar los movimientos, utiliza los músculos de las piernas y el core.",
          "Ajusta la velocidad de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Cuádriceps",
            desc: "Principalmente trabajados durante la sentadilla y el salto.",
          },
          {
            name: "Pectorales y Tríceps",
            desc: "Trabajados durante la flexión de brazos.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
          {
            name: "Glúteos e Isquiotibiales",
            desc: "Trabajan como músculos sinergistas durante la sentadilla y el salto.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de todo el cuerpo.",
          },
          {
            name: "Mejora de la Condición Física",
            desc: "Aumenta la resistencia cardiovascular y la capacidad aeróbica.",
          },
          {
            name: "Quema de Calorías",
            desc: "Ayuda a quemar calorías y a mejorar la composición corporal.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no bloquear las rodillas para evitar lesiones en las articulaciones.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como los saltos en la caja o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 15,
        name: "Sentadillas con Propio Peso",
        position: [
          "Párate con los pies separados a la anchura de los hombros y las puntas ligeramente hacia afuera.",
          "Mantén la espalda recta y el core contraído.",
          "Extiende los brazos frente a ti para mantener el equilibrio.",
        ],
        execution: [
          "Inhala profundamente y desciende en una sentadilla, empujando las caderas hacia atrás y doblando las rodillas.",
          "Baja hasta que las caderas estén por debajo de las rodillas, manteniendo la espalda recta y el pecho hacia arriba.",
          "Empuja a través de los talones para volver a la posición inicial, exhalando mientras subes.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies firmemente plantados en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el pecho hacia arriba durante todo el ejercicio.",
          "No utilices el impulso para subir, utiliza los músculos de las piernas.",
          "Ajusta la profundidad de la sentadilla de acuerdo con tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Cuádriceps",
            desc: "Principalmente trabajados durante la extensión de las rodillas.",
          },
          {
            name: "Glúteos",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Isquiotibiales",
            desc: "También se activan durante el movimiento.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas.",
          },
          {
            name: "Mejora de la Flexibilidad",
            desc: "Aumenta la flexibilidad de las caderas y las rodillas.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar sin necesidad de equipo adicional.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no bloquear las rodillas para evitar lesiones en las articulaciones.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las sentadillas asistidas o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 16,
        name: "1.5 Repeticiones de Sentadillas con Propio Peso",
        position: [
          "Párate con los pies separados a la anchura de los hombros y las puntas ligeramente hacia afuera.",
          "Mantén la espalda recta y el core contraído.",
          "Extiende los brazos frente a ti para mantener el equilibrio.",
        ],
        execution: [
          "Inhala profundamente y desciende en una sentadilla, empujando las caderas hacia atrás y doblando las rodillas.",
          "Baja hasta que las caderas estén por debajo de las rodillas, manteniendo la espalda recta y el pecho hacia arriba.",
          "Desde esta posición, sube hasta la mitad del camino hacia la posición inicial.",
          "Baja nuevamente hasta que las caderas estén por debajo de las rodillas.",
          "Finalmente, empuja a través de los talones para volver a la posición inicial.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies firmemente plantados en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el pecho hacia arriba durante todo el ejercicio.",
          "No utilices el impulso para subir, utiliza los músculos de las piernas.",
          "Ajusta la profundidad de la sentadilla de acuerdo con tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Cuádriceps",
            desc: "Principalmente trabajados durante la extensión de las rodillas.",
          },
          {
            name: "Glúteos",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Isquiotibiales",
            desc: "También se activan durante el movimiento.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas.",
          },
          {
            name: "Mayor Tensión Muscular",
            desc: "La pausa y el movimiento adicional aumentan el tiempo bajo tensión, lo que puede mejorar la hipertrofia muscular.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar sin necesidad de equipo adicional.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no bloquear las rodillas para evitar lesiones en las articulaciones.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las sentadillas asistidas o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 17,
        name: "Sentadillas con Balón Medicinal",
        position: [
          "Sostén un balón medicinal con ambas manos, manteniéndolo cerca del pecho.",
          "Coloca los pies separados a la anchura de los hombros y las puntas ligeramente hacia afuera.",
          "Mantén la espalda recta y el core contraído.",
        ],
        execution: [
          "Inhala profundamente y desciende en una sentadilla, empujando las caderas hacia atrás y doblando las rodillas.",
          "Baja hasta que las caderas estén por debajo de las rodillas, manteniendo la espalda recta y el pecho hacia arriba.",
          "Empuja a través de los talones para volver a la posición inicial, exhalando mientras subes.",
          "Mantén el balón medicinal cerca del pecho durante todo el movimiento.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies firmemente plantados en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el pecho hacia arriba durante todo el ejercicio.",
          "No utilices el impulso para subir, utiliza los músculos de las piernas.",
          "Ajusta el peso del balón medicinal de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Cuádriceps",
            desc: "Principalmente trabajados durante la extensión de las rodillas.",
          },
          {
            name: "Glúteos",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Isquiotibiales",
            desc: "También se activan durante el movimiento.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido al uso del balón medicinal.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar con un balón medicinal.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no bloquear las rodillas para evitar lesiones en las articulaciones.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las sentadillas tradicionales o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 18,
        name: "Sentadillas Búlgaras con Barra",
        position: [
          "Coloca una barra sobre tus trapecios, detrás de tu cabeza, asegurándote de que esté bien equilibrada.",
          "Colócate de espaldas a un banco o una silla, con los pies separados a la anchura de los hombros.",
          "Lleva una pierna hacia atrás y apoya el empeine del pie trasero sobre el banco.",
          "Mantén la espalda recta y el core contraído.",
        ],
        execution: [
          "Inhala profundamente y desciende en una sentadilla, doblando la rodilla de la pierna delantera.",
          "Baja hasta que la rodilla de la pierna trasera esté cerca del suelo, manteniendo la espalda recta y el pecho hacia arriba.",
          "Empuja a través del talón de la pierna delantera para volver a la posición inicial, exhalando mientras subes.",
          "Repite este movimiento para el número deseado de repeticiones y luego cambia de pierna.",
        ],
        advices: [
          "Mantén el pie delantero firmemente plantado en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el pecho hacia arriba durante todo el ejercicio.",
          "No utilices el impulso para subir, utiliza los músculos de las piernas.",
          "Ajusta la altura del banco de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Cuádriceps",
            desc: "Principalmente trabajados durante la extensión de la rodilla de la pierna delantera.",
          },
          {
            name: "Glúteos",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Isquiotibiales",
            desc: "También se activan durante el movimiento.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la naturaleza unilateral del ejercicio.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar con una barra.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no bloquear las rodillas para evitar lesiones en las articulaciones.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las sentadillas tradicionales o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 19,
        name: "Sentadillas Búlgaras con Propio Peso",
        position: [
          "Colócate de espaldas a un banco o una silla, con los pies separados a la anchura de los hombros.",
          "Lleva una pierna hacia atrás y apoya el empeine del pie trasero sobre el banco.",
          "Mantén la espalda recta y el core contraído.",
        ],
        execution: [
          "Inhala profundamente y desciende en una sentadilla, doblando la rodilla de la pierna delantera.",
          "Baja hasta que la rodilla de la pierna trasera esté cerca del suelo, manteniendo la espalda recta y el pecho hacia arriba.",
          "Empuja a través del talón de la pierna delantera para volver a la posición inicial, exhalando mientras subes.",
          "Repite este movimiento para el número deseado de repeticiones y luego cambia de pierna.",
        ],
        advices: [
          "Mantén el pie delantero firmemente plantado en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el pecho hacia arriba durante todo el ejercicio.",
          "No utilices el impulso para subir, utiliza los músculos de las piernas.",
          "Ajusta la altura del banco de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Cuádriceps",
            desc: "Principalmente trabajados durante la extensión de la rodilla de la pierna delantera.",
          },
          {
            name: "Glúteos",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Isquiotibiales",
            desc: "También se activan durante el movimiento.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la naturaleza unilateral del ejercicio.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar sin necesidad de equipo adicional.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no bloquear las rodillas para evitar lesiones en las articulaciones.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las sentadillas tradicionales o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 20,
        name: "Sentadillas con Mini Banda",
        position: [
          "Coloca una mini banda alrededor de ambas piernas, justo por encima de las rodillas.",
          "Coloca los pies separados a la anchura de los hombros y las puntas ligeramente hacia afuera.",
          "Mantén la espalda recta y el core contraído.",
        ],
        execution: [
          "Inhala profundamente y desciende en una sentadilla, empujando las caderas hacia atrás y doblando las rodillas.",
          "Baja hasta que las caderas estén por debajo de las rodillas, manteniendo la espalda recta y el pecho hacia arriba.",
          "Empuja a través de los talones para volver a la posición inicial, exhalando mientras subes.",
          "Mantén la mini banda tensa durante todo el movimiento, empujando las rodillas hacia afuera.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies firmemente plantados en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el pecho hacia arriba durante todo el ejercicio.",
          "No utilices el impulso para subir, utiliza los músculos de las piernas.",
          "Ajusta la resistencia de la mini banda de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Cuádriceps",
            desc: "Principalmente trabajados durante la extensión de las rodillas.",
          },
          {
            name: "Glúteos",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Isquiotibiales",
            desc: "También se activan durante el movimiento.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la resistencia adicional de la mini banda.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar con una mini banda.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no bloquear las rodillas para evitar lesiones en las articulaciones.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las sentadillas tradicionales o el uso de bandas de resistencia más ligeras.",
          },
        ],
      },
      {
        id: 21,
        name: "Sentadillas con Salto",
        position: [
          "Coloca los pies separados a la anchura de los hombros y las puntas ligeramente hacia afuera.",
          "Mantén la espalda recta y el core contraído.",
          "Coloca las manos a los lados del cuerpo o delante del pecho para mantener el equilibrio.",
        ],
        execution: [
          "Inhala profundamente y desciende en una sentadilla, empujando las caderas hacia atrás y doblando las rodillas.",
          "Baja hasta que las caderas estén por debajo de las rodillas, manteniendo la espalda recta y el pecho hacia arriba.",
          "Desde la posición de sentadilla, impulsa tu cuerpo hacia arriba en un salto explosivo, extendiendo completamente las piernas.",
          "Aterriza suavemente en la posición de sentadilla, absorbiendo el impacto con las rodillas ligeramente flexionadas.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies firmemente plantados en el suelo al aterrizar para evitar desequilibrios.",
          "Mantén la espalda recta y el pecho hacia arriba durante todo el ejercicio.",
          "No utilices el impulso para subir, utiliza los músculos de las piernas.",
          "Ajusta la altura del salto de acuerdo con tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Cuádriceps",
            desc: "Principalmente trabajados durante la extensión de las rodillas.",
          },
          {
            name: "Glúteos",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Isquiotibiales",
            desc: "También se activan durante el movimiento.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la naturaleza explosiva del ejercicio.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar sin necesidad de equipo adicional.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no bloquear las rodillas para evitar lesiones en las articulaciones.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las sentadillas tradicionales o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 22,
        name: "Sentadillas Isométricas Apoyado Sobre la Pared",
        position: [
          "Colócate de pie, de espaldas a una pared, con los pies separados a la anchura de los hombros.",
          "Asegúrate de que tus pies estén a una distancia adecuada de la pared para que puedas apoyar completamente la espalda sin encorvarte.",
          "Mantén la espalda recta y el core contraído.",
        ],
        execution: [
          "Desciende lentamente en una sentadilla, deslizando la espalda por la pared, hasta que tus rodillas formen un ángulo de 90 grados y tus muslos estén paralelos al suelo.",
          "Mantén esta posición durante un tiempo predeterminado (por ejemplo, 20-30 segundos).",
          "Asegúrate de que tus rodillas no sobrepasen la línea de los dedos de los pies.",
          "Para finalizar, empuja a través de los talones y desliza la espalda hacia arriba por la pared hasta volver a la posición inicial.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies firmemente plantados en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el pecho hacia arriba durante todo el ejercicio.",
          "No utilices el impulso para subir, utiliza los músculos de las piernas.",
          "Ajusta el tiempo de la contracción isométrica de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Cuádriceps",
            desc: "Principalmente trabajados durante la contracción isométrica.",
          },
          {
            name: "Glúteos",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Isquiotibiales",
            desc: "También se activan durante el movimiento.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la naturaleza estática del ejercicio.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar con una pared.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no bloquear las rodillas para evitar lesiones en las articulaciones.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las sentadillas tradicionales o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 23,
        name: "Peso Muerto con Balón Medicinal",
        position:
          "De pie, con los pies separados a la anchura de los hombros y el balón medicinal en el suelo frente a ti.",
        execution: [
          "Inhala profundamente y empuja las caderas hacia atrás, como si alguien te estuviera tirando hacia atrás con una cuerda atada a tu cintura.",
          "Mantén las rodillas ligeramente flexionadas y baja el torso hacia adelante, manteniendo la espalda recta.",
          "Con los brazos extendidos, agarra el balón medicinal con ambas manos.",
          "Levanta el balón medicinal empujando a través de los talones y extendiendo las caderas y las rodillas, exhalando mientras subes.",
          "Mantén el balón cerca del cuerpo durante todo el movimiento.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies firmemente plantados en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el pecho hacia arriba durante todo el ejercicio.",
          "No utilices el impulso para subir, utiliza los músculos de las piernas y la espalda.",
          "Ajusta el peso del balón medicinal de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Isquiotibiales",
            desc: "Principalmente trabajados durante la extensión de las caderas.",
          },
          {
            name: "Glúteos",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Espalda Baja",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas y la espalda.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido al uso del balón medicinal.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar con un balón medicinal.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no redondear la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el peso muerto tradicional o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 24,
        name: "Peso Muerto a Una Pierna",
        position: [
          "De pie, con los pies separados a la anchura de las caderas y una ligera flexión en la rodilla de la pierna de apoyo.",
        ],
        execution: [
          "Inhala profundamente y empuja las caderas hacia atrás, como si alguien te estuviera tirando hacia atrás con una cuerda atada a tu cintura.",
          "Mantén la rodilla de la pierna de apoyo ligeramente flexionada y baja el torso hacia adelante, manteniendo la espalda recta.",
          "Levanta la pierna opuesta hacia atrás, manteniéndola alineada con el torso.",
          "Baja el peso (o tus manos) hacia el suelo, manteniendo la espalda recta y el core contraído.",
          "Empuja a través del talón de la pierna de apoyo para volver a la posición inicial, exhalando mientras subes.",
          "Repite este movimiento para el número deseado de repeticiones y luego cambia de pierna.",
        ],
        advices: [
          "Mantén el pie de apoyo firmemente plantado en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el pecho hacia arriba durante todo el ejercicio.",
          "No utilices el impulso para subir, utiliza los músculos de las piernas y la espalda.",
          "Ajusta el peso de la mancuerna o kettlebell de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Isquiotibiales",
            desc: "Principalmente trabajados durante la extensión de las caderas.",
          },
          {
            name: "Glúteos",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Espalda Baja",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas y la espalda.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la naturaleza unilateral del ejercicio.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar con una mancuerna, kettlebell o sin peso adicional.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no redondear la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el peso muerto tradicional o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 25,
        name: "Sentadillas Sumo con Kettlebell",
        position: [
          "Coloca los pies más separados que la anchura de los hombros, con las puntas ligeramente hacia afuera.",
          "Sostén una kettlebell con ambas manos, manteniéndola cerca del suelo entre tus piernas.",
        ],
        execution: [
          "Inhala profundamente y desciende en una sentadilla, empujando las caderas hacia atrás y doblando las rodillas.",
          "Baja hasta que las caderas estén por debajo de las rodillas, manteniendo la espalda recta y el pecho hacia arriba.",
          "Empuja a través de los talones para volver a la posición inicial, exhalando mientras subes.",
          "Mantén la kettlebell cerca del suelo durante todo el movimiento.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies firmemente plantados en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el pecho hacia arriba durante todo el ejercicio.",
          "No utilices el impulso para subir, utiliza los músculos de las piernas.",
          "Ajusta el peso de la kettlebell de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Cuádriceps",
            desc: "Principalmente trabajados durante la extensión de las rodillas.",
          },
          {
            name: "Glúteos",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Aductores",
            desc: "Se activan debido a la postura amplia.",
          },
          {
            name: "Isquiotibiales",
            desc: "También se activan durante el movimiento.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la postura amplia y el uso de la kettlebell.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar con una kettlebell.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no bloquear las rodillas para evitar lesiones en las articulaciones.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las sentadillas tradicionales o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 26,
        name: "Buenos Días con Barra",
        position: [
          "Coloca una barra sobre tus trapecios, detrás de tu cabeza, asegurándote de que esté bien equilibrada.",
          "Párate erguido con los pies separados a la anchura de las caderas. Mantén la espalda recta y el core contraído.",
        ],
        execution: [
          "Inhala profundamente y empuja las caderas hacia atrás, como si alguien te estuviera tirando hacia atrás con una cuerda atada a tu cintura.",
          "Mantén las rodillas ligeramente flexionadas y baja el torso hacia adelante, manteniendo la espalda recta.",
          "Baja hasta que tu torso esté casi paralelo al suelo, manteniendo la barra en su posición.",
          "Empuja a través de los talones y extiende las caderas para volver a la posición inicial, exhalando mientras subes.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies firmemente plantados en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el pecho hacia arriba durante todo el ejercicio.",
          "No utilices el impulso para subir, utiliza los músculos de las piernas y la espalda.",
          "Ajusta el peso de la barra de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Isquiotibiales",
            desc: "Principalmente trabajados durante la extensión de las caderas.",
          },
          {
            name: "Glúteos",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Espalda Baja",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas y la espalda.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la naturaleza del ejercicio.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar con una barra.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no redondear la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el peso muerto tradicional o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 27,
        name: "Puente con Propio Peso",
        position: [
          "Acuéstate boca arriba sobre una colchoneta. Dobla las rodillas y lleva los pies hacia ti, plantéandolos planos en el suelo.",
          "Extiende los brazos a los costados con las palmas hacia abajo. Mantén la espalda recta y el core contraído.",
        ],
        execution: [
          "Inhala profundamente y, apoyándote en los talones, levanta las caderas del suelo.",
          "Levanta las caderas hasta que las rodillas, las caderas y los hombros formen una línea recta.",
          "Aprieta los glúteos y mantén el core activado.",
          "Mantén esta posición durante unos segundos.",
          "Exhala y baja las caderas lentamente de vuelta a la posición inicial.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies firmemente plantados en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el pecho hacia arriba durante todo el ejercicio.",
          "No utilices el impulso para subir, utiliza los músculos de los glúteos y el core.",
          "Ajusta la duración de la contracción isométrica de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Glúteos",
            desc: "Principalmente trabajados durante la elevación de las caderas.",
          },
          {
            name: "Isquiotibiales",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
          {
            name: "Espalda Baja",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de los glúteos y el core.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la naturaleza del ejercicio.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar sin necesidad de equipo adicional.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no arquear demasiado la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el puente con una pierna o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 28,
        name: "Puentes a Una Pierna",
        position: [
          "Acuéstate boca arriba sobre una colchoneta. Dobla una rodilla y planta el pie en el suelo, mientras mantienes la otra pierna extendida hacia el techo.",
          "Extiende los brazos a los costados con las palmas hacia abajo.",
          "Mantén la espalda recta y el core contraído.",
        ],
        execution: [
          "Inhala profundamente y, apoyándote en el talón del pie que está en el suelo, levanta las caderas del suelo.",
          "Levanta las caderas hasta que las rodillas, las caderas y los hombros formen una línea recta.",
          "Aprieta los glúteos y mantén el core activado.",
          "Mantén esta posición durante unos segundos.",
          "Exhala y baja las caderas lentamente de vuelta a la posición inicial.",
          "Repite este movimiento para el número deseado de repeticiones y luego cambia de pierna.",
        ],
        advices: [
          "Mantén el pie de apoyo firmemente plantado en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el pecho hacia arriba durante todo el ejercicio.",
          "No utilices el impulso para subir, utiliza los músculos de los glúteos y el core.",
          "Ajusta la duración de la contracción isométrica de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Glúteos",
            desc: "Principalmente trabajados durante la elevación de las caderas.",
          },
          {
            name: "Isquiotibiales",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
          {
            name: "Espalda Baja",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de los glúteos y el core.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la naturaleza unilateral del ejercicio.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar sin necesidad de equipo adicional.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no arquear demasiado la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el puente con ambas piernas o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 29,
        name: "Puentes con Bandas",
        position: [
          "Coloca una mini banda alrededor de ambas piernas, justo por encima de las rodillas.",
          "Acuéstate boca arriba sobre una colchoneta.",
          "Dobla las rodillas y lleva los pies hacia ti, plantándolos planos en el suelo.",
          "Extiende los brazos a los costados con las palmas hacia abajo.",
          "Mantén la espalda recta y el core contraído.",
        ],
        execution: [
          "Inhala profundamente y, apoyándote en los talones, levanta las caderas del suelo.",
          "Levanta las caderas hasta que las rodillas, las caderas y los hombros formen una línea recta.",
          "Mantén la mini banda tensa durante todo el movimiento, empujando las rodillas hacia afuera.",
          "Aprieta los glúteos y mantén el core activado.",
          "Mantén esta posición durante unos segundos.",
          "Exhala y baja las caderas lentamente de vuelta a la posición inicial.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies firmemente plantados en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el pecho hacia arriba durante todo el ejercicio.",
          "No utilices el impulso para subir, utiliza los músculos de los glúteos y el core.",
          "Ajusta la resistencia de la mini banda de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Glúteos",
            desc: "Principalmente trabajados durante la elevación de las caderas.",
          },
          {
            name: "Isquiotibiales",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
          {
            name: "Espalda Baja",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de los glúteos y el core.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la resistencia adicional de la mini banda.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar con una mini banda.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no arquear demasiado la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el puente con una pierna o el uso de bandas de resistencia más ligeras.",
          },
        ],
      },
      {
        id: 30,
        name: "Caminata de Pato",
        position: [
          "Coloca los pies separados a la anchura de los hombros y las puntas ligeramente hacia afuera.",
          "Baja a una posición de cuclillas, doblando las rodillas y llevando las caderas hacia abajo, como si te fueras a sentar en una silla imaginaria.",
          "Mantén la espalda recta y el core contraído.",
          "Coloca las manos a los lados del cuerpo o delante del pecho para mantener el equilibrio.",
        ],
        execution: [
          "Manteniendo las caderas a la misma distancia del suelo, da un paso hacia adelante con un pie y aterriza con el pie plano.",
          "Luego, repite con el otro pie, avanzando en una marcha lenta y controlada.",
          "Mantén la posición de cuclillas durante todo el movimiento, sin levantar los dedos de los pies ni los talones.",
          "Para un desafío mayor, puedes sostener una pesa o mancuerna, pero asegúrate de no sacrificar la técnica correcta.",
          "Repite este movimiento para el número deseado de repeticiones o distancia.",
        ],
        advices: [
          "Mantén los pies firmemente plantados en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el pecho hacia arriba durante todo el ejercicio.",
          "No utilices el impulso para moverte, utiliza los músculos de las piernas.",
          "Ajusta la profundidad de la sentadilla de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Cuádriceps",
            desc: "Principalmente trabajados durante la extensión de las rodillas.",
          },
          {
            name: "Glúteos",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Isquiotibiales",
            desc: "También se activan durante el movimiento.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la naturaleza del ejercicio.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar sin necesidad de equipo adicional.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no bloquear las rodillas para evitar lesiones en las articulaciones.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las sentadillas tradicionales o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 31,
        name: "Superman en Cuadrupedia",
        position: [
          "Colócate en posición de cuadrupedia, con las manos justo debajo de los hombros y las rodillas debajo de las caderas.",
          "Mantén la espalda recta y el core contraído.",
          "Asegúrate de que la pelvis esté en una posición neutra, sin realizar retroversión o anteversión.",
        ],
        execution: [
          "Inhala profundamente y extiende el brazo derecho hacia adelante mientras extiendes la pierna izquierda hacia atrás.",
          "Mantén el brazo y la pierna alineados con el torso, sin elevarlos demasiado.",
          "Mantén la posición durante unos segundos, asegurándote de que el core esté activado y la espalda recta.",
          "Exhala y vuelve lentamente a la posición inicial.",
          "Repite el movimiento con el brazo izquierdo y la pierna derecha.",
          "Alterna los lados para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén el equilibrio distribuyendo el peso de manera uniforme entre las manos y las rodillas.",
          "Mantén la espalda recta y el pecho hacia arriba durante todo el ejercicio.",
          "No utilices el impulso para mover el brazo y la pierna, utiliza los músculos del core y la espalda.",
          "Ajusta la duración de la contracción isométrica de acuerdo con tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Espalda Baja",
            desc: "Principalmente trabajada durante la extensión del brazo y la pierna.",
          },
          {
            name: "Glúteos",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Isquiotibiales",
            desc: "También se activan durante el movimiento.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
          {
            name: "Hombros",
            desc: "Se activan durante la extensión del brazo.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de la espalda y el core.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la naturaleza contralateral del ejercicio.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar sin necesidad de equipo adicional.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no arquear demasiado la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el puente con una pierna o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 32,
        name: "Groiners",
        position: [
          "Comienza en una posición de plancha alta, con las manos justo debajo de los hombros y el cuerpo formando una línea recta desde la cabeza hasta los talones.",
          "Mantén la espalda recta y el core contraído.",
        ],
        execution: [
          "Inhala profundamente y lleva el pie derecho hacia adelante, colocándolo justo fuera de la mano derecha.",
          "Mantén la posición durante 1 a 3 segundos, sintiendo el estiramiento en los flexores de la cadera y la ingle.",
          "Exhala y regresa el pie derecho a la posición inicial.",
          "Repite el movimiento con el pie izquierdo, llevándolo hacia adelante y colocándolo justo fuera de la mano izquierda.",
          "Alterna los lados para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén las manos firmemente plantadas en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el core activado durante todo el ejercicio.",
          "No utilices el impulso para mover las piernas, utiliza los músculos del core y las caderas.",
          "Ajusta la velocidad del movimiento de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Flexores de la Cadera",
            desc: "Principalmente trabajados durante el movimiento de las piernas.",
          },
          {
            name: "Aductores",
            desc: "Se activan debido al estiramiento en la ingle.",
          },
          {
            name: "Cuádriceps",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Isquiotibiales",
            desc: "También se activan durante el movimiento.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
          {
            name: "Hombros",
            desc: "Se activan para mantener la posición de plancha.",
          },
        ],
        benefits: [
          {
            name: "Mejora de la Flexibilidad",
            desc: "Ayuda a mejorar la flexibilidad de los flexores de la cadera y los aductores.",
          },
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos del core y las piernas.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la naturaleza dinámica del ejercicio.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar sin necesidad de equipo adicional.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no arquear demasiado la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como los estiramientos de flexores de cadera o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 33,
        name: "Hidrantes",
        position: [
          "Colócate en posición de cuadrupedia, con las manos justo debajo de los hombros y las rodillas debajo de las caderas.",
          "Mantén la espalda recta y el core contraído.",
        ],
        execution: [
          "Inhala profundamente y levanta una pierna hacia un lado, manteniendo la rodilla doblada en un ángulo de 90 grados.",
          "Levanta la pierna hasta que el muslo esté paralelo al suelo, manteniendo la espalda recta y el core activado.",
          "Mantén esta posición durante unos segundos.",
          "Exhala y baja la pierna lentamente de vuelta a la posición inicial.",
          "Repite este movimiento para el número deseado de repeticiones y luego cambia de pierna.",
        ],
        advices: [
          "Mantén las manos firmemente plantadas en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el core activado durante todo el ejercicio.",
          "No utilices el impulso para levantar la pierna, utiliza los músculos de los glúteos y el core.",
          "Ajusta la altura de la elevación de la pierna de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Glúteos",
            desc: "Principalmente trabajados durante la elevación de la pierna.",
          },
          {
            name: "Aductores",
            desc: "Se activan debido al movimiento lateral.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
          {
            name: "Espalda Baja",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de los glúteos y el core.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la naturaleza del ejercicio.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar sin necesidad de equipo adicional.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no arquear demasiado la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como los levantamientos de pierna en posición de cuadrupedia o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 34,
        name: "Elevaciones de Cadera con Máquina Smith",
        position: [
          "Coloca un banco en la entrada de la máquina Smith, paralelo a la barra.",
          "Coloca una toalla doblada sobre tus caderas para mayor comodidad.",
          "Acuéstate de espaldas en el suelo, con la parte superior de la espalda apoyada en el banco.",
          "Coloca los pies frente a ti, separados a la anchura de los hombros, con las puntas ligeramente hacia afuera.",
          "Asegúrate de que la barra esté colocada en el pliegue de tus caderas.",
          "Coloca las manos en la barra a los lados para estabilizarla.",
        ],
        execution: [
          "Inhala profundamente y empuja las caderas hacia arriba, extendiendo las caderas y levantando la barra.",
          "Levanta las caderas hasta que las rodillas, las caderas y los hombros formen una línea recta.",
          "Aprieta los glúteos en la parte superior del movimiento y mantén el core activado.",
          "Mantén esta posición durante unos segundos.",
          "Exhala y baja las caderas lentamente de vuelta a la posición inicial.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies firmemente plantados en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el pecho hacia arriba durante todo el ejercicio.",
          "No utilices el impulso para levantar la barra, utiliza los músculos de los glúteos y el core.",
          "Ajusta el peso de la barra de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Glúteos",
            desc: "Principalmente trabajados durante la elevación de las caderas.",
          },
          {
            name: "Isquiotibiales",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
          {
            name: "Espalda Baja",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de los glúteos y el core.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la naturaleza del ejercicio.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar con una máquina Smith.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no arquear demasiado la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el puente con una pierna o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 35,
        name: "Elevaciones de Cadera con Barra",
        position: [
          "Coloca un banco en la entrada de la máquina Smith, paralelo a la barra.",
          "Coloca una toalla doblada sobre tus caderas para mayor comodidad.",
          "Acuéstate de espaldas en el suelo, con la parte superior de la espalda apoyada en el banco.",
          "Coloca los pies frente a ti, separados a la anchura de los hombros, con las puntas ligeramente hacia afuera.",
          "Asegúrate de que la barra esté colocada en el pliegue de tus caderas.",
          "Coloca las manos en la barra a los lados para estabilizarla.",
        ],
        execution: [
          "Inhala profundamente y empuja las caderas hacia arriba, extendiendo las caderas y levantando la barra.",
          "Levanta las caderas hasta que las rodillas, las caderas y los hombros formen una línea recta.",
          "Aprieta los glúteos en la parte superior del movimiento y mantén el core activado.",
          "Mantén esta posición durante unos segundos.",
          "Exhala y baja las caderas lentamente de vuelta a la posición inicial.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies firmemente plantados en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el pecho hacia arriba durante todo el ejercicio.",
          "No utilices el impulso para levantar la barra, utiliza los músculos de los glúteos y el core.",
          "Ajusta el peso de la barra de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Glúteos",
            desc: "Principalmente trabajados durante la elevación de las caderas.",
          },
          {
            name: "Isquiotibiales",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
          {
            name: "Espalda Baja",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de los glúteos y el core.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la naturaleza del ejercicio.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar con una máquina Smith.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no arquear demasiado la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el puente con una pierna o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 36,
        name: "Abducciones de Cadera Sentado con Banda",
        position: [
          "Coloca una mini banda alrededor de ambas piernas, justo por encima de las rodillas.",
          "Siéntate en el borde de un banco con los pies separados a la anchura de los hombros y la espalda recta.",
          "Coloca las manos en el banco a los lados para mantener el equilibrio.",
        ],
        execution: [
          "Inhala profundamente y, usando los glúteos, empuja las rodillas hacia afuera, estirando la banda.",
          "Mantén la espalda recta y el core activado durante todo el movimiento.",
          "Haz una pausa en la posición más amplia, sintiendo la contracción en los glúteos.",
          "Exhala y lleva lentamente las piernas de vuelta a la posición inicial.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies firmemente plantados en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el pecho hacia arriba durante todo el ejercicio.",
          "No utilices el impulso para mover las piernas, utiliza los músculos de los glúteos.",
          "Ajusta la resistencia de la mini banda de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Glúteos Medios",
            desc: "Principalmente trabajados durante la abducción de las caderas.",
          },
          {
            name: "Tensor de la Fascia Lata",
            desc: "Trabaja como músculo sinergista.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de los glúteos y la cadera.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la resistencia adicional de la mini banda.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar con una mini banda.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no arquear demasiado la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las abducciones de cadera en posición de cuadrupedia o el uso de bandas de resistencia más ligeras.",
          },
        ],
      },
      {
        id: 37,
        name: "Abducciones de Cadera con Máquina de Abducción de Cadera",
        position: [
          "Siéntate en la máquina de abducción de cadera con la espalda recta y los pies apoyados en los reposapiés.",
          "Ajusta la almohadilla en la parte externa de los muslos para que esté justo por encima de las rodillas.",
          "Agarra las asas a los lados de la máquina para mantener el equilibrio.",
        ],
        execution: [
          "Inhala profundamente y, usando los músculos de los glúteos, empuja las rodillas hacia afuera, separando las piernas lateralmente.",
          "Mantén la espalda recta y el core activado durante todo el movimiento.",
          "Haz una pausa en la posición más amplia, sintiendo la contracción en los glúteos.",
          "Exhala y lleva lentamente las piernas de vuelta a la posición inicial.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies firmemente plantados en los reposapiés para evitar desequilibrios.",
          "Mantén la espalda recta y el pecho hacia arriba durante todo el ejercicio.",
          "No utilices el impulso para mover las piernas, utiliza los músculos de los glúteos.",
          "Ajusta la resistencia de la máquina de acuerdo con tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Glúteos Medios",
            desc: "Principalmente trabajados durante la abducción de las caderas.",
          },
          {
            name: "Tensor de la Fascia Lata",
            desc: "Trabaja como músculo sinergista.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de los glúteos y la cadera.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la resistencia adicional de la máquina.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier gimnasio con una máquina de abducción de cadera.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no arquear demasiado la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las abducciones de cadera en posición de cuadrupedia o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 38,
        name: "Abducción de Cadera con Polea",
        position: [
          "Ajusta la polea baja a la altura más baja posible.",
          "Coloca una tobillera en el extremo del cable y ajusta la resistencia a un nivel adecuado para ti.",
          "Ponte de pie con el lado de trabajo (la pierna que va a realizar la abducción) más cercano a la máquina.",
          "Coloca la tobillera alrededor de tu tobillo y sujeta la máquina o una barra de apoyo con la mano más cercana a ella para mantener el equilibrio.",
        ],
        execution: [
          "Inhala profundamente y, manteniendo el tronco erguido y el core estabilizado, realiza la abducción de cadera levantando la pierna lateralmente lejos del cuerpo.",
          "Mantén la rodilla de la pierna de apoyo ligeramente flexionada.",
          "Levanta la pierna tanto como sea posible sin comprometer la forma.",
          "Haz una pausa en la posición más alta, sintiendo la contracción en los glúteos.",
          "Exhala y regresa lentamente la pierna a la posición inicial sin dejar que el peso de la polea toque el suelo, manteniendo así la tensión en el músculo trabajado.",
          "Repite este movimiento para el número deseado de repeticiones y luego cambia de pierna.",
        ],
        advices: [
          "Mantén el control en todo momento para evitar balancearte.",
          "Usa un rango completo de movimiento para maximizar los beneficios del ejercicio.",
          "Respira correctamente: inhala al prepararte para levantar la pierna y exhala mientras realizas la abducción.",
          "Comienza con un peso moderado y aumenta gradualmente a medida que te sientas más fuerte.",
        ],
        muscles: [
          {
            name: "Glúteo Medio",
            desc: "Principalmente trabajado durante la abducción de la cadera.",
          },
          {
            name: "Glúteo Menor",
            desc: "También se activa durante el movimiento.",
          },
          {
            name: "Tensor de la Fascia Lata",
            desc: "Trabaja como músculo sinergista.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de los glúteos y la cadera.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la resistencia adicional de la polea.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier gimnasio con una máquina de polea baja.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no arquear demasiado la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las abducciones de cadera en posición de cuadrupedia o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 39,
        name: "Abducción de Cadera con Polea",
        position: [
          "Ajusta la polea baja a la altura más baja posible.",
          "Coloca una tobillera en el extremo del cable y ajusta la resistencia a un nivel adecuado para ti.",
          "Ponte de pie con el lado de trabajo (la pierna que va a realizar la abducción) más cercano a la máquina.",
          "Coloca la tobillera alrededor de tu tobillo y sujeta la máquina o una barra de apoyo con la mano más cercana a ella para mantener el equilibrio.",
        ],
        execution: [
          "Inhala profundamente y, manteniendo el tronco erguido y el core estabilizado, realiza la abducción de cadera levantando la pierna lateralmente lejos del cuerpo.",
          "Mantén la rodilla de la pierna de apoyo ligeramente flexionada.",
          "Levanta la pierna tanto como sea posible sin comprometer la forma.",
          "Haz una pausa en la posición más alta, sintiendo la contracción en los glúteos.",
          "Exhala y regresa lentamente la pierna a la posición inicial sin dejar que el peso de la polea toque el suelo, manteniendo así la tensión en el músculo trabajado.",
          "Repite este movimiento para el número deseado de repeticiones y luego cambia de pierna.",
        ],
        advices: [
          "Mantén el control en todo momento para evitar balancearte.",
          "Usa un rango completo de movimiento para maximizar los beneficios del ejercicio.",
          "Respira correctamente: inhala al prepararte para levantar la pierna y exhala mientras realizas la abducción.",
          "Comienza con un peso moderado y aumenta gradualmente a medida que te sientas más fuerte.",
        ],
        muscles: [
          {
            name: "Glúteo Medio",
            desc: "Principalmente trabajado durante la abducción de la cadera.",
          },
          {
            name: "Glúteo Menor",
            desc: "También se activa durante el movimiento.",
          },
          {
            name: "Tensor de la Fascia Lata",
            desc: "Trabaja como músculo sinergista.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de los glúteos y la cadera.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la resistencia adicional de la polea.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier gimnasio con una máquina de polea baja.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no arquear demasiado la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las abducciones de cadera en posición de cuadrupedia o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 40,
        name: "Elevaciones Cortas en Posición de Rana con Máquina Smith",
        position: [
          "Coloca un banco dentro de la máquina Smith, perpendicular a la barra.",
          "Coloca una toalla doblada sobre tus caderas para mayor comodidad.",
          "Acuéstate de espaldas en el suelo, con la parte superior de la espalda apoyada en el banco.",
          "Junta las plantas de los pies y acerca los talones a los glúteos, formando una posición de mariposa con las piernas.",
          "Asegúrate de que la barra esté colocada en el pliegue de tus caderas.",
          "Coloca las manos en la barra a los lados para estabilizarla.",
        ],
        execution: [
          "Inhala profundamente y empuja las caderas hacia arriba, extendiendo las caderas y levantando la barra.",
          "Levanta las caderas hasta que las rodillas, las caderas y los hombros formen una línea recta.",
          "Aprieta los glúteos en la parte superior del movimiento y mantén el core activado.",
          "Mantén esta posición durante unos segundos.",
          "Exhala y baja las caderas lentamente de vuelta a la posición inicial.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén los pies firmemente plantados en el suelo para evitar desequilibrios.",
          "Mantén la espalda recta y el pecho hacia arriba durante todo el ejercicio.",
          "No utilices el impulso para levantar la barra, utiliza los músculos de los glúteos y el core.",
          "Ajusta el peso de la barra de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Glúteos",
            desc: "Principalmente trabajados durante la elevación de las caderas.",
          },
          {
            name: "Isquiotibiales",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
          {
            name: "Espalda Baja",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de los glúteos y el core.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la naturaleza del ejercicio.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar con una máquina Smith.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no arquear demasiado la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el puente con una pierna o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 41,
        name: "Almejas Laterales con Banda",
        position: [
          "Coloca una mini banda alrededor de ambas piernas, justo por encima de las rodillas.",
          "Acuéstate de lado sobre una colchoneta.",
          "Mantén las rodillas dobladas a un ángulo de 90 grados y los pies juntos.",
          "Apoya la cabeza en tu brazo inferior y coloca la mano superior sobre la cadera para mantener el equilibrio.",
        ],
        execution: [
          "Inhala profundamente y, manteniendo los pies juntos, levanta la rodilla superior lo más alto que puedas sin mover la pelvis.",
          "Mantén la contracción en la parte superior del movimiento durante unos segundos.",
          "Exhala y baja la rodilla lentamente de vuelta a la posición inicial.",
          "Repite este movimiento para el número deseado de repeticiones y luego cambia de lado.",
        ],
        advices: [
          "Mantén el core activado para evitar que la pelvis se mueva.",
          "No utilices el impulso para levantar la rodilla, utiliza los músculos de los glúteos.",
          "Ajusta la resistencia de la mini banda de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Glúteos Medios",
            desc: "Principalmente trabajados durante la abducción de la cadera.",
          },
          {
            name: "Glúteos Menores",
            desc: "También se activan durante el movimiento.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de los glúteos y la cadera.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la resistencia adicional de la mini banda.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar con una mini banda.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no mover la pelvis para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las abducciones de cadera en posición de cuadrupedia o el uso de bandas de resistencia más ligeras.",
          },
        ],
      },
      {
        id: 42,
        name: "Levantamiento de Pierna Acostado de Lado",
        position: [
          "Acuéstate de lado sobre una colchoneta.",
          "Mantén las piernas extendidas y apiladas una sobre la otra.",
          "Apoya la cabeza en tu brazo inferior y coloca la mano superior en la cadera para mantener el equilibrio.",
        ],
        execution: [
          "Inhala profundamente y, manteniendo la pierna superior recta, levántala hacia el techo.",
          "Mantén la pierna en línea con el cuerpo y evita rotar la cadera.",
          "Haz una pausa en la parte superior del movimiento, sintiendo la contracción en los glúteos y los abductores.",
          "Exhala y baja la pierna lentamente de vuelta a la posición inicial.",
          "Repite este movimiento para el número deseado de repeticiones y luego cambia de lado.",
        ],
        advices: [
          "Mantén el core activado para evitar que la pelvis se mueva.",
          "No utilices el impulso para levantar la pierna, utiliza los músculos de los glúteos y los abductores.",
          "Ajusta la altura de la elevación de la pierna de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Glúteos Medios",
            desc: "Principalmente trabajados durante la abducción de la cadera.",
          },
          {
            name: "Glúteos Menores",
            desc: "También se activan durante el movimiento.",
          },
          {
            name: "Tensor de la Fascia Lata",
            desc: "Trabaja como músculo sinergista.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de los glúteos y la cadera.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la naturaleza del ejercicio.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar sin necesidad de equipo adicional.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no mover la pelvis para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las abducciones de cadera en posición de cuadrupedia o el uso de bandas de resistencia más ligeras.",
          },
        ],
      },
      {
        id: 43,
        name: "Elevaciones de Bíceps Femoral con Máquina GHD",
        position: [
          "Ajusta la máquina GHD (Glute-Ham Developer) para que se adapte a tu altura. La almohadilla debe estar justo debajo de tus caderas y los pies deben estar asegurados en los reposapiés.",
          "Coloca los pies en las almohadillas de los tobillos con los dedos de los pies contra la placa mientras usas las manos para sujetar las almohadillas delanteras.",
          "Deja que tus rodillas caigan un poco por debajo de las almohadillas.",
          "Con la parte delantera de las rodillas presionada contra las almohadillas, lleva el cuerpo perpendicular al suelo.",
          "Mantén la espalda y las caderas rectas y alineadas.",
        ],
        execution: [
          "Inhala profundamente y, manteniendo la espalda recta, baja el torso hacia el suelo doblando las rodillas.",
          "Baja hasta que tu cuerpo esté paralelo al suelo.",
          "Exhala y utiliza los isquiotibiales y los glúteos para levantar el torso de vuelta a la posición inicial.",
          "Mantén el core activado durante todo el movimiento.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén el control en todo momento para evitar balancearte.",
          "Usa un rango completo de movimiento para maximizar los beneficios del ejercicio.",
          "Respira correctamente: inhala al bajar y exhala al subir.",
          "Comienza con un peso moderado y aumenta gradualmente a medida que te sientas más fuerte.",
        ],
        muscles: [
          {
            name: "Isquiotibiales",
            desc: "Principalmente trabajados durante la extensión de la cadera.",
          },
          {
            name: "Glúteos",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
          {
            name: "Espalda Baja",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de los isquiotibiales y los glúteos.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la naturaleza del ejercicio.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier gimnasio con una máquina GHD.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no arquear demasiado la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como el peso muerto rumano o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 44,
        name: "Step Up con Mancuernas",
        position: [
          "Coloca un banco o una plataforma estable frente a ti.",
          "Sostén una mancuerna en cada mano, con los brazos extendidos a los lados.",
          "Mantén los pies separados a la anchura de los hombros y el core activado.",
        ],
        execution: [
          "Inhala profundamente y coloca un pie en la plataforma, asegurándote de que todo el pie esté plano sobre la superficie.",
          "Empuja con el pie delantero para levantar tu cuerpo, llevando la otra pierna hacia arriba hasta que ambas piernas estén completamente extendidas y estés de pie sobre la plataforma.",
          "Haz una pausa en la parte superior del movimiento, manteniendo el equilibrio.",
          "Exhala y baja lentamente la pierna que subiste primero hasta que tu pie esté en el suelo nuevamente.",
          "Baja la otra pierna para volver a la posición inicial.",
          "Alterna las piernas y repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén el pecho hacia arriba y la espalda recta durante todo el ejercicio.",
          "No utilices el impulso para subir, utiliza los músculos de las piernas y el core.",
          "Ajusta la altura de la plataforma y el peso de las mancuernas de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Cuádriceps",
            desc: "Principalmente trabajados durante la extensión de la rodilla.",
          },
          {
            name: "Glúteos",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Isquiotibiales",
            desc: "También se activan durante el movimiento.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas y los glúteos.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la naturaleza del ejercicio.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar con un banco o plataforma y un par de mancuernas.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no arquear demasiado la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las sentadillas o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 45,
        name: "Caminata Lateral con Minibanda",
        position: [
          "Coloca una minibanda alrededor de ambas piernas, justo por encima de las rodillas.",
          "Coloca los pies separados a la anchura de los hombros y asegúrate de que no haya holgura en la banda.",
          "Doble ligeramente las rodillas, colocándote en una postura atlética en una posición de media sentadilla.",
          "Distribuye tu peso en ambos pies.",
        ],
        execution: [
          "Manteniendo la posición de media sentadilla, da un paso lateral con un pie.",
          "Sigue con el otro pie, manteniendo la tensión en la minibanda.",
          "Realiza la cantidad deseada de pasos hacia un lado y luego repite con el lado opuesto o alterna entre cada lado hasta completar todas las repeticiones.",
        ],
        advices: [
          "Mantén el core activado para evitar que la pelvis se mueva.",
          "No utilices el impulso para mover las piernas, utiliza los músculos de los glúteos.",
          "Ajusta la resistencia de la minibanda de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Glúteos Medios",
            desc: "Principalmente trabajados durante la abducción de la cadera.",
          },
          {
            name: "Glúteos Menores",
            desc: "También se activan durante el movimiento.",
          },
          {
            name: "Tensor de la Fascia Lata",
            desc: "Trabaja como músculo sinergista.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de los glúteos y la cadera.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la resistencia adicional de la minibanda.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar con una minibanda.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no mover la pelvis para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las abducciones de cadera en posición de cuadrupedia o el uso de bandas de resistencia más ligeras.",
          },
        ],
      },
      {
        id: 46,
        name: "Elevaciones de Rodilla",
        position: [
          "Párate derecho con los pies separados a la anchura de las caderas.",
          "Mantén los brazos a los lados del cuerpo o colócalos en la cintura para mayor estabilidad.",
          "Activa el core para mantener una postura estable.",
        ],
        execution: [
          "Inhala profundamente y levanta una rodilla hacia el pecho, manteniendo el pie flexionado.",
          "Levanta la rodilla lo más alto posible sin inclinar el torso hacia atrás.",
          "Haz una pausa en la parte superior del movimiento, sintiendo la contracción en los músculos del core y la cadera.",
          "Exhala y baja la pierna lentamente de vuelta a la posición inicial.",
          "Alterna las piernas y repite el movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén el core activado para evitar que la pelvis se mueva.",
          "No utilices el impulso para levantar la rodilla, utiliza los músculos del core y la cadera.",
          "Ajusta la altura de la elevación de la rodilla de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Flexores de la Cadera",
            desc: "Principalmente trabajados durante la elevación de la rodilla.",
          },
          {
            name: "Cuádriceps",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
          {
            name: "Glúteos",
            desc: "También se activan durante el movimiento.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos del core y la cadera.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la naturaleza del ejercicio.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar sin necesidad de equipo adicional.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no arquear demasiado la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las elevaciones de rodilla en posición de cuadrupedia o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 47,
        name: "Columpios con Kettlebell",
        position: [
          "Colócate de pie con los pies separados a la anchura de los hombros.",
          "Sostén el kettlebell con ambas manos, con los brazos extendidos frente a ti.",
          "Mantén las rodillas ligeramente flexionadas y el core activado.",
        ],
        execution: [
          "Inhala profundamente y, manteniendo la espalda recta, flexiona las caderas hacia atrás, llevando el kettlebell entre las piernas.",
          "Empuja las caderas hacia adelante de manera explosiva, utilizando la fuerza de los glúteos y los isquiotibiales para levantar el kettlebell hasta la altura del pecho.",
          "Mantén los brazos rectos y deja que el kettlebell se balancee hacia adelante y hacia arriba.",
          "Exhala mientras el kettlebell alcanza la altura máxima.",
          "Deja que el kettlebell vuelva a bajar de manera controlada, flexionando las caderas nuevamente para absorber el movimiento.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén el core activado para evitar que la espalda se arquee.",
          "No utilices los brazos para levantar el kettlebell, el movimiento debe provenir de las caderas.",
          "Ajusta el peso del kettlebell de acuerdo a tus capacidades.",
          "No realices el ejercicio demasiado rápido o de manera brusca para evitar lesiones.",
        ],
        muscles: [
          {
            name: "Glúteos",
            desc: "Principalmente trabajados durante la extensión de las caderas.",
          },
          {
            name: "Isquiotibiales",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
          {
            name: "Espalda Baja",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
          {
            name: "Hombros",
            desc: "Se activan durante el balanceo del kettlebell.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas, glúteos y core.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la naturaleza del ejercicio.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar con un kettlebell.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no arquear demasiado la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como los deadlifts o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 48,
        name: "Contragolpe con Cable",
        position: [
          "Ajusta la polea baja a la altura más baja posible.",
          "Coloca una tobillera en el extremo del cable y ajusta la resistencia a un nivel adecuado para ti.",
          "Ponte de pie con el lado de trabajo (la pierna que va a realizar el contragolpe) más cercano a la máquina.",
          "Coloca la tobillera alrededor de tu tobillo y sujeta la máquina o una barra de apoyo con la mano más cercana a ella para mantener el equilibrio.",
        ],
        execution: [
          "Inhala profundamente y, manteniendo el tronco erguido y el core estabilizado, realiza el contragolpe extendiendo la pierna hacia atrás en un arco controlado.",
          "Mantén la rodilla de la pierna de apoyo ligeramente flexionada.",
          "Extiende la pierna tanto como sea posible sin comprometer la forma.",
          "Haz una pausa en la posición más alta, sintiendo la contracción en los glúteos.",
          "Exhala y regresa lentamente la pierna a la posición inicial sin dejar que el peso de la polea toque el suelo, manteniendo así la tensión en el músculo trabajado.",
          "Repite este movimiento para el número deseado de repeticiones y luego cambia de pierna.",
        ],
        advices: [
          "Mantén el control en todo momento para evitar balancearte.",
          "Usa un rango completo de movimiento para maximizar los beneficios del ejercicio.",
          "Respira correctamente: inhala al prepararte para extender la pierna y exhala mientras realizas el contragolpe.",
          "Comienza con un peso moderado y aumenta gradualmente a medida que te sientas más fuerte.",
        ],
        muscles: [
          {
            name: "Glúteos",
            desc: "Principalmente trabajados durante la extensión de la cadera.",
          },
          {
            name: "Isquiotibiales",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
          {
            name: "Espalda Baja",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de los glúteos y los isquiotibiales.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la resistencia adicional del cable.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier gimnasio con una máquina de polea baja.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no arquear demasiado la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como los levantamientos de pierna en posición de cuadrupedia o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 49,
        name: "Patadas de Burro",
        position: [
          "Colócate en una posición de cuadrupedia (a cuatro patas) en el suelo, con las manos alineadas con los hombros y las rodillas alineadas con las caderas.",
          "Mantén la espalda recta y el core activado para estabilizar el torso.",
        ],
        execution: [
          "Inhala profundamente y, manteniendo el tronco erguido y el core estabilizado, levanta una pierna hacia atrás y hacia arriba, extendiéndola completamente.",
          "Mantén la rodilla de la pierna de apoyo ligeramente flexionada.",
          "Extiende la pierna tanto como sea posible sin comprometer la forma.",
          "Haz una pausa en la posición más alta, sintiendo la contracción en los glúteos.",
          "Exhala y regresa lentamente la pierna a la posición inicial sin dejar que la rodilla toque el suelo, manteniendo así la tensión en el músculo trabajado.",
          "Repite este movimiento para el número deseado de repeticiones y luego cambia de pierna.",
        ],
        advices: [
          "Mantén el control en todo momento para evitar balancearte.",
          "Usa un rango completo de movimiento para maximizar los beneficios del ejercicio.",
          "Respira correctamente: inhala al prepararte para extender la pierna y exhala mientras realizas la patada.",
          "Comienza con un peso corporal y, si es necesario, añade resistencia con bandas elásticas o pesas en los tobillos a medida que te sientas más fuerte.",
        ],
        muscles: [
          {
            name: "Glúteos",
            desc: "Principalmente trabajados durante la extensión de la cadera.",
          },
          {
            name: "Isquiotibiales",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
          {
            name: "Espalda Baja",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de los glúteos y los isquiotibiales.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la necesidad de mantener la estabilidad.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar sin necesidad de equipo especial.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no arquear demasiado la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como los levantamientos de pierna en posición de cuadrupedia o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 50,
        name: "Elevaciones de Cadera Acostado Lateralmente",
        position: [
          "Acuéstate de costado con las piernas una encima de la otra.",
          "Apoya el codo y el antebrazo en el suelo, con el brazo apuntando en dirección opuesta a ti.",
          "Alinea el codo debajo del hombro.",
          "Dobla las rodillas en un ángulo de 90 grados para que tus pies estén detrás de ti, manteniéndolos apilados.",
        ],
        execution: [
          "Inhala profundamente y, manteniendo el core activado, levanta las caderas hacia arriba desde el suelo.",
          "Mantén tu cuerpo en línea durante todo el movimiento.",
          "En el mismo movimiento, contrae los glúteos para levantar la rodilla superior hacia el techo, manteniendo la rodilla inferior en el suelo.",
          "Haz una pausa en la posición más alta, sintiendo la contracción en los glúteos.",
          "Exhala y baja lentamente las caderas a la posición inicial sin dejar que toquen el suelo, manteniendo así la tensión en el músculo trabajado.",
          "Repite este movimiento para el número deseado de repeticiones y luego cambia de lado.",
        ],
        advices: [
          "Mantén el control en todo momento para evitar balancearte.",
          "Usa un rango completo de movimiento para maximizar los beneficios del ejercicio.",
          "Respira correctamente: inhala al prepararte para levantar las caderas y exhala mientras realizas la elevación.",
          "Comienza con el peso corporal y, si es necesario, añade resistencia con bandas elásticas o pesas en los tobillos a medida que te sientas más fuerte.",
        ],
        muscles: [
          {
            name: "Glúteos",
            desc: "Principalmente trabajados durante la elevación de la cadera.",
          },
          {
            name: "Isquiotibiales",
            desc: "Trabajan como músculos sinergistas.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
          {
            name: "Oblicuos",
            desc: "Se activan para mantener la estabilidad lateral.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de los glúteos y los isquiotibiales.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la necesidad de mantener la estabilidad.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar sin necesidad de equipo especial.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no arquear demasiado la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las elevaciones de cadera tradicionales o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 51,
        name: "Sentadilla Posturas Funcionales",
        position: [
          "Párese recto con los pies separados al ancho de los hombros.",
          "Mantén el core activado y la espalda recta.",
        ],
        execution: [
          "Inhala profundamente y, manteniendo el tronco erguido, baja las caderas hacia atrás y hacia abajo como si te fueras a sentar en una silla.",
          "Baja hasta una posición profunda y sentada en cuclillas.",
          "Mientras estás en la posición inferior, toma un brazo y coloca el codo en la misma rodilla lateral.",
          "Coloca esa mano en el suelo fuera del pie.",
          "Con el brazo opuesto, estira hacia arriba y hacia atrás hacia el cielo, girando la parte superior de tu cuerpo.",
          "Vuelve a bajar el brazo y repite con el lado opuesto.",
          "Cuando termines, empuja hacia arriba con los pies para volver a la posición de pie.",
        ],
        advices: [
          "Mantén el control en todo momento para evitar balancearte.",
          "Usa un rango completo de movimiento para maximizar los beneficios del ejercicio.",
          "Respira correctamente: inhala al prepararte para bajar y exhala mientras realizas la sentadilla.",
          "Comienza con el peso corporal y, si es necesario, añade resistencia con pesas a medida que te sientas más fuerte.",
        ],
        muscles: [
          {
            name: "Muslos",
            desc: "Principalmente trabajados durante la bajada y subida.",
          },
          {
            name: "Glúteos",
            desc: "Trabajan durante la extensión de la cadera.",
          },
          {
            name: "Gemelos",
            desc: "Se activan para mantener la estabilidad.",
          },
          {
            name: "Core",
            desc: "Se activa para mantener la estabilidad del torso.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de las piernas y el core.",
          },
          {
            name: "Mejora de la Coordinación",
            desc: "Ayuda a mejorar la coordinación y el equilibrio debido a la necesidad de mantener la estabilidad.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar sin necesidad de equipo especial.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no arquear demasiado la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las sentadillas con apoyo o el uso de bandas de resistencia.",
          },
        ],
      },
    ],
  },
  {
    id: "gemelos",
    img: gemelos,
    routine: [
      {
        id: 1,
        name: "Elevación de Gemelos Sentado",
        position: [
          "Siéntate en una máquina de elevación de gemelos o en un banco con una barra o mancuerna sobre tus muslos, justo por encima de las rodillas.",
          "Coloca la parte delantera de tus pies en una plataforma elevada o en el suelo, con los talones colgando fuera del borde.",
          "Mantén la espalda recta y el core activado para estabilizar el torso.",
        ],
        execution: [
          "Inhala profundamente y, manteniendo el core activado, presiona a través de las puntas de los pies para levantar los talones lo más alto posible.",
          "Haz una pausa en la posición más alta, sintiendo la contracción en los músculos de la pantorrilla.",
          "Exhala y baja lentamente los talones hasta la posición inicial sin dejar que toquen el suelo, manteniendo así la tensión en el músculo trabajado.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén el control en todo momento para evitar balancearte.",
          "Usa un rango completo de movimiento para maximizar los beneficios del ejercicio.",
          "Respira correctamente: inhala al prepararte para levantar los talones y exhala mientras realizas la elevación.",
          "Comienza con un peso moderado y aumenta gradualmente a medida que te sientas más fuerte.",
        ],
        muscles: [
          {
            name: "Sóleo",
            desc: "Principalmente trabajado durante la elevación de los talones.",
          },
          {
            name: "Gastrocnemio",
            desc: "Trabaja como músculo sinergista.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de la pantorrilla.",
          },
          {
            name: "Mejora de la Estabilidad",
            desc: "Ayuda a mejorar la estabilidad de la articulación de la rodilla.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier gimnasio con una máquina de elevación de gemelos o con pesas libres.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no arquear demasiado la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las elevaciones de gemelos de pie o el uso de bandas de resistencia.",
          },
        ],
      },
      {
        id: 2,
        name: "Elevación de Gemelos de Pie",
        position: [
          "Colócate de pie con los pies separados al ancho de los hombros.",
          "Mantén la espalda recta y el core activado para estabilizar el torso.",
          "Si usas pesas, sostén una mancuerna en cada mano a los lados del cuerpo o coloca una barra sobre los hombros.",
        ],
        execution: [
          "Inhala profundamente y, manteniendo el core activado, presiona a través de las puntas de los pies para levantar los talones lo más alto posible.",
          "Haz una pausa en la posición más alta, sintiendo la contracción en los músculos de la pantorrilla.",
          "Exhala y baja lentamente los talones hasta la posición inicial sin dejar que toquen el suelo, manteniendo así la tensión en el músculo trabajado.",
          "Repite este movimiento para el número deseado de repeticiones.",
        ],
        advices: [
          "Mantén el control en todo momento para evitar balancearte.",
          "Usa un rango completo de movimiento para maximizar los beneficios del ejercicio.",
          "Respira correctamente: inhala al prepararte para levantar los talones y exhala mientras realizas la elevación.",
          "Comienza con un peso moderado y aumenta gradualmente a medida que te sientas más fuerte.",
        ],
        muscles: [
          {
            name: "Gastrocnemio",
            desc: "Principalmente trabajado durante la elevación de los talones.",
          },
          {
            name: "Sóleo",
            desc: "Trabaja como músculo sinergista.",
          },
        ],
        benefits: [
          {
            name: "Fortalecimiento Muscular",
            desc: "Mejora la fuerza y la resistencia de los músculos de la pantorrilla.",
          },
          {
            name: "Mejora de la Estabilidad",
            desc: "Ayuda a mejorar la estabilidad de la articulación de la rodilla.",
          },
          {
            name: "Versatilidad",
            desc: "Se puede realizar en cualquier lugar sin necesidad de equipo especial.",
          },
        ],
        warnings: [
          {
            name: "Riesgo de Lesiones",
            desc: "Asegúrate de no arquear demasiado la espalda para evitar lesiones en la columna.",
          },
          {
            name: "Alternativas Seguras",
            desc: "Si sientes molestias, considera alternativas como las elevaciones de gemelos sentado o el uso de bandas de resistencia.",
          },
        ],
      },
    ],
  },
];
