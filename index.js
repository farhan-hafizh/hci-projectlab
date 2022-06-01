var currentIndex=0
showContent(0);

function next(){
    showContent(currentIndex+=1)
}

function prev(){
    showContent(currentIndex-=1)
}

function showContent(index){
    var contents = document.getElementsByClassName("content");

    if(index<0) index=contents.length-1;
    else if (index>contents.length-1) index=0;
    currentIndex=index;
    for(let i=0; i<contents.length; i++){
        contents[i].style.display="none";
    }
    contents[index].style.display="block";
}