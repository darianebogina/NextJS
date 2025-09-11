import {Header, BookList} from "@/widgets";
import {GetServerSidePropsContext} from "next";
import {Book, fetchBooks, getSSRProps, QueryMode} from "@/shared";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const query = String(context.query.search ?? "Javascript");
    const books = await fetchBooks(query);

    const { language, modeQuery } = getSSRProps(context);

    return {
        props: {books, language, modeQuery},
    };
};

export default function HomePage({ books, language, modeQuery}: { books: Book[], language: string, modeQuery: QueryMode }) {
    return (
        <>
            <Header language={language} modeQuery={modeQuery}></Header>
            <BookList books={books} modeQuery={modeQuery}/>
        </>
    )
}