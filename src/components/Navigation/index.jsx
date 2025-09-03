import { NavLink } from "react-router"
import clsx from "clsx"

import styles from "./navigation.module.scss"

const navItems = [
    { to: "/", title: "Home" },
    { to: "/counter", title: "CounterApp" },
    { to: "/todo", title: "TodoList" },
    { to: "/products", title: "ProductList" },
    { to: "/comments", title: "CommentSystem" },
    { to: "/profile", title: "ProfileCard" },
    { to: "/weather", title: "WeatherApp" },
    { to: "/buttons", title: "Buttons" },
]

function Navigation() {
    const className = clsx(styles.wrapper)
    return (
        <nav>
            <ul className={className}>
                {navItems.map((item, index) => (
                    <li key={index}>
                        <NavLink
                            to={item.to}
                            className={({ isActive }) =>
                                isActive ? styles.active : ""
                            }
                        >
                            {item.title}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Navigation
