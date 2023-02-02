$(document).ready(function(){
    var $choose = $('#choose');
    $(window).scroll(function(){
        var scroll = $(window).scrollTop();
        $choose.css({
            'transform': 'translate3d(0, '+ scroll /10 +'%, 0)'
        });
    });
});
const chooseEl = document.querySelector("#choose");

chooseEl.addEventListener("animationend", () => {
  chooseEl.classList.add("parallax");
});
