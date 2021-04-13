import {db} from "../utils/db";
import {Query, SQLError, SQLResultSet} from "expo-sqlite";
import {ExerciseDataItem} from "../components/ExerciseItem";

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

export const sqliteGetAllExerciseData = async (): Promise<ExerciseDataItem[]> => {
    await sqliteCheckAndFill()
    const DATA: ExerciseDataItem[] = [
        {
            id: 0,
            title: 'Flat Barbell Bench Press',
            increaseInExerciseSet: true,
            category: "chest",
            exerciseSet: [
                {weight: 80, reps: 5},
                {weight: 100, reps: 5},
                {weight: 120, reps: 5}
            ]
        },
        {
            id: 1,
            category: "biceps",
            title: 'Close Grip Barbell Bench Press',
            increaseInExerciseSet: true,
            exerciseSet: [
                {weight: 80, reps: 5},
                {weight: 100, reps: 5},
                {weight: 120, reps: 5}
            ]
        },
        {
            id: 2,
            category: "shoulders",
            title: 'Incline Dumbbell Fly',
            increaseInExerciseSet: true,
            exerciseSet: [
                {weight: 80, reps: 5},
                {weight: 100, reps: 5},
                {weight: 120, reps: 5}
            ]
        },
    ];
    return DATA;
}

const sqliteCheckAndFill = async () => {
    const queries: Query[] = [
        {
            sql: "CREATE TABLE `migrations` (`id` INT NOT NULL PRIMARY KEY, `batch` INT NOT NULL);",
            args: []
        },
        {
            sql: "SELECT * FROM migrations ORDER BY batch DESC LIMIT 1",
            args: []
        }
    ]
    const test = await fetchTypeSaveSql(queries)
    console.log(test);
}
