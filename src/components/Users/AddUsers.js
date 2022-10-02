import React from 'react'
import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './AddUser.module.css'

const AddUsers = () => {
    const addUserHandler = (event) => {
        event.preventDefault();
    };

    return (
        <Card className={classes.input} >
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" />
                <label htmlFor="age">Age (Years)</label>
                <input type="number" />
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
  )
}

export default AddUsers