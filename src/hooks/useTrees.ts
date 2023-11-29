export const useTrees = () => {


    let carbon: number;
    let trees = 0;

    const emissionPerTen = (TotalEmission: string) => {
        if (TotalEmission) {
            carbon = parseInt(TotalEmission, 10)
            carbon = carbon * 10
            return String(carbon);
        }

        return "0";
    };

    const treesNeeded = () => {
        if (carbon != 0) {
            trees = Math.floor(carbon / 22000)
        }

        if (carbon > 0 && carbon < 22000) {
            trees =+ 1
        }
        return String(trees)
    }

    return { emissionPerTen, treesNeeded };
};
