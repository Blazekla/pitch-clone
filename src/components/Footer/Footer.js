import React from "react";
import './Footer.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  pitch: {
    order: 3,
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      order: 2,
      textAlign: 'left',
    },
  },
  major: {
    order: 2,
    textAlign: 'center',
    [theme.breakpoints.up('md')]: {
      order: 3,
      textAlign: 'left',
    },
  },
}));


function Footer() {
  const classes = useStyles();
  return (
    <div>
      <Typography component="div">
        <Grid container spacing={3}>


          {/* Pitch column */}
          <Grid item xs={12} md={4} className={classes.pitch} >
            <Box
              display="flex"
              flexGrow={2}
              flexDirection="column"
              >
              <Box p={1} fontWeight="fontWeightBold">
                Pitch
              </Box>
              <Box p={1}>
              © Copyright 2020 Pitch Software GmbH.
              </Box>
              <Box p={1}>
              All rights reserved.
              </Box>
            </Box>
          </Grid>

          {/* Major column */}
          <Grid item xs={12} md={6} className={classes.major}>
            <Grid
              container
              justify="space-between"
              >

              {/* Company Column */}
              <Grid item xs={4}>
                <Box display="flex" flexDirection="column">
                  <Box p={1} fontWeight="fontWeightBold">
                    Company
                  </Box>
                  <Box p={1}>
                    Home
                  </Box>
                  <Box p={1}>
                    About
                  </Box>
                  <Box p={1}>
                    Blog
                  </Box>
                  <Box p={1}>
                    Jobs
                  </Box>
                  <Box p={1}>
                    Press Room
                  </Box>
                </Box>
              </Grid>

              {/* Legal column */}
              <Grid item xs={4}>
                <Box display="flex" flexDirection="column">
                  <Box p={1} fontWeight="fontWeightBold">
                    Legal
                  </Box>
                  <Box p={1}>
                    Legal Notice
                  </Box>
                  <Box p={1}>
                    Privacy Policy
                  </Box>
                  <Box p={1}>
                    Terms of Use
                  </Box>
                  <Box p={1}>
                    DPA
                  </Box>
                  <Box p={1}>
                    ERDF Support
                  </Box>
                </Box>
              </Grid>

              {/* Follow Us Column */}
              <Grid item xs={4}>
                <Box display="flex" flexDirection="column">
                  <Box p={1} fontWeight="fontWeightBold">
                    Follow us
                  </Box>
                  <Box p={1}>
                    SVG icons
                  </Box>
                  <Box p={1}>
                    Download a SVGICON Coloring Page
                  </Box>
                  <Box p={1}>
                    Download the PITCHSVGICON Game
                  </Box>
                </Box>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Typography>
    </div>
);
}

export default Footer;
