import { useState } from "react";
import feedback from "../../assets/images/feedback/feedback.svg";
import axios from "axios";

export const OpinionPage = () => {
  const [stateSend, setStateSend] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [isPassword, setIsPassword] = useState(false);
  const password = import.meta.env.VITE_OPINION_PASSWORD;
  

  // const [isDragging, setIsDragging] = useState(false);
  // const [file, setFile] = useState();
  const [url, setURL] = useState("");
  // const [urlImge, setURLImage] = useState('');

  const [name, setName] = useState("");
  const [profession, setProfession] = useState("");
  const [opinion, setOpinion] = useState("");
  const [rating, setRating] = useState("");

  // Manejador que actualiza el estado con la nueva puntuación
  const handleRatingChange = (event) => {
    setRating(event.target.value);
  };

  const handlePassword = () => {
    if (passwordInput === password) {
      setIsPassword(true);
    }
  };

  // const handleDragOver = (e) => {
  //   e.preventDefault();
  //   setIsDragging(true);
  // };

  // const handleDragLeave = (e) => {
  //   e.preventDefault();
  //   setIsDragging(false);
  // };

  // const handleDrop = (e) => {
  //   e.preventDefault();
  //   setIsDragging(false);
  //   const file = e.dataTransfer.files[0];
  //   displayPreview(file);
  // };

  // const handleFileInputChange = (e) => {
  //   const myFile = e.target.files[0];
  //   setFile(myFile);
  //   displayPreview(myFile);
  // };

  // const displayPreview = (file) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onload = () => {
  //     // const preview = document.getElementById("preview");
  //     console.log('entrando...');
  //     setURLImage(reader.result);
  //     // preview.src = reader.result;
  //     // preview.classList.remove("hidden");
  //   };
  // };

  // const convertBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();
  //     fileReader.readAsDataURL(file);

  //     fileReader.onload = () => {
  //       resolve(fileReader.result);
  //     };

  //     fileReader.onerror = (error) => {
  //       reject(error);
  //     };
  //   });
  // };

  const resetFields = () => {
    setName("");
    setProfession("");
    setOpinion("");
    setRating("");
    // setURLImage('');
  };

  // const convertToBase64 = (file) => {
  //   return new Promise((resolve, reject) => {
  //     const fileReader = new FileReader();

  //   })
  // }

  const uploadImage = async () => {
    // const image = await convertBase64(file);
    setStateSend(true);

    const data = {
      name,
      profession,
      rating,
      opinion,
      image: "",
    };

    // http://localhost:3000/api/uploadImage

    axios
      .post("https://juliancoachpersonal.onrender.com/api/uploadImage", {
        data,
      })
      .then((res) => {
        setURL(res.data);
        resetFields();
        setStateSend(false);
        alert("Opinión enviada con éxito. Gracias por tu colaboración 😊!");
      })
      .then(() => console.log("imagen subida"))
      .catch(console.log());
  };

  // const uploadImage = async () => {

  //   const base64 = await convertBase64(file);

  //   const data = {
  //     name,
  //     profession,
  //     rating,
  //     opinion,

  //   }

  //   axios
  //    .post("http://localhost:3000/api/uploadImage", {image: base64})
  //    .then((res) => {
  //       setURL(res.data);
  //       setURLImage('');
  //       alert("Imagen cargada satisfactoriamente")

  //    })
  //    .then(() => console.log('imagen subida'))
  //    .catch(console.log());
  // }

  return (
    <div className="mt-24">
      <h2 className="text-emerald-600 text-center text-4xl font-bold pt-6">
        Regálame tu opinión
      </h2>

      <div className="max-w-xl mx-auto mt-8 flex w-full flex-col border rounded-lg bg-white p-8">
        <img className="mx-auto w-[70%]" src={feedback} alt="Feedback" />
        <p className="mb-5 leading-relaxed text-gray-600 text-justify">
          <span className="font-bold text-emerald-500">
            Tu opinión es sumamente valiosa para mí!
          </span>{" "}
          Por favor, siéntete libre de compartir tus comentarios, teniendo en
          cuenta la experiencia significativa que has logrado con mis servicios,
          no solamente como entrenador personal y profesor, sino también, en las
          las áreas médicas de la psicología deportiva, nutrición deportiva y el
          entrenamiento funcional. Agradezco sinceramente tu opinión y estaré
          contento por leerte, más aún, lo estaré por seguir mejorando para
          brindarte la mejor calidad en cuanto a mi profesión.
        </p>

        {!isPassword && (
          <div className="">
            <label htmlFor="name" className="text-sm leading-7 text-gray-600">
                Digita la contraseña para abrir el formulario
              </label>
            <div className="flex justify-center">
              
              <input
                value={passwordInput}
                onChange={(e) => {
                  setPasswordInput(e.target.value);
                }}
                type="password"
                id="code"
                name="code"
                className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              />
              <button
              onClick={handlePassword}
              className="rounded border-0 py-2 px-4 mx-2 bg-emerald-500 text-lg text-white hover:bg-emerald-600 focus:outline-none"
            >
              Comprobar
            </button>
            </div>
            
          </div>
        )}

        {isPassword && (
          <>
            <div className="mb-4">
              <label htmlFor="name" className="text-sm leading-7 text-gray-600">
                Nombre
              </label>
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                id="name"
                name="name"
                className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="text-sm leading-7 text-gray-600">
                Cargo/Ocupación
              </label>
              <input
                value={profession}
                onChange={(e) => {
                  setProfession(e.target.value);
                }}
                type="text"
                id="profession"
                name="profession"
                className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              />
            </div>

            <div className="mb-4">
              <label className="text-sm leading-7 text-gray-600">
                Calificación
              </label>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="rating"
                  id="rating1"
                  value="1"
                  className="focus:outline-none focus:ring-blue-500"
                  onChange={handleRatingChange}
                />
                <label htmlFor="rating1">1</label>
                <input
                  type="radio"
                  name="rating"
                  id="rating2"
                  value="2"
                  className="focus:outline-none focus:ring-blue-500"
                  onChange={handleRatingChange}
                />
                <label htmlFor="rating2">2</label>
                <input
                  type="radio"
                  name="rating"
                  id="rating3"
                  value="3"
                  className="focus:outline-none focus:ring-blue-500"
                  onChange={handleRatingChange}
                />
                <label htmlFor="rating3">3</label>
                <input
                  type="radio"
                  name="rating"
                  id="rating4"
                  value="4"
                  className="focus:outline-none focus:ring-blue-500"
                  onChange={handleRatingChange}
                />
                <label htmlFor="rating4">4</label>
                <input
                  type="radio"
                  name="rating"
                  id="rating5"
                  value="5"
                  className="focus:outline-none focus:ring-blue-500"
                  onChange={handleRatingChange}
                />
                <label htmlFor="rating5">5</label>
              </div>
            </div>

            <div className="mb-4">
              <label
                htmlFor="message"
                className="text-sm leading-7 text-gray-600"
              >
                Opinión de mis servicios (max. 70 caracteres)
              </label>
              <textarea
                value={opinion}
                onChange={(e) => {
                  setOpinion(e.target.value);
                }}
                id="message"
                name="message"
                className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
              ></textarea>
            </div>

            <button
              onClick={uploadImage}
              className="rounded border-0 bg-emerald-500 py-2 px-6 text-lg text-white hover:bg-emerald-600 focus:outline-none"
            >
              {stateSend && (
                <div
                  className="inline-block h-5 w-5 mx-2 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-white motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"
                  role="status"
                >
                  <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                    Loading...
                  </span>
                </div>
              )}

              {!stateSend ? "Enviar opinión" : "Enviando opinión"}
            </button>
            <p className="mt-3 text-xs text-gray-500">
              Conecta conmigo en redes sociales para mantener el contacto
            </p>
            <a href={url} hidden>
              {url}
            </a>
          </>
        )}

        {/* <div className="flex justify-center mb-4">
          <div
            className={`w-[400px] relative border-2 border-gray-300 border-dashed rounded-lg p-6 ${
              isDragging ? "border-indigo-600" : ""
            }`}
            id="dropzone"
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <input
              type="file"
              className="absolute inset-0 w-full h-full opacity-0 z-50"
              onChange={handleFileInputChange}
            />
            <div className="text-center">
              <img
                className="mx-auto h-12 w-12"
                src="https://www.svgrepo.com/show/357902/image-upload.svg"
                alt=""
              />
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer"
                >
                  <span>Arrastra una imagen</span>
                  <span className="text-emerald-600"> o da click </span>
                  <span>para cargarla</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
              </h3>
              <p className="mt-1 text-xs text-gray-500">
                PNG, JPG, GIF hasta 10MB
              </p>
            </div>
            <img src={urlImge} className="mt-4 mx-auto max-h-40" id="preview" />
          </div>
        </div> */}
      </div>
    </div>
  );
};
