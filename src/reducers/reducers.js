import Global from '@Reducers/_Constants/Global'

const initialState = {
    lang: 'en',
}


export default (state = initialState, action) => {
    switch (action.type) {
        case Global.SET_GLOBAL_LANG:
            return { ...state, lang: action.payload }
        default:
            console.log('this action is not in the reducer')
            return state
    }


}