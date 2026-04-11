import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {

    const postData = useLoaderData();
    const navigate = useNavigate();
    return (
        <div className='border w-2xl'>
            <h2 className='font-medium h-8'>{postData.title}</h2>
            <p className='font-normal'>{postData.body}</p>
            <button className='btn bg-red-500' onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetails;