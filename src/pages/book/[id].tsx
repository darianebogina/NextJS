import {GetServerSidePropsContext} from "next";
import {BookExtended, fetchBook, getSSRProps, QueryMode} from "@/shared";
import {Header} from "@/widgets/header";
import {BookInfo} from "@/widgets/book-info";
import {Footer} from "@/widgets/footer";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const volumeId = context.params!.id;

    const book = await fetchBook(String(volumeId));
    const {language, modeQuery} = getSSRProps(context);

    if (!book || !book.volumeInfo) {
        return {
            notFound: true,
        };
    }

    const nonce = context.req.headers['x-nonce']!;
    return {
        props: {nonce, book, language, modeQuery},
    };
};

export default function BookPage({book, language, modeQuery, nonce}: {
    book: BookExtended,
    language: string,
    modeQuery: QueryMode,
    nonce: string
}) {
    return (
        <>
            <Header language={language}/>
            <BookInfo book={book} modeQuery={modeQuery}/>
            <Footer language={language} nonce={nonce}/>
        </>
    );
};

