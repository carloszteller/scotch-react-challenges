import React, { useState } from 'react';
import { Container, Typography, Grid, TextField, Button } from '@material-ui/core';

const AddingCalculator = () => {
    const [num1, setNum1] = useState(null);
    const [num2, setNum2] = useState(null);
    const [total, setTotal] = useState(null);

    const onNum1Change = (e) => {
        setNum1(e.target.value);
    }

    const onNum2Change = (e) => {
        setNum2(e.target.value);
    }

    const addNumbers = (e) => {
        setTotal(parseInt(num1) + parseInt(num2));
    }

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
                        value={num1}
                        onChange={onNum1Change}
                    />
                </Grid>

                <Grid item>
                    <TextField
                        type="number"
                        name="num2"
                        label="Number 2"
                        value={num2}
                        onChange={onNum2Change}
                    />
                </Grid>

                <Button
                    variant="contained"
                    onClick={addNumbers}
                >
                    Add Numbers
                </Button>
            </Grid>

            <Typography
                component="body1"
                variant="h1"
                className="bold"
            >
                {total}
            </Typography>
        </Container>
    );
}

export default AddingCalculator;