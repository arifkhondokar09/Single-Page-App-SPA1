
import { useLoaderData} from 'react-router';

const UserDetails = () => {
    const userDetails =useLoaderData();
   const{name, username}=userDetails;
    return (
        <div>
       <h4>Name : {name}</h4>
       <h4> ID  : {username}</h4>
        </div>
    );
};

export default UserDetails;