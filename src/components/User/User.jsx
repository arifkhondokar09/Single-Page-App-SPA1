import React, { Suspense, useState } from 'react';
import { Link, Navigate } from 'react-router';

import UserDetails2 from '../UserDetails2/UserDetails2';

const User = ({ user }) => {

    const [showInfo, setShowInfo] = useState(false);
    const [visitHome, SetVisitHome]=useState(false);
    
    const { name, id, phone, email, website, address } = user;


    const UserPromise= fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res=> res.json())
    const styles = {
        border: "2px solid black",
        borderRadius: "10px",
        margin: "10px",
        padding: "30px"

    }
if(visitHome){
    return <Navigate to='/'> </Navigate>
}
    
    return (
        <div style={styles}>
            <h2>{name}</h2>
            <p> Phone NO :{phone}</p>
            <p>Email : {email}</p>
            <p>Website : {website}</p>
            <p>Location : {address.street}</p>
            <Link to={`/users/${id}`}> Show Details</Link>
            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? "Show" : "Hide"} Info</button>
            
               
           {
             showInfo &&  <Suspense fallback={<h3>LOading............</h3>}>
             <UserDetails2 UserPromise={UserPromise} ></UserDetails2>
              </Suspense>
           }
           <button onClick={()=> SetVisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;