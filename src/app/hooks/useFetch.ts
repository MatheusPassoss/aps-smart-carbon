
export const useFetch = async (NumberDistance: number, NumberTime: number, vehicle: string) => {

    try {
        const response = await fetch("https://e09fwv0dl9.execute-api.us-east-1.amazonaws.com/test", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                distance: NumberDistance,
                time: NumberTime,
                vehicle: vehicle,
            }),
        })

        const data = await response.json()
        console.log(data)
        return {
            Vehicle: data.vehicle,
            emissionKm: data.emissionKm,
            totalEmission: data.totalEmission
        }

    } catch (error) {
        console.error(error);
    }
}