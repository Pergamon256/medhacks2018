var voteCount = 0;
function onUpvoteClick(){
    ++voteCount;
    document.getElementById('voteCount').innerHTML = voteCount;
    if(voteCount >= 20){
        document.getElementById('voteCount').style.color = "green";
    }
    else if(voteCount >= 10){
        document.getElementById('voteCount').style.color = "blue";
    }
}
function onDownvoteClick(){
    --voteCount;
    document.getElementById('voteCount').innerHTML = voteCount;
}