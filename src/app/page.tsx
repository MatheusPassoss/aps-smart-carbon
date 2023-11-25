import { Button } from "./components/Button"
import { Map } from "./components/Map"
import { RouteInfo } from "./components/RouteInfo"
import { RouteImpact } from "./components/RouteImpact"
import { Article } from "./animations/Article"
import { Ilustration } from "./animations/Ilustration"


export default function Home() {
  return (
    <>

      <main className="max-md:min-h-screen md:min-h-[70vh] container m-auto flex flex-wrap items-center justify-center pt-20 pb-10 xl:flex-row xl:flex-nowrap xl:justify-evenly overflow-hidden">
        <aside className="px-3 py-5 pt-3 text-black-custom max-w-2xl min-[992px]:max-w-3xl  flex flex-col gap-5 md:py-10 xl:self-start xl:gap-10">
          <h1 className="text-2xl font-bold md:text-5xl lg:text-6xl">Smart Carbon</h1>
          <p className="text-lg py-5 md:text-xl">Revolucionando a mobilidade através da sustentabilidade. Uma pesquisa sobre como a população pode ser aliada na corrida contra o aquecimento global.</p>
          <Button Title={"Saiba mais"} />
        </aside>
        <Ilustration person="hugo" typeAnimation="fromTheRight" />
      </main>


      <section className="relative bg-black-custom skew-y-3">
        <aside className="-skew-y-3 small-notbook:py-20 xl:py-40 container m-auto flex flex-wrap items-center justify-center xl:flex-row-reverse xl:flex-nowrap xl:justify-evenly">
          <article className="text-white px-3 pb-5 pt-20 md:max-w-2xl small-notbook:max-w-3xl xl:max-2xl">
            <h2 className="text-2xl font-bold pb-5 md:text-3xl">Faça a diferença em suas viagens</h2>
            <p className="text-lg py-5">
              Ao escolher um meio de transporte mais sustentável você desempenha um papel fundamental para um planeta mais saudável para todos. Ajude na corrida contra o aquecimento global e tenha recompensas por isso!</p>
            <p className="text-lg py-5">
              Clique no botão abaixo para saber quanto sua rota emite de gas carbônico e também descubra quanto a emissão corresponde em crédito de carbono.
            </p>
            <fieldset className="w-full flex flex-col gap-5 pb-10 lg:flex-row">
              <Button Title={"Minha rota"} />
            </fieldset>
          </article>
          <Ilustration person="julia" typeAnimation="fromTheLeft" />
        </aside>
      </section>

      <section className="container m-auto relative flex items-center flex-col xl:flex-row xl:gap-5 pb-32 pt-20">
        <Article />
        <Ilustration person="math" typeAnimation="fromTheBotton" />
      </section >

      <section className="min-h-screen relative bg-black-custom max-lg:py-10 max-lg:skew-y-3">
        <Map />
      </section>

      <section className="min-h-screen bg-default">
        <aside className="container m-auto px-3 pt-20">
          <h2 className="text-2xl text-black-custom font-bold lg:pb-16">Confira as informações da sua rota</h2>
          <RouteInfo />
        </aside>

        <aside className="container m-auto px-3 pt-20">
          <h2 className="text-2xl text-black-custom font-bold">O que seria necessário para repor o impacto?</h2>
          <RouteImpact />
        </aside>
      </section>

    </>
  )
}
