import React from 'react';

export default React.createClass({
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                {this.props.children}
            </div>
        )
    }
});