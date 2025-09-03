import { useState } from "react"
import clsx from "clsx"
import styles from "./TodoList.module.scss"
import Buttons from "../../components/Buttons"

let uniqId = 0

function TodoList() {
    const [inputValue, setInputValue] = useState("")
    const [todos, setTodos] = useState([])

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (inputValue.trim()) {
            setTodos([
                ...todos,
                {
                    id: ++uniqId,
                    text: inputValue,
                    complete: false,
                },
            ])
            setInputValue("")
        }
    }

    const handleDelete = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const handleChecked = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, complete: !todo.complete } : todo
            )
        )
    }

    const summaryCompleteTask = () =>
        todos.filter((todo) => todo.complete).length
    const summaryPendingTask = () =>
        todos.filter((todo) => !todo.complete).length

    return (
        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <input
                    value={inputValue}
                    onChange={handleInputChange}
                    placeholder="Nhập task mới..."
                />
                <Buttons type="submit" primary>Thêm</Buttons>
            </form>

            {todos.length > 0 ? (
                <ul className={styles.list}>
                    {todos.map((todo, index) => (
                        <li key={index} className={styles["todo-item"]}>
                            <input
                                type="checkbox"
                                onChange={() => handleChecked(todo.id)}
                            />
                            <span
                                className={clsx({
                                    [styles.done]: todo.complete,
                                })}
                            >
                                {todo.text}
                            </span>
                            <Buttons
                                size="small"
                                onClick={() => handleDelete(todo.id)}
                            >
                                Xóa
                            </Buttons>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className={styles.loading}>
                    Chưa có task nào. Hãy thêm task đầu tiên !!!
                </p>
            )}

            <div className={styles["task-summary"]}>
                <div className={clsx(styles.box, styles["task-total"])}>
                    Tổng: {todos.length} {todos.length > 1 ? "tasks" : "task"}
                </div>
                <div className={clsx(styles.box, styles["task-pending"])}>
                    Còn lại: {summaryPendingTask()}{" "}
                    {summaryPendingTask() > 1 ? "tasks" : "task"}
                </div>
                <div className={clsx(styles.box, styles["task-completed"])}>
                    Hoàn thành: {summaryCompleteTask()}{" "}
                    {summaryCompleteTask() > 1 ? "tasks" : "task"}
                </div>
            </div>
        </div>
    )
}

export default TodoList
