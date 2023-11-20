import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import { Avatar, Stack } from "@mui/material";
import { MENU_ITEMS, LOGO_URL } from "../../constants/appConstants";
import { useMediaQuery } from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import AppBar from "@mui/material/AppBar";

import Toolbar from "@mui/material/Toolbar";

function Header(props) {
  const isSmallScreen = useMediaQuery("(max-width:899px)");
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen(open);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="sticky"
        sx={{ top: 0, bottom: "auto", backgroundColor: "#131313" }}
      >
        <Toolbar>
          <Stack width={"100%"} direction={"row"} justifyContent={"center"}>
            <Stack
              width={"100%"}
              maxWidth={"70%"}
              direction={"row"}
              spacing={4}
              m={2}
              px={2}
            >
              <Stack
                alignItems={"flex-start"}
                justifyContent={"center"}
                sx={{ width: isSmallScreen ? "80%" : "20%" }}
              >
                <Link href="#" underline="none">
                  <Avatar
                    variant="square"
                    src={LOGO_URL}
                    sx={{
                      width: "70%",
                      height: "auto",
                      maxWidth: "70%",
                      maxHeight: "auto",
                    }}
                  ></Avatar>
                </Link>
              </Stack>
              <Stack
                alignItems={isSmallScreen ? "flex-end" : "center"}
                justifyContent={"center"}
                sx={{ width: "80%" }}
              >
                {isSmallScreen ? (
                  <React.Fragment>
                    <IconButton
                      size="large"
                      color="primary"
                      aria-label="menu"
                      onClick={toggleDrawer(true)}
                    >
                      <MenuRoundedIcon
                        fontSize="large"
                        sx={{ color: "#FFF" }}
                      />
                    </IconButton>
                    <Drawer
                      anchor="right"
                      open={isDrawerOpen}
                      onClose={toggleDrawer(false)}
                    >
                      <Box
                        sx={{ width: 250 }}
                        role="presentation"
                        onClick={toggleDrawer(false)}
                        onKeyDown={toggleDrawer(false)}
                      >
                        <List>
                          {MENU_ITEMS.map((item) => (
                            <ListItem button key={item.name}>
                              <Link
                                href={item.url}
                                color={"black"}
                                underline="none"
                                textTransform={"uppercase"}
                                fontFamily={"Open Sans"}
                              >
                                <ListItemText primary={item.name} />
                              </Link>
                            </ListItem>
                          ))}
                        </List>
                      </Box>
                    </Drawer>
                  </React.Fragment>
                ) : (
                  <Stack direction={"row"} spacing={4}>
                    {MENU_ITEMS.map((item) => {
                      return (
                        <Link
                          href={item.url}
                          color={"white"}
                          underline="none"
                          textTransform={"uppercase"}
                          fontFamily={"Open Sans"}
                        >
                          {item.name}
                        </Link>
                      );
                    })}
                  </Stack>
                )}
              </Stack>
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Header;
