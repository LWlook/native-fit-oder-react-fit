import {Query} from "expo-sqlite";

const excercises = [
    "Flat Barbell Bench Press", "chest",
    "Close Grip Barbell Bench Press", "bizeps",
    "Incline Dumbbell Fly", "shoulder"
]

const generateValuesPlaceholder = (count: number, innercount: number = 1) => {
    const returnArray = []
    for (let i = 0; i < count / innercount; i++) {
        let innerString = "(?";
        for (let j = 1; j < innercount; j++) innerString += ",?"
        innerString += ")";
        returnArray.push(innerString)
    }
    return returnArray.join(",")
}

const migrationExcercises: Query[] = [
    {
        sql: "CREATE TABLE IF NOT EXISTS `excercises` (`title` VARCHAR(256) NOT NULL, `category` VARCHAR(256) NOT NULL);",
        args: []
    },
    {
        sql: "INSERT INTO `excercises` (`title`, `category`) VALUES " + generateValuesPlaceholder(excercises.length, 2),
        args: excercises
    },
    {
        sql: "INSERT INTO `migrations` (`batch`) VALUES (?);",
        args: [1]
    },
]

export const migrations: Query[][] = [
    migrationExcercises
]

export default migrations;