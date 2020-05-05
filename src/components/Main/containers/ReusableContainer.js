import React from "react";
import PropTypes from "prop-types";
import StyledGrid from "./StyledGrid";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  video: {
    maxWidth: "30rem",
  },
  textSection: {
    paddingTop: "10rem",
    paddingBottom: "10rem",
  },
  media: {},
}));

function Container(props) {
  const classes = useStyles();

  //use theme and mediaquery to arrange order of media and text depending on screen size
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("md"));
  const found = props.mediaFirst && matches ? -1 : 0;

  return (
    <StyledGrid container>
      {console.log(`Below 600px?: ${matches}`)}
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
            // className={classes.media}
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
Container.propTypes = {
  title: PropTypes.string.isRequired,
  mediaFirst: PropTypes.bool,
  paragraph: PropTypes.string.isRequired,
  media: PropTypes.string,
};
export default Container;
