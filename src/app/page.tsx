import { Button } from "./components/Button"
import { Map } from "./components/Map"
import Image from "next/image"

export default function Home() {
  return (
    <>

      <main className="container max-md:min-h-screen m-auto flex flex-wrap items-center justify-center py-20 xl:flex-row xl:flex-nowrap xl:justify-evenly">
        <section className="px-3 py-5 pt-3 text-black-custom max-w-2xl min-[992px]:max-w-3xl xl:max-w-xl flex flex-col gap-5 md:py-10 xl:self-start xl:gap-10">
          <h1 className="text-2xl font-bold md:text-5xl lg:text-6xl">Smart Carbon</h1>
          <p className="text-lg py-5 md:text-xl">Revolucionando a mobilidade através da sustentabilidade. Uma pesquisa sobre como a população pode ser aliada na corrida contra o aquecimento global.</p>
          <Button Title={"Saiba mais"} />
        </section>
        <figure className="py-3 px-5 md:pt-10 md:pb-20 xl:self-end">
          <Image width={430} height={330} src={"/assets/ilustration/three.svg"} alt="Ilustração de uma árvore." className="lg:hidden" />
          <Image width={430} height={524} src={"/assets/ilustration/main.svg"} alt="Ilustração de uma moça segurando o planeta saudável" className="max-lg:hidden" />
        </figure>
      </main>

      <section className=" bg-black-custom">
        <aside className="container m-auto flex flex-wrap items-center justify-center gap-10 px-3 py-5">
          <article className="text-white py-5 px-3 md:max-w-2xl min-[992px]:max-w-3xl">
            <h2 className="text-2xl font-bold pb-5 md:text-3xl">Faça a diferença em suas viagens</h2>
            <p className="text-lg py-5">
              Ao escolher um meio de transporte mais sustentável você desempenha um papel fundamental para um planeta mais saudável para todos. Ajude na corrida contra o aquecimento global e tenha recompensas por isso!</p>
          </article>
          <figure className="px-1">
            <Image width={430} height={330} src={"/assets/ilustration/florest.svg"} alt="Ilustração de uma floresta." />
          </figure>
        </aside>
      </section>

      {/* <section className="max-md:min-h-screen">

      </section> */}

      <section className="w-full min-h-screen">
        <Map />
      </section>
    </>
  )
}
