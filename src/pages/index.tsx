import {BookList} from "@/widgets/book/ui/bookList";
import {Header} from "@/widgets/book/ui/header";
import {GetServerSidePropsContext} from "next";
import {Book} from "@/entities/book/model/types";
import {fetchBooks} from "@/shared/api/books";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const query = String(context.query.search ?? "Javascript");
    const books = await fetchBooks(query);

    return {
        props: {books},
    };
};

export default function HomePage({books}: { books: Book[] }) {
    return (
        <>
            <Header></Header>
            <BookList books={books}/>
        </>
    )
}