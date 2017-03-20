var MicroEvent = require('../../../libraries/microevent/MicroEvent.js');
var MainViewProps = require('./model/main-view-props');
var AppData = require('./model/main-view-app-data');


var MainViewStore = (function () {

    var oComponentProps = MainViewProps;

    var triggerChange = function () {
        MainViewStore.trigger('change');
    };

    var _getViewData = function () {
        return oComponentProps.getData();
    };

    var _handleSearchViewEnterKeyDown = function (sNewValue) {
        var aData = oComponentProps.getData();
        var oNewData = {};
        oNewData.id = aData.length+1;
        oNewData.name = sNewValue;
        aData.push(oNewData);
        triggerChange();
    };

    var _handleSearchViewNameDeleteClicked = function (oSelectedValue) {
        var aData = oComponentProps.getData();
        for(var iIndex = 0; iIndex < aData.length; iIndex++){
           var oData = aData[iIndex];
            if(oData.id == oSelectedValue.id){
                aData.splice(iIndex,1);
            }
        }
        triggerChange();
    };

    var _handleSearchViewNameMoveUpClicked = function (oSelectedValue) {
        var aData = oComponentProps.getData();

        for(var iIndex = 0; iIndex < aData.length; iIndex++){

           var oData = aData[iIndex];
            if(oData.id == oSelectedValue.id){
                if(iIndex!=0) {
                   var oTempData = aData[iIndex];
                    aData[iIndex] = aData[iIndex - 1];
                    aData[iIndex - 1] = oTempData;
                }
                else {
                    alert('This at top position');
                }
            }
        }
        triggerChange();
    };

    var _handleSearchViewNameMoveDownClicked = function (oSelectedValue) {
        var aData = oComponentProps.getData();

        for(var iIndex = 0; iIndex < aData.length; iIndex++){

            var index =iIndex;
           var oData = aData[iIndex];
            if(oData.id == oSelectedValue.id){
                if(iIndex<=aData.length-2) {
                    var oTempData = aData[index];
                    aData[index] = aData[index + 1];
                    aData[index + 1] = oTempData;
                    break;
                }
                else {
                    alert('This at down position');
                }

            }
        }
        triggerChange();
    }

    return {
        getData: function () {
            var data = {
                appData: AppData,
                componentProps: oComponentProps
            };
            return data;
        },

        fetchGlobalData: function (aViewData) {
            oComponentProps.setData(aViewData);
        },

        getViewData: function () {
            return _getViewData();
        },

        handleSearchViewEnterKeyDown: function (sNewVAlue) {
            _handleSearchViewEnterKeyDown(sNewVAlue);
        },


        handleSearchViewNameDeleteClicked: function (oData) {
            _handleSearchViewNameDeleteClicked(oData);
        },
        handleSearchViewNameMoveUpClicked: function (oData) {
            _handleSearchViewNameMoveUpClicked(oData);
        },
        handleSearchViewNameMoveDownClicked: function (oData) {
            _handleSearchViewNameMoveDownClicked(oData);
        }

    }
})();

MicroEvent.mixin(MainViewStore);

module.exports = MainViewStore;