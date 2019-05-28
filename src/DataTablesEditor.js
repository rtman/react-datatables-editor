import React from 'react';
import $ from 'jquery';
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import 'datatables.net-editor-dt/css/editor.dataTables.min.css'
import 'datatables.net-select-dt/css/select.dataTables.min.css'
import 'datatables.net-buttons-dt/css/buttons.dataTables.min.css'
require('datatables.net');
require('datatables.net-buttons');
require('datatables.net-buttons/js/buttons.print.min.js');
require('datatables.net-select');
require('datatables.net-editor')

export default class DataTablesEditor extends React.Component {
    constructor(props) {
        super(props);
        this.dataTable = null;
        this.editor = null;
    }
    componentDidMount() {
        this.$el = $(this.el);
        this.editor = new $.fn.dataTable.Editor({
            // ajax: "../php/staff.php",
            // table: "#example",
            idSrc: "id",
            table: this.$el,
            fields: this.props.fields
        });
        this.dataTable = this.$el.DataTable({
            data: this.props.data,
            columns: this.props.columns,
            ...this.props.options,
            ...this.initButtons(this.props)

        });
        $(this.dataTable.table().container()).on(
            'click',
            'tbody td:not(:first-child)',
            (e) => {
                console.log('Click e', e)
                this.editor.inline(e.target);
            }
        );
    }

    componentWillUnmount() {
        this.dataTable.destroy(true);
    }

    initButtons = (props) => {
        let o = {buttons:[]}
        if(props.createButton) o.buttons.push({extend: "create", editor: this.editor})
        if(props.editButton) o.buttons.push({extend: "edit", editor: this.editor})
        if(props.removeButton) o.buttons.push({extend: "remove", editor: this.editor})
        if(o.buttons.length > 0 ) return o
        return null
    }

    search = (value) => {
        this.dataTable.search(value).draw();
    };

    // editor = () => {
    //     return this.editor
    // };

    render() {
        return <table ref={(el) => (this.el = el)} />;
    }
}