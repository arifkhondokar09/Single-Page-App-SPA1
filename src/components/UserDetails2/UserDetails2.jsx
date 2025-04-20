import React, { use } from 'react';

const UserDetails2 = ({UserPromise}) => {
    const userDetails= use(UserPromise);
    const {name,username,email}=userDetails;
    const styles={
        backgroundColor: "aquamarine",
        border : "2px solid blue",
        margin: "10px",
        padding: "10px",
        borderRadius: "10px"

    }

    return (
        <div style={styles}>
            <h3>{name}</h3>
            <h5>User Name : {username}</h5>
            <h5>Email : {email}</h5>
        </div>
    );
};

export default UserDetails2;