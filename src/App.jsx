import './App.css';
import { BasicCard } from './components/basiccard';
import { Navbar } from './components/navbar';
import { ProfileCard } from './components/profilecard';
import { Box, Grid, Link, Stack, Typography} from '@mui/material';
// import { Router } from 'react-router-dom';
import { styled } from '@mui/system';
import { AboutMe } from './components/aboutme';
import { Element } from 'react-scroll';
import { CV } from './components/cv';
import { ResearchInterests } from './components/researchinterests';
import { PubCard } from './components/pubcard';

// Background images
import pepper from './static/images/pepper_flower.png';
import misty from './static/images/misty_table.png';
import coframeImage from './static/images/coframe.jpg';
import robotImage from './static/images/robolution.jpg';



import { ProjectCard } from './components/projectcard';
import { useTheme } from '@emotion/react';
import { ongoingProjects, pastProjects, publicationJsons } from './Constants';
import { FadeDiv } from './components/fadediv';
import { Footer } from './components/footer';

const Item = styled('div')(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#262B32' : '#fff',
  padding: theme.spacing(1),
  textAlign: 'center',
  borderRadius: 4,
}));

export default function App() {
  const theme = useTheme();
  return (
    <div>
      <header style={{position: "sticky", top: 0, zIndex: 1 }}>
          <Navbar />
      </header>

      <Element name="about" style={{backgroundImage: `url(${misty})`, 
                                    backgroundRepeat: 'no-repeat', 
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    height: '100%'}}>
        <FadeDiv fadeTop={false}>
          <Box paddingTop={10} paddingBottom={10} display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
              <Grid sx={{width: 5/8}} display="flex" justifyContent="center" alignItems="center" container spacing={2}>
                <Grid item xs={12} sm={12} md={8} lg={4}>
                  <ProfileCard/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={8}>
                  <Stack textAlign={"center"}>
                    <div style={{paddingBottom: 8}}>
                      <BasicCard header={"About Me"} body={<AboutMe />}/>
                    </div>
                    <BasicCard header={"Research Interests"} body={<ResearchInterests />}/>
                  </Stack>
                </Grid>
              </Grid>
          </Box>
        </FadeDiv>
      </Element>

      <Element name="projects" style={{backgroundImage: `url(${coframeImage})`, 
                                    backgroundRepeat: 'no-repeat', 
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    height: '100%'}}>
        <FadeDiv>
          <Box paddingTop={10} paddingBottom={10} display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Stack sx={{width: 3/4}}>
              <Item>
                  <BasicCard header={"Projects"} body={"Below you can find a list of my ongoing and past projects."}/>
              </Item>
              <Item>
                <Box style={{backgroundColor: "#fff", borderRadius: 5}} padding={2}>
                  <Typography variant='h5' paddingBottom={2} color="text.secondary">
                    Ongoing Projects
                  </Typography>
                  <Grid textAlign={"center"} display="flex" justifyContent="center" alignItems="center" container spacing={2}>
                    {ongoingProjects.map((project) => {
                      return (<Grid key={project.title} item xs={12} sm={12} md={12} lg={6}>
                        <ProjectCard {...project}/>
                    </Grid>)
                    })}
                  </Grid>
                </Box>
              </Item>
              <Item>
                <Box style={{backgroundColor: "#fff", borderRadius: 5}} padding={2}>
                  <Typography variant='h5' paddingBottom={2} color="text.secondary">
                    Past Projects
                  </Typography>
                  <Grid textAlign={"center"} display="flex" justifyContent="center" alignItems="center" container spacing={2}>
                    {pastProjects.map((project) => {
                      return (<Grid key={project.title} item xs={12} sm={12} md={12} lg={6}>
                        <ProjectCard {...project}/>
                    </Grid>)
                    })}
                  </Grid>
                </Box>
              </Item>
            </Stack>
          </Box>
        </FadeDiv>
      </Element>
      
      <Element name="publications" style={{backgroundImage: `url(${pepper})`, 
                                    backgroundRepeat: 'no-repeat', 
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    height: '100%'}}>
        <FadeDiv>
          <Box paddingTop={3} paddingBottom={3} display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Stack sx={{width: 3/4}}>
              <Item>
                  <BasicCard header={"Publications"} body={"Below is a list of my recent publications"}/>
              </Item>
              <Item>
                <Grid container spacing={2}>
                  {publicationJsons.map((publication) => {
                    return (<Grid key={publication.title} item xs={12} sm={12} md={12} lg={6}>
                      <PubCard {...publication} />
                    </Grid>)
                  })}
                </Grid>
              </Item>
            </Stack>
          </Box>
        </FadeDiv>
      </Element>

      
      <Element name="cv" style={{backgroundImage: `url(${robotImage})`, 
                                    backgroundRepeat: 'no-repeat', 
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    height: '100%'}}>
        <FadeDiv fadeBottom={false}>
          <Box paddingTop={3} paddingBottom={3} display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
            <Stack sx={{width:"50%"}}>
              <Item>
                <BasicCard header={"CV"} body={
                  <Typography>
                    Below you'll find a copy of my CV. You can also download a PDF copy <a href='https://drive.google.com/file/d/1jhV0qTfqBjlc6qCDj7Q1YFF9z5vNsT3t/view' target='_blank'>here</a>
                  </Typography>
                }/>
              </Item>
              <Item>
                <CV />
              </Item>
            </Stack>
          </Box>
        </FadeDiv>
      </Element>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
