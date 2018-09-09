function onUpvoteClick(voteCountEl){
    var voteCount = parseInt(document.getElementById((voteCountEl)).innerHTML,10);
    ++voteCount;
    document.getElementById(voteCountEl).innerHTML = voteCount;
    if(voteCount >= 20){
        document.getElementById(voteCountEl).style.color = "green";
    }
    else if(voteCount >= 10){
        document.getElementById(voteCountEl).style.color = "blue";
    }
    else if(voteCount >=0){
        document.getElementById(voteCountEl).style.color = "black";
    }
    else{
        document.getElementById(voteCountEl).style.color = "red";
    }
}

function onDownvoteClick(voteCountEl){
    var voteCount = parseInt(document.getElementById((voteCountEl)).innerHTML,10);
    --voteCount;
    document.getElementById(voteCountEl).innerHTML = voteCount;
    if(voteCount >= 20){
        document.getElementById(voteCountEl).style.color = "green";
    }
    else if(voteCount >= 10){
        document.getElementById(voteCountEl).style.color = "blue";
    }
    else if(voteCount >=0){
        document.getElementById(voteCountEl).style.color = "black";
    }
    else{
        document.getElementById(voteCountEl).style.color = "red";
    }
}

function onEditClick(){
    sessionStorage.setItem('oldSummary',document.getElementById('summary').innerHTML.replace(/<(?:.|\n)*?>/gm, ''));
    window.location.href="editExistingSummary.html";
}

function submitSummaryChanges(){
    sessionStorage.setItem('newSummary',document.getElementById('newSummary').value);
    window.location.href="post.html";
}

