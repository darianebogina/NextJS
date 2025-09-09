import styles from "./bookList.module.css"

type Book = {
    id: string;
    volumeInfo: {
        title: string;
        authors?: string[];
        description?: string;
        imageLinks?: {
            smallThumbnail?: string;
            thumbnail?: string;
        };
    };
};

export const BookList = ({books}: { books: Book[] }) => {
    return (
        <ul className={styles.cards}>
            {books.map((book) => (
                <BookItem key={book.id} book={book}/>
            ))}
        </ul>
    )
};

const BookItem = ({book}: { book: Book }) => {
    const info = book.volumeInfo;
    return (
        <>
            <li className={styles.book}>
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
            </li>
        </>
    )
};