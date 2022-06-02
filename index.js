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

    if(thumbnails[index]){
        thumbnails[currentIndex].classList.remove("thumb-active");
        // thumbnails[currentIndex].style.opacity="50%";
        // thumbnails[index].style.opacity="100%";
        thumbnails[index].classList.add("thumb-active");
    }
    currentIndex=index;
    contents[currentIndex].style.display="block";
   
}
