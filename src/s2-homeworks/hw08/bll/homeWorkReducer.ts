import {UserType} from '../HW8'


type ActionType = ReturnType<typeof sortAC> | ReturnType<typeof checkAC>
    // | { type: 'sort'; payload: 'up' | 'down' }
    // | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case "sort": { // by name
            const result = action.payload === 'up'
                ? [...state.sort((a,b) => a.name.localeCompare(b.name))]
                : [...state.sort((a,b) =>  a.name.localeCompare(b.name)).reverse()]
            return result// need to fix
        }
        case "check": {

            return state.filter(u => u.age > action.payload).reverse() // need to fix
        }
        default:
            return state
    }
}

export const sortAC = (sortName: 'up' | 'down') => ({
    type: 'sort',
    payload: sortName
} as const)

export const checkAC = (age: number) => ({
    type: 'check',
    payload: age
} as const)