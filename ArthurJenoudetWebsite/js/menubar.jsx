import React from 'react';
// import PropTypes from 'prop-types';

export default class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    // componentDidMount() {
    //     fetch(this.props.url, {credentials : "same-origin"})
    //     .then((response) => {
    //         if (!response.ok) throw Error(response.statusText);
    //         return response.json();
    //     })
    //     .then((data) => {
    //         this.state = data;
    //     })
    //     .catch(error => console.log(error));
    // }
    
    // loopMenus() {
        
    // }

    render() {
        return (
            <div className="ui inverted menu">
                <a href="/" className="active item">Arthur Jenoudet</a>
                <a href="/#link1" className="item">link 1</a>
                <a href="/#link2" className="item">link 2</a>
            </div>
        );
    }
}

// MenuBar.propTypes = {
//     url: PropTypes.string.isRequired,
// };