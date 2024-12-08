import * as React from "react";
import Typography from "@mui/material/Typography";
import { themeProps } from "../theme";

export const ResponsiveContent = ({style, children}) => {
  return (
    <Typography color={themeProps.textColor} sx={{fontSize: {sm: "1rem", md: "1rem", lg: "1rem", xl: "1.2rem"}, ...style}}>
    {children}
  </Typography>
  );
};
