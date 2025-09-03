import { useState } from "react"
import clsx from "clsx"
import styles from "./CounterApp.module.scss"
import Buttons from "../../components/Buttons"

function CounterApp() {
    const [count, setCount] = useState(0)

    const handleIncrease = () => setCount(count + 1)
    const handleDecrease = () => setCount(count - 1)
    const handleReset = () => setCount(0)

    return (
        <div
            className={clsx(styles.container, {
                [styles.positive]: count > 0,
                [styles.negative]: count < 0,
                [styles.zero]: count === 0,
            })}
        >
            <div className={styles.countSection}>
                <h2
                    style={{
                        color:
                            count > 0
                                ? "#2e7d32"
                                : count < 0
                                ? "#c62828"
                                : "#616161",
                    }}
                >
                    {count}
                </h2>
            </div>

            <div className={styles.buttons}>
                <Buttons size="large" onClick={handleDecrease}>
                    Decrease
                </Buttons>
                <Buttons size="large" onClick={handleReset}>
                    Reset
                </Buttons>

                <Buttons size="large" onClick={handleIncrease}>
                    Increase
                </Buttons>
            </div>

            <span className={styles.status}>
                Trạng thái hiện tại:{" "}
                {count > 0 ? "Dương" : count === 0 ? "Bằng không" : "Âm"}
            </span>
        </div>
    )
}

export default CounterApp
