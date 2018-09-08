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



var commentVoteCount = 0;
function onUpvoteCommentClick(){
    ++commentVoteCount;
    document.getElementById('commentVoteCount').innerHTML = commentVoteCount;
    if(commentVoteCount >= 20){
        document.getElementById('commentVoteCount').style.color = "green";
    }
    else if(commentVoteCount >= 10){
        document.getElementById('commentVoteCount').style.color = "blue";
    }
    else if(commentVoteCount >=0){
        document.getElementById('commentVoteCount').style.color = "black";
    }
    else{
        document.getElementById('commentVoteCount').style.color = "red";
    }
}
function onDownvoteCommentClick(){
    --commentVoteCount;
    document.getElementById('commentVoteCount').innerHTML = commentVoteCount;
    if(commentVoteCount >= 20){
        document.getElementById('commentVoteCount').style.color = "green";
    }
    else if(commentVoteCount >= 10){
        document.getElementById('commentVoteCount').style.color = "blue";
    }
    else if(commentVoteCount >=0){
        document.getElementById('commentVoteCount').style.color = "black";
    }
    else{
        document.getElementById('commentVoteCount').style.color = "red";
    }
}