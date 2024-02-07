export const SocialBar = () => {
    return (
        <div className="help-bar bg-[#586875] px-5 py-0.5 flex justify-end gap-3">
        <a 
          href="https://www.instagram.com/juliancoachpersonal/"
          target="_blank" 
          rel="noreferrer"
          className="text-white-500">
          <i
            className="fa-brands fa-instagram text-slate-50 hover:text-[#d8f934] text-xl"
          ></i>
        </a>
        <a 
          href="https://api.whatsapp.com/send?phone=573214387967&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20los%20planes%20de%20entrenamiento."
          target="_blank"
          rel="noreferrer"
          className="text-white-500">
          <i
            className="fa-brands fa-whatsapp text-slate-50 hover:text-[#d8f934] text-xl"
          ></i>
        </a>
      </div>
    )
}