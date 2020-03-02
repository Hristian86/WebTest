// MDB Lightbox Init
$(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
  });

$(document).ready(function(){
    $('.menu').click(function(){
        $('.list').toggleClass('active')
    })
})

function func(){
  const x = document.getElementById('hide');
  if (x.style.display == 'block') {
    x.style.display = 'none';
  }else{
    x.style.display = 'block';
  }
  
  


}


// MDB Lightbox Init
$(function () {
  $("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
  });

// window.onscroll = function() {myFunction()};

// var navbar = document.getElementById("navbar");
// var sticky = navbar.offsetTop;

// function myFunction() {
//   if (window.pageYOffset >= sticky) {
//     navbar.classList.add("sticky")
//   } else {
//     navbar.classList.remove("sticky");
//   }
// };