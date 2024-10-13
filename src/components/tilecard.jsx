import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {
  Grid,
  Stack,
  CardMedia,
  Button,
  Dialog,
  DialogContent,
} from "@mui/material";
import { themeProps } from "../theme";
import { hexToRgbA } from "../utils";
import useWindowDimensions from "../useWindowDimensions";
import { ResponsiveHeader } from "./responsiveHeader";
import { ResponsiveContent } from "./responsiveContent";

export const TileCard = ({
  title,
  abstract,
  teaser,
  description,
  url,
  showcase,
  videos,
}) => {
  const [open, setOpen] = React.useState(false);
  
  let { _, width } = useWindowDimensions();

  const handleOpenClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  let cardHeight = width < 1400 ? (width < 780 ? "30vh" : "40vh") : "40vh";

  return (
    <div>
      <Button
        sx={{
          backgroundImage: `url(${teaser})`,
          filter: "grayscale(100%)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          "&:hover": {
            filter: "none",
          },
          width: "100%"
        }}
        onClick={handleOpenClick}
      >
        <Card
          sx={{
            backgroundColor: "rgba(0, 0, 0, 0.0)",
            boxShadow: "none",
            height: cardHeight,
          }}
        >
          <CardContent sx={{ height: "100%" }}>
            <Grid
              display="flex"
              justifyContent="center"
              alignItems="center"
              container
              sx={{ height: "100%" }}
            >
              <Grid
                item
                justifyContent="center"
                alignItems="center"
                xs={12}
                sm={12}
                md={12}
                lg={12}
                sx={{
                  padding: 2,
                  backgroundColor: hexToRgbA(themeProps.secondaryColor, 0.7),
                  borderRadius: 1,
                  boxShadow:
                    "0px 2px 1px -1px rgba(0,0,0,0.2),0px 1px 1px 0px rgba(0,0,0,0.14),0px 1px 3px 0px rgba(0,0,0,0.12)",
                }}
              >
                <ResponsiveHeader>{title}</ResponsiveHeader>
                <ResponsiveContent>{abstract}</ResponsiveContent>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Button>
      <Dialog
        open={open}
        onClose={(_, reason) => {
          handleClose();
        }}
      >
        <DialogContent sx={{ backgroundColor: themeProps.secondaryColor }}>
          <Grid
            display="flex"
            justifyContent="center"
            alignItems="center"
            container
            spacing={2}
            paddingBottom={url ? 2 : 1}
          >
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              lg={videos && videos.length > 0 ? 12 : 12}
            >
              <Stack>
                <ResponsiveHeader useHighlight={true}>{title}</ResponsiveHeader>
                <Typography
                  textAlign={"left"}
                  variant="body2"
                  color={themeProps.textColor}
                >
                  <strong style={{ color: themeProps.boldTextColor }}>About: </strong>
                  {description}
                </Typography>
              </Stack>
            </Grid>
            {showcase && (
              <Grid item xs={12} sm={12} md={12} lg={12}>
                <CardMedia
                  sx={{ minHeight: "300px" }}
                  component={"iframe"}
                  src={showcase.link}
                  title={showcase.title}
                  allow={
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
                  }
                />
              </Grid>
            )}
          </Grid>
          {url && (
            <Button
              href={url}
              target="_blank"
              sx={{
                color: themeProps.primaryColor,
                backgroundColor: "grey",
                ":hover": { backgroundColor: themeProps.highlightColor },
              }}
            >
              See the project
            </Button>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};
