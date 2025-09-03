import { useEffect, useState } from "react"
import { IoClose } from "react-icons/io5"

import styles from "./ProductList.module.scss"
import Buttons from "../../components/Buttons"

function Modal({ product, onClose }) {
    if (!product) return null
    return (
        <div className={styles.modalOverlay}>
            <div className={styles.boxModal}>
                <div className={styles.header}>
                    <span className={styles.id}>{product.id}</span>
                    <IoClose className={styles.icon} onClick={onClose} />
                </div>
                <div className={styles.content}>
                    <div className={styles.title}>{product.title}</div>
                    <p className={styles.textContent}>{product.body}</p>
                </div>
            </div>
        </div>
    )
}

function ProductList() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [expandProduct, setExpandProduct] = useState(null)

    const handleCutContent = (content) => {
        if (content.length > 100) {
            return `${content.slice(0, 100)}...`
        } else {
            return content
        }
    }

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=12")
            .then((res) => res.json())
            .then((resProducts) => setProducts(resProducts))
            .finally(() => setLoading(false))
    }, [])
    return (
        <div className={styles.wrapper}>
            {loading ? (
                <p>Loading ...</p>
            ) : (
                products.map((product) => {
                    return (
                        <div className={styles.productCard} key={product.id}>
                            <span>{product.id}</span>
                            <h3>{product.title}</h3>
                            <p className={styles.content}>
                                {handleCutContent(product.body)}
                            </p>
                            <Buttons
                                size="small"
                                onClick={() => setExpandProduct(product)}
                            >
                                Xem chi tiết
                            </Buttons>
                        </div>
                    )
                })
            )}

            <Modal
                product={expandProduct}
                onClose={() => setExpandProduct(null)}
            ></Modal>
        </div>
    )
}

export default ProductList
