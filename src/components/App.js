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
import {/*BrowserView, MobileView,*/ isBrowser, /*isMobile*/} from "react-device-detect";
// import Background from '../images/background.jpg'
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
// import Flag from "react-flags";
import CA from 'react-flags/vendor/flags/flags-iso/flat/24/CA.png'
import US from 'react-flags/vendor/flags/flags-iso/flat/24/US.png'
import GB from 'react-flags/vendor/flags/flags-iso/flat/24/GB.png'

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
        paddingTop: 20
        // backgroundColor: "white",
        // opacity: 0.3
    },
    appBarLabel: {
        color: "white",
        paddingLeft: 12,
        fontSize: 15,
    }
});

class App extends Component {

    state = {
        displayContainer: "",
        currency: 10
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
    
    handleChange = event => {
        this.setState({ currency: event.target.value});
      };

    
    render() {
        const { classes, /*theme*/ } = this.props;
        // const {  } = this.state;

        

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={isBrowser ? 11 : 10} className={classes.appBar}>
                        <IconButton onClick={this.labelClicked.bind(this, "Home")} style={{paddingLeft: 15, marginTop: -14}} iconStyle={{iconHoverColor: 'red'}}>
                            <Home style={{color: "white"}}/>
                            <p className={classes.appBarLabel}>Home</p>
                        </IconButton>
                        <IconButton onClick={this.labelClicked.bind(this, "Prices")} style={{marginTop: -14, paddingLeft: 20}}>
                            <Timeline style={{color: "white"}}/> 
                            <p className={classes.appBarLabel}>Prices</p>
                        </IconButton>
                    </Grid>
                    <Grid item xs={1} className={classes.appBar}>
                        <Select
                            value={this.state.currency}
                            onChange={this.handleChange}
                            style={{backgroundColor: "transparent"}}
                            inputProps={{
                                name: 'age',
                                id: 'filled-age-simple',
                            }}
                            >
                            <MenuItem value={10}>
                                <img src={CA} alt={"CA"} /> 
                            </MenuItem>
                            <MenuItem value={20}>
                                <img src={US} alt={"US"} /> 
                            </MenuItem>
                            <MenuItem value={30}>
                                <img src={GB} alt={"GB"} />
                            </MenuItem>
                        </Select>
                    </Grid>
                        { isBrowser ? null : <Grid item xs={1} /> }
                    <Grid item xs={12} style={{height: '90vh'}} >
                        {(() => {
                            switch(this.state.displayContainer) {
                            case "Home":
                                return <div>Home</div>
                            case "Prices":
                                return <Prices />
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
