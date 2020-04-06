import React from "react";
import './Footer.css';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
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

  svg: {
    justifyContent: 'space-around',
    [theme.breakpoints.up('md')]: {
      justifyContent: 'center'
    },
  },
}));


function Footer() {
  const classes = useStyles();
  return (
    <div>
    <Container fixed>
      <Typography component="div">
        <Grid container spacing={3} justify="center">


          {/* Pitch column */}
          <Grid item xs={12} md={4} className={classes.pitch} >
            <Box
              display="flex"
              flexGrow={2}
              flexDirection="column"
              >
              <Box p={1} fontWeight="fontWeightBold">
                <svg fill="none" height="23" width="66"><path d="M44.87 17.272a4.318 4.318 0 11.04-4.877l3.191-1.884a8.019 8.019 0 10-.017 8.613l-3.213-1.852zM53.662 0H49.96v22.206h3.7v-7.402a4.318 4.318 0 118.636 0v7.402h3.701v-8.122a7.3 7.3 0 00-12.336-5.282V0zM27.756 0h-3.701v17.271a5.551 5.551 0 009.201 4.183l-1.788-3.034a1.847 1.847 0 01-1.45.701h-.412a1.851 1.851 0 01-1.85-1.85v-6.168h3.7V7.402h-3.7V0zM19.74 0a2.056 2.056 0 100 4.112 2.056 2.056 0 000-4.112zM21.59 22.206V7.402h-3.7v14.804h3.7z" fill="currentColor"></path><path clip-rule="evenodd" d="M0 22.206h3.7v-4.318h3.393A8.944 8.944 0 107.093 0H0v22.206zM3.7 3.7h3.393a5.243 5.243 0 010 10.486H3.701V3.7z" fill-rule="evenodd" fill="currentColor"></path></svg>
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
                  <Box p={1} display="flex" flexDirection="row" className={classes.svg}>

                    {/* Twitter SVG */}
                    <Box p={1}>
                      <svg className='svgicons' fill="none" height="22" viewBox="0 0 25 22" width="25" xmlns="http://www.w3.org/2000/svg"><path d="m24.0032.0135613c-1.0448.8281127-2.2017 1.4614787-3.4259 1.8757187-1.346-1.738975-3.515-2.348805-5.4312-1.526994-1.9162.821814-3.172 2.900444-3.1445 5.204884v1.22596c-3.89435.11347-7.58062-1.97138-9.81949-5.55361 0 0-4.36422 11.03368 5.45526 15.93748-2.24699 1.7139-4.92375 2.5732-7.63737 2.452 9.81948 6.1298 21.8211 0 21.8211-14.09861-.001-.34149-.0303-.68214-.0873-1.01755 1.1135-1.23394 1.8993-2.79187 2.2694-4.4992787z" fill="#424648"/></svg>
                    </Box>
                    {/* Facebook SVG */}
                    <Box p={1}>
                      <svg className='svgicons' fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m1.324.00097656c-.731 0-1.324.59296344-1.324 1.32392344v21.3507c0 .7319.593 1.3239 1.324 1.3239h11.676v-8.9994h-3v-2.9999h3v-1.9998c0-3.09884 2.235-4.99973 5-4.99973 1.325 0 2.168-.044 2.5 0l-.5 2.99982h-2c-1.5 0-2 .94994-2 1.99991v1.9998h4.273l-.773 2.9999h-3.5v8.9994h6.675c.733 0 1.325-.592 1.325-1.3239v-21.3507c0-.73096-.592-1.32392344-1.324-1.32392344z" fill="#424648"/></svg>
                    </Box>

                    {/* Linkedin SVG */}
                    <Box p={1}>
                      <svg className='svgicons' fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m20.4 20.4h-3.6v-6.36c0-.996-.804-1.8-1.8-1.8s-1.8.804-1.8 1.8v6.36h-3.6v-10.8h3.6v1.44c.6-1.008 1.908-1.68 3-1.68 2.316 0 4.2 1.884 4.2 4.2zm-15-12.828c-1.2 0-2.172-.972-2.172-2.172s.972-2.172 2.172-2.172 2.172.972 2.172 2.172-.972 2.172-2.172 2.172zm1.8 12.828h-3.6v-10.8h3.6zm14.4-20.4h-19.2c-1.332 0-2.4 1.068-2.4 2.4v19.2c0 1.32 1.08 2.4 2.4 2.4h19.2c1.32 0 2.4-1.08 2.4-2.4v-19.2c0-1.332-1.08-2.4-2.4-2.4z" fill="#424648"/></svg>
                    </Box>

                    {/* Instagram SVG */}
                    <Box p={1}>
                      <svg className='svgicons' fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="m23.9 7.10059c-.1-1.29981-.3-2.09961-.6-2.89942-.1048-.41894-.2647-.81152-.4938-1.19043-.2081-.34375-.4732-.67676-.8062-1.00976-.7-.7002-1.3-1.099613-2.1-1.400394-.8-.299805-1.6-.5-2.9-.59960944h-5c-3.30005 0-3.69995 0-4.90002.09960944-1.29993 0-2.19996.200195-3 .5-.69996.300781-1.40003.700194-2.09998 1.400394-.37158.37207-.65869.71484-.89111 1.07519-.205448.31836-.368167.64942-.508914 1.02442-.299927.7998-.5000004 1.70019-.5000004 3-.0181885.21875-.0330811.41113-.0452881.59961-.0235596.3623-.0369873.70996-.0445557 1.20312-.0101318.65234-.0101318 1.56058-.0101318 3.09768 0 3.2998 0 3.6992.0999756 4.8994.0999754 1.2998.3000484 2.1006.5999754 2.9004.200073.7998.600099 1.5 1.300049 2.2002.69995.6992 1.30005 1.0996 2.09998 1.3994.80004.2998 1.59997.5 2.90002.6006h5c1.6152 0 2.5356 0 3.1952-.0117.688-.0118 1.0922-.0372 1.7048-.0889.7245-.0557 1.2937-.1426 1.7942-.2598.3976-.0937.7517-.207 1.1058-.3398.1005-.0371.1994-.0772.2967-.1182.0826-.0351.1642-.0713.2446-.1094.5785-.2744 1.0982-.6357 1.5587-1.1728.7-.7002 1.1-1.2998 1.4-2.0996s.5-1.6006.6-2.9004c.1-1.2002.1-1.5996.1-4.8994 0-3.29983 0-3.70022-.1-4.90041zm-16.1002 4.89841c0 2.2959 1.90455 4.2002 4.2001 4.2002 2.2954 0 4.1999-1.9043 4.1999-4.2002 0-2.2949-1.9045-4.20017-4.1999-4.20017-2.29555 0-4.2001 1.90527-4.2001 4.20017zm-2 0c0 3.4004 2.80005 6.2012 6.2001 6.2012 3.3999 0 6.1999-2.8008 6.1999-6.2012 0-3.40037-2.8-6.20017-6.1999-6.20017-3.40005 0-6.2001 2.7998-6.2001 6.20017zm11.2002-6.39939c0 .80078.6 1.40137 1.4 1.40137.8001 0 1.4-.60059 1.4-1.40137 0-.79981-.5999-1.40039-1.4-1.40039-.8 0-1.4.60058-1.4 1.40039z" fill="#424648" fill-rule="evenodd"/></svg>
                    </Box>

                  </Box>
                  <Box>
                    Download a 🐶 Coloring Page
                  </Box>
                  <Box>
                    Download the PITCHSVGICON Game
                  </Box>
                </Box>
              </Grid>

            </Grid>
          </Grid>
        </Grid>
      </Typography>
      </Container>
    </div>
);
}

export default Footer;
