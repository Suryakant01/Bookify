import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/firebase.context";
import BookCard from "../components/Card.components";
import CardGroup from 'react-bootstrap/CardGroup';

const OrdersPage = () => {

    const firebase = useFirebase();

    const [books, setBooks] = useState([])

    useEffect(() => {
        if (firebase.isLoggedIn) {
            firebase.fetchMyBooks(firebase.user.uid)?.then((books) => setBooks(books.docs))
        }
    }, [firebase])

    if (!firebase.isLoggedIn) return <h1>Please Login</h1>

    console.log("books o", books)

    return (
        <div>
            <CardGroup>
                {books.map((books) => (
                    <BookCard link={`/books/order/${books.id}`} key={books.id} id={books.id} {...books.data()} />

                ))}
            </ CardGroup>
        </div>
    )
}

export default OrdersPage;