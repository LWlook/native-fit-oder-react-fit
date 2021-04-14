import {exerciseCategoryColors} from "../constants/style";

export type ExerciseCategory = keyof typeof exerciseCategoryColors

export type SearchExerciseDataItem = {
    rowid: number
    title: string
    category: ExerciseCategory
}

export interface ExerciseDataItem extends SearchExerciseDataItem {
    exerciseSet: ExerciseDataItemSet[]
    exerciseid: number
    date: string
    increaseInExerciseSet: number
}

export type ExerciseDataItemSet = {
    weight: number
    reps: number
}
