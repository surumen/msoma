import * as React from 'react';
import { Link } from 'react-router-dom';

export default () => 
    <div className="jumbotron">
        <h1>Home</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
        <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
    </div>