import * as React from "react";
import Typography from "@mui/material/Typography";
import { themeProps } from "../theme";

export const ResponsiveSubHeader = ({useHighlight=false, children}) => {
  return (
    <Typography color={useHighlight ? themeProps.highlightColor : themeProps.textColor} variant="h5" sx={{fontSize: {sm: 20, md: 20, lg: 24, xl: 30}}}>
    {children}
  </Typography>
  );
};
