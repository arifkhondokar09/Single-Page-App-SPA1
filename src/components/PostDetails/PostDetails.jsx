import React from 'react';
import {useLoaderData, useNavigate  } from 'react-router';

const PostDetails = () => {


    const userDetails= useLoaderData()

const navigate= useNavigate()


    
    const styles= {
        border:"2px solid black",
        margin: "10px",
        padding: "10px",
borderRadius  : '10px',

backgroundColor:"aqua"

        
        
        
    }
   
    return (
        <div style={styles} >
            <h5>{userDetails.id}</h5>
          <h3>{userDetails.body}</h3>   
         <button onClick={()=> navigate(-1)}>go Back</button>
       
          
        </div>
    );
};

export default PostDetails;