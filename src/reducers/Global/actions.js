
export const SET_GLOBAL_LANG = (data) => {
    console.log('reducer', data)
    return (dispatch) => {
        dispatch({
            type: 'SET_GLOBAL_LANG',
            payload: data
        })
    }
}