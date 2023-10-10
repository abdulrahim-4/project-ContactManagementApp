import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faUser } from '@fortawesome/free-solid-svg-icons';

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
        <div className="container mx-auto px-4">
            <div className='my-5 border-x-4 border-y-4 p-5'>
                <h1 className='text-center mb-3'>Contact Manager</h1>
                <p className='font-bold mb-3 text-center'>Add Contact</p>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="text" className="form-control" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button className='btn btn-primary' onClick={addContact}>Add</button>
                </form>
            </div>

            <div className='mx-4'>
                <h2 className='mb-3'>Contact List:</h2>
                {contacts.map((contact, index) => (
                    <div key={index} className='flex items-center mb-3'>
                        <div className='mr-3'>
                            <FontAwesomeIcon icon={faUser} beatFade />
                        </div>
                        <div className='flex flex-col'>
                            <li className='list-none'>{contact.name}</li>
                            <li className='list-none'>{contact.email}</li>
                        </div>
                        <button className='btn btn-danger ml-auto' onClick={() => deleteContact(index)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Contacts;
