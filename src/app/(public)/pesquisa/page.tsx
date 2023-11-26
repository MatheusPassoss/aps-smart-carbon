import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/Button"
import { articles, topics } from "@/data"
export default function Pesquisa() {

    return (
        <>

            <main className="max-md:min-h-screen md:min-h-[70vh] container m-auto flex lg:pt-40 pt-20 lg:pb-20 pb-10">
                <aside className="px-3 py-5 pt-3 text-black-custom small-notbook:max-w-6xl flex flex-col gap-5 md:py-10 xl:gap-8">
                    <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Pesquisa</h1>
                    <aside className="container m-auto px-3 flex flex-col justify-center ">
                        <h2 className="font-bold text-2xl md:text-5xl">Sumário</h2>
                        <ul className="flex flex-col gap-2 pl-5 pt-10">
                            {topics.map((topic, index) => {
                                return (
                                    <li key={index} className="text-lg">
                                        <Link href={`#${topic.href}`}>
                                            {topic.title}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </aside>
                </aside>
            </main>

            <section id="sumario" className="bg-black-custom py-10">
                <aside className="container m-auto px-3 flex flex-col justify-center ">
                    <h2 className="font-bold text-3xl md:text-5xl">Sumário</h2>
                    <ul className="flex flex-col gap-2 pl-5 pt-10">
                        {topics.map((topic, index) => {
                            return (
                                <li key={index} className="text-lg">
                                    <Link href={`#${topic.href}`}>
                                        {topic.title}
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </aside>
            </section>

            <section className="container m-auto px-3">
                {articles.map((article, index) => {
                    return (
                        <article key={index} id={article.id} className="text-black-custom py-5 scroll-mt-16">
                            <h3 className="text-2xl md:text-3xl font-bold">
                                {article.title}
                            </h3>
                            <p className="text-lg py-3">
                                {article.content}
                            </p>
                        </article>
                    )
                })}
            </section>

        </>
    )
}