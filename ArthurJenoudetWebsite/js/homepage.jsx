import React from 'react';
import PropTypes from 'prop-types';
import MenuBar from './menubar';

export default class HomePage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MenuBar url="/menulinks/" />
        );
    }
}
