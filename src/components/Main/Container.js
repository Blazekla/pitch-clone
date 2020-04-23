import React from "react";
import StyledGrid from "./StyledGrid";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import Video from "../../media/collaboration.mp4";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  video: {
    maxWidth: "30rem",
  },
  textSection: {
    paddingTop: "10rem",
    paddingBottom: "10rem",
  },
}));

function Container() {
  const classes = useStyles();
  return (
    <StyledGrid container>
      <Grid
        container
        direction="row"
        justify="space-around"
        alignItems="center"
      >
        <Grid
          className={classes.textSection}
          container
          item
          md={6}
          direction="column"
        >
          <Grid item>
            <Typography variant="h2">Workflow that just works</Typography>
          </Grid>
          <Grid item>
            <Typography>
              Collaboration should be simple, straightforward, and effective.
              With Pitch, it is. Discuss current activities, manage tasks, and
              stay productive as a team. Create on any device, online or
              offline, and get great work done faster.
            </Typography>
          </Grid>
        </Grid>
        <Grid item md={6} className={classes.video}>
          <CardMedia
            // className={classes.cover}
            component="video"
            // src="../../media/collaboration.mp4"
            src={Video}
            autoPlay
            loop
            // image="/static/images/cards/live-from-space.jpg"
            title="Live from space album cover"
          />
        </Grid>
      </Grid>
    </StyledGrid>
  );
}

export default Container;
