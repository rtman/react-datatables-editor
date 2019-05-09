import React from 'react';
import DataTable from './DataTable'
import './App.css'
export default class App extends React.Component {
    render() {
        return (
          <div id={'resize_wrapper'}>
            <DataTable/>
          </div>
        )
    }
}
