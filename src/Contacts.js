import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrashCan, faUser} from '@fortawesome/free-solid-svg-icons'
const Contacts = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [contacts, setContacts] = useState([]);

    const addContact = (e) => {
        e.preventDefault();
        setContacts([...contacts, { name, email }]);
        setName('');
        setEmail('');
    }

    const deleteContact = (index) => {
        const updatedContacts = contacts.filter((_, i) => i !== index);
        setContacts(updatedContacts);
    }

    return (
        <div>
            <div className='m-5 border-x-4 border-y-4'>
                <h1 className='flex justify-center p-3'>Contact Manager</h1>
                <p className='mx-3 font-bold'>Add Contact</p>
                <form className='mx-3'>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button className='btn btn-primary mb-3' onClick={addContact}>Add</button>
                </form>
            </div>
       
            <div className='m-4'>
                <h2>Contact List:</h2>
                {contacts.map((contact, index) => (
                    <div key={index} className='flex items-center mx-3'>
                        <div>
                        <FontAwesomeIcon icon={faUser} beatFade />

                        </div>
                        <div className='flex flex-col relative ml-3 p-3 px-5'>
                            <li className='list-none'>{contact.name}</li>
                            <li className='list-none'>{contact.email}</li>
                        </div>
                        <button className='btn btn-danger ml-auto' onClick={() => deleteContact(index)}><FontAwesomeIcon icon={faTrashCan} /></button>
                        <hr />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Contacts;
