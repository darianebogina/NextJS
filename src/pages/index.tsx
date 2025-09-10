import {Header, BookList} from "@/widgets";
import {GetServerSidePropsContext} from "next";
import {Book, fetchBooks} from "@/shared";

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