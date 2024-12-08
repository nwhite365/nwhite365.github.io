import * as React from 'react';
import { Button } from '@mui/material';
import { themeProps } from '../theme';

export const BasicButton = ({url, text, icon, style}) => {
  return (    
    <Button
        href={url}
        target='_blank'
        sx={{color: themeProps.primaryColor, 
          backgroundColor: "grey", 
          ":hover": {backgroundColor: themeProps.highlightColor},
          fontSize: {sm: "1rem", md: "1rem", lg: "1rem", xl: "1.4rem"},
           ...style}}
    >
        {icon}
        {text}
    </Button>
  );
}