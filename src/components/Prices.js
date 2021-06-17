import React, { Component } from 'react';
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

var coins = ["BTC", "ETH", "XRP", "USDT", "BCH", "DOGE",
             "LTC", "ADA", "EOS", "BNB", "BSV", "XLM",
             "TRX", "LEO", "XMR", "LINK",
             "XTZ", "NEO", "HT", "MIOTA", "ATOM",
             "MKR", "DASH", "ETC", "USDC", "ONT"]

var symbolMap = {
 
    BTC: "Bitcoin",
    ETH: "Etherium",
    XRP: "XRP",
    USDT: "Tether",
    BCH: "Bitcoin Cash", 
    DOGE: "Dogecoin",
    LTC: "Litecoin",
    ADA: "Cardano",
    EOS: "EOS",
    BNB: "Binance Coin",
    BSV: "Bitcoin SV",
    XTZ: "Tezos",
    XLM: "Stellar",
    TRX: "TRON",
    XMR: "Monero",
    LEO: "UNUS SED LEO",
    ATOM: "Cosmos",
    LINK: "Chainlink",
    HT: "Huobi Token",
    NEO: "NEO",
    MIOTA: "IOTA",
    MKR: "Maker",
    DASH: "Dash",
    ETC: "Ethereum Classic",
    USDC: "USD Coin",
    ONT: "Ontology"

}

const baseURL = "https://min-api.cryptocompare.com/data/price"
const coinsList = coins.join(",")

class Prices extends Component {

    constructor(props) {
        super(props);
        this.state = {
            rows: false,
            items: [],
            currency: ""
        }
    }

    componentDidMount(props, state) {

        // eslint-disable-next-line
        var fetchString = baseURL + "?fsym=" + "CAD" + "&api_key=" + process.env.REACT_APP_API_KEY + "&tsyms=" + coinsList

        fetch(fetchString)
        .then(response => response.json())
        .then(items => this.setState({ items }))

    }

    componentDidUpdate(props, state) {

        if (props.currency !== this.state.currency) {

            var fetchString = baseURL + "?fsym=" + props.currency + "&api_key=" + process.env.REACT_APP_API_KEY + "&tsyms=" + coinsList

            fetch(fetchString)
            .then(response => response.json())
            .then(items => this.setState({ items }))

        }
    }

    render() {

        const { classes, /*currency*/ } = this.props;

        console.log(symbolMap.BTC)

        return (
            <div className={classes.tableContainer}>
                <Paper className={classes.root}>
                    <Table>
                        <TableHead>
                            <TableRow className={classes.tableRow}>
                                <TableCell>
                                    <p className={classes.tableTitle} /*style={{width: "35vh"}}*/ ><b>Currency</b></p>
                                </TableCell>
                                <TableCell>
                                    <p className={classes.tableTitle}><b>Code</b></p>
                                </TableCell>
                                <TableCell align="left">
                                    <p className={classes.tableTitle}><b>Price</b></p>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.items ? 
                                Object.keys(this.state.items).map((key, value) => 
                                    <TableRow key={key}>
                                        <TableCell className={classes.tableRow} /*style={{width: "35vh"}}*/ component="th" scope="row">
                                            {symbolMap[key]}
                                        </TableCell>
                                        <TableCell className={classes.tableRow} component="th" scope="row">
                                            {key}
                                        </TableCell>
                                        <TableCell className={classes.tableRow} component="th" scope="row">
                                            {(1 / this.state.items[key]).toFixed(2)}
                                        </TableCell>
                                    </TableRow>
                                )
                            : null }
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(Prices);