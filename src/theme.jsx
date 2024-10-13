import { createTheme } from "@mui/material";

export const themeProps = {
  // primaryColor: "#222831",
  // secondaryColor: "#393E46",
  // textColor: "#EEEEEE",
  // boldTextColor: "#FFFFFF",
  // highlightColor: "#00ADB5",
  primaryColor: "#EEEEEE",
  secondaryColor: "#E8E8E8",
  textColor: "#222831",
  boldTextColor: "#000000",
  highlightColor: "#00ADB5",
  typography: {
    fontFamily: ["Source Serif 4"],
  },
}

export const MyTheme = () => {
  const myTheme = createTheme(
    themeProps
  );

  return myTheme;
};
