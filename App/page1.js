define(['durandal/plugins/router', 'global'],
function (router, global) {
    var vm = {
        //...
        activate: activate,
        global: global
    };
    return vm;

    function activate() {
        global.shellViewModel.someValue('hello from page1');
        return;
    }

});