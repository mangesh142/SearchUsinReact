var React = require('react');

var SearchView = require('../view/search-view').view;

var MainViewController = React.createClass({

  propTypes: {
    store: React.PropTypes.object.isRequired,
    action: React.PropTypes.object.isRequired
  },

  getInitialState: function () {
    var initialState = {
      appData: this.getStore().getData().appData,
      componentProps: this.getStore().getData().componentProps
    };
    return initialState;
  },

  //@Bind: Store with state
  componentDidMount: function () {
    this.getStore().bind('change', this.handleSearchViewStateChanged);
    this.props.action.registerEvent();
  },

  componentDidUpdate: function () {
  },

  componentWillMount: function () {
    var aSearchViewData = this.state.appData.getViewData();
    this.getStore().fetchGlobalData(aSearchViewData);
  },

  //@UnBind: store with state
  componentWillUnmount: function () {
    this.getStore().unbind('change', this.handleSearchViewStateChanged);
    this.props.action.deRegisterEvent();
  },

  //@set: state
  handleSearchViewStateChanged: function () {

    var changedState = {
      appData: this.getStore().getData().appData,
      componentProps: this.getStore().getData().componentProps
    };

    this.setState(changedState);
  },

  getStore: function () {
    return this.props.store;
  },

  render: function () {

    var oComponentProps = this.state.componentProps;
    var aSearchedData = oComponentProps.getData();
    return (
        <div className="treeContainer">
          <SearchView data={aSearchedData}/>
        </div>
    );
  }
});

module.exports = MainViewController;