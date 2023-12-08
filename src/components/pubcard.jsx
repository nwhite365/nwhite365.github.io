import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { BasicButton } from './basicbutton';

export const PubCard = ({title, venue, date, abstract, paperurl}) => {
  return (    
    <Card sx={{minWidth: 275, boxShadow: 3}}>
      <CardContent>
        <Typography color="text.secondary" variant='h5' gutterBottom style={{textAlign: "center"}}>
            {title}
        </Typography>
        <Typography variant='body2'>
          Published in <span style={{fontStyle: 'italic'}}>{venue}</span>, {date}
        </Typography>
        <hr style={{width:"50%", textAlign: "left", marginLeft:"0"}}/>
        <Typography variant="body2">
        <span style={{fontWeight: 'bold'}}>Abstract:</span> {abstract}
        </Typography>
        <br></br>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          >
          <BasicButton url={paperurl} text={"Download here"} />
        </Box>
      </CardContent>
    </Card>
  );
}
