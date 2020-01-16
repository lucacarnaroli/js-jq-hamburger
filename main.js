// Creare un hamburger menu con l’utilizzo di
// Html, Css e JavaScript.

$('a').click(
  function visible() {
    $('.hamburger-menu').show()
  }
)

$('.close').click(
  function invisible(){
    $('.hamburger-menu').hide()
  }
)
