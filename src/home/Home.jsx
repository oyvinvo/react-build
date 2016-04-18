import React from 'react';
import Title from './Title.jsx';
import './home.css';
import TitlePropTextChild from '../property-example/TitlePropTextChild.jsx';

export default React.createClass({
   render() {
       return (
           <span>
               <Title />
               <div className="bold-text">Insert bold statement here.</div>
               <TitlePropTextChild title="Something interesting happened">Read more about it somewhere else</TitlePropTextChild>
               <TitlePropTextChild title="You won't believe what happened next">And you won't find out</TitlePropTextChild>
           </span>
       )
   }
});