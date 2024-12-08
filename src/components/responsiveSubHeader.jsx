import * as React from "react";
import Typography from "@mui/material/Typography";
import { themeProps } from "../theme";

export const ResponsiveSubHeader = ({useHighlight=false, style, children}) => {
  return (
    <Typography color={useHighlight ? themeProps.highlightColor : themeProps.textColor} variant="h5" sx={{fontSize: {sm: "1.25rem", md: "1.25rem", lg: "1.25rem", xl: "1.5rem", ...style}}}>
    {children}
  </Typography>
  );
};
