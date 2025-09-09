import {useState} from "react";

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

export const BookList = ({books}: { books: Book[] }) => {
    console.log(books);
    return (
        <ul>
            {books.map((book) => (
                <BookItem key={book.id} book={book}/>
            ))}
        </ul>
    )
};

const BookItem = ({book}: { book: Book }) => {
    const info = book.volumeInfo;
    return (
        <>
            <li>
                <img src={info.imageLinks?.thumbnail
                    && info.imageLinks?.smallThumbnail
                    || "https://placeholdit.com/400x500/dddddd/999999?text=No+image"} alt={info.title}/>
                <h2>{info.title ?? "No title"}</h2>
                <p>
                    {info.authors ? info.authors.join(", ") : "Unknown"}
                </p>
                <p>
                    {info.description ? info.description.slice(0, 300) + "..." : "No description"}
                </p>
            </li>
        </>
    )
};