import { useEffect, useState } from "react"
import styles from "./Profilecard.module.scss"

function ProfileCard() {
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then((res) => res.json())
            .then((resUser) => {
                setUser(resUser)
                console.log(resUser)
            })
    }, [])

    return (
        <div className={styles.card}>
            {user ? (
                <>
                    <img
                        src="/bg-girl.png"
                        alt="Placeholder"
                        className={styles.avatar}
                    />
                    <ul className={styles.info} key={user.id}>
                        <li>Name: {user.name}</li>
                        <li>Username: {user.username}</li>
                        <li>Email: {user.email}</li>
                        <li>Phone: {user.phone}</li>
                        <li>Website: {user.website}</li>
                        <li>
                            Address: {user.address.city},{user.address.street}
                        </li>
                    </ul>
                </>
            ) : (
                <>
                    <p>Loading ....</p>
                </>
            )}
        </div>
    )
}

export default ProfileCard
