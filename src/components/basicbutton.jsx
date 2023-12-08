import * as React from 'react';
import { Button } from '@mui/material';

export const BasicButton = ({url, text, icon}) => {
  return (    
    <Button
        href={url}
        target='_blank'
        sx={{color: "white", backgroundColor:"#1976d2", ":hover": {backgroundColor: "grey"}}}
    >
        {icon}
        {text}
    </Button>
  );
}