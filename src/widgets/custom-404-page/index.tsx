import styles from "./404.module.css";

export const Custom404Page = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <h1>404</h1>
                <p>Sorry, page not found</p>
                <a href="/public">Back to main page</a>
            </div>
        </div>
    )
}

