'use client'

import { createContext } from "react"
import { ConstructorDeclaration } from "typescript"

interface MapValues {
    defineModeDrive: (driveMod: String) => void,
    defineOrigin: (origin: string) => void,
    defineDestination: (destination: string) => void,
    isCar: Boolean,
    isBus: Boolean,
    isBike: Boolean,
    Origin: string,
    Destination: string,
}


export const MapContext = createContext({} as MapValues)





