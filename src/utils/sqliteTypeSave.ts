import {db} from "../App";

export const fetchTypeSaveSql = async <T>(sqlStatement: string, args: any[] | undefined): Promise<T[]> => {
    return new Promise((resolve) => {
        db.transaction(tx => {
            tx.executeSql(
                sqlStatement, args,
                (_, result) => {
                    resolve(Array.from(result.rows as any) as T[])
                },
                (_, error): boolean => {
                    console.warn(error)
                    resolve([])
                    return false
                })
        })
    })
}
