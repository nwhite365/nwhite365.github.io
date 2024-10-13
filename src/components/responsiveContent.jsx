import * as React from "react";
import Typography from "@mui/material/Typography";
import { themeProps } from "../theme";

export const ResponsiveContent = ({children}) => {
  return (
    <Typography color={themeProps.textColor} sx={{fontSize: {sm: 14, md: 14, lg: 18, xl: 20}}}>
    {children}
  </Typography>
  );
};
