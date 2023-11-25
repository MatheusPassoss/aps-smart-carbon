import Image from "next/image"
import { Florest } from "../animations/Florest"


export const RouteImpact = () => {


    return (
        <section className="flex flex-col xl:flex-row items-center justify-evenly gap-10">
            <p className="text-black-custom text-lg max-xl:pt-5 xl:max-w-4xl">
                Para repor  xxx gramas de carbono, seria necessário o plantio de, no mínimo, xxx árvores. Em média, uma árvore madura é capaz de absorver cerca de 22 kg (ou 22.000 gramas) de dióxido de carbono (CO2) por ano, através do processo de fotossíntese. Portanto, para absorver 100 gramas de carbono, uma árvore precisaria de aproximadamente 4,5 anos.
            </p>
            <Florest />
        </section>
    )

}