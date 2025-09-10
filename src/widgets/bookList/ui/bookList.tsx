import styles from "./bookList.module.css"
import {Book} from "@/shared";
import {BookItem} from "@/widgets/bookList/ui/bookItem";

export const BookList = ({books}: { books: Book[] }) => {
    return (
        <ul className={styles.cards}>
            {books.map((book) => (
                <BookItem key={book.id} book={book}/>
            ))}
        </ul>
    )
};
