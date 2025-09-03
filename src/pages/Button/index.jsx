import Buttons from "../../components/Buttons"
import styles from "./Button.module.scss"

function Button() {
    return (
        <div className={styles.wrapper}>
            <Buttons>Click me</Buttons>
            <Buttons primary>Primary Button</Buttons>
            <Buttons href="https://google.com" target="_blank">
                Go to Google
            </Buttons>

            <div className="size">
                <Buttons size="small">Small</Buttons>
                <Buttons size="medium">Medium</Buttons>
                <Buttons size="large">Large</Buttons>
            </div>

            <div>
                <Buttons bordered>Bordered</Buttons>
                <Buttons rounded>Rounded</Buttons>
                <Buttons primary rounded>
                    Primary Rounded
                </Buttons>
            </div>

            <Buttons onClick={() => alert("Clicked!")}>Click Alert</Buttons>

            <Buttons disabled onClick={() => alert("Should not show")}>
                Disabled Button
            </Buttons>

            <Buttons loading onClick={() => console.log("Should not log")}>
                Loading Button
            </Buttons>

            <Buttons className={styles.customBtn}>Custom Styled</Buttons>

            <Buttons primary>
                <span>📧</span> Send Email
            </Buttons>
        </div>
    )
}

export default Button
