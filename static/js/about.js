const mygoal = document.getElementById('myGoalCard')
const arrowBackCard = document.getElementById('arrowBackCard')

function myGoal(){
    const mygoal = document.getElementById('myGoalCard')
    const arrowBackCard = document.getElementById('arrowBackCard')

    mygoal.classList.add('active');

    setTimeout(() => {
        arrowBackCard.classList.add('active');
    }, 400);
}

function myGoalClose(){
    const mygoal = document.getElementById('myGoalCard')
    const arrowBackCard = document.getElementById('arrowBackCard')

    mygoal.classList.remove('active');

    arrowBackCard.classList.remove('active');
}
