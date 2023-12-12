import { Card, CardMedia, CardContent } from '@mui/material';
import * as React from 'react';

export const CV = () => {
  return (
    <Card sx={{boxShadow: 3}}>
      <CardContent>
        <CardMedia
          component={"iframe"}
          src="https://drive.google.com/file/d/1jhV0qTfqBjlc6qCDj7Q1YFF9z5vNsT3t/preview"
          style={{ width: '100%', height: window.innerHeight}}
        />
      </CardContent>
    </Card>
    
  );
}
