import "./App.css";
import { BasicCard } from "./components/basiccard";
import {
  Box,
  Stack,
  Typography,
  ImageList,
  ImageListItem,
  Divider,
} from "@mui/material";
// import { Router } from 'react-router-dom';
import { styled } from "@mui/system";
import { Element } from "react-scroll";
import { CV } from "./components/cv";
import { PubCard } from "./components/pubcard";

import { AboutPage } from "./pages/about";
import { ThemeProvider, useTheme } from "@emotion/react";
import { publicationJsons } from "./Constants";
import { Footer } from "./components/footer";
import useWindowDimensions from "./useWindowDimensions";
import { MyTheme, themeProps } from "./theme";
import { ProjectPage } from "./pages/projects";
import { PublicationPage } from "./pages/publications";
import { CVPage } from "./pages/cv";

const Item = styled("div")(({ theme }) => ({
  // backgroundColor: theme.palette.mode === 'dark' ? '#262B32' : '#fff',
  padding: theme.spacing(1),
  textAlign: "center",
  borderRadius: 4,
}));

export default function App() {
  const theme = useTheme();

  let { _, width } = useWindowDimensions();

  return (
    <div style={{ backgroundColor: themeProps.primaryColor }}>
      
    <ThemeProvider theme={MyTheme()}>
      <Element name="about">
        <AboutPage />
      </Element>

      <Divider sx={{ paddingTop: 1, marginBottom: 1, borderColor: "grey", borderBottomWidth: 3}} />

      <Element name="projects">
        <Box
          width={"100%"}
          minHeight="100vh"
        >
            <ProjectPage />
        </Box>
      </Element>

      <Divider sx={{ paddingTop: 1, marginBottom: 1, borderColor: "grey", borderBottomWidth: 3}} />

      <Element name="publications">
        <Box
          paddingBottom={3}
          width={"100%"}
          minHeight="100vh"
        >
          <PublicationPage />
        </Box>
      </Element>

      <Divider sx={{ paddingTop: 1, marginBottom: 1, borderColor: "grey", borderBottomWidth: 3}} />

      <Element name="cv">
        <Box
          paddingBottom={3}
          width={"100%"}
          minHeight="100vh"
        >
          <CVPage />
        </Box>
      </Element>

      <footer>
        <Footer />
      </footer>
      </ThemeProvider>
    </div>
  );
}
