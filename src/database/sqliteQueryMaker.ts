import {Query} from "expo-sqlite";
import {ExerciseDataItem} from "./databaseTypes";

export const sqliteCheckMigrationsQuery = (): Query[] => {
    return [
        {
            sql: "CREATE TABLE IF NOT EXISTS `migrations` (`batch` INT NOT NULL);",
            args: []
        },
        {
            sql: "SELECT ROWID, * FROM `migrations` ORDER BY `batch` DESC LIMIT 1",
            args: []
        }
    ]
}

export const sqliteGetAllExercisesQuery = (): Query[] => {
    return [
        {
            sql: "SELECT ROWID, * FROM `exercises`;",
            args: []
        }
    ]
}

export const sqliteGetUserExercisesQuery = (date: string): Query[] => {
    return [
        {
            sql: "SELECT exercises_user.rowid, exercises.title, exercises_user.increaseInExerciseSet, exercises_user.exerciseSet, exercises_user.exerciseid, exercises.category FROM exercises_user JOIN exercises ON exercises_user.exerciseid = exercises.rowid WHERE exercises_user.date = ?;",
            args: [date]
        }
    ]
}

export const sqliteUpdateExerciseSetQuery = (dataItem: ExerciseDataItem): Query[] => {
    return [
        {
            sql: "UPDATE `exercises_user` SET `exerciseSet` = ?, `increaseInExerciseSet` = ? WHERE rowid = ?;",
            args: [JSON.stringify(dataItem.exerciseSet), dataItem.increaseInExerciseSet, dataItem.rowid]
        }
    ]
}
export const sqliteGetExerciseQuery = (rowid: number): Query[] => {
    return [
        {
            sql: "SELECT exercises_user.rowid, exercises.title, exercises_user.increaseInExerciseSet, exercises_user.exerciseSet, exercises_user.exerciseid, exercises.category FROM exercises_user JOIN exercises ON exercises_user.exerciseid = exercises.rowid WHERE exercises_user.rowid = ?;",
            args: [rowid]
        }
    ]
}

export const sqliteGetExerciseByTypeLatestQuery = (exerciseid: number, date: string): Query[] => {
    return [
        {
            sql: "SELECT exercises_user.rowid, exercises.title, exercises_user.increaseInExerciseSet, exercises_user.exerciseSet, exercises_user.exerciseid, exercises.category FROM exercises_user JOIN exercises ON exercises_user.exerciseid = exercises.rowid WHERE exercises_user.exerciseid = ? AND exercises_user.date < ? ORDER BY date DESC LIMIT 1;",
            args: [exerciseid, date]
        }
    ]
}
