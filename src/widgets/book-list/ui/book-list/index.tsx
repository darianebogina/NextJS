import styles from "./book-list.module.css"
import {Book, QueryMode} from "@/shared";
import {BookItem} from "../book-item/book-item";

export const BookList = ({books, modeQuery}: { books: Book[], modeQuery: QueryMode }) => {
    return (
        <ul className={styles.cards}>
            {books.map((book) => (
                <BookItem key={book.id} book={book} modeQuery={modeQuery}/>
            ))}
        </ul>
    )
};
