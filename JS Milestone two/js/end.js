//update the scoreText with the finalScore in end page:
const finalScore = document.getElementById('finalScore');

//get score from local storage:
const mostRecentScore = localStorage.getItem('mostRecentScore');
finalScore.innerText = mostRecentScore;

