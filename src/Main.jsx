import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router'
import Home from './home/Home.jsx';
import Comments from './property-example/ArrayToList.jsx';

const Main = React.createClass({
   render() {
       return (
           <div>
               <ul>
                   <li><Link to="/home">Some random stuff</Link></li>
                   <li><Link to="/comments">A form</Link></li>
               </ul>
               {this.props.children}
           </div>
       )
   }
});

ReactDOM.render(
    (
    <Router history={browserHistory}>
        <Route path="/" component={Main}>
            <Route path="home" component={Home} />
            <Route path="comments" component={Comments} />
        </Route>
    </Router>
    ),
    document.getElementById('main')
);