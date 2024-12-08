import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import profile from "../static/images/nate-profile.jpg";
import { Divider, Grid, Stack } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGoogleScholar,
  faLinkedin,
  faResearchgate,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { BasicButton } from "../components/basicbutton";
import { ThemeProvider } from "@emotion/react";
import { MyTheme, themeProps } from "../theme";
import useWindowDimensions from "../useWindowDimensions";
import { ResponsiveHeader } from "../components/responsiveHeader";
import { ResponsiveSubHeader } from "../components/responsiveSubHeader";
import { ResponsiveContent } from "../components/responsiveContent";
import { Link } from "react-scroll";

export const AboutPage = () => {
  let { _, width } = useWindowDimensions();

  return (
    <ThemeProvider theme={MyTheme()}>
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        container
        spacing={2}
      >
        <Grid item xs={12} sm={12} md={6} lg={6} sx={{ overflow: "hidden", maxHeight: width < 900 ? "50vh" : "100vh" }}>
          <img
            src={profile}
            style={{
              maxHeight: width < 900 ? "75vh" : "100vh",
              marginLeft: "50%",
              transform: `translateX(-50%)`,
            }}
          />
          {/* <CardMedia
          component="img"
          sx={{ width: "100%", display: "flex", flex: "1", opacity: 0.8}}
          image={profile}
          alt="Nathan Thomas White"
        /> */}
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Stack sx={{ paddingLeft: {xs: "5%", sm: "15%", md: "10%", lg: "10%", xl: "15%"}, paddingRight: {xs: "5%", sm: "15%", md: "10%", lg: "10%", xl: "15%"} }}>
            <ResponsiveHeader useHighlight={true}>Nathan Thomas White</ResponsiveHeader>
            {/* <Typography
              component="div"
              variant="h4"
              sx={{ color: themeProps.highlightColor }}
            >
              
            </Typography> */}
            <ResponsiveSubHeader>PhD Candidate</ResponsiveSubHeader>
            {/* <Typography
              variant="h5"
              component="div"
              sx={{ color: themeProps.textColor }}
            >
              Phd Candidate
            </Typography> */}
            <ResponsiveSubHeader>University of Wisconsin - Madison</ResponsiveSubHeader>
            {/* <Typography
              variant="h5"
              component="div"
              sx={{ color: themeProps.textColor }}
            >
              University of Wisconsin - Madison
            </Typography> */}
            <ResponsiveSubHeader useHighlight={true}>Graduating Spring 2025</ResponsiveSubHeader>
            {/* <Typography
              variant="h6"
              component="div"
              sx={{ color: themeProps.highlightColor, opacity: 1.0 }}
            >
              Graduating Spring 2025
            </Typography> */}

            <Divider
              sx={{
                paddingTop: 1,
                marginBottom: 1,
                borderColor: themeProps.secondaryColor,
              }}
            />

            <ResponsiveContent>
              I am a sixth year PhD student, studying Human-Robot Interaction as
              part of the{" "}
              <a
                href="https://peopleandrobots.wisc.edu/"
                target="_blank"
                style={{ color: themeProps.highlightColor }}
              >
                People and Robots Lab
              </a>{" "}
              at the University of Wisconsin - Madison. My advisor is{" "}
              <a
                href="http://bilgemutlu.com/"
                target="_blank"
                style={{ color: themeProps.highlightColor }}
              >
                Dr. Bilge Mutlu.
              </a>{" "}
              I completed my MS degree in Computer Science at the University of
              Wisconsin - Madison, and my BS degree in Computer Science at the
              University of Minnesota - Twin Cities.
            </ResponsiveContent>

            <Divider
              sx={{
                paddingTop: 1,
                marginBottom: 1,
                borderColor: themeProps.secondaryColor,
              }}
            />

            <ResponsiveContent>
              Technology is human-centered, and thus needs to be usable by people. I am passionate about designing systems and technologies that are <strong style={{ color: themeProps.boldTextColor }}>accessible</strong> and <strong style={{ color: themeProps.boldTextColor }}>intuitive</strong> for a wide range of potential users. My work reflects this commitment, as I have built systems and designed interactions that aim to bridge the gap between technical complexity and user accessibility. While my work has focused on human-robot interaction, I have incorporated elements from human-computer interaction, design, and human-behavior literature to create interfaces and interactions that simplify complex tasks, enabling users to engage with advanced technologies more effectively. By building systems that bridge the gap between technical complexity and user accessibility, I aim to make advanced technologies seamlessly integrate into people's daily lives across various domains.
            </ResponsiveContent>

            <Divider
              sx={{
                paddingTop: 1,
                marginBottom: 1,
                borderColor: themeProps.secondaryColor,
              }}
            />

            <Stack
              direction="row"
              spacing={{ xs: 1, sm: 2, md: 2, lg: 2 }}
              useFlexGap
              sx={{ flexWrap: "wrap" }}
            >
            <Box padding={0.5}>
              <BasicButton
                url={"mailto:ntwhite@wisc.edu"}
                icon={<FontAwesomeIcon icon={faEnvelope} size="xl" />}
              />
            </Box>
              <Box padding={0.5}>
                <BasicButton
                  url={"https://www.linkedin.com/in/white-nathan-t/"}
                  icon={<FontAwesomeIcon icon={faLinkedin} size="xl" />}
                />
              </Box>
              <Box padding={0.5}>
                <BasicButton
                  url={"https://www.researchgate.net/profile/Nathan-White-18"}
                  icon={<FontAwesomeIcon icon={faResearchgate} size="xl" />}
                />
              </Box>
              <Box padding={0.5}>
                <BasicButton
                  url={"https://scholar.google.com/citations?user=N0G84fwAAAAJ"}
                  icon={<FontAwesomeIcon icon={faGoogleScholar} size="xl" />}
                />
              </Box>
              <Box padding={0.5} paddingBottom={0}>
                <BasicButton
                  url={"https://github.com/nwhite365"}
                  icon={<FontAwesomeIcon icon={faGithub} size="xl" />}
                />
              </Box>
              <Box padding={0.5} paddingBottom={0}>
                
                <Link to={"cv"} spy={true} smooth={true} duration={500}>
                  <BasicButton
                    text={<strong>CV</strong>}
                  />
                </Link>
              </Box>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
