import { FC } from "react";
import styles from './styles.module.scss'

const disits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const digitRegexp = /\d/;    // 做检验是不是数字

interface Props {
  numberString: string // 123
}

const NumberDisplay: FC<Props> = (props: Props) => {
  const { numberString } = props

  return (
    <div className={styles.NumberDisplay}>
      {/* ['1','2','3',....] */}
      {numberString.split('').map(digitStr => (
        <div className={styles.digitWrapper}>
          {
            digitRegexp.test(digitStr) ? (
              // 展示数字
              <span className={styles.digitList} style={{ transform: `translate(-50%, ${-Number(digitStr) * 32}px)` }}>
                {disits.map(digit => (
                  <span className={styles.digit} key={digit}>{digit}</span>
                ))}
              </span>
            ) : (
              // 展示普通字符
              <span>{digitStr}</span>
            )
          }
        </div>
      ))}


    </div>
  )
}

export default NumberDisplay