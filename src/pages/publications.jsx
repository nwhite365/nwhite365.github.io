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

export const PublicationPage = () => {
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
          Publications
        </Typography>
        <ImageList
          cols={width < 1400 ? (width < 720 ? 1 : 2) : 3}
          style={{ paddingTop: 5, paddingBottom: 5 }}
        >
          {publicationJsons.map((project) => {
            return (
              <ImageListItem key={project.title}>
                <PubCard {...project} />
              </ImageListItem>
            );
          })}
        </ImageList>
      </Box>
    </ThemeProvider>
  );
};
