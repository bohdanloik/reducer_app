import { title } from "process"
import { v1 } from "uuid"
import { TodolistType } from "../App"

 type ActionType = {
    type: string
    [key: string]: any
 }

 export const todolistsReducer = (state: Array<TodolistType>, action: ActionType): Array<TodolistType> => {
    switch (action.type) {
        case 'REMOVE-TODOLIST': {
            return state.filter(t => t.id != action.id)
        }
         case('ADD-TODOLIST') : {
            return [...state, {
                id: v1(),
                title: action.title,
                filter: 'all'
            }]  
         }
        default:
            throw new Error("I don't understand this type")
    }
 }