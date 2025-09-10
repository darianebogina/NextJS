import {Header, BookInfo} from "@/widgets";
import {GetServerSidePropsContext} from "next";
import {BookExtended, fetchBook} from "@/shared";

export const getServerSideProps = async (context: GetServerSidePropsContext) => {
    const volumeId = context.params!.id;

    const book = await fetchBook(String(volumeId));

    if (!book || !book.volumeInfo) {
        return {
            notFound: true,
        };
    }

    return {
        props: {book},
    };
};

export default function BookPage({book}: { book: BookExtended }) {
    return (
        <>
            <Header/>
            <BookInfo book={book} />
        </>
    );
};

