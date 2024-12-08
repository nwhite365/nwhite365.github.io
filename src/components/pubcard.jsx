import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import { BasicButton } from './basicbutton';
import { ResponsiveHeader } from './responsiveHeader';
import { ResponsiveSubHeader } from './responsiveSubHeader';
import { ResponsiveContent } from './responsiveContent';

export const PubCard = ({title, venue, date, abstract, paperurl}) => {
  return (    
    <Card sx={{minWidth: 275, boxShadow: 3}}>
      <CardContent>
        <ResponsiveSubHeader style={{textAlign: "center", fontWeight: 'bold'}}>{title}</ResponsiveSubHeader>
        <ResponsiveContent>Published in <span style={{fontStyle: 'italic'}}>{venue}</span>, {date}</ResponsiveContent>
        <hr style={{width:"50%", textAlign: "left", marginLeft:"0"}}/>
        <ResponsiveContent><span style={{fontWeight: 'bold'}}>Abstract:</span> {abstract}</ResponsiveContent>
        <br></br>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          >
          <BasicButton url={paperurl} text={"View Paper"} />
        </Box>
      </CardContent>
    </Card>
  );
}
