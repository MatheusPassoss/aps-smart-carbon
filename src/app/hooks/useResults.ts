

export const useResults = (TextDistance: string, TextTime: string, NumberDistance: number, NumberTime: number) => {


    if (!TextDistance && !TextTime && !NumberDistance && !NumberTime) {

        TextDistance = "0"
        TextTime = "0"
        NumberDistance = 0
        NumberTime = 0
    }

    return {
        TextDistance,
        TextTime,
        NumberDistance,
        NumberTime
    }

}