// Creare un hamburger menu con l’utilizzo di
// Html, Css e JavaScript.

$('i').click(
  function visible() {
    $('.hamburger-menu').show(1000)
  }
)

$('.close').click(
  function invisible(){
    $('.hamburger-menu').hide(500)
  }
)
