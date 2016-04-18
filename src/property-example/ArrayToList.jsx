import React from 'react';
import Form from './Form.jsx';

export default React.createClass({
    handleCommentSubmit: function(comment) {
        var comments = this.state.data;
        // not very robust
        comment.id = Date.now();
        var newComments = comments.concat([comment]);
        this.setState({data: newComments});
        // TODO, post and read response into state after the opimistic update
    },
    getInitialState: function() {
        return {data: []};
    },
    componentDidMount() {
      this.setState({data: [{"id": "1", "name": "Eve", "text":"Hiya"}, {"id": "2", "name": "Luke", "text":"yo"}]});
    },
    render: function() {
        var commentNodes = this.state.data.map(function(comment) {
            return (
                <tr key={comment.id}>
                    <td>{comment.name}</td>
                    <td>{comment.id}</td>
                    <td>{comment.text}</td>
                </tr>
            );
        });
        return (
            <div>
                <table className="commentList">
                    <thead>
                        <tr>
                            <th>Navn</th>
                            <th>id</th>
                            <th>tekst</th>
                        </tr>
                    </thead>
                    <tbody>
                        {commentNodes}
                    </tbody>
                </table>
                <Form onCommentSubmit={this.handleCommentSubmit} />
            </div>
        );
    }
});