import React from 'react';
import { Link, Route } from 'react-router-dom';

function Topic({ match }) {
    return <h3>{ match.params.topicId }</h3>
}

export default function Topics({ match }) {
    return (
    <div>
    <h2>Topics</h2>
    <ul>
        <li><Link to= {`${match.url}/dynmic-router`}>Dynamic Router</Link></li>
        <li><Link to= {`${match.url}/components`}>Components</Link></li>
        <li><Link to= {`${match.url}/props-vs-state`}>Props vs State</Link></li>
    </ul>

    <Route path={`${match.path}/:topicId`} component= { Topic }/>
    <Route exact path={ match.path } render = {()=> {
        return <h2>Please select topic</h2>
    }}/>

    </div>)
}
