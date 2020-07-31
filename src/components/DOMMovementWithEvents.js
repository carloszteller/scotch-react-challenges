import React, { useState } from 'react';
import { Container, Typography, Grid, Button, Box, makeStyles } from '@material-ui/core';

const css = makeStyles({
    box: {
        width: 100,
        height: 100,
        backgroundColor: 'red'
    }
});

const DOMMovementWithEvents = () => {
    const style = css();
    const [offsetX, setOffsetX] = useState(0);
    const [offsetY, setOffsetY] = useState(0);

    const up = () => {
        setOffsetY(offsetY - 10);
    }

    const down = () => {
        setOffsetY(offsetY + 10);
    }

    const left = () => {
        setOffsetX(offsetX - 10);
    }

    const right = () => {
        setOffsetX(offsetX + 10);
    }

    return (
        <Container>
            <Typography
                variant="h2"
                component="h1"
            >
                DOM Movement with Events
            </Typography>

            <Grid container>
                <Grid item
                    xs={1}
                    spacing={3}
                >
                    <Button
                        variant="contained"
                        onClick={up}
                    >
                        ☝️
                    </Button>
                </Grid>
                <Grid item
                    xs={1}
                    spacing={3}
                >
                    <Button
                        variant="contained"
                        onClick={down}
                    >
                        👇
                    </Button>
                </Grid>
                <Grid item
                    xs={1}
                    spacing={3}
                >
                    <Button
                        variant="contained"
                        onClick={left}
                    >
                        👈
                    </Button>
                </Grid>
                <Grid item
                    xs={1}
                    spacing={3}
                >
                    <Button
                        variant="contained"
                        onClick={right}
                    >
                        👉
                    </Button>
                </Grid>
            </Grid>

            <Box
                component="div"
                className={style.box}
                style={{transform: `translate(${offsetX}px, ${offsetY}px)`}}
            />
        </Container>
    );
}

export default DOMMovementWithEvents;