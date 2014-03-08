requirejs.config({
    baseUrl: 'bower_components',
    paths: {
        jquery: 'jquery/dist/jquery',
        bootstrap: 'bootstrap/dist/js/bootstrap'
    },
    shim: {
        bootstrap: {
            deps: ["jquery"]
        }
    }
});

requirejs(['jquery', 'bootstrap'],
    function($, bootstrap) {
        $('[data-toggle="tooltip"]').tooltip();
    });
