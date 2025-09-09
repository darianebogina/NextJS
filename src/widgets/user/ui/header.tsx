import Link from 'next/link'
import Form from 'next/form'
import {useRouter} from "next/router";
import {useState} from "react";

export const Header = () => {
    const router = useRouter();
    const [query, setQuery] = useState("");

    return (
        <div>
            <Link href="/home">BookShelves</Link>
            <div>
                <input type="text" value={query} placeholder="Type here..."
                       onChange={(e) => setQuery(e.target.value)} />
                <button onClick={() => router.push(`/home/?q=${query}`)}>&#128269;</button>
            </div>
        </div>
    )
}