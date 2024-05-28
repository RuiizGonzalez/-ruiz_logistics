import { useEffect } from 'preact/hooks'
import {useProgressiveNumber} from './hooks/UseProgressiveNumbers'

export  const CountUp = (
  {initial, final, duration}:
  {initial: number, final: number, duration?: number}
) =>{ 
  const [count,setcount] = useProgressiveNumber(initial, duration)

  useEffect(() => {
    setcount(final)
  },[])





  return <span>{count}</span>
}