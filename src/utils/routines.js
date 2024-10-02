import hombro from "../assets/images/components/train/hombro.jpg";
import biceps from "../assets/images/components/train/biceps.jpg";
// import mano1 from "../assets/images/components/train/mano1.jpg";
import espalda from "../assets/images/components/train/espalda2.jpg";
import pecho from "../assets/images/components/train/pecho.jpg";
// import abdomen from "../assets/images/components/train/abdomen.jpg";
// import pelvis from "../assets/images/components/train/pelvis.jpg";
// import pierna from "../assets/images/components/train/pierna.jpg";

// Rutina de Ejercicios
export const routines = [
    {
        id: "pecho",
        img: pecho,
        routine: [
            {
                id: 1,
                name: "Press Banca con Barra",
                position: [
                    "Acuéstate en un banco plano con los pies firmemente apoyados en el suelo.",
                    "Asegúrate de que tu espalda, cabeza y glúteos estén en contacto con el banco en todo momento.",
                    "Agarra la barra con las manos un poco más separadas que el ancho de tus hombros."
                ],
                execution: [
                    "Baja la barra lentamente hacia tu pecho mientras inhalas.",
                    "Mantén los codos en un ángulo de 90 grados.",
                    "Empuja la barra hacia arriba mientras exhalas, extendiendo completamente los brazos."
                ],
                advices: [
                    "Mantén la espalda recta y evita arquearla.",
                    "Realiza el movimiento de manera controlada para evitar lesiones.",
                    "Puedes variar el agarre para trabajar diferentes partes del pectoral."
                ],
                muscles: [
                    {
                        name: "Pectoral mayor",
                        desc: "Trabaja el músculo principal del pecho."
                    },
                    {
                        name: "Pectoral menor",
                        desc: "Ayuda a estabilizar la escápula y trabaja junto al pectoral mayor."
                    },
                    {
                        name: "Tríceps",
                        desc: "Asiste en la extensión del codo durante el levantamiento."
                    },
                    {
                        name: "Deltoides anterior",
                        desc: "Ayuda a estabilizar los hombros durante el movimiento."
                    },
                    {
                        name: "Serratos",
                        desc: "Asisten en la estabilización del tórax durante el ejercicio."
                    }
                ]
            },
            {
                id: 2,
                name: "Press Banca Inclinado con Mancuernas",
                position: [
                    "Ajusta el banco a una inclinación de aproximadamente 30-45 grados.",
                    "Siéntate en el banco y coloca las mancuernas sobre tus muslos.",
                    "Acuéstate en el banco y, al mismo tiempo, lleva las mancuernas hacia arriba para colocarlas a la altura de tus hombros."
                ],
                execution: [
                    "Empuja las mancuernas hacia arriba hasta que tus brazos estén completamente extendidos.",
                    "Mantén las palmas de las manos mirando hacia adelante.",
                    "Baja las mancuernas de manera controlada hasta que tus codos formen un ángulo de 90 grados o hasta que las mancuernas estén a la altura de tu pecho."
                ],
                advices: [
                    "Mantén los pies firmemente apoyados en el suelo.",
                    "Evita arquear excesivamente la espalda.",
                    "Realiza el movimiento de manera controlada para evitar lesiones.",
                    "Mantén los omóplatos retraídos y el pecho elevado durante todo el ejercicio."
                ],
                muscles: [
                    {
                        name: "Pectoral mayor (porción clavicular)",
                        desc: "Principalmente trabaja la parte superior del pecho."
                    },
                    {
                        name: "Deltoides anterior",
                        desc: "Ayuda en el movimiento de empuje."
                    },
                    {
                        name: "Tríceps braquial",
                        desc: "Asiste en la extensión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Desarrollo de la parte superior del pecho",
                        desc: "Ayuda a equilibrar el desarrollo muscular del pecho."
                    },
                    {
                        name: "Mejora de la fuerza de empuje",
                        desc: "Beneficioso para otros ejercicios de empuje."
                    },
                    {
                        name: "Variedad en el entrenamiento",
                        desc: "Añade diversidad a tu rutina de pecho."
                    }
                ]
            },
            {
                id: 3,
                name: "Aperturas en Máquina Peck Deck",
                position: [
                    "Siéntate en la máquina Peck Deck con la espalda bien apoyada en el respaldo.",
                    "Coloca los antebrazos contra las almohadillas, con los codos a la altura de los hombros.",
                    "Ajusta el asiento de manera que los brazos estén paralelos al suelo."
                ],
                execution: [
                    "Empuja las almohadillas hacia adelante, juntando los brazos frente a tu pecho.",
                    "Mantén una ligera flexión en los codos durante todo el movimiento.",
                    "Contrae el pecho al final del movimiento y luego vuelve lentamente a la posición inicial."
                ],
                advices: [
                    "Evita arquear la espalda.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Mantén los pies firmemente apoyados en el suelo."
                ],
                muscles: [
                    {
                        name: "Pectoral mayor",
                        desc: "Principalmente trabaja la parte media del pecho."
                    },
                    {
                        name: "Deltoides anterior",
                        desc: "Ayuda en el movimiento de empuje."
                    },
                    {
                        name: "Pectoral menor",
                        desc: "Asiste en la estabilización del hombro."
                    }
                ]
            },
            {
                id: 4,
                name: "Aperturas con Mancuernas",
                position: [
                    "Acuéstate en un banco plano con una mancuerna en cada mano.",
                    "Mantén los pies firmemente apoyados en el suelo y la espalda en contacto con el banco.",
                    "Extiende los brazos hacia arriba con una ligera flexión en los codos, las palmas de las manos mirándose entre sí."
                ],
                execution: [
                    "Baja las mancuernas en un arco amplio hacia los lados, manteniendo una ligera flexión en los codos.",
                    "Detente cuando las mancuernas estén a la altura del pecho o ligeramente por debajo.",
                    "Vuelve a levantar las mancuernas hacia arriba, juntándolas sobre tu pecho."
                ],
                advices: [
                    "Mantén el control durante todo el movimiento para evitar lesiones en los hombros.",
                    "No bajes las mancuernas demasiado, ya que esto puede poner tensión excesiva en los hombros.",
                    "Mantén una respiración constante y controlada."
                ],
                muscles: [
                    {
                        name: "Pectoral mayor",
                        desc: "Trabaja principalmente la parte media y externa del pecho."
                    },
                    {
                        name: "Deltoides anterior",
                        desc: "Ayuda en el movimiento de apertura."
                    },
                    {
                        name: "Bíceps braquial",
                        desc: "Asiste en la estabilización del brazo."
                    }
                ],
                benefits: [
                    {
                        name: "Desarrollo del pecho",
                        desc: "Ambos ejercicios son excelentes para desarrollar la masa y definición del pecho."
                    },
                    {
                        name: "Variedad en el entrenamiento",
                        desc: "Añadir variedad a tu rutina de pecho puede ayudar a evitar el estancamiento y promover un desarrollo muscular equilibrado."
                    },
                    {
                        name: "Mejora de la fuerza",
                        desc: "Fortalecer los músculos del pecho puede mejorar el rendimiento en otros ejercicios de empuje."
                    }
                ]
            },
            {
                id: 5,
                name: "Cruce de Poleas",
                position: [
                    "Colócate en el centro de una máquina de poleas con las poleas ajustadas a una altura alta.",
                    "Sujeta las asas de las poleas con las palmas hacia abajo.",
                    "Da un paso adelante con un pie, manteniendo una ligera flexión en las rodillas.",
                    "Inclina ligeramente el torso hacia adelante, manteniendo la espalda recta."
                ],
                execution: [
                    "Con los brazos extendidos y ligeramente flexionados en los codos, tira de las poleas hacia abajo y hacia adelante, cruzando las manos frente a tu pecho.",
                    "Mantén la contracción en el pecho por un segundo.",
                    "Vuelve lentamente a la posición inicial, controlando el movimiento."
                ],
                advices: [
                    "Mantén una ligera flexión en los codos durante todo el movimiento para evitar tensión excesiva en las articulaciones.",
                    "Realiza el movimiento de manera controlada, evitando movimientos bruscos.",
                    "Mantén el core activado para estabilizar el cuerpo."
                ],
                muscles: [
                    {
                        name: "Pectoral mayor",
                        desc: "Principalmente trabaja la parte media e inferior del pecho."
                    },
                    {
                        name: "Deltoides anterior",
                        desc: "Ayuda en el movimiento de empuje."
                    },
                    {
                        name: "Pectoral menor",
                        desc: "Asiste en la estabilización del hombro."
                    }
                ],
                benefits: [
                    {
                        name: "Desarrollo del pecho",
                        desc: "Excelente para definir y desarrollar la masa muscular del pecho."
                    },
                    {
                        name: "Variedad en el entrenamiento",
                        desc: "Añade diversidad a tu rutina de pecho."
                    },
                    {
                        name: "Mejora de la fuerza",
                        desc: "Fortalece los músculos del pecho, mejorando el rendimiento en otros ejercicios de empuje."
                    }
                ]
            },
            {
                id: 6,
                name: "Press de Banca Inclinado con Barra",
                position: [
                    "Ajusta el banco a una inclinación de aproximadamente 30-45 grados.",
                    "Acuéstate en el banco con los pies firmemente apoyados en el suelo.",
                    "Agarra la barra con las manos un poco más separadas que el ancho de los hombros."
                ],
                execution: [
                    "Levanta la barra del soporte y colócala directamente sobre tu pecho con los brazos extendidos.",
                    "Baja la barra lentamente hacia la parte superior del pecho mientras inhalas.",
                    "Mantén los codos en un ángulo de 90 grados.",
                    "Empuja la barra hacia arriba mientras exhalas, extendiendo completamente los brazos."
                ],
                advices: [
                    "Mantén la espalda recta y evita arquearla.",
                    "Realiza el movimiento de manera controlada para evitar lesiones.",
                    "Mantén los omóplatos retraídos y el pecho elevado durante todo el ejercicio."
                ],
                muscles: [
                    {
                        name: "Pectoral mayor (porción clavicular)",
                        desc: "Principalmente trabaja la parte superior del pecho."
                    },
                    {
                        name: "Deltoides anterior",
                        desc: "Ayuda en el movimiento de empuje."
                    },
                    {
                        name: "Tríceps braquial",
                        desc: "Asiste en la extensión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Desarrollo de la parte superior del pecho",
                        desc: "Ayuda a equilibrar el desarrollo muscular del pecho."
                    },
                    {
                        name: "Mejora de la fuerza de empuje",
                        desc: "Beneficioso para otros ejercicios de empuje."
                    },
                    {
                        name: "Variedad en el entrenamiento",
                        desc: "Añade diversidad a tu rutina de pecho."
                    }
                ]
            },
            {
                id: 7,
                name: "Press de Banca Inclinado con Mancuernas",
                position: [
                    "Ajusta el banco a una inclinación de aproximadamente 30-45 grados.",
                    "Siéntate en el banco y coloca las mancuernas sobre tus muslos.",
                    "Acuéstate en el banco y, al mismo tiempo, lleva las mancuernas hacia arriba para colocarlas a la altura de tus hombros."
                ],
                execution: [
                    "Empuja las mancuernas hacia arriba hasta que tus brazos estén completamente extendidos.",
                    "Mantén las palmas de las manos mirando hacia adelante.",
                    "Baja las mancuernas de manera controlada hasta que tus codos formen un ángulo de 90 grados o hasta que las mancuernas estén a la altura de tu pecho."
                ],
                advices: [
                    "Mantén los pies firmemente apoyados en el suelo.",
                    "Evita arquear excesivamente la espalda.",
                    "Realiza el movimiento de manera controlada para evitar lesiones.",
                    "Mantén los omóplatos retraídos y el pecho elevado durante todo el ejercicio."
                ],
                muscles: [
                    {
                        name: "Pectoral mayor (porción clavicular)",
                        desc: "Principalmente trabaja la parte superior del pecho."
                    },
                    {
                        name: "Deltoides anterior",
                        desc: "Ayuda en el movimiento de empuje."
                    },
                    {
                        name: "Tríceps braquial",
                        desc: "Asiste en la extensión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Desarrollo de la parte superior del pecho",
                        desc: "Ayuda a equilibrar el desarrollo muscular del pecho."
                    },
                    {
                        name: "Mejora de la fuerza de empuje",
                        desc: "Beneficioso para otros ejercicios de empuje."
                    },
                    {
                        name: "Variedad en el entrenamiento",
                        desc: "Añade diversidad a tu rutina de pecho."
                    }
                ]
            },
            {
                id: 8,
                name: "Aperturas con Mancuernas",
                position: [
                    "Acuéstate en un banco plano con una mancuerna en cada mano.",
                    "Mantén los pies firmemente apoyados en el suelo y la espalda en contacto con el banco.",
                    "Extiende los brazos hacia arriba con una ligera flexión en los codos, las palmas de las manos mirándose entre sí."
                ],
                execution: [
                    "Baja las mancuernas en un arco amplio hacia los lados, manteniendo una ligera flexión en los codos.",
                    "Detente cuando las mancuernas estén a la altura del pecho o ligeramente por debajo.",
                    "Vuelve a levantar las mancuernas hacia arriba, juntándolas sobre tu pecho."
                ],
                advices: [
                    "Mantén el control durante todo el movimiento para evitar lesiones en los hombros.",
                    "No bajes las mancuernas demasiado, ya que esto puede poner tensión excesiva en los hombros.",
                    "Mantén una respiración constante y controlada."
                ],
                muscles: [
                    {
                        name: "Pectoral mayor",
                        desc: "Trabaja principalmente la parte media y externa del pecho."
                    },
                    {
                        name: "Deltoides anterior",
                        desc: "Ayuda en el movimiento de apertura."
                    },
                    {
                        name: "Bíceps braquial",
                        desc: "Asiste en la estabilización del brazo."
                    }
                ],
                benefits: [
                    {
                        name: "Desarrollo del pecho",
                        desc: "Excelente para definir y desarrollar la masa muscular del pecho."
                    },
                    {
                        name: "Variedad en el entrenamiento",
                        desc: "Añade diversidad a tu rutina de pecho."
                    },
                    {
                        name: "Mejora de la fuerza",
                        desc: "Fortalece los músculos del pecho, mejorando el rendimiento en otros ejercicios de empuje."
                    }
                ]
            },
            {
                id: 9,
                name: "Aperturas Inclinadas con Mancuernas",
                position: [
                    "Ajusta el banco a una inclinación de aproximadamente 30-45 grados.",
                    "Siéntate en el banco y coloca las mancuernas sobre tus muslos.",
                    "Acuéstate en el banco y lleva las mancuernas hacia arriba, extendiendo los brazos con una ligera flexión en los codos. Las palmas de las manos deben mirarse entre sí."
                ],
                execution: [
                    "Baja las mancuernas en un arco amplio hacia los lados, manteniendo una ligera flexión en los codos.",
                    "Detente cuando las mancuernas estén a la altura del pecho o ligeramente por debajo.",
                    "Vuelve a levantar las mancuernas hacia arriba, juntándolas sobre tu pecho."
                ],
                advices: [
                    "Mantén el control durante todo el movimiento para evitar lesiones en los hombros.",
                    "No bajes las mancuernas demasiado, ya que esto puede poner tensión excesiva en los hombros.",
                    "Mantén una respiración constante y controlada."
                ],
                muscles: [
                    {
                        name: "Pectoral mayor (porción clavicular)",
                        desc: "Trabaja principalmente la parte superior del pecho."
                    },
                    {
                        name: "Deltoides anterior",
                        desc: "Ayuda en el movimiento de apertura."
                    },
                    {
                        name: "Bíceps braquial",
                        desc: "Asiste en la estabilización del brazo."
                    }
                ],
                benefits: [
                    {
                        name: "Desarrollo del pecho superior",
                        desc: "Excelente para definir y desarrollar la masa muscular de la parte superior del pecho."
                    },
                    {
                        name: "Variedad en el entrenamiento",
                        desc: "Añade diversidad a tu rutina de pecho."
                    },
                    {
                        name: "Mejora de la fuerza",
                        desc: "Fortalece los músculos del pecho, mejorando el rendimiento en otros ejercicios de empuje."
                    }
                ]
            },
            {
                id: 10,
                name: "Press de Banca en Máquina Sentado",
                position: [
                    "Ajusta el asiento de la máquina para que los agarres estén alineados con la parte media de tu pecho.",
                    "Siéntate con la espalda bien apoyada en el respaldo y los pies firmemente en el suelo.",
                    "Agarra las manijas con las palmas hacia abajo y los codos en un ángulo de 90 grados."
                ],
                execution: [
                    "Empuja las manijas hacia adelante hasta que tus brazos estén completamente extendidos.",
                    "Mantén una ligera flexión en los codos para evitar bloquear las articulaciones.",
                    "Vuelve lentamente a la posición inicial, controlando el movimiento."
                ],
                advices: [
                    "Mantén la espalda recta y evita arquearla.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Mantén los pies firmemente apoyados en el suelo para mayor estabilidad."
                ],
                muscles: [
                    {
                        name: "Pectoral mayor",
                        desc: "Principalmente trabaja la parte media del pecho."
                    },
                    {
                        name: "Deltoides anterior",
                        desc: "Ayuda en el movimiento de empuje."
                    },
                    {
                        name: "Tríceps braquial",
                        desc: "Asiste en la extensión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Desarrollo del pecho",
                        desc: "Excelente para desarrollar la masa muscular del pecho."
                    },
                    {
                        name: "Variedad en el entrenamiento",
                        desc: "Añade diversidad a tu rutina de pecho."
                    },
                    {
                        name: "Mejora de la fuerza",
                        desc: "Fortalece los músculos del pecho, mejorando el rendimiento en otros ejercicios de empuje."
                    }
                ]
            },
            {
                id: 11,
                name: "Press de Banca Declinado con Barra",
                position: [
                    "Ajusta el banco a una declinación de aproximadamente 15-30 grados.",
                    "Acuéstate en el banco con los pies firmemente asegurados bajo los rodillos para evitar deslizarte.",
                    "Agarra la barra con las manos un poco más separadas que el ancho de los hombros."
                ],
                execution: [
                    "Levanta la barra del soporte y colócala directamente sobre tu pecho con los brazos extendidos.",
                    "Baja la barra lentamente hacia la parte inferior del pecho mientras inhalas.",
                    "Mantén los codos en un ángulo de 90 grados.",
                    "Empuja la barra hacia arriba mientras exhalas, extendiendo completamente los brazos."
                ],
                advices: [
                    "Mantén la espalda recta y evita arquearla.",
                    "Realiza el movimiento de manera controlada para evitar lesiones.",
                    "Mantén los omóplatos retraídos y el pecho elevado durante todo el ejercicio.",
                    "Es recomendable realizar este ejercicio con un compañero o un spotter para mayor seguridad."
                ],
                muscles: [
                    {
                        name: "Pectoral mayor (porción esternal)",
                        desc: "Principalmente trabaja la parte inferior del pecho."
                    },
                    {
                        name: "Deltoides anterior",
                        desc: "Ayuda en el movimiento de empuje."
                    },
                    {
                        name: "Tríceps braquial",
                        desc: "Asiste en la extensión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Desarrollo de la parte inferior del pecho",
                        desc: "Ayuda a equilibrar el desarrollo muscular del pecho."
                    },
                    {
                        name: "Mejora de la fuerza de empuje",
                        desc: "Beneficioso para otros ejercicios de empuje."
                    },
                    {
                        name: "Variedad en el entrenamiento",
                        desc: "Añade diversidad a tu rutina de pecho."
                    }
                ]
            },
            {
                id: 12,
                name: "Press de Banca Declinado con Mancuernas",
                position: [
                    "Ajusta el banco a una declinación de aproximadamente 15-30 grados.",
                    "Siéntate en el banco y coloca las mancuernas sobre tus muslos.",
                    "Acuéstate en el banco y lleva las mancuernas hacia arriba, extendiendo los brazos con una ligera flexión en los codos. Las palmas de las manos deben mirarse entre sí."
                ],
                execution: [
                    "Baja las mancuernas en un arco amplio hacia los lados, manteniendo una ligera flexión en los codos.",
                    "Detente cuando las mancuernas estén a la altura del pecho o ligeramente por debajo.",
                    "Vuelve a levantar las mancuernas hacia arriba, juntándolas sobre tu pecho."
                ],
                advices: [
                    "Mantén el control durante todo el movimiento para evitar lesiones en los hombros.",
                    "No bajes las mancuernas demasiado, ya que esto puede poner tensión excesiva en los hombros.",
                    "Mantén una respiración constante y controlada."
                ],
                muscles: [
                    {
                        name: "Pectoral mayor (porción esternal)",
                        desc: "Principalmente trabaja la parte inferior del pecho."
                    },
                    {
                        name: "Deltoides anterior",
                        desc: "Ayuda en el movimiento de empuje."
                    },
                    {
                        name: "Tríceps braquial",
                        desc: "Asiste en la extensión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Desarrollo de la parte inferior del pecho",
                        desc: "Ayuda a equilibrar el desarrollo muscular del pecho."
                    },
                    {
                        name: "Mejora de la fuerza de empuje",
                        desc: "Beneficioso para otros ejercicios de empuje."
                    },
                    {
                        name: "Variedad en el entrenamiento",
                        desc: "Añade diversidad a tu rutina de pecho."
                    }
                ]
            },
            {
                id: 13,
                name: "Flexiones",
                position: [
                    "Colócate en el suelo con las manos apoyadas un poco más separadas que el ancho de los hombros.",
                    "Extiende las piernas hacia atrás, apoyando los dedos de los pies en el suelo.",
                    "Mantén el cuerpo en una línea recta desde la cabeza hasta los talones."
                ],
                execution: [
                    "Baja el cuerpo doblando los codos, manteniéndolos cerca del cuerpo.",
                    "Desciende hasta que el pecho esté cerca del suelo, sin tocarlo.",
                    "Empuja el suelo con las manos para volver a la posición inicial, extendiendo completamente los brazos."
                ],
                advices: [
                    "Mantén el core activado para evitar que la cadera se hunda o se eleve.",
                    "Mantén la cabeza alineada con la columna vertebral, mirando ligeramente hacia adelante.",
                    "Realiza el movimiento de manera controlada, evitando movimientos bruscos."
                ],
                muscles: [
                    {
                        name: "Pectoral mayor",
                        desc: "Principalmente trabaja el pecho."
                    },
                    {
                        name: "Deltoides anterior",
                        desc: "Ayuda en el movimiento de empuje."
                    },
                    {
                        name: "Tríceps braquial",
                        desc: "Asiste en la extensión del codo."
                    },
                    {
                        name: "Core",
                        desc: "Mantiene la estabilidad del cuerpo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento del tren superior",
                        desc: "Trabaja varios grupos musculares al mismo tiempo."
                    },
                    {
                        name: "Mejora de la resistencia",
                        desc: "Aumenta la capacidad de realizar ejercicios de empuje."
                    },
                    {
                        name: "Versatilidad",
                        desc: "Puede realizarse en cualquier lugar sin necesidad de equipamiento."
                    }
                ],
                variations: [
                    {
                        name: "Flexiones con rodillas apoyadas",
                        desc: "Ideal para principiantes."
                    },
                    {
                        name: "Flexiones con manos elevadas",
                        desc: "Facilita el movimiento para aquellos que están empezando."
                    },
                    {
                        name: "Flexiones con pies elevados",
                        desc: "Aumenta la dificultad y trabaja más los hombros."
                    }
                ]
            }               
        ]
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
                    "La pierna opuesta debe estar firmemente apoyada en el suelo, y el brazo opuesto debe estar extendido hacia el suelo, sosteniendo la mancuerna con un agarre neutro (palma mirando hacia adentro)."
                ],
                execution: [
                    "Eleva la mancuerna hacia tu torso, manteniendo el codo cerca del cuerpo.",
                    "Contrae los músculos de la espalda en la parte superior del movimiento.",
                    "Baja la mancuerna de manera controlada hasta que el brazo esté completamente extendido.",
                    "Realiza todas las repeticiones con un brazo antes de cambiar al otro lado."
                ],
                advices: [
                    "Mantén la espalda recta y evita cualquier rotación del torso.",
                    "Concéntrate en levantar la mancuerna con los músculos de la espalda y no con el brazo.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones."
                ],
                muscles: [
                    {
                        name: "Dorsal ancho",
                        desc: "Principalmente trabaja la parte media e inferior de la espalda."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la elevación y retracción de los omóplatos."
                    },
                    {
                        name: "Romboides",
                        desc: "Asiste en la retracción de los omóplatos."
                    },
                    {
                        name: "Bíceps braquial",
                        desc: "Asiste en la flexión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de la espalda",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda."
                    },
                    {
                        name: "Mejora de la estabilidad del core",
                        desc: "Ayuda a mejorar la estabilidad y el equilibrio."
                    },
                    {
                        name: "Variedad en el entrenamiento",
                        desc: "Añade diversidad a tu rutina de espalda."
                    }
                ]
            },
            {
                id: 2,
                name: "Jalón con Agarre Ancho",
                position: [
                    "Siéntate en el banco de la máquina de jalón con los pies apoyados en el suelo y las rodillas ligeramente flexionadas.",
                    "Agarra la barra con las manos en un agarre ancho, más allá del ancho de tus hombros, y las palmas mirando hacia adelante."
                ],
                execution: [
                    "Tira de la barra hacia abajo hasta que toque o esté cerca de tu pecho.",
                    "Mantén los codos apuntando hacia los lados y concéntrate en activar los músculos de la espalda, especialmente el dorsal ancho.",
                    "Mantén la posición durante un segundo y luego regresa lentamente a la posición inicial, controlando el movimiento."
                ],
                advices: [
                    "Evita utilizar la fuerza de los brazos para realizar el movimiento; en su lugar, concéntrate en tirar con la espalda.",
                    "Mantén la espalda recta y evita balancearte hacia atrás.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones."
                ],
                muscles: [
                    {
                        name: "Dorsal ancho",
                        desc: "Principalmente trabaja la parte media e inferior de la espalda."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la elevación y retracción de los omóplatos."
                    },
                    {
                        name: "Romboides",
                        desc: "Asiste en la retracción de los omóplatos."
                    },
                    {
                        name: "Bíceps braquial",
                        desc: "Asiste en la flexión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de la espalda",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona."
                    },
                    {
                        name: "Estabilidad y equilibrio",
                        desc: "Al trabajar los músculos de la espalda, mejorarás tu estabilidad y equilibrio en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 3,
                name: "Remo en Máquina",
                position: [
                    "Siéntate en la máquina de remo y ajusta las correas de los pies para que queden bien sujetas.",
                    "Agarra el manillar con ambas manos, utilizando un agarre prono (palmas hacia abajo).",
                    "Mantén las rodillas dobladas y el torso ligeramente inclinado hacia adelante desde las caderas, con la espalda recta."
                ],
                execution: [
                    "Fase de Captura (The Catch): Comienza con las rodillas dobladas y los talones firmemente plantados en los pedales. Inclínate ligeramente hacia adelante desde las caderas con la espalda recta.",
                    "Fase de Tirón (The Drive): Empuja con las piernas primero, luego inclina el torso hacia atrás y finalmente tira del manillar hacia el pecho. Mantén los codos cerca del cuerpo.",
                    "Fase de Finalización (The Finish): Termina el tirón cuando el manillar esté cerca del pecho y el torso ligeramente inclinado hacia atrás.",
                    "Fase de Recuperación (The Recovery): Extiende los brazos primero, luego inclina el torso hacia adelante y finalmente dobla las rodillas para volver a la posición inicial."
                ],
                advices: [
                    "Mantén la espalda recta durante todo el movimiento para evitar lesiones.",
                    "Realiza el movimiento de manera fluida y controlada, evitando tirones bruscos.",
                    "Concéntrate en coordinar el empuje de las piernas, la inclinación del torso y el tirón de los brazos."
                ],
                muscles: [
                    {
                        name: "Dorsal ancho",
                        desc: "Principalmente trabaja la parte media e inferior de la espalda."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la elevación y retracción de los omóplatos."
                    },
                    {
                        name: "Romboides",
                        desc: "Asiste en la retracción de los omóplatos."
                    },
                    {
                        name: "Bíceps braquial",
                        desc: "Asiste en la flexión del codo."
                    },
                    {
                        name: "Cuádriceps y glúteos",
                        desc: "Trabajan durante la fase de empuje con las piernas."
                    },
                    {
                        name: "Core",
                        desc: "Mantiene la estabilidad del torso."
                    }
                ],
                benefits: [
                    {
                        name: "Entrenamiento completo",
                        desc: "Trabaja múltiples grupos musculares y mejora la resistencia cardiovascular."
                    },
                    {
                        name: "Bajo impacto",
                        desc: "Es suave para las articulaciones, lo que lo hace adecuado para personas con problemas articulares."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Fortalece los músculos de la espalda, ayudando a mantener una buena postura."
                    }
                ]
            },
            {
                id: 4,
                name: "Jalón al Pecho con Agarre Cerrado",
                position: [
                    "Siéntate en la máquina de jalón con los muslos asegurados bajo las almohadillas.",
                    "Agarra la barra con las manos en un agarre cerrado, aproximadamente a 30-40 centímetros de distancia entre sí, con las palmas hacia abajo."
                ],
                execution: [
                    "Tira de la barra hacia abajo hasta que toque o esté cerca de la parte superior del pecho.",
                    "Mantén los codos apuntando hacia los lados y concéntrate en activar los músculos de la espalda, especialmente el dorsal ancho.",
                    "Mantén la posición durante un segundo y luego regresa lentamente a la posición inicial, controlando el movimiento."
                ],
                advices: [
                    "Evita utilizar la fuerza de los brazos para realizar el movimiento; en su lugar, concéntrate en tirar con la espalda.",
                    "Mantén la espalda recta y evita balancearte hacia atrás.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones."
                ],
                muscles: [
                    {
                        name: "Dorsal ancho",
                        desc: "Principalmente trabaja la parte media e inferior de la espalda."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la elevación y retracción de los omóplatos."
                    },
                    {
                        name: "Romboides",
                        desc: "Asiste en la retracción de los omóplatos."
                    },
                    {
                        name: "Bíceps braquial",
                        desc: "Asiste en la flexión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de la espalda",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona."
                    },
                    {
                        name: "Estabilidad y equilibrio",
                        desc: "Al trabajar los músculos de la espalda, mejorarás tu estabilidad y equilibrio en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 5,
                name: "Remo con Barra",
                position: [
                    "Colócate de pie con los pies separados al ancho de los hombros.",
                    "Agarra la barra con un agarre prono (palmas hacia abajo) a la altura de los hombros.",
                    "Flexiona ligeramente las rodillas y empuja las caderas hacia atrás, manteniendo la espalda recta y el torso inclinado hacia adelante aproximadamente a 45 grados."
                ],
                execution: [
                    "Tira de la barra hacia tu abdomen, manteniendo los codos cerca del cuerpo.",
                    "Contrae los músculos de la espalda en la parte superior del movimiento.",
                    "Baja la barra de manera controlada hasta que los brazos estén completamente extendidos.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta durante todo el movimiento para evitar lesiones.",
                    "Evita balancear el cuerpo; el movimiento debe ser controlado y enfocado en los músculos de la espalda.",
                    "Concéntrate en tirar con los músculos de la espalda y no con los brazos."
                ],
                muscles: [
                    {
                        name: "Dorsal ancho",
                        desc: "Principalmente trabaja la parte media e inferior de la espalda."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la elevación y retracción de los omóplatos."
                    },
                    {
                        name: "Romboides",
                        desc: "Asiste en la retracción de los omóplatos."
                    },
                    {
                        name: "Bíceps braquial",
                        desc: "Asiste en la flexión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de la espalda",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona."
                    },
                    {
                        name: "Estabilidad y equilibrio",
                        desc: "Al trabajar los músculos de la espalda, mejorarás tu estabilidad y equilibrio en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 6,
                name: "Jalón Tras Nuca",
                position: [
                    "Siéntate en la máquina de jalón con los muslos asegurados bajo las almohadillas.",
                    "Agarra la barra con las manos en un agarre prono (palmas hacia abajo) y las manos separadas más allá del ancho de los hombros."
                ],
                execution: [
                    "Tira de la barra hacia abajo hasta que toque o esté cerca de la parte posterior de tu cuello.",
                    "Mantén los codos apuntando hacia los lados y concéntrate en activar los músculos de la espalda, especialmente el dorsal ancho.",
                    "Mantén la posición durante un segundo y luego regresa lentamente a la posición inicial, controlando el movimiento."
                ],
                advices: [
                    "Evita utilizar la fuerza de los brazos para realizar el movimiento; en su lugar, concéntrate en tirar con la espalda.",
                    "Mantén la espalda recta y evita balancearte hacia adelante.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones."
                ],
                muscles: [
                    {
                        name: "Dorsal ancho",
                        desc: "Principalmente trabaja la parte media e inferior de la espalda."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la elevación y retracción de los omóplatos."
                    },
                    {
                        name: "Romboides",
                        desc: "Asiste en la retracción de los omóplatos."
                    },
                    {
                        name: "Bíceps braquial",
                        desc: "Asiste en la flexión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de la espalda",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona."
                    },
                    {
                        name: "Estabilidad y equilibrio",
                        desc: "Al trabajar los músculos de la espalda, mejorarás tu estabilidad y equilibrio en otros ejercicios y actividades cotidianas."
                    }
                ],
                warnings: [
                    {
                        name: "Riesgo de Lesión",
                        desc: "El jalón tras nuca puede ser lesivo para los hombros debido a la rotación externa y abducción del hombro que requiere. Es importante realizarlo con una técnica adecuada y considerar alternativas más seguras, como el jalón al pecho."
                    }
                ]
            },
            {
                id: 7,
                name: "Jalón al Pecho con Agarre Invertido",
                position: [
                    "Siéntate en la máquina de jalón con los muslos asegurados bajo las almohadillas.",
                    "Agarra la barra con las manos en un agarre supino (palmas hacia arriba) y las manos separadas al ancho de los hombros."
                ],
                execution: [
                    "Tira de la barra hacia abajo hasta que toque o esté cerca de la parte superior del pecho.",
                    "Mantén los codos apuntando hacia adelante y concéntrate en activar los músculos de la espalda, especialmente el dorsal ancho.",
                    "Mantén la posición durante un segundo y luego regresa lentamente a la posición inicial, controlando el movimiento."
                ],
                advices: [
                    "Evita utilizar la fuerza de los brazos para realizar el movimiento; en su lugar, concéntrate en tirar con la espalda.",
                    "Mantén la espalda recta y evita balancearte hacia atrás.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones."
                ],
                muscles: [
                    {
                        name: "Dorsal ancho",
                        desc: "Principalmente trabaja la parte media e inferior de la espalda."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la elevación y retracción de los omóplatos."
                    },
                    {
                        name: "Romboides",
                        desc: "Asiste en la retracción de los omóplatos."
                    },
                    {
                        name: "Bíceps braquial",
                        desc: "Asiste en la flexión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de la espalda",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona."
                    },
                    {
                        name: "Estabilidad y equilibrio",
                        desc: "Al trabajar los músculos de la espalda, mejorarás tu estabilidad y equilibrio en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 8,
                name: "Jalón en Polea con Cuerda",
                position: [
                    "Colócate de pie frente a una polea alta, con las rodillas ligeramente dobladas y el pecho ligeramente inclinado hacia adelante.",
                    "Toma un extremo de la cuerda en cada mano con un agarre neutral (palmas enfrentadas)."
                ],
                execution: [
                    "Tira de la cuerda hacia abajo y hacia atrás, llevando las manos hacia las caderas.",
                    "Mantén los codos ligeramente doblados y cercanos al cuerpo.",
                    "Contrae los músculos de la espalda al final del movimiento, apretando los omóplatos juntos.",
                    "Vuelve lentamente a la posición inicial, controlando el movimiento."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte hacia adelante o hacia atrás.",
                    "Concéntrate en tirar con los músculos de la espalda y no con los brazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones."
                ],
                muscles: [
                    {
                        name: "Dorsal ancho",
                        desc: "Principalmente trabaja la parte media e inferior de la espalda."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la elevación y retracción de los omóplatos."
                    },
                    {
                        name: "Romboides",
                        desc: "Asiste en la retracción de los omóplatos."
                    },
                    {
                        name: "Bíceps braquial",
                        desc: "Asiste en la flexión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de la espalda",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona."
                    },
                    {
                        name: "Estabilidad y equilibrio",
                        desc: "Al trabajar los músculos de la espalda, mejorarás tu estabilidad y equilibrio en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 9,
                name: "Remo en Barra T",
                position: [
                    "Coloca un extremo de la barra en una esquina o en un soporte específico para barra T.",
                    "Coloca un agarre en V o una manija en el otro extremo de la barra.",
                    "Colócate de pie con los pies separados al ancho de los hombros, con la barra entre tus piernas.",
                    "Flexiona ligeramente las rodillas y empuja las caderas hacia atrás, manteniendo la espalda recta y el torso inclinado hacia adelante aproximadamente a 45 grados."
                ],
                execution: [
                    "Agarra la manija con ambas manos, manteniendo las palmas enfrentadas (agarre neutro).",
                    "Tira de la barra hacia tu abdomen, manteniendo los codos cerca del cuerpo.",
                    "Contrae los músculos de la espalda en la parte superior del movimiento.",
                    "Baja la barra de manera controlada hasta que los brazos estén completamente extendidos.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta durante todo el movimiento para evitar lesiones.",
                    "Evita balancear el cuerpo; el movimiento debe ser controlado y enfocado en los músculos de la espalda.",
                    "Concéntrate en tirar con los músculos de la espalda y no con los brazos."
                ],
                muscles: [
                    {
                        name: "Dorsal ancho",
                        desc: "Principalmente trabaja la parte media e inferior de la espalda."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la elevación y retracción de los omóplatos."
                    },
                    {
                        name: "Romboides",
                        desc: "Asiste en la retracción de los omóplatos."
                    },
                    {
                        name: "Bíceps braquial",
                        desc: "Asiste en la flexión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de la espalda",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona."
                    },
                    {
                        name: "Estabilidad y equilibrio",
                        desc: "Al trabajar los músculos de la espalda, mejorarás tu estabilidad y equilibrio en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 10,
                name: "Remo Inclinado con Agarre Supinado",
                position: [
                    "Colócate de pie con los pies separados al ancho de los hombros.",
                    "Agarra la barra con un agarre supinado (palmas hacia arriba) a la altura de los hombros.",
                    "Flexiona ligeramente las rodillas y empuja las caderas hacia atrás, manteniendo la espalda recta y el torso inclinado hacia adelante aproximadamente a 45 grados."
                ],
                execution: [
                    "Tira de la barra hacia tu abdomen, manteniendo los codos cerca del cuerpo.",
                    "Contrae los músculos de la espalda en la parte superior del movimiento.",
                    "Baja la barra de manera controlada hasta que los brazos estén completamente extendidos.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta durante todo el movimiento para evitar lesiones.",
                    "Evita balancear el cuerpo; el movimiento debe ser controlado y enfocado en los músculos de la espalda.",
                    "Concéntrate en tirar con los músculos de la espalda y no con los brazos."
                ],
                muscles: [
                    {
                        name: "Dorsal ancho",
                        desc: "Principalmente trabaja la parte media e inferior de la espalda."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la elevación y retracción de los omóplatos."
                    },
                    {
                        name: "Romboides",
                        desc: "Asiste en la retracción de los omóplatos."
                    },
                    {
                        name: "Bíceps braquial",
                        desc: "Asiste en la flexión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de la espalda",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona."
                    },
                    {
                        name: "Estabilidad y equilibrio",
                        desc: "Al trabajar los músculos de la espalda, mejorarás tu estabilidad y equilibrio en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 11,
                name: "Elevaciones con Barra Fija",
                position: [
                    "Agarra la barra con un agarre prono (palmas hacia adelante) y las manos separadas al ancho de los hombros o ligeramente más anchas.",
                    "Cuelga de la barra con los brazos completamente extendidos y los pies cruzados detrás de ti para mantener el equilibrio."
                ],
                execution: [
                    "Tira de tu cuerpo hacia arriba, llevando la barbilla por encima de la barra.",
                    "Mantén los codos apuntando hacia abajo y cerca del cuerpo.",
                    "Contrae los músculos de la espalda y los bíceps en la parte superior del movimiento.",
                    "Baja el cuerpo de manera controlada hasta que los brazos estén completamente extendidos.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte.",
                    "Concéntrate en tirar con los músculos de la espalda y no con los brazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones."
                ],
                muscles: [
                    {
                        name: "Dorsal ancho",
                        desc: "Principalmente trabaja la parte media e inferior de la espalda."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la elevación y retracción de los omóplatos."
                    },
                    {
                        name: "Romboides",
                        desc: "Asiste en la retracción de los omóplatos."
                    },
                    {
                        name: "Bíceps braquial",
                        desc: "Asiste en la flexión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de la espalda",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona."
                    },
                    {
                        name: "Estabilidad y equilibrio",
                        desc: "Al trabajar los músculos de la espalda, mejorarás tu estabilidad y equilibrio en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 12,
                name: "Elevaciones Tras Nuca en Barra Fija",
                position: [
                    "Agarra la barra con un agarre prono (palmas hacia adelante) y las manos separadas más allá del ancho de los hombros.",
                    "Cuelga de la barra con los brazos completamente extendidos y los pies cruzados detrás de ti para mantener el equilibrio."
                ],
                execution: [
                    "Tira de tu cuerpo hacia arriba, llevando la parte posterior de la cabeza hacia la barra.",
                    "Mantén los codos apuntando hacia abajo y cerca del cuerpo.",
                    "Contrae los músculos de la espalda y los bíceps en la parte superior del movimiento.",
                    "Baja el cuerpo de manera controlada hasta que los brazos estén completamente extendidos.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte.",
                    "Concéntrate en tirar con los músculos de la espalda y no con los brazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones."
                ],
                muscles: [
                    {
                        name: "Dorsal ancho",
                        desc: "Principalmente trabaja la parte media e inferior de la espalda."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la elevación y retracción de los omóplatos."
                    },
                    {
                        name: "Romboides",
                        desc: "Asiste en la retracción de los omóplatos."
                    },
                    {
                        name: "Bíceps braquial",
                        desc: "Asiste en la flexión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de la espalda",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona."
                    },
                    {
                        name: "Estabilidad y equilibrio",
                        desc: "Al trabajar los músculos de la espalda, mejorarás tu estabilidad y equilibrio en otros ejercicios y actividades cotidianas."
                    }
                ],
                warnings: [
                    {
                        name: "Riesgo de Lesión",
                        desc: "Las elevaciones tras nuca pueden ser lesivas para los hombros debido a la rotación externa y abducción del hombro que requieren. Es importante realizarlo con una técnica adecuada y considerar alternativas más seguras, como las elevaciones al frente."
                    }
                ]
            },           
            {
                id: 13,
                name: "Elevaciones en Barra Fija con Agarre Supinado",
                position: [
                    "Agarra la barra con un agarre supinado (palmas hacia ti) y las manos separadas al ancho de los hombros.",
                    "Cuelga de la barra con los brazos completamente extendidos y los pies cruzados detrás de ti para mantener el equilibrio."
                ],
                execution: [
                    "Tira de tu cuerpo hacia arriba, llevando la barbilla por encima de la barra.",
                    "Mantén los codos apuntando hacia adelante y cerca del cuerpo.",
                    "Contrae los músculos de la espalda y los bíceps en la parte superior del movimiento.",
                    "Baja el cuerpo de manera controlada hasta que los brazos estén completamente extendidos.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte.",
                    "Concéntrate en tirar con los músculos de la espalda y los bíceps, no solo con los brazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones."
                ],
                muscles: [
                    {
                        name: "Dorsal ancho",
                        desc: "Principalmente trabaja la parte media e inferior de la espalda."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la elevación y retracción de los omóplatos."
                    },
                    {
                        name: "Romboides",
                        desc: "Asiste en la retracción de los omóplatos."
                    },
                    {
                        name: "Bíceps braquial",
                        desc: "Principalmente trabaja en la flexión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de la espalda y los bíceps",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda y los bíceps."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona."
                    },
                    {
                        name: "Estabilidad y equilibrio",
                        desc: "Al trabajar los músculos de la espalda y los bíceps, mejorarás tu estabilidad y equilibrio en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 14,
                name: "Jalón Dorsal con Brazos Rectos",
                position: [
                    "Colócate de pie frente a una polea alta con una barra recta.",
                    "Agarra la barra con un agarre prono (palmas hacia abajo) y las manos separadas a la anchura de los hombros.",
                    "Mantén los brazos rectos y ligeramente flexionados en los codos.",
                    "Inclina el torso ligeramente hacia adelante desde las caderas, manteniendo la espalda recta."
                ],
                execution: [
                    "Tira de la barra hacia abajo en un arco amplio hasta que llegue a la altura de tus muslos.",
                    "Mantén los brazos rectos durante todo el movimiento, concentrándote en usar los músculos de la espalda para bajar la barra.",
                    "Aprieta los dorsales en la parte inferior del movimiento y mantén la contracción por un segundo.",
                    "Devuelve la barra lentamente a la posición inicial, controlando el movimiento para mantener la tensión en los dorsales.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Usa un peso que te permita realizar el ejercicio con buena técnica.",
                    "Mantén el torso estable y evita balancearte hacia adelante o hacia atrás.",
                    "Coordina la respiración con el movimiento para mantener la estabilidad del torso y maximizar la eficiencia del ejercicio."
                ],
                muscles: [
                    {
                        name: "Dorsal ancho",
                        desc: "Principalmente trabaja la parte media e inferior de la espalda."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la elevación y retracción de los omóplatos."
                    },
                    {
                        name: "Romboides",
                        desc: "Asiste en la retracción de los omóplatos."
                    },
                    {
                        name: "Deltoides posteriores",
                        desc: "Trabajan en la extensión del hombro."
                    },
                    {
                        name: "Tríceps braquial",
                        desc: "Ayuda en la extensión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de la espalda",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona."
                    },
                    {
                        name: "Aislamiento de los dorsales",
                        desc: "Permite un enfoque específico en los músculos dorsales sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 15,
                name: "Remo Inclinado con Mancuernas",
                position: [
                    "Coloca una mancuerna en cada mano y ponte de pie con las piernas separadas a la altura de los hombros.",
                    "Inclínate hacia adelante desde las caderas, manteniendo la espalda recta y las rodillas ligeramente flexionadas.",
                    "Deja que los brazos cuelguen hacia abajo con las mancuernas, formando una línea perpendicular con el suelo."
                ],
                execution: [
                    "Tira de las mancuernas hacia arriba, llevando los codos hacia atrás y cerca del cuerpo.",
                    "Contrae los músculos de la espalda en la parte superior del movimiento, llevando las mancuernas hacia los lados del torso.",
                    "Baja las mancuernas de manera controlada hasta la posición inicial, extendiendo completamente los brazos.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita curvarla durante el ejercicio.",
                    "Concéntrate en tirar con los músculos de la espalda y no solo con los brazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones."
                ],
                muscles: [
                    {
                        name: "Dorsal ancho",
                        desc: "Principalmente trabaja la parte media e inferior de la espalda."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la elevación y retracción de los omóplatos."
                    },
                    {
                        name: "Romboides",
                        desc: "Asiste en la retracción de los omóplatos."
                    },
                    {
                        name: "Deltoides posteriores",
                        desc: "Trabajan en la extensión del hombro."
                    },
                    {
                        name: "Bíceps braquial",
                        desc: "Principalmente trabaja en la flexión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de la espalda",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de la espalda."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona."
                    },
                    {
                        name: "Estabilidad y equilibrio",
                        desc: "Al trabajar los músculos de la espalda y los bíceps, mejorarás tu estabilidad y equilibrio en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 16,
                name: "Pullover con Mancuerna",
                position: [
                    "Colócate tumbado en un banco horizontal, con los pies firmemente apoyados en el suelo.",
                    "Sujeta una mancuerna con ambas manos, extendiendo los brazos verticalmente sobre el pecho.",
                    "Mantén los brazos ligeramente flexionados en los codos."
                ],
                execution: [
                    "Baja la mancuerna lentamente por detrás de la cabeza en un arco amplio, manteniendo una ligera flexión en los codos.",
                    "Lleva la mancuerna lo más lejos posible sin comprometer la forma o causar molestias.",
                    "Contrae los músculos del pecho y la espalda para devolver la mancuerna a la posición inicial, manteniendo el control durante todo el movimiento.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda baja y los glúteos en contacto con el banco para evitar arquear demasiado la espalda.",
                    "Concéntrate en un movimiento controlado y evita usar el impulso.",
                    "Respira de manera controlada, inhalando al bajar la mancuerna y exhalando al subirla."
                ],
                muscles: [
                    {
                        name: "Dorsal ancho",
                        desc: "Principalmente trabaja la parte media e inferior de la espalda."
                    },
                    {
                        name: "Pectoral mayor",
                        desc: "Trabaja en la parte frontal del pecho."
                    },
                    {
                        name: "Serratos mayores",
                        desc: "Ayudan en la estabilización de la caja torácica."
                    },
                    {
                        name: "Tríceps braquial",
                        desc: "Ayuda en la extensión del codo."
                    },
                    {
                        name: "Intercostales",
                        desc: "Se estiran y fortalecen durante el movimiento."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento del torso",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza del pecho y la espalda."
                    },
                    {
                        name: "Mejora de la flexibilidad",
                        desc: "Estira los músculos intercostales y mejora la capacidad pulmonar."
                    },
                    {
                        name: "Apertura de la caja torácica",
                        desc: "Ayuda a ensanchar el torso y mejorar la postura."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 17,
                name: "Pullover con Barra",
                position: [
                    "Acuéstate en un banco plano, con los pies firmemente apoyados en el suelo.",
                    "Sostén la barra con ambas manos, extendiendo los brazos verticalmente sobre el pecho.",
                    "Mantén una ligera flexión en los codos."
                ],
                execution: [
                    "Baja la barra lentamente por detrás de la cabeza en un arco amplio, manteniendo una ligera flexión en los codos.",
                    "Lleva la barra lo más lejos posible sin comprometer la forma o causar molestias.",
                    "Contrae los músculos del pecho y la espalda para devolver la barra a la posición inicial, manteniendo el control durante todo el movimiento.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda baja y los glúteos en contacto con el banco para evitar arquear demasiado la espalda.",
                    "Concéntrate en un movimiento controlado y evita usar el impulso.",
                    "Respira de manera controlada, inhalando al bajar la barra y exhalando al subirla."
                ],
                muscles: [
                    {
                        name: "Dorsal ancho",
                        desc: "Principalmente trabaja la parte media e inferior de la espalda."
                    },
                    {
                        name: "Pectoral mayor",
                        desc: "Trabaja en la parte frontal del pecho."
                    },
                    {
                        name: "Serratos mayores",
                        desc: "Ayudan en la estabilización de la caja torácica."
                    },
                    {
                        name: "Tríceps braquial",
                        desc: "Ayuda en la extensión del codo."
                    },
                    {
                        name: "Intercostales",
                        desc: "Se estiran y fortalecen durante el movimiento."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento del torso",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza del pecho y la espalda."
                    },
                    {
                        name: "Mejora de la flexibilidad",
                        desc: "Estira los músculos intercostales y mejora la capacidad pulmonar."
                    },
                    {
                        name: "Apertura de la caja torácica",
                        desc: "Ayuda a ensanchar el torso y mejorar la postura."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 18,
                name: "Peso Muerto con Barra",
                position: [
                    "Colócate de pie con los pies separados al ancho de las caderas, con la barra justo frente a ti.",
                    "Agarra la barra con un agarre prono (palmas hacia abajo) o mixto (una palma hacia abajo y otra hacia arriba), con las manos separadas al ancho de los hombros.",
                    "Mantén la espalda recta, el pecho hacia arriba y los hombros hacia atrás.",
                    "Flexiona las rodillas y las caderas para bajar y agarrar la barra, asegurándote de que las tibias toquen la barra."
                ],
                execution: [
                    "Levanta la barra extendiendo las caderas y las rodillas al mismo tiempo, manteniendo la barra cerca del cuerpo.",
                    "Mantén la espalda recta y los hombros hacia atrás durante todo el movimiento.",
                    "Una vez que estés completamente erguido, aprieta los glúteos y los músculos de la espalda baja.",
                    "Baja la barra de manera controlada, flexionando las caderas y las rodillas, y manteniendo la barra cerca del cuerpo.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita redondearla durante el levantamiento.",
                    "Concéntrate en usar los músculos de las piernas y la espalda baja para levantar la barra, no solo los brazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira profundamente antes de levantar la barra y exhala al final del levantamiento."
                ],
                muscles: [
                    {
                        name: "Glúteo mayor",
                        desc: "Principalmente trabaja en la extensión de la cadera."
                    },
                    {
                        name: "Isquiotibiales",
                        desc: "Trabajan en la flexión de la rodilla y extensión de la cadera."
                    },
                    {
                        name: "Cuádriceps",
                        desc: "Ayudan en la extensión de la rodilla."
                    },
                    {
                        name: "Erectores de la columna",
                        desc: "Mantienen la estabilidad de la espalda."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la estabilización de los hombros."
                    },
                    {
                        name: "Dorsal ancho",
                        desc: "Asiste en la estabilización de la espalda."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento total del cuerpo",
                        desc: "Involucra varios grupos musculares, promoviendo un equilibrio muscular y una mayor estabilidad."
                    },
                    {
                        name: "Incremento de la fuerza funcional",
                        desc: "Mejora la capacidad para realizar actividades diarias que requieren levantar objetos pesados."
                    },
                    {
                        name: "Mejora de la postura y estabilidad de la espalda",
                        desc: "Fortalece los músculos estabilizadores de la columna vertebral, reduciendo el riesgo de dolores y molestias en la espalda."
                    },
                    {
                        name: "Aumento de la densidad ósea",
                        desc: "Ayuda a fortalecer los huesos, lo que es beneficioso para la salud ósea a largo plazo."
                    },
                    {
                        name: "Estimulación hormonal y quema de grasa",
                        desc: "Promueve la liberación de hormonas anabólicas y ayuda en la pérdida de grasa."
                    }
                ]
            },
            {
                id: 19,
                name: "Peso Muerto Sumo con Barra",
                position: [
                    "Coloca la barra en el suelo y párate con los pies más anchos que el ancho de los hombros, con los dedos de los pies ligeramente hacia afuera.",
                    "Agarra la barra con las manos dentro de las piernas y las palmas hacia abajo.",
                    "Mantén la espalda recta, el pecho hacia arriba y los hombros hacia atrás.",
                    "Flexiona las rodillas y las caderas para bajar y agarrar la barra, asegurándote de que las tibias toquen la barra."
                ],
                execution: [
                    "Levanta la barra extendiendo las caderas y las rodillas al mismo tiempo, manteniendo la barra cerca del cuerpo.",
                    "Mantén la espalda recta y los hombros hacia atrás durante todo el movimiento.",
                    "Una vez que estés completamente erguido, aprieta los glúteos y los músculos de la espalda baja.",
                    "Baja la barra de manera controlada, flexionando las caderas y las rodillas, y manteniendo la barra cerca del cuerpo.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita redondearla durante el levantamiento.",
                    "Concéntrate en usar los músculos de las piernas y la espalda baja para levantar la barra, no solo los brazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira profundamente antes de levantar la barra y exhala al final del levantamiento."
                ],
                muscles: [
                    {
                        name: "Glúteo mayor",
                        desc: "Principalmente trabaja en la extensión de la cadera."
                    },
                    {
                        name: "Isquiotibiales",
                        desc: "Trabajan en la flexión de la rodilla y extensión de la cadera."
                    },
                    {
                        name: "Cuádriceps",
                        desc: "Ayudan en la extensión de la rodilla."
                    },
                    {
                        name: "Aductores",
                        desc: "Trabajan en la estabilización de las piernas."
                    },
                    {
                        name: "Erectores de la columna",
                        desc: "Mantienen la estabilidad de la espalda."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la estabilización de los hombros."
                    },
                    {
                        name: "Dorsal ancho",
                        desc: "Asiste en la estabilización de la espalda."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento total del cuerpo",
                        desc: "Involucra varios grupos musculares, promoviendo un equilibrio muscular y una mayor estabilidad."
                    },
                    {
                        name: "Incremento de la fuerza funcional",
                        desc: "Mejora la capacidad para realizar actividades diarias que requieren levantar objetos pesados."
                    },
                    {
                        name: "Mejora de la postura y estabilidad de la espalda",
                        desc: "Fortalece los músculos estabilizadores de la columna vertebral, reduciendo el riesgo de dolores y molestias en la espalda."
                    },
                    {
                        name: "Aumento de la densidad ósea",
                        desc: "Ayuda a fortalecer los huesos, lo que es beneficioso para la salud ósea a largo plazo."
                    },
                    {
                        name: "Estimulación hormonal y quema de grasa",
                        desc: "Promueve la liberación de hormonas anabólicas y ayuda en la pérdida de grasa."
                    }
                ]
            },
            {
                id: 20,
                name: "Peso Muerto con Barra Hexagonal",
                position: [
                    "Colócate de pie dentro de la barra hexagonal, con los pies separados al ancho de las caderas y las puntas de los pies mirando hacia adelante.",
                    "Agarra las asas de la barra con un agarre neutro (palmas enfrentadas).",
                    "Mantén la espalda recta, el pecho hacia arriba y los hombros hacia atrás.",
                    "Flexiona las rodillas y las caderas para bajar y agarrar las asas, asegurándote de que las tibias toquen la barra."
                ],
                execution: [
                    "Levanta la barra extendiendo las caderas y las rodillas al mismo tiempo, manteniendo la barra cerca del cuerpo.",
                    "Mantén la espalda recta y los hombros hacia atrás durante todo el movimiento.",
                    "Una vez que estés completamente erguido, aprieta los glúteos y los músculos de la espalda baja.",
                    "Baja la barra de manera controlada, flexionando las caderas y las rodillas, y manteniendo la barra cerca del cuerpo.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita redondearla durante el levantamiento.",
                    "Concéntrate en usar los músculos de las piernas y la espalda baja para levantar la barra, no solo los brazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira profundamente antes de levantar la barra y exhala al final del levantamiento."
                ],
                muscles: [
                    {
                        name: "Glúteo mayor",
                        desc: "Principalmente trabaja en la extensión de la cadera."
                    },
                    {
                        name: "Isquiotibiales",
                        desc: "Trabajan en la flexión de la rodilla y extensión de la cadera."
                    },
                    {
                        name: "Cuádriceps",
                        desc: "Ayudan en la extensión de la rodilla."
                    },
                    {
                        name: "Erectores de la columna",
                        desc: "Mantienen la estabilidad de la espalda."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la estabilización de los hombros."
                    },
                    {
                        name: "Dorsal ancho",
                        desc: "Asiste en la estabilización de la espalda."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento total del cuerpo",
                        desc: "Involucra varios grupos musculares, promoviendo un equilibrio muscular y una mayor estabilidad."
                    },
                    {
                        name: "Incremento de la fuerza funcional",
                        desc: "Mejora la capacidad para realizar actividades diarias que requieren levantar objetos pesados."
                    },
                    {
                        name: "Mejora de la postura y estabilidad de la espalda",
                        desc: "Fortalece los músculos estabilizadores de la columna vertebral, reduciendo el riesgo de dolores y molestias en la espalda."
                    },
                    {
                        name: "Aumento de la densidad ósea",
                        desc: "Ayuda a fortalecer los huesos, lo que es beneficioso para la salud ósea a largo plazo."
                    },
                    {
                        name: "Estimulación hormonal y quema de grasa",
                        desc: "Promueve la liberación de hormonas anabólicas y ayuda en la pérdida de grasa."
                    }
                ]
            },
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
        ]
    },
    {
        id: "hombro",
        img: hombro,
        routine: [
            {
                id: 1,
                name: "Press de hombro con mancuernas",
                position: ["Siéntate en un banco con respaldo vertical, manteniendo la espalda recta y los pies firmemente apoyados en el suelo.", "Sujeta una mancuerna en cada mano, con las palmas mirando hacia adelante y las mancuernas a la altura de los hombros.", "Mantén los codos doblados y alineados con el torso."],
                execution: ["Empuja las mancuernas hacia arriba hasta que los brazos estén completamente extendidos por encima de la cabeza.", "Mantén los codos ligeramente flexionados en la parte superior del movimiento para evitar bloquear las articulaciones.", "Baja las mancuernas de manera controlada hasta la posición inicial, asegurándote de que los codos vuelvan a la altura de los hombros.", "Repite el movimiento para el número deseado de repeticiones."],
                advices: ["Mantén la espalda recta y evita arquearla durante el levantamiento.", "Concéntrate en usar los músculos del hombro para levantar las mancuernas, no solo los brazos.", "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.", "Respira de manera controlada, exhalando al levantar las mancuernas e inhalando al bajarlas."],
                muscles: [
                    {
                        name: "Deltoides",
                        desc: "Principalmente trabaja las tres porciones del deltoides (anterior, media y posterior)."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la estabilización del movimiento."
                    },
                    {
                        name: "Tríceps Braquial",
                        desc: "Asiste en la extensión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los hombros",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y Control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ],
            },
            {
                id: 2,
                name: "Elevación lateral con mancuernas",
                position: [
                    "Colócate de pie con los pies separados al ancho de los hombros.",
                    "Sujeta una mancuerna en cada mano con un agarre neutro (palmas enfrentadas).",
                    "Mantén los brazos extendidos a los lados del cuerpo, con una ligera flexión en los codos.",
                    "Mantén la espalda recta y el abdomen contraído."
                ],
                execution: [
                    "Levanta las mancuernas hacia los lados hasta que los brazos estén paralelos al suelo.",
                    "Mantén los codos ligeramente flexionados y las palmas mirando hacia abajo.",
                    "Haz una pausa de 1-2 segundos en la parte superior del movimiento.",
                    "Baja las mancuernas de manera controlada hasta la posición inicial.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte hacia adelante o hacia atrás.",
                    "Concéntrate en usar los músculos del hombro para levantar las mancuernas, no solo los brazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar las mancuernas e inhalando al bajarlas."
                ],
                muscles: [
                    {
                        name: "Deltoides laterales",
                        desc: "Principalmente trabaja la parte media del hombro."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la estabilización del movimiento."
                    },
                    {
                        name: "Supraespinoso",
                        desc: "Asiste en la elevación del brazo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los hombros",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 3,
                name: "Elevación frontal con mancuernas",
                position: [
                    "Colócate de pie con los pies separados al ancho de los hombros.",
                    "Sujeta una mancuerna en cada mano con un agarre prono (palmas hacia abajo).",
                    "Mantén los brazos extendidos a los lados del cuerpo, con una ligera flexión en los codos.",
                    "Mantén la espalda recta y el abdomen contraído."
                ],
                execution: [
                    "Levanta las mancuernas hacia adelante hasta que los brazos estén paralelos al suelo.",
                    "Mantén los codos ligeramente flexionados y las palmas mirando hacia abajo.",
                    "Haz una pausa de 1-2 segundos en la parte superior del movimiento.",
                    "Baja las mancuernas de manera controlada hasta la posición inicial.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte hacia adelante o hacia atrás.",
                    "Concéntrate en usar los músculos del hombro para levantar las mancuernas, no solo los brazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar las mancuernas e inhalando al bajarlas."
                ],
                muscles: [
                    {
                        name: "Deltoides anteriores",
                        desc: "Principalmente trabaja la parte frontal del hombro."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la estabilización del movimiento."
                    },
                    {
                        name: "Pectoral mayor",
                        desc: "Asiste en la elevación del brazo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los hombros",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 4,
                name: "Cruces inversos en polea alta",
                position: [
                    "Ajusta las poleas a una altura alta, por encima de tu cabeza.",
                    "Sujeta las empuñaduras con un agarre prono (palmas hacia abajo) y da un paso hacia adelante para estabilizarte.",
                    "Inclina ligeramente el torso hacia adelante desde las caderas, manteniendo la espalda recta.",
                    "Mantén los brazos extendidos frente a ti con una ligera flexión en los codos."
                ],
                execution: [
                    "Abre los brazos hacia los lados en un arco amplio, llevando las empuñaduras hacia atrás y contrayendo los músculos de la parte superior de la espalda.",
                    "Mantén los codos ligeramente flexionados y las palmas hacia abajo durante todo el movimiento.",
                    "Haz una pausa de 1-2 segundos en la parte superior del movimiento.",
                    "Regresa las empuñaduras de manera controlada a la posición inicial.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte hacia adelante o hacia atrás.",
                    "Concéntrate en usar los músculos de la parte superior de la espalda y los deltoides posteriores para abrir los brazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al abrir los brazos e inhalando al cerrarlos."
                ],
                muscles: [
                    {
                        name: "Deltoides posteriores",
                        desc: "Principalmente trabaja la parte trasera del hombro."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la estabilización del movimiento."
                    },
                    {
                        name: "Romboides",
                        desc: "Asisten en la retracción de los omóplatos."
                    },
                    {
                        name: "Infraespinoso y redondo menor",
                        desc: "Ayudan en la rotación externa del hombro."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de la parte superior de la espalda",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de la parte superior de la espalda y los hombros."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos de la parte superior de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos de la parte superior de la espalda sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 5,
                name: "Press de hombros en máquina Smith",
                position: [
                    "Ajusta un banco con respaldo vertical en la máquina Smith y siéntate con la espalda y la zona lumbar bien apoyadas en el respaldo.",
                    "Coloca la barra a la altura de los ojos y carga el peso deseado.",
                    "Sujeta la barra con un agarre prono (palmas hacia adelante) y las manos separadas al ancho de los hombros.",
                    "Mantén los pies firmemente apoyados en el suelo para una mayor estabilidad."
                ],
                execution: [
                    "Desbloquea la barra y empújala hacia arriba hasta que los brazos estén completamente extendidos, sin bloquear los codos.",
                    "Baja la barra de manera controlada hasta que llegue a la parte superior del pecho.",
                    "Mantén los codos ligeramente flexionados y evita que se desvíen hacia los lados.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita arquearla durante el levantamiento.",
                    "Concéntrate en usar los músculos del hombro para levantar la barra, no solo los brazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla."
                ],
                muscles: [
                    {
                        name: "Deltoides",
                        desc: "Principalmente trabaja las tres porciones del deltoides (anterior, media y posterior)."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la estabilización del movimiento."
                    },
                    {
                        name: "Tríceps braquial",
                        desc: "Asiste en la extensión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los hombros",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 6,
                name: "Remo alto con barra",
                position: [
                    "Colócate de pie con los pies separados al ancho de los hombros.",
                    "Sujeta la barra con un agarre prono (palmas hacia abajo) y las manos separadas al ancho de los hombros.",
                    "Mantén la barra frente a tus muslos, con los brazos extendidos y los codos ligeramente flexionados.",
                    "Mantén la espalda recta y el pecho hacia adelante."
                ],
                execution: [
                    "Eleva la barra verticalmente hacia arriba, llevando los codos hacia los lados y hacia arriba.",
                    "Mantén la barra cerca del cuerpo mientras la subes hasta la altura del pecho.",
                    "Contrae los músculos del trapecio en la parte superior del movimiento y mantén la contracción por un segundo.",
                    "Baja la barra de manera controlada hasta la posición inicial.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte hacia adelante o hacia atrás.",
                    "Concéntrate en usar los músculos del trapecio y los deltoides para elevar la barra, no solo los brazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al elevar la barra e inhalando al bajarla."
                ],
                muscles: [
                    {
                        name: "Trapecio",
                        desc: "Principalmente trabaja la parte superior de la espalda."
                    },
                    {
                        name: "Deltoides",
                        desc: "Ayudan en la estabilización del movimiento."
                    },
                    {
                        name: "Romboides",
                        desc: "Asisten en la retracción de los omóplatos."
                    },
                    {
                        name: "Bíceps braquial",
                        desc: "Trabaja en la flexión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de la parte superior de la espalda",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de la parte superior de la espalda y los hombros."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del trapecio, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del trapecio sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 7,
                name: "Elevaciones Posteriores para Hombros 'Pájaro'",
                position: [
                    "Colócate de pie con los pies separados al ancho de los hombros.",
                    "Sujeta una mancuerna en cada mano con un agarre neutro (palmas enfrentadas).",
                    "Inclina el torso hacia adelante desde las caderas, manteniendo la espalda recta y las rodillas ligeramente flexionadas.",
                    "Deja que los brazos cuelguen hacia abajo con las mancuernas, formando una línea perpendicular con el suelo."
                ],
                execution: [
                    "Levanta las mancuernas hacia los lados en un arco amplio, manteniendo una ligera flexión en los codos.",
                    "Contrae los músculos de la parte superior de la espalda y los deltoides posteriores en la parte superior del movimiento.",
                    "Haz una pausa de 1-2 segundos en la parte superior del movimiento.",
                    "Baja las mancuernas de manera controlada hasta la posición inicial.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte hacia adelante o hacia atrás.",
                    "Concéntrate en usar los músculos del hombro y la parte superior de la espalda para levantar las mancuernas.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar las mancuernas e inhalando al bajarlas."
                ],
                muscles: [
                    {
                        name: "Deltoides posteriores",
                        desc: "Principalmente trabaja la parte trasera del hombro."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la estabilización del movimiento."
                    },
                    {
                        name: "Romboides",
                        desc: "Asisten en la retracción de los omóplatos."
                    },
                    {
                        name: "Infraespinoso y redondo menor",
                        desc: "Ayudan en la rotación externa del hombro."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de la parte superior de la espalda",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de la parte superior de la espalda y los hombros."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos de la parte superior de la espalda, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos de la parte superior de la espalda sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 8,
                name: "Elevación Lateral con Cable a una Mano",
                position: [
                    "Colócate de pie junto a una polea baja, con los pies separados al ancho de los hombros.",
                    "Sujeta el asa del cable con una mano, manteniendo el brazo extendido y la palma hacia el cuerpo.",
                    "Mantén una ligera flexión en el codo y el torso erguido."
                ],
                execution: [
                    "Levanta el asa lateralmente en un arco amplio hasta que el brazo esté paralelo al suelo.",
                    "Mantén el codo ligeramente flexionado y la palma hacia abajo durante todo el movimiento.",
                    "Haz una pausa de 1-2 segundos en la parte superior del movimiento.",
                    "Baja el asa de manera controlada hasta la posición inicial.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte hacia adelante o hacia atrás.",
                    "Concéntrate en usar los músculos del hombro para levantar el asa, no solo los brazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar el asa e inhalando al bajarla."
                ],
                muscles: [
                    {
                        name: "Deltoides laterales",
                        desc: "Principalmente trabaja la parte media del hombro."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la estabilización del movimiento."
                    },
                    {
                        name: "Supraespinoso",
                        desc: "Asiste en la elevación del brazo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los hombros",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 9,
                name: "Press Militar con Mancuernas",
                position: [
                    "Siéntate en un banco con respaldo vertical, manteniendo la espalda recta y los pies firmemente apoyados en el suelo.",
                    "Sujeta una mancuerna en cada mano, con las palmas mirando hacia adelante y las mancuernas a la altura de los hombros.",
                    "Mantén los codos doblados y alineados con el torso."
                ],
                execution: [
                    "Empuja las mancuernas hacia arriba hasta que los brazos estén completamente extendidos por encima de la cabeza.",
                    "Mantén los codos ligeramente flexionados en la parte superior del movimiento para evitar bloquear las articulaciones.",
                    "Baja las mancuernas de manera controlada hasta la posición inicial, asegurándote de que los codos vuelvan a la altura de los hombros.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita arquearla durante el levantamiento.",
                    "Concéntrate en usar los músculos del hombro para levantar las mancuernas, no solo los brazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar las mancuernas e inhalando al bajarlas."
                ],
                muscles: [
                    {
                        name: "Deltoides",
                        desc: "Principalmente trabaja las tres porciones del deltoides (anterior, media y posterior)."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la estabilización del movimiento."
                    },
                    {
                        name: "Tríceps braquial",
                        desc: "Asiste en la extensión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los hombros",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 10,
                name: "Press Militar",
                position: [
                    "Colócate de pie con los pies separados al ancho de los hombros.",
                    "Sujeta una barra con un agarre prono (palmas hacia abajo) y las manos separadas al ancho de los hombros.",
                    "Mantén la barra a la altura de los hombros, con los codos ligeramente hacia adelante y el torso erguido."
                ],
                execution: [
                    "Empuja la barra hacia arriba hasta que los brazos estén completamente extendidos por encima de la cabeza.",
                    "Mantén los codos ligeramente flexionados en la parte superior del movimiento para evitar bloquear las articulaciones.",
                    "Baja la barra de manera controlada hasta la posición inicial, asegurándote de que los codos vuelvan a la altura de los hombros.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita arquearla durante el levantamiento.",
                    "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
                    "Concéntrate en usar los músculos del hombro para levantar la barra, no solo los brazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla."
                ],
                muscles: [
                    {
                        name: "Deltoides",
                        desc: "Principalmente trabaja las tres porciones del deltoides (anterior, media y posterior)."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la estabilización del movimiento."
                    },
                    {
                        name: "Tríceps braquial",
                        desc: "Asiste en la extensión del codo."
                    },
                    {
                        name: "Pectoral superior",
                        desc: "Ayuda en la estabilización y fuerza del movimiento."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los hombros",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 11,
                name: "Elevaciones Frontales con Cable a una Mano",
                position: [
                    "Colócate de pie junto a una polea baja, con los pies separados al ancho de los hombros.",
                    "Sujeta el asa del cable con una mano, manteniendo el brazo extendido y la palma hacia el cuerpo.",
                    "Mantén una ligera flexión en el codo y el torso erguido."
                ],
                execution: [
                    "Levanta el asa hacia adelante en un arco amplio hasta que el brazo esté paralelo al suelo.",
                    "Mantén el codo ligeramente flexionado y la palma hacia abajo durante todo el movimiento.",
                    "Haz una pausa de 1-2 segundos en la parte superior del movimiento.",
                    "Baja el asa de manera controlada hasta la posición inicial.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte hacia adelante o hacia atrás.",
                    "Concéntrate en usar los músculos del hombro para levantar el asa, no solo los brazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar el asa e inhalando al bajarla."
                ],
                muscles: [
                    {
                        name: "Deltoides anteriores",
                        desc: "Principalmente trabaja la parte frontal del hombro."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la estabilización del movimiento."
                    },
                    {
                        name: "Pectoral mayor",
                        desc: "Asiste en la elevación del brazo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los hombros",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 12,
                name: "Elevaciones Frontales con Barra",
                position: [
                    "Colócate de pie con los pies separados al ancho de los hombros.",
                    "Sujeta la barra con un agarre prono (palmas hacia abajo) y las manos separadas al ancho de los hombros.",
                    "Mantén la barra frente a tus muslos, con los brazos extendidos y los codos ligeramente flexionados.",
                    "Mantén la espalda recta y el pecho hacia adelante."
                ],
                execution: [
                    "Levanta la barra hacia adelante en un arco amplio hasta que los brazos estén paralelos al suelo.",
                    "Mantén los codos ligeramente flexionados y las palmas hacia abajo durante todo el movimiento.",
                    "Haz una pausa de 1-2 segundos en la parte superior del movimiento.",
                    "Baja la barra de manera controlada hasta la posición inicial.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte hacia adelante o hacia atrás.",
                    "Concéntrate en usar los músculos del hombro para levantar la barra, no solo los brazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla."
                ],
                muscles: [
                    {
                        name: "Deltoides anteriores",
                        desc: "Principalmente trabaja la parte frontal del hombro."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la estabilización del movimiento."
                    },
                    {
                        name: "Pectoral mayor",
                        desc: "Asiste en la elevación del brazo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los hombros",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 13,
                name: "Press Militar Sentado con Barra",
                position: [
                    "Siéntate en un banco con respaldo vertical, manteniendo la espalda recta y los pies firmemente apoyados en el suelo.",
                    "Sujeta la barra con un agarre prono (palmas hacia abajo) y las manos separadas al ancho de los hombros.",
                    "Mantén la barra a la altura de los hombros, con los codos ligeramente hacia adelante y el torso erguido."
                ],
                execution: [
                    "Empuja la barra hacia arriba hasta que los brazos estén completamente extendidos por encima de la cabeza.",
                    "Mantén los codos ligeramente flexionados en la parte superior del movimiento para evitar bloquear las articulaciones.",
                    "Baja la barra de manera controlada hasta la posición inicial, asegurándote de que los codos vuelvan a la altura de los hombros.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita arquearla durante el levantamiento.",
                    "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
                    "Concéntrate en usar los músculos del hombro para levantar la barra, no solo los brazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla."
                ],
                muscles: [
                    {
                        name: "Deltoides",
                        desc: "Principalmente trabaja las tres porciones del deltoides (anterior, media y posterior)."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la estabilización del movimiento."
                    },
                    {
                        name: "Tríceps braquial",
                        desc: "Asiste en la extensión del codo."
                    },
                    {
                        name: "Pectoral superior",
                        desc: "Ayuda en la estabilización y fuerza del movimiento."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los hombros",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 14,
                name: "Press Tras Nuca Sentado",
                position: [
                    "Siéntate en un banco con respaldo vertical, manteniendo la espalda recta y los pies firmemente apoyados en el suelo.",
                    "Sujeta la barra con un agarre prono (palmas hacia abajo) y las manos separadas al ancho de los hombros.",
                    "Mantén la barra detrás de la cabeza, a la altura de la nuca."
                ],
                execution: [
                    "Empuja la barra hacia arriba hasta que los brazos estén completamente extendidos por encima de la cabeza.",
                    "Mantén los codos ligeramente flexionados en la parte superior del movimiento para evitar bloquear las articulaciones.",
                    "Baja la barra de manera controlada hasta la posición inicial, asegurándote de que los codos vuelvan a la altura de la nuca.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita arquearla durante el levantamiento.",
                    "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
                    "Concéntrate en usar los músculos del hombro para levantar la barra, no solo los brazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla."
                ],
                muscles: [
                    {
                        name: "Deltoides",
                        desc: "Principalmente trabaja las tres porciones del deltoides (anterior, media y posterior)."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la estabilización del movimiento."
                    },
                    {
                        name: "Tríceps braquial",
                        desc: "Asiste en la extensión del codo."
                    },
                    {
                        name: "Pectoral superior",
                        desc: "Ayuda en la estabilización y fuerza del movimiento."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los hombros",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ],
                warnings: [
                    {
                        name: "Riesgo de Lesiones",
                        desc: "La posición de la barra detrás de la cabeza puede ejercer presión en las vértebras cervicales y los hombros, aumentando el riesgo de lesiones si no se ejecuta correctamente."
                    },
                    {
                        name: "Alternativas Seguras",
                        desc: "Si sientes molestias, considera alternativas como el press militar con barra o mancuernas, que trabajan los mismos músculos con menor riesgo."
                    }
                ]
            },
            {
                id: 15,
                name: "Press Militar de Pie",
                position: [
                    "Colócate de pie con los pies separados al ancho de los hombros.",
                    "Sujeta una barra con un agarre prono (palmas hacia abajo) y las manos separadas al ancho de los hombros.",
                    "Mantén la barra a la altura de los hombros, con los codos ligeramente hacia adelante y el torso erguido."
                ],
                execution: [
                    "Empuja la barra hacia arriba hasta que los brazos estén completamente extendidos por encima de la cabeza.",
                    "Mantén los codos ligeramente flexionados en la parte superior del movimiento para evitar bloquear las articulaciones.",
                    "Baja la barra de manera controlada hasta la posición inicial, asegurándote de que los codos vuelvan a la altura de los hombros.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita arquearla durante el levantamiento.",
                    "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
                    "Concéntrate en usar los músculos del hombro para levantar la barra, no solo los brazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla."
                ],
                muscles: [
                    {
                        name: "Deltoides",
                        desc: "Principalmente trabaja las tres porciones del deltoides (anterior, media y posterior)."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la estabilización del movimiento."
                    },
                    {
                        name: "Tríceps braquial",
                        desc: "Asiste en la extensión del codo."
                    },
                    {
                        name: "Pectoral superior",
                        desc: "Ayuda en la estabilización y fuerza del movimiento."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los hombros",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ]
            },
            {
                id: 16,
                name: "Press Militar de Pie Tras Nuca",
                position: [
                    "Colócate de pie con los pies separados al ancho de los hombros.",
                    "Sujeta una barra con un agarre prono (palmas hacia abajo) y las manos separadas un poco más que el ancho de los hombros.",
                    "Mantén la barra detrás de la cabeza, a la altura de la nuca.",
                    "Mantén la espalda recta y el pecho hacia adelante."
                ],
                execution: [
                    "Empuja la barra hacia arriba hasta que los brazos estén completamente extendidos por encima de la cabeza.",
                    "Mantén los codos ligeramente flexionados en la parte superior del movimiento para evitar bloquear las articulaciones.",
                    "Baja la barra de manera controlada hasta la posición inicial, asegurándote de que los codos vuelvan a la altura de la nuca.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita arquearla durante el levantamiento.",
                    "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
                    "Concéntrate en usar los músculos del hombro para levantar la barra, no solo los brazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla."
                ],
                muscles: [
                    {
                        name: "Deltoides",
                        desc: "Principalmente trabaja las tres porciones del deltoides (anterior, media y posterior)."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la estabilización del movimiento."
                    },
                    {
                        name: "Tríceps braquial",
                        desc: "Asiste en la extensión del codo."
                    },
                    {
                        name: "Pectoral superior",
                        desc: "Ayuda en la estabilización y fuerza del movimiento."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los hombros",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ],
                warnings: [
                    {
                        name: "Riesgo de Lesiones",
                        desc: "La posición de la barra detrás de la cabeza puede ejercer presión en las vértebras cervicales y los hombros, aumentando el riesgo de lesiones si no se ejecuta correctamente."
                    },
                    {
                        name: "Alternativas Seguras",
                        desc: "Si sientes molestias, considera alternativas como el press militar con barra o mancuernas, que trabajan los mismos músculos con menor riesgo."
                    }
                ]
            },
            {
                id: 17,
                name: "Elevación Frontal con Mancuernas Alternas (Agarre Neutro)",
                position: [
                    "Colócate de pie con los pies separados al ancho de los hombros.",
                    "Sujeta una mancuerna en cada mano con un agarre neutro (palmas enfrentadas).",
                    "Mantén los brazos extendidos a lo largo del cuerpo, con los codos ligeramente flexionados.",
                    "Mantén la espalda recta y el pecho hacia adelante."
                ],
                execution: [
                    "Levanta una mancuerna hacia adelante en un movimiento de arco hasta que el brazo esté paralelo al suelo.",
                    "Mantén la contracción en el deltoides anterior durante un momento.",
                    "Baja la mancuerna de manera controlada hasta la posición inicial.",
                    "Repite el movimiento con el otro brazo.",
                    "Alterna los brazos para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita arquearla durante el levantamiento.",
                    "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
                    "Concéntrate en usar los músculos del hombro para levantar la mancuerna, no solo los brazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar la mancuerna e inhalando al bajarla."
                ],
                muscles: [
                    {
                        name: "Deltoides anterior",
                        desc: "Principalmente trabaja la porción anterior del deltoides."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la estabilización del movimiento."
                    },
                    {
                        name: "Tríceps braquial",
                        desc: "Asiste en la extensión del codo."
                    },
                    {
                        name: "Pectoral superior",
                        desc: "Ayuda en la estabilización y fuerza del movimiento."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los hombros",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ],
                warnings: [
                    {
                        name: "Riesgo de Lesiones",
                        desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los hombros y la espalda."
                    },
                    {
                        name: "Alternativas Seguras",
                        desc: "Si sientes molestias, considera alternativas como la elevación frontal con barra o con discos, que también trabajan los mismos músculos con menor riesgo."
                    }
                ]
            },
            {
                id: 18,
                name: "Elevación Frontal con un Brazo en Polea Baja (Agarre Neutro)",
                position: [
                    "Colócate de pie de espaldas a la polea baja.",
                    "Sujeta el mango de la polea con una mano en agarre neutro (palma mirando hacia el cuerpo).",
                    "Mantén el brazo extendido a lo largo del cuerpo, con el codo ligeramente flexionado.",
                    "Mantén la espalda recta y el pecho hacia adelante."
                ],
                execution: [
                    "Levanta el mango hacia adelante en un movimiento de arco hasta que el brazo esté paralelo al suelo.",
                    "Mantén la contracción en el deltoides anterior durante un momento.",
                    "Baja el mango de manera controlada hasta la posición inicial.",
                    "Repite el movimiento para el número deseado de repeticiones.",
                    "Cambia de brazo y repite el ejercicio."
                ],
                advices: [
                    "Mantén la espalda recta y evita arquearla durante el levantamiento.",
                    "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
                    "Concéntrate en usar los músculos del hombro para levantar el mango, no solo los brazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar el mango e inhalando al bajarlo."
                ],
                muscles: [
                    {
                        name: "Deltoides anterior",
                        desc: "Principalmente trabaja la porción anterior del deltoides."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la estabilización del movimiento."
                    },
                    {
                        name: "Tríceps braquial",
                        desc: "Asiste en la extensión del codo."
                    },
                    {
                        name: "Pectoral superior",
                        desc: "Ayuda en la estabilización y fuerza del movimiento."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los hombros",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ],
                warnings: [
                    {
                        name: "Riesgo de Lesiones",
                        desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los hombros y la espalda."
                    },
                    {
                        name: "Alternativas Seguras",
                        desc: "Si sientes molestias, considera alternativas como la elevación frontal con mancuernas o con discos, que también trabajan los mismos músculos con menor riesgo."
                    }
                ]
            },
            {
                id: 19,
                name: "Elevación Frontal con Mancuerna a Dos Manos",
                position: [
                    "Colócate de pie con los pies separados al ancho de los hombros.",
                    "Sujeta una mancuerna con ambas manos en agarre neutro (palmas enfrentadas).",
                    "Mantén los brazos extendidos a lo largo del cuerpo, con los codos ligeramente flexionados.",
                    "Mantén la espalda recta y el pecho hacia adelante."
                ],
                execution: [
                    "Levanta la mancuerna hacia adelante en un movimiento de arco hasta que los brazos estén paralelos al suelo.",
                    "Mantén los codos ligeramente flexionados en la parte superior del movimiento para evitar bloquear las articulaciones.",
                    "Baja la mancuerna de manera controlada hasta la posición inicial.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita arquearla durante el levantamiento.",
                    "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
                    "Concéntrate en usar los músculos del hombro para levantar la mancuerna, no solo los brazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar la mancuerna e inhalando al bajarla."
                ],
                muscles: [
                    {
                        name: "Deltoides",
                        desc: "Principalmente trabaja la porción anterior del deltoides."
                    },
                    {
                        name: "Trapecio",
                        desc: "Ayuda en la estabilización del movimiento."
                    },
                    {
                        name: "Tríceps braquial",
                        desc: "Asiste en la extensión del codo."
                    },
                    {
                        name: "Pectoral superior",
                        desc: "Ayuda en la estabilización y fuerza del movimiento."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los hombros",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los hombros."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del hombro, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del hombro sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ],
                warnings: [
                    {
                        name: "Riesgo de Lesiones",
                        desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los hombros y la espalda."
                    },
                    {
                        name: "Alternativas Seguras",
                        desc: "Si sientes molestias, considera alternativas como la elevación frontal con polea baja o con discos, que también trabajan los mismos músculos con menor riesgo."
                    }
                ]
            }
        ]
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
                    "Mantén la espalda recta y el pecho hacia adelante."
                ],
                execution: [
                    "Flexiona los codos y levanta la barra hacia los hombros.",
                    "Mantén los codos pegados al cuerpo y no los muevas durante el movimiento.",
                    "Haz una pausa en la parte superior del movimiento, apretando los bíceps.",
                    "Baja la barra de manera controlada hasta la posición inicial.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte durante el levantamiento.",
                    "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
                    "Concéntrate en usar los músculos del bíceps para levantar la barra, no solo los antebrazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla."
                ],
                muscles: [
                    {
                        name: "Bíceps braquial",
                        desc: "Principalmente trabaja la cabeza corta y larga del bíceps."
                    },
                    {
                        name: "Braquial",
                        desc: "Ayuda en la flexión del codo."
                    },
                    {
                        name: "Braquiorradial",
                        desc: "Asiste en la flexión del codo."
                    },
                    {
                        name: "Deltoides anterior",
                        desc: "Ayuda en la estabilización del movimiento."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los bíceps",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los bíceps."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del brazo, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del bíceps sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ],
                warnings: [
                    {
                        name: "Riesgo de Lesiones",
                        desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y la espalda."
                    },
                    {
                        name: "Alternativas Seguras",
                        desc: "Si sientes molestias, considera alternativas como el curl con mancuernas o con barra Z, que también trabajan los mismos músculos con menor riesgo."
                    }
                ]
            },
            {
                id: 2,
                name: "Curl Alterno con Mancuerna",
                position: [
                    "Colócate de pie con los pies separados al ancho de los hombros.",
                    "Sujeta una mancuerna en cada mano con un agarre supino (palmas hacia arriba).",
                    "Mantén los brazos extendidos hacia abajo, con los codos ligeramente flexionados.",
                    "Mantén la espalda recta y el pecho hacia adelante."
                ],
                execution: [
                    "Flexiona el codo de un brazo y levanta la mancuerna hacia el hombro, girando la palma hacia arriba durante el movimiento.",
                    "Mantén el codo pegado al cuerpo y no lo muevas durante el levantamiento.",
                    "Haz una pausa en la parte superior del movimiento, apretando el bíceps.",
                    "Baja la mancuerna de manera controlada hasta la posición inicial.",
                    "Repite el movimiento con el otro brazo.",
                    "Alterna los brazos para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte durante el levantamiento.",
                    "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
                    "Concéntrate en usar los músculos del bíceps para levantar la mancuerna, no solo los antebrazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar la mancuerna e inhalando al bajarla."
                ],
                muscles: [
                    {
                        name: "Bíceps braquial",
                        desc: "Principalmente trabaja la cabeza corta y larga del bíceps."
                    },
                    {
                        name: "Braquial",
                        desc: "Ayuda en la flexión del codo."
                    },
                    {
                        name: "Braquiorradial",
                        desc: "Asiste en la flexión del codo."
                    },
                    {
                        name: "Deltoides anterior",
                        desc: "Ayuda en la estabilización del movimiento."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los bíceps",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los bíceps."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del brazo, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del bíceps sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ],
                warnings: [
                    {
                        name: "Riesgo de Lesiones",
                        desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y la espalda."
                    },
                    {
                        name: "Alternativas Seguras",
                        desc: "Si sientes molestias, considera alternativas como el curl con barra o con barra Z, que también trabajan los mismos músculos con menor riesgo."
                    }
                ]
            },
            {
                id: 3,
                name: "Curl con Cuerda en Polea Baja",
                position: [
                    "Colócate de pie frente a la polea baja.",
                    "Sujeta la cuerda con ambas manos en agarre neutro (palmas enfrentadas).",
                    "Mantén los brazos extendidos hacia abajo, con los codos ligeramente flexionados.",
                    "Mantén la espalda recta y el pecho hacia adelante."
                ],
                execution: [
                    "Flexiona los codos y levanta la cuerda hacia los hombros, separando ligeramente las manos al subir.",
                    "Mantén los codos pegados al cuerpo y no los muevas durante el levantamiento.",
                    "Haz una pausa en la parte superior del movimiento, apretando los bíceps.",
                    "Baja la cuerda de manera controlada hasta la posición inicial.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte durante el levantamiento.",
                    "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
                    "Concéntrate en usar los músculos del bíceps para levantar la cuerda, no solo los antebrazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar la cuerda e inhalando al bajarla."
                ],
                muscles: [
                    {
                        name: "Bíceps braquial",
                        desc: "Principalmente trabaja la cabeza corta y larga del bíceps."
                    },
                    {
                        name: "Braquial",
                        desc: "Ayuda en la flexión del codo."
                    },
                    {
                        name: "Braquiorradial",
                        desc: "Asiste en la flexión del codo."
                    },
                    {
                        name: "Deltoides anterior",
                        desc: "Ayuda en la estabilización del movimiento."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los bíceps",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los bíceps."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del brazo, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del bíceps sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ],
                warnings: [
                    {
                        name: "Riesgo de Lesiones",
                        desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y la espalda."
                    },
                    {
                        name: "Alternativas Seguras",
                        desc: "Si sientes molestias, considera alternativas como el curl con mancuernas o con barra Z, que también trabajan los mismos músculos con menor riesgo."
                    }
                ]
            },
            {
                id: 4,
                name: "Curl con Barra EZ",
                position: [
                    "Colócate de pie con los pies separados al ancho de los hombros.",
                    "Sujeta la barra EZ con un agarre supino (palmas hacia arriba) y las manos en las curvas de la barra.",
                    "Mantén los brazos extendidos hacia abajo, con los codos ligeramente flexionados.",
                    "Mantén la espalda recta y el pecho hacia adelante."
                ],
                execution: [
                    "Flexiona los codos y levanta la barra hacia los hombros.",
                    "Mantén los codos pegados al cuerpo y no los muevas durante el levantamiento.",
                    "Haz una pausa en la parte superior del movimiento, apretando los bíceps.",
                    "Baja la barra de manera controlada hasta la posición inicial.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte durante el levantamiento.",
                    "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
                    "Concéntrate en usar los músculos del bíceps para levantar la barra, no solo los antebrazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla."
                ],
                muscles: [
                    {
                        name: "Bíceps braquial",
                        desc: "Principalmente trabaja la cabeza corta y larga del bíceps."
                    },
                    {
                        name: "Braquial",
                        desc: "Ayuda en la flexión del codo."
                    },
                    {
                        name: "Braquiorradial",
                        desc: "Asiste en la flexión del codo."
                    },
                    {
                        name: "Deltoides anterior",
                        desc: "Ayuda en la estabilización del movimiento."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los bíceps",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los bíceps."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del brazo, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del bíceps sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ],
                warnings: [
                    {
                        name: "Riesgo de Lesiones",
                        desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y la espalda."
                    },
                    {
                        name: "Alternativas Seguras",
                        desc: "Si sientes molestias, considera alternativas como el curl con mancuernas o con barra recta, que también trabajan los mismos músculos con menor riesgo."
                    }
                ]
            },
            {
                id: 5,
                name: "Curl de Predicador con Barra EZ",
                position: [
                    "Colócate de pie o sentado en un banco predicador ajustado a la altura adecuada.",
                    "Sujeta la barra EZ con un agarre supino (palmas hacia arriba) y las manos en las curvas de la barra.",
                    "Apoya la parte superior de los brazos en el banco predicador, asegurándote de que los codos estén ligeramente flexionados.",
                    "Mantén la espalda recta y el pecho hacia adelante."
                ],
                execution: [
                    "Flexiona los codos y levanta la barra hacia los hombros.",
                    "Mantén los codos pegados al banco y no los muevas durante el levantamiento.",
                    "Haz una pausa en la parte superior del movimiento, apretando los bíceps.",
                    "Baja la barra de manera controlada hasta la posición inicial.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte durante el levantamiento.",
                    "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
                    "Concéntrate en usar los músculos del bíceps para levantar la barra, no solo los antebrazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla."
                ],
                muscles: [
                    {
                        name: "Bíceps braquial",
                        desc: "Principalmente trabaja la cabeza corta y larga del bíceps."
                    },
                    {
                        name: "Braquial",
                        desc: "Ayuda en la flexión del codo."
                    },
                    {
                        name: "Braquiorradial",
                        desc: "Asiste en la flexión del codo."
                    },
                    {
                        name: "Deltoides anterior",
                        desc: "Ayuda en la estabilización del movimiento."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los bíceps",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los bíceps."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del brazo, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del bíceps sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ],
                warnings: [
                    {
                        name: "Riesgo de Lesiones",
                        desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y la espalda."
                    },
                    {
                        name: "Alternativas Seguras",
                        desc: "Si sientes molestias, considera alternativas como el curl con mancuernas o con barra recta, que también trabajan los mismos músculos con menor riesgo."
                    }
                ]
            },
            {
                id: 6,
                name: "Curl Alterno de Martillo Con Mancuernas",
                position: [
                    "Colócate de pie con los pies separados al ancho de los hombros.",
                    "Sujeta una mancuerna en cada mano con un agarre neutro (palmas enfrentadas).",
                    "Mantén los brazos extendidos a lo largo del cuerpo, con los codos ligeramente flexionados.",
                    "Mantén la espalda recta y el pecho hacia adelante."
                ],
                execution: [
                    "Flexiona el codo de un brazo y levanta la mancuerna hacia el hombro, manteniendo la palma hacia el cuerpo durante todo el movimiento.",
                    "Mantén el codo pegado al cuerpo y no lo muevas durante el levantamiento.",
                    "Haz una pausa en la parte superior del movimiento, apretando el bíceps.",
                    "Baja la mancuerna de manera controlada hasta la posición inicial.",
                    "Repite el movimiento con el otro brazo.",
                    "Alterna los brazos para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte durante el levantamiento.",
                    "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
                    "Concéntrate en usar los músculos del bíceps y del antebrazo para levantar la mancuerna, no solo los antebrazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar la mancuerna e inhalando al bajarla."
                ],
                muscles: [
                    {
                        name: "Bíceps braquial",
                        desc: "Principalmente trabaja la cabeza corta y larga del bíceps."
                    },
                    {
                        name: "Braquial",
                        desc: "Ayuda en la flexión del codo."
                    },
                    {
                        name: "Braquiorradial",
                        desc: "Trabaja intensamente debido al agarre neutro."
                    },
                    {
                        name: "Deltoides anterior",
                        desc: "Ayuda en la estabilización del movimiento."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los bíceps y antebrazos",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los bíceps y antebrazos."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del brazo, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del bíceps y antebrazos sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ],
                warnings: [
                    {
                        name: "Riesgo de Lesiones",
                        desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y la espalda."
                    },
                    {
                        name: "Alternativas Seguras",
                        desc: "Si sientes molestias, considera alternativas como el curl con barra o con barra Z, que también trabajan los mismos músculos con menor riesgo."
                    }
                ]
            },
            {
                id: 7,
                name: "Curl Inclinado con Mancuernas",
                position: [
                    "Ajusta un banco a un ángulo de aproximadamente 45 grados.",
                    "Siéntate en el banco con los pies firmemente apoyados en el suelo.",
                    "Sostén una mancuerna en cada mano con un agarre supino (palmas hacia arriba).",
                    "Mantén los brazos extendidos hacia abajo, con los codos ligeramente flexionados.",
                    "Asegúrate de que la espalda esté bien apoyada en el respaldo del banco y el pecho hacia adelante."
                ],
                execution: [
                    "Flexiona los codos y levanta las mancuernas hacia los hombros, manteniendo las palmas hacia arriba.",
                    "Mantén los codos pegados al cuerpo y no los muevas durante el levantamiento.",
                    "Haz una pausa en la parte superior del movimiento, apretando los bíceps.",
                    "Baja las mancuernas de manera controlada hasta la posición inicial.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte durante el levantamiento.",
                    "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
                    "Concéntrate en usar los músculos del bíceps para levantar las mancuernas, no solo los antebrazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar las mancuernas e inhalando al bajarlas."
                ],
                muscles: [
                    {
                        name: "Bíceps braquial",
                        desc: "Principalmente trabaja la cabeza larga del bíceps."
                    },
                    {
                        name: "Braquial",
                        desc: "Ayuda en la flexión del codo."
                    },
                    {
                        name: "Braquiorradial",
                        desc: "Asiste en la flexión del codo."
                    },
                    {
                        name: "Deltoides anterior",
                        desc: "Ayuda en la estabilización del movimiento."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los bíceps",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los bíceps."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del brazo, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del bíceps sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ],
                warnings: [
                    {
                        name: "Riesgo de Lesiones",
                        desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y la espalda."
                    },
                    {
                        name: "Alternativas Seguras",
                        desc: "Si sientes molestias, considera alternativas como el curl con barra EZ o con barra recta, que también trabajan los mismos músculos con menor riesgo."
                    }
                ]
            },
            {
                id: 8,
                name: "Curl Concentrado con Mancuerna",
                position: [
                    "Siéntate en un banco con los pies firmemente apoyados en el suelo.",
                    "Sostén una mancuerna con una mano y coloca el codo del mismo brazo en el interior del muslo.",
                    "Mantén el brazo extendido hacia abajo, con la palma de la mano mirando hacia arriba (agarre supino).",
                    "Mantén la espalda recta y el pecho hacia adelante."
                ],
                execution: [
                    "Flexiona el codo y levanta la mancuerna hacia el hombro, manteniendo el codo apoyado en el muslo.",
                    "Haz una pausa en la parte superior del movimiento, apretando los bíceps.",
                    "Baja la mancuerna de manera controlada hasta la posición inicial.",
                    "Repite el movimiento para el número deseado de repeticiones y luego cambia de brazo."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte durante el levantamiento.",
                    "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
                    "Concéntrate en usar los músculos del bíceps para levantar la mancuerna, no solo los antebrazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar la mancuerna e inhalando al bajarla."
                ],
                muscles: [
                    {
                        name: "Bíceps braquial",
                        desc: "Principalmente trabaja la cabeza corta y larga del bíceps."
                    },
                    {
                        name: "Braquial",
                        desc: "Ayuda en la flexión del codo."
                    },
                    {
                        name: "Braquiorradial",
                        desc: "Asiste en la flexión del codo."
                    },
                    {
                        name: "Deltoides anterior",
                        desc: "Ayuda en la estabilización del movimiento."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los bíceps",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los bíceps."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del brazo, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del bíceps sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ],
                warnings: [
                    {
                        name: "Riesgo de Lesiones",
                        desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y la espalda."
                    },
                    {
                        name: "Alternativas Seguras",
                        desc: "Si sientes molestias, considera alternativas como el curl con barra EZ o con barra recta, que también trabajan los mismos músculos con menor riesgo."
                    }
                ]
            },
            {
                id: 9,
                name: "Curl de Cable en Polea Baja a Una Mano",
                position: [
                    "Colócate de pie frente a la polea baja, con los pies separados al ancho de los hombros.",
                    "Ajusta la polea a la altura más baja y sujeta la empuñadura con una mano, con un agarre supino (palma hacia arriba).",
                    "Mantén el brazo extendido hacia abajo, con el codo ligeramente flexionado.",
                    "Mantén la espalda recta y el pecho hacia adelante."
                ],
                execution: [
                    "Flexiona el codo y levanta la empuñadura hacia el hombro, manteniendo el codo pegado al cuerpo.",
                    "Haz una pausa en la parte superior del movimiento, apretando los bíceps.",
                    "Baja la empuñadura de manera controlada hasta la posición inicial.",
                    "Repite el movimiento para el número deseado de repeticiones y luego cambia de brazo."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte durante el levantamiento.",
                    "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
                    "Concéntrate en usar los músculos del bíceps para levantar la empuñadura, no solo los antebrazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar la empuñadura e inhalando al bajarla."
                ],
                muscles: [
                    {
                        name: "Bíceps braquial",
                        desc: "Principalmente trabaja la cabeza corta y larga del bíceps."
                    },
                    {
                        name: "Braquial",
                        desc: "Ayuda en la flexión del codo."
                    },
                    {
                        name: "Braquiorradial",
                        desc: "Asiste en la flexión del codo."
                    },
                    {
                        name: "Deltoides anterior",
                        desc: "Ayuda en la estabilización del movimiento."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los bíceps",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los bíceps."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del brazo, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del bíceps sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ],
                warnings: [
                    {
                        name: "Riesgo de Lesiones",
                        desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y la espalda."
                    },
                    {
                        name: "Alternativas Seguras",
                        desc: "Si sientes molestias, considera alternativas como el curl con barra EZ o con barra recta, que también trabajan los mismos músculos con menor riesgo."
                    }
                ]
            },
            {
                id: 10,
                name: "Curl de Cable con Barra Recta en Polea Baja",
                position: [
                    "Colócate de pie frente a la máquina de polea baja, con los pies separados al ancho de los hombros.",
                    "Ajusta la polea a la altura más baja y sujeta la barra recta con un agarre supino (palmas hacia arriba).",
                    "Mantén los brazos extendidos hacia abajo, con los codos ligeramente flexionados.",
                    "Mantén la espalda recta y el pecho hacia adelante."
                ],
                execution: [
                    "Flexiona los codos y levanta la barra hacia los hombros, manteniendo los codos pegados al cuerpo.",
                    "Haz una pausa en la parte superior del movimiento, apretando los bíceps.",
                    "Baja la barra de manera controlada hasta la posición inicial.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte durante el levantamiento.",
                    "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
                    "Concéntrate en usar los músculos del bíceps para levantar la barra, no solo los antebrazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla."
                ],
                muscles: [
                    {
                        name: "Bíceps braquial",
                        desc: "Principalmente trabaja la cabeza corta y larga del bíceps."
                    },
                    {
                        name: "Braquial",
                        desc: "Ayuda en la flexión del codo."
                    },
                    {
                        name: "Braquiorradial",
                        desc: "Asiste en la flexión del codo."
                    },
                    {
                        name: "Deltoides anterior",
                        desc: "Ayuda en la estabilización del movimiento."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los bíceps",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los bíceps."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del brazo, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del bíceps sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ],
                warnings: [
                    {
                        name: "Riesgo de Lesiones",
                        desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y la espalda."
                    },
                    {
                        name: "Alternativas Seguras",
                        desc: "Si sientes molestias, considera alternativas como el curl con barra EZ o con mancuernas, que también trabajan los mismos músculos con menor riesgo."
                    }
                ]
            },
            {
                id: 11,
                name: "Curl de Cable en Polea Alta de Pie",
                position: [
                    "Colócate de pie frente a la máquina de polea alta, con los pies separados al ancho de los hombros.",
                    "Ajusta la polea a la altura más alta y sujeta la barra o las asas con un agarre supino (palmas hacia arriba).",
                    "Mantén los brazos extendidos hacia adelante y ligeramente hacia abajo, con los codos ligeramente flexionados.",
                    "Mantén la espalda recta y el pecho hacia adelante."
                ],
                execution: [
                    "Flexiona los codos y tira de la barra o las asas hacia la cabeza, manteniendo los codos pegados al cuerpo.",
                    "Haz una pausa en la parte superior del movimiento, apretando los bíceps.",
                    "Baja la barra o las asas de manera controlada hasta la posición inicial.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte durante el levantamiento.",
                    "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
                    "Concéntrate en usar los músculos del bíceps para levantar la barra o las asas, no solo los antebrazos.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar la barra o las asas e inhalando al bajarlas."
                ],
                muscles: [
                    {
                        name: "Bíceps braquial",
                        desc: "Principalmente trabaja la cabeza corta y larga del bíceps."
                    },
                    {
                        name: "Braquial",
                        desc: "Ayuda en la flexión del codo."
                    },
                    {
                        name: "Braquiorradial",
                        desc: "Asiste en la flexión del codo."
                    },
                    {
                        name: "Deltoides anterior",
                        desc: "Ayuda en la estabilización del movimiento."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los bíceps",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los bíceps."
                    },
                    {
                        name: "Mejora de la postura",
                        desc: "Al fortalecer los músculos del brazo, puedes corregir problemas posturales y prevenir dolores en la zona del cuello y los hombros."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del bíceps sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ],
                warnings: [
                    {
                        name: "Riesgo de Lesiones",
                        desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en los codos y la espalda."
                    },
                    {
                        name: "Alternativas Seguras",
                        desc: "Si sientes molestias, considera alternativas como el curl con barra EZ o con mancuernas, que también trabajan los mismos músculos con menor riesgo."
                    }
                ]
            },
            {
                id: 12,
                name: "Curl de Muñeca con Barra Sentado",
                position: [
                    "Siéntate en el extremo de un banco plano con los pies firmemente apoyados en el suelo.",
                    "Sostén una barra con un agarre supino (palmas hacia arriba).",
                    "Apoya la parte posterior de los antebrazos en la parte superior de los muslos o en el extremo del banco, de manera que las muñecas queden justo al final de las rodillas o del banco."
                ],
                execution: [
                    "Sin mover los antebrazos, levanta lentamente las manos hacia arriba lo máximo posible, apretando los músculos de los antebrazos en la parte superior del movimiento.",
                    "Haz una pausa en la parte superior del movimiento.",
                    "Baja lentamente la barra hasta la posición inicial.",
                    "Repite el ejercicio el número de repeticiones deseadas."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte durante el levantamiento.",
                    "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
                    "Concéntrate en usar los músculos del antebrazo para levantar la barra, no solo las muñecas.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla."
                ],
                muscles: [
                    {
                        name: "Flexores de la muñeca",
                        desc: "Principalmente trabaja los músculos flexores del antebrazo."
                    },
                    {
                        name: "Extensores de la muñeca",
                        desc: "Asisten en la estabilización del movimiento."
                    },
                    {
                        name: "Braquiorradial",
                        desc: "Ayuda en la flexión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los antebrazos",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los antebrazos."
                    },
                    {
                        name: "Mejora del agarre",
                        desc: "Al fortalecer los músculos del antebrazo, puedes mejorar tu agarre en otros ejercicios y actividades cotidianas."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del antebrazo sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ],
                warnings: [
                    {
                        name: "Riesgo de Lesiones",
                        desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en las muñecas y los codos."
                    },
                    {
                        name: "Alternativas Seguras",
                        desc: "Si sientes molestias, considera alternativas como el curl de muñeca con mancuernas, que también trabajan los mismos músculos con menor riesgo."
                    }
                ]
            },
            {
                id: 13,
                name: "Extensión de Muñeca con Barra Sentado",
                position: [
                    "Siéntate en el extremo de un banco plano con los pies firmemente apoyados en el suelo.",
                    "Sostén una barra con un agarre prono (palmas hacia abajo).",
                    "Apoya la parte posterior de los antebrazos en la parte superior de los muslos o en el extremo del banco, de manera que las muñecas queden justo al final de las rodillas o del banco."
                ],
                execution: [
                    "Sin mover los antebrazos, levanta lentamente las manos hacia arriba lo máximo posible, apretando los músculos de los antebrazos en la parte superior del movimiento.",
                    "Haz una pausa en la parte superior del movimiento.",
                    "Baja lentamente la barra hasta la posición inicial.",
                    "Repite el ejercicio el número de repeticiones deseadas."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte durante el levantamiento.",
                    "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
                    "Concéntrate en usar los músculos del antebrazo para levantar la barra, no solo las muñecas.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla."
                ],
                muscles: [
                    {
                        name: "Extensores de la muñeca",
                        desc: "Principalmente trabaja los músculos extensores del antebrazo."
                    },
                    {
                        name: "Flexores de la muñeca",
                        desc: "Asisten en la estabilización del movimiento."
                    },
                    {
                        name: "Braquiorradial",
                        desc: "Ayuda en la flexión del codo."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los antebrazos",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los antebrazos."
                    },
                    {
                        name: "Mejora del agarre",
                        desc: "Al fortalecer los músculos del antebrazo, puedes mejorar tu agarre en otros ejercicios y actividades cotidianas."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del antebrazo sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ],
                warnings: [
                    {
                        name: "Riesgo de Lesiones",
                        desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en las muñecas y los codos."
                    },
                    {
                        name: "Alternativas Seguras",
                        desc: "Si sientes molestias, considera alternativas como la extensión de muñeca con mancuernas, que también trabajan los mismos músculos con menor riesgo."
                    }
                ]
            },
            {
                id: 14,
                name: "Curl de Barra Invertido",
                position: [
                    "Colócate de pie con los pies separados al ancho de los hombros.",
                    "Sujeta una barra con un agarre prono (palmas hacia abajo).",
                    "Mantén los brazos extendidos hacia abajo, con los codos ligeramente flexionados.",
                    "Mantén la espalda recta y el pecho hacia adelante."
                ],
                execution: [
                    "Flexiona los codos y levanta la barra hacia los hombros, manteniendo los codos pegados al cuerpo.",
                    "Haz una pausa en la parte superior del movimiento, apretando los bíceps y los músculos del antebrazo.",
                    "Baja la barra de manera controlada hasta la posición inicial.",
                    "Repite el movimiento para el número deseado de repeticiones."
                ],
                advices: [
                    "Mantén la espalda recta y evita balancearte durante el levantamiento.",
                    "Activa el core (abdomen y parte baja de la espalda) para estabilizar la columna vertebral.",
                    "Concéntrate en usar los músculos del antebrazo y del bíceps para levantar la barra.",
                    "Realiza el movimiento de manera controlada para maximizar la activación muscular y evitar lesiones.",
                    "Respira de manera controlada, exhalando al levantar la barra e inhalando al bajarla."
                ],
                muscles: [
                    {
                        name: "Braquiorradial",
                        desc: "Principalmente trabaja este músculo del antebrazo."
                    },
                    {
                        name: "Bíceps braquial",
                        desc: "También se activan las cabezas corta y larga del bíceps."
                    },
                    {
                        name: "Braquial",
                        desc: "Ayuda en la flexión del codo."
                    },
                    {
                        name: "Extensores de la muñeca",
                        desc: "Asisten en la estabilización del movimiento."
                    }
                ],
                benefits: [
                    {
                        name: "Fortalecimiento de los antebrazos",
                        desc: "Excelente para desarrollar la masa muscular y la fuerza de los antebrazos."
                    },
                    {
                        name: "Mejora del agarre",
                        desc: "Al fortalecer los músculos del antebrazo, puedes mejorar tu agarre en otros ejercicios y actividades cotidianas."
                    },
                    {
                        name: "Aislamiento muscular",
                        desc: "Permite un enfoque específico en los músculos del antebrazo y del bíceps sin la intervención de otros grupos musculares grandes."
                    },
                    {
                        name: "Estabilidad y control",
                        desc: "Mejora la estabilidad y el control en otros ejercicios y actividades cotidianas."
                    }
                ],
                warnings: [
                    {
                        name: "Riesgo de Lesiones",
                        desc: "Asegúrate de no levantar demasiado peso para evitar lesiones en las muñecas y los codos."
                    },
                    {
                        name: "Alternativas Seguras",
                        desc: "Si sientes molestias, considera alternativas como el curl con barra EZ o con mancuernas, que también trabajan los mismos músculos con menor riesgo."
                    }
                ]
            }     
        ]
    }
]