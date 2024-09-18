import { useState } from 'react';

export const HarrisBenedict = () => {

    const [gender, setGender] = useState('Hombre');
    const [age, setAge] = useState('');
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [activityLevel, setActivityLevel] = useState('Selecciona una opción');
    const [goal, setGoal] = useState('Selecciona una opción');
    const [results, setResults] = useState(null);
  
    const calculateCalories = () => {
      const ageNum = parseFloat(age);
      const weightNum = parseFloat(weight);
      const heightNum = parseFloat(height);
  
      // Verificar que todas las entradas sean números válidos y que se haya seleccionado una opción en las listas desplegables
      if (
        isNaN(ageNum) || isNaN(weightNum) || isNaN(heightNum) ||
        activityLevel === 'Selecciona una opción' || goal === 'Selecciona una opción'
      ) {
        alert("Por favor, ingrese valores válidos en todos los campos y seleccione opciones.");
        return;
      }
  
      const bmr =
        gender === 'Hombre'
          ? 88.362 + 13.397 * weightNum + 4.799 * heightNum - 5.677 * ageNum
          : 447.593 + 9.247 * weightNum + 3.098 * heightNum - 4.330 * ageNum;
  
      const activityMultipliers = {
        'Sedentario: poco o nada de ejercicio al día': 1.2,
        'Actividad ligera: ejercicio ligero o deporte 1-3 días a la semana': 1.375,
        'Actividad moderada: ejercicio moderado o deporte 3-5 días a la semana': 1.55,
        'Actividad intensa: ejercicio intenso o deporte 6-7 días a la semana': 1.725,
        'Actividad muy intensa: ejercicio muy intenso o trabajo físico y ejercicio diario': 1.9,
      };
  
      const activityMultiplier = activityMultipliers[activityLevel];
      const tdee = bmr * activityMultiplier;
  
      const surplusMultipliers = {
        'Superavit ligero': 1.1,
        'Superavit moderado': 1.15,
        'Superavit agresivo': 1.2,
        'Superavit muy agresivo': 1.25,
      };
  
      const surplusCalories = {
        'Superavit ligero': tdee * surplusMultipliers['Superavit ligero'],
        'Superavit moderado': tdee * surplusMultipliers['Superavit moderado'],
        'Superavit agresivo': tdee * surplusMultipliers['Superavit agresivo'],
        'Superavit muy agresivo': tdee * surplusMultipliers['Superavit muy agresivo'],
      };
  
      setResults(surplusCalories);
    };
  
    return (
      <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-xl border border-emerald-600">
        
        <h1 className="text-xl font-semibold text-center mb-2 text-[#3c8274]">Calculadora de Harris-Benedict</h1>
        <form>
          <div className='flex flex-wrap justify-between mt-3'>
          <div className="mb-4">
            <label className="block mb-2 text-neutral-500 font-bold">Género</label>
            <select value={gender} onChange={e => setGender(e.target.value)} className="mt-1 block w-32">
              <option className='px-5 py-4'>Hombre</option>
              <option className='px-5 py-4'>Mujer</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-neutral-500 font-bold">Edad</label>
            <input
              type="number"
              value={age}
              onChange={e => setAge(e.target.value)}
              className="form-input flex-1 mr-2 border-0"
              placeholder='Ingresa tu edad'
            />
          </div>
          </div>

          <div className='flex flex-wrap justify-between mt-3'>
          
            <div className="mb-4">
              <label className="block mb-2 text-neutral-500 font-bold">Peso (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={e => setWeight(e.target.value)}
                className="mt-1 block w-full"
                placeholder='Ingresa tu peso en kg'
              />
            </div>
            <div className="mb-4">
              <label className="block mb-2 text-neutral-500 font-bold">Altura (cm)</label>
              <input
                type="number"
                value={height}
                onChange={e => setHeight(e.target.value)}
                className="mt-1 block w-full"
                placeholder='Ingresa tu altura en cm'
              />
            </div>
          </div>
          
          <div className="mb-4 mt-3">
            <label className="block mb-2 text-neutral-500 font-bold">Nivel de actividad física</label>
            <select value={activityLevel} onChange={e => setActivityLevel(e.target.value)} className="mt-1 block w-full">
              <option disabled className='text-neutral-400'>Selecciona una opción</option>
              <option>Sedentario: poco o nada de ejercicio al día</option>
              <option>Actividad ligera: ejercicio ligero o deporte 1-3 días a la semana</option>
              <option>Actividad moderada: ejercicio moderado o deporte 3-5 días a la semana</option>
              <option>Actividad intensa: ejercicio intenso o deporte 6-7 días a la semana</option>
              <option>Actividad muy intensa: ejercicio muy intenso o trabajo físico y ejercicio diario</option>
            </select>
          </div>
          <div className="mb-4 mt-4">
            <label className="block mb-2 text-neutral-500 font-bold">Objetivo</label>
            <select value={goal} onChange={e => setGoal(e.target.value)} className="mt-1 block w-full">
              <option disabled className='text-neutral-400'>Selecciona una opción</option>
              <option>Aumentar masa muscular</option>
              <option>Bajar grasa corporal</option>
              <option>Mantener el peso actual</option>
            </select>
          </div>
          <button
            type="button"
            onClick={calculateCalories}
            className="bg-[#3c8274] text-white font-semibold py-2 px-4 rounded w-full mb-4"
          >
            Calcular Calorías Recomendadas
          </button>
        </form>
        {results && (
          <div className="mt-6">
            <h2 className="text-xl font-bold mb-2 text-[#3c8274]">Calorías diarias recomendadas</h2>
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-[#3c8274]">Tipo de Superávit</th>
                  <th className="px-4 py-2 text-[#1e695a]">kcal/día</th>
                </tr>
              </thead>
              <tbody>
                {Object.keys(results).map(key => (
                  <tr key={key}>
                    <td className="border px-4 py-2">{key}</td>
                    <td className="border px-4 py-2 text-center">{Math.round(results[key])}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );

}