import baranda4 from "../../assets/images/profile/baranda4.jpg";
import perfil4 from "../../assets/images/profile/perfil4.jpg";
// import perfil5 from "../../assets/images/profile/perfil5.jpg";
import perfil7 from "../../assets/images/profile/perfil7.jpg";
// import perfil8 from "../../assets/images/profile/perfil8.jpg";
// import perfil3 from "../../assets/images/profile/perfil3.jpg";
import perfil9 from "../../assets/images/profile/perfil9.jpg";

export const GalleryExpandible = () => {
    return (
        <div className="w-100 flex justify-center">
            <section className="flex w-[500px] md:w-[700px] h-[307px] md:h-[430px]">
                <img className="w-0 grow object-cover transition duration-500 ease-in hover:cursor-pointer hover:w-[214px] hover:md:w-[300px]" src={baranda4} alt="img1" />
                <img className="w-0 grow object-cover transition duration-500 ease-in hover:cursor-pointer hover:w-[214px] hover:md:w-[300px]" src={perfil4} alt="img2" />
                {/* <img className="w-0 grow object-cover transition duration-500 ease-in hover:cursor-pointer hover:w-[214px] hover:md:w-[300px]" src={perfil8} alt="img5" />
                <img className="w-0 grow object-cover transition duration-500 ease-in hover:cursor-pointer hover:w-[214px] hover:md:w-[300px]" src={perfil5} alt="img3" /> */}
                <img className="w-0 grow object-cover transition duration-500 ease-in hover:cursor-pointer hover:w-[214px] hover:md:w-[300px]" src={perfil7} alt="img4" />
                <img className="w-0 grow object-cover transition duration-500 ease-in hover:cursor-pointer hover:w-[214px] hover:md:w-[300px]" src={perfil9} alt="img3" />
            </section>
        </div>
    )
}