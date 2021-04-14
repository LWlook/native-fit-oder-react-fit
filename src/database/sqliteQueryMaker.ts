import {Query} from "expo-sqlite";

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

export const sqliteGetAllExcercisesQuery = (): Query[] => {
    return [
        {
            sql: "SELECT ROWID, * FROM `excercises`;",
            args: []
        }
    ]
}
