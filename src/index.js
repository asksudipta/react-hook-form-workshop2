import { render } from '@testing-library/react';
import ReactDOM from 'react-dom';
//importing bootstrap
import 'bootstrap/dist/css/bootstrap.css';
//ipmporting react router
import { BrowserRouter as Router , Switch, Route, Link } from "react-router-dom";

import App from './App';

//ReactDOM.render( <div> <h1>Welcome to React Hook Form !</h1></div>,document.getElementById ('root'));
ReactDOM.render( <App/>, document.getElementById('root'));