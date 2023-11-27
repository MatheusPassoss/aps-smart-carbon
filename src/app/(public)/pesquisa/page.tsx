import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/Button"
import {ArrowCircleDown } from "@/components/Phospor"
import {bibliografia} from "@/data"
export default function Pesquisa() {



    return (
        <>
            <main className="max-md:min-h-screen md:min-h-[70vh] container m-auto flex flex-wrap items-center justify-center lg:pt-40 pt-20 lg:pb-20 pb-10 xl:flex-row xl:flex-nowrap xl:justify-evenly overflow-hidden">
                <aside className="px-3 lg:px-8 py-5 pt-3 text-black-custom max-w-2xl small-notbook:max-w-4xl  flex flex-col gap-5 md:py-10 xl:self-start xl:gap-8">
                    <h1 className="text-2xl font-bold md:text-5xl lg:text-6xl">Pesquisa</h1>
                    <p className="text-lg py-5 md:text-xl">O IPCC destaca que o transporte é responsável por cerca de 25% das emissões de gases de efeito estufa. Este trabalho aborda o desenvolvimento de uma aplicação para conscientizar sobre escolhas mais sustentáveis no transporte, explicando a relação da poluição atmosférica com as atividades humanas, conceitos como mercado e crédito de carbono e a conscientização na era da conectividade. A metodologia utilizada foi pesquisa bibliográfica em artigos científicos.</p>
                    <Link className="w-full" href={"/assets/brand/pesquisa.pdf"} target="_blank">
                        <Button Title={"Baixar pesquisa"} RightIcon Icon={ArrowCircleDown}/>
                    </Link>
                </aside>
                <Image src={"/assets/ilustration/search.svg"} alt="Ilustração dos membros da equipe" width={487} height={400} className="m-auto px-3" />
            </main>

            <section className="bg-black-custom pt-10">
                <aside className="container m-auto px-3 lg:px-8 py-10">
                    <h1 className="text-3xl md:text-5xl font-bold pb-10 pt-8">Bibliografia</h1>
                    <ul>
                        {bibliografia.map((reference, index) => (
                            <li key={index} className="py-3">
                                <h5 className="max-w-5xl font-bold text-green-500">{reference.titulo}</h5>
                                <br />
                                <h6 className="max-w-3xl">Autor: {reference.autor}</h6>
                                {reference.acessoEm && <p>Acesso em: {reference.acessoEm}</p>}
                                {reference.link && (
                                    <Link href={reference.link} target="_blank" rel="noopener noreferrer">
                                        Link: {reference.link}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </aside>
            </section>
        </>
    )
}