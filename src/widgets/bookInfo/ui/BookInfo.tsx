import {BookExtended} from "@/shared";
import styles from "@/widgets/bookInfo/ui/book.module.css";

type queryMode = "compact" | "full";

export const BookInfo = ({book, modeQuery}: { book: BookExtended, modeQuery: queryMode  }) => {
    const info = book.volumeInfo;
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                {modeQuery === "full" &&
                    <img src={info.imageLinks?.thumbnail
                        && info.imageLinks?.smallThumbnail
                        || "https://placeholdit.com/400x500/dddddd/999999?text=No+image"}
                         className={styles.imageWrapper}
                         alt={info.title}/>
                }
                <div className={styles.info}>
                    <h2>{info.title ?? "No title"}</h2>
                    <p>
                        {info.authors ? info.authors.join(", ") : "Unknown"}
                    </p>
                    <p>
                        {info.description ?? "No description"}
                    </p>
                    <div>
                        <p>{`Date: ${info.publishedDate ?? "Unknown"}`}</p>
                        <p>{`Pages: ${info.pageCount ?? "Unknown"}`}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}