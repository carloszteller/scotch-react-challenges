import React from 'react';
import { Container, Typography, Avatar, Box } from '@material-ui/core';

const user = {
    name: 'John Doe',
    location: 'Somewhere, USA',
    eats: 'Pizza',
    age: 35,
    likes: 'Coding into the wee hours of the morning',
    avatar: 'https://static.independent.co.uk/s3fs-public/thumbnails/image/2020/06/18/10/avatar.jpg'
}

const DisplaySimpleDataJSX = () => {
    return (
        <Container>
            <Typography
                variant="h2"
                component="h1"
            >
                Display Simple Data with JSX
            </Typography>

            <Avatar
                src={user.avatar}
                alt={user.name}
                className="avatar"
            />

            <Box mb={2}>
                <Typography
                    variant="h3"
                    component="h2"
                >
                    {user.name}
                </Typography>
            </Box>

            <Box mb={2}>
                <Typography
                    variant="caption"
                    component="p"
                >
                    Location
                </Typography>
                <Typography component="p">
                    {user.location}
                </Typography>
            </Box>

            <Box mb={2}>
                <Typography
                    variant="caption"
                    component="p"
                >
                    Eats
                </Typography>
                <Typography component="p">
                    {user.eats}
                </Typography>
            </Box>

            <Box mb={2}>
                <Typography
                    variant="caption"
                    component="p"
                >
                    Age
                </Typography>
                <Typography component="p">
                    {user.age}
                </Typography>
            </Box>

            <Box mb={2}>
                <Typography
                    variant="caption"
                    component="p"
                >
                    Likes
                </Typography>
                <Typography component="p">
                    {user.likes}
                </Typography>
            </Box>
        </Container>
    );
}

export default DisplaySimpleDataJSX;