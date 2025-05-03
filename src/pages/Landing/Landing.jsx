import { About } from "../../components/About/About";
import { ChatbotBtn } from "../../components/ChatbotBtn/ChatbotBtn";
import { ContactMe } from "../../components/ContactMe/ContactMe";
import { Faqs } from "../../components/Faqs/Faqs";

import { ModalWelcome } from "../../components/ModalWelcome/ModalWelcome";

import { Pricing } from "../../components/Pricing/Pricing";
import { Products } from "../../components/Products/Products";

import { WhatsAppBtn } from "../../components/WhatsAppBtn/WhatsAppBtn";
import { Carousel } from "../../components/Carousel/Carousel";

import car1 from "../../assets/images/landing/hero/new2/car1.mp4";
import car2 from "../../assets/images/landing/hero/new2/car2.mp4";
import car3 from "../../assets/images/landing/hero/new2/car3.mp4";
import car4 from "../../assets/images/landing/hero/new2/car4.mp4";

export function Landing({t}){
    const carousel = [car1, car2, car3, car4];
    return (
        <div className="mt-[6rem] md:mt-[5.5rem]">
            {/* <Carousel></Carousel> */}
            <ModalWelcome></ModalWelcome>
            {/* <Hero></Hero> */}
            <Carousel carousel={carousel} loopV={true}s></Carousel>
            <Products t={t}></Products>
            <About t={t}></About>
            <Pricing t={t}></Pricing>
            {/* <Testimonials></Testimonials> */}
            <Faqs t={t}></Faqs>
            <ContactMe t={t}></ContactMe>
            {/* <Services></Services>
            <PricePlan></PricePlan> */}
            <WhatsAppBtn></WhatsAppBtn>
            <ChatbotBtn></ChatbotBtn>
        </div>
    )
}