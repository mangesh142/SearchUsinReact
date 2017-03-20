var MockDataForView = require('../../tack/mock-data-for-main-view');

var MainViewAppData = (function () {

  return {
    getViewData: function () {
      return MockDataForView;
    },
    toJSON: function () {
      return {
        treeViewData: MockDataForView
      };
    }

  }

})();

module.exports = MainViewAppData;