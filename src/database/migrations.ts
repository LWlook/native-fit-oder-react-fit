import {Query} from "expo-sqlite";

const exercises = [
    "Flat Barbell Bench Press", "chest",
    "Close Grip Barbell Bench Press", "bizeps",
    "Incline Dumbbell Fly", "shoulder"
]

const exercises_user = [
    "1", "1", "[{\"weight\": 80, \"reps\": 5},{\"weight\": 100, \"reps\": 5},{\"weight\": 120, \"reps\": 5}]",
    "2", "0", "[{\"weight\": 80, \"reps\": 5},{\"weight\": 100, \"reps\": 5},{\"weight\": 120, \"reps\": 5}]",
    "3", "1", "[{\"weight\": 80, \"reps\": 5},{\"weight\": 100, \"reps\": 5},{\"weight\": 120, \"reps\": 5}]",
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

const migrationExercises: Query[] = [
    {
        sql: "CREATE TABLE IF NOT EXISTS `exercises` (`title` VARCHAR(256) NOT NULL, `category` VARCHAR(256) NOT NULL);",
        args: []
    },
    {
        sql: "INSERT INTO `exercises` (`title`, `category`) VALUES " + generateValuesPlaceholder(exercises.length, 2),
        args: exercises
    },
    {
        sql: "INSERT INTO `migrations` (`batch`) VALUES (?);",
        args: [0]
    },
]

const migrationUserExercises: Query[] = [
    {
        sql: "CREATE TABLE IF NOT EXISTS `exercises_user` (`exercise_id` VARCHAR(256) NOT NULL, `increaseInExerciseSet` NUMERIC NOT NULL, `exerciseSet` TEXT NOT NULL);",
        args: []
    },
    {
        sql: "INSERT INTO `exercises_user` (`exercise_id`, `increaseInExerciseSet`, `exerciseSet`) VALUES " + generateValuesPlaceholder(exercises_user.length, 3),
        args: exercises_user
    },
    {
        sql: "INSERT INTO `migrations` (`batch`) VALUES (?);",
        args: [1]
    },
]

export const migrations: Query[][] = [
    migrationExercises,
    migrationUserExercises
]

export default migrations;