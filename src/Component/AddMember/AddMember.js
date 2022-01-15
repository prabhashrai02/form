import React, {useState} from 'react';

import './AddMember.css';
import Card from '../Card/Card';
import Button from '../Button/Button';

const AddMember = (props) => {
    const [enteredUsername, setenteredUsername] = useState('');
    const [enteredAge, setenteredAge] = useState('');

    const AddUserHandler = (event) => {
        event.preventDefault();

        if(enteredUsername.trim().length === 0 || +enteredAge < 1){
            return;
        }

        const data = {
            name: enteredUsername,
            age: enteredAge,
        }

        setenteredAge('');
        setenteredUsername('');
        
        // console.log(data);
        props.onadduser(data);
    } 

    const ChangeUsername = (event) => {
        setenteredUsername(event.target.value);
    }

    const ChangeAge = (event) => {
        setenteredAge(event.target.value);
    }    

    return (
        <Card>
            <form className="form_input" 
            onSubmit={AddUserHandler}>
                <label>Enter Your Name</label>
               
                <input type='text' 
                id='username' 
                placeholder='Eg. Prabhash Rai'
                value={enteredUsername}
                onChange={ChangeUsername}
                ></input>
                
                <label>Enter Your Age</label>
                
                <input type='number' 
                id='age' 
                placeholder='Eg. 21'
                onChange={ChangeAge}
                value={enteredAge}
                ></input>
                
                <Button type='submit' 
                >Add User</Button>
            </form>
        </Card>
    )
}

export default AddMember;