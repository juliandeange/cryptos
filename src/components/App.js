import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
// import { Store, Home } from '@material-ui/icons';
// import Markets from './Markets'
// import {/*BrowserView, MobileView,*/ isBrowser, /*isMobile*/} from "react-device-detect";
// import Background from '../images/background.jpg'
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
    root: {
        display: 'flex',
        height: "100vh", 
        width: "100%",
        backgroundPosition: 'center',
        backgroundSize: 'cover', 
        backgroundRepeat: 'no-repeat', 
        backgroundImage: 'url(' + require('../images/background.jpg') + ')'
    },
    appBar: {
        height: "10%",
        // backgroundColor:'#2F2F2F',
        backgroundColor: "white",
        // opacity: 0.2
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
        const { classes, /*theme*/ } = this.props;
        // const { /*open*/ } = this.state;

        return (
            
        <div className={classes.root}>
            
            <Grid container spacing={3}>
                <Grid item xs={12} className={classes.appBar}>
                    {/* <IconButton>
                        <Store />
                    </IconButton>
                    <IconButton>
                        <Home />
                    </IconButton> */}
                </Grid>
            </Grid>


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
