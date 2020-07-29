import React, { useState } from 'react';
import { Container, Typography, Box, TextField } from '@material-ui/core';

const ShowAlertBasedOnInput = () => {
    const [input, setInput] = useState('');

   const openSesame = (input) => {
        if(input.toLowerCase() === "open sesame") {
            alert("Access Granted!");
        }
    }

    const onInputChange = (e) => {
        setInput(e.target.value);

        openSesame(input);
    }

    return (
        <Container>
            <Typography
                variant="h2"
                component="h1"
            >
                Show an Alert Based on an Input
            </Typography>

            <Typography
                variant="h3"
                component="h2"
            >
                What is the secret phrase?
            </Typography>

            <Box>
                <TextField
                    type="text"
                    name="secret"
                    label="Secret Phrase"
                    placeholder="Enter the secret phrase"
                    fullWidth={true}
                    value={input}
                    onChange={onInputChange}
                />
            </Box>

            <Typography>
                Hint: <strong>open sesame</strong>
            </Typography>
        </Container>
    );
}

export default ShowAlertBasedOnInput;