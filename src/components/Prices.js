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
        // display: "flex",
        backgroundColor: "transparent",
        maxHeight: 100
    },
    tableRow: {
        // backgroundColor: "transparent"
        color: "white"
    },
    tableTitle: {
        color: "white",
        marginTop: 1,
        marginBottom: 1,
        fontSize: 16
    },
    table: {
        // marginTop: "20px",
        // marginBottom: "20px",
        // marginLeft: "20px",
        // marginRight: "20px",
        maxHeight: 100
    }
});

class Markets extends Component {

    state = {
        rows: false
    };

    componentDidMount(){
        this.setState({
            rows: [
                {currency: "1",price: "2"},
                {currency: "1",price: "2"},
                {currency: "1",price: "2"},
                {currency: "1",price: "2"},
                {currency: "1",price: "2"},
                {currency: "1",price: "2"},
                {currency: "1",price: "2"},
                {currency: "1",price: "2"},
                // {currency: "1",price: "2"},
                // {currency: "1",price: "2"},
                // {currency: "1",price: "2"},
                // {currency: "1",price: "2"},
                // {currency: "1",price: "2"},
                // {currency: "1",price: "2"},
                // {currency: "1",price: "2"},
                // {currency: "1",price: "2"},
                // {currency: "1",price: "2"},
                // {currency: "1",price: "2"},
            ]
        })
    }

    render() {

        const { classes, theme } = this.props;
        // const { rows } = this.state;

        return (
            <div>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow className={classes.tableRow}>
                                <TableCell>
                                    <p className={classes.tableTitle}><b>Currency</b></p>
                                </TableCell>
                                <TableCell align="left">
                                    <p className={classes.tableTitle}><b>Price</b></p>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.rows ? this.state.rows.map(row => (
                                <TableRow key={row.currency}>
                                    <TableCell className={classes.tableRow} component="th" scope="row">
                                        {row.currency}
                                    </TableCell>
                                    <TableCell className={classes.tableRow} align="left">{row.price}</TableCell>
                                </TableRow>
                            )) : null}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }

}

export default withStyles(styles, { withTheme: true })(Markets);