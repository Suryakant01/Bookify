import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { useFirebase } from "../context/firebase.context";


const MyNavbar = () => {

    const firebase = useFirebase();
    return (

        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Bookify</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/book/list">
                        Add Listing
                    </Nav.Link>
                    <Nav.Link href="/books/orders">Orders</Nav.Link>
                    {
                        firebase.isLoggedIn ? <Nav.Link href="/login" onClick={firebase.logout}>Logout</Nav.Link> : <Nav.Link href="/login">Login</Nav.Link>
                    }


                </Nav>
            </Container>
        </Navbar>


    )

}

export default MyNavbar;