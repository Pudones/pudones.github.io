// When the user scrolls down 50px from the top of the document, resize the header's font size
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {

  const elementHeader = document.querySelector(".header");
  const elementHeaderTitle = document.querySelector(".header-title-link");


  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    elementHeader.classList.add("header--shrink");
    elementHeaderTitle.classList.add("header-title--shrink");
  } 
  else {
    elementHeader.classList.remove("header--shrink");
    elementHeaderTitle.classList.remove("header-title--shrink");
  }
}