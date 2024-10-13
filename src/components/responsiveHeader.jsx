import * as React from "react";
import Typography from "@mui/material/Typography";
import { themeProps } from "../theme";

export const ResponsiveHeader = ({useHighlight=false, children}) => {
  return (
    <Typography color={useHighlight ? themeProps.highlightColor : themeProps.textColor} variant="h4" sx={{fontSize: {sm: 24, md: 24, lg: 30, xl: 34}}}>
    {children}
  </Typography>
  );
};
