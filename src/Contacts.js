import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faUser, faEnvelope, faPhone,faEdit } from '@fortawesome/free-solid-svg-icons';

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

    const editContact = (index) => {
        const contact = contacts[index];
        setName(contact.name);
        setEmail(contact.email);
    }


    return (
        <div className="container mx-auto px-4 bg-gradient-to-r from-blue-500 to-purple-500 min-h-screen text-white">
            <div className='my-5 border-x-4 border-y-4 p-5 bg-white bg-opacity-70 rounded-md'>
            <h1 className='text-center text-4xl mb-6 font-bold text-blue-600 transition-all duration-1000 hover:text-blue-800'>
    <span className="block">Contact Manager</span>
</h1>

                <p className='font-bold mb-3 text-center text-black'>Add Contact</p>
                <form>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label text-black">
                            <FontAwesomeIcon icon={faUser} />  Name
                        </label>
                        <input type="text" className="form-control" id="name" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label text-black">
                            <FontAwesomeIcon icon={faEnvelope} className="mr-2" /> Email
                        </label>
                        <input type="text" className="form-control" id="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <button className='btn btn-primary bg-blue-500 hover:bg-blue-700 text-white' onClick={addContact}>Add</button>
                </form>
            </div>

            <div className='mx-4'>
            <h2 className='mb-3 text-2xl font-bold text-white'><FontAwesomeIcon icon={faPhone} /> Contact List:</h2>
                {contacts.map((contact, index) => (
                    <div key={index} className='flex items-center mb-3 bg-white bg-opacity-70 rounded-md p-3'>
                        <div className='mr-3'>
                            <FontAwesomeIcon  className=' bg-black ' icon={faUser} beatFade/>
                        </div>
                        <div className='flex flex-col'>
                            <li className='list-none text-black'>{contact.name}</li>
                            <li className='list-none  text-black'>{contact.email}</li>
                        </div>
                        <button className='btn btn-danger bg-red-500 hover:bg-red-700 text-white ml-auto' onClick={() => deleteContact(index)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                        <button className='btn btn-primary bg-blue-500 hover:bg-blue-700 text-white ml-2' onClick={() => editContact(index)}>
                            <FontAwesomeIcon icon={faEdit} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Contacts;
