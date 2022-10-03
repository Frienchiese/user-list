import React, { useState } from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import classes from './AddUser.module.css'

const AddUsers = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 || +enteredAge < 0) {
            return;
        }
        props.onAddUser(enteredUsername, enteredAge);
        setEnteredUsername('');
        setEnteredAge('');
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    }


    return (
        <div>
            <ErrorModal title="An error occured" message="Something went wrong"></ErrorModal>
            <Card className={classes.input} >
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username" >Username</label>
                    <input type="text" onChange={usernameChangeHandler} value={enteredUsername} />
                    <label htmlFor="age">Age (Years)</label>
                    <input type="number" onChange={ageChangeHandler} value={enteredAge} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </div>
  )
}

export default AddUsers