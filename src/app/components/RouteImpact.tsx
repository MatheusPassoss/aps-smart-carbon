import { Florest } from "../animations/Florest"
import { Button } from "./Button"
import { ArrowCircleUp } from "./Phospor"
import Link from "next/link"
export const RouteImpact = () => {


    return (
        <section className="flex flex-col xl:flex-row items-center max-[1535px]:justify-evenly gap-10 xl:gap-12">
            <aside className="max-xl:pt-5 xl:max-w-4xl">
                <p className="text-black-custom text-lg pb-5">
                    Para repor  xxx gramas de carbono, seria necessário o plantio de, no mínimo, xxx árvores. Em média, uma árvore madura é capaz de absorver cerca de 22 kg (ou 22.000 gramas) de dióxido de carbono (CO2) por ano, através do processo de fotossíntese. Portanto, para absorver 100 gramas de carbono, uma árvore precisaria de aproximadamente 4,5 anos.
                </p>
                <Link href={"#map"} className='w-full'>
                    <Button Title="Traçar nova rota" leftIcon Icon={ArrowCircleUp} />
                </Link>
            </aside>
            <Florest />
        </section>
    )

}