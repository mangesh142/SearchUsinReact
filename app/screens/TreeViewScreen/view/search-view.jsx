var React = require('react');
var EventBus = require('../../../libraries/eventdispatcher/EventDispatcher');


var oEvents = {
  HANDLE_SEARCH_VIEW_ENTER_KEYDOWN: 'handle_child_view_enter_keydown',
  HANDLE_SEARCH_VIEW_NAME_DELETE_CLICKED: 'handle_child_view_name_delete_clicked',
  HANDLE_SEARCH_VIEW_NAME_MOVE_UP_CLICKED: 'handle_child_view_name_move_up_clicked',
  HANDLE_SEARCH_VIEW_NAME_MOVE_DOWN_CLICKED: 'handle_child_view_name_move_down_clicked'
};

var NameContainerView = React.createClass({
  getInitialState: function () {
    var oData = {};
    oData.searchValue = this.props.data;
    oData.textValue = "";
    return oData;
  },

  handleOnChange: function (oEvent) {
    var sNewValue = oEvent.target.value;
    var aSearchValue = this.props.data;
    var aSearchValueTemp = [];
    for (var iIndex = 0; iIndex < aSearchValue.length; iIndex++) {
      var oData = aSearchValue[iIndex];
      if (oData.name.includes(sNewValue)) {

        aSearchValueTemp.push(oData);

      }
    }
    this.setState({searchValue: aSearchValueTemp, textValue: sNewValue});
  },

  handleEnterKeyDown: function (oEvent) {

    var code = (oEvent.keyCode ? oEvent.keyCode : oEvent.which);

    if (code == 13) {
      var sNewValue = this.state.textValue;
      if (sNewValue != '') {
        this.setState({searchValue: this.props.data, textValue: ''});
        EventBus.dispatch(oEvents.HANDLE_SEARCH_VIEW_ENTER_KEYDOWN, this, sNewValue);
      }
    }
  },
  handleEnterKeyUp: function (oEvent) {

  },

  handleNameDeleteOnClick: function (oSelectedValue) {
    EventBus.dispatch(oEvents.HANDLE_SEARCH_VIEW_NAME_DELETE_CLICKED, this, oSelectedValue);

  },

  handleNameMoveUpOnClick: function (oSelectedValue) {
    EventBus.dispatch(oEvents.HANDLE_SEARCH_VIEW_NAME_MOVE_UP_CLICKED, this, oSelectedValue);
  },

  handleNameMoveDownOnClick: function (oSelectedValue) {
    EventBus.dispatch(oEvents.HANDLE_SEARCH_VIEW_NAME_MOVE_DOWN_CLICKED, this, oSelectedValue);
  },

  getView: function () {
    var aData = this.state.searchValue;
    var aViews = [];
    for (var iIndex = 0; iIndex < aData.length; iIndex++) {
      var oData = aData[iIndex];
      aViews.push(
          <div className="name-view">
            {(oData).name}
            <div className="deleteName" onClick={this.handleNameDeleteOnClick.bind(this, oData)}>
              <img src="img/delete.png"/>
            </div>
            <div className="moveUp" onClick={this.handleNameMoveUpOnClick.bind(this, oData)}>
              <img src="img/double-arrow-up.png"/>
            </div>
            <div className="down" onClick={this.handleNameMoveDownOnClick.bind(this, oData)}>
              <img src="img/double-arrow-down.png"/>
            </div>

          </div>
      );
    }
    return aViews;
  },

  render: function () {
    return (
        <div className="name-container">
          <div className="searchTextBox">
            <img src="img/search.png"/>
            <input type="text" className="test" value={this.state.textValue} onChange={this.handleOnChange}
                   onKeyUp={this.handleEnterKeyUp} onKeyDown={this.handleEnterKeyDown}
                   placeholder="Search"/>
          </div>

          {this.getView()}
        </div>
    );
  }
});

module.exports = {
  view: NameContainerView,
  events: oEvents
};

