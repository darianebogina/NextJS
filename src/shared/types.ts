export type Book = {
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


export type BookExtended = {
    id: string;
    volumeInfo: {
        title: string;
        authors?: string[];
        description?: string;
        imageLinks?: {
            smallThumbnail?: string;
            thumbnail?: string;
        };
        pageCount?: number;
        publishedDate?: string;
    };
};

export type QueryMode = "compact" | "full";

export type LogItem = {
    url: string
    time: string
    extra?: any
}
