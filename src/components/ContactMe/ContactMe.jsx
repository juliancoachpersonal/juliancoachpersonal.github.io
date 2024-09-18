import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

import './Contact.css'

export const ContactMe = () => {
  const [stateSend, setStateSend] = useState(false);
  const [success, setSuccess] = useState(false);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setStateSend(true);

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY,
      })
      .then(
        () => {
          setStateSend(false);
          setSuccess(true);
          console.log("SUCCESS!");
          setName('');
          setLastName('');
          setEmail('');
          setPhone('');
          setMessage('');
        },
        (error) => {
          setStateSend(false);
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div id="contact" className="">
      {/* Waves Divider */}
      <div className="custom-shape-divider-top-1711817528 ">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <h2 className="py-6 text-5xl text-center text-[#3c8274] font-bold">
        ¿Tienes dudas adicionales?
      </h2>
      <p className="text-center text-neutral-600 ">
        Envíame un correo y me pondré en contacto contigo!
      </p>
      <div className="flex justify-center ">
        <form
          className="px-4  py-8 rounded-lg lg:px-8 "
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
            <div className="grid grid-cols-1 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="first-name"
                  className="block text-sm font-semibold leading-6 text-[#3c8274] cursor-pointer"
                >
                  Nombre *
                </label>
                <div>
                  <input
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    type="text"
                    id="first-name"
                    autoComplete="given-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-[#3c8274] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="name"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="last-name"
                  className="block text-sm font-semibold leading-6 text-[#3c8274]  cursor-pointer"
                >
                  Apellido
                </label>
                <div>
                  <input
                    value={lastName}
                    onChange={(e) => {
                      setLastName(e.target.value);
                    }}
                    type="text"
                    id="last-name"
                    autoComplete="family-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-[#3c8274] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="lastName"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold leading-6 text-[#3c8274] cursor-pointer"
                >
                  Correo electrónico *
                </label>
                <div>
                  <input
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-[#3c8274] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="email"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="phone"
                  className="block text-sm font-semibold leading-6 text-[#3c8274] cursor-pointer"
                >
                  Teléfono de contacto
                </label>
                <div>
                  <input
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    type="phone"
                    id="phone"
                    autoComplete="phone"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-[#3c8274] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="phone"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold leading-6 text-[#3c8274] cursor-pointer"
                >
                  Mensaje *
                </label>
                <div className="mt-2.5">
                  <textarea
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    id="message"
                    rows="4"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-[#3c8274] shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    name="message"
                  ></textarea>
                </div>
              </div>
            </div>
            <p className="mt-2 text-neutral-800">* Campos obligatorios</p>
            <div className="mt-8 flex justify-end">
              <button
                disabled={!(name && email && message)}
                type="submit"
                className={`rounded-m py-3 px-6 text-emerald-50 block w-full text-center text-lg transition duration-500 ease-in-out  ${
                  !stateSend ? (!(name && email && message)?"bg-neutral-400":"bg-emerald-500 hover:bg-emerald-700 hover:text-white") : "bg-orange-400"
                }`}
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

                {!stateSend ? "Enviar correo" : "Enviando correo"}
              </button>
            </div>

            {success && (
              <p className="mt-3 font-bold text-center text-green-500">
                El correo se ha enviado. Pronto me pondré en contacto contigo
                &#128512;
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};
