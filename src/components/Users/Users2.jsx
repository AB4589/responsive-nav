import React, { use } from 'react';

const Users2 = ({userPromise}) => {
    const user = use(userPromise);
    console.log(user)
    return (
        <div>
        </div>
    );
};

export default Users2;