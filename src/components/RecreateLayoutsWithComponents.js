import React from 'react';
import { Container, Card, CardContent, Typography } from '@material-ui/core';

const RecreateLayoutsWithComponents = () => {
    return (
        <Container>
            <Typography
                variant="h2"
                component="h1"
            >
                Recreate Layout with Components
            </Typography>

            <StatCard icon="👉" label="Points" number={3000} />
            <StatCard icon="⚡" label="Lightnings" number={6540} />
            <StatCard icon="🤙" label="Shakas" number={337010} />
            <StatCard icon="💎" label="Diamonds" number={98661} />
        </Container>
    );
}

const StatCard = ({icon, label, number}) => {
    return (
        <Card className="my-5">
            <CardContent>
                <Typography component="p">
                    {icon}
                    <strong>{label}</strong>
                </Typography>
                <Typography variant="h1" component="p">
                    {number.toLocaleString()}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default RecreateLayoutsWithComponents;