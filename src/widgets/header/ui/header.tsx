import Link from 'next/link'
import {useRouter} from "next/router";
import {useState} from "react";
import styles from "./header.module.css"
import {deleteCookie, setCookie} from "@/shared";

export const Header = ({language}: { language: string}) => {
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
            <div className={styles.session}>
                <button title={language === "ru" ? "Начать сессию" : "Start session"}
                        onClick={() => setCookie("session_id", (Math.random() * 100).toString())}>🟢
                </button>
                <Link href="/user/profile">{language === "ru" ? "Профиль" : "Profile"}</Link>
                <button title={language === "ru" ? "Закрыть сессию" : "End session"}
                        onClick={() => deleteCookie("session_id")}>🔴</button>
            </div>
        </div>
    )
}