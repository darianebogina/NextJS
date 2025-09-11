import Link from 'next/link'
import {useRouter} from "next/router";
import {useState} from "react";
import styles from "./header.module.css"

type queryMode = "compact" | "full";

export const Header = ({language, modeQuery}: { language: string, modeQuery: queryMode }) => {
    const router = useRouter();
    const [query, setQuery] = useState("");

    return (
        <div className={styles.header}>
            <Link href="/" className={styles.logo}>BookShelves</Link>
            <div className={styles.search}>
                <input type="text" value={query}
                       placeholder={language === "ru" ? "Введите название..." : "Type here..."}
                       onChange={(e) => setQuery(e.target.value)}/>
                <button onClick={() => router.push(`/?search=${query}`)}>&#128269;</button>
            </div>
            {modeQuery === "full" &&
                <div className={styles.info}>
                    {language === "ru" ?
                        (<p> Привет! Эта страница использует </p>) : (<p> Hello! This page uses </p>)}
                    <a className={styles.api}
                       href={"https://developers.google.com/books/docs/v1/reference/bookshelves?hl=ru"}> Google Books
                        APIs</a>
                </div>}
        </div>
    )
}