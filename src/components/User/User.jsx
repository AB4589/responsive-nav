import React, { Suspense, useState } from 'react';
import { Link } from 'react-router';
import UserDetails from './UserDetails';

const User = ({user}) => {
    const [showInfo, setShowInfo] = useState(false);
    const {id, name, email, phone} = user;
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());
    return (
        <div className='border m-4'>
            <strong>Name: {name}</strong>            
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>           
            <Link to={`/users/${id}`}>Show Details</Link> 
            <button className='btn bg-red-500' onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'Hide': 'Show'}</button>
            {
                showInfo && <Suspense fallback="Loading">
                    <UserDetails userPromise={userPromise}></UserDetails>
                </Suspense>
            }
        </div>
    );
};

export default User;