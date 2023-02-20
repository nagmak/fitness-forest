import { TDEEData } from "../utils/interfaces";

export const feetNumToReadableFeet = (feetHeight: number) => {
    let feetAndInches = feetHeight.toString().split('.');
    if (feetAndInches[1] === undefined) return [feetAndInches[0], 0]
    else return [feetAndInches[0], feetAndInches[1]]
}

export const readableFeetToNum = (feetHeight: string) => {
    console.log(feetHeight)
    let feetAndInches = feetHeight.replace("ft ", ".").split('in');
    return parseFloat(feetAndInches[0])
}

export const bmrCalculator = (formObj:TDEEData) => {
    let bmr: number = 0;
    // Converting lbs to kg
    let weight = formObj.weight * 0.45359237
    let height = formObj.height * 30.48
    let age = formObj.age
    console.log(formObj.height)
    let s = formObj.sex === 'female' ? -161: 5;
    if (formObj.bodyFatPercent !== undefined && formObj.bodyFatPercent > 0) {
        // Katch–McArdle formula (resting daily energy expenditure)
        let leanBodyMass = weight * (1 - (formObj.bodyFatPercent/100))
        bmr = (370 + (21.6 * leanBodyMass))
        console.log(bmr)
    } else {
    // The Mifflin St Jeor equation
        bmr = (9.99 * weight + 6.25 * height - 4.92 * age + s)

    }
    return bmr;
}

export const tdeeCalculator = (BMR: number, activity: string) => {
    let a = 0;
    if (activity === "Sedentary") {
        a = 1.2
    } else if (activity === "Light") {
        a = 1.375
    } else if (activity === "Moderate") {
        a = 1.55
    } else if (activity === "Heavy") {
        a = 1.725
    } else if (activity === "Athlete") {
        a = 1.9
    }

    return BMR*a;
}