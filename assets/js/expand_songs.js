$(document).ready(function() {
    $('.artists ul').hide();
    $('.artist').click(function() {
        $(this).find('ul').slideToggle();
    });
});