import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const navigate =  useNavigate();
    const handleNavigate = () => {
        navigate('/home')
    }
    const {title, body} = post;
    return (
        <div className='border m-4'>
           <h2 className='font-medium'>{title}</h2>
           <p className='font-light'>{body}</p>
            <Link to={`/posts/${post.id}`}>
                <button className='btn bg-green-500'>Show Details</button>
            </Link>
            <button className='btn bg-sky-500' onClick={handleNavigate}> Details of: {post.id}</button>
        </div>
    );
};

export default Post;