import React from "react";
import './Footer.css';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function Footer() {
  return (
    <div>
      <Typography component="div">
        <Box
          className="container"
          display="flex"
          justifyContent="center"
          bgcolor="background.paper">


          {/* Pitch column */}
          <Box display="flex" flexGrow={2} flexDirection="column">
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

          {/* Major column */}
          <Box
            display="flex"
            justifyContent="space-between"
            p={1}
            flexGrow={3}>

            {/* Company Column */}
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


            {/* Legal column */}
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

            {/* Follow Us Column */}
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
          </Box>
        </Box>
      </Typography>
    </div>
);
}

export default Footer;
