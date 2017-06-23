var cargarPagina = function () {
    setTimeout(function () {
        $('#yourElement').addClass('slideInLeft');
    }, 10000);


    // Initialize collapse button
    $(".button-collapse").sideNav();
    // Initialize collapsible (uncomment the line below if you use the dropdown variation)
    $('.collapsible').collapsible();

    $('.button-collapse').sideNav({
        menuWidth: "100%", // Default is 300
        edge: 'right', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true // Choose whether you can drag to open on touch screens
    });
}

var contador3 = 300;
var contador2 = 180;
var contador1 = 100;
var moverLetras = function () {



    if (window.scrollY < 250) {


        $("#u1").animate({
            top: "320px"
        })
        $("#m").animate({
            top: "320px"
        })
        $("#i").animate({
            top: "320px"
        })
        $("#g").animate({
            top: "320px"
        })
    } else if (window.scrollY > 100) {
        $("#u1").animate({
            top: "180px"
        })
        $("#m").animate({
            top: "180px"
        })
        $("#i").animate({
            top: "50px"
        })
        $("#g").animate({
            top: "50px"
        })


    }
}

$(document).ready(cargarPagina);
$(document).scroll(moverLetras);

//https://www.w3schools.com/w3css/w3css_templates.asp
