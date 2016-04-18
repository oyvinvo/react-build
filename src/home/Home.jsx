import React from 'react';
import Title from './Title.jsx';
import './home.css';
import TitlePropTextChild from '../property-example/TitlePropTextChild.jsx';
import ArrayToList from '../property-example/ArrayToList.jsx';

var data = [{id: 1, navn: "Pete Hunt", text: "This is one comment"}, {id: 2, navn: "Jordan Walke", text: "This is *another* comment"}];

export default React.createClass({


    render() {
       return (
           <span>
               <Title />
               <div className="bold-text">Insert bold statement here.</div>
               <TitlePropTextChild title="Something interesting happened">Read more about it somewhere else</TitlePropTextChild>
               <TitlePropTextChild title="You won't believe what happened next">And you won't find out</TitlePropTextChild>
               <ArrayToList/>
           </span>
       )
   }
});