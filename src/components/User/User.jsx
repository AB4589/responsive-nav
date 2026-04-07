import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {

    return (
        <div className='border m-4'>
            <strong>Name: {user.name}</strong>            
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>           
            <Link to={`/users/${user.id}`}>Show Details</Link> 
        </div>
    );
};

export default User;