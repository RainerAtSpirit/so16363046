define(['durandal/plugins/router', 'global'],
function (router, global) {
    var someValue = ko.observable('');

    var shell = {
        router: router,
        someValue: ko.observable('hello from shell'),
        activate: activate
    };
    return shell;

    function activate() {
        global.shellViewModel = shell;

        router.map([
            { url: 'page1', moduleId: 'page1', name: 'Page1', visible: true }
        ]);

        return router.activate('page1');
    }
});