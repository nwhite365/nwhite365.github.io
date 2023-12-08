import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Grid, Stack, CardMedia } from '@mui/material';
import { BasicButton } from './basicbutton';

export const ProjectCard = ({title, description, url, showcase, videos}) => {
  return (    
    <Card sx={{minWidth: 275, boxShadow: 3}}>
      <CardContent>
        <Grid display="flex" justifyContent="center" alignItems="center" container spacing={2} paddingBottom={url ? 2 : 1}>
          <Grid item xs={12} sm={12} md={12} lg={videos && videos.length > 0 ? 12 : 12}>
              <Stack>
                <Typography color="text.secondary" variant='h4' gutterBottom>
                  {title}
                </Typography>
                <Typography textAlign={"left"} variant="body2">
                  <strong>About: </strong>{description}
                </Typography>
              </Stack>
          </Grid>
          {showcase && <Grid item xs={12} sm={12} md={12} lg={12}>
            <CardMedia
            sx={{minHeight: "300px"}}
            component={"iframe"}
            src={showcase.link}
            title={showcase.title}
            allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"}
          />
          </Grid>}
          {/* {videos && videos.length > 0 && <Grid item xs={12} sm={12} md={12} lg={6}>
            {videos.map(video => {
              return <CardMedia
                        sx={{minHeight: "200px"}}
                        component={"iframe"}
                        src={video.link}
                        title={video.title}
                        allow={"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"}
                        />
              // return <iframe style={{minWidth: 137, height: "100%"}} key={video.title} src={video.link} title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"></iframe>  
            })} */}
          {/* </Grid>} */}
        </Grid>
        {url && <BasicButton url={url} text={"See the project"} />}
      </CardContent>
    </Card>
  );
}
