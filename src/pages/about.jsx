import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import profile from "../static/images/nate-profile.jpg";
import { Divider, Grid, Stack } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faGoogleScholar,
  faResearchgate,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { BasicButton } from "../components/basicbutton";
import { ThemeProvider } from "@emotion/react";
import { MyTheme, themeProps } from "../theme";

export const AboutPage = () => {
  return (
    <ThemeProvider theme={MyTheme()}>
      <Grid
        display="flex"
        justifyContent="center"
        alignItems="center"
        container
        spacing={2}
      >
        <Grid item xs={12} sm={12} md={6} lg={6} sx={{ overflow: "hidden" }}>
          <img
            src={profile}
            style={{
              maxHeight: "100vh",
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
          <Stack sx={{ paddingLeft: "20%", paddingRight: "20%" }}>
            <Typography
              component="div"
              variant="h4"
              sx={{ color: themeProps.highlightColor }}
            >
              Nathan Thomas White
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ color: themeProps.textColor }}
            >
              Phd Candidate
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{ color: themeProps.textColor }}
            >
              University of Wisconsin - Madison
            </Typography>
            <Typography
              variant="h6"
              component="div"
              sx={{ color: themeProps.highlightColor, opacity: 1.0 }}
            >
              Graduating Spring 2025
            </Typography>

            <Divider
              sx={{
                paddingTop: 1,
                marginBottom: 1,
                borderColor: themeProps.secondaryColor,
              }}
            />

            <Typography sx={{ color: themeProps.textColor }}>
              I am a fifth year PhD student, studying Human-Robot Interaction as
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
              </a>
              I completed my MS degree in Computer Science at the University of
              Wisconsin - Madison, and my BS degree in Computer Science at the
              University of Minnesota - Twin Cities.
            </Typography>

            <Divider
              sx={{
                paddingTop: 1,
                marginBottom: 1,
                borderColor: themeProps.secondaryColor,
              }}
            />

            <Typography sx={{ color: themeProps.textColor }}>
              I am interested in{" "}
              <strong style={{ color: themeProps.boldTextColor }}>
                human-robot interaction
              </strong>{" "}
              and designing interactions and systems that simplify complexity
              and enable more users to utilize and interact with robots. My
              research focuses on methods for{" "}
              <strong style={{ color: themeProps.boldTextColor }}>
                supporting user interaction
              </strong>{" "}
              with collaborative robots, helping them to create and execute
              programs and plans for collaboration. The systems I build are
              designed to support user knowledge and decision making as users
              determine how to create collaborative interactions between cobots
              and operators, while ensuring the collaborations are safe and
              effective.
            </Typography>

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
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};
