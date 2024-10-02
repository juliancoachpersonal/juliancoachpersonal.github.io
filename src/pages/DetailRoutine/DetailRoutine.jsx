import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { routines } from "../../utils/routines";

export const DetailRoutine = ( ) => {

    const [muscleRoutine, setMuscleRoutine ] = useState();
    const { muscle, id } = useParams();

    useEffect(() => {
        const muscler = routines.find((rout) => rout.id == muscle);
        setMuscleRoutine(muscler.routine.find((rut) => rut.id == id))
        // (content)?document.title = content.title:'';
        console.log(muscleRoutine);
        
        
      }, [id, muscle, muscleRoutine]);

    return (
        muscleRoutine && (
            <div className="py-32 md:py-36 px-6 md:px-36">
            <h2 className="text-center text-5xl pb-2 font-bold text-[#3c8274]">{ muscleRoutine.name }</h2>

            <div>
                <h3 className="pt-5 text-2xl font-bold text-[#3c8274]">Posición Inicial</h3>
                <ul>
                    {
                        muscleRoutine.position.map((item, index) => (
                            <li key={index} className="list-disc ms-6 text-justify">{item}</li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h3 className="pt-5 text-2xl font-bold text-[#3c8274]">Ejecución</h3>
                <ul>
                    {
                        muscleRoutine.execution.map((item, index) => (
                            <li key={index} className="list-disc ms-6 text-justify">{item}</li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h3 className="pt-5 text-2xl font-bold text-[#3c8274]">Consejos</h3>
                <ul>
                    {
                        muscleRoutine.advices.map((item, index) => (
                            <li key={index} className="list-disc ms-6 text-justify">{item}</li>
                        ))
                    }
                </ul>
            </div>
            <div>
                <h3 className="pt-5 text-2xl font-bold text-[#3c8274]">Musculos Trabajados</h3>
                <ul>
                    {
                        muscleRoutine.muscles.map((item, index) => (
                            <li key={index} className="list-disc ms-6 text-justify"><span className="font-bold text-[#3c8274]">{item.name}:</span> {item.desc}</li>
                        ))
                    }
                </ul>
            </div>

            {
                muscleRoutine.warnings && 
                (<div>
                    <h3 className="pt-5 text-2xl font-bold text-[#3c8274]">Precauciones</h3>
                    <ul>
                        {
                            muscleRoutine.warnings.map((item, index) => (
                                <li key={index} className="list-disc ms-6 text-justify"><span className="font-bold text-[#3c8274]">{item.name}:</span> {item.desc}</li>
                            ))
                        }
                    </ul>
                </div>)
            }

            {
                muscleRoutine.variations && 
                (<div>
                    <h3 className="pt-5 text-2xl font-bold text-[#3c8274]">Precauciones</h3>
                    <ul>
                        {
                            muscleRoutine.variations.map((item, index) => (
                                <li key={index} className="list-disc ms-6 text-justify"><span className="font-bold text-[#3c8274]">{item.name}:</span> {item.desc}</li>
                            ))
                        }
                    </ul>
                </div>)
            }
            
        </div>
        )
        
    )
}