import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Store from '@material-ui/icons/Store'
import Markets from './Markets'
// import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import {/*BrowserView, MobileView,*/ isBrowser, /*isMobile*/} from "react-device-detect";

const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    },
    list: {
        width: 250,
      },
});

class App extends Component {

    state = {
        open: false,
        displayContainer: "",
        left: false,
    };
    
    handleDrawerOpen = () => {
        this.setState({ open: true });
    };
    
    handleDrawerClose = () => {
        this.setState({ open: false });
    };

    labelClicked (param, context) {
        console.log(param)
        this.setState({
            displayContainer: param
        })
    }
    
    render() {
        const { classes, theme } = this.props;
        const { open } = this.state;

        const toggleDrawer = (side, open) => event => {
            if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
              return;
            }
        
            this.setState({[side]: open });
          };

        const appList = (
            <div>
                <Divider />
                <List>
                    <ListItem button  onClick={this.labelClicked.bind(this, "Markets")}>
                        <ListItemIcon><Store /></ListItemIcon>
                        <ListItemText primary="Markets" />
                    </ListItem>
                </List>
            </div>
        );
    
        const sideList = side => (
            <div
              className={classes.list}
              role="presentation"
              onClick={toggleDrawer(side, false)}
              onKeyDown={toggleDrawer(side, false)}>
                  {appList}
            </div>
        )

        return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                style={{backgroundColor:'#2F2F2F'}}
                position="fixed"
                className={classNames(classes.appBar, {
                [classes.appBarShift]: open,})}>
                <Toolbar disableGutters={!open}>
                    <IconButton
                        color="inherit"
                        aria-label="Open drawer"
                        onClick={isBrowser || !isBrowser ? this.handleDrawerOpen : toggleDrawer('left', true)}
                        className={classNames(classes.menuButton, open && classes.hide)}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" noWrap>
                        Cryptos
                    </Typography>
                </Toolbar>
            </AppBar>
            
            {/* <SwipeableDrawer
                open={this.state.left}
                onClose={toggleDrawer('left', false)}
                onOpen={toggleDrawer('left', true)}>
                {sideList('left')}
            </SwipeableDrawer> */}

            {/* { isBrowser ? */}
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    anchor="left"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,}}>
                        <div className={classes.drawerHeader}>
                            {/* {this.state.displayContainer} */}
                            <IconButton onClick={this.handleDrawerClose}>
                                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                            </IconButton>
                        </div>
                    {appList}
                </Drawer>
            {/* : null} */}

            <main
            className={classNames(classes.content, {
                [classes.contentShift]: open,
            })}
            >
            <div className={classes.drawerHeader} />
            {(() => {
                switch(this.state.displayContainer) {
                    case "Markets":
                        return <Markets />
                    default:
                        return;
                }
            })()}
            </main>
        </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

// export default App;
export default withStyles(styles, { withTheme: true })(App);
