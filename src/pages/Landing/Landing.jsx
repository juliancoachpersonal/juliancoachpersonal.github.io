import { About } from "../../components/About/About";
import { ChatbotBtn } from "../../components/ChatbotBtn/ChatbotBtn";
import { ContactMe } from "../../components/ContactMe/ContactMe";
import { Faqs } from "../../components/Faqs/Faqs";
// import { AboutMe } from "../../components/AboutMe/AboutMe";
// import { Hero } from "../../components/Hero/Hero";
import { ModalWelcome } from "../../components/ModalWelcome/ModalWelcome";
// import { Carousel } from "../../components/Carousel/Carousel";
// import { PricePlan } from "../../components/PricePlan/PricePlan";
import { Pricing } from "../../components/Pricing/Pricing";
import { Products } from "../../components/Products/Products";
// import { Services } from "../../components/Services/Services";
// import { Testimonials } from "../../components/Testimonials/Testimonials";
import { WhatsAppBtn } from "../../components/WhatsAppBtn/WhatsAppBtn";
import { Carousel } from "../../components/Carousel/Carousel";

export function Landing({t}){
    return (
        <div className="mt-[6rem] md:mt-[5.5rem]">
            {/* <Carousel></Carousel> */}
            <ModalWelcome></ModalWelcome>
            {/* <Hero></Hero> */}
            <Carousel></Carousel>
            <Products t={t}></Products>
            <About></About>
            <Pricing></Pricing>
            {/* <Testimonials></Testimonials> */}
            <Faqs></Faqs>
            <ContactMe></ContactMe>
            {/* <Services></Services>
            <PricePlan></PricePlan> */}
            <WhatsAppBtn></WhatsAppBtn>
            <ChatbotBtn></ChatbotBtn>
        </div>
    )
}