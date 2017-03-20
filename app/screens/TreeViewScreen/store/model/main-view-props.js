var MainViewProps = (function () {
    /**********************Variable Declaration**************************/
    var aData = [];
    /**********************All Getter and Setter*************************/
    return {

        getData: function () {
            return aData;
        },

        setData: function (_oData) {
            aData = _oData;
        }

    }
})();

module.exports = MainViewProps;