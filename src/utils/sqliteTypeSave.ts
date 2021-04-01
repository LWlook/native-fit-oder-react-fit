import {db} from "../App";
import {SQLResultSet} from "expo-sqlite";

export const fetchTypeSaveSql = async <T>(sqlStatement: string, args: any[] | undefined): Promise<T[]> => {
    return new Promise((resolve) => {
        db.transaction(tx => {
            tx.executeSql(
                sqlStatement, args,
                (_, result: SQLResultSet) => {
                    resolve(Object.values(result.rows) as T[])
                },
                (_, error): boolean => {
                    console.warn(error)
                    resolve([])
                    return false
                })
        })
    })
}
