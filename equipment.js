let parentClass;
init($('.category'));

$('.next').click(function (){
    parentClass = $(this).parent().parent();
    onClickButton(parentClass, 'next');
});
$('.prev').click(function (){
    parentClass = $(this).parent().parent();
    onClickButton(parentClass, 'prev');
});

function init(parent){
    parent.each(function (i) {
        var className = $(this).prop("className");
        onClickButton($(this));
    });
}

function onClickButton(parentClass, mode){
    var slideEnd = 4;
    var items = parentClass.find(".card");
    var cardContainer = parentClass.find('.card-container');

    if(mode === 'next'){
        $(items[items.length-1]).prependTo(cardContainer)
    }else if(mode === 'prev'){
        $(items[0]).appendTo(cardContainer)
    }
    
    items = parentClass.find(".card");
    for (let i = 0; i <= items.length; i++) {
        const element = items[i];
        $(element).css('display', '');
        if(i>=slideEnd){
            $(element).css('display', 'none')
        }
    }
    
}