import React, { Component } from 'react';
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core';

class AddingCalculator extends Component {
    state = {
        num1: null,
        num2: null,
        total: null
    }

    onNum1Change = (e) => {
        this.setState({
            num1: e.target.value
        });
    }

    onNum2Change = (e) => {
        this.setState({
            num2: e.target.value
        });
    }

    addNumbers = (e) => {
        this.setState({
            total: parseInt(this.state.num1) + parseInt(this.state.num2)
        });
    }

    render() {
        return (
            <Container>
                <Typography
                    variant="h2"
                    component="h1"
                >
                    Adding Calculator
                </Typography>

                <Grid container>
                    <Grid item>
                        <TextField
                            type="number"
                            name="num1"
                            label="Number 1"
                            value={this.state.num1}
                            onChange={this.onNum1Change}
                        />
                    </Grid>

                    <Grid item>
                        <TextField
                            type="number"
                            name="num2"
                            label="Number 2"
                            value={this.state.num2}
                            onChange={this.onNum2Change}
                        />
                    </Grid>

                    <Button
                        variant="contained"
                        onClick={this.addNumbers}
                    >
                        Add Numbers
                    </Button>
                </Grid>

                <Typography
                    component="body1"
                    variant="h1"
                    className="bold"
                >
                    {this.state.total}
                </Typography>
            </Container>
        );
    }
}

export default AddingCalculator;