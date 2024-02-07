export const WhatsAppBtn = () => {
  return (
    <div>
      <a
        href="https://api.whatsapp.com/send?phone=573214387967&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20planes%20de%20entrenamiento."
        data-te-toggle="tooltip"
        target="_blank"
        rel="noreferrer"
        title="Hola! Estoy en Línea."
        className="fixed w-[60px] h-[60px] bottom-[10px] lg:bottom-[20px] right-[10px] lg:right-[20px] bg-[#25d366] text-white rounded-full text-center text-4xl z-50 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]"
      >
        <i className="fa-brands fa-whatsapp mt-3"></i>
      </a>
    </div>
  );
};
