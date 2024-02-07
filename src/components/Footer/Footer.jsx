export const Footer = () => {
  return (
    <div id="contact">
      <footer className="flex flex-col items-center bg-[#394752] text-center text-white">
        <div className="container px-6 pt-6">
          <div className="mb-6 flex justify-center">
            <a
              href="https://www.instagram.com/juliancoachpersonal/"
              target="_blank"
              rel="noreferrer"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white text-white flex justify-center items-center"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <i className="fa-brands fa-instagram text-slate-50 hover:text-[#d8f934] text-xl"></i>
            </a>

            <a
              href="https://api.whatsapp.com/send?phone=573214387967&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20planes%20de%20entrenamiento."
              target="_blank"
              rel="noreferrer"
              type="button"
              className="m-1 h-9 w-9 rounded-full border-2 border-white text-white flex justify-center items-center"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <i className="fa-brands fa-whatsapp text-slate-50 hover:text-[#d8f934] text-xl"></i>
            </a>

            <a
              href="tel:573214387967"
              type="button"
              className="flex justify-center items-center m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <i className="fa-solid fa-phone text-slate-50 hover:text-[#d8f934]"></i>
            </a>
          </div>
        </div>

        <div className="w-full p-2 text-center bg-[#586875]">
          © 2024 Copyright:
          <a className="text-white" href="#">
            Todos los derechos reservados
          </a>
        </div>
      </footer>
    </div>
  );
};
