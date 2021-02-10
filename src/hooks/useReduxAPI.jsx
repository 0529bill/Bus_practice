import useDispatch from '@Hooks/useDispatch'
import { useCallback } from 'react'


const actionType = [
    'Global'
]
const LOAD_MODULE = {}



export default function useReduxAPI(actionType) {
    // if (action.includes(actionType))
    const dispatch = useDispatch()
    return useCallback((action, props = []) => {
        console.log('props', props)
        const isInclude = actionType.includes(actionType)
        let reduxType = null
        if (isInclude) {
            LOAD_MODULE[actionType] = require(`@Reducers/${actionType}/actions`);
            reduxType = LOAD_MODULE[actionType]
        }
        if (reduxType) {

            const reduxAction = reduxType[action]
            console.log(props)
            dispatch(reduxAction(props))
        } else {
            console.warn(`Can't find the reduxType ${reduxType}`)
        }
    },
        [actionType],
    )

}



// export const SET_GLOBAL_LANG = (data) => {
//     console.log('reducer', data)
//     dispatch({
//         type: 'SET_GLOBAL_LANG',
//         payload: data
//     })
// }




// to dispatch in react-redux, either use connect with dispatch, or useDispatch with custom functino 