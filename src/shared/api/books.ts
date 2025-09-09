import {Book, BookExtended} from "@/entities/book/model/types";

const queryURL = "https://www.googleapis.com/books/v1/volumes?q={query}";

export const fetchBooks = async (query: string): Promise<Book[]> => {
    const currentUrl = queryURL.replace("{query}", query);
    const response = await fetch(currentUrl);
    const data = await response.json();
    return data.items || [];
}

const bookURL = "https://www.googleapis.com/books/v1/volumes/";

export const fetchBook = async (volumeId: string): Promise<BookExtended> => {
    const response = await fetch(bookURL + volumeId);
    return await response.json();
}

