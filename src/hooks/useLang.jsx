import React from 'react'
import i18n from '@Langs/i18n'
import useMappedState from '@Hooks/useMappedState'

function useLang(lang) {
    // let i18n = new i18n()
    const a = useMappedState(s => s.global)
    console.log(a)
    return { i18n: new i18n() }
}

export default useLang