'use client'

import { SetStateAction, createContext, Dispatch } from "react"
import { RefObject } from "react"
import { vehicleOpt } from "./MapProvider"

interface MapValues {
    vehicle: vehicleOpt
    setVehicle: Dispatch<SetStateAction<vehicleOpt>>
    mapRef: RefObject<HTMLDivElement>
    vehicleSelected: string
    setVehicleSelected: Dispatch<SetStateAction<string>>
    EmissionKm: string
    setEmissionKm: Dispatch<SetStateAction<string>>
    TotalEmission: string
    setTotalEmission: Dispatch<SetStateAction<string>>
    TextDistance: string
    setTextDistance: Dispatch<SetStateAction<string>>
    TextTime: string
    setTextTime: Dispatch<SetStateAction<string>>
}


export const MapContext = createContext({} as MapValues)





