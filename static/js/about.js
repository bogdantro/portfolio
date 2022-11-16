function myGoal(){
    const mygoal = document.getElementById('myGoalCard')
    const arrowBackCard = document.getElementById('arrowBackCard1')

    mygoal.classList.add('active');

    setTimeout(() => {
        arrowBackCard.classList.add('active');
    }, 350);
}

function myGoalClose(){
    const mygoal = document.getElementById('myGoalCard')
    const arrowBackCard = document.getElementById('arrowBackCard1')

    mygoal.classList.remove('active');

    arrowBackCard.classList.remove('active');
}

function infoAbtMe(){
    const infoAbtMe = document.getElementById('infoAbtMeCard')
    const arrowBackCard = document.getElementById('arrowBackCard2')

    infoAbtMe.classList.add('active');

    setTimeout(() => {
        arrowBackCard.classList.add('active');
    }, 350);
}

function infoAbtMeClose(){
    const infoAbtMe = document.getElementById('infoAbtMeCard')
    const arrowBackCard = document.getElementById('arrowBackCard2')

    infoAbtMe.classList.remove('active');

    arrowBackCard.classList.remove('active');
}
