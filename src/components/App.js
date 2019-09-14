import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemIcon from '@material-ui/core/ListItemIcon';
// import ListItemText from '@material-ui/core/ListItemText';
import { Timeline, Home } from '@material-ui/icons';
import Prices from './Prices'
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
        backgroundColor:'transparent',
        // backgroundColor: "white",
        // opacity: 0.3
    },
});

class App extends Component {

    state = {
        displayContainer: "",
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
        const {  } = this.state;

        return (
            
        <div className={classes.root}>
            
            <Grid container>
                <Grid item xs={12} className={classes.appBar}>
                    <IconButton onClick={this.labelClicked.bind(this, "Home")} style={{marginLeft: 15, }} iconStyle={{iconHoverColor: 'red'}}>
                        <Home style={{color: "white"}}/>
                        <p style={{fontSize: 15, color: "white", marginLeft: 12}}>Home</p>
                    </IconButton>
                    <IconButton onClick={this.labelClicked.bind(this, "Prices")}>
                        <Timeline style={{color: "white"}}/> 
                        <p style={{fontSize: 15, color: "white", marginLeft: 12}}>Prices</p>
                    </IconButton>
                </Grid>
                <Grid item xs={12} style={{height: '90%'}}>
                    {(() => {
                        switch(this.state.displayContainer) {
                        case "Home":
                            return <div>Home</div>
                        case "Prices":
                            return <div><Prices /></div>
                        default:
                            return;
                        }
                    })()}  
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
