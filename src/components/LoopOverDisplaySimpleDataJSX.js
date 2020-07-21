import React, { Component } from 'react';
import { Container, Typography, Box } from '@material-ui/core';
import { findAllByPlaceholderText } from '@testing-library/react';

const users = [
    {
      name: "😃 William",
      location: "🏘️ Lagos",
      car: "🚘 Honda"
    },
    {
      name: "😃 Chris",
      location: "🏘️ Moon",
      car: "🚘 Tesla"
    },
    {
      name: " 😃 Rose",
      location: "🏘️ Venice",
      car: "🚘 Pagani"
    },
    {
      name: "😃 Mike",
      location: "🏘️ Milan",
      car: "🚘 Rolls Royce"
    },
    {
      name: "😃 Liz",
      location: "🏘️ Beirut",
      car: "🚘 Mercedes"
    }
  ];

class DisplaySimpleDataJSX extends Component {
    render() {
        return (
            <Container>
                <Typography
                    variant="h2"
                    component="h1"
                >
                    Loop Over and Display Simple Data with JSX
                </Typography>

                {users.map((user, i) => (
                    <Box
                        key={i}
                        mb={2}
                        className="users-box"
                    >
                        <Typography
                            component="p"
                            className="bold mb-3"
                        >
                            {user.name}
                        </Typography>
                        <Typography
                            component="p"
                            className="bold mb-3"
                        >
                            {user.location}
                        </Typography>
                        <Typography
                            component="p"
                        >
                            {user.car}
                        </Typography>
                    </Box>
                ))}
            </Container>
        );
    }
}

export default DisplaySimpleDataJSX;