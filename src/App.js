import React, { useEffect } from 'react'
import ButtonTest from './components/Pages/ButtonsTest'
import Test from '@Components/Pages/Test'
import useLang from '@Hooks/useLang'
import { SET_GLOBAL_LANG } from '@Hooks/useReduxAPI'
import useMappedState from '@Hooks/useMappedState'
import useReduxAPI from '@Hooks/useReduxAPI'

function App() {



  // useEffect(() => {

  //   SET_GLOBAL_LANG('en')
  // }, [])
  // const global = useReduxAPI('Global')
  // global('SET_GLOBAL_LANG', '')

  // const initData = useMappedState(s => s)
  // setTimeout(() => console.log(initData), 1000)

  return (
    <>
      <Test />
      <div>嗨</div>
      {/* <ButtonTest /> */}
    </>
  );
}

export default App;
