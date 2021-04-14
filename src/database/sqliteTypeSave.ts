import {db} from "./db";
import {Query, SQLError, SQLResultSet} from "expo-sqlite";
import migrations from "./migrations";
import {ExerciseDataItem, SearchExerciseDataItem} from "./databaseTypes";
import {sqliteCheckMigrationsQuery, sqliteGetAllExercisesQuery, sqliteGetUserExercisesQuery} from "./sqliteQueryMaker";

export interface SQLiteCallback {
    errors: SQLError[],
    resultSets: SQLResultSet[],
    isSuccessful: boolean
}

const fetchTypeSaveSql = async (queries: Query[]): Promise<SQLiteCallback> => {
    const sqlResults: SQLiteCallback = {
        errors: [],
        resultSets: [],
        isSuccessful: false
    }

    await new Promise((resolve) => {
        db.transaction(tx => {
                queries.forEach((query) => {
                    tx.executeSql(
                        query.sql, query.args,
                        (_, result) => {
                            sqlResults.resultSets.push(result)
                        },
                        (_, error): boolean => {
                            sqlResults.errors.push(error)
                            return false;
                        })
                })
            }, (e) => {
                sqlResults.errors.push(e)
                resolve(sqlResults)
            },
            () => resolve(sqlResults))
    })
    sqlResults.isSuccessful = sqlResults.errors.length === 0;
    return sqlResults;
}

export const sqliteGetUserExercisesByDate = async (date: string): Promise<ExerciseDataItem[]> => {
    await sqliteCheckAndFill()
    let sqLiteCallback = await fetchTypeSaveSql(sqliteGetUserExercisesQuery(date))
    if (!sqLiteCallback.isSuccessful) return [];
    // console.log("sqliteGetUserExercisesQuery", sqLiteCallback.resultSets[0].rows)

    const returnArray: ExerciseDataItem[] = [];
    for (let i = 0; i < sqLiteCallback.resultSets[0].rows.length; i++) {
        let userExercise: ExerciseDataItem = sqLiteCallback.resultSets[0].rows.item(i)
        userExercise.exerciseSet = JSON.parse(sqLiteCallback.resultSets[0].rows.item(i).exerciseSet)
        returnArray.push(userExercise)
    }
    return returnArray;
}

export const sqliteGetAllExercises = async (): Promise<SearchExerciseDataItem[]> => {
    let sqLiteCallback = await fetchTypeSaveSql(sqliteGetAllExercisesQuery())
    if (!sqLiteCallback.isSuccessful) return [];

    const returnArray: SearchExerciseDataItem[] = [];
    for (let i = 0; i < sqLiteCallback.resultSets[0].rows.length; i++) {
        returnArray.push(sqLiteCallback.resultSets[0].rows.item(i))
    }
    return returnArray;
}

const sqliteCheckAndFill = async () => {
    let sqLiteCallback = await fetchTypeSaveSql(sqliteCheckMigrationsQuery())
    console.log("fetchTypeSaveSql", sqLiteCallback)

    let actualMigration = -1;
    if (sqLiteCallback.resultSets[1]?.rows.length > 0) {
        actualMigration = sqLiteCallback.resultSets[1]?.rows.item(0).batch
    }

    while (actualMigration < migrations.length - 1) {
        actualMigration++
        sqLiteCallback = await fetchTypeSaveSql(migrations[actualMigration])
        console.log(actualMigration, sqLiteCallback)
    }
}
