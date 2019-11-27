import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
// import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        display: "flex",
        backgroundColor: "transparent",
    },
    tableRow: {
        // backgroundColor: "transparent"
        color: "white"
    },
    tableContainer: {
        maxHeight: "80vh", 
        overflow: "scroll",
        margin: 25
    },
    tableTitle: {
        color: "white",
        marginTop: 1,
        marginBottom: 1,
        fontSize: 16
    },
    table: {
        marginLeft: "25px",
        width: "96%",
        maxHeight: "10px"
    }
});

var coins = ["LTC"]

class Prices extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: false,
            items: []
        }
    }

    componentDidMount(props, state){

        var fetchString = "https://rest.coinapi.io/v1/exchangerate/CAD?apikey=" + process.env.REACT_APP_API_KEY
            fetch(fetchString)
            .then(response => response.json())
            .then(items => this.setState({ items }))

        // this.setState({
        //     rows: [
        //         {currency: "1",price: "2"},
        //         {currency: "1",price: "2"},
        //         {currency: "1",price: "2"},
        //         {currency: "1",price: "2"},
        //         {currency: "1",price: "2"},
        //         {currency: "1",price: "2"},
        //         {currency: "1",price: "2"},
        //         {currency: "1",price: "2"},
        //         {currency: "1",price: "2"},
        //         {currency: "1",price: "2"},
        //         {currency: "1",price: "2"},
        //         {currency: "1",price: "2"},
        //         {currency: "1",price: "2"},
        //         {currency: "1",price: "2"},
        //         {currency: "1",price: "2"},
        //         {currency: "1",price: "2"},
        //         {currency: "1",price: "2"},
        //         {currency: "1",price: "2"},
        //     ]
        // })
    }

    componentDidUpdate(props, state) {

    }

    render() {

        const { classes, /*theme*/ } = this.props;

        var temp = this.state

        return (
            <div className={classes.tableContainer}>
                <Paper className={classes.root}>
                    <Table>
                        <TableHead>
                            <TableRow className={classes.tableRow}>
                                <TableCell>
                                    <p className={classes.tableTitle} /*style={{width: "35vh"}}*/ ><b>Currency</b></p>
                                </TableCell>
                                <TableCell align="left">
                                    <p className={classes.tableTitle}><b>Price</b></p>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                           

                            {this.state.items.rates ? 
                                this.state.items.rates.map(row => {
                                    return coins.includes(row.asset_id_quote) ?
                                        <TableRow key={row.currency}>
                                            <TableCell className={classes.tableRow} /*style={{width: "35vh"}}*/ component="th" scope="row">
                                                {row.asset_id_quote}
                                            </TableCell>
                                            <TableCell className={classes.tableRow} align="left">{1 / row.rate}</TableCell>
                                        </TableRow>
                                    : null
                                })  
                            : null }
                               


                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }

}

export default withStyles(styles, { withTheme: true })(Prices);