var currentIndex=0
showContent(0);

function next(){
    showContent(currentIndex+1)
}

function prev(){
    showContent(currentIndex-1)
}

function showContent(index){
    var contents = document.getElementsByClassName("content");
    var thumbnails = document.getElementsByClassName("thumbnail");
    contents[currentIndex].style.display="none";
    contents[currentIndex].classList.remove("fade-in");

    if(index<0) index=contents.length-1;
    else if (index>contents.length-1) index=0;
    currentIndex=index;
    contents[currentIndex].style.display="block";
    contents[currentIndex].classList.add("fade-in");
   
}
