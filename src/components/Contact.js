// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = (props) => {
    return (
        <div className='card'>
            <img src={props.data.photo} alt={props.data.name}/>
            <div className='container'>
                <h1>{props.data.name}</h1>
                <h1>{props.data.phone}</h1>
                <h1>{props.data.email}</h1>
            </div>
        </div>
    )
}

export default Contact;