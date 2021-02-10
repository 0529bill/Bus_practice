import React from 'react'
import useMappedState from '@Hooks/useMappedState'


function Test() {

    const data = useMappedState(state => state)
    console.log(data)
    return <div>nono</div>
}

export default Test