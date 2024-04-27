var index = 0;

function mudarCores(){
    var cores = ["red", "green", "yellow","purple", "blue", "pink", "orange"]

    document.getElementsByTagName("body")[0].style.background = cores[index++];

    if(index > cores.length - 1){
        index = 0
    } 
}