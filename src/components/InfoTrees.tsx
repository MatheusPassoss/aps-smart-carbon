'use client'
import { useContext } from "react"
import { MapContext } from "@/context/MapContext"
import { useTrees } from "@/hooks/useTrees"

export const InfoTrees = () => {

    const { TotalEmission } = useContext(MapContext)
    const { emissionPerTen, treesNeeded } = useTrees()

    return (
        <p className="text-black-custom text-lg pb-5">
            Ao repetir essa rota dez vezes, você estará gerando uma quantidade de carbono equivalente a <span className="font-bold text-red-600">{emissionPerTen(TotalEmission)}</span> gramas de gases carbônicos.
            Para compensar essa emissão, seria necessário o plantio de, pelo menos, <span className="font-bold text-green-600">{treesNeeded()} árvore(s).</span> Lembre-se de que uma árvore madura é capaz de absorver cerca de <span className="font-bold text-green-600"> 22.000 </span>gramas de dióxido de carbono por ano. Portanto, para cada dez repetições dessa rota, seria recomendável o plantio de, aproximadamente,
            <span className="font-bold text-green-600"> {treesNeeded()} árvore(s).</span> para ajudar a neutralizar a pegada de carbono gerada
        </p>
    )
}