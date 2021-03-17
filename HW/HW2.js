$(" .region, .time").hover(function () {
    $(this).transition('slide left');
}, function () {
    $(this).transition('slide right');
})
$(".city").click(function () {
    $(".city_jump").transition('slide right');
})
$('.search_button').click(function () {
    $(this).transition('pulse')
})

