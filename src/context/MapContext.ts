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
    hasRoute: boolean
    setHasRoute: Dispatch<SetStateAction<boolean>>
    hasOpen: boolean
    setHasOpen: Dispatch<SetStateAction<boolean>>
    isInvalid: boolean
    setisInvalid: Dispatch<SetStateAction<boolean>>
    emissionPassenger: string
    setEmissionPassenger: Dispatch<SetStateAction<string>>
    calory: string
    setCalory: Dispatch<SetStateAction<string>>
}


export const MapContext = createContext({} as MapValues)





