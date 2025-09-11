import styles from "./bookList.module.css"
import {Book} from "@/shared";
import {BookItem} from "@/widgets/bookList/ui/bookItem";

type queryMode = "compact" | "full";

export const BookList = ({books, modeQuery}: { books: Book[], modeQuery: queryMode }) => {
    return (
        <ul className={styles.cards}>
            {books.map((book) => (
                <BookItem key={book.id} book={book} modeQuery={modeQuery}/>
            ))}
        </ul>
    )
};
