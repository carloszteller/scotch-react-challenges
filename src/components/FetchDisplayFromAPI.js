import React, { useState } from 'react';
import axios from 'axios';
import { Container, Typography, Box, Button, Grid, Paper } from '@material-ui/core';

const FetchDisplayFromAPI = () => {
    const [books, setBooks] = useState(null);
    const apiURL = 'https://www.anapioficeandfire.com/api/books?pageSize=30';
    const fetchData = async () => {
        const res = await axios.get(apiURL);

        setBooks(res.data);
    }

    return (
        <Container>
            <Typography
                    variant="h2"
                    component="h1"
                >
                    Fetch and Display from an API
            </Typography>

            <Box className="text-center" py={3}>
                <Typography
                        variant="h4"
                        component="h2"
                    >
                        Game of Thrones Books
                </Typography>

                <Typography
                        variant="h6"
                        component="h3"
                    >
                        Fetch a list from an API and display it
                </Typography>

                <Button
                    variant="contained"
                    onClick={fetchData}
                >
                    Fecth Data
                </Button>
            </Box>

            <Grid container spacing={3}>
                {books &&
                    books.map((book, i) => (
                        <Grid item
                            xs={6} md={4}
                            key={i}
                        >
                            <Paper className="book">
                                <p>✍ {book.authors.join(', ')}</p>
                                <p>📖 {book.numberOfPages} pages</p>
                                <p>🏡 {book.country}</p>
                                <p>⏰ {(new Date(book.released).toDateString())}</p>
                            </Paper>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
}

export default FetchDisplayFromAPI;