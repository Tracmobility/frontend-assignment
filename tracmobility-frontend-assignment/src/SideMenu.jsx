import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const SideMenu = () => {
  const drawerWidth = 300;

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    appBar: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
      backgroundColor: "white",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
      backgroundColor: "#03989E",
    },
    listItemText: {
      color: "white",
      paddingLeft:"50px"
    },
    divider: {
      backgroundColor: "white",
    },
    headerOfDrawer: {
      color: "white",
      textAlign: "center",
      fontSize: "30px",
      fontWeight: "bold"
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }));

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <h1 className={classes.headerOfDrawer}>TRACMOBILITY</h1>
        <Divider className={classes.divider} />
        <List>
          {["Task Map", "Task List", "Task Creation"].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} className={classes.listItemText} />
            </ListItem>
          ))}
        </List>
        <Divider className={classes.divider} />
        <List>
          {["Vehicle Map", "Vehicle List", "Vehicle Search"].map((text) => (
            <ListItem button key={text}>
              <ListItemText primary={text} className={classes.listItemText} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default SideMenu;
