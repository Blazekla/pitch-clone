import React from "react";

//import MaterialUI Components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

//import custom components
import herohands from "../../../media/hero-hands.png";

const useStyles = makeStyles((theme) => ({
  outer: {
    position: "sticky",
    minHeight: "100vh",
  },
  image: {
    position: "absolute",
    top: "0",
    left: "0",
  },
}));

function Hero() {
  const classes = useStyles();
  return (
    <Grid container>
      <Grid container item className={classes.outer}>
        <Grid item>
          <Typography>All hands on deck.</Typography>
        </Grid>
        <Grid item>
          <Typography>
            Pitch helps teams build better presentations: collaboratively,
            effectively, and beautifully.
          </Typography>
        </Grid>
        <Grid item>
          <CardMedia
            component="img"
            src={herohands}
            alt="hero hands image"
            title="howdy"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Hero;
