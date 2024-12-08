import * as React from "react";
import Typography from "@mui/material/Typography";
import { themeProps } from "../theme";

export const ResponsiveHeader = ({useHighlight=false, style, children}) => {
  return (
    <Typography color={useHighlight ? themeProps.highlightColor : themeProps.textColor} variant="h4" sx={{fontSize: {sm: "2rem", md: "2rem", lg: "2rem", xl: "2.4rem"}, ...style}}>
    {children}
  </Typography>
  );
};
