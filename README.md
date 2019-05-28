## Datatables Editor in React

Like the repository for datatables I have made an example for DataTables Editor in React. This is not a port from jquery but an example you can clone and experiment with to see how editor can work in React. I have no intention at this time to port it from jquery, if you want to, please fork away and let me know!

I have set this up as a basic example that includes select and inline editing. I have also included an external search bar to show how you can access the datables API from the parent component.

As with the datatables component I realise it's not recommended to use jquery in react but this works well so long as you make react think the datables editor component is empty. With that jquery can handle the dom manipulation within. This is done by rendering just a table element:

`render() { return <table ref={(el) => (this.el = el)} />; }`

There are quite a lot of configuration options with datatables and editor please refer to their documentation.

https://datatables.net/
https://editor.datatables.net/
