/*
* EPIC - Tailor-Made Coming Soon Template
* Build Date: April 2016
* Last Update: April 2016
* Author: Madeon08
* Copyright (C) 2016 Madeon08
* This is a premium product available exclusively here : http://themeforest.net/user/Madeon08/portfolio
*/

/*  TABLE OF CONTENTS
    ---------------------------
    1. Loading / Opening
    2. Portfolio grid
    3. Countdown
    4. Parallax
    5. Portfolio hovering
    6. Smooth scroll
    7. Newsletter init
*/

/* ------------------------------------- */
/* 1. Loading / Opening ................ */
/* ------------------------------------- */

$(window).load(function(){
    "use strict";

    setTimeout(function(){

        $("#loading").fadeOut(800);
        $("body").css("overflow","auto");

    },1000);

});

/* ------------------------------------- */
/* 2. Portfolio grid ................... */
/* ------------------------------------- */

$(window).on( 'resize', function () {
    "use strict";

    if ( $(this).width() > 1024 ) {
        $('.wide').height( $(window).width() / 2 );
        $('.small').height( $(window).width() / 4 );
    }
    else {
        $('.wide').height( $(window).width() / 1 );
        $('.small').height( $(window).width() / 1 );
    }

}).resize();

$(document).ready(function(){
    "use strict";

    /* ------------------------------------- */
    /* 3. Countdown ........................ */
    /* ------------------------------------- */
    $("#getting-started")
        // Year/Month/Day Hour:Minute:Second
        .countdown("2017/01/01 00:00:00", function(event) {
            $(this).html(
                event.strftime('%Dd %Hh %Mm %Ss')
            );
    });

    /* ------------------------------------- */
    /* 4. Parallax ......................... */
    /* ------------------------------------- */

    var onMobile = false;

    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) { onMobile = true; }

    if( ( onMobile === false ) ) {
        $(window).scroll( function() {

            var scroll = $(window).scrollTop(),
            fastScroll = - scroll/6;

            $('.parallax-div').css({ transform: "translate3d( 0, " + fastScroll + "px, 0) scale3d( 1, 1, 1 )" });

            var target = $('.parallax-div');
            var targetHeight = target.outerHeight();

            var scrollPercent = (targetHeight - window.scrollY) / targetHeight;
            if(scrollPercent >= 0){
                target.css('opacity', scrollPercent);
            }

        });

    } else {
        // Hiding stars animation on mobile devices for performance reasons
        $("#stars, #stars2, #stars3").hide();
    }

    // Tooltips used on only from 1025px
    if (window.matchMedia("(min-width: 1025px)").matches) {

        $(function () { $("[data-toggle='tooltip']").tooltip(); });

    }

    /* ------------------------------------- */
    /* 5. Portfolio hovering ............... */
    /* ------------------------------------- */

    $('.gallery-link')

        // Mouse hovering actions
        .on('mouseover', function(){
            $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
        })

        .on('mouseout', function(){
            $(this).children('.photo').css({'transform': 'scale(1)'});
        })

        .on('mousemove', function(e){
            $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
        })

        // Background set up
        .each(function(){
        $(this)
        // Add a photo container
        .append('<div class="photo"></div>')
        // Set up a background image for each link based on data-image attribute
        .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
    });


    /* ------------------------------------- */
    /* 6. Smooth scroll .................... */
    /* ------------------------------------- */

    var $root = $('html, body');
    $('a').on('click', function(){
        $root.animate({
            scrollTop: $( $.attr(this, 'href') ).offset().top
        }, 1200, 'easeInOutCubic');
        return false;
    });

    /* ------------------------------------- */
    /* 7. Newsletter init .................. */
    /* ------------------------------------- */

    $("#notifyMe").notifyMe();

});
