import React, { Component } from 'react';
import { Container, Typography, Box, TextField } from '@material-ui/core';

class UseReactStateUpdateDOM extends Component {
    state = {
        name: "",
        age: null
    };

    onChangeName = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    onChangeAge = (e) => {
        this.setState({
            age: e.target.value
        });
    }

    render() {
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
                        Display Name: {this.state.name}
                    </Typography>
                    <Typography
                        component="p"
                    >
                        Display Age: {this.state.age}
                    </Typography>
                </Box>

                <Box
                    mt="5"
                >
                    <TextField
                        type="text"
                        name="name"
                        label="Name"
                        hintText="Enter your name"
                        fullWidth={true}
                        value={this.state.name}
                        onChange={this.onChangeName}
                    />
                </Box>
                <Box>
                    <TextField
                        type="text"
                        name="age"
                        label="Age"
                        hintText="Enter your age"
                        fullWidth={true}
                        value={this.state.age}
                        onChange={this.onChangeAge}
                    />
                </Box>
            </Container>
        );
    }
}

export default UseReactStateUpdateDOM;