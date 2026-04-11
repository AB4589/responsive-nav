import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const userData = useLoaderData();
  
    return (
        <div>
            <h3 className='font-semibold'>{userData.name}</h3>
            <p>Email: {userData.email}</p>
            <p>Phone: {userData.phone}</p>
        </div>
    );
};

export default UserDetails;