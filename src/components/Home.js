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

        <Grid container>
            <Grid item xs={12} md={4}>
                <Typography
                    button
                    component="a"
                    href="/display-simple-data-with-jsx"
                >
                    Display Simple Data with JSX
                </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                <Typography
                    button
                    component="a"
                    href="/loop-over-and-display-simple-data-with-jsx"
                >
                    Loop Over and Display Simple Data with JSX
                </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                <Typography
                    button
                    component="a"
                    href="/use-react-state-to-update-the-dom"
                >
                    Use React State to Update the DOM
                </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                <Typography
                    button
                    component="a"
                    href="/show-an-alert-based-on-input"
                >
                    Show an Alert Based on an Input
                </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                <Typography
                    button
                    component="a"
                    href="/adding-calculator"
                >
                    Adding Calculator
                </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                <Typography
                    button
                    component="a"
                    href="/dom-movement-with-events"
                >
                    DOM Movement with Events
                </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                <Typography
                    button component="a"
                    href="/fetch-and-display-from-api"
                >
                    Fetch and Display from an API
                </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
                <Typography
                    button component="a"
                    href="/recreate-layout-with-components"
                >
                    Recreate Layout with Components
                </Typography>
            </Grid>
        </Grid>
      </Container>
    );
  }
}

export default Home;
