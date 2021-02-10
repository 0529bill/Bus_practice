import React, { useState } from 'react'
import i18n from '../../langs/i18n'

function ButtonTest() {
    // let [lang, setLang] = useState(null)
    // i18n('')

    return (
        <>
            <button onClick={() => i18n('en')}>En</button>
            <button onClick={() => i18n('tw')}>Tw</button>
        </>
    )

}


export default ButtonTest