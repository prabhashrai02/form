import React, {useState} from 'react';
import AddMember from '../AddMember/AddMember';
import MembersList from '../MembersList/MembersList';
import './Homepage.css';

const Homepage = () => {
    const [adddata, setadddata] = useState([]);
    
    const addUserHandler = (enteredUserData) => {
        const userData = {
            ...enteredUserData,
            id: Math.random().toString(),
        }

        setadddata((prevData) => {
            return [userData, ...prevData];
        });
    };

    return (
        <div className="Homepage">
            <AddMember onadduser= {addUserHandler}/>
            <br></br>
            <MembersList users={adddata} />
        </div>
    )
}

export default Homepage;