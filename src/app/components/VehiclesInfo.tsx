'use client'
import { Bus } from "@phosphor-icons/react"
import { Card } from "./Card"
export const VehiclesInfo = () => {


    return (
        <section className="md:flex md:flex-row md:justify-between lg:justify-center lg:gap-8">
            <aside className="py-5 w-full md:px-3 flex justify-center items-center">
                <Card
                    imgAlt=""
                    
                    Icon={Bus}

                    title={"Carbono emitido"}

                    subtitle01={"Emissão por KM:"}
                    content01={"teste3"}

                    subtitle02={"Total em gramas"}
                    content02={"teste4"}
                />
            </aside>
            <aside className="py-5 w-full md:px-3 flex justify-center items-center">
                <Card
                    imgAlt="a"
                    imgHeight={85}
                    imgWidth={90}
                    imgSrc="/assets/ilustration/sadplanet.svg"

                    title={"Carbono emitido"}

                    subtitle01={"Emissão por KM:"}
                    content01={"teste3"}

                    subtitle02={"Total em gramas"}
                    content02={"teste4"}
                />
            </aside>
        </section>
    )
}