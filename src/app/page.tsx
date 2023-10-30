import { Button } from "./components/Button"
import { Map } from "./components/Map"
import Image from "next/image"

export default function Home() {
  return (
    <>
      <main className="container max-lg:min-h-screen m-auto flex flex-wrap items-center justify-center">
        <section className="px-3 pt-3 text-black-custom">
          <h1 className="text-2xl  font-bold">Smart Carbon</h1>
          <p className="text-lg py-5">Revolucionando a mobilidade através da sustentabilidade. Uma pesquisa sobre como a população pode ser aliada na corrida contra o aquecimento global.</p>
          <Button Title={"Saiba mais"} />
        </section>
        <figure className="py-3 px-5">
          <Image width={430} height={330} src={"/assets/ilustration/three.svg"} alt="Ilustração de uma árvore." />
        </figure>
      </main>

      <section className="max-md:min-h-screen bg-black-custom">
        <aside className="container m-auto flex flex-wrap items-center justify-center px-3 py-5">
          <article className="text-white py-5">
            <h1 className="text-2xl font-bold">Faça a diferença em suas viagens</h1>
            <p className="text-lg py-5">Optando por um meio de transporte mais limpo, além de receber incentivos financeiros você contribui para um planeta mais saudável para todos!</p>
          </article>
          <Image width={260} height={175} src={"/assets/ilustration/florest.svg"} alt="Ilustração de uma floresta." />
        </aside>
      </section>

      <section className="max-md:min-h-screen">

      </section>

      <section className="w-full h-screen">
        <Map />
      </section>
    </>
  )
}
