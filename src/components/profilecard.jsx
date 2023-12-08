import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import profile from '../static/images/nate-profile.jpg';
import { Stack } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faGoogleScholar, faResearchgate } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { BasicButton } from './basicbutton';

export const ProfileCard = () => {
  return (
    <Card sx={{ display: 'flex', boxShadow: 3}} raised={true}>
      <Stack display="flex" justifyContent="center" alignItems="center">
      <CardMedia
        component="img"
        sx={{ width: '100%',
          display: "flex",
          flex: "1",}}
        image={profile}
        alt="Nathan Thomas White"
      />
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
            Nathan Thomas White
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Phd Candidate
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            University of Wisconsin - Madison
          </Typography>    

          <Box padding={0.5}>
            <BasicButton url={'mailto:ntwhite@wisc.edu'} text={"ntwhite@wisc.edu"} icon={<FontAwesomeIcon icon={faEnvelope} size='xl' style={{paddingRight: 4}}/>} />
          </Box>

          <Box padding={0.5}>
            <BasicButton url={'https://www.researchgate.net/profile/Nathan-White-18'} text={"ResearchGate"} icon={<FontAwesomeIcon icon={faResearchgate} size='xl' style={{paddingRight: 4}}/>} />
          </Box>

          <Box padding={0.5}>
            <BasicButton url={'https://scholar.google.com/citations?user=N0G84fwAAAAJ'} text={"Google Scholar"} icon={<FontAwesomeIcon icon={faGoogleScholar} size='xl' style={{paddingRight: 4}}/>} />
          </Box>
          
          <Box padding={0.5} paddingBottom={0}>
            <BasicButton url={'https://github.com/nwhite365'} text={"GitHub"} icon={<FontAwesomeIcon icon={faGithub} size='xl' style={{paddingRight: 4}}/>} />
          </Box>
        </CardContent>
      </Stack>
    </Card>
  );
}
