'use client'

import { createContext } from "react"
import { RefObject } from "react"

interface MapValues {
    textDistance: String
    textTime: String,
    NumberDistance: Number,
    NumberTime: Number,
    emissionKm: string
    totalEmission: string
    mapRef: RefObject<HTMLDivElement>
}


export const MapContext = createContext({} as MapValues)





