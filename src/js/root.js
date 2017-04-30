import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,hashHistory} from 'react-router';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import PropTypes from 'prop-types';

export default class Root extends React.Component{
  render(){
    return (
        <div>n
            <Button type="primary">Primary</Button>
            <Button>Default</Button>
            <Button type="dashed">Dashed</Button>
            <Button type="danger">Danger</Button>

        </div>
    );
  };
}

ReactDOM.render(<Root/>, document.getElementById('mainContainer'));
