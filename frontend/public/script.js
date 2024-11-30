
window.onload = function() {
    window.setTimeout(function() { window.scrollTo(0, 0); }, 10);
};

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});

// Navbar Dropdown Color
$(document).ready(function() {
    $('.custom-toggler.navbar-toggler').click(function() {
        $('.navbar').toggleClass('mobile-navbar');
        $('.navbar-collapse').toggleClass('mobile-dropdown');
    });

// });

// Handling active for navbar options
var navbarItems = document.querySelectorAll('.navbar-nav .nav-link');
    
navbarItems.forEach(function(item) {
    item.addEventListener('click', function() {
        navbarItems.forEach(function(navbarItem) {
            navbarItem.classList.remove('active');
        });
        item.classList.add('active');
    });
});
});

    

$('.navbar-nav>li>a').on('click', function() {
    $('.navbar-collapse').collapse('hide');
});

