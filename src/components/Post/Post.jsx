import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
   const navigate =useNavigate();
   function handleNavigate (){
    navigate(`/posts/${id}`)
   }
    const {id,title}=post;
    const styles= {
        border:"2px solid black",
        margin: "10px",
        padding: "10px", 
        borderRadius: "10px",backgroundColor:"aqua"
    }

    return (
        <div style={styles}>

            <h5 >{id}</h5>
            <h2>{title}</h2>
            <Link to={`/posts/${id}`}><button>post details</button></Link>
            <button onClick={handleNavigate}>Details of : {id}</button>
          <Link to="/laptops">  <button >Details of : {id*10}</button></Link>
        </div>
    );
};

export default Post;