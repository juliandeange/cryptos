import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import { Timeline, Home } from '@material-ui/icons';
import Prices from './Prices'
import {/*BrowserView, MobileView, isMovile*/ isBrowser} from "react-device-detect";
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import CA from 'react-flags/vendor/flags/flags-iso/flat/24/CA.png'
import US from 'react-flags/vendor/flags/flags-iso/flat/24/US.png'
import GB from 'react-flags/vendor/flags/flags-iso/flat/24/GB.png'
import EU from 'react-flags/vendor/flags/flags-iso/flat/24/EU.png'

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

    constructor(props) {
        super(props);
        this.state = {
            displayContainer: "",
            currency: "CAD",
            error: null,
            isLoaded: false,
            items: []
        }
    }
    
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
        // console.log(process.env.REACT_APP_API_KEY)
    };

    componentDidUpdate(props, state) {

        // if (state.items.rates === undefined) {
        //     var fetchString = "https://rest.coinapi.io/v1/exchangerate/CAD?apikey=" + process.env.REACT_APP_API_KEY
        //     fetch(fetchString)
        //         .then(response => response.json())
        //         .then(items => this.setState({ items }))
        // }

    }

    componentDidMount(props) {

        
    }

    render() {
        const { classes, /*theme*/ } = this.props;
        // const {  } = this.state;

        return (
            <div className={classes.root}>
                <Grid container>
                    <Grid item xs={isBrowser ? 11 : 10} className={classes.appBar}>
                        <IconButton onClick={this.labelClicked.bind(this, "Home")} style={{paddingLeft: 30, marginTop: -14}} iconStyle={{iconHoverColor: 'red'}}>
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
                            style={{backgroundColor: "transparent"}}>
                            <MenuItem value={"CAD"}>
                                <img src={CA} alt={"CA"} /> 
                            </MenuItem>
                            <MenuItem value={"USD"}>
                                <img src={US} alt={"US"} /> 
                            </MenuItem>
                            <MenuItem value={"GBP"}>
                                <img src={GB} alt={"GB"} />
                            </MenuItem>
                            <MenuItem value={"EUR"}>
                                <img src={EU} alt={"EU"} />
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
