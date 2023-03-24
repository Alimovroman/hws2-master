const initState: InitialState = {
    themeId: 1,
}
 type InitialState = {
     themeId: number
 }

 type ChangeThemeIdACType = ReturnType<typeof changeThemeId>

 type ActionsType = ChangeThemeIdACType

export const themeReducer = (state = initState, action: ActionsType): InitialState => { // fix any
    switch (action.type) {
        // дописать
        case "SET_THEME_ID":
            return {
                ...state,
                themeId: action.id
            }

        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any