import React from 'react';
import PropTypes from 'prop-types';

export default class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {links : []};
    }

    componentDidMount() {
        fetch(this.props.url, {credentials : "same-origin"})
        .then((response) => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        })
        .then((data) => {
            this.setState({
                links : data["links"],
            }); 
        })
        .catch(error => console.log(error));
    }
    
    loopMenus() {
        let menu_items = [];
        let num = 0;
        this.state["links"].forEach((dict) => {
            if (num === 0) {
                menu_items.push(
                    <a key={num} href={dict['url']} className="active item">{dict['name']}</a>
                );
            } else {
                menu_items.push(
                    <a key={num} href={dict['url']} className="item">{dict['name']}</a>
                );
            }
            num += 1;
        });    
        return menu_items;    
    }

    render() {
        return (
            <div className="ui inverted menu">
                {this.loopMenus()}
            </div>
        );
    }
}

MenuBar.propTypes = {
    url: PropTypes.string.isRequired,
};