document.addEventListener('DOMContentLoaded', function() {

    var navLinks = document.querySelectorAll('nav a');


    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            var targetPage = link.getAttribute('href');
            navigateTo(targetPage);
        });
    });


    function navigateTo(page) {

        window.location.href = page;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const body = document.body;


    function toggleLightMode() {
        body.classList.toggle('light-mode');
    }


    const toggleButton = document.getElementById('toggle-mode-button');
    if (toggleButton) {
        toggleButton.addEventListener('click', toggleLightMode);
    }
});

function toggle_heart(){
    var toggleLike = document.getElementById('heart');
    document.body.classList.toggle("change-like");
};

let start =0;
document.getElementById("heart").onclick=function(){
    start^=1;
    document.getElementById("like-count").innerHTML=start;
    toggle_heart();
}



