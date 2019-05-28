import React from 'react';
import DataTablesEditor from './DataTablesEditor'
import data from './Data'
import './App.css'

export default class App extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchValue: '',
            columns: [
                {
                    data: null,
                    defaultContent: '',
                    className: 'select-checkbox',
                    orderable: false
                },
                { title: "name", data: "name" },
                { title: "position", data: "position" },
                { title: "salary", data: "salary" },
                { title: "start_date", data: "start_date" },
                { title: "office", data: "office" },
                { title: "extn", data: "extn" }
            ],
            fields:  [
                { label: "Name:", name: "name" }, 
                { label: "Position:", name: "position" }, 
                { label: "Office:", name: "office" }, 
                { label: "Extension:", name: "extn" }, 
                { label: "Start date:", name: "start_date", type: "datetime" },
                { label: "Salary:", name: "salary" }
            ],
            options:{
                dom: 'Blrtip', // https://datatables.net/reference/option/dom
                select: {
                    style:    'os',
                    selector: 'td:first-child'
                },
            }
        }
        this.dataTablesRef = React.createRef();
    }

    onChangeSearch = (e) => {
        const { value } = e.target;
        const searchValue = value;
        this.setState({ searchValue });
        this.dataTablesRef.current.search(searchValue);
    };

    render() {
        const {
            fields,
            columns,
            options,
            searchValue
        } = this.state;
        return (
          <div>
            <input
                value={searchValue}
                onChange={this.onChangeSearch}
                autoComplete={'off'}
                type="text"
                placeholder="Search ..."
            />
            <DataTablesEditor
                ref={this.dataTablesRef}
                data={data}
                columns={columns}
                options={options}
                fields={fields}
                createButton={true}
                editButton={true}
                removeButton={true}
            />
          </div>
        );
    }
}
