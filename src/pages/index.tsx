import {GetServerSidePropsContext} from "next";
import {Book, fetchBooks, getSSRProps, QueryMode} from "@/shared";
import {Header} from "@/widgets/header";
import {BookList} from "@/widgets/book-list/ui";
import {Footer} from "@/widgets/footer";

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

    const nonce = context.req.headers['x-nonce']!;

    return {
        props: {nonce, books, language, modeQuery, cookies: context.req.headers.cookie || null}
    };
};

export default function HomePage({books, language, modeQuery, nonce}: {
    books: Book[],
    language: string,
    modeQuery: QueryMode,
    nonce: string
}) {
    return (
        <>
            <Header language={language}></Header>
            <BookList books={books} modeQuery={modeQuery} />
            <Footer language={language} nonce={nonce}></Footer>
        </>
    )
}