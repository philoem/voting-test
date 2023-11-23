import { useState, useEffect } from 'react'

const useCountDownSimulated = (cutStringAfterSecondSpace: string) => {
  const [count, setCount] = useState(10);
  const [theWinnerIs, setTheWinnerIs] = useState('')
  const [isCountdownActive, setIsCountdownActive] = useState(false)

  useEffect(() => {
    if (isCountdownActive && count === 0) {
      setTheWinnerIs(`The winner is    :    ${cutStringAfterSecondSpace}`)
      return;
    }
    if(isCountdownActive) {

      const interval = setInterval(() => {
        setCount((prevCount) => prevCount - 1)
      }, 1000)
      
      return () => {
        clearInterval(interval)
      }
    }
  }, [count, cutStringAfterSecondSpace, isCountdownActive])

  return { count, theWinnerIs, setIsCountdownActive }
}

export default useCountDownSimulated
