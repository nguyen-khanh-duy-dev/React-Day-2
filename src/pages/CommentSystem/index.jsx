import { useEffect, useState } from "react"
import { IoIosSend } from "react-icons/io"
import { AiOutlineLike } from "react-icons/ai"
import { AiOutlineDislike } from "react-icons/ai"
import { FaRegCommentDots } from "react-icons/fa"

import styles from "./CommentSystem.module.scss"
import Buttons from "../../components/Buttons"
import Button from "../Button"

function CommentSystem() {
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [valueInput, setValueInput] = useState("")
    let currentLength = comments.length
    const handleSubmit = () => {
        const credential = {
            postId: 1,
            id: ++currentLength,
            name: "Duyyy",
            email: "duynkfullstack@edu.vn",
            body: valueInput,
        }

        if (valueInput) {
            setComments([credential, ...comments])
        }

        setValueInput("")
    }

    const handleChange = (e) => {
        setValueInput(e.target.value)
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault()
            handleSubmit()
        }
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/comments?postId=1")
            .then((res) => res.json())
            .then((resComments) => setComments(resComments))
            .finally(() => setLoading(false))
    }, [])
    return loading ? (
        <p>Loading ...</p>
    ) : (
        <div className={styles.comment}>
            <div className={styles.commentForm}>
                <img
                    src={`https://ui-avatars.com/api/?name=${"Duyyy"}&background=random`}
                    alt=""
                />
                <div className={styles.commentAction}>
                    <span className={styles.currentUser}>
                        {"Duy (duynk@fullstack)"}
                    </span>
                    <textarea
                        value={valueInput}
                        name="comment-input"
                        id="comment-input"
                        placeholder="Write your comment here ..."
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                    />
                    <Buttons className={styles.sendBtn} rounded onClick={handleSubmit}>
                        <IoIosSend className={styles.btnSubmit} />
                    </Buttons>
                </div>
            </div>
            <div className={styles.commentList}>
                {comments.map((comment) => (
                    <div className={styles.commentItem} key={comment.id}>
                        <img
                            className="avatar"
                            src={`https://ui-avatars.com/api/?name=${comment.name}&background=random`}
                            alt=""
                        />
                        <div className={styles.commentContent}>
                            <div className={styles.title}>
                                <h3 className={styles.userName}>
                                    {comment.name}
                                </h3>
                                <span className={styles.time}>2 hour ago</span>
                            </div>
                            <span className={styles.email}>
                                {comment.email}
                            </span>
                            <p className={styles.body}>{comment.body}</p>
                            <span className={styles.translate}>Translate</span>
                            <div className={styles.commentFooter}>
                                <div className={styles.boxIcon}>
                                    <AiOutlineLike />
                                    20
                                </div>
                                <div className={styles.boxIcon}>
                                    <AiOutlineDislike />
                                    20
                                </div>
                                <div className={styles.boxIcon}>
                                    <FaRegCommentDots />
                                    Reply
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CommentSystem
