import Link from 'next/link'
import {useRouter} from "next/router";
import {useState} from "react";
import styles from "./header.module.css"

export const Header = () => {
    const router = useRouter();
    const [query, setQuery] = useState("");

    return (
        <div className={styles.header}>
            <Link href="/public" className={styles.logo}>BookShelves</Link>
            <div className={styles.search}>
                <input type="text" value={query} placeholder="Type here..."
                       onChange={(e) => setQuery(e.target.value)} />
                <button onClick={() => router.push(`/?search=${query}`)}>&#128269;</button>
            </div>
        </div>
    )
}