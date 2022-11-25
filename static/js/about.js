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

    setTimeout(() => {
        bottomCover.style.display = 'flex';
    }, 400);

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

    setTimeout(() => {
        bottomCover.style.display = 'flex';
    }, 400);

    arrowBackCard.classList.remove('active');
}







if ($(window).width() > 1149) {
    function myGoalDes(){
        const mygoal = document.getElementById('myGoalCardDes')
        const arrowBackCard = document.getElementById('arrowBackCardDes1')
        
        const overlay = document.getElementById('overlay')

        mygoal.classList.add('active');

        overlay.classList.add('active');
    
        setTimeout(() => {
            arrowBackCard.classList.add('active');
        }, 350);
    }
    
    function myGoalCloseDes(){
        const mygoal = document.getElementById('myGoalCardDes')
        const arrowBackCard = document.getElementById('arrowBackCardDes1')
        
        const overlay = document.getElementById('overlay')

        mygoal.classList.remove('active');

        overlay.classList.remove('active')
    
        arrowBackCard.classList.remove('active');
    }
    function infoAbtMeDes(){
        const infoAbtMe = document.getElementById('infoAbtMeCardDes')
        const arrowBackCard = document.getElementById('arrowBackCardDes2')
        
        const overlay = document.getElementById('overlay')

        infoAbtMe.classList.add('active');

        overlay.classList.add('active');
    
        setTimeout(() => {
            arrowBackCard.classList.add('active');
        }, 350);
    }
    
    function infoAbtMeDesClose(){
        const infoAbtMe = document.getElementById('infoAbtMeCardDes')
        const arrowBackCard = document.getElementById('arrowBackCardDes2')
        
        const overlay = document.getElementById('overlay')

        infoAbtMe.classList.remove('active');

        overlay.classList.remove('active')
    
        arrowBackCard.classList.remove('active');
    }
    function whatIDoDes(){
        const whatIDo = document.getElementById('whatIDoCardDes')
        const arrowBackCard = document.getElementById('arrowBackCardDes3')
        
        const overlay = document.getElementById('overlay')

        whatIDo.classList.add('active');

        overlay.classList.add('active');
    
        setTimeout(() => {
            arrowBackCard.classList.add('active');
        }, 350);
    }
    
    function whatIDoDesClose(){
        const whatIDo = document.getElementById('whatIDoCardDes')
        const arrowBackCard = document.getElementById('arrowBackCardDes3')
        
        const overlay = document.getElementById('overlay')

        whatIDo.classList.remove('active');

        overlay.classList.remove('active')
    
        arrowBackCard.classList.remove('active');
    }
    function infoAbtCatDes(){
        const infoAbtCat = document.getElementById('infoAbtCatCardDes')
        const arrowBackCard = document.getElementById('arrowBackCardDes4')
        
        const overlay = document.getElementById('overlay')

        infoAbtCat.classList.add('active');

        overlay.classList.add('active');
    
        setTimeout(() => {
            arrowBackCard.classList.add('active');
        }, 350);
    }
    
    function infoAbtCatDesClose(){
        const infoAbtCat = document.getElementById('infoAbtCatCardDes')
        const arrowBackCard = document.getElementById('arrowBackCardDes4')
        
        const overlay = document.getElementById('overlay')

        infoAbtCat.classList.remove('active');

        overlay.classList.remove('active')
    
        arrowBackCard.classList.remove('active');
    }
    function howIMadeWebDes(){
        const howIMadeWeb = document.getElementById('howIMadeWebCardDes')
        const arrowBackCard = document.getElementById('arrowBackCardDes5')
        
        const overlay = document.getElementById('overlay')

        howIMadeWeb.classList.add('active');

        overlay.classList.add('active');
    
        setTimeout(() => {
            arrowBackCard.classList.add('active');
        }, 350);
    }
    
    function howIMadeWebDesClose(){
        const howIMadeWeb = document.getElementById('howIMadeWebCardDes')
        const arrowBackCard = document.getElementById('arrowBackCardDes5')
        
        const overlay = document.getElementById('overlay')

        howIMadeWeb.classList.remove('active');

        overlay.classList.remove('active')
    
        arrowBackCard.classList.remove('active');
    }
    
}