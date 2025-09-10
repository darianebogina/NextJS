import {Book, BookExtended} from "@/shared";

export const fetchBooks = async (query: string): Promise<Book[]> => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const data = await response.json();
    return data.items || [];
}

export const fetchBook = async (volumeId: string): Promise<BookExtended> => {
    const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${volumeId}`);
    return await response.json();
}

