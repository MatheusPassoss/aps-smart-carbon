'use client'
import { MouseEventHandler } from "react"

import { createContext } from "react"

interface MapValues {
    defineModeDrive: (driveMod: String) => void,
    isCar: Boolean,
    isBus: Boolean,
    isBike: Boolean,
    Origin: String,
    Destination: String,
}


export const MapContext = createContext({} as MapValues)





