/**
 * Created by CS99 on 09/03/2017.
 */
var ChangedTextData = require('../../tack/mock-data-for-main-view-clicked');

var TreeChangedData = (function () {

    return {
        getChangedName : function () {
            return ChangedTextData;
        },

        toJSON: function () {
            return {
                treeViewData: MockDataForView
            };
        }
    }

})();

module.exports = TreeChangedData;