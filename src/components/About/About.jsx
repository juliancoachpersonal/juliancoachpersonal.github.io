import profile from "../../assets/images/profile/profile_def.png";

export const About = ({t}) => {
  return (
    <div
      id="about"
      className="pt-16 pb-10 px-5 md:px-10 flex justify-center flex-wrap items-stretch gap-10"
    >
      <div className="bg-[#e7e9ec] bg-opacity-50 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg px-5 py-10 md:max-w-[25%] transition-all duration-500 group hover:bg-[#3c8274] hover:cursor-pointer">
        <img className=" mx-auto" src={profile} alt="profile" />
        <h2 className="pt-3 text-center text-[#3c8274] text-2xl font-bold group-hover:text-[#ECFF46]">
          Julian Amaya
        </h2>
        <p className="text-center">
          <a
            className="font-semibold group-hover:text-white"
            href="https://www.instagram.com/juliancoachpersonal/"
            target="_blank"
            rel="noreferrer"
          >
            @juliancoachpersonal
          </a>
        </p>

        <div className="flex justify-center">
          <a
            href="https://www.instagram.com/juliancoachpersonal/"
            target="_blank"
            rel="noreferrer"
            type="button"
            className="m-1 h-9 w-9 flex justify-center items-center"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <i className="fa-brands fa-instagram text-[#ea0c5f] text-4xl group-hover:text-white"></i>
          </a>

          <a
            href="https://www.facebook.com/people/Julian-Coach-Personal/61558626211664/"
            target="_blank"
            rel="noreferrer"
            type="button"
            className="m-1 h-9 w-9 flex justify-center items-center border-emerald-600"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <i className="fa-brands fa-square-facebook text-[#297494] text-4xl group-hover:text-white"></i>
          </a>
        </div>
      </div>
      <div className="md:max-w-[40%] flex flex-wrap flex-col h-full gap-9">
        <div className="bg-[#3c8274] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-5 py-8 rounded-lg group transition-all duration-500 hover:bg-[#e7e9ec] hover:cursor-pointer ">
          <p className="text-white text-justify group-hover:text-black">
            <span className="text-xl font-bold text-[#ECFF46] group-hover:text-[#3c8274]">
              Julian E. Amaya{" "}
            </span>
            {t("about.about1")}
          </p>
        </div>
        <div className="bg-[#3c8274] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] px-5 py-8 rounded-lg group transition-all duration-500 hover:bg-[#e7e9ec] hover:cursor-pointer">
          <p className="text-white text-justify group-hover:text-black">
          {t("about.about2")}
          </p>
        </div>
      </div>
    </div>
  );
};
