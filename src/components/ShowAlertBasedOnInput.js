import React, { Component } from 'react';
import { Container, Typography, Box, TextField } from '@material-ui/core';

class ShowAlertBasedOnInput extends Component {
    state = {
        input: ""
    };

    openSesame = (input) => {
        if(input.toLowerCase() === "open sesame") {
            alert("Access Granted!");
        }
    }

    onInputChange = (e) => {
        this.setState({
            input: e.target.value
        });

        this.openSesame(this.state.input);
    }

    render() {
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
                        value={this.state.input}
                        onChange={this.onInputChange}
                    />
                </Box>

                <Typography>
                    Hint: <strong>open sesame</strong>
                </Typography>
            </Container>
        );
    }
}

export default ShowAlertBasedOnInput;