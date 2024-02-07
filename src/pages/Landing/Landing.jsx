import { AboutMe } from "../../components/AboutMe/AboutMe";
import { Carousel } from "../../components/Carousel/Carousel";
import { PricePlan } from "../../components/PricePlan/PricePlan";
import { Services } from "../../components/Services/Services";
import { WhatsAppBtn } from "../../components/WhatsAppBtn/WhatsAppBtn";

export function Landing(){
    return (
        <>
            <Carousel></Carousel>
            <AboutMe></AboutMe>
            <Services></Services>
            <PricePlan></PricePlan>
            <WhatsAppBtn></WhatsAppBtn>
        </>
    )
}