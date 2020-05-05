import React from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";

const customGrid = styled(({ ...rest }) => <Grid {...rest} />)`
  padding: 0 calc(18vw - 10rem);
`;

export default customGrid;
