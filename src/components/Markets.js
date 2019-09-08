import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
    root: {
        display: 'flex',
    }
});

class Markets extends Component {

    render() {
        return (
            <div>
                MARKETS
            </div>
        )
    }

}

export default withStyles(styles, { withTheme: true })(Markets);