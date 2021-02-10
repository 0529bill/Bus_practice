import { useSelector } from 'react-redux'

export default function useMappedState(selector, equalityfn) {
    return useSelector(selector, equalityfn)
}