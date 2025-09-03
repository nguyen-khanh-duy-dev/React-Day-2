import { useState } from "react"
import { IoMdRefresh } from "react-icons/io"

import styles from "./WeatherApp.module.scss"
import Buttons from "../../components/Buttons"

function WeatherApp() {
    const weatherData = {
        hanoi: {
            city: "Hà Nội",
            temp: 31,
            weather: "Nắng",
            humidity: 65,
        },
        hcm: {
            city: "TP.HCM",
            temp: 28,
            weather: "Có mây",
            humidity: 78,
        },
        danang: {
            city: "Đà Nẵng",
            temp: 23,
            weather: "Mưa nhẹ",
            humidity: 82,
        },
    }

    const [values, setValues] = useState(weatherData.hanoi)
    const [valueRefresh, setValueRefresh] = useState([])
    const [isRefresh, setIsRefresh] = useState(false)

    const handleChangeOption = (e) => {
        Object.entries(weatherData).filter(([key, data]) => {
            if (key === e.target.value) {
                setValues(data)
            }
        })
        setValueRefresh(null) // reset giá trị random
        setIsRefresh(false) // tắt trạng thái random
    }

    const handleChangeIcon = (weather) => {
        if (weather === "Nắng") {
            return "☀️"
        } else if (weather === "Có mây") {
            return "🌤️"
        } else if (weather === "Mưa nhẹ") {
            return "🌧️"
        }
    }

    const handleRandom = () => {
        setIsRefresh(true)
        const randomNumber = Math.floor(Math.random() * 6)
        const randomOperator = Math.random()
        const newTemp =
            randomOperator > 0.5
                ? values.temp + randomNumber
                : values.temp - randomNumber

        const newHumidity =
            randomOperator > 0.5
                ? values.humidity + randomNumber
                : values.humidity - randomNumber

        const newWeather =
            newTemp > 30 ? "Nắng" : newTemp >= 25 ? "Có mây" : "Mưa nhẹ"

        setValueRefresh({
            ...values,
            temp: newTemp,
            humidity: newHumidity,
            weather: newWeather,
        })
    }
    return (
        <div className={styles.wrapper}>
            <select
                name="city"
                className={styles.selectionCity}
                onChange={handleChangeOption}
            >
                <option value="">Chọn thành phố của bạn</option>
                {Object.keys(weatherData).map((key) => (
                    <option value={key} key={key}>
                        {key}
                    </option>
                ))}
            </select>
            <div className={styles.weatherCard}>
                <div className={styles.detail}>
                    <div className={styles.location}>
                        <i className="fa-solid fa-location-dot"></i>
                        <h2 className={styles.city}>{values.city}</h2>
                    </div>
                    <span className={styles.temp}>
                        {isRefresh ? valueRefresh.temp : values.temp}
                        <sup>°</sup>
                    </span>
                    <span className={styles.status}>
                        {isRefresh ? valueRefresh.weather : values.weather}
                    </span>
                    <span className={styles.humidity}>
                        Độ ẩm:{" "}
                        {isRefresh ? valueRefresh.humidity : values.humidity}%
                    </span>
                </div>
                <div className={styles.rightCard}>
                    <span className={styles.icon}>
                        {handleChangeIcon(
                            isRefresh ? valueRefresh.weather : values.weather
                        )}
                    </span>
                    <button onClick={() => handleRandom()}>
                        <IoMdRefresh className={styles.iconRefresh} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp
