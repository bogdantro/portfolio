import "https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js";


const coverLine = document.querySelector('.cover-line');



// if ($(window).width() > 1150) {
//   
//  }else{}

// const coverLineOffsetTop = coverLine.offsetTop;
// const coverLineHeight = coverLine.offsetHeight;


// coverLine.animate(
//     {
//         opacity: ['1', '0'],
//     },
//     {
//         duration: 1,
//         timeline: new ScrollTimeline({
//             scrollOffsets: [
//                 CSS.px(coverLineOffsetTop + coverLineHeight - window.innerHeight - 1000),
//                 CSS.px(coverLineOffsetTop - 2000),
//             ]
//         }),
//     },
// );


$(document).ready(function(){
    $(window).scroll(function(){
        var x = $("#aboutMe").offset();
        var height1 = $("#aboutMe").outerHeight();
        var y = document.documentElement.scrollTop;
        var z = ((x.top + height1) - y);
        if(z - 50 < $(window).height()){
            $('#aboutMe').css({
                'opacity': '1',
                'transform': 'translateX(0)',
            })
            $('#coverLine').css({
                'opacity': '0',
            })
        }else{
            $('#aboutMe').css({
                'opacity': '0',
                'transform': 'translateX(-150px)',
            })
            $('#coverLine').css({
                'opacity': '1',
            })
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        var x = $("#skillsText").offset();
        var height1 = $("#skillsText").outerHeight();
        var y = document.documentElement.scrollTop;
        var z = ((x.top + height1) - y);
        if(z + 100 < $(window).height()){
            $('#skillsText').css({
                'opacity': '1',
            })
        }else{
            $('#skillsText').css({
                'opacity': '0',
            })
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        var x = $("#html").offset();
        var height1 = $("#html").outerHeight();
        var y = document.documentElement.scrollTop;
        var z = ((x.top + height1) - y);
        if(z < $(window).height()){
            $('#html').css({
                'opacity': '1',
            })
        }else{
            $('#html').css({
                'opacity': '0',
            })
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        var x = $("#css").offset();
        var height1 = $("#css").outerHeight();
        var y = document.documentElement.scrollTop;
        var z = ((x.top + height1) - y);
        if(z < $(window).height()){
            $('#css').css({
                'opacity': '1',
            })
        }else{
            $('#css').css({
                'opacity': '0',
            })
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        var x = $("#javascript").offset();
        var height1 = $("#javascript").outerHeight();
        var y = document.documentElement.scrollTop;
        var z = ((x.top + height1) - y);
        if(z < $(window).height()){
            $('#javascript').css({
                'opacity': '1',
            })
        }else{
            $('#javascript').css({
                'opacity': '0',
            })
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        var x = $("#python").offset();
        var height1 = $("#python").outerHeight();
        var y = document.documentElement.scrollTop;
        var z = ((x.top + height1) - y);
        if(z < $(window).height()){
            $('#python').css({
                'opacity': '1',
            })
        }else{
            $('#python').css({
                'opacity': '0',
            })
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        var x = $("#react").offset();
        var height1 = $("#react").outerHeight();
        var y = document.documentElement.scrollTop;
        var z = ((x.top + height1) - y);
        if(z < $(window).height()){
            $('#react').css({
                'opacity': '1',
            })
        }else{
            $('#react').css({
                'opacity': '0',
            })
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        var x = $("#vue").offset();
        var height1 = $("#vue").outerHeight();
        var y = document.documentElement.scrollTop;
        var z = ((x.top + height1) - y);
        if(z < $(window).height()){
            $('#vue').css({
                'opacity': '1',
            })
        }else{
            $('#vue').css({
                'opacity': '0',
            })
        }
    });
});

$(document).ready(function(){
    $(window).scroll(function(){
        var x = $("#contactForm").offset();
        var height1 = $("#contactForm").outerHeight();
        var y = document.documentElement.scrollTop;
        var z = ((x.top + height1) - y);
        if(z - 320 < $(window).height()){
            $('#contactForm').css({
                'opacity': '1',
                'transform': 'translateX(0)'
            })
        }else{
            $('#contactForm').css({
                'opacity': '0',
                'transform': 'translateX(-200px)'
            })
        }
    });
});


if ($(window).width() > 1150) {
    $(document).ready(function(){
        $(window).scroll(function(){
            var x = $("#myWork").offset();
            var height1 = $("#myWork").outerHeight();
            var y = document.documentElement.scrollTop;
            var z = ((x.top + height1) - y);
            if(z - 300 < $(window).height()){
                $('#myWork').css({
                    'opacity': '1',
                })
            }else{
                $('#myWork').css({
                    'opacity': '0',
                })
            }
        });
    });
 }else{
    $(document).ready(function(){
        $(window).scroll(function(){
            var x = $("#myWork").offset();
            var height1 = $("#myWork").outerHeight();
            var y = document.documentElement.scrollTop;
            var z = ((x.top + height1) - y);
            if(z - 340 < $(window).height()){
                $('#myWork').css({
                    'opacity': '1',
                })
            }else{
                $('#myWork').css({
                    'opacity': '0',
                })
            }
        });
    });
 }





$.ajax({
    type: "GET",
    url: "/",
    success: function (response){
        document.getElementById('homeLoader').classList.add('hidden');
        console.log('Ok');
    },
    error: function(er){
      console.log('Not ok');  
    },
})