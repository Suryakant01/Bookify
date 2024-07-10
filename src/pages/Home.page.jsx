import React, { useEffect, useState } from "react";
import BookCard from "../components/Card.components";
import { useFirebase } from "../context/firebase.context";
import CardGroup from 'react-bootstrap/CardGroup';

const HomePage = () => {

    const firebase = useFirebase();

    const [books, setBooks] = useState([])

    useEffect(() => {
        firebase.listAllBooks().then((books) => setBooks(books.docs))
    }, [])

    return (
        <div className="conatainer mt-5">
            <CardGroup>
                {books.map((books) => (
                    <BookCard link ={`/books/view/${books.id}`} key={books.id} id={books.id} {...books.data()} />
                ))}
            </CardGroup>
        </div>

    )
}

export default HomePage