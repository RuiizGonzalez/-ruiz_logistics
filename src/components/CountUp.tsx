import { useEffect } from 'preact/hooks'
import {useProgressiveNumber} from './hooks/UseProgressiveNumbers'

export  const CountUp = (
  {initial, final, decimals, duration}:
  {initial: number, final: number, decimals?: number, duration?: number}
) =>{ 
  const [count,setcount] = useProgressiveNumber(initial, duration,decimals)

  useEffect(() => {
    setcount(final)
  },[])





  return <span>{count}</span>
}