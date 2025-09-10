import {Book} from "@/shared";
import styles from "@/widgets/bookList/ui/bookList.module.css";
import Link from "next/link";

export const BookItem = ({book}: { book: Book }) => {
    const info = book.volumeInfo;
    return (
        <>
            <li className={styles.book}>
                <Link href={`/book/${book.id}`} className={styles.bookLink}>
                    <img src={info.imageLinks?.thumbnail
                        && info.imageLinks?.smallThumbnail
                        || "https://placeholdit.com/400x500/dddddd/999999?text=No+image"} alt={info.title}/>
                    <div className={styles.info}>
                        <h2 className={styles.title}>{info.title ?? "No title"}</h2>
                        <p className={styles.author}>
                            {info.authors ? info.authors.join(", ") : "Unknown"}
                        </p>
                        <p className={styles.desc}>
                            {info.description ? info.description.slice(0, 100) + "..." : "No description"}
                        </p>
                    </div>
                </Link>
            </li>
        </>
    )
};