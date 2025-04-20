import React, { use } from 'react';

const Users3 = ({users3Promise}) => {
    const  users3 =use(users3Promise);
    console.log(users3);
    return (
        <div>
            <h2>This is users3</h2>
        </div>
    );
};

export default Users3;