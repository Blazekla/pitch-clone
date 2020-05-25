import React, { useState, useEffect, useRef } from "react";

//import MaterialUI Components
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";

//import custom components
import herohands from "../../../media/hero-hands.png";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "1000px",
  },
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
  const heroImage = useRef(null);
  const [imageScale, setImageScale] = useState(1);
  const [imageTranslate, setImageTranslate] = useState(0);
  let scaleI;
  let translateI;
  const testTranslate = (item) => {
    console.log("inside the translate func: ", item);
    setImageTranslate(item);
    // translateI = imageTranslate;
  };
  const testScale = (item) => {
    console.log("intide the scale func: ", item);
    setImageScale(item);
    // scaleI = imageScale;
  };
  useEffect(() => {
    const handleScroll = (e) => {
      const scale =
        window.pageYOffset <= 602
          ? 1 - (0.45 / 150.5) * (window.pageYOffset / 4)
          : 0.55;

      testScale(scale);

      const translate =
        window.pageYOffset <= 602
          ? (7.8125 / 150.5) * (window.pageYOffset / 4)
          : 7.8125;

      testTranslate(translate);
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
    <div onScroll={() => console.log("test")}>
      <Grid container className={classes.root} onClick={heroTransform}>
        <Grid container item className={classes.outer}>
          <Grid item container direction="column" alignItems="center">
            <Typography>All hands on deck.</Typography>
            <Typography>
              Pitch helps teams build better presentations: collaboratively,
              effectively, and beautifully.
            </Typography>
          </Grid>
          <Grid
            item
            ref={heroImage}
            style={{
              transformOrigin: "50% 40%",
              willChange: "transform",
              height: "100%",
              width: "100%",
              // transform: `scale(${imageScale}) translate(${imageTranslate}%,0px)`,
              // backgroundColor: "blue",
            }}
          >
            <div
              style={{
                // color: #334ac0;
                // font-size: inherit;
                left: "0",
                // line-height: ".95",
                margin: " 0 auto",
                maxWidth: "8ch",
                position: "absolute",
                right: "0",
                top: "26vh",
              }}
            >
              <CardMedia
                component="img"
                src={herohands}
                alt="hero hands image"
                title="howdy"
                className={classes.image}
                style={{
                  transform: ` scale(${imageScale}) translate(${imageTranslate}%,0px)`,
                }}
              />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Hero;
