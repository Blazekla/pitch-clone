import React from "react";

//import MaterialUI Components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

//import custom components
import herohands from "../../../media/hero-hands.png";

const useStyles = makeStyles(theme => ({
  root: {
    height: "1000px"
  },
  outer: {
    position: "sticky",
    minHeight: "100vh"
  },
  image: {
    position: "absolute",
    top: "0",
    left: "0"
  }
}));

function Hero() {
  const classes = useStyles();

  React.useEffect(() => {
    const handleScroll = e => {
      console.log("is it working?", window.pageYOffset);
      const transform =
        window.pageYOffset <= 602
          ? 1 - (0.45 / 150.5) * (window.pageYOffset / 4)
          : 0.55;
      console.error(transform);

      const translate =
        window.pageYOffset <= 602
          ? (7.8125 / 150.5) * (window.pageYOffset / 4)
          : 7.8125;
      console.log("translate:", translate);
    };
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      // This cleans up the event handler when the component unmounts.
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const heroTransform = () => {
    return console.log(window.pageYOffset);
  };

  return (
    <div onScroll={e => console.log("test")}>
      <Grid container className={classes.root} onClick={heroTransform}>
        <Grid container item className={classes.outer}>
          <Grid item container direction="column" alignItems="center">
            <Typography>All hands on deck.</Typography>
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
    </div>
  );
}

export default Hero;
