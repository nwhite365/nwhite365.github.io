import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export const BasicCard = ({header, body, link}) => {
  return (    
    <Card sx={{minWidth: 275, boxShadow: 3 }}>
      <CardContent>
        <Typography color="text.secondary" variant='h4' gutterBottom>
          {header}
        </Typography>
        <Typography variant="body2">
          {body}
        </Typography>
      </CardContent>
    </Card>
  );
}
