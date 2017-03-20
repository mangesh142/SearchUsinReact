var eventBus = require('../../../libraries/eventdispatcher/EventDispatcher.js');
var MainViewStore = require('../store/main-view-store');
var SearchViewEvent = require('../view/search-view').events;


var MainViewAction = (function () {

  var handleSearchViewEnterKeyDown = function (oContext, sNewValue) {
    MainViewStore.handleSearchViewEnterKeyDown(sNewValue);
  };

  var handleSearchViewNameDeleteClicked = function (oContext, oSelectedValue) {
    MainViewStore.handleSearchViewNameDeleteClicked(oSelectedValue);
  };
  var handleSearchViewNameMoveUpClicked =function (oContext, oSelectedValue) {
    MainViewStore.handleSearchViewNameMoveUpClicked(oSelectedValue);
  };
  var handleSearchViewNameMoveDownClicked =function (oContext, oSelectedValue) {
    MainViewStore.handleSearchViewNameMoveDownClicked(oSelectedValue);
  };

  return {
    //Register Event Listener
    registerEvent: function () {
      eventBus.addEventListener(SearchViewEvent.HANDLE_SEARCH_VIEW_ENTER_KEYDOWN, handleSearchViewEnterKeyDown);
      eventBus.addEventListener(SearchViewEvent.HANDLE_SEARCH_VIEW_NAME_DELETE_CLICKED, handleSearchViewNameDeleteClicked);
      eventBus.addEventListener(SearchViewEvent.HANDLE_SEARCH_VIEW_NAME_MOVE_UP_CLICKED, handleSearchViewNameMoveUpClicked);
      eventBus.addEventListener(SearchViewEvent.HANDLE_SEARCH_VIEW_NAME_MOVE_DOWN_CLICKED, handleSearchViewNameMoveDownClicked);
    },

    //De-Register Event Listener
    deRegisterEvent: function () {
      eventBus.removeEventListener(SearchViewEvent.HANDLE_SEARCH_VIEW_ENTER_KEYDOWN, handleSearchViewEnterKeyDown);
      eventBus.removeEventListener(SearchViewEvent.HANDLE_SEARCH_VIEW_NAME_DELETE_CLICKED, handleSearchViewNameDeleteClicked);
      eventBus.removeEventListener(SearchViewEvent.HANDLE_SEARCH_VIEW_NAME_MOVE_UP_CLICKED, handleSearchViewNameMoveUpClicked);
      eventBus.removeEventListener(SearchViewEvent.HANDLE_SEARCH_VIEW_NAME_MOVE_DOWN_CLICKED, handleSearchViewNameMoveDownClicked);
    }
  }
})();

module.exports = MainViewAction;