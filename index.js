var currentIndex=0
showContent(0);

$('.next').click(()=>{
    showContent(currentIndex+1)
});
$('.prev').click(()=>{
    showContent(currentIndex-1)
});

function showContent(index){
    var contents = $(".content");
    var thumbnails = $(".thumbnail");
    contents.eq(currentIndex).hide();
    contents[currentIndex].classList.remove("fade-in");
    
    if(index<0) index=contents.length-1;
    else if (index>contents.length-1) index=0;

    if(thumbnails[index]){
        thumbnails[currentIndex].classList.remove("thumb-active");
        thumbnails[index].classList.add("thumb-active");
    }
    currentIndex=index;
    contents.eq(currentIndex).show();
}
