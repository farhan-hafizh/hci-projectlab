$('.toggle').click(function () {
    $(this).next('.content').slideToggle('fast',() => {
        if ($(this).next('.content').is(':visible'))
            $(this).next('.content').css('display','flex');
    });
        
    $(this).parent().siblings().children().next().slideUp();
});
