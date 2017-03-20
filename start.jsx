var React = require('react');
var MainViewController = require('./app/screens/TreeViewScreen/controller/main-view-controller.jsx');
var MainViewStore = require('./app/screens/TreeViewScreen/store/main-view-store.js');
var MainViewAction = require('./app/screens/TreeViewScreen/action/main-view-action.js');

React.render(<MainViewController store = {MainViewStore} action={MainViewAction}/>,
                document.getElementById('container'));
