'use client'

import { createContext } from "react"

interface MapValues {
    defineModeDrive: (driveMod: String) => void,
    defineOrigin: (origin: string) => void,
    defineDestination: (destination: string) => void,
    setResults: (TextDistance: string, TextTime: string, VehicleResult: string, NumberDistance: number, NumberTime: number) => void,
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
}


export const MapContext = createContext({} as MapValues)





