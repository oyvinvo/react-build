import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


const TopMenu = (props) => {
    const items = props.items.map((item, key) => (
        <li key={key}>
            <Link to={item.link}>{item.label}</Link>
        </li>
    ));
    return (
        <div>
            <ul>
                {items}
            </ul>
        </div>
    );
};

export default class extends Component {

    render() {
        const menuItems = [
            {label: 'Home', link: '/'},
            {label: 'HelloWorld', link:'/hello-world'}
        ];

        return (
            <div id="application">
                <TopMenu items={menuItems} />
                {this.props.children}
            </div>
        );
    }
}
