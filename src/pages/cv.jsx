import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Divider, ImageList, ImageListItem } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { MyTheme, themeProps } from "../theme";
import { allProjects, publicationJsons } from "../Constants";
import useWindowDimensions from "../useWindowDimensions";
import { TileCard } from "../components/tilecard";
import { PubCard } from "../components/pubcard";
import { CV } from "../components/cv";

export const CVPage = () => {
  let { _, width } = useWindowDimensions();

  return (
    <ThemeProvider theme={MyTheme()}>
      <Box
        sx={{
          paddingLeft: "12%",
          paddingRight: "12%",
        }}
      >
        <Divider
          sx={{
            paddingTop: 1,
            marginBottom: 1,
            borderColor: "grey",
            borderBottomWidth: 1,
          }}
        />
        <Typography
          variant="h5"
          color={themeProps.highlightColor}
          style={{ paddingLeft: "20px" }}
        >
          CV
        </Typography>
        <Typography style={{ paddingTop: "5px" }}>
          Below you'll find a copy of my CV. You can also download a PDF copy{" "}
          <a
            href="https://drive.google.com/file/d/1jhV0qTfqBjlc6qCDj7Q1YFF9z5vNsT3t/view"
            target="_blank"
            style={{ color: themeProps.highlightColor }}
          >
            here
          </a>
        </Typography>

        <CV />
      </Box>
    </ThemeProvider>
  );
};
