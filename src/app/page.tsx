import { Button } from "./components/Button"
import { Card } from "./components/Card"
import { Map } from "./components/Map"
import Image from "next/image"
import { VehiclesInfo } from "./components/VehiclesInfo"
import { VehiclesImpact } from "./components/VehiclesImpact"
import { MapNav } from "./components/MapNav"
import { VehiclesNav } from "./components/VehiclesNav"

export default function Home() {
  return (
    <>

      <main className="container max-md:min-h-screen m-auto flex flex-wrap items-center justify-center py-20 xl:flex-row xl:flex-nowrap xl:justify-evenly">
        <section className="px-3 py-5 pt-3 text-black-custom max-w-2xl min-[992px]:max-w-3xl  flex flex-col gap-5 md:py-10 xl:self-start xl:gap-10">
          <h1 className="text-2xl font-bold md:text-5xl lg:text-6xl">Smart Carbon</h1>
          <p className="text-lg py-5 md:text-xl">Revolucionando a mobilidade através da sustentabilidade. Uma pesquisa sobre como a população pode ser aliada na corrida contra o aquecimento global.</p>
          <Button Title={"Saiba mais"} />
        </section>
        <figure className="py-3 px-5 md:pt-10 md:pb-20 xl:self-end">
          <Image width={430} height={330} src={"/assets/ilustration/three.svg"} alt="Ilustração de uma árvore." className="lg:hidden" />
          <Image width={440} height={476} src={"/assets/persons/hugo.svg"} alt="Ilustração de uma moça segurando o planeta saudável" className="max-lg:hidden" />
        </figure>
      </main>

      <section className=" bg-black-custom">
        <aside className="container m-auto flex flex-wrap items-center justify-center py-20 xl:flex-row-reverse xl:flex-nowrap xl:justify-evenly">
          <article className="text-white px-3 py-5 md:max-w-2xl small-notbook:max-w-3xl xl:max-2xl">
            <h2 className="text-2xl font-bold pb-5 md:text-3xl">Faça a diferença em suas viagens</h2>
            <p className="text-lg py-5">
              Ao escolher um meio de transporte mais sustentável você desempenha um papel fundamental para um planeta mais saudável para todos. Ajude na corrida contra o aquecimento global e tenha recompensas por isso!</p>
            <p className="text-lg py-5">
              Escolha uma das opções abaixo para obter informações sobre o impacto da sua rota, ou do seu veículo na emissão de gases carbônicos.
            </p>
            <fieldset className="w-full flex flex-col gap-5 pb-10 lg:flex-row">
              <Button Title={"Minha rota"} />
              <Button Title={"Meu veículo"} />
            </fieldset>
          </article>
          <figure className="px-1">
            <Image width={430} height={330} src={"/assets/ilustration/florest.svg"} alt="Ilustração de uma floresta." className="lg:hidden" />
            <Image width={430} height={330} src={"/assets/persons/julia.svg"} alt="Ilustração de uma floresta." className="max-lg:hidden" />
          </figure>
        </aside>
      </section>

      <section className="container text-black-custom m-auto flex flex-col gap-10 py-10 px-3">

        <aside className="flex">
          <div>
            <h2 className="text-2xl font-semibold md:text-3xl">Como funciona a emissão</h2>
            <p className="text-lg py-5 max-w-5xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat urna eu odio malesuada, vel finibus libero facilisis. Curabitur in malesuada nisi. Proin posuere tincidunt est, non commodo quam laoreet ut. Sed euismod elit eu massa dapibus, ut fringilla metus euismod. Sed tincidunt venenatis justo ut vulputate. Sed sit amet neque ut sem vestibulum condimentum. Nunc vel lacus a elit lacinia fringilla. Vivamus ut diam eu urna tempor laoreet</p>
          </div>
          <figure>

          </figure>
        </aside>

        <aside>
          <h2 className="text-2xl font-semibold md:text-3xl ">Como funciona a emissão</h2>

          <p className="text-lg py-5 max-w-5xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat urna eu odio malesuada, vel finibus libero facilisis. Curabitur in malesuada nisi. Proin posuere tincidunt est, non commodo quam laoreet ut. Sed euismod elit eu massa dapibus, ut fringilla metus euismod. Sed tincidunt venenatis justo ut vulputate. Sed sit amet neque ut sem vestibulum condimentum. Nunc vel lacus a elit lacinia fringilla. Vivamus ut diam eu urna tempor laoreet</p>
        </aside>
      </section >

      <section className="min-h-screen bg-black-custom">
        <Map />
      </section>

      <section className="min-h-screen bg-black-custom">
        <aside className="container m-auto px-3 pt-20">
          <h2 className="text-2xl text-white font-bold lg:pb-16">Confira as informações da sua rota</h2>
          <VehiclesInfo />
        </aside>

        <aside className="container m-auto px-3 pt-20">
          <h2 className="text-2xl text-white font-bold">O que seria necessário para repor o impacto?</h2>
          <VehiclesImpact />
        </aside>
      </section>

      <section className="min-h-screen">
        <aside className="container m-auto px-3 pt-5">
          <VehiclesNav />
          <VehiclesInfo />
        </aside>

        <aside className="container m-auto px-3 pt-20">
          <h2 className="text-2xl text-black-custom font-bold">O que seria necessário para repor o impacto?</h2>
          <VehiclesImpact />
        </aside>
      </section>
    </>
  )
}
