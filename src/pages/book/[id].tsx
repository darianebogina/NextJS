import {Header, BookInfo, Footer} from "@/widgets";
import {GetServerSidePropsContext} from "next";
import {BookExtended, fetchBook, getSSRProps, QueryMode} from "@/shared";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const volumeId = context.params!.id;

    const book = await fetchBook(String(volumeId));
    const { language, modeQuery } = getSSRProps(context);

    if (!book || !book.volumeInfo) {
        return {
            notFound: true,
        };
    }

    return {
        props: {book, language, modeQuery},
    };
};

export default function BookPage({book, language, modeQuery}: { book: BookExtended, language: string, modeQuery: QueryMode }) {
    return (
        <>
            <Header language={language}/>
            <BookInfo book={book} modeQuery={modeQuery}/>
            <Footer language={language}/>
        </>
    );
};

