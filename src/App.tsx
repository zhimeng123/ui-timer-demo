// 1. 做垂直Div 0-9
// 2. 滚动到7时， div就垂直移动到 7*height 个单位
import styles from './styles.module.scss'
import NumberDisplay from "./components/NumberDisplay"
import { useEffect, useMemo, useState } from 'react'
import dayjs from 'dayjs'

const getRandomValues = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}



function App() {
  const [time, setTime] = useState<number>(Date.now().valueOf())
  const [numberString, setNumberString] = useState('0.123')

  useEffect(() => {
    setInterval(() => {
      setTime(Date.now().valueOf())
    }, 1000)
  }, [])

  const timeStr = useMemo(() => {
    return dayjs(time).format('HH:mm:ss');
  }, [time])

  // useEffect(() => {
  //   setInterval(() => {
  //     setNumberString(getRandomValues(100, 999).toString())
  //   }, 1000)
  // }, [])

  return (
    <div className={styles.app}>
      <NumberDisplay numberString={timeStr} />
    </div>
  )
}

export default App
