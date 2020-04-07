import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

function SignUp() {
  return (
    <Grid
      container
      style={{
        background:
          "#4966f7 linear-gradient(95.24deg,#4966f7 0,#8253ff 122.55%)",
      }}
    >
      <Grid
        container
        direction="column"
        justify="center"
        alignContent="center"
        style={{ paddingTop: "8rem", paddingBottom: "8rem" }}
      >
        <Grid item>
          <Typography align="center">
            Ready to see what we're building?
          </Typography>
        </Grid>
        <Grid container justify="center">
          <Grid item>
            <TextField
              variant="outlined"
              margin="none"
              size="small"
              label="Your Email"
              style={{ borderRadius: "6px 0 0 6px", marginBottom: "0" }}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              style={{
                marginLeft: "-1px",
                borderRadius: "0 6px 6px 0",
                marginBottom: "0",
              }}
            >
              <Typography>Sign Up</Typography>
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Typography align="center">
            We care about protecting your data. Here's our Privacy Policy.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default SignUp;
