import {exerciseCategoryColors} from "../constants/style";

export type ExerciseCategory = keyof typeof exerciseCategoryColors

export type SearchExerciseDataItem = {
    id: number
    title: string
    category: ExerciseCategory
}

export interface ExerciseDataItem extends SearchExerciseDataItem {
    exerciseSet: ExerciseDataItemSet[]
    increaseInExerciseSet: boolean
}

export type ExerciseDataItemSet = {
    weight: number
    reps: number
}