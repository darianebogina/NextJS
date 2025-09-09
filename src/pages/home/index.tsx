import {BookList} from "@/widgets/user/ui/bookList";
import {Header} from "@/widgets/user/ui/header";

type Book = {
    id: string;
    volumeInfo: {
        title: string;
        authors?: string[];
        description?: string;
        imageLinks?: {
            smallThumbnail?: string;
            thumbnail?: string;
        };
    };
};
const URL = "https://www.googleapis.com/books/v1/volumes?q={query}";

export const getServerSideProps = async (context) => {
    let currentUrl = URL.replace("{query}", context.query.q ?? "Javascript");
    const response = await fetch(currentUrl);
    const data = await response.json();

    return {
        props: {
            books: data.items || [],
        },
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