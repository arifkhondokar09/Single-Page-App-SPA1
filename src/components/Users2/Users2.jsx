import React, { use } from 'react';

const Users2 = ({users2Promise}) => {
    const users2 = use(users2Promise);
    console.log(users2)
    return (
        <div>
            <h2>This is users2</h2>
        </div>
    );
};

export default Users2;