import React from 'react';
import $ from 'jquery';
import { data } from './Data'
import 'datatables.net-dt/css/jquery.dataTables.min.css'
import 'datatables.net-fixedcolumns-dt/css/fixedColumns.dataTables.min.css'
import 'datatables.net-editor-dt/css/editor.dataTables.min.css'
import 'datatables.net-select-dt/css/select.dataTables.min.css'
import 'datatables.net-buttons-dt/css/buttons.dataTables.min.css'
require('datatables.net');
require('datatables.net-fixedcolumns');
require('datatables.net-scrollresize'); // local dependency made my me
require('datatables.net-buttons');

require('datatables.net-buttons/js/buttons.print.min.js');
require('datatables.net-select');
require('datatables.net-editor')

console.log('$', $);
console.log('$.fn',$.fn);
console.log('$.fn.dataTable', $.fn.dataTable);
console.log('$.fn.dataTable.Editor',$.fn.dataTable.Editor);

// var editor;

export default class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.dataTable = null;
        this.editor = null;
    }
    componentDidMount() {
        console.log('DataTableEditor - data', data)
        this.$el = $(this.el);
        this.editor = new $.fn.dataTable.Editor({
            // ajax: "../php/staff.php",
            // table: "#example",
            idSrc: 'id',
            table: this.$el,
            fields: [
                { label: "Name", name: "name"},
                { label: "Category", name: "category"},
                { label: "Size", name: "size"},
                { label: "Price", name: "price"},
                { label: "Par", name: "par"},
                { label: "On Hand", name: "on hand"},
                { label: "To Order", name: "to order"}
            ]
        });
        this.dataTable = this.$el.DataTable({
            data: data,
            columns: [{data: "name", title: "Name"},
            {data: "category", title: "Category"},
            {data: "size", title: "Size"},
            {data: "price", title: "Price"},
            {data: "par", title: "Par"},
            {data: "on hand", title: "On Hand"},
            {data: "to order", title: "To Order"}
            ],
            buttons: [
                { extend: 'create', editor: this.editor },
                { extend: 'edit', editor: this.editor },
                { extend: 'remove', editor: this.editor }
            ],
            // buttons: ['copy', 'csv', 'excel'],
            // buttons: true,
            // scrollResize: true,
            dom: 'Bfrtp', // https://datatables.net/reference/option/dom
            // paging: false,
            scrollX: true,
            // scrollY: 100,
            scrollCollapse: false,
            fixedColumns: true,
            autoWidth: false,
            // rowId: 'id',
            select: true
            // info: false
            // search: false,
            // fixedHeader: true,
            // orderCellsTop: true
        });
        // console.log('DataTableEditor - editor',this.editor);
        console.log('DataTableEditor - this.dataTable',this.dataTable);
        $(this.dataTable.table().container()).on(
            'click',
            'tbody td:not(:first-child)',
            (e) => {
                console.log('DataTableEditor - inline click e.target', e.target);
                // console.log(this, 'inline click this');
                console.log('DataTableEditor - inline click this.editor',this.editor);
                this.editor.inline(e.target);
            }
        );
    }

    componentWillUnmount() {
        console.log('DataTableEditor - componentWillUnmount');
        this.dataTable.destroy(true);
    }

    componentDidUpdate(prevProps) {
        console.log('DataTableEditor - componentDidUpdate - prevProps',prevProps);
        console.log(
            'DataTableEditor - componentDidUpdate - this.props', this.props
        );
    }

    shouldComponentUpdate() {
        console.log('DataTableEditor - shouldComponentUpdate');
        return false;
    }

    search = (value) => {
        this.dataTable.search(value).draw();
    };

    render() {
        return <table ref={(el) => (this.el = el)} />;
    }
}