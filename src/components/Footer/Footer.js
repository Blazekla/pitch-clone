import React from "react";
import './Footer.css';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function Footer() {
  return (
    <div className="">
      <Typography component="div">
        <Box
          display="flex"
          justifyContent="center"
          p={1} bgcolor="background.paper">

          {/* First column */}
          <Box display="flex" flexDirection="column" display="flex">
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

          {/* Second column */}
          <Box display="flex" flexDirection="column" display="flex">
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


          {/* Third column */}
          <Box display="flex" flexDirection="column" display="flex">
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

          <Box display="flex" flexDirection="column" display="flex">
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
      </Typography>
    </div>
);
}

export default Footer;
