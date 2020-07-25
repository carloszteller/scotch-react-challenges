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
            <Grid item>
                <Typography
                    button
                    component="a"
                    href="/loop-over-and-display-simple-data-with-jsx"
                >
                    Loop Over and Display Simple Data with JSX
                </Typography>
            </Grid>
            <Grid item>
                <Typography
                    button
                    component="a"
                    href="/use-react-state-to-update-the-dom"
                >
                    Use React State to Update the DOM
                </Typography>
            </Grid>
            <Grid item>
                <Typography
                    button
                    component="a"
                    href="/show-an-alert-based-on-input"
                >
                    Show an Alert Based on an Input
                </Typography>
            </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Home;
