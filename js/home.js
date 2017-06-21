  // Initialize collapse button
  $(".button-collapse").sideNav();
  // Initialize collapsible (uncomment the line below if you use the dropdown variation)
  $('.collapsible').collapsible();

 $('.button-collapse').sideNav({
      menuWidth: "100%", // Default is 300
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
      draggable: true // Choose whether you can drag to open on touch screens
    }
  );


var cargarPagina = function(){
    setTimeout(function(){ $('#yourElement').addClass('slideInLeft'); }, 10000);
}

$(document).ready(cargarPagina);

//https://www.w3schools.com/w3css/w3css_templates.asp


