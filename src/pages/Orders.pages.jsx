import React, { useEffect, useState } from "react";
import { useFirebase } from "../context/firebase.context";
import BookCard from "../components/Card.components";
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/Button'

const OrdersPage = () => {

    const firebase = useFirebase();
    const [books, setBooks] = useState([])

    useEffect(() => {
        if (firebase.isLoggedIn) {
            firebase.fetchMyBooks(firebase.user.uid)?.then((books) => setBooks(books.docs))
        }
    }, [firebase])

    if (!firebase.isLoggedIn) {
        return (
            <div>
            <h1>You are Not logged in!</h1>
            <h2>Please log in</h2>
            <Button variant="primary">Login</Button>
            </div>
        )
    }

    console.log("books", books)

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

