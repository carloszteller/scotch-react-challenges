import React, { Component } from 'react';
import { Container, Typography, Grid } from '@material-ui/core';

class Home extends Component {
  render() {
    return (
      <Container>
        <Typography
            variant="h2"
            component="h1"
        >
          Scotch - 10 React Challenges (Beginner) Courses
        </Typography>

        <Grid
            container
            justify="space-between"
        >
            <Grid item>
                <Typography
                    button
                    component="a"
                    href="/display-simple-data-with-jsx"
                >
                    Display Simple Data with JSX
                </Typography>
            </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Home;
