import Image from "next/image"



export const VehiclesImpact = () => {


    return (
        <section className="flex flex-col xl:flex-row items-center justify-evenly gap-10">
            <p className="text-white text-lg max-xl:pt-5 ">
                Para repor  xxx gramas de carbono, seria necessário o plantio de, no mínimo, xxx árvores. Em média, uma árvore madura é capaz de absorver cerca de 22 kg (ou 22.000 gramas) de dióxido de carbono (CO2) por ano, através do processo de fotossíntese. Portanto, para absorver 100 gramas de carbono, uma árvore precisaria de aproximadamente 4,5 anos.
            </p>
            <figure className="w-full pt-10 flex justify-center">
                <Image width={430} height={330} src={"/assets/ilustration/planthree.svg"} alt="Ilustração de pessoas plantando árvores." className="lg:hidden xl:block" />
            </figure>
        </section>
    )

}