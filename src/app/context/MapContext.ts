'use client'

import { createContext } from "react"

interface MapValues {
    defineModeDrive: (driveMod: String) => void,
    defineOrigin: (origin: string) => void,
    defineDestination: (destination: string) => void,
    setResults: (TextDistance: string, TextTime: string, VehicleResult: string, emission: string, totalEmission: string) => void,
    isCar: Boolean,
    isBus: Boolean,
    isBike: Boolean,
    VehicleResult: string,
    textDistance: String
    textTime: String,
    NumberDistance: Number,
    NumberTime: Number,
    Origin: string,
    Destination: string,
    emissionKm: string
    totalEmission: string
}


export const MapContext = createContext({} as MapValues)





