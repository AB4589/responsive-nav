import React from 'react';

const Link = ({route}) => {

console.log(route)

return (
<li className="mr-10" key={route.id}>
    <a href={route.url}>{route.name}</a>
</li>
);
};

export default Link;