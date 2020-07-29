import React, { useState } from 'react';
import { Container, Typography, Box, TextField } from '@material-ui/core';

const UseReactStateUpdateDOM = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState(null);
    
    const onChangeName = (e) => {
        setName(e.target.value);
    }

    const onChangeAge = (e) => {
        setAge(e.target.value);
    }

    return (
        <Container>
            <Typography
                variant="h2"
                component="h1"
            >
                Use React State to Update the DOM
            </Typography>

            <Box
                mb="5"
            >
                <Typography
                    component="p"
                    className="mb-2"
                >
                    Display Name: {name}
                </Typography>
                <Typography
                    component="p"
                >
                    Display Age: {age}
                </Typography>
            </Box>

            <Box
                mt="5"
            >
                <TextField
                    type="text"
                    name="name"
                    label="Name"
                    palceholder="Enter your name"
                    fullWidth={true}
                    value={name}
                    onChange={onChangeName}
                />
            </Box>
            <Box>
                <TextField
                    type="text"
                    name="age"
                    label="Age"
                    placeholder="Enter your age"
                    fullWidth={true}
                    value={age}
                    onChange={onChangeAge}
                />
            </Box>
        </Container>
    );
}

export default UseReactStateUpdateDOM;