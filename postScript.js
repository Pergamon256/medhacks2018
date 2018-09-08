var voteCount = 0;
function onUpvoteClick(){
    ++voteCount;
    document.getElementById('voteCount').innerHTML = voteCount;
}
function onDownvoteClick(){
    --voteCount;
    document.getElementById('voteCount').innerHTML = voteCount;
}