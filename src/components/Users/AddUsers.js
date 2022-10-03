import React, { useState } from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import classes from './AddUser.module.css'

const AddUsers = (props) => {
    const [enteredUsername, setEnteredUsername] = useState("");
    const [enteredAge, setEnteredAge] = useState("");
    const [error, setError] = useState("");

    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input value",
                message: "Please fill all the inputs."
            })
            return;
        }
        if (+enteredAge < 0) {
            setError({
                title: "Invalid age input value",
                message: "Please enter valid age value (> 0)"
            })
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

    const closeModal = () => {
        setError(null);
    }

    return (
        <div>
            {error && <ErrorModal 
            title={error.title} 
            message={error.message} 
            onHandleError={closeModal} />}
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