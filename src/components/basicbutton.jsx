import * as React from 'react';
import { Button } from '@mui/material';
import { themeProps } from '../theme';

export const BasicButton = ({url, text, icon, style}) => {
  return (    
    <Button
        href={url}
        target='_blank'
        sx={{color: themeProps.primaryColor, backgroundColor: "grey", ":hover": {backgroundColor: themeProps.highlightColor}, ...style}}
    >
        {icon}
        {text}
    </Button>
  );
}