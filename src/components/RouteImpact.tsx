
import { Florest } from "./animations/animated-components/Florest"
import { InfoTrees } from "./InfoTrees"
import { Button } from "./UI/Button"
import { ArrowCircleUp } from "./UI/icons/Phospor"
import Link from "next/link"

export const RouteImpact = () => {


    


    return (
        <section className="flex flex-col xl:flex-row items-center max-[1535px]:justify-evenly gap-10 xl:gap-12">
            <aside className="max-xl:pt-5 xl:max-w-4xl">
                <InfoTrees />
                <Link href={"#map"} className='w-full'>
                    <Button Title="Traçar nova rota" leftIcon Icon={ArrowCircleUp} />
                </Link>
            </aside>
            <Florest />
        </section>
    )

}