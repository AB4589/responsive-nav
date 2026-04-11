import React, { use } from 'react';
import Post from '../Post/Post';

const Posts = ({postPromise}) => {
    const posts = use(postPromise);
    return (
        <div>
            {
                posts.map((post, index)=><Post post={post} key={index}></Post>)
            }
            
        </div>
    );
};

export default Posts;