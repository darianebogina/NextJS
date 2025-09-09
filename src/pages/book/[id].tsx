import {Header} from "@/widgets/book/ui/header";
import {GetServerSidePropsContext} from "next";
import {BookExtended} from "@/entities/book/model/types";
import {fetchBook} from "@/shared/api/books";
import {BookInfo} from "@/widgets/book/ui/BookInfo";

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

