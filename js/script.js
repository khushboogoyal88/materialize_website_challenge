$(document).ready(function () {
    $('.dropdown-button').dropdown({
        constrainWidth: false,
        hover: true,
        belowOrigin: true,
        alignment: 'left'
    });
    
    // JAVASCRIPT START HERE //
    
    $('.button-collapse').sideNav();
    
    // INIT SELECT LIST
    $('select').material_select();
});