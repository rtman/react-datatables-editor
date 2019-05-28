## WARNING: Editor is a for pay, commercial piece of software. You can however get a free trial off the website. This complicates the package installation procedure by requiring you to install the package from npm as well as download the trial from the website below. You are then required to run the `install.js` script in `node_modules/datatables.net-editor/` which will replace the files in your node modules directory and allow the usage of editor either for the trial or the full version (if you have bought it). You will have to re run this script every time you update or modify node_modules with npm/yarn.

Here is the command I use from the project root:
`node node_modules/datatables.net-editor/install.js ../Editor-1.9.0.zip`

Editor installation docs:
https://editor.datatables.net/manual/installing/index#npm

## Datatables Editor in React

Like the repository for datatables I have made an example for DataTables Editor in React. This is not a port from jquery but an example you can clone and experiment with to see how editor can work in React. I have no intention at this time to port it from jquery, if you want to, please fork away and let me know!

I have set this up as a basic example that includes select and inline editing. I have also included an external search bar to show how you can access the datables API from the parent component.

As with the datatables component I realise it's not recommended to use jquery in react but this works well so long as you make react think the datables editor component is empty. With that jquery can handle the dom manipulation within. This is done by rendering just a table element:

`render() { return <table ref={(el) => (this.el = el)} />; }`

There are quite a lot of configuration options with datatables and editor please refer to their documentation.

https://datatables.net/
https://editor.datatables.net/
