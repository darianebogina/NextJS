import styles from "@/widgets/footer/ui/footer.module.css";

export const Footer = ({language}: { language: string }) => {
    return (
        <div className={styles.info}>
            {language === "ru" ?
                (<p> Привет! Эта страница использует </p>) : (<p> Hello! This page uses </p>)}
            <a className={styles.api}
               href={"https://developers.google.com/books/docs/v1/reference/bookshelves?hl=ru"}> Google Books
                APIs</a>
        </div>
    );
}
