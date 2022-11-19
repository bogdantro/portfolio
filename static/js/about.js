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

function whatIDo(){
    const whatIDo = document.getElementById('whatIDoCard')
    const arrowBackCard = document.getElementById('arrowBackCard3')
    const bottomCover =  document.getElementById('bottomCover')

    whatIDo.classList.add('active');

    bottomCover.style.display = 'none';

    setTimeout(() => {
        arrowBackCard.classList.add('active');
    }, 350);
}

function whatIDoClose(){
    const whatIDo = document.getElementById('whatIDoCard')
    const arrowBackCard = document.getElementById('arrowBackCard3')
    const bottomCover =  document.getElementById('bottomCover')

    whatIDo.classList.remove('active');

    bottomCover.style.display = 'unset';

    arrowBackCard.classList.remove('active');
}

function infoAbtCat(){
    const infoAbtCat = document.getElementById('infoAbtCatCard')
    const arrowBackCard = document.getElementById('arrowBackCard4')

    infoAbtCat.classList.add('active');

    setTimeout(() => {
        arrowBackCard.classList.add('active');
    }, 350);
}

function infoAbtCatClose(){
    const infoAbtCat = document.getElementById('infoAbtCatCard')
    const arrowBackCard = document.getElementById('arrowBackCard4')

    infoAbtCat.classList.remove('active');

    arrowBackCard.classList.remove('active');
}

function howIMadeWeb(){
    const howIMadeWeb = document.getElementById('howIMadeWebCard')
    const arrowBackCard = document.getElementById('arrowBackCard5')
    const bottomCover =  document.getElementById('bottomCover')

    howIMadeWeb.classList.add('active');

    bottomCover.style.display = 'none';

    setTimeout(() => {
        arrowBackCard.classList.add('active');
    }, 350);
}

function howIMadeWebClose(){
    const howIMadeWeb = document.getElementById('howIMadeWebCard')
    const arrowBackCard = document.getElementById('arrowBackCard5')
    const bottomCover =  document.getElementById('bottomCover')

    howIMadeWeb.classList.remove('active');

    bottomCover.style.display = 'unset';

    arrowBackCard.classList.remove('active');
}
