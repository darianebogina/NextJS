import {Header, BookList, Footer} from "@/widgets";
import {GetServerSidePropsContext} from "next";
import {Book, fetchBooks, getSSRProps, QueryMode} from "@/shared";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const query = String(context.query.search ?? "Javascript");
    const books = await fetchBooks(query);

    const {language, modeQuery} = getSSRProps(context);

    const action = context.query.action;
    if (action === 'set') {
        context.res.setHeader(`Set-Cookie`, `session_id=${(Math.random() * 100).toString()};`)
    }
    if (action === 'delete') {
        context.res.setHeader(`Set-Cookie`, `session_id=; max-age=0`)
    }

    return {
        props: {books, language, modeQuery, cookies: context.req.headers.cookie}
    };
};

export default function HomePage({books, language, modeQuery}: {
    books: Book[],
    language: string,
    modeQuery: QueryMode
}) {
    return (
        <>
            <Header language={language}></Header>
            <BookList books={books} modeQuery={modeQuery}/>
            <Footer language={language}></Footer>
        </>
    )
}