import React from "react";
import StyledGrid from "./StyledGrid";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
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

function Container(props) {
  const classes = useStyles();
  const found = props.mediaFirst ? -1 : 0;
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
            <Typography variant="h2">{props.title}</Typography>
          </Grid>
          <Grid item>
            <Typography>{props.paragraph}</Typography>
          </Grid>
        </Grid>
        <Grid item style={{ order: found }} md={6} className={classes.video}>
          <CardMedia
            // className={classes.cover}
            component="video"
            src={props.media}
            autoPlay
            loop
            title="Video title goes here..."
          />
        </Grid>
      </Grid>
    </StyledGrid>
  );
}

//Add proptypes to control props used by component

export default Container;
